"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { galleryPhotos } from "@/constants/data";
import { IconChevron } from "@/components/icons";
import { assetSrc } from "@/lib/asset";
import { GALLERY_VISIBLE_BREAKPOINTS, useBreakpointCount } from "@/lib/useBreakpointCount";

export default function Gallery() {
  const visibleCount = useBreakpointCount(GALLERY_VISIBLE_BREAKPOINTS);
  const [slideIndex, setSlideIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const maxSlide = Math.max(0, galleryPhotos.length - visibleCount);
  const effectiveSlideIndex = Math.min(slideIndex, maxSlide);

  const slidePrev = () => setSlideIndex((i) => Math.max(0, i - 1));
  const slideNext = () => setSlideIndex((i) => Math.min(maxSlide, i + 1));

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const lightboxPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + galleryPhotos.length) % galleryPhotos.length));
  }, []);

  const lightboxNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % galleryPhotos.length));
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") lightboxPrev();
      if (e.key === "ArrowRight") lightboxNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex, closeLightbox, lightboxPrev, lightboxNext]);

  const activePhoto = lightboxIndex !== null ? galleryPhotos[lightboxIndex] : null;
  const slideStepPercent = 100 / galleryPhotos.length;
  const trackWidthPercent = (galleryPhotos.length / visibleCount) * 100;

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="relative bg-[#f3f3f3] py-12 sm:py-16 lg:py-20">
      <div className="floral absolute -right-8 top-16 h-44 w-44 opacity-35" aria-hidden />

      <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
          className="mb-6 flex flex-col gap-2 sm:mb-10 sm:gap-3 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="flex min-w-0 items-center gap-4 sm:gap-5">
            <span className="hidden h-14 w-px shrink-0 bg-[#C8A27C]/70 sm:block" />
            <h2 id="gallery-heading" className="section-heading">
              Галерея салона
            </h2>
          </div>
          <p className="text-sm leading-6 text-[#5c5650] sm:text-base">
            <span className="lg:hidden">Листайте стрелками — крупные фото салона.</span>
            <span className="hidden lg:inline">Листайте фотографии стрелками.</span>
          </p>
        </motion.header>

        <div className="relative">
          <button
            type="button"
            onClick={slidePrev}
            disabled={effectiveSlideIndex === 0}
            className="absolute left-0 top-[42%] z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#e8e0d6] bg-white text-[#8f735c] shadow-[0_8px_24px_-8px_rgba(26,22,18,0.2)] transition hover:border-[#C8A27C] hover:text-[#C8A27C] disabled:pointer-events-none disabled:opacity-35 sm:left-1 sm:h-12 sm:w-12 lg:-left-5 lg:h-12 lg:w-12"
            aria-label="Предыдущие фото"
          >
            <IconChevron direction="left" className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={slideNext}
            disabled={effectiveSlideIndex >= maxSlide}
            className="absolute right-0 top-[42%] z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#e8e0d6] bg-white text-[#8f735c] shadow-[0_8px_24px_-8px_rgba(26,22,18,0.2)] transition hover:border-[#C8A27C] hover:text-[#C8A27C] disabled:pointer-events-none disabled:opacity-35 sm:right-1 sm:h-12 sm:w-12 lg:-right-5 lg:h-12 lg:w-12"
            aria-label="Следующие фото"
          >
            <IconChevron direction="right" className="h-5 w-5" />
          </button>

          <div className="overflow-hidden px-14 sm:px-16 lg:px-12" aria-live="polite">
            <motion.ul
              className="flex list-none gap-4 p-0 sm:gap-5 lg:gap-4"
              style={{ width: `${trackWidthPercent}%` }}
              animate={{ x: `-${effectiveSlideIndex * slideStepPercent}%` }}
              transition={{ type: "spring", stiffness: 280, damping: 32 }}
            >
              {galleryPhotos.map((photo, index) => (
                <li key={photo.src} className="shrink-0" style={{ width: `${slideStepPercent}%` }}>
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(index)}
                    className="group relative block w-full overflow-hidden rounded-2xl border-2 border-[#e8e0d6] bg-white shadow-[0_16px_40px_-20px_rgba(26,22,18,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d4b896] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A27C] focus-visible:ring-offset-2 sm:rounded-[22px] lg:rounded-[20px]"
                    aria-label={`Открыть фото ${index + 1}`}
                  >
                    <span className="relative block aspect-[4/5] w-full overflow-hidden sm:aspect-[5/6] lg:aspect-[4/5]">
                      <Image
                        src={assetSrc(photo.src)}
                        alt=""
                        fill
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                        priority={index < 2}
                      />
                      <span
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1A1B1E]/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        aria-hidden
                      />
                    </span>
                  </button>
                </li>
              ))}
            </motion.ul>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 sm:mt-6">
            {Array.from({ length: maxSlide + 1 }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSlideIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === effectiveSlideIndex ? "w-8 bg-[#C8A27C]" : "w-2 bg-[#dccfbf] hover:bg-[#C8A27C]/60"
                }`}
                aria-label={`Слайд ${i + 1}`}
                aria-current={i === effectiveSlideIndex ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activePhoto && lightboxIndex !== null ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Фото ${lightboxIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#1A1B1E]/92 p-4 sm:p-6"
            onClick={closeLightbox}
          >
            <div className="mb-4 flex w-full max-w-5xl items-center justify-between text-white/90">
              <p className="text-sm font-medium tracking-wide text-white/80">
                {lightboxIndex + 1} / {galleryPhotos.length}
              </p>
              <button
                type="button"
                onClick={closeLightbox}
                className="flex h-10 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 text-sm backdrop-blur-sm transition hover:bg-white/20"
              >
                Закрыть
                <span className="text-lg leading-none" aria-hidden>
                  ×
                </span>
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl flex-1"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={lightboxPrev}
                className="absolute -left-1 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-2xl text-white backdrop-blur-sm transition hover:bg-white/20 sm:-left-14"
                aria-label="Предыдущее"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={lightboxNext}
                className="absolute -right-1 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-2xl text-white backdrop-blur-sm transition hover:bg-white/20 sm:-right-14"
                aria-label="Следующее"
              >
                ›
              </button>

              <div className="relative mx-auto h-[min(70vh,640px)] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#f8f4ef] shadow-2xl sm:rounded-[28px]">
                <Image
                  key={activePhoto.src}
                  src={assetSrc(activePhoto.src)}
                  alt=""
                  fill
                  sizes="(max-width: 1280px) 100vw, 1024px"
                  className="object-contain p-2 sm:p-4"
                  priority
                />
              </div>

            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
