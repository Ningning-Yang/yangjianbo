// ── 中文版画廊 gallery.js ─────────────────────────────────────────
// 数据来源：../works-data.js（DEFAULT_WORKS）

const SERIES = [
  {
    key: 'pastoral',
    num: '01',
    title: '高原牧场',
    en: 'Plateau Pastoral',
    desc: '扎根于云南与西藏高原风景的大幅油画——牧人、牛群与辽阔大地，以静穆的纪念碑感呈现。《牧场》《瓦扎和牛》《暮色》等作品将人物置于与土地、动物的深层关系之中，构建出高原特有的精神张力。'
  },
  {
    key: 'solar-terms',
    num: '02',
    title: '节气',
    en: 'The Twenty-Four Solar Terms',
    desc: '以中国古代农历节气为题材的系列油画——《惊蛰》《秋分》《寒露》《立冬》《小寒》《冬至》等，每件作品将一个季节转折点凝缩为色彩与氛围，借云南高原之光追溯岁时的缓慢节奏。'
  },
  {
    key: 'landscape',
    num: '03',
    title: '风景',
    en: 'Landscape',
    desc: '跨越二十年的风景油画——从云南江河村落的大幅布面，到在美国中西部驻留期间创作的小幅板画。每件作品都是与具体地点的直接相遇：特定的光线、河水、拉克罗斯的街道或和顺的荷塘。'
  },
  {
    key: 'flying-fish',
    num: '04',
    title: '飞鱼和鸟',
    en: 'Flying Fish and Birds',
    featuredIndex: 6,
    desc: '八幅纸本铅笔画（18×42厘米），飞鱼与飞鸟共处于一片不可能存在的天空——介于自然观察与超现实想象之间。横长的画幅赋予每件作品手卷般的质感，使目光在悬浮于水、气与线条之间的生灵上缓缓移动。'
  },
  {
    key: 'tractor',
    num: '05',
    title: '拖拉机',
    en: 'Tractor',
    desc: '水彩明信片画（10×15厘米，2016年），将农用拖拉机描绘为亲密的收藏对象。以明信片的尺度入画、可竖立于桌面，把劳动的器物转化为安静的静物主题——以深情而非意识形态的眼光凝视。'
  },
  {
    key: 'red-machine',
    num: '06',
    title: '红色机器',
    en: 'Red Machine',
    desc: '《拖拉机》系列的姊妹篇——三幅水彩明信片（2021年），以同样亲密的尺度描绘工业红色机器。与前者一脉相承，将劳动之物转化为沉思之物，每一件都是机械生命的小型纪念碑。'
  },
];

// ── 构建系列面板 ──────────────────────────────────────────────────
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
        <img src="../small_image/${w.src}" alt="杨剑波 — ${w.zh}" loading="lazy" draggable="false">
        <div class="gallery-item-overlay"><div class="gallery-item-info">
          <div class="gallery-item-title">${w.zh}</div>
          <div class="gallery-item-year">${w.medium}</div>
          ${w.size ? `<div class="gallery-item-size">${w.size}</div>` : ''}
        </div></div>
      </div>`;
    }).join('');

    panel.innerHTML = `
      <div class="sp-header" onclick="togglePanel('${s.key}')">
        <div class="sp-feat-wrap">
          <img class="sp-feat-img" src="../small_image/${featured.src}" alt="杨剑波 — ${featured.zh}" loading="lazy" draggable="false">
          <div class="sp-feat-overlay"></div>
        </div>
        <div class="sp-info">
          <div class="sp-num">${s.num}</div>
          <h3 class="sp-title">${s.title}<span class="sp-zh">${s.en}</span></h3>
          <p class="sp-desc">${s.desc}</p>
          <div class="sp-meta">
            <span>${works.length} 件作品</span>
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
}

// ── 展开 / 收起面板 ───────────────────────────────────────────────
function setPanelHeight(panel, open) {
  const wrap = panel.querySelector('.sp-gallery-wrap');
  wrap.style.maxHeight = open ? '8000px' : '0px';
}

function togglePanel(key) {
  const panel = document.querySelector(`.sp[data-key="${key}"]`);
  if (!panel) return;
  const isOpen = panel.classList.contains('sp--open');

  const header = panel.querySelector('.sp-header');
  const headerTopBefore = header.getBoundingClientRect().top;

  document.querySelectorAll('.sp--open').forEach(p => {
    p.classList.remove('sp--open');
    const w = p.querySelector('.sp-gallery-wrap');
    w.style.transition = 'none';
    w.style.maxHeight = '0px';
  });

  void document.body.offsetHeight;

  const shift = header.getBoundingClientRect().top - headerTopBefore;
  if (shift !== 0) window.scrollTo({ top: window.scrollY + shift, behavior: 'instant' });

  if (!isOpen) {
    panel.classList.add('sp--open');
    const w = panel.querySelector('.sp-gallery-wrap');
    w.style.transition = '';
    w.style.maxHeight = '8000px';
  }
}

// ── 灯箱 ──────────────────────────────────────────────────────────
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
  document.getElementById('lightbox-caption').textContent = work.zh + '  ·  ' + work.medium + (work.size ? '  ·  ' + work.size : '');
  imgEl.src = '../' + work.src;
  imgEl.alt = work.zh;
}

document.getElementById('lightbox').addEventListener('click', function(e) {
  if (e.target === this) closeLightbox();
});

// ── 图片保护 ──────────────────────────────────────────────────────
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

// ── 滚动渐显 ──────────────────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

buildSeriesPanels();
