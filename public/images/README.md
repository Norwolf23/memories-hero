# Photos

The site currently renders warm amber **placeholders** wherever a photo of the restaurant should go. To drop in real photography:

1. Save the JPG/PNG into this folder using the filename below.
2. Update the matching `<Plate>` in the listed component to pass a `src` prop.
3. Commit and push — Vercel will redeploy.

| Filename suggestion | Used by | Aspect | What it shows |
|---|---|---|---|
| `pass.jpg` | `components/Story.tsx` | 4 / 5 (portrait) | Brett at the pass, plating |
| `dining-room.jpg` | `components/Gallery.tsx` | 3 / 4 (portrait) | Wide of the twelve-seat room, candles lit |
| `plate.jpg` | `components/Gallery.tsx` | 4 / 3 (landscape) | A single plated dish mid-service, close up |
| `last-table.jpg` | `components/Gallery.tsx` | 4 / 3 (landscape) | A guest or table detail, after-dinner mood |

## Example wiring

In `components/Story.tsx`, swap:

```tsx
<Plate caption="The pass · Brett at work" aspect="4/5" variant="amber" />
```

for:

```tsx
<Plate
  src="/images/pass.jpg"
  alt="Brett at the pass, plating the next course"
  caption="The pass · Brett at work"
  aspect="4/5"
/>
```

The placeholder variant disappears automatically once `src` is set.

## Tips for the shoot

- Shoot in the room with the lights as you'd actually serve. The candles are the brand.
- Tight crops beat wide shots — a single plate, a hand, a corner of the room.
- Portrait orientation for Story and the tall Gallery cell; landscape for the two shorter Gallery cells.
- 2000px on the longest side is plenty; let Next.js handle resizing.
