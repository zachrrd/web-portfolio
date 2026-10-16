"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { reducedMotionVariants, revealVariants, revealViewport } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n";

export default function About() {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          title={t("aboutTitle")}
          subtitle={t("aboutSubtitle")}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={shouldReduceMotion ? reducedMotionVariants : revealVariants}
          viewport={revealViewport}
          className="space-y-6 text-muted-foreground leading-relaxed text-base sm:text-lg"
        >
          {t("about").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {false && <>
          <p>
            I am a Full Stack Developer with an educational background in
            Software Engineering from SMK Negeri 1 Denpasar (2023–2026). I have
            hands-on experience building and deploying full-stack web and mobile
            applications, including a complete Carwash Management System with
            customer, admin web dashboard, and mobile admin workflows.
          </p>

          <p>
            My core technical skills span JavaScript, TypeScript, and PHP, with
            frontend & mobile development using React.js, React Native, Expo,
            Vite, Tailwind CSS, and NativeWind. On the backend, I architect
            REST APIs and services with Node.js, Express.js, and Laravel,
            leveraging Prisma ORM with PostgreSQL and MySQL databases alongside
            JWT authentication, Role-Based Access Control (RBAC), and Socket.IO
            for real-time features.
          </p>

          <p>
            Through practical internship experience at PT. Dumbways Indonesia
            Teknologi, PT. Bamboomedia Cipta Persada, and PT. Timedoor Indonesia,
            I have built web/mobile apps, integrated Midtrans payment gateway,
            developed data-driven web tools with Sencha Ext JS, and performed
            functional software quality assurance.
          </p>
          </>}
        </motion.div>
      </div>
    </section>
  );
}
