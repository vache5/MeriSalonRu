"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative mt-[128px] h-[calc(100vh-128px)] min-h-[620px] overflow-hidden bg-[#4d4e52]">
      <Image
        src="/images/hero-heading-bg-v3.png"
        alt="Hero beauty background"
        fill
        priority
        className="object-cover object-right"
      />
      <div className="floral absolute -left-10 top-8 h-52 w-52 opacity-35" aria-hidden />
      <div className="floral absolute left-[42%] top-6 h-40 w-40 opacity-25" aria-hidden />
      <div className="floral absolute bottom-6 left-[28%] h-40 w-40 opacity-25" aria-hidden />
      <div className="floral absolute -right-8 top-28 h-40 w-40 opacity-25" aria-hidden />

      <div className="relative z-10 mx-auto h-full w-full max-w-[1300px] px-6 lg:px-8">
        <div className="grid h-full grid-cols-1 items-center">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-[860px] py-12 text-white lg:max-w-[54%] lg:pr-12"
          >
            <h1 className="font-body text-[58px] font-semibold uppercase leading-[0.96] tracking-[0.02em] text-[#C8A27C] [text-shadow:0_4px_18px_rgba(0,0,0,0.45)]">
              Вы в надежных руках
              <br />
              наших мастеров
            </h1>
            <p className="mt-7 max-w-[760px] text-lg leading-8 text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.35)]">
              Хотите сменить образ или скрыть эстетические недостатки? Желаете подготовиться к
              празднику, деловой встрече или романтическому свиданию, чтобы выглядеть на все 100%?
              Тогда приходите к нам! К вашим услугам широкий выбор процедур по уходу за кожей и
              волосами, оказываемых лучшими мастерами.
            </p>
            <a
              href="tel:+79199907171"
              className="mt-7 inline-flex rounded-full bg-[#C8A27C] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#b7926e]"
            >
              +7 (919) 990-71-71
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
