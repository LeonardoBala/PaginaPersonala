import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="section-label reveal">Journey</div>
      <h2 className="section-title reveal">
        Experience <em>so far.</em>
      </h2>
      <div className="timeline">
        {experiences.map((e) => (
          <div className="timeline-item reveal" key={`${e.date}-${e.title}`}>
            <div className="timeline-date">{e.date}</div>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{e.title}</h3>
              <div className="timeline-company">{e.company}</div>
              <p>{e.desc}</p>
              <div className="timeline-tags">
                {e.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
