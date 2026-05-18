export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <div className="hero-eyebrow">Software Developer / Oradea, RO</div>
        <h1>
          <span className="line"><span>Leonardo</span></span>
          <span className="line"><span>Bala<em>.</em></span></span>
          <span className="line"><span><em>Building</em> things.</span></span>
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
