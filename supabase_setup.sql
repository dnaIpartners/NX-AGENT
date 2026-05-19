-- 1. pgvector 익스텐션 활성화 (벡터 연산을 위해 필요)
create extension if not exists vector;

-- 2. 문서와 임베딩(벡터 데이터)을 저장할 테이블 생성 (이미 존재하는 경우 생성하지 않음)
create table if not exists documents (
  id bigserial primary key,
  content text,     -- 질문에 답변할 때 참고할 실제 텍스트 내용
  embedding vector(1536) -- OpenAI 임베딩 차원수 (text-embedding-3-small, text-embedding-ada-002 기준)
);

-- 3. 유사도 검색을 위한 Postgres 함수 생성 (RPC)
create or replace function match_documents (
  query_embedding vector(1536),
  match_threshold float,
  match_count int
)
returns table (
  id bigint,
  content text,
  similarity float
)
language sql stable
as $$
  select
    documents.id,
    documents.content,
    1 - (documents.embedding <=> query_embedding) as similarity
  from documents
  where 1 - (documents.embedding <=> query_embedding) > match_threshold
  order by similarity desc
  limit match_count;
$$;

-- 4. 더 빠른 검색을 위한 인덱스 생성
-- ivfflat 인덱스 생성 시 메모리 부족 에러가 발생하므로 세션 메모리를 일시적으로 늘려줍니다.
SET maintenance_work_mem = '256MB';

create index if not exists documents_embedding_idx on documents using ivfflat (embedding vector_cosine_ops)
with (lists = 100);

-- (참고) 만약 최신 버전의 pgvector를 사용 중이라면, 위 ivfflat 대신 아래의 hnsw 인덱스를 사용하는 것이 더 효율적이고 위 메모리 에러가 발생하지 않을 수 있습니다.
-- create index if not exists documents_embedding_idx on documents using hnsw (embedding vector_cosine_ops);

-- 5. 읽기 접근 권한(RLS) 허용 (중요: 이 부분이 설정되지 않으면 프론트엔드/백엔드 서버에서 데이터를 읽을 수 없습니다)
alter table documents enable row level security;

-- 누구나 읽기 가능하도록 허용하는 정책
create policy "Enable read access for all" on documents 
for select using (true);

-- 서버에서 Anon 키를 통해 데이터를 입력하려면 아래 설정도 필요합니다. (또는 Service Role 키를 사용해야 함)
create policy "Enable insert access for all" on documents 
for insert with check (true);

