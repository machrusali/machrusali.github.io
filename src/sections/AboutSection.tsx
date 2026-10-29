import { portfolioContent } from "../data/portfolio";

export function AboutSection() {
  const { about } = portfolioContent;

  return (
    <section className="about-section shell" id="about">
      <div className="about-rail">
        <div className="section-eyebrow">{about.sectionLabel}</div>
        <div className="about-section__stats">
          {about.railStats.map((stat) => (
            <div key={stat.value}>
              <strong>{stat.value}</strong>
              <span>
                {stat.labelLines[0]}
                <br />
                {stat.labelLines[1]}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="about-section__copy">
        <p className="about-section__headline">
          <span className="about-section__headline-primary">{about.headline[0]}</span>{" "}
          <span className="about-section__headline-muted">{about.headline[1]}</span>{" "}
          <span className="about-section__headline-accent">{about.headline[2]}</span>{" "}
          <span className="about-section__headline-muted">{about.headline[3]}</span>
        </p>

        <div className="about-section__notes">
          <p>{about.introduction}</p>
          <div className="about-section__facts">
            {about.facts.map((fact) => (
              <div key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skill-list" aria-label="Keahlian teknis">
          <div className="skill-list__header">
              <span>{about.skillHeading}</span>
              <span>{about.skillLevelHeading}</span>
          </div>
          {about.skills.map((skill) => (
            <div className="skill-list__item" key={skill.name}>
              <b>{skill.name}</b>
              <div className="skill-list__track">
                <i style={{ width: `${skill.level}%` }} />
              </div>
              <span>{skill.level}%</span>
            </div>
          ))}
        </div>

        <div className="about-section__domains">
          {about.domains.map((domain) => (
            <article key={domain.category}>
              <span>{domain.category}</span>
              <strong>{domain.title}</strong>
              <p>{domain.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
