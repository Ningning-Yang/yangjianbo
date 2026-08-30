# yangjianbo.com

Portfolio site for 杨剑波 / Yang Jianbo — static HTML, no build step. Deployed via GitHub Pages (`CNAME`).

| Path | What it is |
|---|---|
| `index.html` | English homepage |
| `zh/index.html` | Chinese homepage (mirrors the English one section for section) |
| `works.html` | Full catalogue |
| `blog/` | Journal posts |
| `styles.css` | All styles — shared by every page |
| `works-data.js` | **Single source of truth** for artwork metadata |
| `gallery.js`, `zh/gallery.js` | Gallery rendering + lightbox + scroll reveal |
| `generate-sitemap.js` | Rebuilds `sitemap.xml` from `works-data.js` |
| `watermark-images.py` | Produces the watermarked image tiers (below) |

---

## Image tiers — read this before adding any image

Clean, unwatermarked originals live **outside this repo**, at
`/Users/mac/IdeaProjects/yangjianbo-originals/`. They are never committed and never served.

Everything in the repo is watermarked. There are **two tiers**:

| Tier | Folder | Size | Watermark | Use for |
|---|---|---|---|---|
| Full | `works/` | original (~4600px, 3–9 MB) | **tiled across the whole image** | lightbox only — the click-to-enlarge view |
| Display | `small_image/works/` | 1200px wide (~160–420 KB) | small corner `© Yang Jianbo` | everything shown on a page: thumbnails, banners, `og:image` |

### The trap

`works/` is the highest resolution, so it looks like the right choice for a large
in-page image — but its watermark is **tiled across the entire painting** and is
glaring at display size. That is deliberate: it is the file a visitor can right-click
and save, so it is the one that has to be protected. **Never use `works/` inline.**

### The 600px rule

`small_image/` is 1200px wide. On a Retina screen (DPR 2) an image needs **2× its CSS
width** in real pixels to look sharp, so:

> **1200px source ÷ 2 = 600px maximum display width.**

Stay at or under 600px and `small_image/` is pixel-perfect. Go wider and it visibly
softens — brushwork blurs and the canvas weave disappears. The exhibition banner
(`.exh-strip` in `styles.css`) is capped at exactly `max-width: 600px` for this reason;
there is a comment there saying so.

Note the tier is 1200px *wide*, so tall/square paintings carry far more pixels than wide
ones — 《牧场》 is 1200×1050, 《暮色》 is only 1200×541. Judge by width, not by file size.

### If you ever need a bigger in-page image

Generate a mid-size tier from the originals rather than reaching for `works/`:

```bash
python3 watermark-images.py \
  --originals /Users/mac/IdeaProjects/yangjianbo-originals \
  --output    ./medium \
  --max-width 2000
```

2000px covers display widths up to 1000px at 2×, at roughly 550 KB per image. Then
point the `src` at `/medium/works/…`. (This was tried for the exhibition banner and
backed out — 600px at `small_image` looked better *and* suited the layout, so the
folder was removed. Recreate it only if a design genuinely needs the width.)

### Regenerating the display tier

```bash
python3 watermark-images.py \
  --originals /Users/mac/IdeaProjects/yangjianbo-originals \
  --output    ./small_image \
  --max-width 1200
```

`--max-width` downscales *before* watermarking, so the corner mark stays correctly
proportioned. Omitting it keeps full size. Originals are never modified. The script
mirrors the input folder structure, so `originals/works/X.jpg` → `small_image/works/X.jpg`.

Note: `watermark-images.py` is in `.gitignore`, so it lives only on this machine.

### Rules of thumb

- **Source width ÷ displayed CSS width ≥ 2.** This is the whole game.
- Add `loading="lazy" decoding="async"` to images below the fold.
- Images are drag/save-protected globally in `styles.css` (`pointer-events: none`,
  `user-drag: none`) — that is why gallery cards use a transparent `::after` overlay
  to catch clicks.

---

## Adding or changing artwork

1. Drop the clean original into `yangjianbo-originals/works/`.
2. Run `watermark-images.py` to build the `small_image/` version (see above);
   copy the full-size watermarked file into `works/`.
3. Add the entry to `works-data.js` — `src` points at the **`works/`** path;
   `gallery.js` swaps in `small_image/` for thumbnails automatically.
4. Run `node generate-sitemap.js`.

⚠️ `generate-sitemap.js` only emits the root URL. `sitemap.xml` currently also has a
hand-added `/zh/` entry — running the script **wipes it**. Either re-add it afterwards
or edit `sitemap.xml` by hand.

## Keeping the two languages in sync

`index.html` and `zh/index.html` are separate files with parallel structure. Any
section added to one must be added to the other, along with:

- the nav link
- the JSON-LD block (with the right `url` and `inLanguage`)
- the meta description / OG description / keywords

## Local preview

Static files, so any static server works:

```bash
python3 -m http.server 4123
```
