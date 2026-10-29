import { useEffect, useState, type ReactNode } from "react"

type IconName = "arrow" | "briefcase" | "education" | "linkedin" | "mail" | "map"

const paths: Record<IconName, ReactNode> = {
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  briefcase: (
    <>
      <rect width="18" height="14" x="3" y="7" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
    </>
  ),
  education: (
    <>
      <path d="m3 10 9-5 9 5-9 5-9-5Z" />
      <path d="M7 12v5c3 2 7 2 10 0v-5M21 10v6" />
    </>
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <path d="M2 9h4v12H2zM4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
    </>
  ),
  mail: (
    <>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </>
  ),
  map: (
    <>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
}

function Icon({ name, size = 20 }: { name: IconName size?: number }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      width={size}
    >
      {paths[name]}
    </svg>
  )
}

const experiences = [
  {
    period: "2026 — SEKARANG",
    role: "Founder / Owner",
    company: "Panda Oren",
    location: "Indonesia",
    description:
      "Merintis startup digital dengan fokus pada kepemimpinan bisnis, pengembangan produk, dan pembangunan ekosistem software.",
    tags: ["Leadership", "Product", "Software Ecosystem"],
    current: true,
  },
  {
    period: "JUN 2021 — SEKARANG",
    role: "Software Engineer",
    company: "Mumtaz Teknologi Indonesia",
    location: "Surabaya",
    description:
      "Mengembangkan Smart Solution for Education mencakup aplikasi web, API untuk aplikasi mobile, dan platform Computer Based Test.",
    tags: ["PHP", "Laravel", "REST API", "CBT"],
    current: true,
  },
  {
    period: "SEP 2021 — 2023",
    role: "Software Engineer",
    company: "PT SISI",
    location: "Project-based · Freelance",
    description:
      "Menangani pengembangan software berbasis proyek secara paralel sebagai freelance bersama peran utama di Mumtaz.",
    tags: ["Project-based", "Backend"],
  },
  {
    period: "JUL 2019 — JUN 2021",
    role: "Software Engineer",
    company: "PT Ming Jaya Sejahtera",
    location: "Surabaya · kini ctlyst.id",
    description:
      "Membangun sistem untuk jamtangan.com: API Product dan Campaign, Web Tools, serta Web Inventory untuk Goods Transfer dan Pre Delivery Order.",
    tags: ["Go", "PHP", "API", "Inventory"],
  },
  {
    period: "MAR 2017 — JUL 2019",
    role: "Software Engineer · Team Lead",
    company: "PT SISI",
    location: "Gresik — Jakarta",
    description:
      "Memimpin pengembangan Employee Self Service, HRIS Waskita (payroll, learning, benefit), serta Procurement Website untuk PT Supreme Energy.",
    tags: ["Team Lead", "HRIS", "Payroll", "Procurement"],
  },
  {
    period: "OKT 2016 — MAR 2017",
    role: "Software Engineer",
    company: "Artavel",
    location: "Surabaya",
    description:
      "Mengembangkan IT Business Solutions untuk HRIS Semen Indonesia, termasuk Time Management System dan Performance Management.",
    tags: ["HRIS", "Time Management", "PHP"],
  },
  {
    period: "FEB 2016 — FEB 2017",
    role: "Software Engineer",
    company: "PT Multikreasi Abadi Selaras",
    location: "Surabaya",
    description:
      "Mengembangkan solusi software untuk proyek Asia Holiday Tour and Travel.",
    tags: ["Web Development", "Travel"],
  },
]

const skills = [
  { name: "PHP / Laravel", value: 94 },
  { name: "Go", value: 82 },
  { name: "MySQL", value: 88 },
  { name: "PostgreSQL", value: 84 },
]

