import fs from 'fs';
import path from 'path';

const images = [
  { url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop', name: 'blog-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=600&auto=format&fit=crop', name: 'blog-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop', name: 'blog-3.jpg' },
  { url: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=600&auto=format&fit=crop', name: 'blog-4.jpg' },
  { url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600&auto=format&fit=crop', name: 'blog-5.jpg' },
  { url: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=600&auto=format&fit=crop', name: 'blog-6.jpg' },
  { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop', name: 'blog-7.jpg' },
  { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop', name: 'blog-8.jpg' },
  { url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop', name: 'blog-9.jpg' },
];

async function run() {
  const dir = path.join(process.cwd(), 'public', 'asset');

  for (const img of images) {
    console.log(`Downloading ${img.name}...`);
    try {
      const resp = await fetch(img.url);
      const buffer = await resp.arrayBuffer();
      fs.writeFileSync(path.join(dir, img.name), Buffer.from(buffer));
      console.log(`Finished ${img.name}, size: ${buffer.byteLength}`);
    } catch (e) {
      console.error(`Failed ${img.name}:`, e);
    }
  }
}

run();
