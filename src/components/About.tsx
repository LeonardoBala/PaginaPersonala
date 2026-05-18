export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-label reveal">About</div>
      <h2 className="section-title reveal">
        Despre <em>mine.</em>
      </h2>
      <div className="about-grid">
        <div className="about-quote reveal">
          „Învățarea continuă și creșterea profesională sunt ceea ce mă motivează să iau noi provocări."
        </div>
        <div className="about-text reveal">
          <p>
            Sunt un student entuziast și dedicat, vorbitor nativ de italiană și română, care își găsește pasiunea în
            construirea de aplicații solide și în colaborarea de echipă. Pe parcursul ultimilor ani am lucrat
            la proiecte care îmbină frontend-ul modern cu backend-uri robuste — de la API-uri REST în .NET
            până la interfețe React fluide.
          </p>
          <p>
            Am participat la hackathoane unde am construit împreună cu echipe internaționale aplicații
            de la idee la prototip funcțional în 48-72h, și am avut două internshipuri unde am atins
            întregul ciclu de dezvoltare: schemă de bază de date, repository pattern, controllere REST,
            unit tests, code reviews și deployment.
          </p>
          <p>
            Caut mereu să învăț tehnologii noi și să contribui la echipe unde calitatea codului contează.
          </p>
        </div>
      </div>
    </section>
  );
}
