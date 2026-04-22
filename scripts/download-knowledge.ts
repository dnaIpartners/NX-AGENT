import fs from 'fs';
import path from 'path';

const categories = [
  'contextual-prompt-engineering',
  'ai-ux-heuristic-evaluation',
  'glossary-of-ai-ux-interaction'
];

async function download(url: string, dest: string) {
  try {
    const resp = await fetch(url);
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const buffer = await resp.arrayBuffer();
    fs.writeFileSync(dest, Buffer.from(buffer));
    console.log(`Saved: ${dest} (${buffer.byteLength} bytes)`);
  } catch (err) {
    console.error(`Failed to download ${url}:`, err);
  }
}

async function run() {
  for (const cat of categories) {
    const dir = path.join(process.cwd(), 'public', 'asset', cat);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    for (let i = 1; i <= 9; i++) {
        const dest = path.join(dir, `${i}.jpg`);
        const url = `https://picsum.photos/seed/${cat}-${i}/800/400`;
        await download(url, dest);
    }
  }
}

run();
