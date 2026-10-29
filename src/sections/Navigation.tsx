import { useEffect, useState } from "react";
import { Icon } from "../components/Icon";
import { portfolioContent } from "../data/portfolio";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`site-nav${isScrolled ? " is-scrolled" : ""}`}>
      <a
        className="brand-mark"
        href="#home"
        aria-label={`Beranda ${portfolioContent.identity.fullName}`}
      >
        {portfolioContent.brand}<span>.</span>
      </a>

      <button
        className="site-nav__toggle"
        type="button"
        aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
      >
        <span />
        <span />
      </button>

      <div className={`site-nav__links${isMenuOpen ? " is-open" : ""}`}>
        {portfolioContent.navigation.map((item) => (
          <a href={item.href} key={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a className="site-nav__contact" href={`mailto:${portfolioContent.identity.email}`}>
          {portfolioContent.navigationContactLabel} <Icon name="arrow" size={17} />
        </a>
      </div>
    </nav>
  );
}
