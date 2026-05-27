const SIGNATURES = [
  {
    name: "John Dory",
    detail:
      "Pan-roasted, brown butter and capers, with whatever greens the morning brings.",
    note: "Caught off the quay",
  },
  {
    name: "Belly Pork",
    detail:
      "Slow-rendered crackling, Bramley apple, mustard. The dish guests come back for.",
    note: "Outdoor-reared, Devon",
  },
  {
    name: "Smoked Haddock Tart",
    detail:
      "House-smoked, leek cream, chive oil. Brett's quiet, exact starter.",
    note: "Smoked in the kitchen",
  },
  {
    name: "Sticky Toffee Pudding",
    detail:
      "The one nobody skips. Dark muscovado, clotted cream, salted toffee.",
    note: "Made every morning",
  },
];

export default function Signatures() {
  return (
    <section className="sigs">
      <div className="container">
        <div className="sigs__head">
          <p className="eyebrow">A few of the ones that stay on the menu</p>
          <h2>
            What people <em>come back for</em>.
          </h2>
        </div>
        <div className="sigs__grid">
          {SIGNATURES.map((s) => (
            <article key={s.name} className="sig">
              <div className="sig__num" aria-hidden>
                {String(SIGNATURES.indexOf(s) + 1).padStart(2, "0")}
              </div>
              <h3 className="sig__name">{s.name}</h3>
              <p className="sig__detail">{s.detail}</p>
              <p className="sig__note smallcaps">{s.note}</p>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        .sigs { padding: 80px 0 60px; }
        .sigs__head {
          max-width: 720px;
          margin-bottom: 64px;
        }
        .sigs__head h2 { margin-top: 14px; }
        .sigs__head em { color: var(--accent); font-style: italic; }
        .sigs__grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 32px;
        }
        @media (max-width: 920px) {
          .sigs__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 36px; }
        }
        @media (max-width: 540px) {
          .sigs__grid { grid-template-columns: 1fr; gap: 28px; }
        }
        .sig {
          padding: 28px 0 0;
          border-top: 1px solid var(--surface-2);
          transition: border-color 400ms cubic-bezier(0.2,0.7,0.2,1);
        }
        .sig:hover { border-top-color: var(--accent); }
        .sig__num {
          font-family: var(--font-display), serif;
          font-style: italic;
          color: var(--accent);
          font-size: 1.05rem;
          margin-bottom: 18px;
        }
        .sig__name {
          margin-bottom: 12px;
          font-size: 1.55rem;
        }
        .sig__detail {
          font-size: 0.98rem;
          line-height: 1.65;
          color: var(--text);
          margin-bottom: 20px;
        }
        .sig__note { color: var(--muted); }
      `}</style>
    </section>
  );
}
