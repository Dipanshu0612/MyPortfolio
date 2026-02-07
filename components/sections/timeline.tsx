"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { education, experience } from "@/lib/data";
import {
  GraduationCap,
  Briefcase,
  MapPin,
  Calendar,
  Clock,
} from "lucide-react";
import { FloatingCodeLight } from "@/components/floating-code";

type EducationItem = {
  id: number;
  institution: string;
  degree: string;
  location: string;
  period: string;
  grade: string;
  achievements: string[];
};

type ExperienceItem = {
  id: number;
  company: string;
  role: string;
  type: string;
  period: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
};

function EducationTimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Education <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic foundation and campus leadership
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
          <motion.div
            className="absolute left-1/2 top-0 w-px bg-gradient-to-b from-blue-500 to-cyan-400 -translate-x-1/2 hidden md:block"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12">
            {(education as EducationItem[]).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative md:w-[calc(50%-2.5rem)] ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                {/* Glowing node */}
                <div
                  className={`absolute hidden md:flex items-center justify-center
                    ${index % 2 === 0 ? "-right-[3.1rem]" : "-left-[3.1rem]"}
                    top-8 z-10`}
                >
                  <div className="timeline-node w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 border-4 border-background">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-blue-500/50"
                      animate={{
                        scale: [1, 2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                  </div>
                </div>

                <Card className="glass border-border hover:border-primary/20 transition-all group">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                        <GraduationCap className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg mb-1">
                          {item.institution}
                        </CardTitle>
                        <p className="text-primary font-medium text-sm">
                          {item.degree}
                        </p>
                        <div className="flex flex-wrap gap-3 mt-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {item.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {item.period}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-3 px-3 py-1.5 bg-primary/5 border border-primary/15 rounded-lg inline-block">
                      <span className="font-semibold text-primary text-sm">
                        {item.grade}
                      </span>
                    </div>
                    {item.achievements.length > 0 && (
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="text-primary mt-0.5 text-xs">
                              &#9670;
                            </span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceTimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional journey building production software
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
          <motion.div
            className="absolute left-1/2 top-0 w-px bg-gradient-to-b from-primary to-indigo-500 -translate-x-1/2 hidden md:block"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12">
            {(experience as ExperienceItem[]).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative md:w-[calc(50%-2.5rem)] ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                {/* Glowing node */}
                <div
                  className={`absolute hidden md:flex items-center justify-center
                    ${index % 2 === 0 ? "-right-[3.1rem]" : "-left-[3.1rem]"}
                    top-8 z-10`}
                >
                  <div className="timeline-node w-5 h-5 rounded-full bg-gradient-to-br from-primary to-indigo-500 border-4 border-background">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary/50"
                      animate={{
                        scale: [1, 2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />
                  </div>
                </div>

                <Card className="glass border-border hover:border-primary/20 transition-all group">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-indigo-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                        <Briefcase className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg mb-1">
                          {item.company}
                        </CardTitle>
                        <p className="text-primary font-medium text-sm">
                          {item.role}
                        </p>
                        <div className="flex flex-wrap gap-3 mt-2 text-xs text-muted-foreground">
                          <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
                            {item.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {item.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {item.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {item.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {item.description}
                    </p>
                    {item.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs rounded-md bg-primary/5 text-primary/80 border border-primary/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function EducationTimeline() {
  return (
    <div className="relative">
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <FloatingCodeLight count={8} variant="scattered" />
      <div className="orb orb-cyan w-[250px] h-[250px] top-20 right-10 opacity-15" />
      <div className="orb orb-blue w-[200px] h-[200px] bottom-20 left-5 opacity-15" />
      <EducationTimelineSection />
    </div>
  );
}

export function ExperienceTimeline() {
  return (
    <div id="experience" className="relative">
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <FloatingCodeLight count={10} variant="scattered" />
      <div className="orb orb-blue w-[300px] h-[300px] top-20 -left-20 opacity-20" />
      <div className="orb orb-indigo w-[200px] h-[200px] bottom-10 right-10 opacity-15" />
      <ExperienceTimelineSection />
    </div>
  );
}
