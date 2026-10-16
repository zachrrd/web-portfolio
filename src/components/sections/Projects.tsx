"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import ProjectCard from "@/components/shared/ProjectCard";
import { projects } from "@/data/projects";
import { useLanguage } from "@/lib/i18n";

export default function Projects() {
  const { t } = useLanguage();
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title={t("projectsTitle")}
          subtitle={t("projectsSubtitle")}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={{...project, description: t("projectDescriptions")[index], images: project.images?.map((image, imageIndex) => ({...image, label: t("projectImageLabels")[index][imageIndex]}))}} />
          ))}
        </div>
      </div>
    </section>
  );
}
