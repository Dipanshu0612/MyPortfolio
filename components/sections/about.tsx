"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { stats } from "@/lib/data";
import { Award, Briefcase, Code, GraduationCap } from "lucide-react";

const iconMap = {
  "Years Experience": Briefcase,
  "Projects Completed": Code,
  Technologies: Award,
  CGPA: GraduationCap,
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know more about my journey, skills, and achievements
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass p-8">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center">
                <motion.div
                  animate={{
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-8xl"
                >
                  👨‍💻
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">Full Stack Developer</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a dedicated and passionate B-Tech Computer Science student
                at Parul University with a profound love for coding and
                problem-solving. My journey in the world of computers began with
                a curiosity to understand how they work and the magic they
                create.
              </p>
              <p>
                Currently, I am honing my skills as a full-stack developer,
                proficient in a variety of programming languages and
                technologies. I have expertise in the MERN stack (MongoDB,
                Express, React, Node.js) and modern frontend technologies like
                Next.js, TypeScript, and Tailwind CSS.
              </p>
              <p>
                I am always eager to expand my knowledge and stay updated with
                the latest advancements in technology. I thrive on building
                scalable web applications and solving complex problems with
                elegant solutions.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.label as keyof typeof iconMap] || Code;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center hover:scale-105 transition-transform glass border-primary/20">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold mb-2 gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
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
