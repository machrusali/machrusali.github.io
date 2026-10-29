import { Icon } from "../components/Icon";
import { portfolioContent } from "../data/portfolio";

export function EducationSection() {
  const { education } = portfolioContent;

  return (
    <section className="education-record" aria-labelledby="education-title">
      <div className="shell">
        <article className="education-card">
          <header className="education-card-header">
            <span className="education-card-code">
              <i aria-hidden="true" /> {education.codeLabel}
            </span>
            <span className="education-card-label">{education.recordLabel}</span>
          </header>

          <div className="education-card-main">
            <div className="education-card-copy">
              <span className="education-card-icon">
                <Icon name="education" size={27} />
              </span>
              <div>
                <p className="education-degree">{education.degree}</p>
                <h2 id="education-title">{education.title}</h2>
              </div>
            </div>

            <div className="education-card-meta">
              <span className="education-meta-label">{education.universityLabel}</span>
              <p className="education-school">{education.university}</p>
              <div className="education-period">
                <span className="education-meta-label">{education.studyPeriodLabel}</span>
                <div className="education-period-dates">
                  <time dateTime={education.startDate.dateTime}>
                    {education.startDate.label}
                  </time>
                  <i aria-hidden="true">—</i>
                  <time dateTime={education.endDate.dateTime}>
                    {education.endDate.label}
                  </time>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
