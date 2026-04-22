"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export type SalonKey = "kryukovo" | "istra";

function formatNumber(value: number) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function getSalonPrice(price: string, salon: SalonKey) {
  if (!price.trim() || salon === "kryukovo") {
    return price;
  }

  const hasFrom = price.trim().startsWith("от");
  const digitsOnly = price.replace(/[^\d]/g, "");
  const parsed = Number.parseInt(digitsOnly, 10);

  if (Number.isNaN(parsed)) {
    return price;
  }

  // Istra price list keeps the same services with a different rate.
  const updated = Math.round((parsed * 1.12) / 10) * 10;
  return `${hasFrom ? "от " : ""}${formatNumber(updated)}`;
}

const categories = [
  {
    key: "stylists",
    label: "Услуги стилистов",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1100&q=80",
    items: [
      { name: "Стрижка женская с укладкой", price: "от 2 000" },
      { name: "Укладка на брашинг", price: "от 1 800" },
      { name: "Укладка на стайлеры", price: "от 1 500" },
      { name: "Вечерняя укладка", price: "от 2 300" },
      { name: "Плетение кос", price: "от 800" },
      { name: "Мужская стрижка", price: "1 700" },
      { name: "Стрижка под машинку", price: "900" },
      { name: "Моделирование бороды / усов", price: "1 300" },
      { name: "Окрашивание корней", price: "от 3 000" },
      { name: "Шатуш", price: "от 4 000" },
      { name: "AirTouch", price: "от 7 000" },
    ],
  },
  {
    key: "nails",
    label: "Услуги ногтевого сервиса",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1100&q=80",
    items: [
      { name: "Маникюр", price: "1 500" },
      { name: "Маникюр + гель-лак", price: "от 3 200" },
      { name: "Педикюр", price: "2 800" },
      { name: "Педикюр + гель-лак", price: "3 000" },
      { name: "Покрытие Luxio / ONIQ", price: "1 000" },
      { name: "Покрытие лаком", price: "850" },
      { name: "Наращивание ногтей", price: "4 800" },
      { name: "Уход CHRISTINA FITZGERALD", price: "700" },
      { name: "Парафинотерапия", price: "1000" },
    ],
  },
  {
    key: "massage",
    label: "Услуги барбершопа",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1100&q=80",
    items: [
      { name: "Экспресс массаж лица + маска", price: "от 800" },
      { name: "Хиромассаж (45 минут)", price: "2 000" },
      { name: "Скульптурно-буккальный (45 минут)", price: "2 000" },
      { name: "Скульптурный (45 минут)", price: "2 000" },
      { name: "Остеопатический фейсфитнес", price: "4 000" },
    ],
  },
  {
    key: "makeup",
    label: "Услуги косметологии",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1100&q=80",
    items: [
      { name: "Экспресс-макияж", price: "" },
      { name: "Макияж BY TERRY дневной / NUDE", price: "" },
      { name: "Макияж BY TERRY вечерний / для съемки", price: "" },
      { name: "Дизайн формы бровей", price: "от 500" },
      { name: "Окрашивание бровей / ресниц", price: "от 599" },
      { name: "Наращивание ресниц 1D", price: "2 999" },
      { name: "Снятие наращенных ресниц", price: "1 000" },
      { name: "Коллагенирование / Ламинирование", price: "от 2 499" },
      { name: "Долговременная укладка бровей", price: "2 500" },
    ],
  },
  {
    key: "cosmetology",
    label: "Услуги косметологов",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1100&q=80",
    items: [
      { name: "Атравматическая чистка лица", price: "3 990" },
      { name: "Поверхностный пилинг ABR-forte", price: "3 699" },
      { name: "Пилинг bio repair", price: "3 500" },
      { name: "Подмышки", price: "700" },
      { name: "Ноги полностью", price: "2 300" },
      { name: "Руки полностью", price: "1 600" },
      { name: "Бикини классика", price: "1 300" },
    ],
  },
];

type FourthLandingProps = {
  salon: SalonKey;
  onSalonChange?: (salon: SalonKey) => void;
};

export default function FourthLanding({ salon, onSalonChange }: FourthLandingProps) {
  const [active, setActive] = useState(categories[0].key);
  const activeCategory = categories.find((category) => category.key === active) ?? categories[0];

  return (
    <section className="relative overflow-hidden bg-[#f3f3f3] py-20">
      <div className="floral absolute -left-10 top-10 h-56 w-56 opacity-35" aria-hidden />
      <div className="floral absolute -right-10 top-28 h-48 w-48 opacity-35" aria-hidden />

      <div className="mx-auto w-full max-w-[1300px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="flex items-center gap-5">
            <span className="h-14 w-px bg-[#C8A27C]/70" />
            <h2 className="font-body text-5xl font-semibold uppercase tracking-wide text-[#1A1B1E]">
              Прайс-лист
            </h2>
          </div>
          <p className="max-w-md text-sm leading-5 text-gray-500">
            Выберите направление услуг и ознакомьтесь с актуальными ценами для вашего салона.
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="text-xs uppercase tracking-[0.12em] text-gray-500">Версия салона:</span>
            <button
              type="button"
              onClick={() => onSalonChange?.("kryukovo")}
              className={`rounded-full px-4 py-1 text-xs uppercase tracking-[0.12em] transition ${
                salon === "kryukovo"
                  ? "bg-[#C8A27C] text-white"
                  : "border border-[#dbc4ae] text-[#b98661] hover:bg-[#f4e8dc]"
              }`}
            >
              Крюково
            </button>
            <button
              type="button"
              onClick={() => onSalonChange?.("istra")}
              className={`rounded-full px-4 py-1 text-xs uppercase tracking-[0.12em] transition ${
                salon === "istra"
                  ? "bg-[#C8A27C] text-white"
                  : "border border-[#dbc4ae] text-[#b98661] hover:bg-[#f4e8dc]"
              }`}
            >
              Истра
            </button>
          </div>

          <div className="mb-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="mx-auto inline-flex min-w-max items-center justify-center gap-2 rounded-full border border-[#e7d6c7] bg-white/70 p-2 shadow-[0_8px_22px_-18px_rgba(0,0,0,0.45)]">
            {categories.map((category) => (
              <button
                key={category.key}
                type="button"
                onClick={() => setActive(category.key)}
                className={`whitespace-nowrap rounded-full px-3 py-2 text-xs tracking-[0.04em] transition md:text-sm ${
                  active === category.key
                    ? "bg-[#f4e8dc] font-semibold text-[#b98661] shadow-[0_6px_14px_-10px_rgba(185,134,97,0.8)]"
                    : "text-gray-500 hover:bg-[#f8f2ec] hover:text-[#b98661]"
                }`}
              >
                {category.label}
              </button>
            ))}
            </div>
          </div>

          <motion.div
            key={activeCategory.key}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl border border-black/5 bg-white px-8 py-8 shadow-[0_8px_20px_rgba(0,0,0,0.1)] sm:px-10"
          >
            <div className="grid gap-7 md:grid-cols-[1.25fr_0.75fr]">
              <div className="space-y-5">
                {activeCategory.items.map((item) => (
                  <div key={item.name} className="flex items-center gap-4">
                    <span className="text-lg text-gray-600 md:text-xl">{item.name}</span>
                    <span className="h-px flex-1 border-b border-dashed border-gray-300" />
                    <span className="text-xl font-semibold text-[#d19f79] md:text-3xl">
                      {getSalonPrice(item.price, salon)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="relative hidden min-h-[320px] overflow-hidden rounded-xl md:block">
                <Image
                  src={activeCategory.image}
                  alt={activeCategory.label}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
