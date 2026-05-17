"use client";

import { motion } from "framer-motion";

const swirlSvg =
  "url(\"data:image/svg+xml,%3Csvg width='160' height='160' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C8A27C' stroke-width='1.15'%3E%3Cpath d='M12 86c18-8 26-21 33-37 9-20 23-34 47-42'/%3E%3Cpath d='M54 47c0 12 8 18 18 20'/%3E%3Cpath d='M40 61c-2 10-8 15-16 18'/%3E%3Ccircle cx='78' cy='22' r='7'/%3E%3Ccircle cx='59' cy='49' r='5'/%3E%3C/g%3E%3C/svg%3E\")";

const MAP_QUERY =
  "https://yandex.ru/maps/?text=" +
  encodeURIComponent("ул. Главного Конструктора В.И. Адасько, 9, Истра");

function IconMapPin({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M12 21s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10Z" strokeLinejoin="round" />
      <circle cx="12" cy="11" r="2.25" />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path
        d="M14.5 20c-6.1 0-10.5-4.4-10.5-10.5 0-.8.1-1.5.3-2.2A1.7 1.7 0 0 1 6.1 6h2a1.7 1.7 0 0 1 1.7 1.5l.2 1.7a1.7 1.7 0 0 1-.5 1.4l-1 1c.9 1.9 2.4 3.4 4.3 4.3l1-1a1.7 1.7 0 0 1 1.4-.5l1.7.2a1.7 1.7 0 0 1 1.5 1.7v2a1.7 1.7 0 0 1-1.3 1.8c-.7.2-1.4.3-2.2.3Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Banner() {
  return (
    <section
      id="mary-elos"
      className="relative overflow-hidden bg-gradient-to-br from-[#f2e4d8] via-[#dcc6ae] to-[#c9ae8f] py-10 sm:py-14 md:py-16"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_88%_60%_at_50%_-10%,rgba(255,252,248,0.72),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_42%_at_100%_100%,rgba(200,162,124,0.28),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_36%_at_0%_90%,rgba(255,255,255,0.18),transparent_48%)]"
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#8f6a4a]/22 to-transparent" aria-hidden />

      <div
        className="pointer-events-none absolute -left-10 top-8 h-56 w-56 opacity-[0.16] sm:left-0 sm:top-10"
        style={{
          backgroundImage: swirlSvg,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-8 bottom-10 h-56 w-56 rotate-180 opacity-[0.16] sm:right-0 sm:bottom-12"
        style={{
          backgroundImage: swirlSvg,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto w-full max-w-[1100px] px-4 sm:px-6 lg:px-8"
      >
        <div className="relative overflow-hidden rounded-[28px] border border-white/55 bg-white/40 p-6 shadow-[0_28px_60px_-28px_rgba(42,32,22,0.38)] backdrop-blur-md sm:p-8 md:p-10">
          <div
            className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/55 via-transparent to-[#C8A27C]/10"
            aria-hidden
          />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 lg:items-start">
            {/* Brand column */}
            <div className="flex flex-col items-center text-center lg:items-start lg:border-r lg:border-[#e8d8cc]/90 lg:pr-10 lg:text-left">
              <span className="inline-flex rounded-full border border-[#C8A27C]/35 bg-[#fffdfb]/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7a6554] shadow-sm sm:text-[11px]">
                Салон красоты
              </span>
              <p className="mt-4 font-heading text-[clamp(2.5rem,6vw,3.5rem)] font-semibold leading-none tracking-[0.12em] text-[#141518]">
                MARY
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.28em] text-[#5c5248] sm:text-sm">Istra</p>
              <p className="mt-5 max-w-[20rem] text-sm leading-relaxed text-[#5c534a] lg:max-w-none">
                ЭЛОС-омоложение в Истре — щадящий anti-age уход для кожи.
              </p>
            </div>

            {/* Content column */}
            <div className="flex flex-col text-center lg:text-left">
              <div className="inline-flex flex-col items-center gap-1 lg:items-start">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a67c52] sm:text-xs">ELOS-омоложение</span>
                <h2 className="font-body text-xl font-semibold text-[#1A1B1E] sm:text-2xl">ЭЛОС-омоложение</h2>
              </div>

              <p className="mx-auto mt-4 max-w-prose text-pretty text-sm leading-[1.65] text-[#3d3834] sm:text-[15px] sm:leading-[1.68] lg:mx-0 lg:max-w-none">
                ЭЛОС-омоложение — один из самых эффективных и щадящих видов anti-age воздействий на ткани дермы. Наиболее
                эффективно в 35–40 лет при появлении первых признаков старения. В более молодом возрасте позволяет устранять
                косметические недостатки: пигментные пятна, постакне и морщины, птоз.
              </p>

              <div className="mx-auto mt-6 grid w-full max-w-md grid-cols-1 gap-3 sm:max-w-none sm:grid-cols-2 lg:mx-0">
                <div className="rounded-2xl border border-[#ead8c8] bg-gradient-to-b from-[#fffdfb] to-[#faf3eb] p-4 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8f735c]">1-я процедура</p>
                  <p className="mt-1 font-body text-2xl font-semibold tabular-nums text-[#1A1B1E] sm:text-3xl">
                    4000&nbsp;<span className="text-lg font-semibold sm:text-xl">₽</span>
                  </p>
                  <p className="mt-2 inline-flex rounded-full bg-[#C8A27C]/15 px-2.5 py-1 text-[11px] font-medium text-[#7a5538]">
                    −40% на первое посещение
                  </p>
                </div>
                <div className="rounded-2xl border border-[#ead8c8] bg-gradient-to-b from-[#fffdfb] to-[#faf3eb] p-4 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8f735c]">Абонемент ×5</p>
                  <p className="mt-1 font-body text-2xl font-semibold tabular-nums text-[#1A1B1E] sm:text-3xl">
                    17&nbsp;000&nbsp;<span className="text-lg font-semibold sm:text-xl">₽</span>
                  </p>
                  <p className="mt-2 text-[12px] leading-snug text-[#5c5248]">С учётом скидки 15% на пакет из 5 процедур.</p>
                </div>
              </div>

              <div className="mx-auto mt-8 flex w-full max-w-lg flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:mx-0 lg:max-w-none lg:justify-start">
                <a
                  href="tel:+79057747771"
                  aria-label="Позвонить: +7 (905) 774-77-71"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#d4b896] to-[#a67c52] px-5 py-3 text-sm font-semibold tracking-wide text-white shadow-[0_10px_24px_-12px_rgba(120,80,40,0.55)] transition hover:brightness-[1.05] active:scale-[0.98] sm:px-6"
                >
                  <IconPhone className="h-4 w-4 shrink-0 opacity-95" />
                  +7 (905) 774-77-71
                </a>
                <a
                  href={MAP_QUERY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d4c4b4] bg-white/70 px-5 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#4a433c] transition hover:border-[#C8A27C]/55 hover:bg-white"
                >
                  <IconMapPin className="h-4 w-4 text-[#C8A27C]" />
                  Как добраться
                </a>
              </div>

              <div className="mx-auto mt-6 flex max-w-lg flex-col gap-2 border-t border-[#e8dcd2]/90 pt-6 text-left text-sm text-[#4a433c] sm:text-[15px] lg:mx-0 lg:max-w-none">
                <a
                  href={MAP_QUERY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 text-pretty transition hover:text-[#1A1B1E]"
                >
                  <IconMapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#C8A27C]" />
                  <span>ул. Главного Конструктора В.И. Адасько, 9 (этаж 2, офис 13)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
