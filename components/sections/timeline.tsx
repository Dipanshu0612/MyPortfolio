"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { education, experience } from "@/lib/data";
import { GraduationCap, Briefcase, MapPin, Calendar } from "lucide-react";

type TimelineItem = {
  id: number;
  institution?: string;
  company?: string;
  degree?: string;
  role?: string;
  location: string;
  period: string;
  grade?: string;
  description?: string;
  achievements?: string[];
  responsibilities?: string[];
  technologies?: string[];
};

function TimelineSection({
  title,
  items,
  icon: Icon,
  gradient,
}: {
  title: string;
  items: TimelineItem[];
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {title.split(" ")[0]}{" "}
            <span className="gradient-text">{title.split(" ")[1]}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey and milestones
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-pink-500 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <div className="absolute left-1/2 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10 hidden md:block">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                </div>

                <Card className="glass border-primary/20 hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">
                          {item.institution || item.company}
                        </CardTitle>
                        <p className="text-primary font-medium">
                          {item.degree || item.role}
                        </p>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {item.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {item.period}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {item.grade && (
                      <div className="mb-4 px-3 py-2 bg-primary/10 border border-primary/20 rounded-lg inline-block">
                        <span className="font-semibold text-primary">
                          {item.grade}
                        </span>
                      </div>
                    )}
                    {item.description && (
                      <p className="text-muted-foreground mb-4">
                        {item.description}
                      </p>
                    )}
                    {item.achievements && item.achievements.length > 0 && (
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="text-primary mt-1">▸</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}
                    {item.responsibilities && item.responsibilities.length > 0 && (
                      <ul className="space-y-2">
                        {item.responsibilities.map((responsibility, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="text-primary mt-1">▸</span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    )}
                    {item.technologies && item.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs rounded-md bg-secondary text-foreground"
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
    <TimelineSection
      title="Education Timeline"
      items={education}
      icon={GraduationCap}
      gradient="from-blue-500 to-cyan-500"
    />
  );
}

export function ExperienceTimeline() {
  return (
    <div id="experience" className="bg-secondary/30">
      <TimelineSection
        title="Experience Timeline"
        items={experience}
        icon={Briefcase}
        gradient="from-purple-500 to-pink-500"
      />
    </div>
  );
}
