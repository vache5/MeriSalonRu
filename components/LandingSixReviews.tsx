"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Лаура Хелм",
    role: "Стилист: Перри Джонас",
    text: "Салон Stylen радует меня стабильно высоким качеством услуг. Я возвращаюсь снова и снова благодаря профессионализму мастеров.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Полли Грей",
    role: "Стилист: Перри Джонас",
    text: "В салоне Stylen нам с мамой сделали невероятное преображение волос. Все было выполнено очень аккуратно и профессионально.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "София Алан",
    role: "Стилист: Перри Джонас",
    text: "Это великолепный опыт, особенно потому, что я обожаю стрижки Перри Джонас. Очень внимательная и доброжелательная команда.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
  },
];

export default function LandingSixReviews() {
  return (
    <section className="relative overflow-hidden bg-[#f3f3f3] py-20">
      <div className="floral absolute -right-8 top-16 h-44 w-44 opacity-35" aria-hidden />

      <div className="mx-auto w-full max-w-[1300px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="flex items-center gap-5">
            <span className="h-14 w-px bg-[#C8A27C]/70" />
            <h2 className="font-body text-5xl font-semibold uppercase tracking-wide text-[#1A1B1E]">
              Отзывы клиентов
            </h2>
          </div>
          <p className="max-w-md text-sm leading-5 text-gray-500">
            Узнайте, что наши гости говорят о салоне Stylen, качестве сервиса и профессионализме
            наших мастеров.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className="overflow-hidden rounded-[26px] border border-[#e1c9b3] bg-white shadow-[0_10px_24px_-18px_rgba(0,0,0,0.45)]"
            >
              <div className="flex items-center border-b border-[#edd8c6] px-4 py-3">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border border-[#e4c8ad]">
                  <Image src={review.image} alt={review.name} fill className="object-cover" />
                </div>
                <div className="ml-3">
                  <h3 className="font-body text-3xl font-semibold uppercase leading-none text-[#1A1B1E]">
                    {review.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-gray-500">{review.role}</p>
                </div>
              </div>
              <p className="px-5 py-4 text-base leading-7 text-gray-500">{review.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
