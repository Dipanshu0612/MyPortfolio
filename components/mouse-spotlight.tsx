"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MouseSpotlight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30"
      animate={{
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="absolute w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, rgba(59, 130, 246, 0.02) 40%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
