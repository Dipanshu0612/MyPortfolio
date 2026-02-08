"use client";

import SectionHeader from "@/components/section-header";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { r2, stats } from "@/lib/data";
import { Award, Briefcase, Code, GraduationCap } from "lucide-react";
import { FloatingCodeLight } from "@/components/floating-code";
import Image from "next/image";

const statIcons = {
  "Production Apps": Code,
  Experience: Briefcase,
  Technologies: Award,
  CGPA: GraduationCap,
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 dot-pattern opacity-15" />
      <FloatingCodeLight count={3} />
      <div className="orb orb-blue w-[350px] h-[350px] -top-20 -right-20 opacity-40" />
      <div className="orb orb-indigo w-[250px] h-[250px] bottom-0 left-10 opacity-25" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="About"
          gradient="Me"
          subtitle="Building production-grade software that scales"
          isInView={isInView}
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass p-8">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 via-cyan-500/10 to-indigo-500/10 rounded-2xl flex items-center justify-center relative">
                <Image
                  src={r2("/images/Personal.jpg")}
                  alt="Profile Picture"
                  width={400}
                  height={400}
                  className="rounded-2xl object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">
              Full Stack Developer at{" "}
              <span className="text-primary">EnactOn Technologies</span>
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a Full Stack Developer with hands-on experience
                building, maintaining, and scaling production-grade web
                applications. My primary focus is on Next.js and the modern
                React ecosystem.
              </p>
              <p>
                Currently working at a product-based company, I contribute to
                and lead feature development across multiple client platforms
                for a European business. I&apos;ve improved application
                performance and SEO by 30-40% through SSR/ISR, optimized data
                fetching, and component refactoring.
              </p>
              <p>
                Experienced in cloud deployments (Vercel, DigitalOcean,
                Hetzner), payment integrations (Stripe), and building scalable
                architectures with Supabase and PostgreSQL. I ship features that
                work at scale while keeping systems stable and maintainable.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => {
                const Icon =
                  statIcons[stat.label as keyof typeof statIcons] || Code;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 border border-border group hover:border-primary/20 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-lg font-bold gradient-text">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
