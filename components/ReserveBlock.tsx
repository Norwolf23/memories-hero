import Link from "next/link";

export default function ReserveBlock() {
  return (
    <section className="reserve-block">
      <div className="container reserve-block__inner">
        <p className="eyebrow">Reservations</p>
        <h2 className="reserve-block__title">
          The next table is yours <em>if you ring</em>.
        </h2>
        <p className="reserve-block__supporting">
          Bookings open two to three months ahead. We answer the phone between
          10am and 6pm.
        </p>
        <a href="tel:+441237473419" className="reserve-block__phone">
          01237 473419
        </a>
        <Link href="/reserve" className="btn">
          Or send us your details
        </Link>
      </div>
      <style>{`
        .reserve-block {
          padding: 100px 0 40px;
        }
        .reserve-block__inner {
          max-width: 720px;
          text-align: center;
          margin-inline: auto;
        }
        .reserve-block__title {
          margin: 18px 0 24px;
        }
        .reserve-block__title em {
          color: var(--accent);
          font-style: italic;
        }
        .reserve-block__supporting {
          color: var(--text);
          max-width: 38ch;
          margin: 0 auto 40px;
          font-size: 1.05rem;
          line-height: 1.7;
        }
        .reserve-block__phone {
          display: block;
          font-family: var(--font-display), serif;
          font-size: clamp(2.4rem, 6vw, 3.6rem);
          font-weight: 300;
          color: var(--accent);
          letter-spacing: 0.04em;
          margin-bottom: 36px;
          transition: color 400ms cubic-bezier(0.2,0.7,0.2,1);
        }
        .reserve-block__phone:hover { color: var(--accent-2); }
      `}</style>
    </section>
  );
}
