// Prerender script — runs after vite build to generate static HTML for each route
// Usage: node scripts/prerender.mjs

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, '..', 'dist');
const serverDistPath = path.resolve(distPath, 'server');

const routes = [
  '/',
  '/construction-company-ujjain',
  '/interior-designer-ujjain',
  '/real-estate-ujjain',
  '/contact',
];

async function prerender() {
  // Use file:// URL for Windows compatibility
  const serverEntryPath = pathToFileURL(path.resolve(serverDistPath, 'entry-server.js')).href;
  const { render } = await import(serverEntryPath);

  // Read the client-side HTML template
  const template = fs.readFileSync(path.resolve(distPath, 'index.html'), 'utf-8');

  console.log('\n🔨 Prerendering routes...\n');

  for (const route of routes) {
    try {
      const appHtml = render(route);

      // Inject rendered HTML into the template
      const finalHtml = template.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );

      // Write output
      if (route === '/') {
        fs.writeFileSync(path.resolve(distPath, 'index.html'), finalHtml);
      } else {
        const routeDir = path.resolve(distPath, route.substring(1));
        fs.mkdirSync(routeDir, { recursive: true });
        fs.writeFileSync(path.resolve(routeDir, 'index.html'), finalHtml);
      }

      console.log(`  ✅ ${route}`);
    } catch (err) {
      console.error(`  ❌ ${route}: ${err.message}`);
    }
  }

  console.log('\n✨ Prerendering complete!\n');
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
