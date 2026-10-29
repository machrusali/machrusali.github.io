import { Fragment } from "react";
import { Icon } from "../components/Icon";
import { SectionHeader } from "../components/SectionHeader";
import { portfolioContent, type ProjectPreviewContent } from "../data/portfolio";

function ProjectPreview({ preview }: { preview: ProjectPreviewContent }) {
  return (
    <>
      {preview.kind === "dashboard" && (
        <div className="preview-dashboard">
          <nav><b>{preview.brand}</b><span>{preview.navigation}</span></nav>
          <strong>{preview.heading}</strong>
          <div className="preview-metrics">
            {preview.metrics.map((metric) => (
              <i key={metric.label}><b>{metric.value}</b><small>{metric.label}</small></i>
            ))}
          </div>
          <div className="preview-table">
            {preview.rows.map((row) => (
              <Fragment key={row.label}>
                <span>{row.label}</span><b>{row.status}</b>
              </Fragment>
            ))}
          </div>
        </div>
      )}
      {preview.kind === "learning" && (
        <div className="preview-learning">
          <nav><b>{preview.brand}</b><span>{preview.navigation}</span></nav>
          <strong>{preview.heading}</strong>
          <div className="preview-progress"><i /></div>
          <small>{preview.progressLabel}</small>
          <div className="preview-course">
            <i /><span>{preview.course.title}</span><b>{preview.course.lessonCount}</b>
          </div>
        </div>
      )}
      {preview.kind === "commerce" && (
        <div className="preview-commerce">
          <nav><b>{preview.brand}</b><span>{preview.navigation}</span></nav>
          <strong>{preview.heading}</strong>
          <div className="preview-products"><i /><i /><i /></div>
          <small>{preview.caption}</small>
        </div>
      )}
    </>
  );
}

export function ProjectsSection() {
  const { projectsSection } = portfolioContent;

  return (
    <section className="projects-section shell" id="projects">
      <SectionHeader
        eyebrow={projectsSection.sectionLabel}
        title={<>{projectsSection.titleFirstLine}<br />{projectsSection.titleSecondLine}</>}
        description={projectsSection.description}
      />

      <div className="code-decoration projects-section__code" aria-hidden="true">
        SELECT *<br />FROM <b>projects</b><br />ORDER BY impact;
      </div>

      <div className="projects-grid">
        {portfolioContent.projects.map((project, index) => (
          <article
            className={`project-card project-card--${project.color}`}
            key={project.title}
          >
            <div className={`project-window project-window--${project.color}-preview`}>
              <div className="project-window-bar"><span /><span /><span /></div>
              <ProjectPreview preview={project.preview} />
            </div>
            <div className="project-number">{String(index + 1).padStart(2, "0")}</div>
            <p className="project-type">{project.category}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="project-arrow"><Icon name="arrow" size={18} /></span>
          </article>
        ))}
      </div>
    </section>
  );
}
