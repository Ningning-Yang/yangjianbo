// ── Yang Jianbo — Artwork Data ────────────────────────────────────
// Edit this file to add, remove, or update works.
// Fields: src, title, zh (Chinese title), medium, year, type, size, cny, usd, collection, notes
// type values: "oil" | "draw" | "watercolor"
// ──────────────────────────────────────────────────────────────────

const DEFAULT_WORKS = [

  // ── Oil Paintings ─────────────────────────────────────────────────

  { src:"new-work/《牧场》布面油画200x230cm2024年（160000元）.jpg",
    title:"Pasture",               zh:"牧场",    medium:"Oil on Canvas", year:"2024", type:"oil", size:"200×230 cm", cny:"160000", usd:"", collection:"", notes:"" },

  { src:"new-work/《瓦扎和牛》布面油画200x180cm2018年（120000元）.JPG",
    title:"Waza and the Bull",     zh:"瓦扎和牛", medium:"Oil on Canvas", year:"2018", type:"oil", size:"200×180 cm", cny:"120000", usd:"", collection:"", notes:"" },

  { src:"new-work/《惊蛰》布面油画90x200cm%202018年（60000元）.JPG",
    title:"Awakening of Insects",  zh:"惊蛰",    medium:"Oil on Canvas", year:"2018", type:"oil", size:"90×200 cm",  cny:"60000",  usd:"", collection:"", notes:"" },

  { src:"new-work/《暮色》布面油画90x200cm%202021年（40000元）.JPG",
    title:"Dusk",                  zh:"暮色",    medium:"Oil on Canvas", year:"2021", type:"oil", size:"90×200 cm",  cny:"40000",  usd:"", collection:"", notes:"" },

  { src:"new-work/《秋分》布面油画60x80cm%202019年（15000元）.jpg",
    title:"Autumnal Equinox",      zh:"秋分",    medium:"Oil on Canvas", year:"2019", type:"oil", size:"60×80 cm",   cny:"15000",  usd:"", collection:"", notes:"" },

  { src:"new-work/《小雪》布面油画60x80cm2020年（15000元）.jpg",
    title:"Light Snow",            zh:"小雪",    medium:"Oil on Canvas", year:"2020", type:"oil", size:"60×80 cm",   cny:"15000",  usd:"", collection:"", notes:"" },

  { src:"new-work/《立冬》布面油画60x80cm2020年（15000元）.jpg",
    title:"Start of Winter",       zh:"立冬",    medium:"Oil on Canvas", year:"2020", type:"oil", size:"60×80 cm",   cny:"15000",  usd:"", collection:"", notes:"" },

  { src:"new-work/《小寒》布面油画60x80cm2020年（15000元）.jpg",
    title:"Minor Cold",            zh:"小寒",    medium:"Oil on Canvas", year:"2020", type:"oil", size:"60×80 cm",   cny:"15000",  usd:"", collection:"", notes:"" },

  { src:"new-work/《冬至》布面油画60x80cm2020年（15000元）.jpg",
    title:"Winter Solstice",       zh:"冬至",    medium:"Oil on Canvas", year:"2020", type:"oil", size:"60×80 cm",   cny:"15000",  usd:"", collection:"", notes:"" },

  { src:"new-work/《寒露》布面油画60x80cm%202020年（15000元）.jpg",
    title:"Cold Dew",              zh:"寒露",    medium:"Oil on Canvas", year:"2020", type:"oil", size:"60×80 cm",   cny:"15000",  usd:"", collection:"", notes:"" },

  { src:"art-portfolio/14.jpg",
    title:"The Wanderer",          zh:"",        medium:"Oil on Canvas", year:"2019", type:"oil", size:"",           cny:"",       usd:"", collection:"", notes:"" },

  { src:"art-portfolio/12.jpg",
    title:"Plateau Herd",          zh:"",        medium:"Oil on Canvas", year:"—",    type:"oil", size:"",           cny:"",       usd:"", collection:"", notes:"" },

  { src:"art-portfolio/9.jpg",
    title:"The Shepherd and the Blue Mountain", zh:"", medium:"Oil on Canvas", year:"2019", type:"oil", size:"", cny:"", usd:"", collection:"", notes:"" },

  { src:"art-portfolio/13.jpg",
    title:"The White Coat",        zh:"",        medium:"Oil on Canvas", year:"—",    type:"oil", size:"",           cny:"",       usd:"", collection:"", notes:"" },

  { src:"art-portfolio/15.jpg",
    title:"The Shepherd",          zh:"",        medium:"Oil on Canvas", year:"—",    type:"oil", size:"",           cny:"",       usd:"", collection:"", notes:"" },


  // ── 飞鱼和鸟 (Flying Fish and Birds) — Pencil on Paper ─────────────

  { src:"new-work/《飞鱼和鸟》系列/《飞鱼和鸟》-1%20纸本铅笔%2018×42cm%202021年（2500元）.jpg",
    title:"Flying Fish and Birds No.1", zh:"飞鱼和鸟-1", medium:"Pencil on Paper", year:"2021", type:"draw", size:"18×42 cm", cny:"2500", usd:"", collection:"", notes:"" },

  { src:"new-work/《飞鱼和鸟》系列/《飞鱼和鸟》-2纸本铅笔%2018×42cm%202021年（2500元）.jpg",
    title:"Flying Fish and Birds No.2", zh:"飞鱼和鸟-2", medium:"Pencil on Paper", year:"2021", type:"draw", size:"18×42 cm", cny:"2500", usd:"", collection:"", notes:"" },

  { src:"new-work/《飞鱼和鸟》系列/《飞鱼和鸟》-3纸本铅笔%2018×42cm%202021年（2500元）.jpg",
    title:"Flying Fish and Birds No.3", zh:"飞鱼和鸟-3", medium:"Pencil on Paper", year:"2021", type:"draw", size:"18×42 cm", cny:"2500", usd:"", collection:"", notes:"" },

  { src:"new-work/《飞鱼和鸟》系列/《飞鱼和鸟》-4纸本铅笔%2018×42cm%202021年（2500元）.jpg",
    title:"Flying Fish and Birds No.4", zh:"飞鱼和鸟-4", medium:"Pencil on Paper", year:"2021", type:"draw", size:"18×42 cm", cny:"2500", usd:"", collection:"", notes:"" },

  { src:"new-work/《飞鱼和鸟》系列/《飞鱼和鸟》-5纸本铅笔%2018×42cm%202021年（2500元）.jpg",
    title:"Flying Fish and Birds No.5", zh:"飞鱼和鸟-5", medium:"Pencil on Paper", year:"2021", type:"draw", size:"18×42 cm", cny:"2500", usd:"", collection:"", notes:"" },

  { src:"new-work/《飞鱼和鸟》系列/《飞鱼和鸟》-6纸本铅笔%2018×42cm%202021年（2500元）.jpg",
    title:"Flying Fish and Birds No.6", zh:"飞鱼和鸟-6", medium:"Pencil on Paper", year:"2021", type:"draw", size:"18×42 cm", cny:"2500", usd:"", collection:"", notes:"" },

  { src:"new-work/《飞鱼和鸟》系列/《飞鱼和鸟》-7纸本铅笔%2018×42cm%202018年（2500元）.jpg",
    title:"Flying Fish and Birds No.7", zh:"飞鱼和鸟-7", medium:"Pencil on Paper", year:"2018", type:"draw", size:"18×42 cm", cny:"2500", usd:"", collection:"", notes:"" },

  { src:"new-work/《飞鱼和鸟》系列/《飞鱼和鸟》-8纸本铅笔%2018×42cm%202018年（2500元）.jpg",
    title:"Flying Fish and Birds No.8", zh:"飞鱼和鸟-8", medium:"Pencil on Paper", year:"2018", type:"draw", size:"18×42 cm", cny:"2500", usd:"", collection:"", notes:"" },


  // ── 拖拉机 (Tractor) — Watercolour Postcards ──────────────────────

  { src:"new-work/《拖拉机》系列/《拖拉机》-2水彩明信片10×15cm（可摆放桌面）2016年（750元）.jpg",
    title:"Tractor No.2", zh:"拖拉机-2", medium:"Watercolour Postcard", year:"2016", type:"watercolor", size:"10×15 cm", cny:"750", usd:"", collection:"", notes:"可摆放桌面" },

  { src:"new-work/《拖拉机》系列/《拖拉机》-3水彩明信片10×15cm（可摆放桌面）2016年（750元）.jpg",
    title:"Tractor No.3", zh:"拖拉机-3", medium:"Watercolour Postcard", year:"2016", type:"watercolor", size:"10×15 cm", cny:"750", usd:"", collection:"", notes:"可摆放桌面" },

  { src:"new-work/《拖拉机》系列/《拖拉机》-4水彩明信片10×15cm（可摆放桌面）2016年（750元）.jpg",
    title:"Tractor No.4", zh:"拖拉机-4", medium:"Watercolour Postcard", year:"2016", type:"watercolor", size:"10×15 cm", cny:"750", usd:"", collection:"", notes:"可摆放桌面" },

  { src:"new-work/《拖拉机》系列/《拖拉机》-5水彩明信片10×15cm（可摆放桌面）2016年（750元）.jpg",
    title:"Tractor No.5", zh:"拖拉机-5", medium:"Watercolour Postcard", year:"2016", type:"watercolor", size:"10×15 cm", cny:"750", usd:"", collection:"", notes:"可摆放桌面" },

  { src:"new-work/《拖拉机》系列/《拖拉机》-6水彩明信片10×15cm（可摆放桌面）2016年（750元）.jpg",
    title:"Tractor No.6", zh:"拖拉机-6", medium:"Watercolour Postcard", year:"2016", type:"watercolor", size:"10×15 cm", cny:"750", usd:"", collection:"", notes:"可摆放桌面" },

  { src:"new-work/《拖拉机》系列/《拖拉机》-7水彩明信片10×15cm（可摆放桌面）2016年（750元）.jpg",
    title:"Tractor No.7", zh:"拖拉机-7", medium:"Watercolour Postcard", year:"2016", type:"watercolor", size:"10×15 cm", cny:"750", usd:"", collection:"", notes:"可摆放桌面" },

  { src:"new-work/《拖拉机》系列/《拖拉机》-8水彩明信片10×15cm（可摆放桌面）2016年（750元）.jpg",
    title:"Tractor No.8", zh:"拖拉机-8", medium:"Watercolour Postcard", year:"2016", type:"watercolor", size:"10×15 cm", cny:"750", usd:"", collection:"", notes:"可摆放桌面" },

  { src:"new-work/《拖拉机》系列/《拖拉机》-9水彩明信片10×15cm（可摆放桌面）2016年（750元）.jpg",
    title:"Tractor No.9", zh:"拖拉机-9", medium:"Watercolour Postcard", year:"2016", type:"watercolor", size:"10×15 cm", cny:"750", usd:"", collection:"", notes:"可摆放桌面" },


  // ── 红色机器 (Red Machine) — Watercolour Postcards ────────────────

  { src:"new-work/《红色机器》系列/《红色机器》-1水彩明信片10×15cm2021年（750元）.jpg",
    title:"Red Machine No.1", zh:"红色机器-1", medium:"Watercolour Postcard", year:"2021", type:"watercolor", size:"10×15 cm", cny:"750", usd:"", collection:"", notes:"可摆放桌面" },

  { src:"new-work/《红色机器》系列/《红色机器》-2水彩明信片10×15cm2021年（750元）.jpg",
    title:"Red Machine No.2", zh:"红色机器-2", medium:"Watercolour Postcard", year:"2021", type:"watercolor", size:"10×15 cm", cny:"750", usd:"", collection:"", notes:"可摆放桌面" },

  { src:"new-work/《红色机器》系列/《红色机器》-3水彩明信片10×15cm（可摆放桌面）2021年（750元）.jpg",
    title:"Red Machine No.3", zh:"红色机器-3", medium:"Watercolour Postcard", year:"2021", type:"watercolor", size:"10×15 cm", cny:"750", usd:"", collection:"", notes:"可摆放桌面" },

];
