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
              src="/images/dining-room.jpg"
              alt="A long table set by the window, candles burning, evening light outside"
              caption="The dining room"
              aspect="2/3"
            />
          </div>
          <div className="gallery__cell gallery__cell--right-top">
            <Plate
              src="/images/table-candlelight.jpg"
              alt="A warmly lit table with tall taper candles, flowers and pudding"
              caption="Pudding, by candlelight"
              aspect="4/5"
            />
          </div>
          <div className="gallery__cell gallery__cell--right-bottom">
            <Plate
              src="/images/twelve-seats.jpg"
              alt="The long table set with flowers, glasses and small plates before service"
              caption="Twelve seats, set"
              aspect="4/5"
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
          grid-template-columns: 1.45fr 1fr;
          gap: 28px;
          align-items: start;
        }
        .gallery__cell--tall {
          grid-column: 1;
          grid-row: 1 / span 2;
        }
        .gallery__cell--right-top { grid-column: 2; grid-row: 1; }
        .gallery__cell--right-bottom { grid-column: 2; grid-row: 2; }
        @media (max-width: 760px) {
          .gallery__grid {
            grid-template-columns: 1fr;
          }
          .gallery__cell--tall,
          .gallery__cell--right-top,
          .gallery__cell--right-bottom {
            grid-row: auto;
            grid-column: auto;
          }
          .gallery { padding: 70px 0 40px; }
        }
      `}</style>
    </section>
  );
}
