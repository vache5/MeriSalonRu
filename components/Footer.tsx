import Image from "next/image";
import Link from "next/link";

const menuItems = ["ГЛАВНАЯ", "СПЕЦИАЛИСТЫ", "НАШИ УСЛУГИ", "О НАС"];

export default function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden bg-[#17181c] text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A27C] to-transparent" />
      <div className="absolute -left-20 top-16 h-56 w-56 rounded-full border border-white/10" aria-hidden />
      <div className="absolute -right-20 bottom-14 h-56 w-56 rounded-full border border-white/10" aria-hidden />

      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 xl:grid-cols-[1.25fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center" aria-label="Meri Salon">
            <Image
              src="/images/mary-logo.png"
              alt="Meri Salon logo"
              width={220}
              height={64}
              className="h-auto w-[180px] object-contain"
            />
          </Link>
          <p className="mt-5 max-w-sm text-base leading-7 text-white/75">
            Премиальный салон красоты с современным подходом, вниманием к деталям и безупречным
            сервисом для каждого гостя.
          </p>
          <a
            href="tel:+79057747771"
            className="mt-6 inline-flex items-center rounded-full border border-[#C8A27C]/70 px-5 py-2.5 text-sm font-medium tracking-[0.08em] text-[#C8A27C] transition hover:bg-[#C8A27C] hover:text-[#17181c]"
          >
            +7 (905) 774-77-71
          </a>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#C8A27C]">Меню</p>
          <ul className="mt-5 space-y-3 text-sm tracking-[0.06em] text-white/80">
            {menuItems.map((item) => (
              <li key={item}>
                <a href="#" className="transition hover:text-[#C8A27C]">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#C8A27C]">Контакты</p>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li>+7 (905) 774-77-71</li>
            <li>merisalon.info@mail.ru</li>
            <li>Instagram / Telegram / WhatsApp</li>
            <li>Московская область</li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#C8A27C]">Часы работы</p>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li>Пн - Сб: 10:00 - 21:00</li>
            <li>Воскресенье: 10:00 - 20:00</li>
            <li>По предварительной записи</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs uppercase tracking-[0.16em] text-white/60">
        © 2026 Meri Salon. Все права защищены.
      </div>
    </footer>
  );
}
