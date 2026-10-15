"use client";

import PageIllustration from "@/components/page-illustration";
import { useLanguage } from "@/contexts/language-context";

export default function HeroHome() {
  const { t, language } = useLanguage();

  return (
    <section id="hero" className="relative scroll-mt-24 md:scroll-mt-32">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              {t({
                ar: "حول زبائنك اليوميين إلى مئات التقييمات الخمس نجوم على Google بلمسة واحدة!",
                en: "Turn Your Daily Customers Into Hundreds of 5-Star Google Reviews with a Single Tap!",
              })}
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                {t({
                  ar: "بدون كتابة روابط طويلة أو طلب شفهي محرج. كروت NFC الذكية تنقل زبونك لصفحة تقييم محلك فوراً خلال 3 ثوانٍ.",
                  en: "No long links or awkward verbal requests. Smart NFC cards take your customer straight to your Google review page in 3 seconds.",
                })}
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:w-auto"
                    href="https://wa.me/962791313027?text=مرحبا، أريد طلب كروت NFC للتقييمات"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="relative inline-flex items-center">
                      {t({
                        ar: "ارفع تقيماتك الان",
                        en: "Boost Your Reviews Now",
                      })}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero video */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative rounded-2xl bg-gray-900 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,--theme(--color-slate-300/.8),transparent)1]">
              <video
                src="/videos/Customer_tapping_iPhone_on_card.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
