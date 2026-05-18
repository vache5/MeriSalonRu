"use client";

import { useEffect, useState } from "react";
import SalonPriceList from "@/components/SalonPriceList";
import { salonHashId, type SalonKey } from "@/constants/salonPriceList";

export type { SalonKey };

function selectSalonHash(salon: SalonKey) {
  const id = salonHashId(salon);
  const next = `${window.location.pathname}${window.location.search}#${id}`;
  window.history.replaceState(null, "", next);
}

const PRICE_HASHES = ["#prices-istra", "#prices-kryukovo", "#prices-vnukovo"] as const;

export default function FourthLanding() {
  const [activeSalon, setActiveSalon] = useState<SalonKey>("kryukovo");

  useEffect(() => {
    const syncFromHash = () => {
      const h = window.location.hash;
      if (h === "#prices-istra") setActiveSalon("istra");
      else if (h === "#prices-kryukovo" || h === "#prices-vnukovo") setActiveSalon("kryukovo");
    };
    syncFromHash();
    if (PRICE_HASHES.includes(window.location.hash as (typeof PRICE_HASHES)[number])) {
      queueMicrotask(() => {
        document.getElementById("prices")?.scrollIntoView({ block: "start" });
      });
    }
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const onPickSalon = (salon: SalonKey) => {
    setActiveSalon(salon);
    selectSalonHash(salon);
  };

  return (
    <section
      id="prices"
      aria-labelledby="prices-heading"
      className="relative overflow-hidden border-t border-[#e5dcd2] bg-gradient-to-b from-[#faf8f5] via-[#f3f3f3] to-[#ebe6df] py-16 sm:py-20 lg:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_0%,rgba(200,162,124,0.14),transparent_55%)]"
        aria-hidden
      />
      <div className="floral absolute -left-10 top-14 h-56 w-56 opacity-35" aria-hidden />
      <div className="floral absolute -right-10 bottom-0 h-48 w-48 rotate-180 opacity-30" aria-hidden />

      <div className="relative mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-8">
        <SalonPriceList activeSalon={activeSalon} onSalonChange={onPickSalon} />
      </div>
    </section>
  );
}
