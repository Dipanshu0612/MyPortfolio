"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Search,
  Home,
  User,
  Code,
  Briefcase,
  Mail,
  FileDown,
  GraduationCap,
  Image,
  ShieldCheck,
} from "lucide-react";
import { personalInfo } from "@/lib/data";

const commands = [
  {
    id: "home",
    label: "Home",
    icon: Home,
    action: () => {
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    id: "about",
    label: "About",
    icon: User,
    action: () => {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    id: "skills",
    label: "Skills",
    icon: Code,
    action: () => {
      document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    id: "projects",
    label: "Projects",
    icon: Briefcase,
    action: () => {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    id: "experience",
    label: "Experience",
    icon: Briefcase,
    action: () => {
      document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    id: "education",
    label: "Education",
    icon: GraduationCap,
    action: () => {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    id: "certifications",
    label: "Certifications",
    icon: ShieldCheck,
    action: () => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    id: "gallery",
    label: "Gallery",
    icon: Image,
    action: () => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    id: "contact",
    label: "Contact",
    icon: Mail,
    action: () => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    id: "resume",
    label: "Download Resume",
    icon: FileDown,
    action: () => window.open(personalInfo.resume, "_blank"),
  },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const filteredCommands = commands.filter((command) =>
    command.label.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  useEffect(() => {
    if (!open) {
      setSearch("");
      setSelectedIndex(0);
    }
  }, [open]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filteredCommands.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredCommands.length - 1
      );
    } else if (e.key === "Enter" && filteredCommands[selectedIndex]) {
      e.preventDefault();
      filteredCommands[selectedIndex].action();
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="p-0 gap-0 max-w-xl rounded-2xl">
        <DialogHeader className="sr-only">
          <DialogTitle>Command Palette</DialogTitle>
        </DialogHeader>
        <div className="flex items-center border-b border-border px-4 py-3">
          <Search className="h-4 w-4 text-muted-foreground mr-3" />
          <input
            type="text"
            placeholder="Search commands..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
            autoFocus
          />
          <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded-md border border-border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
            ESC
          </kbd>
        </div>
        <div className="max-h-[350px] overflow-y-auto p-2">
          <AnimatePresence mode="wait">
            {filteredCommands.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-10 text-center text-sm text-muted-foreground"
              >
                No results found.
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-0.5"
              >
                {filteredCommands.map((command, index) => (
                  <button
                    key={command.id}
                    onClick={() => {
                      command.action();
                      setOpen(false);
                    }}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm transition-colors ${
                      selectedIndex === index
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-accent"
                    }`}
                  >
                    <command.icon className="h-4 w-4" />
                    <span className="flex-1">{command.label}</span>
                    {selectedIndex === index && (
                      <kbd className="hidden h-5 select-none items-center gap-1 rounded-md border border-border bg-muted px-1.5 font-mono text-[10px] font-medium sm:flex">
                        &#8629;
                      </kbd>
                    )}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="border-t border-border px-4 py-2 text-[11px] text-muted-foreground flex items-center justify-between">
          <span>&#8593;&#8595; to navigate</span>
          <span>&#8984;K to toggle</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
