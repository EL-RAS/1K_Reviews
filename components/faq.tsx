"use client";

import Accordion from "@/components/accordion";
import { useLanguage } from "@/contexts/language-context";

const faqs = [
  {
    id: "faq-1",
    question: {
      ar: "هل تحتاج البطاقة إلى شحن أو بطاريات؟",
      en: "Does the card need charging or batteries?",
    },
    answer: {
      ar: "لا، تعمل بتقنية NFC الذكية وبدون بطاريات للأبد.",
      en: "No, it works with smart NFC technology and never needs batteries.",
    },
  },
  {
    id: "faq-2",
    question: {
      ar: "هل تعمل على جميع الهواتف؟",
      en: "Does it work on all phones?",
    },
    answer: {
      ar: "نعم، تدعم كافة أجهزة الآيفون والأندرويد الحديثة.",
      en: "Yes, it supports all modern iPhones and Android devices.",
    },
  },
  {
    id: "faq-3",
    question: {
      ar: "كيف يتم ربط البطاقة بمحلي؟",
      en: "How is the card linked to my business?",
    },
    answer: {
      ar: "نحن نقوم ببرمجتها لك على رابط حسابك في Google Maps قبل الشحن.",
      en: "We program it for you with your Google Maps account link before shipping.",
    },
  },
];

export default function Faq() {
  const { t, dir } = useLanguage();

  return (
    <section id="faq" className="scroll-mt-24 md:scroll-mt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-gray-800 bg-gray-900 px-4 py-12 shadow-2xl shadow-black/30 md:px-12 md:py-20">
          {/* Blue glow accent */}
          <div
            className="pointer-events-none absolute bottom-0 left-1/2 h-56 w-[480px] -translate-x-1/2 translate-y-1/2 rounded-full border-[20px] border-blue-600/40 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative">
            {/* Section Title */}
            <h2 className="mb-8 text-center text-3xl font-bold text-white md:mb-12 md:text-4xl">
              {t({
                ar: "الأسئلة الشائعة",
                en: "Frequently Asked Questions",
              })}
            </h2>

            {/* FAQ items */}
            <div dir={dir} className="mx-auto max-w-2xl space-y-4">
              {faqs.map((faq, index) => (
                <Accordion
                  key={faq.id}
                  id={faq.id}
                  title={t(faq.question)}
                  active={index === 0}
                >
                  {t(faq.answer)}
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
