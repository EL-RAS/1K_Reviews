"use client";

import { useLanguage } from "@/contexts/language-context";

export default function BusinessCategories() {
  const { t, dir } = useLanguage();

  return (
    <section
      id="pain"
      className="relative scroll-mt-24 bg-white md:scroll-mt-32"
      dir={dir}
    >
      {/* Decorative horizontal lines */}
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            {/* Visual: 88% Stat & 5 Stars */}
            <div className="mb-8" data-aos="zoom-y-out">
              <span className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-7xl font-bold tracking-tight text-transparent md:text-8xl">
                88%
              </span>
              <div
                className="mt-3 flex items-center justify-center gap-1.5 text-google-yellow"
                aria-label="5 stars"
              >
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-8 w-8 fill-google-yellow text-google-yellow"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.402z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
            </div>

            {/* Headline */}
            <div
              className="mb-6 border-y py-6 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl">
                {t({
                  ar: "هل تعلم أن 88% من الزبائن يختارون المحل بناءً على تقييمات Google؟",
                  en: "Did you know that 88% of customers choose a local business based on Google reviews?",
                })}
              </h2>
            </div>

            {/* Body text */}
            <p
              className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600"
              data-aos="zoom-y-out"
              data-aos-delay={300}
            >
              {t({
                ar: "العميل السعيد يخرج من محلك بدون أن يترك تقييماً، بينما العميل الغاضب هو أول من يكتب تقييماً سيئاً! ألا تستحق خدماتك تقييماً يعكس جودتك الحقيقية؟",
                en: "Happy customers leave without reviewing, while angry customers rush to post bad ones! Doesn't your business deserve ratings that reflect your true quality?",
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
