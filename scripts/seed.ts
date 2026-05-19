import { createClient } from "@supabase/supabase-js";
import OpenAI from "openai";
import * as dotenv from "dotenv";

// .env 파일 환경변수 로드
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const openAiKey = process.env.OPENAI_API_KEY;

if (!supabaseUrl || !supabaseKey || !openAiKey) {
  console.error("환경변수(.env)에 SUPABASE_URL, SUPABASE_ANON_KEY, OPENAI_API_KEY가 모두 설정되어 있어야 합니다.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);
const openai = new OpenAI({ apiKey: openAiKey });

async function seedData(content: string) {
  try {
    console.log(`"${content.substring(0, 20)}..." 임베딩(벡터) 변환 중...`);
    
    // 1. OpenAI로 텍스트를 벡터로 변환
    const embeddingResponse = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: content,
    });
    
    const embedding = embeddingResponse.data[0].embedding;

    // 2. 변환된 벡터와 텍스트를 Supabase에 저장
    const { error } = await supabase.from('documents').insert({
      content: content,
      embedding: embedding
    });

    if (error) {
      console.error("Supabase 저장 에러:", error);
    } else {
      console.log("-> 성공적으로 저장되었습니다!");
    }
  } catch (err) {
    console.error("에러 발생:", err);
  }
}

async function main() {
  console.log("데이터 마이그레이션 시작...");
  
  // 여기에 AI 챗봇이 알고 있어야 할 지식(데이터)을 추가하세요.
  const knowledgeBase = [
    "아이파트너즈는 단순한 도구를 넘어, 기업의 역량을 증폭시키는 지능형 워크플로우를 구축하는 AI 혁신 플랫폼 기업입니다.",
    "아이파트너즈의 NX Agent Architecture는 실무자와 AI가 완벽하게 조율된 미래의 근무 환경을 제안합니다.",
    "당사의 주요 솔루션으로는 AI 프롬프트 라이브러리, UX 휴리스틱 평가 시스템, 맥락 기반 프롬프트 엔지니어링 등이 있습니다."
  ];

  for (const text of knowledgeBase) {
    await seedData(text);
  }
  
  console.log("모든 데이터 저장 완료!");
}

main();
