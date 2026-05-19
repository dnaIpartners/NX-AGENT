import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Chat endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { message } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      // Check environment variables
      if (!process.env.OPENAI_API_KEY || !process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
        // Return a mock response for UI demonstration until keys are provided
        setTimeout(() => {
          res.json({
            reply: "(Supabase 및 OpenAI API 키가 설정되지 않아 응답을 생성하지 못했습니다. 환경 변수를 설정해주세요.)",
          });
        }, 1000);
        return;
      }

      const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
      const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

      // 1. Generate embedding for user's question
      const embeddingResponse = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: message,
      });
      const embedding = embeddingResponse.data[0].embedding;

      // 2. Query Supabase for relevant content (assuming a 'documents' table with an 'embedding' column)
      // Note: You need an RPC function like 'match_documents' in Supabase to calculate cosine similarity.
      
      // 먼저 documents 테이블에 전체 데이터가 몇 개인지 확인 (디버깅 용도)
      const { count: totalDocs } = await supabase.from('documents').select('*', { count: 'exact', head: true });
      
      const { data: documents, error } = await supabase.rpc("match_documents", {
        query_embedding: embedding,
        match_threshold: 0.3, // 0.7에서 0.3으로 낮춰서 테스트
        match_count: 5,
      });

      if (error) {
        console.warn("Supabase query error:", error);
        return res.json({
          reply: "(테스트 응답) Supabase 데이터베이스에 'match_documents' 벡터 검색 함수가 설정되지 않아, 검색 없이 기본 응답을 반환합니다. 실제 운영을 위해 Supabase DB 설정을 완료해주세요.",
        });
      }

      // 3. Construct context
      let contextText = "";
      if (documents && documents.length > 0) {
        contextText = documents.map((doc: any) => doc.content).join("\n\n");
      }
      
      console.log(`[DB검색] 전체 문서 수: ${totalDocs}, 유사한 문서 수: ${documents?.length || 0}`);

      // 4. Generate response using OpenAI Chat
      const chatCompletion = await openai.chat.completions.create({
        model: "gpt-4o-mini", // or gpt-4o
        messages: [
          {
            role: "system",
            content: `# 역할 및 개요
당신은 '챗봇'이라는 이름의 저장된 지식문서를 기반으로 질문자에게 정보를 제공하기 위한 전문 AI 상담 도우미입니다. 당신의 임무는, 내부 문서에서만 찾을 수 있는 최신·정확한 정보만을 활용해, 사용자에게 신뢰할 수 있는 답을 제공하는 것입니다. 
사적인 견해나 추측 없이, 오직 가이드/매뉴얼/FAQ/운영·제품 문서 등에서 근거를 추출해 설명합니다. 

# 목표
당신의 궁극적 목표는, 제공된 복띵 관련 매뉴얼 및 브랜드 공식 문서에서 **명확히 근거가 확인되는 정보만을 근거로** 사용자 질의에 정확하게 답변하는 것입니다. 

# 지침
당신은 RAG(Retrieval-Augmented Generation) 기반으로 동작합니다. 
사용자 질문이 들어오면, Think 도구를 통해서 작업을 수행하기 전 과 도중에 검색어, 사용한 검색 도구, 검색결과의 적절성, 그 다음 행동에 대한 생각을 합니다.
그에 맞춰서 내부/공식 문서의 벡터 데이터베이스(Retrieve Documents, Search Web)에서 적합한 내용을 검색(조회)하여, 아래 규칙을 반드시 따릅니다.
문서 검색을 하고 답변을 찾지 못한 경우 웹 검색 도구를 사용해서 적절한 내용이 나올때까지 2-3차례 검색을 진행을 더 할수 있습니다.

- 단일 진실의 원칙:
  답변은 무조건 제공된 내부 문서 정보만에서 도출되어야 하며,
  문서에 근거 없는 추가 설명·해석·추천·추측은 금지합니다.

- 정확성 및 암시적 인용:
  문서의 내용을 가감 없이 최대한 "있는 그대로" 쓰되,
  정보를 더 명확하게 다듬어 명료하게 전달합니다.
  단, 문서를 벗어난 사견/지식/예시는 절대 포함하면 안 됩니다.
  본인은 내부 문서에 대해 아는 전문가처럼 행동합니다.

- 툴 및 RAG 언급 금지:
  툴이나 데이터 검색 과정, RAG 시스템임을 설명하거나 언급하지 않습니다.
  오직 공식 상담원처럼 행동하고, 내부문서의 신뢰성만 강조하세요.

- 명확성:
  간결하고, 핵심만을 바로 설명합니다.

- 구조화:
  문서에 단계, 절차, 목록, 예시, 표, 안내 메시지가 있으면
  불릿/순서 목록 · 간결 문단 · 마크다운 표 · 코드 블록 등
  Markdown 형식으로 보기 좋게 정돈합니다.

- 어조:
  신뢰감 있고 전문적이며, 친절하게 답변합니다.
  불확실하거나, 문서에 없는 정보는 "공식 문서에 근거 정보가 확인되지 않습니다."
  처럼 단호하게 안내합니다.

# 사용가능한 도구
- Retrieve Documents : 질문과 유관한 저장된 문서를 조회합니다.
- Think : 검색어, 사용한 검색 도구, 검색결과의 적절성, 그 다음 행동에 대한 생각을 합니다.

# 검색된 내부 문서 (Context)
${contextText}`,
          },
          {
            role: "user",
            content: message,
          },
        ],
      });

      res.json({
        reply: chatCompletion.choices[0]?.message?.content || "응답을 생성할 수 없습니다.",
      });

    } catch (error: any) {
      console.error("Chat API Error:", error);
      res.status(500).json({ error: error.message || "Something went wrong" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
