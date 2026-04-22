"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type TeamMember = {
  name: string;
  role: string;
  gender: "male" | "female";
};

const masters: TeamMember[] = [
  { name: "Нуне Володяевна", role: "Топ-стилист", gender: "female" },
  { name: "Армен Варданович", role: "Топ-барбер", gender: "male" },
  { name: "Оганес Варданович", role: "Барбер", gender: "male" },
  { name: "Генри Рафикович", role: "Барбер", gender: "male" },
  { name: "Анна Звеновна", role: "Косметолог", gender: "female" },
  { name: "Лилит Манвеловна", role: "Мастер маникюра и педикюра", gender: "female" },
  { name: "Асмик Акобовна", role: "Мастер маникюра и педикюра", gender: "female" },
  { name: "Сильва Азатовна", role: "Мастер маникюра и педикюра", gender: "female" },
];

function RoleIcon({ role }: { role: string }) {
  const common = "h-3.5 w-3.5";

  if (role.includes("Барбер")) {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor">
        <path d="M11.2 12.8 5 19m7.6-7.6L19 5m-8.4 7.8L5 5m7.6 7.8L19 19" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="7" cy="7" r="2.3" strokeWidth="1.8" />
        <circle cx="17" cy="17" r="2.3" strokeWidth="1.8" />
      </svg>
    );
  }

  if (role.includes("маникюра")) {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor">
        <path d="M6 19c6-1 9-4 12-11M8 17l1.5-3m2 1 1.5-3m2 1 1.5-3" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (role.includes("Косметолог")) {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor">
        <path d="M12 3v18m-6-9h12M8 7h8M8 17h8" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor">
      <path d="M12 4c3 0 5 2.2 5 4.9 0 3.6-5 8.1-5 8.1s-5-4.5-5-8.1C7 6.2 9 4 12 4Z" strokeWidth="1.8" />
      <circle cx="12" cy="9" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function AvatarIcon({ gender }: { gender: "male" | "female" }) {
  if (gender === "male") {
    return (
      <svg viewBox="0 0 64 64" className="h-20 w-20 text-[#d9a176]" fill="currentColor" aria-hidden>
        <path d="M12 52c3-9 11-14 20-14s17 5 20 14c-4 2-12 4-20 4s-16-2-20-4Z" />
        <circle cx="32" cy="25" r="12" />
        <path d="M20 23c2-8 8-13 12-13s10 5 12 13c-6 1-9-1-12-4-2 3-6 5-12 4Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" className="h-20 w-20 text-[#d9a176]" fill="currentColor" aria-hidden>
      <path d="M12 52c3-9 11-14 20-14s17 5 20 14c-4 2-12 4-20 4s-16-2-20-4Z" />
      <circle cx="32" cy="25" r="11" />
      <path d="M16 30c0-12 7-20 16-20 7 0 12 4 14 11-1 4-3 8-7 10-2-2-4-4-5-8-2 5-6 8-12 9Z" />
    </svg>
  );
}

export default function LandingFiveTeam() {
  const [cardsPerView, setCardsPerView] = useState(3);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 640) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const maxStart = Math.max(0, masters.length - cardsPerView);
  const safeStartIndex = Math.min(startIndex, maxStart);
  const visibleMasters = masters.slice(safeStartIndex, safeStartIndex + cardsPerView);
  const canGoPrev = safeStartIndex > 0;
  const canGoNext = safeStartIndex + cardsPerView < masters.length;

  const goPrev = () => {
    if (!canGoPrev) return;
    setStartIndex((prev) => Math.max(0, Math.min(prev, maxStart) - cardsPerView));
  };

  const goNext = () => {
    if (!canGoNext) return;
    setStartIndex((prev) => Math.min(maxStart, Math.min(prev, maxStart) + cardsPerView));
  };

  return (
    <section id="specialists" className="relative scroll-mt-[120px] bg-[#f3f3f3] py-20">
      <div className="floral absolute -left-8 top-12 h-44 w-44 opacity-30" aria-hidden />
      <div className="floral absolute -right-8 bottom-12 h-44 w-44 rotate-180 opacity-30" aria-hidden />

      <div className="mx-auto w-full max-w-[1300px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="flex items-center gap-5">
            <span className="h-14 w-px bg-[#C8A27C]/70" />
            <h2 className="font-body text-5xl font-semibold uppercase tracking-wide text-[#1A1B1E]">
              СПЕЦИАЛИСТЫ
            </h2>
          </div>
          <p className="max-w-md text-sm leading-5 text-gray-500">
            Наша профессиональная команда мастеров помогает подчеркнуть вашу индивидуальность и
            стиль.
          </p>
        </motion.div>

        <div className="mb-8 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={goPrev}
            disabled={!canGoPrev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C8A27C] text-[#C8A27C] transition disabled:cursor-not-allowed disabled:opacity-40 hover:bg-[#C8A27C] hover:text-white"
            aria-label="Предыдущие мастера"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor">
              <path d="M15 5 8 12l7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={!canGoNext}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C8A27C] text-[#C8A27C] transition disabled:cursor-not-allowed disabled:opacity-40 hover:bg-[#C8A27C] hover:text-white"
            aria-label="Следующие мастера"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor">
              <path d="m9 5 7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className={`grid gap-x-8 gap-y-14 ${cardsPerView === 1 ? "grid-cols-1" : cardsPerView === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`${safeStartIndex}-${cardsPerView}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className={`contents`}
            >
              {visibleMasters.map((master) => (
                <article
                  key={master.name}
                  className="rounded-3xl border border-[#e6d2c2] bg-gradient-to-b from-white to-[#f9f5f1] p-6 text-center shadow-[0_10px_30px_-20px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="relative mx-auto flex h-48 w-48 items-center justify-center rounded-full bg-[#eed6c9]">
                    <span className="absolute inset-1 rounded-full border border-white/60" />
                    <AvatarIcon gender={master.gender} />
                  </div>
                  <h3 className="mt-6 font-heading text-4xl text-[#bb7e52]">{master.name}</h3>
                  <div className="mx-auto mt-2 h-px w-20 bg-[#e5cdb5]" />
                  <p className="mx-auto mt-3 max-w-[280px] text-xl leading-snug text-[#1A1B1E]">
                    {master.role}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#e3c6aa] px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-[#C8A27C]">
                    <RoleIcon role={master.role} />
                    Мастер Mary
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: Math.ceil(masters.length / cardsPerView) }).map((_, idx) => {
            const isActive = idx === Math.floor(safeStartIndex / cardsPerView);
            return (
              <span
                key={idx}
                className={`h-2.5 rounded-full transition-all ${
                  isActive ? "w-8 bg-[#C8A27C]" : "w-2.5 bg-[#dfcdbf]"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
