"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { premiumEase, reducedMotionVariants, revealVariants, staggerVariants } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const itemVariants = shouldReduceMotion ? reducedMotionVariants : revealVariants;
  const { t } = useLanguage();

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
          {t("heroRole")}
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6"
        >
          {t("heroGreeting")} <span className="text-foreground">Zacharia Rifqi Dheanova.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t("heroIntro")}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#projects" className="w-full sm:w-auto">
            <Button size="lg" className="rounded-full px-8 w-full sm:w-auto font-medium">
              {t("viewProjects")}
            </Button>
          </a>

          <a href="#contact" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="rounded-full px-8 w-full sm:w-auto font-medium">
              {t("contactMe")}
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
        <a href="#about" aria-label={t("scrollAbout")}>
          <ArrowDown aria-hidden="true" className="w-5 h-5 text-muted-foreground transition-transform duration-300 group-hover:translate-y-1" />
        </a>
      </motion.div>
    </section>
  );
}
