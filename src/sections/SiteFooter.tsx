import { portfolioContent } from "../data/portfolio";

export function SiteFooter() {
  const { identity } = portfolioContent;

  return (
    <footer className="site-footer">
      <a className="brand-mark" href="#home">
        {portfolioContent.brand}<span>.</span>
      </a>
      <p>{portfolioContent.footer}</p>
      <p>© {new Date().getFullYear()} {identity.fullName}</p>
    </footer>
  );
}
