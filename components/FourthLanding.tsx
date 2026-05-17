"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export type SalonKey = "kryukovo" | "istra";

const SALON_PRICE_PDF: Record<SalonKey, string> = {
  kryukovo: "/prices/kryukovo.pdf",
  istra: "/prices/istra.pdf",
};

const SALON_LABEL: Record<SalonKey, string> = {
  kryukovo: "Салон Крюково",
  istra: "Салон Истра",
};

const SALON_SHORT: Record<SalonKey, string> = {
  kryukovo: "Крюково",
  istra: "Истра",
};

function IconOpenTab({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M14 3h7v7M10 14 21 3M21 14v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconDownload({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path
        d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SalonPdfViewerSkeleton() {
  return (
    <div className="flex min-h-[min(14vh,140px)] flex-col items-center justify-center gap-2 rounded-xl border border-[#cfc6bc] bg-gradient-to-b from-[#2c2927] to-[#1f1d1c]">
      <div className="relative h-9 w-9">
        <div className="absolute inset-0 rounded-full border-2 border-white/10" />
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[#C8A27C] border-r-[#C8A27C]/35" />
      </div>
      <p className="text-xs text-[#c4bbb2]">Открываем просмотр…</p>
    </div>
  );
}

const SalonPdfViewer = dynamic(() => import("@/components/SalonPdfViewer"), {
  ssr: false,
  loading: SalonPdfViewerSkeleton,
});

const linkBase =
  "inline-flex min-h-10 flex-1 items-center justify-center gap-1.5 rounded-xl px-3 text-[11px] font-semibold uppercase tracking-[0.08em] transition active:scale-[0.98] sm:min-h-10 sm:flex-none sm:gap-2 sm:px-4 sm:text-xs sm:tracking-[0.1em]";

const SALON_ORDER: SalonKey[] = ["istra", "kryukovo"];

function selectSalonHash(salon: SalonKey) {
  const id = salon === "kryukovo" ? "prices-kryukovo" : "prices-istra";
  const next = `${window.location.pathname}${window.location.search}#${id}`;
  window.history.replaceState(null, "", next);
}

export default function FourthLanding() {
  const [activeSalon, setActiveSalon] = useState<SalonKey>("istra");

  useEffect(() => {
    const syncFromHash = () => {
      const h = window.location.hash;
      if (h === "#prices-kryukovo") setActiveSalon("kryukovo");
      else if (h === "#prices-istra") setActiveSalon("istra");
    };
    syncFromHash();
    if (window.location.hash === "#prices-istra" || window.location.hash === "#prices-kryukovo") {
      queueMicrotask(() => {
        document.getElementById("prices")?.scrollIntoView({ block: "start" });
      });
    }
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const pdfSrc = SALON_PRICE_PDF[activeSalon];

  const onPickSalon = (salon: SalonKey) => {
    setActiveSalon(salon);
    selectSalonHash(salon);
  };

  return (
    <section
      id="prices"
      aria-labelledby="prices-heading"
      className="relative overflow-hidden border-t border-[#e5dcd2] bg-gradient-to-b from-[#fcf9f5] via-[#f5f0e9] to-[#ebe4dc] py-8 sm:py-11 lg:py-14"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_-10%,rgba(200,162,124,0.16),transparent)]" aria-hidden />
      <div className="floral absolute -left-8 top-16 h-44 w-44 opacity-30 sm:left-0 sm:top-20" aria-hidden />
      <div className="floral absolute -right-6 top-32 h-40 w-40 opacity-25 sm:right-0" aria-hidden />

      <div className="relative mx-auto w-full max-w-[1300px] px-4 sm:px-6">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 sm:mb-5 lg:mb-6"
        >
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.26em] text-[#8f735c] sm:text-left">Meri Salon</p>
          <div className="mt-3 flex flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:gap-4 sm:text-left">
            <span className="hidden h-12 w-px bg-gradient-to-b from-transparent via-[#C8A27C] to-transparent lg:block" aria-hidden />
            <h2
              id="prices-heading"
              className="font-body text-2xl font-semibold uppercase leading-tight tracking-[0.05em] text-[#1A1B1E] sm:text-3xl lg:text-4xl"
            >
              Прайс-листы
            </h2>
          </div>
        </motion.header>

        <article className="mx-auto min-w-0 w-full max-w-[min(100%,38rem)] scroll-mt-28 md:max-w-[min(100%,42rem)] lg:max-w-[min(100%,46rem)] xl:max-w-[48rem]">
          <div className="mb-2 flex flex-col items-stretch gap-2.5 sm:mb-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
            <div
              className="flex w-full rounded-xl border border-[#dccfbf] bg-[#f4ebe3] p-0.5 shadow-inner sm:w-auto sm:min-w-0"
              role="tablist"
              aria-label="Выбор салона"
            >
              {SALON_ORDER.map((salon) => {
                const selected = activeSalon === salon;
                return (
                  <button
                    key={salon}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls="prices-pdf-panel"
                    id={salon === "kryukovo" ? "prices-kryukovo" : "prices-istra"}
                    tabIndex={0}
                    onClick={() => onPickSalon(salon)}
                    className={
                      selected
                        ? "flex-1 rounded-lg bg-white py-2 text-center font-body text-xs font-semibold uppercase tracking-[0.1em] text-[#1A1B1E] shadow-sm ring-1 ring-[#C8A27C]/30 sm:flex-none sm:min-w-[7.5rem] sm:px-5 sm:py-2.5 sm:text-sm sm:tracking-[0.12em]"
                        : "flex-1 rounded-lg py-2 text-center font-body text-xs font-semibold uppercase tracking-[0.1em] text-[#6b645c] transition hover:bg-white/55 hover:text-[#3a3632] sm:flex-none sm:min-w-[7.5rem] sm:px-5 sm:py-2.5 sm:text-sm sm:tracking-[0.12em]"
                    }
                  >
                    {SALON_SHORT[salon]}
                  </button>
                );
              })}
            </div>

            <div className="grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto sm:shrink-0 sm:justify-end sm:gap-2">
              <a
                href={pdfSrc}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkBase} border border-[#dccfbf] bg-white text-[#4a433c] shadow-sm hover:border-[#C8A27C]/60 hover:bg-[#fffdfb]`}
              >
                <IconOpenTab className="h-3.5 w-3.5 shrink-0 text-[#b8926a] sm:h-4 sm:w-4" />
                <span className="truncate">Вкладка</span>
              </a>
              <a
                href={pdfSrc}
                download
                className={`${linkBase} bg-gradient-to-b from-[#d4b896] to-[#a67c52] text-white shadow-md ring-1 ring-white/20 hover:brightness-[1.04]`}
              >
                <IconDownload className="h-3.5 w-3.5 shrink-0 opacity-95 sm:h-4 sm:w-4" />
                <span className="truncate">Скачать</span>
              </a>
            </div>
          </div>

          <motion.div
            key={activeSalon}
            id="prices-pdf-panel"
            role="tabpanel"
            aria-labelledby={activeSalon === "kryukovo" ? "prices-kryukovo" : "prices-istra"}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="min-w-0"
          >
            <div className="overflow-hidden rounded-xl border border-[#e3d5c8] bg-white shadow-[0_10px_36px_-22px_rgba(42,38,34,0.2)] sm:rounded-2xl">
              <div className="bg-gradient-to-b from-[#f7f2ec] to-[#ebe4dc] p-0.5 sm:p-1 md:p-1.5">
                <SalonPdfViewer
                  key={pdfSrc}
                  file={pdfSrc}
                  label={SALON_LABEL[activeSalon]}
                  showVenueInToolbar={false}
                  variant="embed"
                />
              </div>
            </div>
          </motion.div>
        </article>

        <p className="mx-auto mt-4 max-w-xl text-center text-[11px] leading-relaxed text-[#7d756c] sm:mt-5 sm:text-xs">
          Первый раз загрузка дольше. Листайте страницы кнопками или клавишами ← → — сначала кликните по просмотру.
        </p>
      </div>
    </section>
  );
}
