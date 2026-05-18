import Image from "next/image";
import Link from "next/link";
import { IconClock, IconMail, IconMapPin, IconPhone, NavIcon, type NavIconKey } from "@/components/icons";
import { assetSrc } from "@/lib/asset";

const menuItems: { label: string; href: string; icon: NavIconKey }[] = [
  { label: "ГЛАВНАЯ", href: "#home", icon: "home" },
  { label: "СПЕЦИАЛИСТЫ", href: "#specialists", icon: "specialists" },
  { label: "НАШИ УСЛУГИ", href: "#services", icon: "services" },
  { label: "О НАС", href: "#addresses", icon: "about" },
];
const MAX_CHANNEL_URL = "https://max.ru/join/UKql4nt2EjTfvB3tjLf_eQdc73JDijmCgTkAizkpSQM";

function MaxLogo({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-[10px] bg-gradient-to-br from-[#79a9ff] via-[#5f8fff] to-[#3b6df1] px-2.5 py-1.5 text-[10px] font-bold tracking-[0.14em] text-white shadow-[0_6px_14px_-8px_rgba(46,85,204,0.8)] ${className ?? ""}`}
      aria-hidden
    >
      MAX
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden bg-[#17181c] text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A27C] to-transparent" />
      <div className="absolute -left-20 top-16 h-56 w-56 rounded-full border border-white/10" aria-hidden />
      <div className="absolute -right-20 bottom-14 h-56 w-56 rounded-full border border-white/10" aria-hidden />

      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 xl:grid-cols-[1.25fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center" aria-label="Mary Salon">
            <Image
              src={assetSrc("/images/logo-mary.png")}
              alt="Mary Salon logo"
              width={260}
              height={76}
              className="h-auto w-[210px] object-contain sm:w-[220px]"
            />
          </Link>
          <p className="mt-5 max-w-sm text-base leading-7 text-white/75">
            Премиальный салон красоты с современным подходом, вниманием к деталям и безупречным
            сервисом для каждого гостя.
          </p>
          <a
            href="tel:+79057747771"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#C8A27C]/70 px-5 py-2.5 text-sm font-medium tracking-[0.08em] text-[#C8A27C] transition hover:bg-[#C8A27C] hover:text-[#17181c]"
          >
            <IconPhone className="h-4 w-4" />
            +7 (905) 774-77-71
          </a>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#C8A27C]">Меню</p>
          <ul className="mt-5 space-y-3 text-sm tracking-[0.06em] text-white/80">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="inline-flex items-center gap-2.5 transition hover:text-[#C8A27C]">
                  <NavIcon icon={item.icon} className="h-4 w-4 shrink-0 text-[#C8A27C]/80" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#C8A27C]">Контакты</p>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-2.5">
              <IconPhone className="h-4 w-4 shrink-0 text-[#C8A27C]" />
              <a href="tel:+79057747771" className="transition hover:text-[#C8A27C]">
                +7 (905) 774-77-71
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <IconMail className="h-4 w-4 shrink-0 text-[#C8A27C]" />
              <a href="mailto:merisalon.info@mail.ru" className="transition hover:text-[#C8A27C]">
                merisalon.info@mail.ru
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <IconMapPin className="h-4 w-4 shrink-0 text-[#C8A27C]" />
              Московская область
            </li>
            <li className="pt-1">
              <a
                href={MAX_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#8aa9ff]/45 bg-[#233053]/45 px-3 py-1.5 text-xs font-medium text-[#dce7ff] transition hover:border-[#8aa9ff]/70 hover:bg-[#2a3962]/60"
              >
                <MaxLogo />
                <span className="uppercase tracking-[0.08em]">СК «Мери» · @join</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#C8A27C]">Часы работы</p>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2.5">
              <IconClock className="mt-0.5 h-4 w-4 shrink-0 text-[#C8A27C]" />
              Пн - Вс: 10:00-21:00
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/60">
        <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 uppercase tracking-[0.16em]">
          <span>© 2026 Mary Salon. Все права защищены.</span>
          <span className="text-white/35" aria-hidden>
            ·
          </span>
          <span className="normal-case tracking-[0.06em]">
            Website Created by{" "}
            <a
              href="https://www.vcode.am"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#C8A27C] transition hover:text-white"
            >
              VCode
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
