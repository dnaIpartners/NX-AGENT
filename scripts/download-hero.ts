import fs from 'fs';
import path from 'path';

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
  const dest = path.join(process.cwd(), 'public', 'asset', 'blog', 'hero.jpg');
  const url = `https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop`;
  await download(url, dest);
}

run();
