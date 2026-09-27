"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { premiumEase, reducedMotionVariants, revealVariants, revealViewport } from "@/lib/motion";

const experiences = [
  {
    role: "Full Stack Developer Trainee",
    company: "PT. DumbWays Indonesia Teknologi",
    period: "May 2025 – Sep 2026",
    description:
      "Developed full stack web applications through hands-on projects using JavaScript, TypeScript, React, Next.js, Node.js, Express.js, PHP, Laravel, PostgreSQL, REST APIs, JWT authentication, and Git. Worked on frontend interfaces, backend APIs, database integration, authentication, and CRUD functionality.",
  },
  {
    role: "Software Development Intern",
    company: "PT. Bamboomedia Cipta Persada",
    period: "Jul 2025 – Dec 2025",
    description:
      "Worked on software development and testing activities, including testing SpeedID, identifying and reporting bugs, managing application data, and contributing to attendance and queue management features. Also developed a World Cup History application using Sencha Ext JS and Kaggle data.",
  },
  {
    role: "Academy Content Support Intern",
    company: "PT. Timedoor Indonesia",
    period: "Pre-Internship",
    description:
      "Supported the Academy team in developing educational content by designing visual materials for elementary and junior high school mathematics exercises and managing question content on the Hisensei learning platform. Also assisted with preparing and entering business proposal letters for partner companies.",
  },
  {
    role: "Software Engineering Student",
    company: "SMK Negeri 1 Denpasar",
    period: "2023 – 2026",
    description:
      "Studied software engineering and web development, with hands-on experience in C++, Java, PHP, Laravel, MySQL, Flutter, and modern web technologies. Completed practical industry training and developed various school and personal projects.",
  },
];

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section id="experience" className="py-32 px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          title="Experience"
          subtitle="My journey in software development and technology"
        />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.role}-${exp.company}`}
              initial="hidden"
              whileInView="visible"
              variants={shouldReduceMotion ? reducedMotionVariants : revealVariants}
              viewport={revealViewport}
              transition={{ duration: shouldReduceMotion ? 0.2 : 0.65, ease: premiumEase, delay: shouldReduceMotion ? 0 : index * 0.06 }}
              className="relative pl-8 border-l border-border"
            >
              <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-foreground" />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                <h3 className="font-semibold text-lg">{exp.role}</h3>
                <span className="text-sm text-muted-foreground">
                  {exp.period}
                </span>
              </div>

              <p className="text-muted-foreground mb-2">{exp.company}</p>

              <p className="text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
