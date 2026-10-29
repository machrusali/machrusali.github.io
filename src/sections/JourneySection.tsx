import { Fragment, useState } from "react";
import { Icon } from "../components/Icon";
import { SectionHeader } from "../components/SectionHeader";
import { portfolioContent } from "../data/portfolio";

type Experience = (typeof portfolioContent.experience)[number];

function ExperienceDetails({
  experience,
  mobile = false,
}: {
  experience: Experience;
  mobile?: boolean;
}) {
  return (
    <article className={`experience-card${mobile ? " experience-card--mobile" : ""}`}>
      <div className="experience-card__header">
        <span>{experience.period}</span>
        <span className="experience-card__status">●</span>
      </div>
      <p className="experience-card__eyebrow">{portfolioContent.journeySection.roleLabel}</p>
      <h3>{experience.role}</h3>
      <p className="experience-card__location">
        <Icon name="map" size={16} /> {experience.place}
      </p>
      <p className="experience-card__description">{experience.description}</p>
      <div className="experience-card__tags">
        {experience.stack.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
      {!mobile && (
        <div className="experience-card__code" aria-hidden="true">
          <span>function</span> build() {"{"}
          <br />
          &nbsp;&nbsp;learn();
          <br />
          &nbsp;&nbsp;solve();
          <br />
          &nbsp;&nbsp;repeat();
          <br />
          {"}"}
        </div>
      )}
    </article>
  );
}

export function JourneySection() {
  const { journeySection } = portfolioContent;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExperience = portfolioContent.experience[activeIndex];

  const selectExperience = (index: number) => {
    setActiveIndex(index);

    if (window.matchMedia("(max-width: 620px)").matches) {
      window.requestAnimationFrame(() => {
        document
          .querySelector(`[data-experience-index="${index}"]`)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  };

  return (
    <section className="experience-section shell" id="journey">
      <SectionHeader
        eyebrow={journeySection.sectionLabel}
        title={<>{journeySection.titleFirstLine}<br />{journeySection.titleSecondLine}</>}
        description={journeySection.description}
      />

      <div className="code-decoration experience-section__code" aria-hidden="true">
        git log --oneline<br /><b>career</b> --all
      </div>

      <div className="experience-layout">
        <div className="experience-list" role="tablist" aria-label={journeySection.tabListLabel}>
          {portfolioContent.experience.map((experience, index) => (
            <Fragment key={`${experience.company}-${experience.period}`}>
              <button
                type="button"
                data-experience-index={index}
                className={activeIndex === index ? "is-active" : ""}
                onClick={() => selectExperience(index)}
                role="tab"
                aria-selected={activeIndex === index}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <b>{experience.company}</b>
                <Icon name="arrow" size={18} />
              </button>
              {activeIndex === index && (
                <ExperienceDetails experience={activeExperience} mobile />
              )}
            </Fragment>
          ))}
        </div>

        <ExperienceDetails
          key={`${activeExperience.company}-${activeExperience.period}`}
          experience={activeExperience}
        />
      </div>
    </section>
  );
}
