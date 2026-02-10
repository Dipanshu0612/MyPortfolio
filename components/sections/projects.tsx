"use client";

import SectionHeader from "@/components/section-header";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { ExternalLink, Github, ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import { FloatingCodeLight } from "@/components/floating-code";

const filters = ["All", "Production", "Hackathon", "Side Project", "AI/ML", "Academic", "Internship"];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  const expandedProject = expandedId
    ? projects.find((p) => p.id === expandedId)
    : null;

  const close = useCallback(() => setExpandedId(null), []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    if (expandedId) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [expandedId, close]);

  return (
    <section id="projects" ref={ref} className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <FloatingCodeLight count={3} />
      <div className="orb orb-indigo w-[400px] h-[400px] -bottom-40 -right-40 opacity-30" />
      <div className="orb orb-blue w-[300px] h-[300px] top-20 -left-20 opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Featured"
          gradient="Projects"
          subtitle="Production apps and side projects I've built"
          isInView={isInView}
          className="text-center mb-12"
        />

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm rounded-full border transition-all ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                  : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, index) => (
            <motion.div
              key={project.id}
              layoutId={`project-card-${project.id}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => setExpandedId(project.id)}
              className="cursor-pointer"
            >
              <Card className="h-full overflow-hidden glass border-border hover:border-primary/30 transition-all group">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-secondary">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Type badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-background/80 border border-border backdrop-blur-sm">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0 mt-1" />
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-md bg-primary/5 text-primary/80 border border-primary/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded overlay */}
      <AnimatePresence>
        {expandedProject && (
          <>
            <motion.div
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
              <motion.div
                layoutId={`project-card-${expandedProject.id}`}
                className="w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto rounded-xl"
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
              >
                <Card className="overflow-hidden glass border-border shadow-2xl shadow-primary/10 relative">
                  <button
                    onClick={close}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 border border-border backdrop-blur-sm hover:bg-background transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>

                  <div className="relative aspect-video overflow-hidden bg-secondary">
                    <Image
                      src={expandedProject.image}
                      alt={expandedProject.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-background/80 border border-border backdrop-blur-sm">
                        {expandedProject.type}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      {expandedProject.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      {expandedProject.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {expandedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs rounded-md bg-primary/5 text-primary/80 border border-primary/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {expandedProject.link !== "#" && (
                        <Button size="sm" asChild>
                          <a href={expandedProject.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-1.5" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {expandedProject.github !== "#" && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={expandedProject.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-1.5" />
                            Source Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
