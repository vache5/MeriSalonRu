import { useSyncExternalStore } from "react";

type Breakpoint = { minWidth: number; count: number };

function getCount(breakpoints: Breakpoint[]) {
  if (typeof window === "undefined") {
    return breakpoints[breakpoints.length - 1]?.count ?? 1;
  }
  const width = window.innerWidth;
  for (const bp of breakpoints) {
    if (width >= bp.minWidth) return bp.count;
  }
  return 1;
}

export function useBreakpointCount(breakpoints: Breakpoint[]) {
  return useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener("resize", onStoreChange);
      return () => window.removeEventListener("resize", onStoreChange);
    },
    () => getCount(breakpoints),
    () => breakpoints[breakpoints.length - 1]?.count ?? 1,
  );
}

export const GALLERY_VISIBLE_BREAKPOINTS: Breakpoint[] = [
  { minWidth: 1024, count: 4 },
  { minWidth: 640, count: 2 },
  { minWidth: 0, count: 1 },
];

export const TEAM_CARDS_BREAKPOINTS: Breakpoint[] = [
  { minWidth: 1024, count: 3 },
  { minWidth: 640, count: 2 },
  { minWidth: 0, count: 1 },
];
