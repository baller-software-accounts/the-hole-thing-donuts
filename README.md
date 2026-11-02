# The Hole Thing Donuts — Marketing Site

Mobile-first, dual-location site for **The Hole Thing Donuts** (Forney + Rockwall, TX). Locally owned since 2011.

Next.js 16 (App Router, Cache Components) · React 19 · TypeScript · Tailwind CSS v4. All pages static.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Layout
- `src/lib/business.ts` — single source of truth: both locations (address, phone, email, maps), hours, nav, Baller offer, `SITE_URL`.
- `src/lib/menu.ts` — menu categories/items (names from the shop's public listings; no prices on purpose).
- `src/lib/jsonld.ts` — schema.org Organization + one `Bakery`/`LocalBusiness` per shop.
- Pages: `/` home, `/menu`, `/locations` (hours + maps), `/order` (pre-order & catering via tel/mailto), `/about`, `/contact`.
- `public/images` — `logo.png` (from the shop's own Wix site), `hero.jpg`, `kolaches.jpg`, `catering.jpg` (AI-generated placeholders), `og.jpg`.

## Placeholders / to confirm with owner
- Food photos are generated placeholders — swap in real shop photos.
- Menu is categories + known items only; confirm the lineup, add prices if wanted.
- Hours are the same for both shops (Google/Facebook/Yelp); confirm per-store and holiday hours.
- Pre-order/catering are `mailto:`/`tel:` only — no form backend or online ordering.
- `SITE_URL` points at the vercel.app URL until a custom domain is connected.

## Deployment
Vercel team `greg152s-projects`, project `the-hole-thing-donuts`, deployed via Vercel MCP `create_deployment` with inline files (production target). Not on GitHub yet.
