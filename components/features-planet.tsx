"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";
import Step1Img from "@/public/images/Coffee_shop_owner_reading_review.jpg";
import Step2Img from "@/public/images/Phone_scanning_NFC_review_card.jpg";
import Step3Img from "@/public/images/Smartphone_showing_Google_Maps.jpg";

export default function FeaturesPlanet() {
  const { t, dir } = useLanguage();

  const steps = [
    {
      number: "1",
      image: Step1Img,
      title: {
        ar: "قرب البطاقة",
        en: "Bring the Card Close",
      },
      description: {
        ar: "ضع البطاقة أمام هاتف الزبون (iPhone أو Android).",
        en: "Place the card near the customer's phone (iPhone or Android).",
      },
      delay: 0,
    },
    {
      number: "2",
      image: Step2Img,
      title: {
        ar: "نقرة واحدة",
        en: "One Tap",
      },
      description: {
        ar: "تظهر شاشة التقييم الخاصة بمحلك على Google مباشرة.",
        en: "Your business's Google review page appears instantly.",
      },
      delay: 150,
    },
    {
      number: "3",
      image: Step3Img,
      title: {
        ar: "5 نجوم",
        en: "5 Stars",
      },
      description: {
        ar: "يضع الزبون تقييمه خلال ثوانٍ معدودة!",
        en: "The customer leaves their review in just seconds!",
      },
      delay: 300,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-24 before:absolute before:inset-0 before:-z-20 before:bg-gray-900 md:scroll-mt-32"
      dir={dir}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div
            className="mx-auto max-w-3xl pb-12 text-center md:pb-16"
            data-aos="zoom-y-out"
          >
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              {t({
                ar: "كيف تعمل البطاقة؟",
                en: "How Does It Work?",
              })}
            </h2>
          </div>

          {/* 3-Step Grid */}
          <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className="overflow-hidden rounded-xl border border-gray-700/50 bg-gray-800/50 shadow-lg backdrop-blur-xs transition hover:border-gray-600/60"
                data-aos="fade-up"
                data-aos-delay={step.delay}
              >
                {/* Image & Step Badge */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={step.image}
                    width={400}
                    height={300}
                    alt={t(step.title)}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute end-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 font-bold text-white shadow-md">
                    {step.number}
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6 text-start">
                  <h3 className="mb-2 text-xl font-semibold text-gray-200">
                    {t(step.title)}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {t(step.description)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
