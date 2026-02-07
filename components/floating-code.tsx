"use client";

import { motion } from "framer-motion";

// Deterministic layout positions
function getPosition(index: number, total: number) {
  const goldenAngle = 137.508;
  const angle = index * goldenAngle * (Math.PI / 180);
  const radius = 25 + (index / total) * 40;
  const x = 50 + radius * Math.cos(angle) * 0.6;
  const y = 50 + radius * Math.sin(angle) * 0.8;
  return {
    left: `${Math.max(3, Math.min(95, x))}%`,
    top: `${Math.max(3, Math.min(95, y))}%`,
  };
}

// ========================================
// HERO VERSION: Full decoration set
// ========================================
export default function FloatingCode() {
  const tokens = [
    { text: "</>", cls: "text-5xl font-black" },
    { text: "{ }", cls: "text-4xl font-bold" },
    { text: "=>", cls: "text-3xl font-bold" },
    { text: "( )", cls: "text-3xl font-bold" },
    { text: "[ ]", cls: "text-2xl font-bold" },
    { text: "//", cls: "text-3xl font-bold" },
    { text: "&&", cls: "text-2xl font-bold" },
    { text: "===", cls: "text-xl font-bold" },
    { text: "?.", cls: "text-2xl font-bold" },
    { text: "<div>", cls: "text-base font-mono" },
    { text: "const", cls: "text-sm font-mono" },
    { text: "async", cls: "text-sm font-mono" },
    { text: "return", cls: "text-xs font-mono" },
    { text: "export", cls: "text-xs font-mono" },
    { text: ".tsx", cls: "text-base font-mono" },
    { text: "npm", cls: "text-xs font-mono" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {tokens.map((el, i) => {
        const pos = getPosition(i, tokens.length);
        return (
          <motion.span
            key={i}
            className={`absolute ${el.cls} text-primary/[0.08] dark:text-primary/[0.12]`}
            style={{ left: pos.left, top: pos.top }}
            animate={{
              y: [0, i % 2 === 0 ? -25 : 20, 0],
              x: [0, i % 3 === 0 ? 10 : -8, 0],
              rotate: [0, i % 2 === 0 ? 8 : -6, 0],
            }}
            transition={{
              duration: 8 + (i % 5) * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            {el.text}
          </motion.span>
        );
      })}

      {/* Code editor block - top right */}
      <CodeBlock
        className="top-[12%] right-[6%] w-48"
        delay={0}
        lines={[
          { kw: "const", text: " app = {" },
          { indent: 1, kw: "", text: "framework: ", str: '"next.js"' },
          { indent: 1, kw: "", text: "deploy: ", str: '"vercel"' },
          { kw: "", text: "}" },
        ]}
      />

      {/* Terminal block - bottom left */}
      <CodeBlock
        className="bottom-[15%] left-[4%] w-44"
        delay={2}
        terminal
        lines={[
          { kw: "$", text: " git push origin main" },
          {
            kw: "✓",
            text: " deployed to production",
            color: "text-emerald-500/30",
          },
        ]}
      />

      {/* Function block - right center */}
      <CodeBlock
        className="top-[58%] right-[10%] w-40"
        delay={4}
        lines={[
          { kw: "export function", text: "" },
          { indent: 1, kw: "", text: "App() {" },
          { indent: 2, kw: "return", text: " <Layout />" },
          { indent: 1, kw: "", text: "}" },
        ]}
      />
    </div>
  );
}

// ========================================
// SECTION VERSION: Rich, visible code deco
// ========================================
export function FloatingCodeLight({
  count = 8,
  variant = "default",
}: {
  count?: number;
  variant?: "default" | "left" | "right" | "scattered";
}) {
  const tokens = [
    { text: "</>", cls: "text-4xl font-black" },
    { text: "{ }", cls: "text-3xl font-bold" },
    { text: "=>", cls: "text-2xl font-bold" },
    { text: "( )", cls: "text-2xl font-bold" },
    { text: "//", cls: "text-3xl font-bold" },
    { text: "&&", cls: "text-xl font-bold" },
    { text: "===", cls: "text-lg font-bold" },
    { text: "[ ]", cls: "text-2xl font-bold" },
    { text: "?.", cls: "text-xl font-bold" },
    { text: "const", cls: "text-sm font-mono" },
    { text: ".tsx", cls: "text-base font-mono" },
    { text: "async", cls: "text-sm font-mono" },
  ];

  const subset = tokens.slice(0, count);

  // Position adjustments based on variant
  const positionOffset = (i: number): React.CSSProperties => {
    const base = getPosition(i + 2, subset.length + 2);
    if (variant === "left") {
      return {
        left: `${Math.max(2, Math.min(45, parseFloat(base.left)))}%`,
        top: base.top,
      };
    }
    if (variant === "right") {
      return {
        left: `${Math.max(55, Math.min(95, parseFloat(base.left) + 30))}%`,
        top: base.top,
      };
    }
    return { left: base.left, top: base.top };
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Floating syntax tokens */}
      {subset.map((el, i) => (
        <motion.span
          key={i}
          className={`absolute ${el.cls} text-primary/[0.08] dark:text-primary/[0.15]`}
          style={positionOffset(i)}
          animate={{
            y: [0, i % 2 === 0 ? -20 : 15, 0],
            rotate: [0, i % 2 === 0 ? 5 : -4, 0],
          }}
          transition={{
            duration: 10 + (i % 3) * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.6,
          }}
        >
          {el.text}
        </motion.span>
      ))}

      {/* Code snippet blocks - positioned based on variant */}
      {(variant === "right" ||
        variant === "default" ||
        variant === "scattered") && (
        <CodeBlock
          className="top-[18%] right-[4%] w-36"
          delay={1}
          opacity="low"
          lines={[
            { kw: "import", text: " { useState }" },
            { kw: "from", text: " ", str: '"react"' },
          ]}
        />
      )}

      {(variant === "left" ||
        variant === "default" ||
        variant === "scattered") && (
        <CodeBlock
          className="bottom-[20%] left-[3%] w-36"
          delay={3}
          opacity="low"
          terminal
          lines={[
            { kw: "$", text: " npm run build" },
            { kw: "✓", text: " Ready", color: "text-emerald-500/30" },
          ]}
        />
      )}

      {variant === "scattered" && (
        <CodeBlock
          className="top-[55%] left-[6%] w-32"
          delay={5}
          opacity="low"
          lines={[
            { kw: "const", text: " data = " },
            { indent: 1, kw: "await", text: " fetch(url)" },
          ]}
        />
      )}
    </div>
  );
}

// ========================================
// Shared mini code block component
// ========================================
type CodeLine = {
  kw?: string;
  text: string;
  str?: string;
  indent?: number;
  color?: string;
};

function CodeBlock({
  className,
  lines,
  delay = 0,
  terminal = false,
  opacity = "normal",
}: {
  className: string;
  lines: CodeLine[];
  delay?: number;
  terminal?: boolean;
  opacity?: "normal" | "low";
}) {
  const o = opacity === "low" ? "[0.10]" : "[0.12]";
  const oText = opacity === "low" ? "[0.7]" : "[0.12]";

  return (
    <motion.div
      className={`absolute ${className} rounded-lg border border-primary/${o} bg-primary/[0.02] p-3 font-mono text-[10px] leading-relaxed`}
      animate={{ y: [0, terminal ? 12 : -12, 0] }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {/* Window dots */}
      <div className="flex gap-1 mb-2">
        <div className={`w-1.5 h-1.5 rounded-full bg-primary/20`} />
        <div className={`w-1.5 h-1.5 rounded-full bg-primary/15`} />
        <div className={`w-1.5 h-1.5 rounded-full bg-primary/10`} />
      </div>
      {lines.map((line, i) => (
        <div
          key={i}
          className={`text-primary/${oText} dark:text-primary/${oText}`}
          style={{ paddingLeft: (line.indent || 0) * 8 }}
        >
          {line.kw && (
            <span className={line.color || "text-cyan-400/30"}>{line.kw}</span>
          )}
          {line.text}
          {line.str && <span className="text-emerald-400/30">{line.str}</span>}
        </div>
      ))}
    </motion.div>
  );
}
