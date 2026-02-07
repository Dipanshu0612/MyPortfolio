"use client";

import FloatingCode from "@/components/floating-code";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import SocialLinks from "@/components/social-links";

const roles = [
  "Full Stack Developer",
  "Next.js Specialist",
  "Production Engineer",
  "Performance Optimizer",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const speed = isDeleting ? 30 : 60;

    if (!isDeleting && displayText === role) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? role.slice(0, displayText.length - 1)
          : role.slice(0, displayText.length + 1),
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh" />

      {/* Floating code elements */}
      <FloatingCode />

      {/* Floating orbs */}
      <motion.div
        className="orb orb-blue w-[500px] h-[500px] -top-40 -right-40"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="orb orb-cyan w-[400px] h-[400px] -bottom-32 -left-32"
        animate={{
          x: [0, -25, 15, 0],
          y: [0, 20, -25, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="orb orb-indigo w-[300px] h-[300px] top-1/3 left-1/4"
        animate={{
          x: [0, 20, -10, 0],
          y: [0, -15, 20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${10 + ((i * 7.2) % 80)}%`,
              top: `${5 + ((i * 8.1) % 90)}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            className="text-xl md:text-3xl font-medium mb-8 h-12 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-muted-foreground">I am a </span>
            <span className="ml-2 text-primary font-semibold">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-[3px] h-7 ml-0.5 bg-primary align-middle"
              />
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p
            className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Shipping production-grade apps with Next.js. Experienced in scaling
            platforms, optimizing performance by 30-40%, and integrating payment
            systems for European businesses.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" variant="glow" asChild>
              <a href="#projects">
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={personalInfo.resume} download>
                <Download className="mr-2 h-5 w-5" />
                Resume
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact
              </a>
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <SocialLinks />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase">
          Scroll
        </span>
        <ArrowDown className="h-4 w-4 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
