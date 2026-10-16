"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { premiumEase, reducedMotionVariants, revealVariants, revealViewport } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Full Stack Developer Intern",
    company: "PT. Dumbways Indonesia Teknologi",
    period: "July 2026 – September 2026",
    description:
      "Built web and mobile applications using React.js, TypeScript, Tailwind CSS, Node.js, Express.js, Prisma ORM, and PostgreSQL. Developed a Carwash Management System featuring REST APIs, JWT authentication, Role-Based Access Control (RBAC), Midtrans payment integration, and Socket.IO real-time communication.",
  },
  {
    role: "Full Stack Developer Bootcamp Trainee",
    company: "PT. Dumbways Indonesia Teknologi",
    period: "June 2026",
    description:
      "Completed full-stack software development training covering programming fundamentals, frontend, backend, database management, REST APIs, authentication, and project-based development.",
  },
  {
    role: "Software Development Intern",
    company: "PT. Bamboomedia Cipta Persada",
    period: "July 2025 – December 2025",
    description:
      "Built an interactive World Cup History web application using Sencha Ext JS with search, filtering, pagination, tables, and data visualization. Performed functional application testing and supported application data entry and management.",
  },
  {
    role: "Pre-Internship Trainee",
    company: "PT. Timedoor Indonesia",
    period: "March 2025 – May 2025",
    description:
      "Completed a three-month pre-internship program focused on software development, programming exercises, and project-based assignments.",
  },
  {
    role: "Software Engineering Student (RPL)",
    company: "SMK Negeri 1 Denpasar",
    period: "July 2023 – May 2026",
    description:
      "Studied software development from programming fundamentals and logic to Object-Oriented Programming (OOP), UI/UX design with Figma, database management, and web/mobile development using JavaScript, Python, Laravel, Flutter, MySQL, and SQL. Completed a 9-month internship and Competency Skills Examination (UKK).",
  },
];

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();
  return (
    <section id="experience" className="py-32 px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          title={t("experienceTitle")}
          subtitle={t("experienceSubtitle")}
        />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.role}-${exp.company}-${index}`}
              initial="hidden"
              whileInView="visible"
              variants={shouldReduceMotion ? reducedMotionVariants : revealVariants}
              viewport={revealViewport}
              transition={{
                duration: shouldReduceMotion ? 0.2 : 0.65,
                ease: premiumEase,
                delay: shouldReduceMotion ? 0 : index * 0.06,
              }}
              className="relative pl-8 border-l border-border"
            >
              <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-foreground" />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1.5">
                <h3 className="font-semibold text-lg text-foreground">{t("roles")[index]}</h3>
                <span className="text-xs sm:text-sm font-medium text-muted-foreground shrink-0 sm:pt-0.5">
                  {t("periods")[index]}
                </span>
              </div>

              <p className="text-sm font-medium text-muted-foreground/90 mb-3">
                {exp.company}
              </p>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {t("experienceDescriptions")[index]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
