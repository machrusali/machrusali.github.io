import { ChromaPhoto } from "../components/ChromaPhoto";
import { Icon } from "../components/Icon";
import { portfolioContent } from "../data/portfolio";

export function HeroSection() {
  const { hero, identity } = portfolioContent;

  return (
    <section className="hero-section" id="home">
      <span className="hero-section__grid" />
      <span className="hero-section__orb hero-section__orb--one" />
      <span className="hero-section__orb hero-section__orb--two" />

      <aside className="space-system" aria-hidden="true">
        <span className="space-ring ring-a"><i /></span>
        <span className="space-ring ring-b"><i /></span>
        <span className="space-ring ring-c"><i /></span>
        <span className="space-core" />
      </aside>

      <div className="hero-section__inner">
        <header className="hero-section__eyebrow reveal">
          <span>
            <i /> {identity.availability}
          </span>
          <span>{identity.location}</span>
        </header>

        <article className="hero-section__profile reveal delay-one">
          <figure className="hero-section__portrait">
            <ChromaPhoto
              src={identity.portraitSrc}
              alt={identity.fullName}
            />
          </figure>
          <article className="hero-section__intro">
            <h1>
              {identity.firstName}
              <br />
              <em>{identity.lastName}</em>
            </h1>
            <p className="hero-section__role">{identity.role}</p>
            <p className="hero-section__facts">
              <span><b>{hero.experienceYears}</b> {hero.experienceLabel}</span>
              <span><b>{hero.city}</b> · {hero.country}</span>
            </p>
            <nav className="hero-section__actions">
              <a href="#projects">{hero.projectsLabel} <Icon name="arrow" size={17} /></a>
              <a href="#journey">{hero.journeyLabel}</a>
            </nav>
          </article>
        </article>

        <footer className="hero-section__footer reveal delay-two">
          <p>
            Saya <strong>{identity.fullName}</strong>, {hero.introduction}
          </p>
          <a className="round-link" href="#about" aria-label={hero.scrollLabel}>
            <Icon name="arrow" size={26} />
          </a>
        </footer>
      </div>

      <pre className="code-decoration--floating" aria-hidden="true">
        <span>01</span> <span className="typing-line line-one">const idea = understand(problem);</span>
        <br />
        <span>02</span> <span className="typing-line line-two">const system = build(solution);</span>
        <br />
        <span>03</span> <span className="typing-line line-three">return ship(system);</span>
      </pre>

      <aside className="code-decoration hero-section__code" aria-hidden="true">
        const <b>developer</b> = {`{`}
        <br />&nbsp;&nbsp;build(<i>impact</i>);
        <br />{`}`}
      </aside>
    </section>
  );
}
