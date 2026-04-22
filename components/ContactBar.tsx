"use client";

import { motion } from "framer-motion";

export default function ContactBar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-20 -mb-16 px-4"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 rounded-2xl bg-primary px-6 py-8 text-dark shadow-luxury md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-dark/70">Follow</p>
          <p className="mt-2 text-sm">Instagram / Facebook / TikTok</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-dark/70">Phone</p>
          <a href="tel:+79057747771" className="mt-2 block text-sm">
            +7 (905) 774-77-71
          </a>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-dark/70">Email</p>
          <a href="mailto:hello@merisalon.com" className="mt-2 block text-sm">
            hello@merisalon.com
          </a>
        </div>
      </div>
    </motion.section>
  );
}
