"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";
import { TEAM_CARDS_BREAKPOINTS, useBreakpointCount } from "@/lib/useBreakpointCount";

type TeamMember = {
  name: string;
  role: string;
};

const masters: TeamMember[] = [
  { name: "Нуне Володяевна", role: "Топ-стилист" },
  { name: "Армен Варданович", role: "Топ-барбер" },
  { name: "Оганес Варданович", role: "Барбер" },
  { name: "Генри Рафикович", role: "Барбер" },
  { name: "Алла Оганнисян", role: "Косметолог" },
  { name: "Анна Звеновна", role: "Косметолог" },
  { name: "Лилит Манвеловна", role: "Мастер маникюра и педикюра" },
  { name: "Асмик Акобовна", role: "Мастер маникюра и педикюра" },
  { name: "Сильва Азатовна", role: "Мастер маникюра и педикюра" },
];

function memberInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0] ?? ""}${parts[1][0] ?? ""}`.toUpperCase();
}

export default function LandingFiveTeam() {
  const cardsPerView = useBreakpointCount(TEAM_CARDS_BREAKPOINTS);
  const [startIndex, setStartIndex] = useState(0);

  const maxStart = Math.max(0, masters.length - cardsPerView);
  const safeStart = Math.min(startIndex, maxStart);
  const pageCount = Math.ceil(masters.length / cardsPerView);
  const activePage = Math.floor(safeStart / cardsPerView);

  const visibleMasters = masters.slice(safeStart, safeStart + cardsPerView);
  const canGoPrev = safeStart > 0;
  const canGoNext = safeStart + cardsPerView < masters.length;

  const goPrev = useCallback(() => {
    setStartIndex((i) => Math.max(0, Math.min(i, maxStart) - cardsPerView));
  }, [cardsPerView, maxStart]);

  const goNext = useCallback(() => {
    setStartIndex((i) => Math.min(maxStart, Math.min(i, maxStart) + cardsPerView));
  }, [cardsPerView, maxStart]);

  const goToPage = (page: number) => {
    setStartIndex(Math.min(page * cardsPerView, maxStart));
  };

  return (
    <section id="specialists" className="relative scroll-mt-[120px] bg-[#f3f3f3] py-14 sm:py-16 lg:py-20">
      <motion.div className="floral absolute -left-8 top-12 h-44 w-44 opacity-30" aria-hidden />
      <motion.div className="floral absolute -right-8 bottom-12 h-44 w-44 rotate-180 opacity-30" aria-hidden />

      <motion.div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
          className="mb-8 flex flex-col gap-4 sm:mb-10 lg:flex-row lg:items-end lg:justify-between"
        >
          <motion.div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8A27C] sm:text-xs">
              Mary Salon
            </p>
            <motion.div className="mt-3 flex min-w-0 items-stretch gap-3 sm:gap-5">
              <span
                className="w-0.5 shrink-0 rounded-full bg-gradient-to-b from-[#C8A27C] via-[#C8A27C]/50 to-transparent"
                aria-hidden
              />
              <h2 id="specialists-heading" className="section-heading">
                Специалисты
              </h2>
            </motion.div>
          </motion.div>
          <p className="max-w-md text-sm leading-relaxed text-[#5c5650] sm:text-[15px] sm:leading-7">
            Профессиональная команда мастеров — стилисты, барберы, косметологи и nail-специалисты.
          </p>
        </motion.header>

        <motion.div className="relative">
          <button
            type="button"
            onClick={goPrev}
            disabled={!canGoPrev}
            className="absolute -left-1 top-[38%] z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#e8e0d6] bg-white text-[#8f735c] shadow-[0_8px_24px_-8px_rgba(26,22,18,0.2)] transition hover:border-[#C8A27C] hover:text-[#C8A27C] disabled:pointer-events-none disabled:opacity-35 sm:left-0 lg:-left-4"
            aria-label="Предыдущие мастера"
          >
            <span className="text-lg leading-none" aria-hidden>
              ‹
            </span>
          </button>

          <button
            type="button"
            onClick={goNext}
            disabled={!canGoNext}
            className="absolute -right-1 top-[38%] z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#e8e0d6] bg-white text-[#8f735c] shadow-[0_8px_24px_-8px_rgba(26,22,18,0.2)] transition hover:border-[#C8A27C] hover:text-[#C8A27C] disabled:pointer-events-none disabled:opacity-35 sm:right-0 lg:-right-4"
            aria-label="Следующие мастера"
          >
            <span className="text-lg leading-none" aria-hidden>
              ›
            </span>
          </button>

          <motion.div className="overflow-hidden px-12 sm:px-14 lg:px-10">
            <AnimatePresence mode="wait">
              <motion.ul
                key={`${safeStart}-${cardsPerView}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.32 }}
                className={`grid list-none gap-4 p-0 sm:gap-5 ${
                  cardsPerView === 1 ? "grid-cols-1" : cardsPerView === 2 ? "grid-cols-2" : "grid-cols-3"
                }`}
              >
                {visibleMasters.map((master, index) => (
                  <li key={master.name}>
                    <motion.article
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-20px" }}
                      transition={{ duration: 0.4, delay: index * 0.06 }}
                      className="group flex h-full flex-col items-center rounded-[22px] border border-[#e8e0d6] bg-gradient-to-b from-white to-[#faf7f3] px-5 pb-5 pt-6 text-center shadow-[0_12px_32px_-22px_rgba(26,22,18,0.22)] transition duration-300 hover:-translate-y-1 hover:border-[#d4b896]/60 hover:shadow-[0_20px_40px_-18px_rgba(166,124,82,0.28)]"
                    >
                      <motion.div className="relative">
                        <span
                          className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#e8d4bc] via-[#d4b896] to-[#c8a27c] opacity-80"
                          aria-hidden
                        />
                        <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-[#f0e4d8] ring-2 ring-white sm:h-32 sm:w-32">
                          <span className="font-heading text-2xl font-semibold text-[#a67c52] sm:text-3xl">
                            {memberInitials(master.name)}
                          </span>
                        </div>
                      </motion.div>

                      <h3 className="mt-5 font-heading text-xl font-semibold leading-tight text-[#8f5e2c] sm:text-2xl">
                        {master.name}
                      </h3>

                      <p className="mt-2 inline-flex rounded-full bg-[#f5efe8] px-3 py-1 text-xs font-medium text-[#5c5650] sm:text-[13px]">
                        {master.role}
                      </p>
                    </motion.article>
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </motion.div>

          <motion.div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: pageCount }, (_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => goToPage(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === activePage ? "w-8 bg-[#C8A27C]" : "w-2 bg-[#dccfbf] hover:bg-[#C8A27C]/60"
                }`}
                aria-label={`Страница ${idx + 1}`}
                aria-current={idx === activePage ? "true" : undefined}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
