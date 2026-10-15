"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";

export default function LargeTestimonial() {
  const { t, language, dir } = useLanguage();

  const bulletPoints = [
    {
      ar: "3 كروت NFC محفورة ومبرمجة لحسابك (الأسود الملكي أو الأزرق العصري).",
      en: "3 engraved & programmed NFC cards for your business (Royal Black or Modern Blue).",
    },
    {
      ar: "إعداد وبرمجة مجانية بالكامل.",
      en: "Completely free setup & programming.",
    },
    {
      ar: "بدون أية اشتراكات شهرية أو مصاريف مخفية.",
      en: "No monthly subscriptions or hidden fees.",
    },
    {
      ar: "توصيل سريع لجميع المحافظات.",
      en: "Fast delivery to all governorates.",
    },
  ];

  return (
    <section id="pricing" className="relative scroll-mt-24 bg-gray-50 md:scroll-mt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div
            className="relative mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-xl md:p-12 border border-slate-100 ring-1 ring-slate-900/5"
            data-aos="zoom-y-out"
          >
            {/* Section Title */}
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              {t({
                ar: "عرض خاص - خصم 20%",
                en: "Special Offer - 20% OFF",
              })}
            </h2>

            {/* Price display */}
            <div className="my-6 flex items-baseline justify-center gap-3">
              <span className="text-5xl font-bold tracking-tight text-blue-600">
                {t({ ar: "19 دينار", en: "19 JOD" })}
              </span>
              <span className="text-xl text-gray-400 line-through">
                {t({ ar: "24 دينار", en: "24 JOD" })}
              </span>
            </div>

            {/* NFC Card Images */}
            <div className="my-8 flex flex-row items-center justify-center gap-4 sm:gap-6">
              <img
                src={
                  language === "ar"
                    ? "/images/AR-Black-NFC.png"
                    : "/images/EN-Black-NFC.png"
                }
                alt={t({ ar: "كارت NFC أسود", en: "Black NFC Card" })}
                className="h-auto w-1/2 max-w-[160px] -rotate-3 rounded-xl shadow-lg transition-transform duration-300 hover:rotate-0 sm:max-w-[200px]"
              />
              <img
                src={
                  language === "ar"
                    ? "/images/AR-White-NFC.png"
                    : "/images/EN-White-NFC.png"
                }
                alt={t({ ar: "كارت NFC أبيض", en: "White NFC Card" })}
                className="h-auto w-1/2 max-w-[160px] rotate-3 rounded-xl shadow-lg transition-transform duration-300 hover:rotate-0 sm:max-w-[200px]"
              />
            </div>

            {/* Bullet Points */}
            <div dir={dir} className="my-8">
              <ul className="space-y-4 text-start">
                {bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-6 w-6 shrink-0 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-base text-gray-700 md:text-lg">
                      {t(point)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="mt-8 flex justify-center">
              <a
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 px-8 py-4 text-base font-bold text-white shadow-md transition-all duration-200 hover:bg-green-600 hover:shadow-lg sm:w-auto"
                href="https://wa.me/962791313027?text=مرحبا، أريد طلب كروت NFC للتقييمات"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-5 w-5 shrink-0 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>
                  {t({
                    ar: "اطلب الآن عبر واتساب",
                    en: "Order Now via WhatsApp",
                  })}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
