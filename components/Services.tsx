"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "@/constants/data";

export default function Services() {
  return (
    <section id="services" className="relative bg-[#f4f4f4] py-20">
      <div className="floral absolute -left-10 top-14 h-56 w-56 opacity-35" aria-hidden />
      <div className="mx-auto w-full max-w-[1300px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="flex items-center gap-5">
            <span className="h-14 w-px bg-[#C8A27C]/70" />
            <h2 className="font-body text-4xl font-semibold uppercase tracking-wide text-[#1A1B1E] md:text-6xl">
              Услуги красоты
            </h2>
          </div>
          <p className="max-w-md text-sm leading-5 text-gray-500">
            Мы предлагаем полный спектр услуг красоты, чтобы вы выглядели и чувствовали себя
            безупречно.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group overflow-hidden rounded-b-[88px] border border-black/5 bg-white shadow-[0_8px_20px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-7 pb-10 pt-6 text-center">
                <h3 className="font-body text-[30px] font-semibold uppercase leading-[1.02] tracking-[0.02em] text-[#1A1B1E] [overflow-wrap:anywhere]">
                  {service.title}
                </h3>
                <p className="mx-auto mt-3 max-w-[240px] text-base leading-6 text-gray-500">
                  Профессиональные процедуры и индивидуальный подход для идеального результата.
                </p>
                <button className="mt-6 rounded-full bg-[#dfc3a3] px-8 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition duration-300 hover:opacity-90">
                  Записаться
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
