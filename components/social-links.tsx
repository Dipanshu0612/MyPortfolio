"use client";

import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  {
    icon: FaGithub,
    href: personalInfo.social.github,
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: personalInfo.social.linkedin,
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: personalInfo.social.instagram,
    label: "Instagram",
  },
  {
    icon: FaWhatsapp,
    href: personalInfo.social.whatsapp,
    label: "WhatsApp",
  },
];

interface SocialLinksProps {
  size?: "sm" | "default";
  className?: string;
}

export default function SocialLinks({
  size = "default",
  className,
}: SocialLinksProps) {
  const containerSize = size === "sm" ? "w-10 h-10" : "w-11 h-11";
  const iconSize = size === "sm" ? "h-4 w-4" : "h-5 w-5";

  return (
    <div className={className ?? "flex gap-3"}>
      {socialLinks.map((social) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          whileHover={{ scale: size === "sm" ? 1.05 : 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={`${containerSize} rounded-xl glass flex items-center justify-center hover:border-primary/40 transition-all`}
        >
          <social.icon className={iconSize} />
        </motion.a>
      ))}
    </div>
  );
}
