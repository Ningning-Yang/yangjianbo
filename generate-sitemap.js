#!/usr/bin/env node
// generate-sitemap.js
// Regenerates sitemap.xml from works-data.js.
// Run: node generate-sitemap.js
// Run this whenever you add or remove works in works-data.js.

const fs   = require('fs');
const path = require('path');

// ── Load DEFAULT_WORKS ────────────────────────────────────────────
const worksCode    = fs.readFileSync(path.join(__dirname, 'works-data.js'), 'utf8');
const getWorks     = new Function(worksCode + '\nreturn DEFAULT_WORKS;');
const DEFAULT_WORKS = getWorks();

const BASE_URL = 'https://yangjianbo.com';
const today    = new Date().toISOString().split('T')[0];

// ── URL-encode an image src path ──────────────────────────────────
// Splits on '/', decodes any existing %xx sequences, then re-encodes
// each path segment cleanly (handles Chinese characters, spaces, etc.)
function encodeImageSrc(src) {
  return src.split('/').map(segment => {
    try { segment = decodeURIComponent(segment); } catch (_) {}
    return encodeURIComponent(segment);
  }).join('/');
}

// ── Build <image:image> blocks ────────────────────────────────────
const imageEntries = DEFAULT_WORKS.map(w => {
  const url      = `${BASE_URL}/${encodeImageSrc(w.src)}`;
  const yearPart = w.year && w.year !== '—' ? `, ${w.year}` : '';
  const title    = `Yang Jianbo — ${w.title}, ${w.medium}${yearPart}`;
  const caption  = `${w.title} by Yang Jianbo. ${w.medium}${yearPart}.`;
  return `    <image:image>\n      <image:loc>${url}</image:loc>\n      <image:title>${title}</image:title>\n      <image:caption>${caption}</image:caption>\n    </image:image>`;
}).join('\n');

// ── Write sitemap.xml ─────────────────────────────────────────────
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
${imageEntries}
  </url>
</urlset>
`;

fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemap);
console.log(`sitemap.xml updated — ${DEFAULT_WORKS.length} works.`);
