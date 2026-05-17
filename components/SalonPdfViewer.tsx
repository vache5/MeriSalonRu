"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import type { PDFDocumentProxy } from "pdfjs-dist";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

const GUTTER = 2;
const ZOOM_DEFAULT = 1;
const USER_ZOOM_MIN = 0.55;
const USER_ZOOM_MAX = 1;
const ZOOM_STEP = 1.1;

function IconChevronLeft({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="m14 6-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="m10 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconMinus({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M5 12h14" strokeLinecap="round" />
    </svg>
  );
}

function IconPlus({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
  );
}

function IconFit({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path
        d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7M3 9V3h6M21 15v6h-6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export type SalonPdfViewerProps = {
  file: string;
  /** For accessibility / optional toolbar line */
  label: string;
  /** When false, toolbar omits the «Просмотр · …» line (parent already shows salon). */
  showVenueInToolbar?: boolean;
  /**
   * On-site card: hides the duplicate keyboard hint footer (parent section explains usage).
   * Same scale as default — full page width at 100%, full page height visible (scroll the page).
   */
  variant?: "default" | "embed";
};

export default function SalonPdfViewer({
  file,
  label,
  showVenueInToolbar = true,
  variant = "default",
}: SalonPdfViewerProps) {
  const embed = variant === "embed";
  const measureRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(720);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const [userZoom, setUserZoom] = useState(ZOOM_DEFAULT);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [docLoading, setDocLoading] = useState(true);

  useEffect(() => {
    setPage(1);
    setNumPages(null);
    setLoadError(null);
    setDocLoading(true);
    setUserZoom(ZOOM_DEFAULT);
  }, [file]);

  useEffect(() => {
    const el = measureRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const cr = entries[0]?.contentRect;
      if (!cr) return;
      const w = Math.floor(cr.width);
      if (w > 0) setContentWidth(w);
    });
    ro.observe(el);
    setContentWidth(Math.floor(el.clientWidth));
    return () => ro.disconnect();
  }, []);

  const pageWidth = useMemo(() => {
    if (contentWidth < 40) return 320;
    return Math.max(120, Math.floor((contentWidth - GUTTER * 2) * userZoom));
  }, [contentWidth, userZoom]);

  const goPrev = useCallback(() => {
    setPage((p) => Math.max(1, p - 1));
  }, []);

  const goNext = useCallback(() => {
    setPage((p) => (numPages ? Math.min(numPages, p + 1) : p));
  }, [numPages]);

  const onRootKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    },
    [goPrev, goNext],
  );

  const onDocumentLoadSuccess = useCallback((doc: PDFDocumentProxy) => {
    setNumPages(doc.numPages);
    setDocLoading(false);
    setLoadError(null);
  }, []);

  const onDocumentLoadError = useCallback((err: unknown) => {
    const msg = err instanceof Error ? err.message : String(err);
    setLoadError(msg || "Не удалось открыть файл");
    setDocLoading(false);
  }, []);

  const zoomOut = () => setUserZoom((z) => Math.max(USER_ZOOM_MIN, z / ZOOM_STEP));
  const zoomIn = () => setUserZoom((z) => Math.min(USER_ZOOM_MAX, z * ZOOM_STEP));
  const zoomReset = () => setUserZoom(ZOOM_DEFAULT);

  const pct = Math.round(userZoom * 100);

  const stageMinHeight =
    docLoading && !loadError ? "min-h-[min(16vh,160px)]" : loadError ? "min-h-[140px]" : "";

  const iconSm = "h-3.5 w-3.5 sm:h-4 sm:w-4";
  const btn =
    "flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-[#ebe4dc] transition hover:bg-white/10 active:scale-[0.96] disabled:cursor-not-allowed disabled:opacity-35 sm:h-7 sm:w-7";

  return (
    <div
      className="salon-pdf-viewer flex flex-col overflow-hidden rounded-lg border border-[#c4bab0]/80 bg-[#2a2725] shadow-[0_2px_14px_-6px_rgba(0,0,0,0.22)] outline-none ring-offset-2 ring-offset-[#ece8e2] focus-visible:ring-2 focus-visible:ring-[#C8A27C]/60"
      tabIndex={0}
      onKeyDown={onRootKeyDown}
      role="region"
      aria-label={`Прайс PDF: ${label}`}
    >
      <div className="relative z-[2] border-b border-white/[0.07] bg-gradient-to-b from-[#383431] to-[#2f2c2a] px-2 py-1.5 sm:px-2.5 sm:py-2">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A27C]/40 to-transparent"
          aria-hidden
        />

        {showVenueInToolbar ? (
          <p className="mb-1.5 text-center text-[10px] font-medium uppercase tracking-[0.18em] text-[#a8a09a] sm:mb-2 sm:text-left">
            Просмотр · {label}
          </p>
        ) : null}

        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5 sm:justify-between">
          <div className="flex items-center gap-0.5 rounded-lg bg-black/18 px-0.5 py-0.5 ring-1 ring-white/[0.06]">
            <button type="button" onClick={goPrev} disabled={page <= 1} className={btn} aria-label="Предыдущая страница">
              <IconChevronLeft className={iconSm} />
            </button>
            <div className="min-w-[3.25rem] select-none px-0.5 text-center font-mono text-[11px] tabular-nums leading-none text-[#f0ebe6] sm:min-w-[3.5rem] sm:text-xs">
              <span className="text-[#d4b896]">{page}</span>
              <span className="mx-0.5 text-white/20">/</span>
              <span className="text-white/45">{numPages ?? "…"}</span>
            </div>
            <button
              type="button"
              onClick={goNext}
              disabled={!numPages || page >= numPages}
              className={btn}
              aria-label="Следующая страница"
            >
              <IconChevronRight className={iconSm} />
            </button>
          </div>

          <div className="hidden h-5 w-px shrink-0 bg-white/10 sm:block" aria-hidden />

          <div className="flex items-center gap-0.5 rounded-lg bg-black/18 px-0.5 py-0.5 ring-1 ring-white/[0.06]">
            <button type="button" onClick={zoomOut} disabled={userZoom <= USER_ZOOM_MIN + 0.001} className={btn} aria-label="Уменьшить лист">
              <IconMinus className={iconSm} />
            </button>
            <button
              type="button"
              onClick={zoomReset}
              className="flex h-8 min-w-[2.75rem] items-center justify-center rounded-md px-1 text-center font-mono text-[11px] font-medium tabular-nums text-[#d4b896] transition hover:bg-white/8 hover:text-[#ecdcc4] sm:h-7 sm:text-xs"
              title="По ширине колонки"
            >
              {pct}%
            </button>
            <button type="button" onClick={zoomIn} disabled={userZoom >= USER_ZOOM_MAX - 0.001} className={btn} aria-label="Увеличить лист">
              <IconPlus className={iconSm} />
            </button>
            <button
              type="button"
              onClick={zoomReset}
              className={`${btn} text-[#d4b896] hover:text-[#ecdcc4]`}
              title="Сброс масштаба"
              aria-label="Сбросить масштаб"
            >
              <IconFit className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={measureRef}
        className={`relative w-full overflow-hidden bg-gradient-to-b from-[#22201e] via-[#262422] to-[#2a2826] ${stageMinHeight}`}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          aria-hidden
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C8A27C' stroke-width='0.5'%3E%3Cpath d='M0 30h60M30 0v60'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {loadError ? (
          <div className="relative z-[4] flex min-h-[200px] flex-col items-center justify-center gap-3 bg-[#252322]/95 px-5 py-10">
            <p className="max-w-sm text-center text-sm leading-relaxed text-[#d8d0c8]">{loadError}</p>
            <p className="text-center text-xs text-white/45">Скачайте PDF кнопкой выше или откройте в новой вкладке.</p>
          </div>
        ) : (
          <div className="relative w-full">
            {docLoading ? (
              <div className="absolute inset-0 z-[3] flex flex-col items-center justify-center gap-3 bg-[#252322]/88 px-4 py-8 sm:py-10">
                <div className="relative h-9 w-9">
                  <div className="absolute inset-0 rounded-full border-2 border-white/10" />
                  <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[#C8A27C] border-r-[#C8A27C]/35" />
                </div>
                <p className="text-center text-xs text-[#c4bbb2] sm:text-sm">Загружаем PDF…</p>
                <div className="h-0.5 w-28 overflow-hidden rounded-full bg-white/10 sm:h-1 sm:w-32">
                  <div className="h-full w-full animate-pulse rounded-full bg-[#C8A27C]/45" />
                </div>
              </div>
            ) : null}
            <div className="relative z-[1] flex w-full justify-center px-0.5 py-1 sm:px-1.5 sm:py-2">
              <Document
                key={file}
                file={file}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading={null}
                className="inline-flex max-w-full flex-col items-center"
              >
                <div className="inline-block max-w-full rounded-md shadow-[0_8px_28px_-10px_rgba(0,0,0,0.38)] ring-1 ring-black/20 sm:rounded-lg">
                  <Page
                    key={`${page}-${pageWidth}`}
                    pageNumber={page}
                    width={pageWidth}
                    renderTextLayer
                    renderAnnotationLayer
                    className="bg-white"
                    loading={
                      <div
                        className="flex items-center justify-center bg-white text-xs text-[#6b645c] sm:text-sm"
                        style={{ width: pageWidth, minHeight: 160 }}
                      >
                        Страница {page}…
                      </div>
                    }
                  />
                </div>
              </Document>
            </div>
          </div>
        )}
      </div>

      {embed ? null : (
        <p className="border-t border-white/[0.06] bg-[#2c2927] px-2 py-1.5 text-center text-[10px] leading-snug text-[#9c948c] sm:px-3 sm:py-2 sm:text-[11px] sm:leading-normal">
          <span className="hidden sm:inline">Фокус на блоке — ← → · «−» / «+» ширина листа</span>
          <span className="sm:hidden">Тап по блоку · стрелки · «−» «+»</span>
        </p>
      )}
    </div>
  );
}
