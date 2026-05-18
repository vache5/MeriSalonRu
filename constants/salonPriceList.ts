export type SalonKey = "istra" | "kryukovo";

export const SALONS: readonly { key: SalonKey; label: string }[] = [
  { key: "istra", label: "Истра" },
  { key: "kryukovo", label: "Крюково" },
] as const;

export type SalonPriceRow = {
  service: string;
  price: string;
};

export type SalonPriceSubsection = {
  title: string;
  items: SalonPriceRow[];
};

export type SalonPriceSection = {
  title: string;
  subsections: SalonPriceSubsection[];
};

import { kryukovoSalonPriceSections } from "@/constants/salonPriceKryukovo";

/** Прайс салона Истра */
export const istraSalonPriceSections: SalonPriceSection[] = [
  {
    title: "Ногтевой сервис",
    subsections: [
      {
        title: "Маникюр",
        items: [
          { service: "Маникюр классический", price: "1 500 ₽" },
          { service: "Маникюр + гель-лак", price: "3 300 ₽" },
          { service: "Маникюр + обычный лак", price: "2 300 ₽" },
          { service: "Маникюр + лечебное покрытие", price: "2 050 ₽" },
        ],
      },
      {
        title: "Педикюр",
        items: [
          { service: "Педикюр классический", price: "3 000 ₽" },
          { service: "Обработка пальчиков", price: "1 700 ₽" },
          { service: "Педикюр + гель-лак", price: "3 500 ₽" },
          { service: "Педикюр + обычный лак", price: "3 350 ₽" },
          { service: "Педикюр + лечебное покрытие", price: "3 100 ₽" },
          { service: "Обработка пальчиков + гель-лак", price: "2 500 ₽" },
          { service: "Обр. пальчиков + обычный лак", price: "2 350 ₽" },
          { service: "Обр. пальчиков + лечебное покрытие", price: "2 200 ₽" },
        ],
      },
    ],
  },
  {
    title: "Женский зал",
    subsections: [
      {
        title: "Стрижки",
        items: [
          { service: "Стрижка коротких волос", price: "2 000–2 200 ₽" },
          { service: "Стрижка средних волос", price: "2 200–2 400 ₽" },
          { service: "Стрижка длинных волос", price: "2 400–2 700 ₽" },
          { service: "Стрижка супердлинных волос", price: "3 000–3 300 ₽" },
          { service: "Стрижка одним срезом", price: "1 500 ₽" },
          { service: "Стрижка челки", price: "700 ₽" },
        ],
      },
      {
        title: "Стрижка горячими ножницами",
        items: [
          { service: "Длина короткая", price: "2 700 ₽" },
          { service: "Средняя длина", price: "3 000 ₽" },
          { service: "Длинные", price: "3 300 ₽" },
        ],
      },
      {
        title: "Укладки",
        items: [
          { service: "Укладка феном коротких волос", price: "1 100–1 300 ₽" },
          { service: "Укладка феном средней длины", price: "1 500–1 700 ₽" },
          { service: "Укладка длинных волос", price: "1 700–1 900 ₽" },
          { service: "Коктейльная укладка (короткие)", price: "1 300 ₽" },
          { service: "Коктейльная укладка (средние)", price: "2 000 ₽" },
          { service: "Коктейльная укладка (длинные)", price: "2 000 ₽" },
          { service: "Плетение; причёски", price: "500–5 000 ₽" },
        ],
      },
      {
        title: "Уход за волосами",
        items: [
          {
            service: "Уход за волосами (Kevin.Murphy; Leaf&Flower; LeLumiss)",
            price: "от 3 000 ₽",
          },
        ],
      },
      {
        title: "Окрашивание",
        items: [
          { service: "Окрашивание корней", price: "5 300 ₽" },
          { service: "Окрашивание в один тон (короткие)", price: "5 300 ₽" },
          { service: "Окрашивание в один тон (средние)", price: "5 700 ₽" },
          { service: "Окрашивание в один тон (длинные)", price: "6 200 ₽" },
          { service: "AirTouch (средние; длинные)", price: "от 11 000 ₽" },
          { service: "Колорирование волос", price: "от 7 500 ₽" },
          { service: "Мелирование волос", price: "от 9 500 ₽" },
          { service: "Обесцвечивание с тонировкой", price: "от 8 000 ₽" },
        ],
      },
    ],
  },
  {
    title: "Мужской зал",
    subsections: [
      {
        title: "Стрижки",
        items: [
          { service: "Классическая стрижка", price: "1 700 ₽" },
          { service: "Стрижка под насадку", price: "900 ₽" },
          { service: "Стрижка под 2 насадки", price: "1 100 ₽" },
          { service: "Стрижка бороды", price: "1 300 ₽" },
          { service: "Стрижка + борода", price: "3 000 ₽" },
          { service: "Стрижка «Приведи друга»", price: "2 700 ₽" },
          { service: "Классическая стрижка детская (до 7 лет)", price: "850 ₽" },
          { service: "Классическая детская стрижка (до 11 лет)", price: "1 000 ₽" },
          { service: "Выстригание рисунка", price: "500 ₽" },
          { service: "Стрижка «Отец + сын» (сын до 11 лет)", price: "2 400 ₽" },
        ],
      },
      {
        title: "Камуфляж и укладка",
        items: [
          { service: "Камуфляж", price: "1 400 ₽" },
          { service: "Укладка", price: "750 ₽" },
        ],
      },
    ],
  },
  {
    title: "Косметология",
    subsections: [
      {
        title: "Оформление бровей",
        items: [
          { service: "Коррекция бровей", price: "700 ₽" },
          { service: "Коррекция и окрашивание краской", price: "1 500 ₽" },
          { service: "Коррекция и окрашивание хной", price: "1 700 ₽" },
          { service: "Окрашивание бровей краской", price: "700 ₽" },
          { service: "Окрашивание бровей хной", price: "800 ₽" },
          { service: "Ламинирование бровей", price: "4 000 ₽" },
        ],
      },
      {
        title: "Оформление ресниц",
        items: [
          { service: "Окрашивание ресниц краской", price: "700 ₽" },
          { service: "Ламинирование ресниц + ботокс", price: "4 200 ₽" },
          { service: "Наращивание ресниц 1,5D–3D", price: "3 800–4 300 ₽" },
          { service: "Частичное наращивание ресниц", price: "2 000 ₽" },
          { service: "Коррекция наращенных ресниц", price: "2 000 ₽" },
          { service: "Снятие наращенных ресниц", price: "800 ₽" },
        ],
      },
      {
        title: "Депиляция (воск)",
        items: [
          { service: "Верхняя губа", price: "400 ₽" },
          { service: "Лицо", price: "800 ₽" },
          { service: "Задняя часть шеи", price: "800 ₽" },
          { service: "Руки (до локтя)", price: "800 ₽" },
          { service: "Руки полностью", price: "1 200 ₽" },
          { service: "Ноги (до колена)", price: "900 ₽" },
          { service: "Ноги полностью", price: "1 800 ₽" },
          { service: "Живот", price: "900 ₽" },
          { service: "Спина", price: "800 ₽" },
          { service: "Подмышки", price: "800 ₽" },
          { service: "Бикини классика", price: "1 100 ₽" },
          { service: "Бикини «Бразильское»", price: "1 900 ₽" },
          { service: "Бикини глубокое", price: "1 800 ₽" },
        ],
      },
      {
        title: "Депиляция (шугаринг)",
        items: [
          { service: "Верхняя губа", price: "500 ₽" },
          { service: "Лицо", price: "1 000 ₽" },
          { service: "Задняя часть шеи", price: "500 ₽" },
          { service: "Руки (до локтя)", price: "1 000 ₽" },
          { service: "Руки полностью", price: "1 300 ₽" },
          { service: "Ноги (до колена)", price: "1 500 ₽" },
          { service: "Ноги полностью", price: "2 800 ₽" },
          { service: "Живот", price: "900 ₽" },
          { service: "Спина", price: "900 ₽" },
          { service: "Подмышки", price: "900 ₽" },
          { service: "Бикини классика", price: "1 500 ₽" },
          { service: "Бикини «Бразильское»", price: "2 200 ₽" },
          { service: "Бикини глубокое", price: "2 500 ₽" },
        ],
      },
      {
        title: "Лазерная эпиляция (ELOS) — лицо",
        items: [
          { service: "Верхняя губа", price: "800 ₽" },
          { service: "Лицо полностью", price: "2 000 ₽" },
          { service: "Межбровье", price: "800 ₽" },
          { service: "Подбородок", price: "800 ₽" },
          { service: "Шея", price: "1 000 ₽" },
          { service: "Щёки", price: "900 ₽" },
        ],
      },
      {
        title: "Лазерная эпиляция (ELOS) — тело",
        items: [
          { service: "Руки до локтя", price: "1 900 ₽" },
          { service: "Руки полностью", price: "2 500 ₽" },
          { service: "Подмышечная область", price: "1 000 ₽" },
          { service: "Плечи", price: "1 000 ₽" },
          { service: "Грудь", price: "1 300 ₽" },
          { service: "Живот", price: "1 000 ₽" },
          { service: "Линия живота", price: "800 ₽" },
          { service: "Спина", price: "3 000 ₽" },
          { service: "Поясница", price: "1 000 ₽" },
          { service: "Ноги до колена", price: "2 000 ₽" },
          { service: "Ноги полностью", price: "3 500 ₽" },
          { service: "Бикини глубокое", price: "2 800 ₽" },
          { service: "Бикини классическое", price: "2 500 ₽" },
        ],
      },
      {
        title: "ELOS и эпиляция",
        items: [
          { service: "Омоложение (ELOS)", price: "4 500 ₽" },
          { service: "Электроэпиляция (1 минута)", price: "60 ₽" },
          { service: "Удаление папилом", price: "600 ₽" },
        ],
      },
      {
        title: "Лазерные комплексы (ELOS)",
        items: [
          {
            service: "XS — подмышки + руки полностью + бикини глубокое",
            price: "5 000 ₽",
          },
          {
            service: "S — подмышки + ноги полностью + бикини глубокое + живот",
            price: "7 500 ₽",
          },
          {
            service: "M — подмышки + руки полностью + ноги полностью + бикини глубокое + живот",
            price: "9 500 ₽",
          },
        ],
      },
      {
        title: "Чистки",
        items: [
          {
            service:
              "Лицо; спина; декольте (атравматическая; механическая; ультразвуковая; комбинированная) — требуется консультация",
            price: "3 800–7 000 ₽",
          },
          { service: "Пилинг лица", price: "4 000 ₽" },
        ],
      },
      {
        title: "Массаж и прочее",
        items: [
          { service: "Массаж лица", price: "от 1 500 ₽" },
          { service: "Массаж тела", price: "от 2 000 ₽" },
          { service: "Проколы (уши, нос, пупок, язык)", price: "3 500 ₽" },
        ],
      },
    ],
  },
];

