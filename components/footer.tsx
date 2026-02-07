"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import { Github, Linkedin, Instagram } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Dipanshu</h3>
            <p className="text-muted-foreground text-sm">
              Full Stack Developer passionate about creating beautiful and
              functional web applications.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: Github, href: personalInfo.social.github },
                { icon: Linkedin, href: personalInfo.social.linkedin },
                { icon: Instagram, href: personalInfo.social.instagram },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-primary/20 transition-colors border border-primary/20"
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} {personalInfo.name}. Made with{" "}
            <Heart className="inline h-4 w-4 text-primary" fill="currentColor" />{" "}
            using Next.js & TypeScript
          </p>
          <Button
            size="icon"
            variant="ghost"
            onClick={scrollToTop}
            className="rounded-full"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
