"use client";

import { useState } from "react";
import Logo from "./logo";
import { useLanguage } from "@/contexts/language-context";

const navLinks = [
  { href: "#how-it-works", label: { ar: "كيف تعمل", en: "How It Works" } },
  { href: "#pricing", label: { ar: "العرض", en: "Offer" } },
  { href: "#faq", label: { ar: "الأسئلة الشائعة", en: "FAQ" } },
];

const WHATSAPP_URL =
  "https://wa.me/962791313027?text=" +
  encodeURIComponent("مرحبا، أريد طلب كروت NFC للتقييمات");

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  const langButtonClass = (active: boolean) =>
    `cursor-pointer rounded-lg px-2.5 py-1.5 text-xs font-bold transition sm:px-3 ${
      active
        ? "bg-blue-500 text-white shadow-sm"
        : "text-gray-400 hover:bg-gray-700 hover:text-white"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-40 w-full pt-2 md:pt-5">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Glassmorphism navbar */}
        <nav className="relative flex h-14 w-full items-center justify-between gap-2 rounded-2xl border border-gray-800 bg-gray-900/80 px-3 shadow-lg shadow-black/40 backdrop-blur-md sm:px-4">
          {/* Brand */}
          <Logo variant="light" />

          {/* Center links (desktop only) */}
          <div className="hidden items-center gap-6 md:flex lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 transition hover:text-white"
              >
                {t(link.label)}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-2">
            {/* AR | EN switcher */}
            <div
              className="flex shrink-0 items-center rounded-xl border border-gray-700 bg-gray-800/80 p-1"
              role="group"
              aria-label={
                language === "ar" ? "اختيار اللغة" : "Choose language"
              }
            >
              <button
                type="button"
                onClick={() => setLanguage("ar")}
                aria-pressed={language === "ar"}
                className={langButtonClass(language === "ar")}
              >
                AR
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                aria-pressed={language === "en"}
                className={langButtonClass(language === "en")}
              >
                EN
              </button>
            </div>

            {/* WhatsApp CTA: icon-only on mobile, labeled from sm up */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center gap-2 rounded-xl bg-emerald-600 px-3 py-2 font-bold text-white transition hover:bg-emerald-500 sm:px-4"
              aria-label={t({
                ar: "طلب عبر واتساب",
                en: "Order via WhatsApp",
              })}
            >
              <svg
                className="h-4 w-4 shrink-0 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.15-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              <span className="hidden text-sm whitespace-nowrap sm:inline">
                {t({ ar: "طلب عبر واتساب", en: "Order via WhatsApp" })}
              </span>
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-gray-700 bg-gray-800/80 text-gray-300 transition hover:bg-gray-700 hover:text-white md:hidden"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={
                language === "ar"
                  ? mobileOpen
                    ? "إغلاق القائمة"
                    : "فتح القائمة"
                  : mobileOpen
                    ? "Close menu"
                    : "Open menu"
              }
            >
              <svg
                className="h-5 w-5 fill-current"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                {mobileOpen ? (
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414Z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M2.5 5a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 0 1.5H3.25A.75.75 0 0 1 2.5 5Zm0 5a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 0 1.5H3.25A.75.75 0 0 1 2.5 10Zm0 5a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile dropdown panel */}
          {mobileOpen && (
            <div
              id="mobile-nav"
              className="absolute inset-x-0 top-[calc(100%+8px)] z-10 rounded-2xl border border-gray-800 bg-gray-900/95 p-3 shadow-2xl shadow-black/50 backdrop-blur-md md:hidden"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-gray-300 transition hover:bg-gray-800 hover:text-white"
                  >
                    {t(link.label)}
                  </a>
                ))}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-emerald-500 sm:hidden"
                >
                  {t({ ar: "طلب عبر واتساب", en: "Order via WhatsApp" })}
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
