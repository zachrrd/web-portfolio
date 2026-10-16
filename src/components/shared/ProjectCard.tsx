
"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Code2, ArrowUpRight, ExternalLink, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  premiumEase,
  reducedMotionVariants,
  revealVariants,
  revealViewport,
} from "@/lib/motion";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/lib/i18n";

export default function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const images =
    project.images && project.images.length > 0
      ? project.images
      : project.image
        ? [{ label: t("preview"), src: project.image }]
        : [];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      variants={shouldReduceMotion ? reducedMotionVariants : revealVariants}
      viewport={revealViewport}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.5, ease: premiumEase }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:border-foreground/20 hover:shadow-xl focus-within:ring-2 focus-within:ring-ring/50"
    >
      {/* Image Area */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/60">
        {activeImage ? (
          <AnimatePresence mode="wait">
            <motion.img
              key={activeImage.src}
              src={activeImage.src}
              alt={`${project.title} - ${activeImage.label}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.15 : 0.35,
                ease: premiumEase,
              }}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </AnimatePresence>
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-muted/30 via-muted/60 to-muted/80 p-6 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/80 bg-background/80 shadow-sm backdrop-blur-sm">
              <Globe className="h-6 w-6 text-muted-foreground" />
            </div>
            <p className="text-sm font-medium text-foreground">
              {t("liveApplication")}
            </p>
            <p className="max-w-xs text-xs text-muted-foreground">
              {t("liveDescription")}
            </p>
          </div>
        )}

        {/* Tab Switcher */}
        {images.length > 1 && (
          <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center px-3 pb-3">
            <div
              role="tablist"
              aria-label={`${project.title} ${t("screenshots")}`}
              className="flex max-w-full items-center gap-1 overflow-x-auto rounded-xl border border-white/20 bg-black/55 p-1 shadow-lg backdrop-blur-xl [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {images.map((img, index) => (
                <button
                  key={img.label}
                  id={`${project.title}-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={activeIndex === index}
                  aria-controls={`${project.title}-panel`}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "relative shrink-0 rounded-lg px-3.5 py-2 text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80",
                    activeIndex === index
                      ? "bg-white text-neutral-900 shadow-sm"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  )}
                >
                  {img.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>

        <div className="mt-6 space-y-5">
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((technology) => (
              <Badge
                key={technology}
                variant="secondary"
                className="rounded-full px-2.5 py-0.5 text-xs font-normal"
              >
                {technology}
              </Badge>
            ))}
          </div>

          {/* Action Links */}
          {(project.liveUrl || project.githubUrl) && (
            <div className="flex flex-wrap items-center gap-3 border-t border-border/60 pt-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>{t("liveDemo")}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-80" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Code2 className="h-3.5 w-3.5" />
                  <span>{t("github")}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
