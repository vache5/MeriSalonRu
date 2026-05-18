import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { className?: string };

const defaults = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function IconPhone({ className, ...props }: IconProps) {
  return (
    <svg className={className} {...defaults} {...props}>
      <path d="M14.5 20c-6.1 0-10.5-4.4-10.5-10.5 0-.8.1-1.5.3-2.2A1.7 1.7 0 0 1 6.1 6h2a1.7 1.7 0 0 1 1.7 1.5l.2 1.7a1.7 1.7 0 0 1-.5 1.4l-1 1c.9 1.9 2.4 3.4 4.3 4.3l1-1a1.7 1.7 0 0 1 1.4-.5l1.7.2a1.7 1.7 0 0 1 1.5 1.7v2a1.7 1.7 0 0 1-1.3 1.8c-.7.2-1.4.3-2.2.3Z" />
    </svg>
  );
}

export function IconMapPin({ className, ...props }: IconProps) {
  return (
    <svg className={className} {...defaults} {...props}>
      <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function IconMail({ className, ...props }: IconProps) {
  return (
    <svg className={className} {...defaults} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function IconClock({ className, ...props }: IconProps) {
  return (
    <svg className={className} {...defaults} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function IconChevron({ className, direction, ...props }: IconProps & { direction: "left" | "right" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden {...props}>
      {direction === "left" ? (
        <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

export function IconDownload({ className, ...props }: IconProps) {
  return (
    <svg className={className} {...defaults} {...props}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  );
}

export function IconHome({ className, ...props }: IconProps) {
  return (
    <svg className={className} {...defaults} {...props}>
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" />
    </svg>
  );
}

export function IconUsers({ className, ...props }: IconProps) {
  return (
    <svg className={className} {...defaults} {...props}>
      <path d="M16 19v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1" />
      <circle cx="9" cy="8" r="3.5" />
      <path d="M22 19v-1a4 4 0 0 0-3-3.87M16 4.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function IconSparkles({ className, ...props }: IconProps) {
  return (
    <svg className={className} {...defaults} {...props}>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function IconTag({ className, ...props }: IconProps) {
  return (
    <svg className={className} {...defaults} {...props}>
      <path d="M20 12V8a2 2 0 0 0-2-2h-4L4 12.5V20h7.5L20 12Z" />
      <circle cx="15" cy="9" r="1.25" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconStar({ className, ...props }: IconProps) {
  return (
    <svg className={className} {...defaults} {...props}>
      <path d="m12 3 2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7L12 3Z" />
    </svg>
  );
}

export function IconHair({ className, ...props }: IconProps) {
  return (
    <svg className={className} {...defaults} {...props}>
      <path d="M12 4v2" />
      <path d="M8 7c0 0 1.8-1 4-1s4 1 4 1" />
      <path d="M7.5 9C6 13 6 17 8.5 20" />
      <path d="M12 8v12" />
      <path d="M16.5 9c1.5 4 1.5 8-1 11" />
    </svg>
  );
}

export function IconNails({ className, ...props }: IconProps) {
  return (
    <svg className={className} {...defaults} {...props}>
      <path d="M7 18V12c0-1.2 1-2 2-2" />
      <path d="M11 18V10c0-1.3 1.1-2.2 2.2-2.2" />
      <path d="M15.2 18V9c0-1.3 1-2.2 2.3-2.2" />
      <path d="M19 18v-4" />
      <path d="M6 18h14" />
      <path d="M19 6.5 21 4.5" />
      <path d="M19 6.5v3.5" />
    </svg>
  );
}

export function IconCosmetology({ className, ...props }: IconProps) {
  return (
    <svg className={className} {...defaults} {...props}>
      <circle cx="12" cy="9" r="3.5" />
      <path d="M7.5 19c1.4-2.6 3.2-4 4.5-4s3.1 1.4 4.5 4" />
      <path d="M9.5 8.5h.01M14.5 8.5h.01" />
      <path d="M12 12.5v2" />
      <path d="M11 15.5h2" />
    </svg>
  );
}

export function IconScissors({ className, ...props }: IconProps) {
  return (
    <svg className={className} {...defaults} {...props}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <path d="M8.5 7.5 20 13" />
      <path d="M8.5 16.5 20 11" />
    </svg>
  );
}

export type ServiceIconKey = "hair" | "nails" | "cosmetology" | "barber";

export function ServiceIcon({ icon, className }: { icon: ServiceIconKey; className?: string }) {
  switch (icon) {
    case "hair":
      return <IconHair className={className} />;
    case "nails":
      return <IconNails className={className} />;
    case "cosmetology":
      return <IconCosmetology className={className} />;
    case "barber":
      return <IconScissors className={className} />;
    default:
      return <IconSparkles className={className} />;
  }
}

export type NavIconKey = "home" | "specialists" | "services" | "about";

export function NavIcon({ icon, className }: { icon: NavIconKey; className?: string }) {
  switch (icon) {
    case "home":
      return <IconHome className={className} />;
    case "specialists":
      return <IconUsers className={className} />;
    case "services":
      return <IconSparkles className={className} />;
    case "about":
      return <IconMapPin className={className} />;
    default:
      return <IconSparkles className={className} />;
  }
}
