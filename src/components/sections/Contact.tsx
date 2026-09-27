"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { socials } from "@/data/socials";
import { ArrowUpRight, Mail } from "lucide-react";
import { reducedMotionVariants, revealVariants, revealViewport } from "@/lib/motion";

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeading
          title="Let's Work Together"
          subtitle="Have a project in mind, an opportunity, or just want to say hello? I'd love to hear from you."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={shouldReduceMotion ? reducedMotionVariants : revealVariants}
          viewport={revealViewport}
          className="space-y-10"
        >
          <a
            href="mailto:zacharia.rifqi.dheanova@gmail.com"
            className="inline-block"
          >
            <Button
              size="lg"
              className="rounded-full px-8 h-12 text-sm font-medium"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get in touch
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </a>

          <div className="flex justify-center items-center gap-8">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {social.name}
                <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            Based in Indonesia · Available for opportunities
          </p>
        </motion.div>
      </div>
    </section>
  );
}
