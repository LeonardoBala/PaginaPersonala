import { educationEntries, languageBlocks } from '../data/education';

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="section-label reveal">Studies</div>
      <h2 className="section-title reveal">
        Education <em>&amp; languages.</em>
      </h2>
      <div className="edu-grid">
        {educationEntries.map((entry) => (
          <div className="edu-card reveal" key={entry.title}>
            <div className="edu-period">{entry.period}</div>
            <div className="edu-title">{entry.title}</div>
            <div className="edu-institution">{entry.institution}</div>
            <div className="edu-detail">{entry.detail}</div>
          </div>
        ))}
      </div>
      <div className="edu-langs reveal">
        {languageBlocks.map((block) => (
          <div className="lang-block" key={block.label}>
            <h4>{block.label}</h4>
            <p>{block.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
