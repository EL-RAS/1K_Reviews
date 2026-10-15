"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

type Language = "ar" | "en";

type Bilingual = { ar: string; en: string };

interface LanguageContextType {
  language: Language;
  dir: "rtl" | "ltr";
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (text: Bilingual) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar");

  const dir = language === "ar" ? "rtl" : "ltr";

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"));
  }, []);

  const t = useCallback(
    (text: Bilingual) => text[language],
    [language]
  );

  return (
    <LanguageContext.Provider
      value={{ language, dir, setLanguage, toggleLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
