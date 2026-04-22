import fs from 'fs';
import path from 'path';

function checkSizes(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
      console.log(`Directory not found: ${dirPath}`);
      return;
  }
  const files = fs.readdirSync(dirPath);
  for (const f of files) {
    const fullPath = path.join(dirPath, f);
    const stat = fs.statSync(fullPath);
    console.log(`${fullPath}: ${stat.size} bytes`);
  }
}

const baseDir = path.join(process.cwd(), 'public', 'asset');
const dirs = ['blog', 'contextual-prompt-engineering', 'ai-ux-heuristic-evaluation', 'glossary-of-ai-ux-interaction'];

for (const d of dirs) {
    console.log(`\nChecking ${d}:`);
    checkSizes(path.join(baseDir, d));
}
