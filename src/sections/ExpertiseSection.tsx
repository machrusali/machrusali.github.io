import { SectionHeader } from "../components/SectionHeader";
import { portfolioContent } from "../data/portfolio";

export function ExpertiseSection() {
  const { expertise } = portfolioContent;

  return (
    <section className="capabilities-section" id="expertise">
      <div className="shell">
        <SectionHeader
          eyebrow={expertise.sectionLabel}
          title={<>{expertise.titleFirstLine}<br />{expertise.titleSecondLine}</>}
          description={expertise.description}
        />

        <div className="code-decoration capabilities-section__code" aria-hidden="true">
          // clean code<br /><b>simple systems</b><br />reliable results
        </div>

        <div className="capabilities-grid">
          {portfolioContent.capabilities.map((capability) => (
            <article key={capability.number}>
              <span>{capability.number}</span>
              <div className="capabilities-card__icon">&lt;/&gt;</div>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <small>{capability.technologies}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
