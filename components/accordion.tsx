"use client";

import { useState } from "react";

type AccordionProps = {
  children: React.ReactNode;
  title: string;
  id: string;
  active?: boolean;
};

export default function Accordion({
  children,
  title,
  id,
  active = false,
}: AccordionProps) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(active);

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:border-blue-200 hover:shadow-md">
      <h2>
        <button
          className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-start font-semibold text-gray-900 transition hover:text-blue-600"
          onClick={(e) => {
            e.preventDefault();
            setAccordionOpen((prevState) => !prevState);
          }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id}`}
        >
          <span>{title}</span>
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50">
            <svg
              className={`origin-center fill-blue-500 transition-transform duration-200 ease-out ${accordionOpen ? "rotate-180" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              width={11}
              height={7}
              fill="none"
              aria-hidden="true"
            >
              <path
                d="m2 .586 3 3 3-3L9.414 2 5.707 5.707a1 1 0 0 1-1.414 0L.586 2 2 .586Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </h2>
      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="border-t border-gray-100 px-5 pb-4 pt-3 leading-relaxed text-gray-600">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}
