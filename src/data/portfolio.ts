// Edit this configuration to personalize the template's copy, links, and work history.
export const portfolioContent = {
  brand: "MA",
  identity: {
    fullName: "Machrus Alifuddin",
    firstName: "Machrus",
    lastName: "Alifuddin",
    role: "Software Engineer & Digital Builder",
    location: "Surabaya · Indonesia",
    availability: "Available for collaboration",
    portraitSrc: "/assets/machrus-alifuddin-portrait.jpg",
    email: "machrus.alifuddin21@gmail.com",
    linkedIn: "https://linkedin.com/in/machrus-alifuddin-688467130",
  },
  navigation: [
    { label: "Tentang", href: "#about" },
    { label: "Keahlian", href: "#expertise" },
    { label: "Perjalanan", href: "#journey" },
  ],
  navigationContactLabel: "Mari bicara",
  hero: {
    experienceYears: "10+",
    experienceLabel: "tahun pengalaman",
    city: "Surabaya",
    country: "Indonesia",
    projectsLabel: "Lihat project",
    journeyLabel: "Perjalanan karier",
    introduction:
      "software engineer yang mengubah masalah kompleks menjadi produk digital yang bekerja dengan baik.",
    scrollLabel: "Jelajahi website",
  },
  about: {
    sectionLabel: "[ TENTANG SAYA ]",
    headline: [
      "Software engineer",
      "yang tumbuh dari",
      "membangun",
      "sistem bisnis nyata.",
    ],
    introduction:
      "Berpengalaman mengerjakan backend, API, HRIS, e-commerce, procurement, dan platform pendidikan. Fokus saya adalah membuat sistem yang dapat dipahami, dirawat, dan benar-benar membantu orang bekerja.",
    skillHeading: "TECHNICAL FOCUS",
    skillLevelHeading: "LEVEL OF EXPERIENCE",
    railStats: [
      { value: "10+", labelLines: ["tahun", "pengalaman"] },
      { value: "04", labelLines: ["core", "technologies"] },
      { value: "01", labelLines: ["Surabaya", "Indonesia"] },
    ],
    facts: [
      { value: "10+", label: "tahun pengalaman" },
      { value: "7", label: "peran profesional" },
      { value: "4", label: "teknologi utama" },
    ],
    skills: [
      { name: "PHP / Laravel", level: 90 },
      { name: "Go", level: 76 },
      { name: "MySQL", level: 82 },
      { name: "PostgreSQL", level: 72 },
    ],
    domains: [
      {
        category: "01 / ENTERPRISE",
        title: "HRIS & Procurement",
        description:
          "Employee service, payroll, benefit, dan alur procurement untuk organisasi besar.",
      },
      {
        category: "02 / EDUCATION",
        title: "Smart Learning",
        description:
          "Web, mobile API, dan Computer Based Test untuk kebutuhan pendidikan.",
      },
      {
        category: "03 / COMMERCE",
        title: "Commerce Systems",
        description:
          "Product API, campaign, inventory, dan tools untuk operasional e-commerce.",
      },
    ],
  },
  expertise: {
    sectionLabel: "[ CARA SAYA BEKERJA ]",
    titleFirstLine: "Membangun di balik layar,",
    titleSecondLine: "menciptakan dampak di depan.",
    description:
      "Berpikir sistematis, bekerja kolaboratif, dan selalu mulai dari masalah pengguna.",
  },
  projectsSection: {
    sectionLabel: "[ SELECTED WORK ]",
    titleFirstLine: "Beberapa hal",
    titleSecondLine: "yang pernah dibangun.",
    description:
      "Proyek nyata, masalah nyata, dan solusi digital yang dipakai setiap hari.",
  },
  capabilities: [
    {
      number: "01",
      title: "Backend systems",
      description:
        "Arsitektur dan layanan backend yang stabil untuk menangani proses bisnis nyata.",
      technologies: "Laravel · Go · REST API",
    },
    {
      number: "02",
      title: "Data & integration",
      description:
        "Struktur data yang rapi, integrasi antarsistem, dan alur informasi yang efisien.",
      technologies: "MySQL · PostgreSQL",
    },
    {
      number: "03",
      title: "Product thinking",
      description:
        "Tidak hanya menulis kode—memahami masalah dan menerjemahkannya menjadi produk.",
      technologies: "Discovery · Delivery · Scale",
    },
  ],
  projects: [
    {
      title: "HRIS & Employee Self Service",
      category: "Enterprise System",
      description:
        "Sistem HR untuk menyederhanakan administrasi karyawan, payroll, dan alur persetujuan.",
      color: "blue",
      preview: {
        kind: "dashboard",
        brand: "HRIS",
        navigation: "Dashboard  ·  People  ·  Payroll",
        heading: "Good morning, team",
        metrics: [
          { value: "248", label: "Employees" },
          { value: "12", label: "On leave" },
          { value: "08", label: "Pending" },
        ],
        rows: [
          { label: "Employee request", status: "Approved" },
          { label: "Payroll · June", status: "Review" },
        ],
      },
    },
    {
      title: "Smart Education Platform",
      category: "Education Technology",
      description:
        "Platform pembelajaran dan Computer Based Test dengan API yang siap digunakan banyak sekolah.",
      color: "orange",
      preview: {
        kind: "learning",
        brand: "SMART LEARN",
        navigation: "Courses  ·  Classes  ·  Scores",
        heading: "Continue learning",
        progressLabel: "Laravel Fundamentals  ·  82% complete",
        course: { title: "API Architecture", lessonCount: "12 lessons" },
      },
    },
    {
      title: "Commerce & Inventory API",
      category: "Commerce Infrastructure",
      description:
        "Layanan backend untuk katalog, campaign, inventory, dan integrasi operasional bisnis.",
      color: "dark",
      preview: {
        kind: "commerce",
        brand: "STOREKIT",
        navigation: "Products  ·  Orders  ·  Stock",
        heading: "Product inventory",
        caption: "Catalog  ·  Campaign  ·  248 items in stock",
      },
    },
  ],
  experience: [
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
  ],
  journeySection: {
    sectionLabel: "[ PERJALANAN ]",
    titleFirstLine: "Satu dekade.",
    titleSecondLine: "Banyak sistem dibangun.",
    description:
      "Jelajahi peran dan lingkungan yang membentuk cara saya bekerja hari ini.",
    tabListLabel: "Riwayat perusahaan",
    roleLabel: "PERAN",
  },
  education: {
    degree: "S1 Sistem Informasi",
    title: "Fondasi akademik",
    university: "Universitas Narotama",
    codeLabel: "education_foundation",
    recordLabel: "ACADEMIC RECORD",
    universityLabel: "UNIVERSITAS",
    studyPeriodLabel: "PERIODE STUDI",
    startDate: { dateTime: "2011-08", label: "Agustus 2011" },
    endDate: { dateTime: "2016-02", label: "Februari 2016" },
  },
  contact: {
    sectionLabel: "[ PUNYA IDE? ]",
    titleFirstLine: "Mari bangun sesuatu",
    titleSecondLine: "yang",
    titleAccent: "berguna.",
    emailLabel: "Mulai percakapan",
    linkedInLabel: "LinkedIn",
  },
  footer: "Software Engineer · Surabaya, Indonesia",
} as const;

export type PortfolioProject = (typeof portfolioContent.projects)[number];
export type ProjectPreviewContent = PortfolioProject["preview"];
