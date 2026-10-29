import { Fragment, useEffect, useState, type ReactNode } from "react"

type IconName = "arrow" | "education" | "linkedin" | "mail" | "map"

const paths: Record<IconName, ReactNode> = {
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
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

function ChromaPhoto({ src, alt }: { src: string; alt: string }) {
  const [processedSrc, setProcessedSrc] = useState<string | null>(null)

  useEffect(() => {
    const image = new Image()
    image.src = src
    image.onload = () => {
      const canvas = document.createElement("canvas")
      canvas.width = image.naturalWidth
      canvas.height = image.naturalHeight
      const context = canvas.getContext("2d")
      if (!context) return
      context.drawImage(image, 0, 0)
      const pixels = context.getImageData(0, 0, canvas.width, canvas.height)
      for (let index = 0; index < pixels.data.length; index += 4) {
        const red = pixels.data[index]
        const green = pixels.data[index + 1]
        const blue = pixels.data[index + 2]
        const blueStrength = blue - Math.max(red, green)
        if (blue > 145 && blueStrength > 35) pixels.data[index + 3] = 0
        else if (blue > 115 && blueStrength > 20) pixels.data[index + 3] = 90
      }
      context.putImageData(pixels, 0, 0)
      setProcessedSrc(canvas.toDataURL("image/png"))
    }
  }, [src])

  return (
    <img
      className={processedSrc ? "portrait-image is-ready" : "portrait-image"}
      src={processedSrc ?? src}
      alt={alt}
    />
  )
}

const experiences = [
  {
    period: "2026 — sekarang",
    role: "Founder / Owner",
    company: "Panda Oren",
    place: "Indonesia",
    description:
      "Merintis startup digital dengan fokus pada kepemimpinan bisnis, pengembangan produk, dan pembangunan ekosistem software.",
    stack: ["Leadership", "Product", "Software Ecosystem"],
  },
  {
    period: "Jun 2021 — sekarang",
    role: "Software Engineer",
    company: "Mumtaz Teknologi Indonesia",
    place: "Surabaya",
    description:
      "Membangun Smart Solution for Education: aplikasi web, API mobile berbasis PHP/Laravel, dan platform Computer Based Test.",
    stack: ["PHP", "Laravel", "REST API", "CBT"],
  },
  {
    period: "Sep 2021 — 2023",
    role: "Software Engineer",
    company: "PT SISI",
    place: "Freelance · Project-based",
    description:
      "Mengembangkan software berbasis proyek secara paralel dengan peran utama di Mumtaz Teknologi Indonesia.",
    stack: ["Backend", "Project-based"],
  },
  {
    period: "Jul 2019 — Jun 2021",
    role: "Software Engineer",
    company: "PT Ming Jaya Sejahtera",
    place: "Surabaya · kini ctlyst.id",
    description:
      "Membangun API Product dan Campaign untuk jamtangan.com, Web Tools, dan Web Inventory untuk Goods Transfer serta Pre Delivery Order.",
    stack: ["Go", "PHP", "API", "Inventory"],
  },
  {
    period: "Mar 2017 — Jul 2019",
    role: "Software Engineer · Team Lead",
    company: "PT SISI",
    place: "Gresik — Jakarta",
    description:
      "Memimpin pengembangan Employee Self Service, HRIS Waskita, dan Procurement Website untuk PT Supreme Energy.",
    stack: ["Team Lead", "HRIS", "Payroll", "Procurement"],
  },
  {
    period: "Okt 2016 — Mar 2017",
    role: "Software Engineer",
    company: "Artavel",
    place: "Surabaya",
    description:
      "Mengembangkan HRIS Semen Indonesia, termasuk Time Management System dan Performance Management.",
    stack: ["HRIS", "Time Management", "PHP"],
  },
  {
    period: "Feb 2016 — Feb 2017",
    role: "Software Engineer",
    company: "PT Multikreasi Abadi Selaras",
    place: "Surabaya",
    description:
      "Mengembangkan solusi software untuk Asia Holiday Tour and Travel.",
    stack: ["Web Development", "Travel"],
  },
]

const capabilities = [
  {
    number: "01",
    title: "Backend systems",
    copy: "Arsitektur dan layanan backend yang stabil untuk menangani proses bisnis nyata.",
    code: "Laravel · Go · REST API",
  },
  {
    number: "02",
    title: "Data & integration",
    copy: "Struktur data yang rapi, integrasi antarsistem, dan alur informasi yang efisien.",
    code: "MySQL · PostgreSQL",
  },
  {
    number: "03",
    title: "Product thinking",
    copy: "Tidak hanya menulis kode—memahami masalah dan menerjemahkannya menjadi produk.",
    code: "Discovery · Delivery · Scale",
  },
]

const projects = [
  { title: "HRIS & Employee Self Service", type: "Enterprise System", copy: "Sistem HR untuk menyederhanakan administrasi karyawan, payroll, dan alur persetujuan.", color: "blue" },
  { title: "Smart Education Platform", type: "Education Technology", copy: "Platform pembelajaran dan Computer Based Test dengan API yang siap digunakan banyak sekolah.", color: "orange" },
  { title: "Commerce & Inventory API", type: "Commerce Infrastructure", copy: "Layanan backend untuk katalog, campaign, inventory, dan integrasi operasional bisnis.", color: "dark" },
]

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeExperience, setActiveExperience] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const active = experiences[activeExperience]

  const selectExperience = (index: number) => {
    setActiveExperience(index)

    if (window.matchMedia("(max-width: 620px)").matches) {
      window.requestAnimationFrame(() => {
        document
          .querySelector(`[data-experience-index="${index}"]`)
          ?.scrollIntoView({ behavior: "smooth", block: "start" })
      })
    }
  }

  return (
    <main>
      <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <a
          className="brand"
          href="#home"
          aria-label="Beranda Machrus Alifuddin"
        >
          MA<span>.</span>
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
            Tentang
          </a>
          <a href="#expertise" onClick={() => setMenuOpen(false)}>
            Keahlian
          </a>
          <a href="#journey" onClick={() => setMenuOpen(false)}>
            Perjalanan
          </a>
          <a
            className="nav-contact"
            href="mailto:machrus.alifuddin21@gmail.com"
          >
            Mari bicara <Icon name="arrow" size={17} />
          </a>
        </div>
      </nav>

      <section className="hero" id="home">
        <span className="hero-grid" />
        <span className="orb orb-one" />
        <span className="orb orb-two" />
        <aside className="space-system" aria-hidden="true">
          <span className="space-ring ring-a"><i /></span>
          <span className="space-ring ring-b"><i /></span>
          <span className="space-ring ring-c"><i /></span>
          <span className="space-core" />
        </aside>
        <main className="hero-inner">
          <header className="hero-kicker reveal">
            <span>
              <i /> Available for collaboration
            </span>
            <span>Surabaya · Indonesia</span>
          </header>
          <article className="hero-profile reveal delay-one">
            <figure className="hero-portrait">
              <ChromaPhoto src="/assets/machrus-alifuddin-portrait.jpg" alt="Machrus Alifuddin" />
            </figure>
            <article className="hero-intro">
              <h1>Machrus<br /><em>Alifuddin</em></h1>
              <p className="hero-role">Software Engineer &amp; Digital Builder</p>
              <p className="hero-facts">
                <span><b>10+</b> tahun pengalaman</span>
                <span><b>Surabaya</b> · Indonesia</span>
              </p>
              <nav className="hero-actions">
                <a href="#projects">Lihat project <Icon name="arrow" size={17} /></a>
                <a href="#journey">Perjalanan karier</a>
              </nav>
            </article>
          </article>
          <footer className="hero-bottom reveal delay-two">
            <p>
              Saya <strong>Machrus Alifuddin</strong>, software engineer yang
              mengubah masalah kompleks menjadi produk digital yang bekerja
              dengan baik.
            </p>
            <a
              className="round-link"
              href="#about"
              aria-label="Jelajahi website"
            >
              <Icon name="arrow" size={26} />
            </a>
          </footer>
        </main>
        <pre className="code-float" aria-hidden="true">
          <span>01</span> <span className="typing-line line-one">const idea = understand(problem);</span>
          <br />
          <span>02</span> <span className="typing-line line-two">const system = build(solution);</span>
          <br />
          <span>03</span> <span className="typing-line line-three">return ship(system);</span>
        </pre>
        <aside className="section-code hero-code" aria-hidden="true">const <b>developer</b> = {`{`}<br />&nbsp;&nbsp;build(<i>impact</i>);<br />{`}`}</aside>
      </section>

      <div className="section-transition" aria-hidden="true">
        <span className="transition-line" />
        <span className="transition-chip">scroll_to_about()</span>
        <span className="transition-node" />
        <span className="transition-line transition-line-right" />
      </div>

      <section className="manifesto shell" id="about">
        <div className="about-rail">
          <div className="section-tag">[ TENTANG SAYA ]</div>
          <div className="rail-items">
            <div><strong>10+</strong><span>tahun<br />pengalaman</span></div>
            <div><strong>04</strong><span>core<br />technologies</span></div>
            <div><strong>01</strong><span>Surabaya<br />Indonesia</span></div>
          </div>
        </div>
        <div className="manifesto-copy">
          <p className="big-copy">
            <span className="manifesto-lead">Software engineer</span>{" "}
            <span className="manifesto-light">yang tumbuh dari</span>{" "}
            <span className="manifesto-accent">membangun</span>{" "}
            <span className="manifesto-light">sistem bisnis nyata.</span>
          </p>
          <div className="manifesto-notes">
            <p>
              Berpengalaman mengerjakan backend, API, HRIS, e-commerce,
              procurement, dan platform pendidikan. Fokus saya adalah membuat
              sistem yang dapat dipahami, dirawat, dan benar-benar membantu
              orang bekerja.
            </p>
            <div className="about-facts">
              <div><strong>10+</strong><span>tahun pengalaman</span></div>
              <div><strong>7</strong><span>peran profesional</span></div>
              <div><strong>4</strong><span>teknologi utama</span></div>
            </div>
          </div>
          <div className="skill-board" aria-label="Keahlian teknis">
            <div className="skill-board-head"><span>TECHNICAL FOCUS</span><span>LEVEL OF EXPERIENCE</span></div>
            {[['PHP / Laravel', '90%'], ['Go', '76%'], ['MySQL', '82%'], ['PostgreSQL', '72%']].map(([name, level]) => (
              <div className="skill-row" key={name}>
                <b>{name}</b><div className="skill-track"><i style={{ width: level }} /></div><span>{level}</span>
              </div>
            ))}
          </div>
          <div className="about-domains">
            <article><span>01 / ENTERPRISE</span><strong>HRIS &amp; Procurement</strong><p>Employee service, payroll, benefit, dan alur procurement untuk organisasi besar.</p></article>
            <article><span>02 / EDUCATION</span><strong>Smart Learning</strong><p>Web, mobile API, dan Computer Based Test untuk kebutuhan pendidikan.</p></article>
            <article><span>03 / COMMERCE</span><strong>Commerce Systems</strong><p>Product API, campaign, inventory, dan tools untuk operasional e-commerce.</p></article>
          </div>
        </div>
      </section>

      <section className="expertise" id="expertise">
        <div className="shell">
          <header className="section-header">
            <div>
              <p className="section-tag">[ CARA SAYA BEKERJA ]</p>
              <h2>
                Membangun di balik layar,
                <br />
                menciptakan dampak di depan.
              </h2>
            </div>
            <p>
              Berpikir sistematis, bekerja kolaboratif, dan selalu mulai dari
              masalah pengguna.
            </p>
          </header>
          <div className="section-code expertise-code" aria-hidden="true">// clean code<br /><b>simple systems</b><br />reliable results</div>
          <div className="capability-grid">
            {capabilities.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <div className="capability-icon">&lt;/&gt;</div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <small>{item.code}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="projects shell" id="projects">
        <header className="section-header">
          <div>
            <p className="section-tag">[ SELECTED WORK ]</p>
            <h2>Beberapa hal<br />yang pernah dibangun.</h2>
          </div>
          <p>Proyek nyata, masalah nyata, dan solusi digital yang dipakai setiap hari.</p>
        </header>
        <div className="section-code projects-code" aria-hidden="true">SELECT *<br />FROM <b>projects</b><br />ORDER BY impact;</div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card ${project.color}`} key={project.title}>
              <div className={`project-window ${project.color}-preview`}>
                <div className="project-window-bar"><span /> <span /> <span /></div>
                {project.color === "blue" && (
                  <div className="preview-dashboard">
                    <nav><b>HRIS</b><span>Dashboard&nbsp;&nbsp; People&nbsp;&nbsp; Payroll</span></nav>
                    <strong>Good morning, team</strong>
                    <div className="preview-metrics"><i><b>248</b><small>Employees</small></i><i><b>12</b><small>On leave</small></i><i><b>08</b><small>Pending</small></i></div>
                    <div className="preview-table"><span>Employee request</span><b>Approved</b><span>Payroll · June</span><b>Review</b></div>
                  </div>
                )}
                {project.color === "orange" && (
                  <div className="preview-learning">
                    <nav><b>SMART LEARN</b><span>Courses&nbsp;&nbsp; Classes&nbsp;&nbsp; Scores</span></nav>
                    <strong>Continue learning</strong>
                    <div className="preview-progress"><i /></div>
                    <small>Laravel Fundamentals&nbsp;&nbsp; 82% complete</small>
                    <div className="preview-course"><i /><span>API Architecture</span><b>12 lessons</b></div>
                  </div>
                )}
                {project.color === "dark" && (
                  <div className="preview-commerce">
                    <nav><b>STOREKIT</b><span>Products&nbsp;&nbsp; Orders&nbsp;&nbsp; Stock</span></nav>
                    <strong>Product inventory</strong>
                    <div className="preview-products"><i /><i /><i /></div>
                    <small>Catalog&nbsp;&nbsp; Campaign&nbsp;&nbsp; 248 items in stock</small>
                  </div>
                )}
              </div>
              <div className="project-number">0{index + 1}</div>
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.copy}</p>
              <span className="project-arrow"><Icon name="arrow" size={18} /></span>
            </article>
          ))}
        </div>
      </section>

      <section className="journey shell" id="journey">
        <header className="section-header">
          <div>
            <p className="section-tag">[ PERJALANAN ]</p>
            <h2>
              Satu dekade.
              <br />
              Banyak sistem dibangun.
            </h2>
          </div>
          <p>
            Jelajahi peran dan lingkungan yang membentuk cara saya bekerja hari
            ini.
          </p>
        </header>
        <div className="section-code journey-code" aria-hidden="true">git log --oneline<br /><b>career</b> --all</div>
        <div className="journey-ui">
          <div
            className="company-list"
            role="tablist"
            aria-label="Riwayat perusahaan"
          >
            {experiences.map((item, index) => (
              <Fragment key={item.company + item.period}>
                <button
                  data-experience-index={index}
                  className={activeExperience === index ? "active" : ""}
                  onClick={() => selectExperience(index)}
                  role="tab"
                  aria-selected={activeExperience === index}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <b>{item.company}</b>
                  <Icon name="arrow" size={18} />
                </button>
                {activeExperience === index && (
                  <article className="experience-stage mobile-experience-stage">
                    <div className="stage-top"><span>{active.period}</span><span className="stage-dot">●</span></div>
                    <p className="stage-label">PERAN</p>
                    <h3>{active.role}</h3>
                    <p className="stage-place"><Icon name="map" size={16} /> {active.place}</p>
                    <p className="stage-copy">{active.description}</p>
                    <div className="stage-tags">{active.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </article>
                )}
              </Fragment>
            ))}
          </div>
          <article
            className="experience-stage"
            key={active.company + active.period}
          >
            <div className="stage-top">
              <span>{active.period}</span>
              <span className="stage-dot">●</span>
            </div>
            <p className="stage-label">PERAN</p>
            <h3>{active.role}</h3>
            <p className="stage-place">
              <Icon name="map" size={16} /> {active.place}
            </p>
            <p className="stage-copy">{active.description}</p>
            <div className="stage-tags">
              {active.stack.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="stage-code" aria-hidden="true">
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
          </article>
        </div>
      </section>

      <section className="education-record" aria-labelledby="education-title">
        <div className="shell">
          <article className="education-card">
            <header className="education-card-header">
              <span className="education-card-code">
                <i aria-hidden="true" /> education_foundation
              </span>
              <span className="education-card-label">ACADEMIC RECORD</span>
            </header>
            <div className="education-card-main">
              <div className="education-card-copy">
                <span className="education-card-icon">
                  <Icon name="education" size={27} />
                </span>
                <div>
                  <p className="education-degree">S1 Sistem Informasi</p>
                  <h2 id="education-title">Fondasi akademik</h2>
                </div>
              </div>
              <div className="education-card-meta">
                <span className="education-meta-label">UNIVERSITAS</span>
                <p className="education-school">Universitas Narotama</p>
                <div className="education-period">
                  <span className="education-meta-label">PERIODE STUDI</span>
                  <div className="education-period-dates">
                    <time dateTime="2011-08">Agustus 2011</time>
                    <i aria-hidden="true">—</i>
                    <time dateTime="2016-02">Februari 2016</time>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="contact shell" id="contact">
        <div className="contact-orbit">
          <span />
          <span />
        </div>
        <p className="section-tag">[ PUNYA IDE? ]</p>
        <div className="section-code contact-code" aria-hidden="true">await <b>collaborate</b>();</div>
        <h2>
          Mari bangun sesuatu
          <br />
          yang <em>berguna.</em>
        </h2>
        <a href="mailto:machrus.alifuddin21@gmail.com">
          <span>Mulai percakapan</span>
          <Icon name="arrow" size={24} />
        </a>
        <div className="contact-meta">
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
          MA<span>.</span>
        </a>
        <p>Software Engineer · Surabaya, Indonesia</p>
        <p>© {new Date().getFullYear()} Machrus Alifuddin</p>
      </footer>
    </main>
  )
}
