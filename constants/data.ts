export type Service = {
  title: string;
  description: string;
  image: string;
};

export type GalleryPhoto = {
  src: string;
  alt: string;
};

export const galleryPhotos: GalleryPhoto[] = [
  { src: "/images/gallery/gallery-01.jpg", alt: "" },
  { src: "/images/gallery/gallery-02.jpg", alt: "" },
  { src: "/images/gallery/gallery-03.jpg", alt: "" },
  { src: "/images/gallery/gallery-04.jpg", alt: "" },
  { src: "/images/gallery/gallery-05.jpg", alt: "" },
  { src: "/images/gallery/gallery-06.jpg", alt: "" },
  { src: "/images/gallery/gallery-07.jpg", alt: "" },
  { src: "/images/gallery/gallery-08.jpg", alt: "" },
  { src: "/images/gallery/gallery-09.jpg", alt: "" },
  { src: "/images/gallery/gallery-10.jpg", alt: "" },
  { src: "/images/gallery/gallery-11.jpg", alt: "" },
  { src: "/images/gallery/gallery-12.jpg", alt: "" },
  { src: "/images/gallery/gallery-13.jpg", alt: "" },
  { src: "/images/gallery/gallery-14.jpg", alt: "" },
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
