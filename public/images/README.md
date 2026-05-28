# Photos

Real photos are wired in. The components currently use these files:

| File | Used by | Aspect (cropped to) | Native source |
|---|---|---|---|
| `pass.jpg` | `components/Story.tsx` | 3 / 4 portrait | Cooker King · Unsplash |
| `dining-room.jpg` | `components/Gallery.tsx` (tall cell) | 2 / 3 portrait | Vladimir Gladkov · Unsplash |
| `table-candlelight.jpg` | `components/Gallery.tsx` (right top) | 4 / 5 portrait | Zac Cain · Unsplash |
| `twelve-seats.jpg` | `components/Gallery.tsx` (right bottom) | 4 / 5 portrait | Nadia Valko · Unsplash |

## Swapping in real Memories photography

When you have actual photography of the restaurant, just overwrite the JPGs above with the same filenames. The components do not need to change — Next.js will pick up the new files on the next build.

Aspect targets to shoot for (with safety crop room):
- **pass.jpg** — 3 / 4 portrait — Brett at the pass, plating
- **dining-room.jpg** — 2 / 3 portrait — wide of the room with candles lit
- **table-candlelight.jpg** — 4 / 5 portrait — table detail with candles and flowers
- **twelve-seats.jpg** — 4 / 5 portrait — long table set before service

## Adding new photo slots

`<Plate>` (from `components/Plate.tsx`) takes:
- `src` — public path, e.g. `/images/your-photo.jpg`
- `alt` — accessible alt text
- `caption` — italic caption shown beneath
- `aspect` — CSS aspect-ratio, e.g. `"4/5"` portrait or `"3/2"` landscape

Omit `src` to fall back to one of three warm amber placeholders (`variant`: `amber` / `candle` / `shadow`).
