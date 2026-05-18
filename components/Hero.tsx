"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IconPhone } from "@/components/icons";
import { assetSrc } from "@/lib/asset";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: 0.12 * i, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative mt-[128px] min-h-[max(calc(100vh-128px),620px)] overflow-hidden bg-[#1A1B1E]">
      <Image
        src={assetSrc("/images/hero-heading-bg-v3.png")}
        alt=""
        fill
        priority
        className="object-cover object-[72%_center] sm:object-[78%_center] lg:object-right"
        sizes="100vw"
      />

      <motion.div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#141518]/95 via-[#1A1B1E]/82 to-[#1A1B1E]/25 lg:via-[#1A1B1E]/70 lg:to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#141518]/80 via-transparent to-[#141518]/30 lg:bg-none"
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_50%,rgba(200,162,124,0.12),transparent_55%)]"
        aria-hidden
      />

      <div className="floral absolute -left-12 top-10 h-56 w-56 opacity-20" aria-hidden />
      <div className="floral absolute right-[8%] top-16 hidden h-44 w-44 opacity-15 lg:block" aria-hidden />

      <div className="relative z-10 mx-auto flex h-full min-h-[inherit] w-full max-w-[1320px] items-center px-5 py-12 sm:px-8 sm:py-14 lg:px-10">
        <div className="w-full max-w-2xl lg:max-w-[52%]">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#d4b896] sm:text-xs"
          >
            Mary Salon
          </motion.p>

          <motion.div custom={1} variants={fadeUp} initial="hidden" animate="show" className="mt-4 flex items-stretch gap-4 sm:gap-5">
            <span className="w-1 shrink-0 rounded-full bg-gradient-to-b from-[#C8A27C] via-[#d4b896] to-transparent" aria-hidden />
            <h1
              id="hero-heading"
              className="font-heading text-[clamp(2.25rem,6.5vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-white"
            >
              <span className="block text-[#E8D4BC]">Вы в надёжных руках</span>
              <span className="mt-1 block bg-gradient-to-r from-[#E8D4BC] via-[#C8A27C] to-[#a67c52] bg-clip-text text-transparent">
                наших мастеров
              </span>
            </h1>
          </motion.div>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-pretty text-[15px] leading-[1.75] text-white/88 sm:mt-7 sm:text-base sm:leading-[1.8]"
          >
            Смените образ, подготовьтесь к празднику или деловой встрече — у нас широкий выбор процедур по
            уходу за кожей и волосами от опытных мастеров.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <a
              href="tel:+79199907171"
              aria-label="Позвонить: +7 (919) 990-71-71"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-b from-[#d4b896] to-[#a67c52] px-2 py-2 pr-6 text-white shadow-[0_14px_40px_-12px_rgba(166,124,82,0.65)] transition hover:brightness-105 active:scale-[0.98]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/25 transition group-hover:bg-white/30">
                <IconPhone className="h-5 w-5" />
              </span>
              <span className="text-left">
                <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-white/85">
                  Позвонить
                </span>
                <span className="block text-sm font-semibold tracking-wide sm:text-[15px]">+7 (919) 990-71-71</span>
              </span>
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white/90 backdrop-blur-sm transition hover:border-[#C8A27C]/50 hover:bg-white/10"
            >
              Наши услуги
            </a>
          </motion.div>

          <motion.ul
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-8 text-[11px] font-medium uppercase tracking-[0.14em] text-white/55 sm:gap-x-8 sm:text-xs"
          >
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C8A27C]" aria-hidden />
              Парикмахерская
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C8A27C]" aria-hidden />
              Косметология
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C8A27C]" aria-hidden />
              Маникюр
            </li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
