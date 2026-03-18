// ── Gallery for index.html ────────────────────────────────────────
// Data source: works-data.js (DEFAULT_WORKS)
// To add, remove, or update works — only edit works-data.js.

// ── Build gallery from DEFAULT_WORKS ─────────────────────────────
function buildGallery() {
  const gallery = document.getElementById('gallery');
  DEFAULT_WORKS.forEach((w, i) => {
    const type = w.type === 'draw' ? 'drawing' : w.type;
    const caption = w.medium + (w.year && w.year !== '—' ? ' · ' + w.year : '');
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.dataset.type = type;
    div.onclick = () => openLightbox(i);
    div.innerHTML = `
      <img src="${w.src}" alt="Yang Jianbo — ${w.title}" loading="lazy">
      <div class="gallery-item-overlay"><div class="gallery-item-info">
        <div class="gallery-item-title">${w.title}</div>
        <div class="gallery-item-year">${caption}</div>
      </div></div>
    `;
    gallery.appendChild(div);
  });
  applyWatermarks();
  filterWorks('oil', document.querySelector('.filter-btn'));
}

// ── Filter ────────────────────────────────────────────────────────
function filterWorks(type, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.querySelectorAll('.gallery-item').forEach(item => {
    if (item.dataset.type === type) {
      item.style.display = '';
      item.style.opacity = '0';
      setTimeout(() => { item.style.transition = 'opacity 0.4s'; item.style.opacity = '1'; }, 50);
    } else {
      item.style.display = 'none';
    }
  });
}

// ── Watermark helper ──────────────────────────────────────────────
// canvasW/canvasH: explicit pixel dimensions (lightbox). Omit for thumbnails — caps at 1200px.
function drawWatermark(canvas, img, canvasW, canvasH) {
  if (canvasW && canvasH) {
    canvas.width  = canvasW;
    canvas.height = canvasH;
  } else {
    const nw = img.naturalWidth  || img.width;
    const nh = img.naturalHeight || img.height;
    const scale = Math.min(1, 1200 / Math.max(nw, nh, 1));
    canvas.width  = Math.round(nw * scale);
    canvas.height = Math.round(nh * scale);
  }
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  const w = canvas.width, h = canvas.height;
  const text = '© Yang Jianbo · yangjianbo.art';

  const fontSize = Math.max(14, w * 0.022);
  ctx.save();
  ctx.font = `${fontSize}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.translate(w / 2, h / 2);
  ctx.rotate(-Math.PI / 5);
  const step = Math.max(160, w * 0.28);
  ctx.fillStyle = 'rgba(0,0,0,0.22)';
  for (let y = -h; y < h; y += step * 0.7) {
    for (let x = -w; x < w; x += step) { ctx.fillText(text, x, y); }
  }
  ctx.fillStyle = 'rgba(255,255,255,0.32)';
  for (let y = -h; y < h; y += step * 0.7) {
    for (let x = -w; x < w; x += step) { ctx.fillText(text, x, y); }
  }
  ctx.restore();

  ctx.save();
  ctx.font = `${Math.max(12, w * 0.018)}px sans-serif`;
  ctx.textAlign = 'right';
  ctx.fillStyle = 'rgba(0,0,0,0.35)';
  ctx.fillText('© Yang Jianbo', w - 11, h - 11);
  ctx.fillStyle = 'rgba(255,255,255,0.6)';
  ctx.fillText('© Yang Jianbo', w - 12, h - 12);
  ctx.restore();
}

// ── Apply watermarks to gallery thumbnails ────────────────────────
function applyWatermarks() {
  document.querySelectorAll('.gallery-item img').forEach(img => {
    const canvas = document.createElement('canvas');
    canvas.style.width   = '100%';
    canvas.style.height  = 'auto';
    canvas.style.display = 'block';
    canvas.style.pointerEvents = 'none';
    canvas.setAttribute('draggable', 'false');
    function applyWM() {
      drawWatermark(canvas, img);
      img.parentNode.insertBefore(canvas, img);
      img.style.display = 'none';
    }
    if (img.complete && img.naturalWidth) { applyWM(); }
    else { img.addEventListener('load', applyWM); }
  });
}

// ── Lightbox ──────────────────────────────────────────────────────
let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  updateLightbox();
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}

function navigateLightbox(dir) {
  currentIndex = (currentIndex + dir + DEFAULT_WORKS.length) % DEFAULT_WORKS.length;
  updateLightbox();
}

function updateLightbox() {
  const w = DEFAULT_WORKS[currentIndex];
  const canvas = document.getElementById('lightbox-canvas');
  const yearPart = w.year && w.year !== '—' ? ' · ' + w.year : '';
  document.getElementById('lightbox-caption').textContent = w.title + '  ·  ' + w.medium + yearPart;

  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = () => {
    const maxW = window.innerWidth  * 0.9;
    const maxH = window.innerHeight * 0.8;
    const ratio = Math.min(maxW / img.naturalWidth, maxH / img.naturalHeight, 1);
    const dispW = Math.round(img.naturalWidth  * ratio);
    const dispH = Math.round(img.naturalHeight * ratio);
    canvas.style.width  = dispW + 'px';
    canvas.style.height = dispH + 'px';
    drawWatermark(canvas, img, dispW, dispH);
  };
  img.src = w.src;
}

document.getElementById('lightbox').addEventListener('click', function(e) {
  if (e.target === this) closeLightbox();
});

// ── Image protection: disable right-click & keyboard shortcuts ────
document.addEventListener('contextmenu', e => {
  if (e.target.tagName === 'IMG' || e.target.tagName === 'CANVAS' ||
      e.target.closest('.gallery-item') || e.target.closest('.lightbox')) {
    e.preventDefault();
  }
});

document.addEventListener('keydown', e => {
  const ctrl = e.ctrlKey || e.metaKey;
  if (ctrl && ['s','u','p'].includes(e.key.toLowerCase())) e.preventDefault();
  if (e.key === 'F12') e.preventDefault();
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') navigateLightbox(1);
  if (e.key === 'ArrowLeft') navigateLightbox(-1);
});

// ── Scroll reveal ─────────────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

buildGallery();
