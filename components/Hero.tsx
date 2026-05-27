"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import HeroFallback from "./HeroFallback";

const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
  loading: () => <HeroFallback />,
});

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__scene">
        <Scene />
      </div>
      <div className="hero__vignette" aria-hidden />
      <div className="container hero__content">
        <p className="hero__eyebrow">Northam · Bideford · since 2000</p>
        <h1 className="hero__title">
          <span className="hero__title-line">Twelve seats.</span>
          <span className="hero__title-line">One sitting.</span>
          <span className="hero__title-line hero__title-line--italic">
            Twenty-five years.
          </span>
        </h1>
        <p className="hero__supporting">
          A small fine-dining restaurant in North Devon. Brett cooks. Naomi
          hosts. Thursday to Saturday, from seven.
        </p>
        <div className="hero__ctas">
          <Link href="/reserve" className="btn btn-solid">
            Reserve a table
          </Link>
          <Link href="/menu" className="btn">
            See the menu
          </Link>
        </div>
        <div className="hero__meta">
          <span>4.9 ★ · 290+ reviews</span>
          <span className="hero__meta-sep">·</span>
          <span>Booked 2–3 months ahead</span>
        </div>
      </div>
      <a href="#story" className="hero__scroll" aria-label="Scroll to story">
        <span>Read on</span>
        <span className="hero__scroll-arrow" aria-hidden>
          ↓
        </span>
      </a>

      <style>{`
        .hero {
          position: relative;
          isolation: isolate;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding: 120px 0 80px;
        }
        .hero__scene {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .hero__vignette {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            radial-gradient(ellipse at center, transparent 30%, rgba(14,11,8,0.55) 100%),
            linear-gradient(to bottom, rgba(14,11,8,0.55), transparent 22%, transparent 70%, rgba(14,11,8,0.85));
          pointer-events: none;
        }
        .hero__content {
          position: relative;
          z-index: 2;
          max-width: 820px;
          animation: heroIn 1400ms cubic-bezier(0.2, 0.7, 0.2, 1) both;
          animation-delay: 200ms;
        }
        @keyframes heroIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero__eyebrow {
          font-family: var(--font-display), serif;
          font-style: italic;
          color: var(--accent);
          letter-spacing: 0.05em;
          margin-bottom: 28px;
          font-size: 1rem;
          animation: heroIn 1200ms cubic-bezier(0.2,0.7,0.2,1) both;
          animation-delay: 350ms;
        }
        .hero__title {
          display: flex;
          flex-direction: column;
          gap: 0.05em;
          margin-bottom: 36px;
        }
        .hero__title-line {
          display: block;
          animation: heroIn 1400ms cubic-bezier(0.2,0.7,0.2,1) both;
        }
        .hero__title-line:nth-of-type(1) { animation-delay: 500ms; }
        .hero__title-line:nth-of-type(2) { animation-delay: 700ms; }
        .hero__title-line:nth-of-type(3) { animation-delay: 900ms; }
        .hero__title-line--italic {
          font-style: italic;
          color: var(--accent);
        }
        .hero__supporting {
          max-width: 36em;
          font-size: 1.15rem;
          line-height: 1.65;
          color: var(--text);
          margin-bottom: 44px;
          animation: heroIn 1400ms cubic-bezier(0.2,0.7,0.2,1) both;
          animation-delay: 1050ms;
        }
        .hero__ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 56px;
          animation: heroIn 1400ms cubic-bezier(0.2,0.7,0.2,1) both;
          animation-delay: 1200ms;
        }
        .hero__meta {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          font-size: 0.82rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
          animation: heroIn 1400ms cubic-bezier(0.2,0.7,0.2,1) both;
          animation-delay: 1350ms;
        }
        .hero__meta-sep { color: var(--surface-2); }
        .hero__scroll {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 0.74rem;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--muted);
          animation: heroIn 1400ms cubic-bezier(0.2,0.7,0.2,1) both;
          animation-delay: 1500ms;
        }
        .hero__scroll:hover { color: var(--accent); }
        .hero__scroll-arrow {
          display: inline-block;
          animation: bob 2.6s ease-in-out infinite;
        }
        @keyframes bob {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(6px); }
        }
        @media (max-width: 560px) {
          .hero__scroll { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero__content,
          .hero__eyebrow,
          .hero__title-line,
          .hero__supporting,
          .hero__ctas,
          .hero__meta,
          .hero__scroll {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
