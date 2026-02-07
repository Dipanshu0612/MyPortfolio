import { useEffect, useRef } from "react";
import { gallery } from "@/lib/data";

const R2_HOST = "image.dipanshuu.in";

function buildPrefetchUrl(src: string, maxWidth: number, quality: number): string | null {
  try {
    const url = new URL(src);
    if (url.hostname === R2_HOST) {
      return `/api/image?url=${encodeURIComponent(src)}&w=${maxWidth}&q=${quality}`;
    }
  } catch {
    // not an absolute URL
  }
  return null;
}

export function useGalleryPrefetch(trigger: boolean) {
  const prefetched = useRef(false);

  useEffect(() => {
    if (!trigger || prefetched.current) return;
    prefetched.current = true;

    // Collect all gallery URLs at the sizes they'll be displayed
    const urls: string[] = [];

    for (const album of gallery) {
      // Cover thumbnail (800px)
      const cover = buildPrefetchUrl(album.cover, 800, 80);
      if (cover) urls.push(cover);

      // All album images — full size (1920px) + thumbnail (200px)
      for (const img of album.images) {
        const full = buildPrefetchUrl(img, 1920, 80);
        if (full) urls.push(full);
        const thumb = buildPrefetchUrl(img, 200, 80);
        if (thumb) urls.push(thumb);
      }
    }

    // Inject prefetch links — browser handles these at low priority
    urls.forEach((url) => {
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.as = "image";
      link.href = url;
      document.head.appendChild(link);
    });
  }, [trigger]);
}
