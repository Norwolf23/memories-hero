export default function HeroFallback() {
  return (
    <div className="hero-fallback" aria-hidden>
      <div className="hero-fallback__glow hero-fallback__glow--a" />
      <div className="hero-fallback__glow hero-fallback__glow--b" />
      <div className="hero-fallback__glow hero-fallback__glow--c" />
      <style>{`
        .hero-fallback {
          position: absolute;
          inset: 0;
          overflow: hidden;
          background:
            radial-gradient(ellipse at 30% 60%, rgba(180,116,46,0.18), transparent 55%),
            radial-gradient(ellipse at 70% 40%, rgba(215,169,104,0.16), transparent 55%),
            var(--bg);
        }
        .hero-fallback__glow {
          position: absolute;
          width: 50vmax;
          height: 50vmax;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.5;
          mix-blend-mode: screen;
        }
        .hero-fallback__glow--a {
          background: radial-gradient(circle, #D7A968, transparent 60%);
          top: 30%; left: 12%;
        }
        .hero-fallback__glow--b {
          background: radial-gradient(circle, #B4742E, transparent 60%);
          top: 45%; left: 55%;
        }
        .hero-fallback__glow--c {
          background: radial-gradient(circle, #7A3D14, transparent 60%);
          top: 20%; left: 70%;
        }
      `}</style>
    </div>
  );
}
