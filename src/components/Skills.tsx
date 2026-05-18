import { skills } from '../data/skills';

function TechTicker() {
  const doubled = [...skills, ...skills];
  return (
    <div className="tech-ticker">
      <div className="ticker-track">
        {doubled.map((s, i) => (
          <span key={i}>
            <span className="ticker-item">{s.name}</span>
            <span className="ticker-sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-label reveal">Toolkit</div>
      <h2 className="section-title reveal">
        Skills <em>&amp; tech.</em>
      </h2>
      <div className="skills-grid reveal">
        {skills.map((s, i) => (
          <div className="skill-cell" key={s.name}>
            <div className="skill-num">{String(i + 1).padStart(2, '0')}</div>
            <div className="skill-name">{s.name}</div>
            <div className="skill-cat">{s.cat}</div>
          </div>
        ))}
      </div>
      <TechTicker />
    </section>
  );
}
