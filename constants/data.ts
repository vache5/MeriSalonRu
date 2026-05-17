export type Service = {
  title: string;
  description: string;
  image: string;
};

export type PriceItem = {
  service: string;
  price: string;
};

export type PricePlan = {
  title: string;
  items: PriceItem[];
};

export type Product = {
  name: string;
  image: string;
  aspect: "portrait" | "square" | "landscape";
};

export type Stylist = {
  name: string;
  role: string;
  image: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

export type GalleryPhoto = {
  src: string;
  alt: string;
};

export const galleryPhotos: GalleryPhoto[] = [
  { src: "/images/gallery/gallery-01.jpg", alt: "Салон Mary — интерьер" },
  { src: "/images/gallery/gallery-02.jpg", alt: "Парикмахерская зона" },
  { src: "/images/gallery/gallery-03.jpg", alt: "Рабочее место мастера" },
  { src: "/images/gallery/gallery-04.jpg", alt: "Атмосфера салона" },
  { src: "/images/gallery/gallery-05.jpg", alt: "Зона ожидания" },
  { src: "/images/gallery/gallery-06.jpg", alt: "Салон красоты Mary" },
  { src: "/images/gallery/gallery-07.jpg", alt: "Детали интерьера" },
  { src: "/images/gallery/gallery-08.jpg", alt: "Процедуры в салоне" },
  { src: "/images/gallery/gallery-09.jpg", alt: "Mary Salon — пространство" },
  { src: "/images/gallery/gallery-10.jpg", alt: "Мастера за работой" },
  { src: "/images/gallery/gallery-11.jpg", alt: "Уютный интерьер салона" },
  { src: "/images/gallery/gallery-12.jpg", alt: "Салон Mary — атмосфера" },
  { src: "/images/gallery/gallery-13.jpg", alt: "Зона красоты и ухода" },
  { src: "/images/gallery/gallery-14.jpg", alt: "Meri Salon — наш салон" },
];

export const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Цены", href: "#pricing" },
  { label: "Продукты", href: "#products" },
  { label: "Стилисты", href: "#stylists" },
  { label: "Отзывы", href: "#testimonials" },
];

export const services: Service[] = [
  {
    title: "Уход за волосами",
    description: "Профессиональные стрижки, укладки и восстановление волос.",
    image: "/images/service-hair.png",
  },
  {
    title: "Ногтевой уход",
    description: "Авторский маникюр и spa-педикюр с идеальным покрытием.",
    image: "/images/service-nails.png",
  },
  {
    title: "Косметология",
    description: "Современные процедуры косметологии для свежего и ухоженного образа.",
    image: "/images/service-cosmetology.png",
  },
  {
    title: "Барбершоп",
    description: "Стрижки, оформление бороды и мужской уход в стиле премиум.",
    image: "/images/service-barbershop.png",
  },
];

export const pricePlans: PricePlan[] = [
  {
    title: "Hair Studio",
    items: [
      { service: "Blow Dry", price: "$23" },
      { service: "Hair Coloring", price: "$45" },
      { service: "Keratin Smoothing", price: "$79" },
    ],
  },
  {
    title: "Nail Atelier",
    items: [
      { service: "Classic Manicure", price: "$19" },
      { service: "Gel Manicure", price: "$29" },
      { service: "Spa Pedicure", price: "$39" },
    ],
  },
  {
    title: "Make Up Bar",
    items: [
      { service: "Soft Glam", price: "$55" },
      { service: "Bridal Look", price: "$99" },
      { service: "Photoshoot Style", price: "$75" },
    ],
  },
  {
    title: "Wellness Room",
    items: [
      { service: "Aroma Massage", price: "$49" },
      { service: "Deep Tissue", price: "$58" },
      { service: "Hot Stone", price: "$65" },
    ],
  },
];

export const products: Product[] = [
  {
    name: "Meri Glow Serum",
    image:
      "https://images.unsplash.com/photo-1571781418606-70265b9cce90?auto=format&fit=crop&w=900&q=80",
    aspect: "portrait",
  },
  {
    name: "Botanical Cleanser",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80",
    aspect: "square",
  },
  {
    name: "Hydra Mist",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
    aspect: "landscape",
  },
  {
    name: "Night Recovery Oil",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
    aspect: "portrait",
  },
];

export const stylists: Stylist[] = [
  {
    name: "Anastasia Reed",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Milena Ford",
    role: "Senior Colorist",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Arianna Blake",
    role: "Skin & Wellness Expert",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Meri Salon feels like a private beauty club. Every detail is polished, calm, and luxurious.",
    name: "Elina Markov",
    title: "Brand Consultant",
  },
  {
    quote:
      "From consultation to finish, the team delivered an editorial look that lasted all evening.",
    name: "Sophie Laurent",
    title: "Fashion Stylist",
  },
  {
    quote:
      "The ambience is stunning and the service is flawless. I always leave refreshed and confident.",
    name: "Nina Hart",
    title: "Art Director",
  },
];