export const salonPriceSectionsByVenue: Record<SalonKey, SalonPriceSection[]> = {
  istra: istraSalonPriceSections,
  kryukovo: kryukovoSalonPriceSections,
};

export const SALON_PRICE_PDF: Record<SalonKey, { href: string; downloadName: string }> = {
  istra: { href: "/prices/istra.pdf", downloadName: "prais-istra.pdf" },
  kryukovo: { href: "/prices/kryukovo.pdf", downloadName: "prais-kryukovo.pdf" },
};

export function salonHashId(salon: SalonKey) {
  return salon === "istra" ? "prices-istra" : "prices-kryukovo";
}

export function salonLabel(salon: SalonKey) {
  return SALONS.find((s) => s.key === salon)?.label ?? salon;
}

function sectionFrom(sections: SalonPriceSection[], title: string) {
  const found = sections.find((s) => s.title === title);
  if (!found) throw new Error(`Missing price section: ${title}`);
  return found;
}

function flatten(...sections: SalonPriceSection[]): SalonPriceRow[] {
  return sections.flatMap((s) => s.subsections.flatMap((sub) => sub.items));
}

function buildSalonPriceTabs(sections: SalonPriceSection[]): SalonPriceTab[] {
  const women = sectionFrom(sections, "Женский зал");
  const nails = sectionFrom(sections, "Ногтевой сервис");
  const men = sectionFrom(sections, "Мужской зал");
  const cosmetology = sectionFrom(sections, "Косметология");

  return [
    {
      id: "stylists",
      label: "Услуги стилистов",
      shortLabel: "Стилисты",
      subsections: women.subsections,
      items: flatten(women),
      image: "/images/gallery/gallery-02.jpg",
    },
    {
      id: "nails",
      label: "Услуги ногтевого сервиса",
      shortLabel: "Ногти",
      subsections: nails.subsections,
      items: flatten(nails),
      image: "/images/service-nails.png",
    },
    {
      id: "barbershop",
      label: "Услуги барбершопа",
      shortLabel: "Барбершоп",
      subsections: men.subsections,
      items: flatten(men),
      image: "/images/service-barbershop.png",
    },
    {
      id: "cosmetology",
      label: "Услуги косметологии",
      shortLabel: "Косметология",
      subsections: cosmetology.subsections,
      items: flatten(cosmetology),
      image: "/images/service-cosmetology.png",
    },
  ];
}

export function getSalonPriceTabs(salon: SalonKey): SalonPriceTab[] {
  return buildSalonPriceTabs(salonPriceSectionsByVenue[salon]);
}

export type SalonPriceTabId = "stylists" | "nails" | "barbershop" | "cosmetology";

export type SalonPriceTab = {
  id: SalonPriceTabId;
  label: string;
  /** Короткое название для мобильной сетки */
  shortLabel: string;
  subsections: SalonPriceSubsection[];
  items: SalonPriceRow[];
  image: string;
};

export function salonPriceHeading(salon: SalonKey) {
  return salon === "istra" ? "Прайс Истра" : salon === "kryukovo" ? "Прайс Крюково" : salonLabel(salon);
}
