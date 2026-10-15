"use client";

import Logo from "./logo";
import { useLanguage } from "@/contexts/language-context";

export default function Footer({ border = false }: { border?: boolean }) {
  const { t } = useLanguage();

  return (
    <footer className="relative">
      <div className="container mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-12">
        <div
          className={`flex flex-col items-center gap-8 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:text-start ${
            border
              ? "border-t border-gray-200 pt-8 md:pt-10"
              : ""
          }`}
        >
          {/* Brand + copyright */}
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <Logo variant="dark" />
            <p className="text-sm text-gray-600">
              {t({
                ar: "جميع الحقوق محفوظة © 1k_review 2026",
                en: "All rights reserved © 1k_review 2026",
              })}
            </p>
          </div>

          {/* Contact CTA */}
          <a
            href="https://wa.me/962791313027"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-500"
            aria-label={t({
              ar: "تواصل معنا عبر واتساب",
              en: "Contact us on WhatsApp",
            })}
          >
            <svg
              className="h-4 w-4 shrink-0 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.15-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            <span className="whitespace-nowrap">
              {t({ ar: "تواصل معنا", en: "Contact Us" })}
            </span>
          </a>
        </div>
      </div>

      {/* Watermark brand text (contained, no overflow) */}
      <div
        className="relative h-24 w-full overflow-hidden select-none sm:h-32 md:h-40"
        aria-hidden="true"
      >
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-b from-gray-200 to-gray-100/30 bg-clip-text text-center text-[clamp(3.5rem,17vw,11rem)] leading-none font-bold text-transparent">
          1k_review
        </div>
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-40 -translate-x-1/2 translate-y-1/3 rounded-full border-[16px] border-blue-500/50 blur-2xl" />
      </div>
    </footer>
  );
}
