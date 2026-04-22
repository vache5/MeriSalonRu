"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-[#ddc8ae] py-14 md:py-20">
      {/* Light floral line-art — white for contrast on peach */}
      <div
        className="pointer-events-none absolute -left-8 top-8 h-56 w-56 opacity-[0.22]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='160' height='160' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1.2'%3E%3Cpath d='M12 86c18-8 26-21 33-37 9-20 23-34 47-42'/%3E%3Cpath d='M54 47c0 12 8 18 18 20'/%3E%3Cpath d='M40 61c-2 10-8 15-16 18'/%3E%3Ccircle cx='78' cy='22' r='7'/%3E%3Ccircle cx='59' cy='49' r='5'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-6 bottom-10 h-56 w-56 rotate-180 opacity-[0.22]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='160' height='160' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1.2'%3E%3Cpath d='M12 86c18-8 26-21 33-37 9-20 23-34 47-42'/%3E%3Cpath d='M54 47c0 12 8 18 18 20'/%3E%3Cpath d='M40 61c-2 10-8 15-16 18'/%3E%3Ccircle cx='78' cy='22' r='7'/%3E%3Ccircle cx='59' cy='49' r='5'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto grid w-full max-w-[1300px] items-center gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12"
      >
        <div className="rounded-3xl border border-white/30 bg-white/10 p-7 text-white shadow-[0_22px_45px_-30px_rgba(0,0,0,0.45)] backdrop-blur-[2px] md:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-white/85">Специальное предложение</p>
          <h3 className="mt-4 font-body text-[36px] font-semibold uppercase leading-[1.05] tracking-[0.03em] md:text-[46px]">
            Готовимся к новому сезону
          </h3>
          <p className="mt-4 max-w-xl font-body text-[26px] font-bold uppercase leading-[1.18] tracking-[0.04em] md:text-[34px]">
            На все виды стрижек
            <br />
            скидка 10%
          </p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/90 md:text-base">
            Все подробности акции вы можете узнать у наших администраторов. Количество мест
            ограничено.
          </p>
          <button
            type="button"
            className="mt-8 rounded-full bg-white px-8 py-3.5 font-body text-xs font-bold uppercase tracking-[0.16em] text-[#1A1B1E] shadow-md transition duration-300 hover:scale-[1.03] hover:bg-white/95 md:px-10"
          >
            Записаться
          </button>
        </div>

        <div className="relative flex min-h-[320px] items-center justify-center lg:min-h-[400px]">
          <div className="relative h-[280px] w-[280px] rotate-12 overflow-hidden rounded-3xl bg-black shadow-[0_28px_50px_-20px_rgba(0,0,0,0.55)] sm:h-[320px] sm:w-[320px] md:h-[360px] md:w-[360px]">
            <Image
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=85"
              alt="Beauty portrait"
              fill
              className="-rotate-12 scale-110 object-cover object-center"
              sizes="(max-width: 1024px) 90vw, 400px"
            />
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-[140%] w-[3px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white shadow-[0_0_12px_rgba(255,255,255,0.5)]"
              aria-hidden
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
