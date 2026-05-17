"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "@/constants/data";

export default function Services() {
  return (
    <section id="services" className="relative bg-[#f4f4f4] py-14 sm:py-16 lg:py-20">
      <div className="floral absolute -left-10 top-14 h-56 w-56 opacity-35" aria-hidden />
      <div className="mx-auto w-full max-w-[1300px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-col gap-3 sm:mb-10 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="flex min-w-0 items-center gap-4 sm:gap-5">
            <span className="hidden h-14 w-px shrink-0 bg-[#C8A27C]/70 sm:block" />
            <h2 className="font-body text-[clamp(1.75rem,5vw,3.75rem)] font-semibold uppercase leading-tight tracking-[0.04em] text-[#1A1B1E]">
              Услуги красоты
            </h2>
          </div>
          <p className="max-w-md text-base leading-6 text-gray-500">
            Мы предлагаем полный спектр услуг красоты, чтобы вы выглядели и чувствовали себя
            безупречно.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[30px] border border-[#e6ddd3] bg-gradient-to-b from-white to-[#fbf8f4] shadow-[0_14px_34px_-24px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_44px_-26px_rgba(0,0,0,0.35)]"
            >
              <div className="relative h-52 overflow-hidden rounded-b-[24px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" aria-hidden />
              </div>
              <div className="flex min-w-0 flex-1 flex-col px-4 pb-7 pt-5 text-center sm:px-5 lg:px-6">
                <h3 className="font-body text-balance text-[clamp(0.9375rem,0.75rem+0.9vw,1.375rem)] font-semibold uppercase leading-snug tracking-[0.02em] text-[#1A1B1E] sm:tracking-[0.03em]">
                  {service.title}
                </h3>
                <p className="mx-auto mt-3 max-w-[240px] text-sm leading-6 text-gray-500 sm:text-base">
                  Профессиональные процедуры и индивидуальный подход для идеального результата.
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
