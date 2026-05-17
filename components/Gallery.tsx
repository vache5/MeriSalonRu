"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { galleryPhotos } from "@/constants/data";

const VISIBLE_COUNT = 4;

function IconChevron({ className, direction }: { className?: string; direction: "left" | "right" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      {direction === "left" ? (
        <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

export default function Gallery() {
  const visibleCount = VISIBLE_COUNT;
  const [slideIndex, setSlideIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const maxSlide = Math.max(0, galleryPhotos.length - visibleCount);

  useEffect(() => {
    setSlideIndex((i) => Math.min(i, maxSlide));
  }, [maxSlide]);

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
    <section id="gallery" aria-labelledby="gallery-heading" className="relative bg-[#f3f3f3] py-14 sm:py-16 lg:py-20">
      <div className="floral absolute -right-8 top-16 h-44 w-44 opacity-35" aria-hidden />

      <div className="mx-auto w-full max-w-[1300px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
          className="mb-8 flex flex-col gap-3 sm:mb-10 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="flex min-w-0 items-center gap-4 sm:gap-5">
            <span className="hidden h-14 w-px shrink-0 bg-[#C8A27C]/70 sm:block" />
            <h2
              id="gallery-heading"
              className="font-body text-[clamp(1.75rem,5vw,3rem)] font-semibold uppercase leading-tight tracking-[0.04em] text-[#1A1B1E]"
            >
              Галерея салона
            </h2>
          </div>
          <p className="max-w-md text-base leading-6 text-gray-500">
            Листайте фотографии стрелками — в ряд 4 снимка.
          </p>
        </motion.div>

        <div className="relative">
          <button
            type="button"
            onClick={slidePrev}
            disabled={slideIndex === 0}
            className="absolute -left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#e6ddd3] bg-white text-[#8f735c] shadow-md transition hover:border-[#C8A27C] hover:text-[#C8A27C] disabled:pointer-events-none disabled:opacity-35 sm:-left-5 lg:h-12 lg:w-12"
            aria-label="Предыдущие фото"
          >
            <IconChevron direction="left" className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={slideNext}
            disabled={slideIndex >= maxSlide}
            className="absolute -right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#e6ddd3] bg-white text-[#8f735c] shadow-md transition hover:border-[#C8A27C] hover:text-[#C8A27C] disabled:pointer-events-none disabled:opacity-35 sm:-right-5 lg:h-12 lg:w-12"
            aria-label="Следующие фото"
          >
            <IconChevron direction="right" className="h-5 w-5" />
          </button>

          <div className="overflow-hidden px-8 sm:px-10" aria-live="polite">
            <motion.ul
              className="flex list-none gap-3 p-0 sm:gap-4"
              style={{ width: `${trackWidthPercent}%` }}
              animate={{ x: `-${slideIndex * slideStepPercent}%` }}
              transition={{ type: "spring", stiffness: 280, damping: 32 }}
            >
              {galleryPhotos.map((photo, index) => (
                <li
                  key={photo.src}
                  className="shrink-0"
                  style={{ width: `${slideStepPercent}%` }}
                >
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(index)}
                    className="group relative block w-full overflow-hidden rounded-[20px] border border-[#e6ddd3] bg-white shadow-[0_12px_28px_-22px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d4b896] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A27C] focus-visible:ring-offset-2"
                    aria-label={`Открыть: ${photo.alt}`}
                  >
                    <span className="relative block aspect-[4/5] w-full overflow-hidden">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                        priority={index < visibleCount}
                      />
                    </span>
                  </button>
                </li>
              ))}
            </motion.ul>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: maxSlide + 1 }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSlideIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === slideIndex ? "w-8 bg-[#C8A27C]" : "w-2 bg-[#dccfbf] hover:bg-[#C8A27C]/60"
                }`}
                aria-label={`Слайд ${i + 1}`}
                aria-current={i === slideIndex ? "true" : undefined}
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
            aria-label={activePhoto.alt}
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
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1024px"
                  className="object-contain p-2 sm:p-4"
                  priority
                />
              </div>

              <p className="mt-4 text-center text-sm text-white/75">{activePhoto.alt}</p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
