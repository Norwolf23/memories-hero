# Memories Restaurant

A three-page site for Memories Restaurant — 8 Fore Street, Northam, Bideford. Twelve seats, one sitting, since 2000.

Next.js 16 + React Three Fiber. The hero is a candlelit dining-room scene ("The Single Sitting"); the rest is a quiet à la carte menu and a phone-first reservation page.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy

Push to a Git repo, then import in Vercel — no build settings to change. The 3D scene is loaded client-side (`dynamic(..., { ssr: false })`) so the build won't choke on WebGL.

## Structure

```
app/
  page.tsx          home — hero + story + signatures + reserve cta
  menu/page.tsx     à la carte
  reserve/page.tsx  phone-first booking
components/
  Scene.tsx         the candle-room R3F scene
  Hero.tsx          message layer over the scene
  HeroFallback.tsx  no-WebGL static fallback
  Nav.tsx           top nav
  Footer.tsx        address, hours, phone
  Story.tsx         Brett & Naomi, the single sitting
  Signatures.tsx    four signature dishes
  ReserveBlock.tsx  the phone CTA
```

## Brand brief

See [memories-brief.md](./memories-brief.md).
