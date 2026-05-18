import { useRef } from 'react';
import { projects, THUMB_PALETTES, type Project } from '../data/projects';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const palette = THUMB_PALETTES[index % THUMB_PALETTES.length];
  const initial = project.name.charAt(0).toUpperCase();
  const liveBadge = project.url ? '★ Featured · Live' : '★ Featured';

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(1000px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg) translateY(-6px)`;
  }

  function handleMouseLeave() {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) translateY(0)';
    }
  }

  return (
    <a
      ref={cardRef}
      className="project-card featured reveal"
      href={project.url || project.repo || '#'}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-thumb" style={{ background: palette.bg }}>
        <div className="thumb-initial" style={{ color: palette.accent }}>{initial}</div>
        <div className="thumb-label" style={{ color: palette.accent }}>{project.name}</div>
        <div className="thumb-grid" />
      </div>
      <div className="project-body">
        <div className="project-arrow">↗</div>
        <span className="featured-badge">{liveBadge}</span>
        <div className="project-name">{project.name}</div>
        <p className="project-desc">{project.description}</p>
        <div className="timeline-tags" style={{ marginBottom: '1.25rem' }}>
          {project.tags.map((t) => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>
        <div className="card-footer">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="card-link"
            >
              View Code ↗
            </a>
          )}
          {project.url && (
            <span className="card-link card-link-primary">Visit Live →</span>
          )}
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  const btnRef = useRef<HTMLAnchorElement>(null);

  function handleMagneticMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  }

  function handleMagneticLeave() {
    if (btnRef.current) btnRef.current.style.transform = 'translate(0, 0)';
  }

  return (
    <section id="projects">
      <div className="projects-header reveal">
        <div>
          <div className="section-label">Selected Work</div>
          <h2 className="section-title">
            From <em>GitHub.</em>
          </h2>
        </div>
        <div className="projects-meta">
          Live fetch from{' '}
          <a href="https://github.com/LeonardoBala" target="_blank" rel="noopener noreferrer">
            @LeonardoBala
          </a>
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>

      <div className="view-all-wrap reveal">
        <a
          ref={btnRef}
          href="https://github.com/LeonardoBala"
          target="_blank"
          rel="noopener noreferrer"
          className="view-all-btn"
          onMouseMove={handleMagneticMove}
          onMouseLeave={handleMagneticLeave}
        >
          <span className="view-all-label">Explore</span>
          <span className="view-all-text">View all on GitHub</span>
          <span className="view-all-arrow">→</span>
        </a>
      </div>
    </section>
  );
}
