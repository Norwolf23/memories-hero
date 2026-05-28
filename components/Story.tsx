import Plate from "./Plate";

export default function Story() {
  return (
    <section id="story" className="story cream-section">
      <div className="container story__inner">
        <div className="story__text">
          <p className="eyebrow">Brett &amp; Naomi · since 2000</p>
          <h2 className="story__title">
            The room was small <em>on purpose</em>. The sitting is single{" "}
            <em>on purpose</em>.
          </h2>
          <div className="story__cols">
            <p>
              For twenty-five years Brett has cooked everything that leaves the
              pass; Naomi welcomes everyone who comes through the door. There
              are twelve seats. One sitting a night. Thursday to Saturday. No
              menu engineering, no upsell — just a long, unhurried meal in a
              room of people who chose to be there.
            </p>
            <p>
              Fish lands on the quay at Appledore. Lamb walks in from Hartland.
              Everything is made by Brett, from the bread to the petits fours.
              The wait list is the marketing.
            </p>
          </div>
        </div>
        <div className="story__plate">
          <Plate
            caption="The pass · Brett at work"
            aspect="4/5"
            variant="amber"
          />
        </div>
      </div>
      <style>{`
        .story {
          padding: 120px 0;
        }
        .story__inner {
          display: grid;
          grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
          gap: clamp(36px, 6vw, 88px);
          align-items: center;
        }
        @media (max-width: 880px) {
          .story__inner { grid-template-columns: 1fr; }
          .story__plate { order: -1; max-width: 480px; margin: 0 auto; }
          .story { padding: 80px 0; }
        }
        .story__text { max-width: 56ch; }
        .story__title {
          margin: 18px 0 40px;
          max-width: 18ch;
          color: var(--ink);
        }
        .story__title em {
          color: var(--accent-2);
          font-style: italic;
        }
        .story__cols {
          display: grid;
          gap: 24px;
          font-size: 1.06rem;
          color: var(--ink);
          line-height: 1.75;
        }
      `}</style>
    </section>
  );
}
