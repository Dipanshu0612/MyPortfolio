"use client";

import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";

import { ArrowUp } from "lucide-react";
import SocialLinks from "@/components/social-links";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-3">Dipanshu</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full Stack Developer building production-grade web applications
              with Next.js and modern technologies.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4 text-muted-foreground uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Contact",
              ].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4 text-muted-foreground uppercase tracking-wider">
              Connect
            </h4>
            <SocialLinks size="sm" className="flex gap-2" />
          </div>
        </div>

        <div className="section-divider mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {personalInfo.name}.
          </p>
          <Button
            size="icon"
            variant="ghost"
            onClick={scrollToTop}
            className="rounded-xl h-9 w-9"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
