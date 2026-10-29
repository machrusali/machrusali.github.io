import { Icon } from "../components/Icon";
import { portfolioContent } from "../data/portfolio";

export function ContactSection() {
  const { identity } = portfolioContent;
  const emailHref = `mailto:${identity.email}`;

  return (
    <section className="contact-section shell" id="contact">
      <div className="contact-orbit" aria-hidden="true">
        <span />
        <span />
      </div>

      <p className="section-eyebrow">{portfolioContent.contact.sectionLabel}</p>
      <div className="code-decoration contact-section__code" aria-hidden="true">
        await <b>collaborate</b>();
      </div>
      <h2>
        {portfolioContent.contact.titleFirstLine}
        <br />
        {portfolioContent.contact.titleSecondLine} <em>{portfolioContent.contact.titleAccent}</em>
      </h2>
      <a href={emailHref}>
        <span>{portfolioContent.contact.emailLabel}</span>
        <Icon name="arrow" size={24} />
      </a>

      <div className="contact-meta">
        <a href={emailHref}>
          <Icon name="mail" size={18} /> {identity.email}
        </a>
        <a href={identity.linkedIn} target="_blank" rel="noreferrer">
          <Icon name="linkedin" size={18} /> {portfolioContent.contact.linkedInLabel}
        </a>
      </div>
    </section>
  );
}
