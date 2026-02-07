"use client";

import SectionHeader from "@/components/section-header";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { gallery } from "@/lib/data";
import OptimizedImage from "@/components/optimized-image";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";
import { FloatingCodeLight } from "@/components/floating-code";

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeAlbum, setActiveAlbum] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  const openAlbum = (albumIndex: number) => {
    setActiveAlbum(albumIndex);
    setActiveImage(0);
  };

  const closeAlbum = () => {
    setActiveAlbum(null);
    setActiveImage(0);
  };

  const nextImage = useCallback(() => {
    if (activeAlbum === null) return;
    const total = gallery[activeAlbum].images.length;
    setActiveImage((prev) => (prev + 1) % total);
  }, [activeAlbum]);

  const prevImage = useCallback(() => {
    if (activeAlbum === null) return;
    const total = gallery[activeAlbum].images.length;
    setActiveImage((prev) => (prev - 1 + total) % total);
  }, [activeAlbum]);

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <FloatingCodeLight count={3} />
      <div className="orb orb-blue w-[350px] h-[350px] -top-20 right-10 opacity-20" />
      <div className="orb orb-indigo w-[250px] h-[250px] bottom-10 -left-10 opacity-15" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Life"
          gradient="Gallery"
          subtitle="Moments from my journey - work, campus, and everything in between"
          isInView={isInView}
        />

        {/* Album grid */}
        <div className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto">
          {gallery.map((album, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group cursor-pointer w-[calc(50%-10px)] md:w-[calc(33.333%-14px)]"
              onClick={() => openAlbum(index)}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border group-hover:border-primary/30 transition-all">
                <OptimizedImage
                  src={album.cover}
                  alt={album.title}
                  fill
                  maxWidth={800}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                {/* Photo count badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-background/70 backdrop-blur-sm border border-border text-[11px] font-medium flex items-center gap-1.5">
                  <Images className="h-3 w-3" />
                  {album.images.length}
                </div>

                {/* Bottom info - appears on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-sm font-semibold mb-0.5">
                    {album.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-1">
                    {album.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Carousel Lightbox */}
      <AnimatePresence>
        {activeAlbum !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center"
            onClick={closeAlbum}
          >
            {/* Close button */}
            <button
              onClick={closeAlbum}
              className="absolute top-6 right-6 w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-primary/20 transition-colors z-20"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Album title */}
            <div className="absolute top-6 left-6 z-20">
              <h3 className="text-lg font-semibold">
                {gallery[activeAlbum].title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {gallery[activeAlbum].description}
              </p>
            </div>

            {/* Main image */}
            <motion.div
              key={activeImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <OptimizedImage
                src={gallery[activeAlbum].images[activeImage]}
                alt={`${gallery[activeAlbum].title} - Photo ${activeImage + 1}`}
                fill
                maxWidth={1920}
                className="object-contain"
              />
            </motion.div>

            {/* Navigation arrows */}
            {gallery[activeAlbum].images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-primary/20 transition-colors z-20"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-primary/20 transition-colors z-20"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            {/* Thumbnail strip */}
            <div
              className="flex gap-2 mt-6"
              onClick={(e) => e.stopPropagation()}
            >
              {gallery[activeAlbum].images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === i
                      ? "border-primary shadow-lg shadow-primary/20 scale-105"
                      : "border-border opacity-50 hover:opacity-80"
                  }`}
                >
                  <OptimizedImage
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    fill
                    maxWidth={200}
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Counter */}
            <p className="text-xs text-muted-foreground mt-3">
              {activeImage + 1} / {gallery[activeAlbum].images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
