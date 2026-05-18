"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  getSalonPriceTabs,
  SALON_PRICE_PDF,
  SALONS,
  salonLabel,
  salonPriceHeading,
  type SalonKey,
  type SalonPriceTabId,
} from "@/constants/salonPriceList";
import { IconDownload } from "@/components/icons";
import { assetSrc } from "@/lib/asset";

type SalonPriceListProps = {
  activeSalon: SalonKey;
  onSalonChange: (salon: SalonKey) => void;
};

const filterLabelClass =
  "text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C8A27C] sm:text-xs";

const salonBtnClass = (selected: boolean) =>
  selected
    ? "rounded-full bg-gradient-to-b from-[#e8d4bc] via-[#d4b896] to-[#a67c52] px-4 py-1.5 text-xs font-bold text-white shadow-[0_4px_12px_-6px_rgba(166,124,82,0.5)] sm:px-5 sm:py-2 sm:text-sm"
    : "rounded-full px-4 py-1.5 text-xs font-semibold text-[#5c5650] transition hover:bg-[#faf7f3] hover:text-[#1A1B1E] sm:px-5 sm:py-2 sm:text-sm";

const tabBtnClass = (selected: boolean) =>
  selected
    ? "w-full rounded-full bg-gradient-to-r from-[#d4b896] to-[#c8a27c] px-3 py-2 text-xs font-bold text-white shadow-[0_4px_14px_-8px_rgba(166,124,82,0.45)] sm:w-auto sm:shrink-0 sm:px-4 sm:py-2 sm:text-sm"
    : "w-full rounded-full border border-[#e8e0d6] bg-white px-3 py-2 text-xs font-semibold text-[#5c5650] transition hover:border-[#d4b896]/50 hover:text-[#1A1B1E] sm:w-auto sm:shrink-0 sm:px-4 sm:py-2 sm:text-sm";

function formatPriceDisplay(price: string) {
  const cleaned = price.replace(/\s*₽\s*$/u, "").trim();
  return cleaned.includes("от") ? cleaned : `${cleaned} ₽`;
}

function PriceRow({ service, price, index }: { service: string; price: string; index: number }) {
  const displayPrice = formatPriceDisplay(price);

  return (
    <li
      className={`group flex items-end gap-3 rounded-xl px-3 py-3 transition-all sm:gap-4 sm:px-4 sm:py-3.5 ${
        index % 2 === 0 ? "bg-[#faf7f3]/90" : "bg-white"
      } hover:bg-[#f5efe8] hover:shadow-[0_4px_16px_-10px_rgba(200,162,124,0.35)]`}
    >
      <span className="min-w-0 flex-1 text-[15px] font-semibold leading-snug text-[#1A1B1E] sm:text-base">
        {service}
      </span>
      <span
        className="mb-2 min-w-[1rem] flex-1 border-b-2 border-dotted border-[#d4b896]/70"
        aria-hidden
      />
      <span className="shrink-0 rounded-lg bg-gradient-to-br from-[#f5efe8] to-[#ebe0d4] px-2.5 py-1 font-heading text-lg font-bold tabular-nums leading-none text-[#8f5e2c] ring-1 ring-[#d4b896]/50 sm:px-3 sm:py-1.5 sm:text-xl">
        {displayPrice}
      </span>
    </li>
  );
}

