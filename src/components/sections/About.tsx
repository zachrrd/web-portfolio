"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { reducedMotionVariants, revealVariants, revealViewport } from "@/lib/motion";

export default function About() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="A little about my journey in software development"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={shouldReduceMotion ? reducedMotionVariants : revealVariants}
          viewport={revealViewport}
          className="space-y-6 text-muted-foreground leading-relaxed text-lg"
        >
          <p>
            Iam a Software Engineering graduate from SMK Negeri 1 Denpasar
            with a strong interest in web development and modern software
            technologies. My journey started with learning programming
            fundamentals and gradually grew into building real-world
            applications through school projects, personal projects, and
            industry experience.
          </p>

          <p>
            I enjoy working across the full stack — from creating clean and
            responsive user interfaces with React and Next.js to developing
            backend services and REST APIs with Node.js, Express.js, Laravel,
            and PostgreSQL. I also have hands-on experience with authentication,
            database integration, and payment gateway implementation.
          </p>

          <p>
            Through internships and hands-on projects, Ive learned that
            becoming a good developer is not only about writing code, but also
            about understanding problems, building practical solutions, and
            continuously improving along the way. Im always excited to learn
            new technologies and turn ideas into useful digital products.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
