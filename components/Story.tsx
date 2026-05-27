export default function Story() {
  return (
    <section id="story" className="story">
      <div className="container story__inner">
        <div className="story__rule" aria-hidden />
        <p className="eyebrow">Brett & Naomi · since 2000</p>
        <h2 className="story__title">
          The room was small <em>on purpose</em>. The sitting is single{" "}
          <em>on purpose</em>.
        </h2>
        <div className="story__cols">
          <p>
            For twenty-five years Brett has cooked everything that leaves the
            pass; Naomi welcomes everyone who comes through the door. There are
            twelve seats. One sitting a night. Thursday to Saturday. No menu
            engineering, no upsell — just a long, unhurried meal in a room of
            people who chose to be there.
          </p>
          <p>
            Fish lands on the quay at Appledore. Lamb walks in from Hartland.
            Everything is made by Brett, from the bread to the petits fours.
            The wait list is the marketing.
          </p>
        </div>
      </div>
      <style>{`
        .story {
          padding: 140px 0 60px;
        }
        .story__inner {
          max-width: 880px;
        }
        .story__rule {
          width: 60px;
          height: 1px;
          background: var(--accent);
          margin-bottom: 28px;
        }
        .story__title {
          margin: 18px 0 56px;
          max-width: 18ch;
        }
        .story__title em {
          color: var(--accent);
          font-style: italic;
        }
        .story__cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          font-size: 1.08rem;
          color: var(--text);
          line-height: 1.7;
        }
        @media (max-width: 720px) {
          .story__cols { grid-template-columns: 1fr; gap: 24px; }
          .story { padding: 90px 0 40px; }
        }
      `}</style>
    </section>
  );
}
