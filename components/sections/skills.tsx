"use client";

import SectionHeader from "@/components/section-header";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { skillCategories, allSkillNames } from "@/lib/data";
import {
  Code,
  Server,
  Database,
  Terminal,
  Cloud,
  Sparkles,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import { FloatingCodeLight } from "@/components/floating-code";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code: Code,
  server: Server,
  database: Database,
  terminal: Terminal,
  cloud: Cloud,
  sparkles: Sparkles,
  wrench: Wrench,
};

function SkillMarquee() {
  const doubled = [...allSkillNames, ...allSkillNames];

  return (
    <div className="relative w-full overflow-hidden mb-16">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      {/* Row 1 */}
      <div
        className="flex animate-marquee"
        style={{ "--marquee-duration": "50s" } as React.CSSProperties}
      >
        {doubled.map((skill, i) => (
          <div
            key={`r1-${i}`}
            className="flex-shrink-0 mx-2 px-5 py-2.5 rounded-full border border-border bg-card/50 text-sm font-medium text-foreground/80 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all cursor-default whitespace-nowrap"
          >
            {skill}
          </div>
        ))}
      </div>

      {/* Row 2 - reverse */}
      <div
        className="flex animate-marquee mt-3"
        style={{
          "--marquee-duration": "55s",
          animationDirection: "reverse",
        } as React.CSSProperties}
      >
        {[...doubled].reverse().map((skill, i) => (
          <div
            key={`r2-${i}`}
            className="flex-shrink-0 mx-2 px-5 py-2.5 rounded-full border border-border bg-card/50 text-sm font-medium text-foreground/80 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all cursor-default whitespace-nowrap"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <FloatingCodeLight count={3} />
      <div className="orb orb-cyan w-[300px] h-[300px] top-20 -right-20 opacity-30" />
      <div className="orb orb-blue w-[200px] h-[200px] bottom-10 -left-10 opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Technical"
          gradient="Stack"
          subtitle="Technologies I use to ship production-ready applications"
          isInView={isInView}
          className="text-center mb-12"
        />

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SkillMarquee />
        </motion.div>

        {/* Category cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = iconMap[category.icon] || Code;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + categoryIndex * 0.08,
                }}
              >
                <Card className="h-full glass border-border hover:border-primary/30 transition-all group">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-9 h-9 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                      <h3 className="font-semibold text-sm">
                        {category.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg bg-secondary/80 text-foreground/80 border border-border hover:border-primary/30 hover:text-primary transition-all cursor-default"
                        >
                          {skill.icon && (
                            <Image
                              src={skill.icon}
                              alt={skill.name}
                              width={14}
                              height={14}
                              className="flex-shrink-0"
                              unoptimized
                            />
                          )}
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
