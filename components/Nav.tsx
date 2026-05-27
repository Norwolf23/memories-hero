import Link from "next/link";

export default function Nav() {
  return (
    <header className="site-nav">
      <div className="container site-nav__inner">
        <Link href="/" className="site-nav__brand" aria-label="Memories home">
          <span className="site-nav__mark" aria-hidden>
            ✦
          </span>
          <span className="site-nav__name">Memories</span>
        </Link>
        <nav aria-label="Primary" className="site-nav__links">
          <Link href="/menu">Menu</Link>
          <Link href="/reserve">Reserve</Link>
        </nav>
      </div>
      <style>{`
        .site-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          padding: 22px 0;
          background: linear-gradient(
            to bottom,
            rgba(14, 11, 8, 0.85),
            rgba(14, 11, 8, 0)
          );
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }
        .site-nav__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .site-nav__brand {
          display: inline-flex;
          align-items: baseline;
          gap: 0.55em;
          font-family: var(--font-display), serif;
          font-size: 1.45rem;
          font-weight: 400;
          letter-spacing: 0.01em;
        }
        .site-nav__mark {
          color: var(--accent);
          font-size: 0.85em;
          transform: translateY(-1px);
        }
        .site-nav__name {
          color: var(--text);
        }
        .site-nav__links {
          display: flex;
          gap: clamp(18px, 3vw, 36px);
          font-size: 0.78rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .site-nav__links a:hover { color: var(--accent); }
      `}</style>
    </header>
  );
}
