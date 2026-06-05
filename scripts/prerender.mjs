// Prerender script — runs after vite build to generate static HTML for each route
// Usage: node scripts/prerender.mjs

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, '..', 'dist');
const serverDistPath = path.resolve(distPath, 'server');

const SITE_URL = 'https://konarkassociates.com';

// Import project data for dynamic route generation
const projectDataPath = pathToFileURL(path.resolve(serverDistPath, 'entry-server.js')).href;
// We'll parse project IDs from the data file directly
const projectDataSrc = fs.readFileSync(path.resolve(__dirname, '..', 'src', 'data', 'projectsData.js'), 'utf-8');
const projectIds = [...projectDataSrc.matchAll(/id:\s*'([^']+)'/g)].map(m => m[1]);
const projectTitles = [...projectDataSrc.matchAll(/title:\s*'([^']+)'/g)].map(m => m[1]);
const projectCategories = [...projectDataSrc.matchAll(/category:\s*'([^']+)'/g)].map(m => m[1]);
const projectDescriptions = [...projectDataSrc.matchAll(/description:\s*\n?\s*'([^']+)'/g)].map(m => m[1].slice(0, 155) + '…');

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

// Dynamically add project detail routes
for (let i = 0; i < projectIds.length; i++) {
  const route = `/project/${projectIds[i]}`;
  routeMeta[route] = {
    title: `${projectTitles[i]} | Konark Associates — ${projectCategories[i]} Project`,
    description: projectDescriptions[i] || `View ${projectTitles[i]} — a premium ${projectCategories[i].toLowerCase()} project by Konark Associates in Ujjain, Indore & Barnagar.`,
    canonical: `${SITE_URL}/project/${projectIds[i]}/`,
  };
}

