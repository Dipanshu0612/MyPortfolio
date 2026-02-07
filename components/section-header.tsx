"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  gradient: string;
  subtitle: string;
  isInView: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  gradient,
  subtitle,
  isInView,
  className = "text-center mb-16",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
        {title} <span className="gradient-text">{gradient}</span>
      </h2>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
        {subtitle}
      </p>
    </motion.div>
  );
}
