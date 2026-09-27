"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Code2, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { premiumEase, reducedMotionVariants, revealVariants, revealViewport } from "@/lib/motion";

interface ProjectImage {
  label: string;
  src: string;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  images?: ProjectImage[];
  image?: string; 
}

export default function ProjectCard({ project }: { project: Project }) {
  const shouldReduceMotion = useReducedMotion();
  const images =
    project.images && project.images.length > 0
      ? project.images
      : project.image
        ? [{ label: "Preview", src: project.image }]
        : [];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      variants={shouldReduceMotion ? reducedMotionVariants : revealVariants}
      viewport={revealViewport}
      whileHover={shouldReduceMotion ? undefined : { y: -2 }}
      transition={{ duration: 0.65, ease: premiumEase }}
      className="group overflow-hidden rounded-3xl border border-border bg-card transition-shadow duration-300 hover:shadow-lg focus-within:ring-2 focus-within:ring-ring/50"
    >
      {/* Image Area */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        {activeImage ? (
          <AnimatePresence mode="wait">
            <motion.img
              key={activeImage.src}
              src={activeImage.src}
              alt={`${project.title} - ${activeImage.label}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.15 : 0.35, ease: premiumEase }}
              className="h-full w-full object-cover object-top"
            />
          </AnimatePresence>
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            Project Preview
          </div>
        )}

        {/* Tab Switcher (hanya muncul kalau ada lebih dari 1 gambar) */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-1 rounded-full border border-border/50 bg-background/80 p-1 backdrop-blur-md">
            {images.map((img, index) => (
              <button
                key={img.label}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60",
                  activeIndex === index
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {img.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-7 md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-semibold tracking-tight">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
              {project.description}
            </p>
          </div>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex w-fit shrink-0 items-center gap-2 text-sm font-medium transition-colors hover:text-muted-foreground"
            >
              <Code2 className="h-4 w-4" />
              GitHub
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </a>
          )}
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.tech.map((technology) => (
            <Badge
              key={technology}
              variant="secondary"
              className="rounded-full px-3 py-1 text-xs font-normal"
            >
              {technology}
            </Badge>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
