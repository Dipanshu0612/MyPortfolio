"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scrollspy
      const sections = navItems.map((item) => item.href.slice(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass shadow-sm py-3" : "bg-transparent py-5",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <motion.a
          href="#home"
          className="text-xl font-bold gradient-text"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Dipanshu
        </motion.a>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={cn(
                "px-3 py-1.5 text-sm rounded-lg transition-all relative",
                activeSection === item.href.slice(1)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {item.name}
              {activeSection === item.href.slice(1) && (
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                  layoutId="activeSection"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Cmd+K hint */}
          <button
            onClick={() => {
              const event = new KeyboardEvent("keydown", {
                key: "k",
                metaKey: true,
              });
              document.dispatchEvent(event);
            }}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs text-muted-foreground rounded-lg border border-border hover:border-primary/30 transition-colors"
          >
            <Command className="h-3 w-3" />
            <span>K</span>
          </button>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-xl h-9 w-9"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-xl h-9 w-9"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden glass mt-2 mx-4 rounded-2xl p-4 border border-border"
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-4 py-2.5 rounded-xl text-sm transition-colors",
                    activeSection === item.href.slice(1)
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
