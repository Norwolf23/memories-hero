export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <p className="smallcaps">Find us</p>
          <p className="site-footer__line">
            8 Fore Street
            <br />
            Northam, Bideford
            <br />
            Devon EX39 1AW
          </p>
        </div>
        <div>
          <p className="smallcaps">Hours</p>
          <p className="site-footer__line">
            Thursday — Saturday
            <br />
            One sitting from 7pm
            <br />
            Closed Sunday — Wednesday
          </p>
        </div>
        <div>
          <p className="smallcaps">Reservations</p>
          <p className="site-footer__line">
            <a href="tel:+441237473419" className="site-footer__phone">
              01237 473419
            </a>
            <br />
            <span className="site-footer__muted">
              We answer between 10am and 6pm
            </span>
          </p>
        </div>
      </div>
      <div className="container site-footer__base">
        <p className="site-footer__copy">
          © {new Date().getFullYear()} Memories Restaurant · Brett & Naomi,
          since 2000
        </p>
      </div>
      <style>{`
        .site-footer {
          margin-top: 120px;
          padding: 80px 0 40px;
          border-top: 1px solid var(--surface-2);
          background: var(--surface);
          color: var(--text);
        }
        .site-footer__grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 48px;
          margin-bottom: 64px;
        }
        @media (max-width: 720px) {
          .site-footer__grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
        }
        .site-footer__line {
          margin-top: 14px;
          font-size: 0.98rem;
          color: var(--text);
          line-height: 1.7;
        }
        .site-footer__phone {
          font-family: var(--font-display), serif;
          font-size: 1.45rem;
          letter-spacing: 0.04em;
          color: var(--accent);
        }
        .site-footer__phone:hover { color: var(--accent-2); }
        .site-footer__muted {
          color: var(--muted);
          font-size: 0.88rem;
        }
        .site-footer__base {
          padding-top: 28px;
          border-top: 1px solid var(--surface-2);
        }
        .site-footer__copy {
          color: var(--muted);
          font-size: 0.78rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }
      `}</style>
    </footer>
  );
}
