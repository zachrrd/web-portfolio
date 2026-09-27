"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { premiumEase, reducedMotionVariants, revealVariants, staggerVariants } from "@/lib/motion";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const itemVariants = shouldReduceMotion ? reducedMotionVariants : revealVariants;
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-16">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={shouldReduceMotion ? undefined : staggerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-6"
        >
          Full Stack Developer
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-semibold tracking-tight mb-6"
        >
          Hi, Iam <span className="text-foreground">Zacharia Rifqi.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I build modern web applications with clean interfaces, reliable
          backends, and thoughtful user experiences — turning ideas into
          functional digital products.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#projects">
            <Button size="lg" className="rounded-full px-8">
              View Projects
            </Button>
          </a>

          <a href="#contact">
            <Button size="lg" variant="outline" className="rounded-full px-8">
              Get in Touch
            </Button>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldReduceMotion ? 0 : 0.55, duration: 0.6, ease: premiumEase }}
          className="group absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about">
          <ArrowDown aria-hidden="true" className="w-5 h-5 text-muted-foreground transition-transform duration-300 group-hover:translate-y-0.5" />
        </a>
      </motion.div>
    </section>
  );
}
