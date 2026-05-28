import Plate from "./Plate";

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery__head">
          <p className="eyebrow">A look inside</p>
          <h2>
            Twelve seats, dressed for the <em>evening</em>.
          </h2>
        </div>
        <div className="gallery__grid">
          <div className="gallery__cell gallery__cell--tall">
            <Plate
              caption="The dining room"
              aspect="3/4"
              variant="candle"
            />
          </div>
          <div className="gallery__cell gallery__cell--wide">
            <Plate
              caption="A plate, mid-service"
              aspect="4/3"
              variant="amber"
            />
          </div>
          <div className="gallery__cell gallery__cell--short">
            <Plate
              caption="Last table of the night"
              aspect="4/3"
              variant="shadow"
            />
          </div>
        </div>
      </div>
      <style>{`
        .gallery {
          padding: 100px 0 60px;
        }
        .gallery__head {
          max-width: 720px;
          margin-bottom: 56px;
        }
        .gallery__head h2 { margin-top: 14px; }
        .gallery__head em { color: var(--accent); font-style: italic; }
        .gallery__grid {
          display: grid;
          grid-template-columns: 1.05fr 1.4fr;
          grid-template-rows: auto auto;
          gap: 28px;
        }
        .gallery__cell--tall {
          grid-row: span 2;
        }
        .gallery__cell--wide { grid-column: 2; }
        .gallery__cell--short { grid-column: 2; }
        @media (max-width: 760px) {
          .gallery__grid {
            grid-template-columns: 1fr;
          }
          .gallery__cell--tall,
          .gallery__cell--wide,
          .gallery__cell--short {
            grid-row: auto;
            grid-column: auto;
          }
          .gallery { padding: 70px 0 40px; }
        }
      `}</style>
    </section>
  );
}
