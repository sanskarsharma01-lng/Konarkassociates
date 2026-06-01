// Prerender script — runs after vite build to generate static HTML for each route
// Usage: node scripts/prerender.mjs

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, '..', 'dist');
const serverDistPath = path.resolve(distPath, 'server');

const SITE_URL = 'https://konarkassociates.com';

// Per-route SEO metadata
const routeMeta = {
  '/': {
    title: 'Konark Associates | Construction Company & Interior Designer in Ujjain, Indore, Barnagar',
    description: 'Top-rated construction company, interior designer & builder in Ujjain, Indore & Barnagar. House construction, commercial construction, bungalow construction, residential building construction with material supply & complete interior work. 5★ rated. Call 098279 53774.',
    canonical: `${SITE_URL}/`,
  },
  '/construction-company-ujjain': {
    title: 'Construction Company in Ujjain, Indore & Barnagar | Konark Associates',
    description: 'Top-rated construction company and building contractor in Ujjain, Indore & Barnagar. We specialize in residential & commercial construction, bungalow building, and construction with material supply. Call 098279 53774.',
    canonical: `${SITE_URL}/construction-company-ujjain/`,
  },
  '/interior-designer-ujjain': {
    title: 'Interior Designer in Ujjain, Indore & Barnagar | Konark Associates',
    description: 'Best interior designer in Ujjain, Indore & Barnagar. We offer complete interior design, modular kitchen, wardrobe design, and 3D rendering services. Transform your home today.',
    canonical: `${SITE_URL}/interior-designer-ujjain/`,
  },
  '/real-estate-ujjain': {
    title: 'Real Estate Buy & Sell in Ujjain, Indore & Barnagar | Konark Associates',
    description: 'Looking for property in Ujjain, Indore or Barnagar? We offer premium real estate services for buying and selling residential and commercial properties.',
    canonical: `${SITE_URL}/real-estate-ujjain/`,
  },
  '/contact': {
    title: 'Contact Konark Associates | Construction & Interior Design in Ujjain',
    description: 'Contact Konark Associates for construction, interior design, and real estate services in Ujjain, Indore, and Barnagar. Call 098279 53774.',
    canonical: `${SITE_URL}/contact/`,
  },
};

const routes = Object.keys(routeMeta);

/**
 * Replace SEO meta tags in the HTML template with route-specific values.
 * This ensures Googlebot (which may not run JS) sees correct metadata.
 */
function injectRouteMeta(html, route) {
  const meta = routeMeta[route];
  if (!meta) return html;

  // Replace <title>
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(meta.title)}</title>`
  );

  // Replace <meta name="description">
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeAttr(meta.description)}" />`
  );

  // Replace <link rel="canonical">
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${escapeAttr(meta.canonical)}" />`
  );

  // Replace <meta property="og:url">
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${escapeAttr(meta.canonical)}" />`
  );

  // Replace <meta property="og:title">
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeAttr(meta.title)}" />`
  );

  // Replace <meta property="og:description">
  html = html.replace(
    /<meta\s+property="og:description"[\s\S]*?\/>/,
    `<meta property="og:description" content="${escapeAttr(meta.description)}" />`
  );

  // Replace <meta name="twitter:title">
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escapeAttr(meta.title)}" />`
  );

  // Replace <meta name="twitter:description">
  html = html.replace(
    /<meta\s+name="twitter:description"[\s\S]*?\/>/,
    `<meta name="twitter:description" content="${escapeAttr(meta.description)}" />`
  );

  return html;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeAttr(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

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
      let finalHtml = template.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );

      // Inject route-specific SEO meta tags
      finalHtml = injectRouteMeta(finalHtml, route);

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
