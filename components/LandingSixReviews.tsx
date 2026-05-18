"use client";

import { motion } from "framer-motion";
import { IconStar, IconUsers } from "@/components/icons";

const reviews = [
  {
    name: "Иван Достойнов",
    role: "Гость салона",
    text: "Хожу в данный салон уже более 3-х лет, доволен! Парикмахеры опытные, с огромным стажем. Большой каталог на выбор причесок, а также шикарно делают бороду. Помимо этого есть и другие мастера — маникюр и не только для милых дам. В общем, салон огонь: сходите раз, и в дальнейшем не захочется идти в другие салоны.",
  },
  {
    name: "Тамара Арутюнян",
    role: "Гостья салона",
    text: "Отличный маникюр (мастер Аруш)! Очень приятная девушка, делает аккуратно, никогда не режет. Гель-лак Luxio держится превосходно, до четырех недель. CMD тоже есть. У кутикулы всегда тонко, и кончики закрыты. Парикмахерская тоже отличная: делала стрижку на длинные волосы — все очень быстро, ровно и без «минус 10 см» вместо «подравнять».",
  },
  {
    name: "Алина Амрахова",
    role: "Гостья салона",
    text: "Барбершоп «Мэри» — лучший в районе, советую! Особая благодарность Оганесу: чудо-мастер, знает, что делает. Всегда круто, модно, быстро и аккуратно. Муж ходит только к нему, хоть живем не в Истре. Спасибо, низкий поклон!",
  },
];

export default function LandingSixReviews() {
  return (
    <section className="relative overflow-hidden bg-[#f3f3f3] py-16 sm:py-20">
      <div className="floral absolute -right-8 top-16 h-44 w-44 opacity-35" aria-hidden />

      <div className="mx-auto w-full max-w-[1300px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-col gap-3 sm:mb-10 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="flex items-center gap-5">
            <span className="h-14 w-px bg-[#C8A27C]/70" />
            <div>
              <div className="mb-2 flex gap-0.5 text-[#C8A27C]" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <h2 className="section-heading">
                Отзывы клиентов
              </h2>
            </div>
          </div>
          <p className="max-w-md text-base leading-6 text-gray-500">
            Узнайте, что наши гости говорят о салоне Mary, качестве сервиса и профессионализме
            наших мастеров.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:auto-rows-fr">
          {reviews.map((review, index) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className="flex h-full flex-col overflow-hidden rounded-[26px] border border-[#e6d4c4] bg-gradient-to-b from-white to-[#fcfaf8] shadow-[0_14px_34px_-22px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_38px_-20px_rgba(0,0,0,0.3)]"
            >
              <div className="border-b border-[#edd8c6] bg-[#fffdfa] px-5 py-4">
                <div className="flex items-center gap-3.5">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#dcc3ad] bg-gradient-to-b from-[#fbf4ed] to-[#f1e4d6] text-[#9f7754] shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
                    <IconUsers className="h-5 w-5" />
                  </span>
                  <h3 className="font-body text-[2rem] font-semibold uppercase leading-none text-[#1A1B1E] sm:text-[2.15rem]">
                    {review.name}
                  </h3>
                </div>
                <div className="mt-1">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-gray-500">{review.role}</p>
                </div>
              </div>
              <p className="flex-1 px-5 py-4 text-lg leading-8 text-[#5c5c5c]">{review.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
