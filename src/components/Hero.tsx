import { useTypewriter } from '../hooks/useTypewriter';

const PHRASES = [
  'Building things.',
  'Solving problems.',
  'Writing clean code.',
  'Shipping products.',
];

export default function Hero() {
  const typed = useTypewriter(PHRASES);

  return (
    <section className="hero">
      <div className="hero-text">
        <div className="hero-eyebrow">Software Developer / Oradea, RO</div>
        <h1>
          <span className="line"><span>Leonardo</span></span>
          <span className="line"><span>Bala<em>.</em></span></span>
          <span className="line">
            <span>
              <em className="typewriter">{typed}</em>
              <span className="typewriter-cursor" aria-hidden="true">|</span>
            </span>
          </span>
        </h1>
        <p className="hero-desc">
          Student la Tehnologia Informației, pasionat de cod curat,
          arhitecturi solide și produse care rezolvă probleme reale.
          De la backend în .NET la interfețe în React.
        </p>
        <div className="hero-meta">
          <div className="meta-item">CURRENTLY<strong>Univ. of Oradea</strong></div>
          <div className="meta-item">FOCUS<strong>Full-Stack &amp; Backend</strong></div>
          <div className="meta-item">STATUS<strong>Open to work</strong></div>
        </div>
        <a
          href="/cv-leonardo-bala.pdf"
          download="CV-Leonardo-Bala.pdf"
          className="cv-btn"
          aria-label="Download CV"
        >
          <span className="cv-btn-icon">↓</span>
          <span className="cv-btn-text">Download CV</span>
        </a>
      </div>
      <div className="hero-visual">
        <div className="photo-frame-wrap">
          <div className="photo-frame">
            <img src="/me.png" alt="Leonardo Bala" />
          </div>
        </div>
      </div>
    </section>
  );
}
