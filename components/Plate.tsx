import Image from "next/image";

type PlateProps = {
  /** Path under /public, e.g. "/images/dining-room.jpg". Omit to render the placeholder. */
  src?: string;
  alt?: string;
  /** Shown under the photo as a small caption. */
  caption: string;
  /** CSS aspect-ratio, e.g. "4/5" portrait, "3/2" landscape, "1/1" square. */
  aspect?: string;
  /** Warm amber tone variants for the placeholder. */
  variant?: "amber" | "candle" | "shadow";
};

const VARIANTS: Record<NonNullable<PlateProps["variant"]>, string> = {
  amber: `radial-gradient(ellipse at 30% 35%, rgba(215,169,104,0.42), transparent 60%),
          radial-gradient(ellipse at 70% 70%, rgba(180,116,46,0.28), transparent 60%),
          linear-gradient(135deg, #2F2319, #1A130D)`,
  candle: `radial-gradient(ellipse at 50% 45%, rgba(244,236,223,0.18), transparent 35%),
           radial-gradient(ellipse at 50% 45%, rgba(215,169,104,0.55), transparent 60%),
           radial-gradient(ellipse at 50% 90%, rgba(120,60,20,0.45), transparent 60%),
           linear-gradient(180deg, #1F1810, #120D08)`,
  shadow: `radial-gradient(ellipse at 80% 20%, rgba(215,169,104,0.22), transparent 55%),
           radial-gradient(ellipse at 20% 80%, rgba(120,60,20,0.18), transparent 55%),
           linear-gradient(135deg, #241A12, #0F0B07)`,
};

export default function Plate({
  src,
  alt,
  caption,
  aspect = "4/5",
  variant = "amber",
}: PlateProps) {
  return (
    <figure className="plate" style={{ aspectRatio: aspect }}>
      <div className="plate__frame">
        {src ? (
          <Image
            src={src}
            alt={alt ?? caption}
            fill
            sizes="(max-width: 720px) 100vw, 50vw"
            className="plate__img"
          />
        ) : (
          <div
            className="plate__placeholder"
            style={{ background: VARIANTS[variant] }}
            aria-hidden
          >
            <svg
              viewBox="0 0 64 64"
              className="plate__glyph"
              width="40"
              height="40"
            >
              <circle
                cx="32"
                cy="32"
                r="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.35"
              />
              <circle
                cx="32"
                cy="32"
                r="4"
                fill="currentColor"
                opacity="0.45"
              />
            </svg>
          </div>
        )}
        <div className="plate__vignette" aria-hidden />
      </div>
      <figcaption className="plate__caption">
        <span className="plate__cap-rule" aria-hidden />
        <span className="plate__cap-text">{caption}</span>
      </figcaption>
      <style>{`
        .plate {
          margin: 0;
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        .plate__frame {
          position: relative;
          flex: 1;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 2px;
          background: var(--surface);
          box-shadow:
            0 1px 0 rgba(244, 236, 223, 0.04) inset,
            0 28px 60px -28px rgba(0, 0, 0, 0.6);
        }
        .plate__placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
        }
        .plate__glyph {
          opacity: 0.5;
          transition: opacity 600ms cubic-bezier(0.2,0.7,0.2,1);
        }
        .plate:hover .plate__glyph { opacity: 0.8; }
        .plate__img { object-fit: cover; }
        .plate__vignette {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.25) 100%);
        }
        .plate__caption {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-top: 16px;
          font-family: var(--font-display), serif;
          font-style: italic;
          font-size: 0.95rem;
          color: var(--muted);
        }
        .plate__cap-rule {
          width: 22px;
          height: 1px;
          background: var(--accent);
          flex: 0 0 auto;
        }
        .cream-section .plate__caption { color: var(--ink-muted); }
        .cream-section .plate__cap-rule { background: var(--accent-2); }
      `}</style>
    </figure>
  );
}
