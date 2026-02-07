"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

const R2_HOST = "image.dipanshuu.in";

interface OptimizedImageProps extends ImageProps {
  maxWidth?: number;
  quality?: number;
}

function buildOptimizedSrc(src: string, maxWidth: number, quality: number): string {
  try {
    const url = new URL(src);
    if (url.hostname === R2_HOST) {
      return `/api/image?url=${encodeURIComponent(src)}&w=${maxWidth}&q=${quality}`;
    }
  } catch {
    // not an absolute URL, leave as-is
  }
  return src;
}

export default function OptimizedImage({
  src,
  maxWidth = 1920,
  quality = 80,
  fill,
  className,
  ...props
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);

  const optimizedSrc = typeof src === "string"
    ? buildOptimizedSrc(src, maxWidth, quality)
    : src;

  return (
    <>
      {/* Skeleton shimmer */}
      {!loaded && (
        <div
          className={`bg-secondary animate-pulse ${
            fill ? "absolute inset-0" : "w-full h-full"
          }`}
        />
      )}
      <Image
        src={optimizedSrc}
        fill={fill}
        className={`transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"} ${className ?? ""}`}
        onLoad={() => setLoaded(true)}
        {...props}
      />
    </>
  );
}
