/**
 * Post-build pre-rendering script.
 * Imports the SSR bundle built by Vite, calls render(url) for every route,
 * and injects the HTML + per-route head tags into the client index.html shell.
 * No browser needed — runs entirely in Node.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '..', 'dist');

const SITE_ORIGIN = 'https://glossedoutdetailing.com.au';
const OG_IMAGE = `${SITE_ORIGIN}/NLP-Shop.jpeg`;

const ROUTES = [
  '/',
  '/detailing-packages-melbourne',
  '/home-sportscar',
  '/home-intro',
  '/home-banner',
  '/home-demo2',
  '/home-white',
  '/ceramic-coating-melbourne',
  '/ceramic-coating-questions',
  '/gallery',
  '/about',
  '/get-a-quote',
  '/thank-you',
  '/warranties',
  '/product-tds',
  '/ceramic-coating-new-car-melbourne',
  '/ceramic-coating-cost-melbourne',
  '/ceramic-coating-uv-melbourne',
  '/ceramic-coating-paint-correction-melbourne',
  '/ceramic-glass-coating-melbourne',
  '/ceramic-coating-wheels-melbourne',
  '/ceramic-coating-longevity-melbourne',
  '/ceramic-vs-dealer-paint-protection-melbourne',
  '/ceramic-coating-matte-paint-melbourne',
  '/ceramic-coating-maintenance-melbourne',
  '/ceramic-coating-resale-melbourne',
  '/ceramic-coating-near-me-melbourne',
  '/sitemap',
  '/privacy-policy',
];

function escapeAttr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function buildHeadTags(head) {
  const title = head.title || 'Glossed Out Detailing | Car Detailing, Paint Correction & Ceramic Coating Melbourne';
  const description = head.description || 'Glossed Out Detailing — premium car detailing, paint correction and ceramic coating in Melbourne. Gtechniq, Magnum & Kraken certified. Showroom-quality finish, obsessive attention to detail.';
  const canonical = head.canonical || `${SITE_ORIGIN}/`;
  const tags = [
    `<title>${escapeHtml(title)}</title>`,
    `    <meta name="description" content="${escapeAttr(description)}" />`,
    `    <link rel="canonical" href="${escapeAttr(canonical)}" />`,
    `    <meta property="og:title" content="${escapeAttr(title)}" />`,
    `    <meta property="og:description" content="${escapeAttr(description)}" />`,
    `    <meta property="og:url" content="${escapeAttr(canonical)}" />`,
    `    <meta property="og:type" content="website" />`,
    `    <meta property="og:image" content="${escapeAttr(OG_IMAGE)}" />`,
    `    <meta name="twitter:card" content="summary_large_image" />`,
    `    <meta name="twitter:title" content="${escapeAttr(title)}" />`,
    `    <meta name="twitter:description" content="${escapeAttr(description)}" />`,
    `    <meta name="twitter:image" content="${escapeAttr(OG_IMAGE)}" />`,
  ];
  if (head.noindex) {
    tags.push(`    <meta name="robots" content="noindex,nofollow" />`);
  }
  if (Array.isArray(head.jsonLd) && head.jsonLd.length) {
    for (const item of head.jsonLd) {
      const json = JSON.stringify(item).replace(/<\//g, '<\\/');
      tags.push(`    <script type="application/ld+json">${json}</script>`);
    }
  }
  return tags.join('\n');
}

async function prerender() {
  console.log('\n🔄 Pre-rendering started...\n');

  const { render } = await import(pathToFileURL(path.resolve(DIST, 'server', 'entry-server.js')).href);

  const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8');

  let rendered = 0;
  let failed = 0;

  for (const route of ROUTES) {
    try {
      const { html: appHtml, head } = render(route);

      const headTags = buildHeadTags(head);

      const html = template
        .replace(/<title>[^<]*<\/title>\s*/, '')
        .replace(/<meta\s+name="description"[^>]*>\s*/, '')
        .replace(/<link\s+rel="canonical"[^>]*>\s*/, '')
        .replace('</head>', `${headTags}\n  </head>`)
        .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

      const routePath = route === '/' ? '/index.html' : `${route}/index.html`;
      const outFile = path.join(DIST, routePath);
      const outDir = path.dirname(outFile);

      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(outFile, html, 'utf-8');

      rendered++;
      console.log(`  ✅ ${route}  →  ${head.title ? `"${head.title.slice(0, 60)}…"` : '(no meta recorded)'}`);
    } catch (err) {
      failed++;
      console.error(`  ❌ ${route}: ${err.message}`);
    }
  }

  console.log(`\n✅ Pre-rendered ${rendered}/${ROUTES.length} routes`);
  if (failed > 0) {
    console.log(`❌ ${failed} route(s) failed`);
    process.exit(1);
  }

  // Emit /404.html — render the React Router wildcard route by requesting a
  // path that matches no defined route. Vercel auto-serves /404.html with
  // HTTP 404 status when no file matches an incoming request.
  try {
    const { html: appHtml, head } = render('/__nlp_not_found__');
    const headTags = buildHeadTags(head);
    const html = template
      .replace(/<title>[^<]*<\/title>\s*/, '')
      .replace(/<meta\s+name="description"[^>]*>\s*/, '')
      .replace(/<link\s+rel="canonical"[^>]*>\s*/, '')
      .replace('</head>', `${headTags}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
    fs.writeFileSync(path.join(DIST, '404.html'), html, 'utf-8');
    console.log(`  ✅ /404.html (served by Vercel with HTTP 404 status)`);
  } catch (err) {
    console.error(`  ❌ /404.html: ${err.message}`);
    process.exit(1);
  }

  console.log('');
}

prerender();
