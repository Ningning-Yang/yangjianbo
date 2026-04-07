// ── Gallery for index.html ────────────────────────────────────────
// Data source: works-data.js (DEFAULT_WORKS)
// To add, remove, or update works — only edit works-data.js.

// ── Series metadata ───────────────────────────────────────────────
const SERIES = [
  {
    key: 'pastoral',
    num: '01',
    title: 'Plateau Pastoral',
    zh: '高原牧场',
    desc: 'Large-scale oil paintings rooted in the landscapes of Yunnan and the Tibetan plateau — herders, cattle, and open terrain rendered with quiet monumentality. Works such as <em>Pasture</em>, <em>Waza and the Bull</em>, and <em>Dusk</em> place the human figure in a charged relationship with land and animal.'
  },
  {
    key: 'solar-terms',
    num: '02',
    title: 'The Twenty-Four Solar Terms',
    zh: '节气',
    desc: 'A sequence of oil paintings drawn from the ancient Chinese agricultural calendar — <em>Awakening of Insects</em>, <em>Autumnal Equinox</em>, <em>Cold Dew</em>, <em>Start of Winter</em>, <em>Minor Cold</em>, <em>Winter Solstice</em>, and others. Each work distils a seasonal turning point into colour and atmosphere, tracing the year\'s slow rhythm through the plateau light of Yunnan.'
  },
  {
    key: 'landscape',
    num: '03',
    title: 'Landscape',
    zh: '风景',
    desc: 'Oil paintings spanning two decades — from large canvases of Yunnan\'s rivers and villages to intimate panel paintings made during a residency in the American Midwest. Each work is a direct encounter with place: the particular light, the specific water, a street in La Crosse or a lotus pond in Heshun.'
  },
  {
    key: 'flying-fish',
    num: '04',
    title: 'Flying Fish and Birds',
    zh: '飞鱼和鸟',
    featuredIndex: 6,
    desc: 'A series of eight pencil drawings on paper (18×42 cm each) in which flying fish and birds share an impossible sky — part natural observation, part surrealist vision. The elongated horizontal format gives each work the quality of a scroll, slowing the eye across creatures suspended between water, air, and the drawn line.'
  },
  {
    key: 'tractor',
    num: '05',
    title: 'Tractor',
    zh: '拖拉机',
    desc: 'Watercolour postcard paintings (10×15 cm, 2016) depicting agricultural tractors as intimate collectible objects. Painted at postcard scale and designed to stand on a desk, they reframe tools of labour as quiet still-life subjects — seen with affection rather than ideology.'
  },
  {
    key: 'red-machine',
    num: '06',
    title: 'Red Machine',
    zh: '红色机器',
    desc: 'A companion series to <em>Tractor</em> — three watercolour postcards (2021) depicting industrial red machines at intimate scale. Like the earlier tractor series, they transform objects of work into objects of contemplation, each one a small monument to mechanical life.'
  },
];

// ── Build series panels ───────────────────────────────────────────
function buildSeriesPanels() {
  const container = document.getElementById('series-panels');

  SERIES.forEach((s, si) => {
    const works = DEFAULT_WORKS.filter(w => w.type === s.key);
    if (!works.length) return;

    const featured = works[s.featuredIndex || 0];
    const panel = document.createElement('div');
    panel.className = 'sp';
    panel.dataset.key = s.key;

    const galleryItems = works.map(w => {
      const gi = DEFAULT_WORKS.indexOf(w);
      return `<div class="gallery-item" onclick="openLightbox(${gi})">
        <img src="small_image/${w.src}" alt="Yang Jianbo — ${w.title}" loading="lazy" draggable="false">
        <div class="gallery-item-overlay"><div class="gallery-item-info">
          <div class="gallery-item-title">${w.title}</div>
          <div class="gallery-item-year">${w.medium}</div>
        </div></div>
      </div>`;
    }).join('');

    panel.innerHTML = `
      <div class="sp-header" onclick="togglePanel('${s.key}')">
        <div class="sp-feat-wrap">
          <img class="sp-feat-img" src="small_image/${featured.src}" alt="Yang Jianbo — ${featured.title}" loading="lazy" draggable="false">
          <div class="sp-feat-overlay"></div>
        </div>
        <div class="sp-info">
          <div class="sp-num">${s.num}</div>
          <h3 class="sp-title">${s.title}<span class="sp-zh">${s.zh}</span></h3>
          <p class="sp-desc">${s.desc}</p>
          <div class="sp-meta">
            <span>${works.length} work${works.length > 1 ? 's' : ''}</span>
            <span class="sp-arrow">↓</span>
          </div>
        </div>
      </div>
      <div class="sp-gallery-wrap">
        <div class="sp-gallery">
          <div class="gallery-masonry sp-masonry">
            ${galleryItems}
          </div>
        </div>
      </div>
    `;

    container.appendChild(panel);
  });

  // Auto-open first panel after layout is settled
  requestAnimationFrame(() => {
    const first = container.querySelector('.sp');
    if (first) {
      first.classList.add('sp--open');
      setPanelHeight(first, true);
    }
  });
}

// ── Toggle panel open / close ─────────────────────────────────────
function setPanelHeight(panel, open) {
  const wrap = panel.querySelector('.sp-gallery-wrap');
  if (open) {
    // Use a large fixed ceiling — lazy-loaded images mean scrollHeight
    // is unreliable at click time and content can exceed a measured value.
    // The transition animates from 0 → this value; closing snaps to 0.
    wrap.style.maxHeight = '8000px';
  } else {
    wrap.style.maxHeight = '0px';
  }
}

function togglePanel(key) {
  const panel = document.querySelector(`.sp[data-key="${key}"]`);
  if (!panel) return;
  const isOpen = panel.classList.contains('sp--open');

  const header = panel.querySelector('.sp-header');
  const headerTopBefore = header.getBoundingClientRect().top;

  // Collapse all open panels INSTANTLY (no transition) so the layout
  // settles synchronously and getBoundingClientRect gives the real value.
  document.querySelectorAll('.sp--open').forEach(p => {
    p.classList.remove('sp--open');
    const w = p.querySelector('.sp-gallery-wrap');
    w.style.transition = 'none';
    w.style.maxHeight = '0px';
  });

  // Force a synchronous reflow so the browser applies the collapsed height now.
  void document.body.offsetHeight;

  // Compensate scroll for the layout shift that just happened.
  const shift = header.getBoundingClientRect().top - headerTopBefore;
  if (shift !== 0) window.scrollTo({ top: window.scrollY + shift, behavior: 'instant' });

  // Open the clicked panel WITH the normal transition restored.
  if (!isOpen) {
    panel.classList.add('sp--open');
    const w = panel.querySelector('.sp-gallery-wrap');
    w.style.transition = '';   // restore CSS transition
    w.style.maxHeight = '8000px';
  }
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
      e.target.closest('.gallery-item') || e.target.closest('.lightbox') ||
      e.target.closest('.sp-feat-wrap')) {
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

buildSeriesPanels();
