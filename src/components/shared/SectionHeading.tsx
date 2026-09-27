"use client";

import { motion, useReducedMotion } from "framer-motion";
import { reducedMotionVariants, revealVariants, revealViewport } from "@/lib/motion";

interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: Props) {
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion ? reducedMotionVariants : revealVariants;
  return (
    <div className="mb-16 text-center">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={variants}
        viewport={revealViewport}
        className="text-3xl md:text-4xl font-semibold tracking-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={revealViewport}
          transition={{ delay: shouldReduceMotion ? 0 : 0.08 }}
          className="mt-3 text-muted-foreground max-w-xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
