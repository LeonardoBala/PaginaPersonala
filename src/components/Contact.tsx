export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-label">Get in touch</div>
      <h1 className="contact-title">
        Let's build <em>something.</em>
      </h1>
      <p className="contact-desc">
        Ești interesat de colaborare, ai un proiect interesant, sau vrei doar să ne cunoaștem?
        Sună bine. Răspund repede.
      </p>
      <div className="contact-links">
        <a href="mailto:leonardobala03@yahoo.com" className="contact-link primary">
          ✉ leonardobala03@yahoo.com
        </a>
        <a
          href="https://linkedin.com/in/leonardo-bala-a38057276"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn ↗
        </a>
        <a
          href="https://github.com/LeonardoBala"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
      </div>
    </section>
  );
}
