import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoryPath = path.join(__dirname, 'src');
const indexPath = path.join(__dirname, 'index.html');

const replacements = [
  { search: /bg-softgrey-900\/60/g, replace: 'bg-black/60' },
  { search: /bg-softgrey-900/g, replace: 'bg-[#B497CF]' },
  { search: /text-white/g, replace: 'text-zinc-950' },
  { search: /text-softgrey-900/g, replace: 'text-zinc-100' },
  { search: /text-softgrey-800/g, replace: 'text-zinc-200' },
  { search: /text-softgrey-700/g, replace: 'text-zinc-300' },
  { search: /text-softgrey-600/g, replace: 'text-zinc-400' },
  { search: /text-softgrey-500/g, replace: 'text-zinc-400' },
  { search: /text-softgrey-400/g, replace: 'text-zinc-500' },
  { search: /text-softgrey-300/g, replace: 'text-zinc-600' },
  
  { search: /bg-softgrey-50/g, replace: 'bg-zinc-900/50' },
  { search: /bg-softgrey-100/g, replace: 'bg-zinc-800/60' },
  { search: /bg-softgrey-200\/50/g, replace: 'bg-[#B497CF]/10' },
  { search: /bg-softgrey-200/g, replace: 'bg-zinc-800' },
  
  { search: /border-softgrey-200\/90/g, replace: 'border-zinc-800/90' },
  { search: /border-softgrey-200\/80/g, replace: 'border-zinc-800/80' },
  { search: /border-softgrey-200/g, replace: 'border-zinc-800' },
  { search: /border-softgrey-300\/80/g, replace: 'border-zinc-700/80' },
  { search: /border-softgrey-300/g, replace: 'border-zinc-700' },
  { search: /border-softgrey-400/g, replace: 'border-zinc-600' },
  { search: /border-softgrey-700/g, replace: 'border-zinc-700' },

  { search: /hover:bg-softgrey-100/g, replace: 'hover:bg-zinc-800' },
  { search: /hover:bg-softgrey-200/g, replace: 'hover:bg-zinc-700' },
  { search: /hover:bg-softgrey-800/g, replace: 'hover:bg-[#9f80ba]' },
  { search: /hover:border-softgrey-400/g, replace: 'hover:border-[#B497CF]' },
  { search: /hover:border-softgrey-300/g, replace: 'hover:border-[#B497CF]/50' },
  { search: /hover:text-softgrey-900/g, replace: 'hover:text-[#B497CF]' },
  { search: /hover:text-softgrey-800/g, replace: 'hover:text-zinc-100' },
  { search: /hover:text-softgrey-600/g, replace: 'hover:text-[#B497CF]' },
  
  { search: /bg-cream-50\/85/g, replace: 'bg-[#0a0a0a]/85' },
  { search: /bg-cream-50/g, replace: 'bg-[#0a0a0a]' },
  { search: /bg-cream-100\/50/g, replace: 'bg-[#121212]' },
  { search: /bg-cream-200\/60/g, replace: 'bg-[#B497CF]/10' },

  { search: /bg-white\/80/g, replace: 'bg-zinc-900/80' },
  { search: /bg-white\/95/g, replace: 'bg-zinc-900/95' },
  { search: /bg-white/g, replace: 'bg-zinc-900' },
  { search: /border-white/g, replace: 'border-zinc-800' },
  
  { search: /text-emerald-500/g, replace: 'text-[#B497CF]' },
  { search: /text-emerald-400/g, replace: 'text-[#B497CF]' },
  { search: /bg-emerald-400/g, replace: 'bg-[#B497CF]' },
  { search: /bg-emerald-500/g, replace: 'bg-[#B497CF]' },
  { search: /bg-emerald-50/g, replace: 'bg-[#B497CF]/10' },
  { search: /text-emerald-600/g, replace: 'text-[#B497CF]' },
  { search: /hover:border-emerald-300/g, replace: 'hover:border-[#B497CF]' },
  { search: /hover:text-emerald-500/g, replace: 'hover:text-[#B497CF]' }
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;
  
  for (const { search, replace } of replacements) {
    newContent = newContent.replace(search, replace);
  }
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      processFile(fullPath);
    }
  }
}

processDirectory(directoryPath);

let indexContent = fs.readFileSync(indexPath, 'utf8');
indexContent = indexContent.replace(/bg-cream-50/g, 'bg-[#0a0a0a]');
indexContent = indexContent.replace(/text-softgrey-900/g, 'text-zinc-100');
indexContent = indexContent.replace(/selection:bg-softgrey-200/g, 'selection:bg-[#B497CF]');
indexContent = indexContent.replace(/selection:text-softgrey-900/g, 'selection:text-zinc-950');
fs.writeFileSync(indexPath, indexContent, 'utf8');
console.log('Updated index.html');

console.log('Theme update complete!');