function Label({
  number,
  children,
  light = false,
}: {
  number: string
  children: ReactNode
  light?: boolean
}) {
  return (
    <div className={`section-label ${light ? "light" : ""}`}>
      <span>{number}</span>
      <p>{children}</p>
    </div>
  )
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <main>
      <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <a className="brand" href="#home">
          <b>&lt;M/&gt;</b>
          <span>machrus.dev</span>
        </a>
        <button
          className="menu-button"
          aria-label="Buka menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            <span>01.</span> Tentang
          </a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>
            <span>02.</span> Pengalaman
          </a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            <span>03.</span> Keahlian
          </a>
          <a
            className="nav-cta"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Hubungi saya
          </a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="grid-lines" />
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="hero-copy">
            <div className="status-pill reveal">
              <i /> AVAILABLE FOR COLLABORATION
            </div>
            <p className="eyebrow reveal d1">Hello, world! Saya</p>
            <h1 className="reveal d1">
              Machrus
              <br />
              <span>Alifuddin.</span>
            </h1>
            <div className="role-line reveal d2">
              <b>&gt;</b>
              <span>Software Engineer</span>
              <i />
            </div>
            <p className="hero-description reveal d2">
              Membangun sistem backend yang tangguh, scalable, dan memberikan
              dampak nyata. Berpengalaman mengubah kebutuhan bisnis kompleks
              menjadi solusi software yang efisien.
            </p>
            <div className="hero-actions reveal d3">
              <a className="button primary" href="#experience">
                Lihat perjalanan saya <Icon name="arrow" size={18} />
              </a>
              <a
                className="text-link"
                href="mailto:machrus.alifuddin21@gmail.com"
              >
                <Icon name="mail" size={18} /> Kirim email
              </a>
            </div>
          </div>
          <div className="portrait-wrap reveal d2">
            <div className="portrait-code">
              <span>const</span> engineer = {"{"}
              <br />
              &nbsp;&nbsp;focus: <em>'backend'</em>,<br />
              &nbsp;&nbsp;passion: <em>'build'</em>
              <br />
              {"}"};
            </div>
            <div className="portrait-frame">
              <i className="corner tl" />
              <i className="corner br" />
              <img
                src="/assets/machrus-alifuddin.jpg"
                alt="Foto formal Machrus Alifuddin"
              />
              <i className="scan-line" />
              <small>IMG_2449.JPG</small>
            </div>
            <div className="experience-badge">
              <strong>10+</strong>
              <span>
                TAHUN
                <br />
                PENGALAMAN
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="about shell" id="about">
        <div>
          <Label number="01">TENTANG SAYA</Label>
          <h2>
            Saya menulis kode untuk
            <br /> <span>menyelesaikan masalah.</span>
          </h2>
        </div>
        <div className="about-copy">
          <p className="lead">
            Software Engineer dengan pengalaman mendalam dalam membangun
            aplikasi web, layanan API, dan sistem enterprise.
          </p>
          <p>
            Sepanjang perjalanan karier, saya telah bekerja lintas
            industri—mulai dari edukasi, e-commerce, HRIS, hingga procurement.
            Saya percaya software terbaik lahir dari pemahaman masalah yang
            baik, kolaborasi, dan perhatian pada detail.
          </p>
          <div className="facts">
            <div>
              <i>
                <Icon name="map" size={18} />
              </i>
              <p>
                <small>BERBASIS DI</small>Surabaya, Indonesia
              </p>
            </div>
            <div>
              <i>
                <Icon name="briefcase" size={18} />
              </i>
              <p>
                <small>FOKUS UTAMA</small>Backend Engineering
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="experience shell" id="experience">
        <header className="section-heading">
          <div>
            <Label number="02">PERJALANAN KARIER</Label>
            <h2>
              Pengalaman <span>profesional.</span>
            </h2>
          </div>
          <p>Perjalanan membangun produk dan sistem digital sejak 2016.</p>
        </header>
        <div className="timeline">
          {experiences.map((item, index) => (
            <article className="timeline-item" key={item.company + item.period}>
              <div className="timeline-meta">
                <p>{item.period}</p>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="marker">
                <i className={item.current ? "current" : ""} />
              </div>
              <div className="timeline-card">
                <div className="timeline-title">
                  <div>
                    <h3>{item.role}</h3>
                    <p className="company">@ {item.company}</p>
                  </div>
                  <p className="location">
                    <Icon name="map" size={14} /> {item.location}
                  </p>
                </div>
                <p className="description">{item.description}</p>
                <div className="tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills shell" id="skills">
        <div className="skills-panel">
          <div className="skill-copy">
            <Label number="03" light>
              TECH STACK
            </Label>
            <h2>
              Tools yang saya gunakan untuk <span>membangun.</span>
            </h2>
            <p>
              Fokus pada teknologi backend yang teruji untuk menghasilkan
              software yang stabil, aman, dan mudah dikembangkan.
            </p>
            <div className="skill-bars">
              {skills.map((skill, index) => (
                <div className="skill-row" key={skill.name}>
                  <div>
                    <span>{skill.name}</span>
                    <small>{skill.value}%</small>
                  </div>
                  <div className="track">
                    <i
                      style={
                        {
                          "--width": `${skill.value}%`,
                          "--delay": `${index * 120}ms`,
                        } as React.CSSProperties
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="terminal">
            <div className="terminal-top">
              <div>
                <i />
                <i />
                <i />
              </div>
              <span>machrus@portfolio: ~/profile</span>
              <b>⌘</b>
            </div>
            <pre>
              <code>
                <span className="muted">01</span>{" "}
                <span className="pink">package</span> main{"\n"}
                <span className="muted">02</span>
                {"\n"}
                <span className="muted">03</span>{" "}
                <span className="pink">type</span> Engineer{" "}
                <span className="pink">struct</span> {"{"}
                {"\n"}
                <span className="muted">04</span> Name{" "}
                <span className="blue">string</span>
                {"\n"}
                <span className="muted">05</span> Role{" "}
                <span className="blue">string</span>
                {"\n"}
                <span className="muted">06</span> Stack []
                <span className="blue">string</span>
                {"\n"}
                <span className="muted">07</span> {"}"}
                {"\n"}
                <span className="muted">08</span>
                {"\n"}
                <span className="muted">09</span>{" "}
                <span className="pink">func</span> main() {"{"}
                {"\n"}
                <span className="muted">10</span> me := Engineer{"{"}
                {"\n"}
                <span className="muted">11</span> Name:{" "}
                <span className="green">"Machrus Alifuddin"</span>,{"\n"}
                <span className="muted">12</span> Role:{" "}
                <span className="green">"Software Engineer"</span>,{"\n"}
                <span className="muted">13</span> Stack: []
                <span className="blue">string</span>
                {"{"}
                {"\n"}
                <span className="muted">14</span>{" "}
                <span className="green">"PHP"</span>,{" "}
                <span className="green">"Go"</span>,{" "}
                <span className="green">"MySQL"</span>,{"\n"}
                <span className="muted">15</span>{" "}
                <span className="green">"PostgreSQL"</span>,{"\n"}
                <span className="muted">16</span> {"}"},{"\n"}
                <span className="muted">17</span> {"}"}
                {"\n"}
                <span className="muted">18</span> me.Build(
                <span className="green">"things that matter"</span>)
                <b className="cursor">_</b>
                {"\n"}
                <span className="muted">19</span> {"}"}
              </code>
            </pre>
            <div className="terminal-bottom">
              <span>● NORMAL</span>
              <span>Go 1.22</span>
            </div>
          </div>
        </div>
      </section>

      <section className="education shell">
        <i className="education-icon">
          <Icon name="education" size={28} />
        </i>
        <div>
          <p>PENDIDIKAN</p>
          <h3>S1 Sistem Informasi</h3>
          <span>Universitas Narotama</span>
        </div>
        <small>AGUSTUS 2011 — FEBRUARI 2016</small>
      </section>

      <section className="contact shell" id="contact">
        <p>04 / MARI TERHUBUNG</p>
        <h2>Punya ide untuk dibangun?</h2>
        <h2>
          <span>Mari kita bicarakan.</span>
        </h2>
        <a
          className="button primary"
          href="mailto:machrus.alifuddin21@gmail.com"
        >
          Mulai percakapan <Icon name="arrow" size={18} />
        </a>
        <div className="contact-links">
          <a href="mailto:machrus.alifuddin21@gmail.com">
            <Icon name="mail" size={18} /> machrus.alifuddin21@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/machrus-alifuddin-688467130"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="linkedin" size={18} /> LinkedIn
          </a>
        </div>
      </section>
      <footer>
        <a className="brand" href="#home">
          <b>&lt;M/&gt;</b>
          <span>machrus.dev</span>
        </a>
        <p>
          Dirancang &amp; dibangun dengan detail. © {new Date().getFullYear()}
        </p>
        <a href="#home">KEMBALI KE ATAS ↑</a>
      </footer>
    </main>
  )
}
