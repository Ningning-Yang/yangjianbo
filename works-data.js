// ── Yang Jianbo — Artwork Data ────────────────────────────────────
// Single source of truth for index.html (gallery) and works.html (catalogue).
// Images live in works/  (full watermark — lightbox)
//           and small_image/works/  (corner watermark — thumbnails).
// To add/edit works: update this file, then run: node generate-sitemap.js
// type values: "pastoral" | "solar-terms" | "landscape" | "flying-fish" | "tractor" | "red-machine"
// ──────────────────────────────────────────────────────────────────

const DEFAULT_WORKS = [

  // ── Plateau Pastoral · 高原牧场 ────────────────────────────────────

  { src:"works/《牧场》布面油画200x230cm2024年（160000元）.jpg",
    title:"Pasture",                            zh:"牧场",    medium:"Oil on Canvas", year:"2024", type:"pastoral", size:"200×230 cm", cny:"160000", usd:"", collection:"", notes:"" },

  { src:"works/《瓦扎和牛》布面油画200x180cm2018年（120000元）.JPG",
    title:"Waza and the Bull",                  zh:"瓦扎和牛", medium:"Oil on Canvas", year:"2018", type:"pastoral", size:"200×180 cm", cny:"120000", usd:"", collection:"", notes:"" },

  { src:"works/《暮色》布面油画90x200cm 2021年（40000元）.JPG",
    title:"Dusk",                               zh:"暮色",    medium:"Oil on Canvas", year:"2021", type:"pastoral", size:"90×200 cm",  cny:"40000",  usd:"", collection:"", notes:"" },


  // ── The Twenty-Four Solar Terms · 节气 ────────────────────────────

  { src:"works/《惊蛰》布面油画90x200cm 2018年（60000元）.JPG",
    title:"Awakening of Insects",               zh:"惊蛰",    medium:"Oil on Canvas", year:"2018", type:"solar-terms", size:"90×200 cm", cny:"60000", usd:"", collection:"", notes:"" },

  { src:"works/《秋分》布面油画60x80cm 2019年（15000元）.jpg",
    title:"Autumnal Equinox",                   zh:"秋分",    medium:"Oil on Canvas", year:"2019", type:"solar-terms", size:"60×80 cm",  cny:"15000", usd:"", collection:"", notes:"" },

  { src:"works/《小雪》布面油画60x80cm2020年（15000元）.jpg",
    title:"Light Snow",                         zh:"小雪",    medium:"Oil on Canvas", year:"2020", type:"solar-terms", size:"60×80 cm",  cny:"15000", usd:"", collection:"", notes:"" },

  { src:"works/《立冬》布面油画60x80cm2020年（15000元）.jpg",
    title:"Start of Winter",                    zh:"立冬",    medium:"Oil on Canvas", year:"2020", type:"solar-terms", size:"60×80 cm",  cny:"15000", usd:"", collection:"", notes:"" },

  { src:"works/《小寒》布面油画60x80cm2020年（15000元）.jpg",
    title:"Minor Cold",                         zh:"小寒",    medium:"Oil on Canvas", year:"2020", type:"solar-terms", size:"60×80 cm",  cny:"15000", usd:"", collection:"", notes:"" },

  { src:"works/《冬至》布面油画60x80cm2020年（15000元）.jpg",
    title:"Winter Solstice",                    zh:"冬至",    medium:"Oil on Canvas", year:"2020", type:"solar-terms", size:"60×80 cm",  cny:"15000", usd:"", collection:"", notes:"" },

  { src:"works/《寒露》布面油画60x80cm 2020年（15000元）.jpg",
    title:"Cold Dew",                           zh:"寒露",    medium:"Oil on Canvas", year:"2020", type:"solar-terms", size:"60×80 cm",  cny:"15000", usd:"", collection:"", notes:"" },


  // ── Landscape · 风景 ───────────────────────────────────────────────

  { src:"works/风景/《小河十月》布面油画120×180cm 2003年.jpg",
    title:"October River",                      zh:"小河十月",   medium:"Oil on Canvas", year:"2003", type:"landscape", size:"120×180 cm", cny:"", usd:"", collection:"", notes:"" },

  { src:"works/风景/《金秋十月》160×180cm2009.jpg",
    title:"Golden October",                     zh:"金秋十月",   medium:"Oil on Canvas", year:"2009", type:"landscape", size:"160×180 cm", cny:"", usd:"", collection:"", notes:"" },

  { src:"works/风景/《圭山的雨季》50×70cm2008.jpg",
    title:"Rainy Season in Guishan",            zh:"圭山的雨季",  medium:"Oil on Canvas", year:"2008", type:"landscape", size:"50×70 cm",   cny:"", usd:"", collection:"", notes:"" },

  { src:"works/风景/《寸家祠堂》52×65cm2015.jpg",
    title:"Cun Family Ancestral Hall",          zh:"寸家祠堂",   medium:"Oil on Canvas", year:"2015", type:"landscape", size:"52×65 cm",   cny:"", usd:"", collection:"", notes:"" },

  { src:"works/风景/《和顺乡》布面油画 65×52cm 2015年.jpg",
    title:"Heshun Village",                     zh:"和顺乡",     medium:"Oil on Canvas", year:"2015", type:"landscape", size:"65×52 cm",   cny:"", usd:"", collection:"", notes:"" },

  { src:"works/风景/《和顺荷塘》布面油画 52×65cm 2015年.jpg",
    title:"Heshun Lotus Pond",                  zh:"和顺荷塘",   medium:"Oil on Canvas", year:"2015", type:"landscape", size:"52×65 cm",   cny:"", usd:"", collection:"", notes:"" },

  { src:"works/风景/《逆光》布面油画80x60cm2016年.jpg",
    title:"Against the Light",                  zh:"逆光",       medium:"Oil on Canvas", year:"2016", type:"landscape", size:"80×60 cm",   cny:"", usd:"", collection:"", notes:"" },

  { src:"works/风景/杨剑波《蓝船》布面油画100x80cm2017年.jpg",
    title:"Blue Boat",                          zh:"蓝船",       medium:"Oil on Canvas", year:"2017", type:"landscape", size:"100×80 cm",  cny:"", usd:"", collection:"", notes:"" },

  { src:"works/风景/《300号桥》板面油画30x40cm 2019年.jpg",
    title:"Bridge No.300",                      zh:"300号桥",    medium:"Oil on Panel",  year:"2019", type:"landscape", size:"30×40 cm",  cny:"", usd:"", collection:"", notes:"" },

  { src:"works/风景/《密西西比河》板面油画30x40cm2019年.jpg",
    title:"Mississippi River",                  zh:"密西西比河",  medium:"Oil on Panel",  year:"2019", type:"landscape", size:"30×40 cm",  cny:"", usd:"", collection:"", notes:"" },

  { src:"works/风景/《拉克罗斯的下午》板面油画30x40cm 2019年.jpg",
    title:"Afternoon in La Crosse",             zh:"拉克罗斯的下午", medium:"Oil on Panel", year:"2019", type:"landscape", size:"30×40 cm",  cny:"", usd:"", collection:"", notes:"" },

  { src:"works/风景/《拉科罗斯街道》板面油画30x40cm2019年.jpg",
    title:"La Crosse Street",                   zh:"拉科罗斯街道", medium:"Oil on Panel", year:"2019", type:"landscape", size:"30×40 cm",  cny:"", usd:"", collection:"", notes:"" },

  { src:"works/风景/《水泵房外》板面油画30x40cm2019年.jpg",
    title:"Outside the Pump House",             zh:"水泵房外",   medium:"Oil on Panel",  year:"2019", type:"landscape", size:"30×40 cm",  cny:"", usd:"", collection:"", notes:"" },

  { src:"works/风景/《河流博物馆》板面油画30x40cm2019年.jpg",
    title:"River Museum",                       zh:"河流博物馆",  medium:"Oil on Panel",  year:"2019", type:"landscape", size:"30×40 cm",  cny:"", usd:"", collection:"", notes:"" },

  { src:"works/风景/《美国花园》板面油画30x40cm2019年.jpg",
    title:"American Garden",                    zh:"美国花园",   medium:"Oil on Panel",  year:"2019", type:"landscape", size:"30×40 cm",  cny:"", usd:"", collection:"", notes:"" },

  { src:"works/风景/《老火车站》板面油画30x40cm 2019年.jpg",
    title:"Old Train Station",                  zh:"老火车站",   medium:"Oil on Panel",  year:"2019", type:"landscape", size:"30×40 cm",  cny:"", usd:"", collection:"", notes:"" },


  // ── Flying Fish and Birds · 飞鱼和鸟 ──────────────────────────────

  { src:"works/《飞鱼和鸟》系列/《飞鱼和鸟》-1 纸本铅笔 18×42cm 2021年（2500元）.jpg",
    title:"Flying Fish and Birds No.1", zh:"飞鱼和鸟-1", medium:"Pencil on Paper", year:"2021", type:"flying-fish", size:"18×42 cm", cny:"2500", usd:"", collection:"", notes:"" },

  { src:"works/《飞鱼和鸟》系列/《飞鱼和鸟》-2纸本铅笔 18×42cm 2021年（2500元）.jpg",
    title:"Flying Fish and Birds No.2", zh:"飞鱼和鸟-2", medium:"Pencil on Paper", year:"2021", type:"flying-fish", size:"18×42 cm", cny:"2500", usd:"", collection:"", notes:"" },

  { src:"works/《飞鱼和鸟》系列/《飞鱼和鸟》-3纸本铅笔 18×42cm 2021年（2500元）.jpg",
    title:"Flying Fish and Birds No.3", zh:"飞鱼和鸟-3", medium:"Pencil on Paper", year:"2021", type:"flying-fish", size:"18×42 cm", cny:"2500", usd:"", collection:"", notes:"" },

  { src:"works/《飞鱼和鸟》系列/《飞鱼和鸟》-4纸本铅笔 18×42cm 2021年（2500元）.jpg",
    title:"Flying Fish and Birds No.4", zh:"飞鱼和鸟-4", medium:"Pencil on Paper", year:"2021", type:"flying-fish", size:"18×42 cm", cny:"2500", usd:"", collection:"", notes:"" },

  { src:"works/《飞鱼和鸟》系列/《飞鱼和鸟》-5纸本铅笔 18×42cm 2021年（2500元）.jpg",
    title:"Flying Fish and Birds No.5", zh:"飞鱼和鸟-5", medium:"Pencil on Paper", year:"2021", type:"flying-fish", size:"18×42 cm", cny:"2500", usd:"", collection:"", notes:"" },

  { src:"works/《飞鱼和鸟》系列/《飞鱼和鸟》-6纸本铅笔 18×42cm 2021年（2500元）.jpg",
    title:"Flying Fish and Birds No.6", zh:"飞鱼和鸟-6", medium:"Pencil on Paper", year:"2021", type:"flying-fish", size:"18×42 cm", cny:"2500", usd:"", collection:"", notes:"" },

  { src:"works/《飞鱼和鸟》系列/《飞鱼和鸟》-7纸本铅笔 18×42cm 2018年（2500元）.jpg",
    title:"Flying Fish and Birds No.7", zh:"飞鱼和鸟-7", medium:"Pencil on Paper", year:"2018", type:"flying-fish", size:"18×42 cm", cny:"2500", usd:"", collection:"", notes:"" },

  { src:"works/《飞鱼和鸟》系列/《飞鱼和鸟》-8纸本铅笔 18×42cm 2018年（2500元）.jpg",
    title:"Flying Fish and Birds No.8", zh:"飞鱼和鸟-8", medium:"Pencil on Paper", year:"2018", type:"flying-fish", size:"18×42 cm", cny:"2500", usd:"", collection:"", notes:"" },


  // ── Tractor · 拖拉机 ───────────────────────────────────────────────

  { src:"works/《拖拉机》系列/《拖拉机》-2水彩明信片10×15cm（可摆放桌面）2016年（750元）.jpg",
    title:"Tractor No.2", zh:"拖拉机-2", medium:"Watercolour Postcard", year:"2016", type:"tractor", size:"10×15 cm", cny:"750", usd:"", collection:"", notes:"" },

  { src:"works/《拖拉机》系列/《拖拉机》-3水彩明信片10×15cm（可摆放桌面）2016年（750元）.jpg",
    title:"Tractor No.3", zh:"拖拉机-3", medium:"Watercolour Postcard", year:"2016", type:"tractor", size:"10×15 cm", cny:"750", usd:"", collection:"", notes:"" },

  { src:"works/《拖拉机》系列/《拖拉机》-4水彩明信片10×15cm（可摆放桌面）2016年（750元）.jpg",
    title:"Tractor No.4", zh:"拖拉机-4", medium:"Watercolour Postcard", year:"2016", type:"tractor", size:"10×15 cm", cny:"750", usd:"", collection:"", notes:"" },

  { src:"works/《拖拉机》系列/《拖拉机》-5水彩明信片10×15cm（可摆放桌面）2016年（750元）.jpg",
    title:"Tractor No.5", zh:"拖拉机-5", medium:"Watercolour Postcard", year:"2016", type:"tractor", size:"10×15 cm", cny:"750", usd:"", collection:"", notes:"" },

  { src:"works/《拖拉机》系列/《拖拉机》-6水彩明信片10×15cm（可摆放桌面）2016年（750元）.jpg",
    title:"Tractor No.6", zh:"拖拉机-6", medium:"Watercolour Postcard", year:"2016", type:"tractor", size:"10×15 cm", cny:"750", usd:"", collection:"", notes:"" },

  { src:"works/《拖拉机》系列/《拖拉机》-7水彩明信片10×15cm（可摆放桌面）2016年（750元）.jpg",
    title:"Tractor No.7", zh:"拖拉机-7", medium:"Watercolour Postcard", year:"2016", type:"tractor", size:"10×15 cm", cny:"750", usd:"", collection:"", notes:"" },

  { src:"works/《拖拉机》系列/《拖拉机》-8水彩明信片10×15cm（可摆放桌面）2016年（750元）.jpg",
    title:"Tractor No.8", zh:"拖拉机-8", medium:"Watercolour Postcard", year:"2016", type:"tractor", size:"10×15 cm", cny:"750", usd:"", collection:"", notes:"" },

  { src:"works/《拖拉机》系列/《拖拉机》-9水彩明信片10×15cm（可摆放桌面）2016年（750元）.jpg",
    title:"Tractor No.9", zh:"拖拉机-9", medium:"Watercolour Postcard", year:"2016", type:"tractor", size:"10×15 cm", cny:"750", usd:"", collection:"", notes:"" },


  // ── Red Machine · 红色机器 ─────────────────────────────────────────

  { src:"works/《红色机器》系列/《红色机器》-1水彩明信片10×15cm2021年（750元）.jpg",
    title:"Red Machine No.1", zh:"红色机器-1", medium:"Watercolour Postcard", year:"2021", type:"red-machine", size:"10×15 cm", cny:"750", usd:"", collection:"", notes:"" },

  { src:"works/《红色机器》系列/《红色机器》-2水彩明信片10×15cm2021年（750元）.jpg",
    title:"Red Machine No.2", zh:"红色机器-2", medium:"Watercolour Postcard", year:"2021", type:"red-machine", size:"10×15 cm", cny:"750", usd:"", collection:"", notes:"" },

  { src:"works/《红色机器》系列/《红色机器》-3水彩明信片10×15cm（可摆放桌面）2021年（750元）.jpg",
    title:"Red Machine No.3", zh:"红色机器-3", medium:"Watercolour Postcard", year:"2021", type:"red-machine", size:"10×15 cm", cny:"750", usd:"", collection:"", notes:"" },

];
