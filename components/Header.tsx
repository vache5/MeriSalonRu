"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "ГЛАВНАЯ", href: "#home" },
  { label: "СПЕЦИАЛИСТЫ", href: "#specialists" },
  { label: "НАШИ УСЛУГИ", href: "#services" },
  { label: "О НАС", href: "#addresses" },
];
const MAX_CHANNEL_URL = "https://max.ru/join/UKql4nt2EjTfvB3tjLf_eQdc73JDijmCgTkAizkpSQM";

function MaxLogo({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-[8px] bg-gradient-to-br from-[#79a9ff] via-[#5f8fff] to-[#3b6df1] px-2 py-1 text-[9px] font-bold tracking-[0.14em] text-white shadow-[0_6px_14px_-8px_rgba(46,85,204,0.8)] ${className ?? ""}`}
      aria-hidden
    >
      MAX
    </span>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto hidden w-full max-w-[1300px] xl:block">
        <div className="grid h-[104px] grid-cols-[190px_minmax(0,1fr)_auto] items-center gap-4 px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex w-[190px] items-center"
            aria-label="Meri Salon"
          >
            <Image
              src="/images/mary-logo.png"
              alt="Mary Salon logo"
              width={220}
              height={62}
              className="h-auto w-[170px] object-contain"
              priority
            />
          </Link>

          <nav className="flex min-w-0 items-center justify-center gap-5 text-base tracking-[0.06em] text-gray-500">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex h-10 items-center rounded-full px-3 text-sm font-medium transition hover:bg-[#f8f2ec] hover:text-[#C8A27C]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="inline-flex shrink-0 items-center justify-end gap-2.5">
            <a
              href="tel:+79057747771"
              className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full border border-[#e4cfb8] bg-white px-3.5 text-sm font-semibold leading-none text-[#1A1B1E] shadow-[0_10px_20px_-18px_rgba(0,0,0,0.45)] transition hover:border-[#C8A27C]"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C8A27C] text-white shadow-sm">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor">
                  <path
                    d="M14.5 20c-6.1 0-10.5-4.4-10.5-10.5 0-.8.1-1.5.3-2.2A1.7 1.7 0 0 1 6.1 6h2a1.7 1.7 0 0 1 1.7 1.5l.2 1.7a1.7 1.7 0 0 1-.5 1.4l-1 1c.9 1.9 2.4 3.4 4.3 4.3l1-1a1.7 1.7 0 0 1 1.4-.5l1.7.2a1.7 1.7 0 0 1 1.5 1.7v2a1.7 1.7 0 0 1-1.3 1.8c-.7.2-1.4.3-2.2.3Z"
                    strokeWidth="1.4"
                  />
                </svg>
              </span>
              <span className="whitespace-nowrap text-sm font-semibold tracking-[0.02em]">
                +7 (905) 774-77-71
              </span>
            </a>
            <a
              href={MAX_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-full border border-[#8aa9ff]/45 bg-[#eef4ff] px-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#35519e] transition hover:border-[#6d95ff]/60 hover:bg-[#e5eeff]"
            >
              <MaxLogo />
              <span>MAX · JOIN</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-[104px] w-full max-w-[1300px] items-center justify-between px-6 xl:hidden">
        <Link
          href="/"
          className="inline-flex items-center"
          aria-label="Meri Salon"
        >
          <Image
            src="/images/mary-logo.png"
            alt="Mary Salon logo"
            width={140}
            height={42}
            className="h-auto w-[120px] object-contain"
            priority
          />
        </Link>

        <div className="flex items-center justify-end gap-4">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex flex-col gap-1.5"
          >
            <span className="h-0.5 w-6 bg-[#1A1B1E]" />
            <span className="h-0.5 w-6 bg-[#1A1B1E]" />
            <span className="h-0.5 w-6 bg-[#1A1B1E]" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed inset-y-0 right-0 w-72 bg-[#111214] p-8 text-white xl:hidden"
          >
            <div className="flex items-center justify-between">
              <p className="font-heading text-lg tracking-[0.2em]">МЕНЮ</p>
              <button onClick={() => setMenuOpen(false)} className="text-2xl leading-none">
                &times;
              </button>
            </div>
            <div className="mt-12 flex flex-col gap-6 text-sm tracking-widest text-gray-300">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-[#C8A27C]"
                >
                  {item.label}
                </a>
              ))}
              <a href="tel:+79057747771" className="pt-4 text-[#C8A27C]">
                +7 (905) 774-77-71
              </a>
              <a
                href={MAX_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#8fb0ff]"
              >
                <MaxLogo />
                <span className="text-xs uppercase tracking-[0.12em]">MAX · Перейти в канал</span>
              </a>
              <button className="mt-4 rounded-md bg-[#C8A27C] px-6 py-3 text-xs tracking-[0.15em] text-white">
                ЗАПИСАТЬСЯ
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
