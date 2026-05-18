"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "@/constants/data";
import { assetSrc } from "@/lib/asset";

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#f3f3f3] py-14 sm:py-16 lg:py-20">
      <div className="floral absolute -left-10 top-14 h-56 w-56 opacity-30" aria-hidden />
      <div className="floral absolute -right-10 bottom-0 h-48 w-48 rotate-180 opacity-25" aria-hidden />

      <div className="mx-auto w-full max-w-[1300px] px-6">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
          className="mb-10 flex flex-col gap-5 sm:mb-12 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8A27C] sm:text-xs">
              Mary Salon
            </p>
            <div className="mt-3 flex min-w-0 items-stretch gap-3 sm:gap-5">
              <span
                className="w-0.5 shrink-0 rounded-full bg-gradient-to-b from-[#C8A27C] via-[#C8A27C]/50 to-transparent"
                aria-hidden
              />
              <div className="min-w-0">
                <h2 id="services-heading" className="section-heading">
                  Услуги красоты
                </h2>
                <span
                  className="mt-3 block h-0.5 w-12 rounded-full bg-gradient-to-r from-[#C8A27C] to-[#C8A27C]/20 sm:mt-4 sm:w-20"
                  aria-hidden
                />
              </div>
            </div>
          </div>
          <p className="max-w-lg text-pretty text-sm leading-relaxed text-[#5c5650] sm:text-[15px] sm:leading-7 lg:max-w-md">
            Мы предлагаем полный спектр услуг красоты, чтобы вы выглядели и чувствовали себя безупречно.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-24px" }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="group flex min-w-0 flex-col overflow-hidden rounded-3xl border border-[#e6d2c2] bg-gradient-to-b from-white to-[#f9f5f1] text-center shadow-[0_10px_30px_-20px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-[#eed6c9]">
                <Image
                  src={assetSrc(service.image)}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                  className="object-cover object-center transition duration-700 ease-out group-hover:scale-[1.04]"
                  priority={index < 2}
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1A1B1E]/25 via-transparent to-transparent"
                  aria-hidden
                />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="font-heading text-xl font-semibold leading-tight text-[#bb7e52] sm:text-2xl">
                  {service.title}
                </h3>
                <div className="mx-auto mt-2 h-px w-16 bg-[#e5cdb5]" />
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#1A1B1E] sm:text-[15px] sm:leading-6">
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