export default function SalonPriceList({ activeSalon, onSalonChange }: SalonPriceListProps) {
  const [activeTab, setActiveTab] = useState<SalonPriceTabId>("stylists");
  const tabs = useMemo(() => getSalonPriceTabs(activeSalon), [activeSalon]);
  const activeTabId = tabs.some((t) => t.id === activeTab)
    ? activeTab
    : (tabs[0]?.id ?? "stylists");
  const tab = tabs.find((t) => t.id === activeTabId) ?? tabs[0];
  const pdf = SALON_PRICE_PDF[activeSalon];

  return (
    <div className="min-w-0 w-full max-w-full overflow-x-hidden">
      <motion.header
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55 }}
        className="mb-8 flex flex-col gap-6 sm:mb-10 lg:flex-row lg:items-end lg:justify-between"
      >
        <motion.div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#C8A27C] sm:text-[13px]">
            Mary Salon
          </p>
          <motion.div className="mt-4 flex min-w-0 items-stretch gap-4 sm:gap-5">
            <span
              className="w-1 shrink-0 rounded-full bg-gradient-to-b from-[#C8A27C] via-[#d4b896] to-transparent"
              aria-hidden
            />
            <motion.div className="min-w-0">
              <h2 id="prices-heading" className="section-heading">
                Прайс-лист
              </h2>
              <span
                className="mt-4 block h-1 w-16 rounded-full bg-gradient-to-r from-[#C8A27C] via-[#d4b896] to-[#C8A27C]/20 sm:w-24"
                aria-hidden
              />
            </motion.div>
          </motion.div>
        </motion.div>
        <p className="max-w-lg text-base font-medium leading-relaxed text-[#4a433c] sm:text-lg sm:leading-8">
          Актуальные цены на услуги. Выберите салон и категорию. Полный прайс-лист можно скачать в PDF.
        </p>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-24px" }}
        transition={{ duration: 0.45, delay: 0.06 }}
        className="mb-6 rounded-2xl border-2 border-[#e8e0d6] bg-white p-4 shadow-[0_12px_32px_-22px_rgba(26,22,18,0.18)] sm:rounded-[24px] sm:p-5"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-4">
          <section className="order-1 sm:order-2 sm:shrink-0" aria-label="Выбор салона">
              <p className={`${filterLabelClass} sm:sr-only`}>Салон</p>
              <div
                className="mt-2 flex w-full justify-center gap-1 rounded-full border border-[#e8e0d6] bg-[#faf7f3] p-0.5 sm:mt-0 sm:w-auto sm:justify-end"
                role="group"
              >
                {SALONS.map(({ key, label }) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => onSalonChange(key)}
                    aria-pressed={activeSalon === key}
                    className={`${salonBtnClass(activeSalon === key)} flex-1 sm:flex-none`}
                  >
                    {label}
                  </button>
                ))}
              </div>
          </section>

          <section className="order-2 min-w-0 flex-1 sm:order-1" aria-labelledby="price-filter-category">
              <p id="price-filter-category" className={filterLabelClass}>
                Категория
              </p>
              <div
                className="mt-2.5 grid grid-cols-2 gap-2 sm:mt-3 sm:flex sm:flex-wrap sm:gap-2"
                role="tablist"
                aria-label="Категории услуг"
              >
                {tabs.map((t) => {
                  const selected = activeTabId === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      aria-label={t.label}
                      onClick={() => setActiveTab(t.id)}
                      className={tabBtnClass(selected)}
                    >
                      <span className="sm:hidden">{t.shortLabel}</span>
                      <span className="hidden sm:inline">{t.label}</span>
                    </button>
                  );
                })}
              </div>
          </section>
        </div>
      </motion.div>

      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-24px" }}
        transition={{ duration: 0.5, delay: 0.12 }}
        className="w-full max-w-full overflow-hidden rounded-[28px] border-2 border-[#e8e0d6] bg-white shadow-[0_24px_60px_-24px_rgba(26,22,18,0.28)] ring-1 ring-[#C8A27C]/10"
        role="tabpanel"
      >
        <div className="h-1.5 bg-gradient-to-r from-[#C8A27C] via-[#d4b896] to-[#a67c52]" aria-hidden />

        <div className="flex flex-col gap-3 border-b border-[#ebe4dc] bg-gradient-to-r from-[#faf7f3] to-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-5">
          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8f5e2c] sm:text-[13px]">
              {salonPriceHeading(activeSalon)} · {tab.shortLabel}
            </p>
            <p className="mt-1 font-heading text-lg font-semibold leading-snug text-[#1A1B1E] sm:text-xl">
              {tab.label}
            </p>
          </div>
          <span className="w-fit shrink-0 rounded-full bg-[#C8A27C]/20 px-4 py-2 text-sm font-bold tabular-nums text-[#7a4f1f] ring-1 ring-[#C8A27C]/30">
            {tab.items.length} услуг
          </span>
        </div>

        <motion.div className="flex h-[min(460px,62vh)] min-h-[380px] w-full min-w-0 flex-col sm:h-[520px] sm:min-h-0 sm:flex-row lg:h-[580px]">
          <div className="relative min-h-0 min-w-0 w-full flex-1 bg-[#fffcfa]">
            <motion.div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-8 bg-gradient-to-b from-[#fffcfa] to-transparent" aria-hidden />
            <motion.div className="h-full overflow-y-auto overscroll-contain px-3 py-4 sm:px-5 sm:py-5 lg:px-6 lg:py-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeSalon}-${activeTabId}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.28 }}
                  className="space-y-6"
                >
                  {tab.subsections.map((subsection) => {
                    let rowIndex = 0;
                    return (
                      <section key={subsection.title}>
                        <h3 className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#C8A27C] sm:text-xs">
                          {subsection.title}
                        </h3>
                        <ul className="space-y-2">
                          {subsection.items.map((item) => {
                            const index = rowIndex++;
                            return (
                              <PriceRow
                                key={`${subsection.title}-${item.service}-${item.price}`}
                                service={item.service}
                                price={item.price}
                                index={index}
                              />
                            );
                          })}
                        </ul>
                      </section>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
              {activeTabId === "cosmetology" ? (
                <p className="mt-4 rounded-xl border-2 border-[#d4b896]/40 bg-[#faf7f3] px-4 py-3 text-sm font-medium leading-relaxed text-[#8f735c]">
                  Чистки — требуется консультация мастера.
                </p>
              ) : null}
            </motion.div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-10 bg-gradient-to-t from-[#fffcfa] to-transparent" aria-hidden />
          </div>

          <div className="relative hidden min-h-0 w-[min(42%,320px)] shrink-0 self-stretch border-l border-[#ebe4dc] bg-[#f5efe8] p-4 sm:block lg:p-5">
            <div className="relative h-full min-h-[240px] overflow-hidden rounded-[22px] shadow-[0_16px_40px_-20px_rgba(26,22,18,0.35)] ring-2 ring-[#e8e0d6]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab.image}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={assetSrc(tab.image)}
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 280px, 320px"
                    priority={activeTabId === "stylists"}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </motion.article>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-24px" }}
        transition={{ duration: 0.45, delay: 0.15 }}
        className="mt-6 flex flex-col items-stretch gap-3 rounded-[22px] border-2 border-[#e8e0d6] bg-white p-4 shadow-[0_12px_32px_-20px_rgba(26,22,18,0.18)] sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:p-5"
      >
        <motion.div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C8A27C]">PDF прайс-лист</p>
          <p className="mt-1 text-sm font-medium text-[#5c5650] sm:text-base">
            Скачайте полный прайс салона{" "}
            <span className="font-semibold text-[#1A1B1E]">{salonLabel(activeSalon)}</span>
          </p>
        </motion.div>
        <a
          href={pdf.href}
          download={pdf.downloadName}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#e8d4bc] via-[#d4b896] to-[#a67c52] px-8 text-sm font-bold uppercase tracking-[0.1em] text-white shadow-[0_12px_32px_-10px_rgba(166,124,82,0.55)] transition hover:brightness-[1.05] active:scale-[0.98]"
        >
          <IconDownload className="h-5 w-5" />
          Скачать PDF
        </a>
      </motion.div>
    </div>
  );
}
