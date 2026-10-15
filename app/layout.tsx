"use client";

import "./css/style.css";

import { Inter, Noto_Sans_Arabic } from "next/font/google";
import { LanguageProvider, useLanguage } from "@/contexts/language-context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
});

function HtmlWrapper({ children }: { children: React.ReactNode }) {
  const { language, dir } = useLanguage();

  return (
    <html lang={language} dir={dir} className="scroll-smooth">
      <body
        className={`${inter.variable} ${notoSansArabic.variable} ${
          language === "ar" ? "font-arabic" : "font-inter"
        } bg-gray-50 tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <HtmlWrapper>{children}</HtmlWrapper>
    </LanguageProvider>
  );
}
