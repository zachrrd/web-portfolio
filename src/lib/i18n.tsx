"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";

export type Language = "en" | "id";

const translations = {
  en: {
    nav: ["About", "Skills", "Projects", "Experience", "Contact"],
    themeToggle: "Toggle color theme",
    language: "Language",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    heroRole: "Full Stack Developer",
    heroGreeting: "Hi, I'm",
    heroIntro: "I engineer scalable web and mobile applications with responsive user interfaces, robust REST APIs, and reliable database architectures — delivering high-performance digital solutions from concept to deployment.",
    viewProjects: "View Projects", contactMe: "Contact Me", scrollAbout: "Scroll to About section",
    aboutTitle: "About Me", aboutSubtitle: "My background, technical focus, and approach to software engineering",
    about: [
      "I am a Full Stack Developer with an educational background in Software Engineering from SMK Negeri 1 Denpasar (2023–2026). I have hands-on experience building and deploying full-stack web and mobile applications, including a complete Carwash Management System with customer, admin web dashboard, and mobile admin workflows.",
      "My core technical skills span JavaScript, TypeScript, and PHP, with frontend & mobile development using React.js, React Native, Expo, Vite, Tailwind CSS, and NativeWind. On the backend, I architect REST APIs and services with Node.js, Express.js, and Laravel, using Prisma ORM with PostgreSQL and MySQL databases alongside JWT authentication, Role-Based Access Control (RBAC), and Socket.IO for real-time features.",
      "Through practical internship experience at PT. Dumbways Indonesia Teknologi, PT. Bamboomedia Cipta Persada, and PT. Timedoor Indonesia, I have built web/mobile apps, integrated Midtrans payment gateway, developed data-driven web tools with Sencha Ext JS, and performed functional software quality assurance.",
    ],
    skillsTitle: "Tech Stack", skillsSubtitle: "Technologies and tools I work with",
    skillCategories: ["Programming Languages", "Frontend", "Backend", "Database & ORM", "Tools"],
    projectsTitle: "Featured Projects", projectsSubtitle: "Full-stack web and mobile applications engineered with modern technologies, secure APIs, and responsive design",
    projectDescriptions: [
      "A complete car wash management ecosystem comprising a Customer Web Application, an Admin Web Dashboard, and an Admin Mobile Application. Features secure JWT authentication with role-based access control (RBAC), end-to-end order and workflow management, digital payment integration via Midtrans, and real-time order status updates powered by Socket.IO.",
      "A modern editorial publishing web application dedicated to K-pop comebacks, album reviews, concert dispatches, and fandom culture. Allows readers to explore published articles, search content by keywords, and filter by editorial categories with dynamic detail pages. Includes an administrative CMS dashboard with rich-text content creation and secure database management.",
    ],
    projectImageLabels: [["Admin Web", "Native Admin", "Customer Web"], ["Homepage", "Categories", "Search", "Article"]],
    preview: "Preview", liveApplication: "Live Web Application", liveDescription: "Explore the live demo or inspect the full source repository below.", screenshots: "screenshots", liveDemo: "Live Demo", github: "GitHub",
    experienceTitle: "Experience & Education", experienceSubtitle: "My professional work experience, training programs, and educational background",
    roles: ["Full Stack Developer Intern", "Full Stack Developer Bootcamp Trainee", "Software Development Intern", "Pre-Internship Trainee", "Software Engineering Student (RPL)"],
    periods: ["July 2026 – September 2026", "June 2026", "July 2025 – December 2025", "March 2025 – May 2025", "July 2023 – May 2026"],
    experienceDescriptions: [
      "Built web and mobile applications using React.js, TypeScript, Tailwind CSS, Node.js, Express.js, Prisma ORM, and PostgreSQL. Developed a Carwash Management System featuring REST APIs, JWT authentication, Role-Based Access Control (RBAC), Midtrans payment integration, and Socket.IO real-time communication.",
      "Completed full-stack software development training covering programming fundamentals, frontend, backend, database management, REST APIs, authentication, and project-based development.",
      "Built an interactive World Cup History web application using Sencha Ext JS with search, filtering, pagination, tables, and data visualization. Performed functional application testing and supported application data entry and management.",
      "Completed a three-month pre-internship program focused on software development, programming exercises, and project-based assignments.",
      "Studied software development from programming fundamentals and logic to Object-Oriented Programming (OOP), UI/UX design with Figma, database management, and web/mobile development using JavaScript, Python, Laravel, Flutter, MySQL, and SQL. Completed a 9-month internship and Competency Skills Examination (UKK).",
    ],
    contactTitle: "Let's Work Together", contactSubtitle: "Have a project in mind, an opportunity, or just want to say hello? I'd love to hear from you.", getInTouch: "Get in touch", availability: "Based in Indonesia · Available for opportunities",
    rights: "All rights reserved.",
  },
  id: {
    nav: ["Tentang", "Keahlian", "Proyek", "Pengalaman", "Kontak"],
    themeToggle: "Ubah tema warna", language: "Bahasa", openMenu: "Buka menu navigasi", closeMenu: "Tutup menu navigasi",
    heroRole: "Full Stack Developer", heroGreeting: "Halo, saya", heroIntro: "Saya mengembangkan aplikasi web dan mobile yang andal dan mudah dikembangkan, dengan antarmuka responsif, REST API yang tangguh, serta arsitektur basis data yang tepercaya — dari perancangan hingga siap digunakan.",
    viewProjects: "Lihat Proyek", contactMe: "Hubungi Saya", scrollAbout: "Gulir ke bagian Tentang",
    aboutTitle: "Tentang Saya", aboutSubtitle: "Latar belakang, fokus teknis, dan pendekatan saya dalam rekayasa perangkat lunak",
    about: [
      "Saya adalah Full Stack Developer dengan latar pendidikan Rekayasa Perangkat Lunak dari SMK Negeri 1 Denpasar (2023–2026). Saya berpengalaman membangun dan menerapkan aplikasi web dan mobile full-stack, termasuk sistem manajemen cuci mobil lengkap dengan aplikasi pelanggan, dashboard web admin, dan alur kerja admin mobile.",
      "Keahlian teknis utama saya mencakup JavaScript, TypeScript, dan PHP, serta pengembangan frontend dan mobile menggunakan React.js, React Native, Expo, Vite, Tailwind CSS, dan NativeWind. Untuk backend, saya merancang REST API dan layanan dengan Node.js, Express.js, dan Laravel, menggunakan Prisma ORM dengan PostgreSQL dan MySQL, serta autentikasi JWT, Role-Based Access Control (RBAC), dan Socket.IO untuk fitur real-time.",
      "Melalui pengalaman magang di PT. Dumbways Indonesia Teknologi, PT. Bamboomedia Cipta Persada, dan PT. Timedoor Indonesia, saya telah membangun aplikasi web/mobile, mengintegrasikan payment gateway Midtrans, mengembangkan perangkat web berbasis data dengan Sencha Ext JS, serta melakukan pengujian kualitas perangkat lunak secara fungsional.",
    ],
    skillsTitle: "Teknologi", skillsSubtitle: "Teknologi dan alat yang saya gunakan", skillCategories: ["Bahasa Pemrograman", "Frontend", "Backend", "Basis Data & ORM", "Alat"],
    projectsTitle: "Proyek Pilihan", projectsSubtitle: "Aplikasi web dan mobile full-stack yang dibangun dengan teknologi modern, API yang aman, dan desain responsif",
    projectDescriptions: [
      "Ekosistem manajemen cuci mobil lengkap yang mencakup aplikasi web pelanggan, dashboard web admin, dan aplikasi mobile admin. Dilengkapi autentikasi JWT yang aman dengan kontrol akses berbasis peran (RBAC), pengelolaan pesanan dan alur kerja menyeluruh, integrasi pembayaran digital melalui Midtrans, serta pembaruan status pesanan secara real-time menggunakan Socket.IO.",
      "Aplikasi penerbitan editorial modern seputar comeback K-pop, ulasan album, liputan konser, dan budaya fandom. Pembaca dapat menjelajahi artikel, mencari konten berdasarkan kata kunci, serta memfilter kategori editorial dengan halaman detail dinamis. Dilengkapi dashboard CMS admin untuk membuat konten rich-text dan mengelola basis data dengan aman.",
    ],
    projectImageLabels: [["Web Admin", "Admin Native", "Web Pelanggan"], ["Beranda", "Kategori", "Pencarian", "Artikel"]],
    preview: "Pratinjau", liveApplication: "Aplikasi Web Live", liveDescription: "Jelajahi demo langsung atau lihat repositori sumber lengkap di bawah ini.", screenshots: "tangkapan layar", liveDemo: "Demo Live", github: "GitHub",
    experienceTitle: "Pengalaman & Pendidikan", experienceSubtitle: "Pengalaman kerja, program pelatihan, dan latar pendidikan saya",
    roles: ["Magang Full Stack Developer", "Peserta Bootcamp Full Stack Developer", "Magang Software Development", "Peserta Pra-Magang", "Siswa Rekayasa Perangkat Lunak (RPL)"],
    periods: ["Juli 2026 – September 2026", "Juni 2026", "Juli 2025 – Desember 2025", "Maret 2025 – Mei 2025", "Juli 2023 – Mei 2026"],
    experienceDescriptions: [
      "Membangun aplikasi web dan mobile menggunakan React.js, TypeScript, Tailwind CSS, Node.js, Express.js, Prisma ORM, dan PostgreSQL. Mengembangkan sistem manajemen cuci mobil dengan REST API, autentikasi JWT, Role-Based Access Control (RBAC), integrasi pembayaran Midtrans, dan komunikasi real-time melalui Socket.IO.",
      "Menyelesaikan pelatihan pengembangan perangkat lunak full-stack yang mencakup dasar pemrograman, frontend, backend, pengelolaan basis data, REST API, autentikasi, dan pengembangan berbasis proyek.",
      "Membangun aplikasi web interaktif tentang sejarah Piala Dunia menggunakan Sencha Ext JS dengan fitur pencarian, filter, paginasi, tabel, dan visualisasi data. Melakukan pengujian fungsional aplikasi serta membantu entri dan pengelolaan data aplikasi.",
      "Menyelesaikan program pra-magang selama tiga bulan yang berfokus pada pengembangan perangkat lunak, latihan pemrograman, dan tugas berbasis proyek.",
      "Mempelajari pengembangan perangkat lunak, mulai dari dasar pemrograman dan logika hingga Object-Oriented Programming (OOP), desain UI/UX dengan Figma, pengelolaan basis data, serta pengembangan web/mobile menggunakan JavaScript, Python, Laravel, Flutter, MySQL, dan SQL. Menyelesaikan magang 9 bulan dan Uji Kompetensi Keahlian (UKK).",
    ],
    contactTitle: "Mari Berkolaborasi", contactSubtitle: "Punya proyek, peluang kerja sama, atau sekadar ingin menyapa? Saya senang mendengar kabar dari Anda.", getInTouch: "Hubungi Saya", availability: "Berbasis di Indonesia · Terbuka untuk peluang",
    rights: "Hak cipta dilindungi.",
  },
} as const;

type TranslationKey = keyof typeof translations.en;
const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void }>({ language: "en", setLanguage: () => {} });

function subscribeLanguage(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener("portfolio-language-change", onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener("portfolio-language-change", onChange);
  };
}

function getStoredLanguage(): Language {
  return window.localStorage.getItem("portfolio-language") === "id" ? "id" : "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(subscribeLanguage, getStoredLanguage, (): Language => "en");
  const setLanguage = (nextLanguage: Language) => {
    window.localStorage.setItem("portfolio-language", nextLanguage);
    window.dispatchEvent(new Event("portfolio-language-change"));
  };
  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("portfolio-language", language);
  }, [language]);
  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  const copy = translations[context.language];
  return {
    language: context.language,
    setLanguage: context.setLanguage,
    t: <K extends TranslationKey>(key: K): (typeof copy)[K] => copy[key],
  };
}
