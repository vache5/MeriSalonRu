"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { SalonKey } from "@/components/FourthLanding";

type AddressLandingProps = {
  salon: SalonKey;
};

const salonData: Record<
  SalonKey,
  {
    title: string;
    fullAddress: string;
    mapSrc: string;
  }
> = {
  kryukovo: {
    title: "КРЮЧКОВО",
    fullAddress: "МО, Городской округ Истра, д. Крючково, ул. Радости, д. 4",
    mapSrc:
      "https://yandex.ru/map-widget/v1/?text=%D0%9C%D0%9E%2C%20%D0%93%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D0%BA%D0%BE%D0%B9%20%D0%BE%D0%BA%D1%80%D1%83%D0%B3%20%D0%98%D1%81%D1%82%D1%80%D0%B0%2C%20%D0%B4.%20%D0%9A%D1%80%D1%8E%D1%87%D0%BA%D0%BE%D0%B2%D0%BE%2C%20%D1%83%D0%BB.%20%D0%A0%D0%B0%D0%B4%D0%BE%D1%81%D1%82%D0%B8%2C%20%D0%B4.%204&z=15",
  },
  istra: {
    title: "ИСТРА",
    fullAddress: "МО, г. Истра, ул. Адасько, д. 9, второй этаж",
    mapSrc:
      "https://yandex.ru/map-widget/v1/?text=%D0%9C%D0%9E%2C%20%D0%B3.%20%D0%98%D1%81%D1%82%D1%80%D0%B0%2C%20%D1%83%D0%BB.%20%D0%90%D0%B4%D0%B0%D1%81%D1%8C%D0%BA%D0%BE%2C%20%D0%B4.%209%2C%20%D0%B2%D1%82%D0%BE%D1%80%D0%BE%D0%B9%20%D1%8D%D1%82%D0%B0%D0%B6&z=15",
  },
};

export default function LandingLastAddresses({ salon }: AddressLandingProps) {
  const [activeSalon, setActiveSalon] = useState<SalonKey>(salon);
  const active = salonData[activeSalon];

  return (
    <section id="addresses" className="relative scroll-mt-[120px] overflow-hidden bg-[#f3f3f3] py-20">
      <div className="floral absolute -right-8 top-20 h-44 w-44 opacity-35" aria-hidden />

      <div className="mx-auto w-full max-w-[1300px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-5">
            <span className="h-14 w-px bg-[#C8A27C]/70" />
            <h2 className="font-body text-5xl font-semibold uppercase tracking-wide text-[#1A1B1E]">
              Адреса наших салонов
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <button
              type="button"
              onClick={() => setActiveSalon("kryukovo")}
              className={`w-full rounded-2xl border px-6 py-5 text-left transition ${
                activeSalon === "kryukovo"
                  ? "border-[#C8A27C] bg-[#f8f1ea] shadow-[0_12px_25px_-20px_rgba(0,0,0,0.45)]"
                  : "border-[#e7d6c7] bg-white hover:border-[#C8A27C]/70"
              }`}
            >
              <p className="text-2xl font-semibold uppercase tracking-[0.06em] text-[#1A1B1E]">КРЮЧКОВО</p>
              <p className="mt-2 text-base leading-7 text-gray-600">
                МО, Городской округ Истра, д. Крючково, ул. Радости, д. 4
              </p>
            </button>

            <button
              type="button"
              onClick={() => setActiveSalon("istra")}
              className={`w-full rounded-2xl border px-6 py-5 text-left transition ${
                activeSalon === "istra"
                  ? "border-[#C8A27C] bg-[#f8f1ea] shadow-[0_12px_25px_-20px_rgba(0,0,0,0.45)]"
                  : "border-[#e7d6c7] bg-white hover:border-[#C8A27C]/70"
              }`}
            >
              <p className="text-2xl font-semibold uppercase tracking-[0.06em] text-[#1A1B1E]">ИСТРА</p>
              <p className="mt-2 text-base leading-7 text-gray-600">
                МО, г. Истра, ул. Адасько, д. 9, второй этаж
              </p>
            </button>
          </motion.div>

          <motion.div
            key={activeSalon}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-[#e7d6c7] bg-white shadow-[0_12px_25px_-20px_rgba(0,0,0,0.45)]"
          >
            <div className="border-b border-[#f0e2d5] px-5 py-4">
              <p className="text-xs uppercase tracking-[0.14em] text-[#C8A27C]">Сейчас выбран</p>
              <p className="mt-1 text-2xl font-semibold text-[#1A1B1E]">{active.title}</p>
              <p className="mt-1 text-sm text-gray-500">{active.fullAddress}</p>
            </div>
            <iframe
              title={`Карта салона ${active.title}`}
              src={active.mapSrc}
              className="h-[420px] w-full"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
