# Memories Restaurant — Brand Brief

## Reference
- **Site URL analyzed:** http://www.memoriesrestaurant.co.uk/ (cert expired at time of analysis; brand sourced from TripAdvisor, Restaurant Guru, and Google reviews)
- **Files dropped in:** none

## Brand
- **Current website:** memoriesrestaurant.co.uk
- **What the brand is:** A tiny, family-run fine-dining restaurant in Northam, Bideford (North Devon). Brett (chef) and Naomi (host) have run it since 2000. Twelve covers. One sitting per night, Thursday–Saturday only. Locally-sourced British/European cooking. Booked 2–3 months ahead.
- **Services:**
  1. À la carte fine dining (single sitting, 7pm Thu–Sat)
  2. Private milestone occasions — anniversaries, birthdays, proposals
  3. Reservations by phone (01237 473419)

## Tagline (chosen)
**"Twelve seats. One sitting. Twenty-five years."**

## Brand essence
A neighbourhood restaurant that quietly operates at a Michelin standard. The room is small on purpose. The sitting is single on purpose. Everything is made by Brett, served by Naomi. The wait list is the marketing.

## Visual direction
Hushed, intimate, almost cinematic. Dark room, candlelight, the warmth of a single occupied dining room on a winter evening in Devon. Restrained typography over deep negatives. Nothing loud — confidence comes from holding back.

## Colour palette
```
--bg          #0E0B08   deep night-room
--surface     #161210   booth/banquette
--surface-2   #221C17   borders, hover
--accent      #D7A968   warm candlelight gold
--accent-2    #B4742E   amber flame, active states
--text        #F4ECDF   parchment / linen white
--muted       #8A7E6C   secondary text
--danger      #B85A4A   destructive only
```

## Typography
- **Display:** Cormorant Garamond (300/400/500, italic)
- **Body:** Manrope (300/400/500/600)
- **Base size:** 17px / 1.65 line-height

## Motion
- Entrance: ~1.4s cinematic fade, staggered (eyebrow → title lines → supporting → CTAs → meta → scroll cue)
- Hover: 400ms cubic-bezier eased
- Idle: candle flames flicker on a twin-frequency noise curve; dust drifts upward at ~0.05–0.17 units/s; camera breathes ±0.06 on x/y over ~12s
- Reduced-motion: scene freezes, message layer skips animation

## The signature animation — "The Single Sitting"
A dark dining-room space rendered as a cinematic 3D composition:
- **Seven candles** as additive-blended planes with a procedural radial-glow shader (hot core + amber halo), each flickering on its own twin-frequency phase
- **Two slow-drifting haze pools** far behind (deep amber, very low opacity) to suggest atmospheric depth
- **~480 dust motes** as additive points, drifting upward with subtle horizontal sway, looping when they exit the top of the frame
- **Camera rig** with cursor parallax (±0.45 x, ±0.28 y) plus ambient breathing, lerped at 0.04 — never snappy

No HDR CDN. Procedural lighting only. No literal table mesh — abstracted, atmospheric, the *feeling* of being inside the room before you arrive.

## Favicon
Generated: amber candle-flame glyph on the night-room background — `/public/favicon.svg`.

## Keywords used in copy
- twelve seats
- one sitting
- twenty-five years / since 2000
- Brett and Naomi
- North Devon
- locally sourced
- book ahead

## What we kept out
- Stock food photography
- Generic "fine dining" language ("indulge," "experience," "culinary journey")
- Loud color, neon accents, gradient blobs
- Multi-page nav with more than 3 items
- Online booking pretending phone isn't the channel — the phone is treated as primary on every page

## Voice
Quiet, exact, confident. Short sentences. No marketing froth. Facts are the seduction.

## Sticky-note summary
*The smallest great restaurant in North Devon. Twelve seats, one sitting, twenty-five years. Book ahead.*

---

## Site structure

1. **`/` — Home.** Hero ("The Single Sitting") · Story (Brett & Naomi · "the room was small on purpose") · Signatures (John Dory · Belly Pork · Smoked Haddock Tart · Sticky Toffee Pudding) · Reserve CTA (phone first, form fallback).
2. **`/menu` — À la carte.** Three courses (Start · Mains · Puddings), illustrative weekly menu with the note "the kitchen follows what arrives at the door". Dietary note framed with grace, not apology.
3. **`/reserve` — Reservations.** Giant tappable phone number as primary CTA. Mailto form as the "if we don't pick up" fallback. Address & hours below the form.

## Tech
- Next.js 16 (App Router) · React 19 · TypeScript
- React Three Fiber 9 · Three.js 0.170 · drei 10
- Scene loaded via `dynamic(..., { ssr: false })` (Vercel-safe)
- Two fonts via `next/font/google`
- No external services. Form is mailto. No CMS, no state library, no component kit.

## Deployed
- **Repo:** https://github.com/Norwolf23/memories-hero
- **Production:** https://memories-hero.vercel.app
