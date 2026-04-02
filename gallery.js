// ── Gallery for index.html ────────────────────────────────────────
// Data source: works-data.js (DEFAULT_WORKS)
// To add, remove, or update works — only edit works-data.js.
// Images are watermarked at build time by watermark-images.py.

// ── Build gallery from DEFAULT_WORKS ─────────────────────────────
function buildGallery() {
  const gallery = document.getElementById('gallery');
  DEFAULT_WORKS.forEach((w, i) => {
    const type = w.type === 'draw' ? 'drawing' : w.type;
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.dataset.type = type;
    div.onclick = () => openLightbox(i);
    div.innerHTML = `
      <img src="small_image/${w.src}" alt="Yang Jianbo — ${w.title}" loading="lazy" draggable="false">
      <div class="gallery-item-overlay"><div class="gallery-item-info">
        <div class="gallery-item-title">${w.title}</div>
        <div class="gallery-item-year">${w.medium}</div>
      </div></div>
    `;
    gallery.appendChild(div);
  });
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
  const work = DEFAULT_WORKS[currentIndex];
  const imgEl = document.getElementById('lightbox-img');
  document.getElementById('lightbox-caption').textContent = work.title + '  ·  ' + work.medium;
  imgEl.src = work.src;
  imgEl.alt = work.title;
}

document.getElementById('lightbox').addEventListener('click', function(e) {
  if (e.target === this) closeLightbox();
});

// ── Image protection: disable right-click & keyboard shortcuts ────
document.addEventListener('contextmenu', e => {
  if (e.target.tagName === 'IMG' ||
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
