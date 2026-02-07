"use client";

import SectionHeader from "@/components/section-header";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { certifications, achievements } from "@/lib/data";
import { Trophy, Medal, BadgeCheck, Award, ShieldCheck } from "lucide-react";
import { FloatingCodeLight } from "@/components/floating-code";

const achievementIcons = {
  trophy: Trophy,
  medal: Medal,
  certificate: BadgeCheck,
};

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute inset-0 dot-pattern opacity-15" />
      <FloatingCodeLight count={3} />
      <div className="orb orb-indigo w-[300px] h-[300px] -top-20 -left-20 opacity-25" />
      <div className="orb orb-cyan w-[250px] h-[250px] bottom-10 right-10 opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Certifications &"
          gradient="Achievements"
          subtitle="Recognitions, certifications, and competitive milestones"
          isInView={isInView}
        />

        {/* Certifications grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass border-border hover:border-primary/30 transition-all group h-full">
                <CardContent className="p-5 flex flex-col h-full">
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
                    >
                      <ShieldCheck className="h-5 w-5 text-white" />
                    </div>
                    <span
                      className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-gradient-to-r ${cert.color} text-white`}
                    >
                      {cert.badge}
                    </span>
                  </div>

                  <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-auto">
                    {cert.issuer}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold">
            Key <span className="gradient-text">Achievements</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon =
              achievementIcons[
                achievement.icon as keyof typeof achievementIcons
              ] || Award;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <Card className="glass border-border hover:border-primary/20 transition-all group h-full">
                  <CardContent className="p-5 text-center">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-cyan-500/10 flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
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