// Per-route additional JSON-LD schemas (injected as extra <script> tags)
const routeSchemas = {
  '/': [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://konarkassociates.com/#faq",
      "mainEntity": [
        { "@type": "Question", "name": "What is the cost of house construction in Ujjain?", "acceptedAnswer": { "@type": "Answer", "text": "The cost of house construction in Ujjain typically ranges from ₹1,200 to ₹2,500 per square foot, depending on the type of construction, materials used, and design complexity. Konark Associates offers transparent pricing with detailed cost breakdowns. Contact us at 098279 53774 for a free estimate." } },
        { "@type": "Question", "name": "What is the cost of interior design in Ujjain?", "acceptedAnswer": { "@type": "Answer", "text": "Interior design costs in Ujjain typically range from ₹800 to ₹2,000 per square foot, depending on the scope of work, material quality, and design complexity. We provide detailed quotations with transparent pricing for homes and commercial spaces." } },
        { "@type": "Question", "name": "Do you provide construction with material supply?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Konark Associates offers complete construction with material supply. We handle everything from sourcing premium-quality cement, steel, bricks, and sand to managing skilled labor, providing a hassle-free building experience." } },
        { "@type": "Question", "name": "Which areas do you serve?", "acceptedAnswer": { "@type": "Answer", "text": "We serve Ujjain, Indore, Barnagar, and surrounding areas in Madhya Pradesh, India. Our team handles residential, commercial, and interior design projects across these regions." } },
        { "@type": "Question", "name": "How long does house construction take?", "acceptedAnswer": { "@type": "Answer", "text": "A standard residential house construction typically takes 8 to 14 months, depending on the size, design complexity, and weather conditions. We follow strict timelines with regular progress updates." } },
        { "@type": "Question", "name": "Do you provide 3D design before starting work?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we provide detailed 3D design renderings and walkthroughs for both construction elevations and interior designs. This allows you to visualize the exact outcome before execution begins." } }
      ]
    }
  ],
  '/construction-company-ujjain': [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Construction Company in Ujjain, Indore & Barnagar",
      "provider": { "@id": "https://konarkassociates.com/#organization" },
      "url": "https://konarkassociates.com/construction-company-ujjain/",
      "description": "Top-rated construction company and building contractor in Ujjain, Indore & Barnagar specializing in residential & commercial construction, bungalow building, and construction with material supply.",
      "areaServed": ["Ujjain", "Indore", "Barnagar"],
      "serviceType": ["Residential Construction", "Commercial Construction", "Bungalow Construction", "Construction with Material Supply", "Building Planning & Elevation"]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is the cost of house construction in Ujjain?", "acceptedAnswer": { "@type": "Answer", "text": "The cost of house construction in Ujjain typically ranges from ₹1,200 to ₹2,500 per square foot, depending on the type of construction, materials used, and design complexity. At Konark Associates, we offer transparent pricing with detailed cost breakdowns. Contact us at 098279 53774 for a free estimate tailored to your project." } },
        { "@type": "Question", "name": "Do you provide construction with material supply?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we offer complete construction with material supply services. We handle everything from sourcing premium-quality cement, steel, bricks, sand, and other building materials to managing skilled labor. You get a hassle-free, single-point-of-contact building experience with guaranteed material quality." } },
        { "@type": "Question", "name": "How long does it take to construct a house in Ujjain?", "acceptedAnswer": { "@type": "Answer", "text": "A standard residential house construction in Ujjain typically takes 8 to 14 months, depending on the size, design complexity, and weather conditions. Our team follows strict timelines with regular progress updates, ensuring on-time delivery." } },
        { "@type": "Question", "name": "What types of construction projects do you handle?", "acceptedAnswer": { "@type": "Answer", "text": "We handle residential buildings, commercial complexes, bungalows, row houses, farmhouses, and renovation projects. Whether it's a single-floor home or a multi-story commercial building, our experienced team of civil engineers delivers excellence across Ujjain, Indore, and Barnagar." } },
        { "@type": "Question", "name": "Do you provide construction drawings and 3D elevation designs?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we provide complete architectural planning services including 2D floor plans, 3D elevation designs, structural drawings, and MEP layouts. Our design team creates detailed blueprints so you can visualize your project before construction begins." } },
        { "@type": "Question", "name": "Why should I choose Konark Associates for construction?", "acceptedAnswer": { "@type": "Answer", "text": "Konark Associates is a 5-star rated construction company with over 100 completed projects across Ujjain, Indore, and Barnagar. We offer transparent pricing, premium quality materials, experienced civil engineers, strict timeline adherence, and complete construction with material supply." } }
      ]
    }
  ],
  '/interior-designer-ujjain': [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Interior Designer in Ujjain, Indore & Barnagar",
      "provider": { "@id": "https://konarkassociates.com/#organization" },
      "url": "https://konarkassociates.com/interior-designer-ujjain/",
      "description": "Best interior designer in Ujjain, Indore & Barnagar offering complete interior design, modular kitchen, wardrobe design, and 3D rendering services.",
      "areaServed": ["Ujjain", "Indore", "Barnagar"],
      "serviceType": ["Complete Interior Design", "Modular Kitchen Design", "Wardrobe Design", "Living Room Design", "3D Design Rendering", "Commercial Interior Design"]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is the cost of interior design in Ujjain?", "acceptedAnswer": { "@type": "Answer", "text": "Interior design costs in Ujjain typically range from ₹800 to ₹2,000 per square foot, depending on the scope of work, material quality, and design complexity. At Konark Associates, we provide detailed quotations with transparent pricing." } },
        { "@type": "Question", "name": "Do you provide 3D design before starting interior work?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we provide detailed 3D design renderings and walkthroughs before any execution begins. This allows you to see exactly how your space will look after completion and make changes before we start work." } },
        { "@type": "Question", "name": "What types of interior design services do you offer?", "acceptedAnswer": { "@type": "Answer", "text": "We offer complete home interiors, modular kitchen design, wardrobe and storage solutions, living room and bedroom design, false ceiling work, custom furniture design, kids room design, and commercial interior design for offices and showrooms." } },
        { "@type": "Question", "name": "How long does interior design work take to complete?", "acceptedAnswer": { "@type": "Answer", "text": "A single room like a modular kitchen typically takes 15 to 25 days. Complete home interiors for a 2BHK take about 45 to 60 days, while a 3BHK or larger home may take 60 to 90 days." } },
        { "@type": "Question", "name": "Do you handle both residential and commercial interior design?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we handle both. For homes, we design living rooms, bedrooms, kitchens, and bathrooms. For commercial spaces, we design offices, showrooms, clinics, restaurants, and retail stores across Ujjain, Indore, and Barnagar." } },
        { "@type": "Question", "name": "Can I choose my own materials and designs?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely! We work closely with you to select materials, colors, finishes, and designs. We provide curated material options from trusted suppliers, and you have full control over every design decision. Our 3D renderings help you visualize options before finalizing." } }
      ]
    }
  ],
  '/real-estate-ujjain': [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Real Estate Services in Ujjain, Indore & Barnagar",
      "provider": { "@id": "https://konarkassociates.com/#organization" },
      "url": "https://konarkassociates.com/real-estate-ujjain/",
      "description": "Premium real estate services for buying and selling residential and commercial properties in Ujjain, Indore, and Barnagar.",
      "areaServed": ["Ujjain", "Indore", "Barnagar"],
      "serviceType": ["Property Buy & Sell", "Residential Real Estate", "Commercial Real Estate", "Plot & Land Transactions"]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How to buy property in Ujjain?", "acceptedAnswer": { "@type": "Answer", "text": "Start by defining your budget and preferred location. Konark Associates helps you find verified residential and commercial properties with clear titles and proper documentation. We guide you through the entire process from property selection to registration." } },
        { "@type": "Question", "name": "Do you help with property documentation and registration?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we provide complete assistance with property documentation including title verification, legal due diligence, sale deed preparation, registry, and mutation." } },
        { "@type": "Question", "name": "What types of properties are available in Ujjain and Indore?", "acceptedAnswer": { "@type": "Answer", "text": "We offer residential plots, ready-to-move apartments, independent houses, bungalows, commercial shops, office spaces, and agricultural land across Ujjain, Indore, and Barnagar." } },
        { "@type": "Question", "name": "Is it safe to invest in real estate in Ujjain?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Ujjain is a growing city with excellent real estate investment potential. Property values have shown consistent appreciation due to major infrastructure developments and rising demand." } }
      ]
    }
  ],
  '/contact': [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Konark Associates",
      "url": "https://konarkassociates.com/contact/",
      "description": "Contact Konark Associates for construction, interior design, and real estate services in Ujjain, Indore, and Barnagar.",
      "mainEntity": {
        "@type": "LocalBusiness",
        "name": "Konark Associates",
        "telephone": "+919827953774",
        "email": "konarkassociatesindore@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Main Road, City Center",
          "addressLocality": "Barnagar",
          "addressRegion": "Madhya Pradesh",
          "postalCode": "453771",
          "addressCountry": "IN"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "19:00"
        }
      }
    }
  ]
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

/**
 * Inject route-specific JSON-LD structured data as additional <script> tags.
 * These are appended before </head> and supplement the global schema from index.html.
 */
function injectRouteSchemas(html, route) {
  const schemas = routeSchemas[route];
  if (!schemas || schemas.length === 0) return html;

  const scriptTags = schemas
    .map(schema => `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n</script>`)
    .join('\n');

  // Insert before </head>
  html = html.replace('</head>', `${scriptTags}\n</head>`);
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

      // Inject route-specific JSON-LD schemas
      finalHtml = injectRouteSchemas(finalHtml, route);

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
