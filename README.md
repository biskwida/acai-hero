# Acai Hero — website

A single-page site for **ACAI HERO SUPERFOODS™**, Sofia (bul. Vitosha).
Built with **Vite + React + framer-motion**, with a hand-crafted OKLCH design system.
"Tropical Editorial" look: warm paper, deep açaí purple, Amazon green, passionfruit & dragonfruit accents.

## Run it locally
```bash
npm install      # first time only
npm run dev      # then open http://localhost:5173
```

## Put it online (free)
```bash
npm run build    # creates a dist/ folder
```
Drag-and-drop the `dist/` folder onto **app.netlify.com/drop**, or connect this project to
**Vercel** or **GitHub Pages**. No server needed — it's a static site.

## Edit the menu
Everything lives in [`src/data/menu.js`](src/data/menu.js): item names, descriptions, prices (лв),
tags, plus the address, hours and the Glovo / Wolt / Bolt order links. Edit the file and the site
updates automatically. Add a tag by using one of the keys in `TAGS` (`bestseller`, `protein`,
`new`, `customize`, `deal`, `functional`).

## Add your own photos (optional)
The site is designed to look complete **without any photos** — every visual is hand-drawn SVG/CSS art.
To swap in real Instagram shots, drop images into [`public/images/`](public/images/) using the exact
filenames listed in [`public/images/README.md`](public/images/README.md). Missing files fall back to
the designed art, so nothing ever breaks.

## Project map
```
src/
  data/menu.js          ← all menu + venue content (edit here)
  styles/tokens.css     ← colors, type scale, spacing (the design system)
  styles/global.css     ← base styles, buttons, paper grain
  components/           ← Nav, Hero, Marquee, Spotlight, Menu, BuildBowl, Story, Visit, Footer
  components/Decor.jsx  ← the hand-drawn SVG art (bowl, leaves, berries, sun…)
.impeccable.md          ← the design brief / direction
```

Accessibility: respects `prefers-reduced-motion`, uses semantic landmarks, keyboard-focusable
controls, and AA-contrast text.
