"use client";

import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import FourthLanding, { type SalonKey } from "@/components/FourthLanding";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LandingLastAddresses from "@/components/LandingLastAddresses";
import LandingFiveTeam from "@/components/LandingFiveTeam";
import LandingSixReviews from "@/components/LandingSixReviews";
import Services from "@/components/Services";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [salon, setSalon] = useState<SalonKey>("kryukovo");
  const [showVersionPopup, setShowVersionPopup] = useState(true);

  const chooseSalon = (value: SalonKey) => {
    setSalon(value);
    setShowVersionPopup(false);
  };

  return (
    <>
      <Header salon={salon} onSalonChange={setSalon} />
      <main id="home" className="overflow-x-hidden">
        <Hero />
        <Services />
        <Banner />
        <FourthLanding salon={salon} onSalonChange={setSalon} />
        <LandingFiveTeam />
        <LandingSixReviews />
        <LandingLastAddresses salon={salon} />
        <Footer />
      </main>

      <AnimatePresence>
        {showVersionPopup ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-2xl"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-[#C8A27C]">Версия сайта</p>
              <h2 className="mt-3 font-heading text-4xl text-[#1A1B1E]">Выберите салон</h2>
              <p className="mt-3 text-sm leading-6 text-gray-500">
                У нас есть 2 версии сайта с разными прайсами. Выберите нужный салон, и цены по
                всем услугам переключатся автоматически.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => chooseSalon("kryukovo")}
                  className="rounded-lg border border-[#C8A27C] bg-[#f8f1ea] px-6 py-5 text-left transition hover:bg-[#f1e4d7]"
                >
                  <p className="text-base font-semibold uppercase tracking-[0.1em] text-[#1A1B1E]">Салон Крюково</p>
                  <p className="mt-2 text-sm text-gray-500">Базовый прайс-лист</p>
                </button>
                <button
                  type="button"
                  onClick={() => chooseSalon("istra")}
                  className="rounded-lg border border-[#C8A27C] bg-[#f8f1ea] px-6 py-5 text-left transition hover:bg-[#f1e4d7]"
                >
                  <p className="text-base font-semibold uppercase tracking-[0.1em] text-[#1A1B1E]">Салон Истра</p>
                  <p className="mt-2 text-sm text-gray-500">Альтернативный прайс-лист</p>
                </button>
              </div>
              <button
                type="button"
                onClick={() => setShowVersionPopup(false)}
                className="mt-5 text-xs uppercase tracking-[0.14em] text-gray-400 transition hover:text-gray-600"
              >
                Закрыть
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
