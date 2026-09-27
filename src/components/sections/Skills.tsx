"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { skills } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { premiumEase, reducedMotionVariants, revealVariants, revealViewport } from "@/lib/motion";

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section id="skills" className="py-32 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Tech Stack"
          subtitle="Technologies and tools I work with"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((category, index) => (
            <motion.div
              key={category.name}
              initial="hidden"
              whileInView="visible"
              variants={shouldReduceMotion ? reducedMotionVariants : revealVariants}
              viewport={revealViewport}
              transition={{ duration: shouldReduceMotion ? 0.2 : 0.65, ease: premiumEase, delay: shouldReduceMotion ? 0 : index * 0.06 }}
            >
              <h3 className="font-semibold mb-5 text-lg">{category.name}</h3>

              <div className="flex flex-wrap gap-2.5">
                {category.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Badge
                      key={item.name}
                      variant="secondary"
                      className="rounded-full px-3.5 py-1.5 flex items-center gap-2 text-sm font-medium"
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {item.name}
                    </Badge>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
