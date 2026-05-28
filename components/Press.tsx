const QUOTES = [
  {
    text: "The flavours are out of this world. Fine dining with a heart.",
    source: "TripAdvisor · Travellers' Choice",
  },
  {
    text: "Warm welcome, and excellent service second to none.",
    source: "Google · 4.9 average",
  },
  {
    text: "Michelin-standard cooking in twelve covers. Worth the wait.",
    source: "Restaurant Guru · Top 4 in Bideford",
  },
];

export default function Press() {
  return (
    <section className="press cream-section">
      <div className="container">
        <div className="press__head">
          <p className="eyebrow">In our guests' words</p>
          <h2>
            Twenty-five years <em>of return visits</em>.
          </h2>
        </div>
        <div className="press__grid">
          {QUOTES.map((q, i) => (
            <figure key={i} className="press__quote">
              <span className="press__mark" aria-hidden>
                &ldquo;
              </span>
              <blockquote className="press__text">{q.text}</blockquote>
              <figcaption className="press__source">{q.source}</figcaption>
            </figure>
          ))}
        </div>
      </div>
      <style>{`
        .press {
          padding: 100px 0;
        }
        .press__head {
          max-width: 720px;
          margin-bottom: 64px;
        }
        .press__head h2 {
          color: var(--ink);
          margin-top: 14px;
        }
        .press__head em {
          color: var(--accent-2);
          font-style: italic;
        }
        .press__grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 40px;
        }
        @media (max-width: 820px) {
          .press__grid { grid-template-columns: 1fr; gap: 32px; }
          .press { padding: 70px 0; }
        }
        .press__quote {
          margin: 0;
          padding: 32px 0 0;
          border-top: 1px solid var(--cream-3);
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .press__mark {
          font-family: var(--font-display), serif;
          font-size: 3.2rem;
          line-height: 0.6;
          color: var(--accent-2);
        }
        .press__text {
          margin: 0;
          font-family: var(--font-display), serif;
          font-style: italic;
          font-weight: 400;
          font-size: 1.25rem;
          line-height: 1.45;
          color: var(--ink);
          max-width: 24ch;
        }
        .press__source {
          font-family: var(--font-body), sans-serif;
          font-size: 0.74rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--ink-muted);
          margin-top: auto;
          padding-top: 8px;
        }
      `}</style>
    </section>
  );
}
