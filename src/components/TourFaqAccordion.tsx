"use client";

import { useState } from "react";
import { CaretDownIcon } from "@phosphor-icons/react";

export interface TourFaqItem {
  question: string;
  answer: string;
}

interface TourFaqAccordionProps {
  items: TourFaqItem[];
}

export default function TourFaqAccordion({ items }: TourFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((faq, i) => {
        const isOpen = openIndex === i;
        const number = String(i + 1).padStart(2, "0");

        return (
          <div
            key={i}
            style={{
              borderLeft: isOpen
                ? "3px solid #C8963E"
                : "3px solid transparent",
              transition: "border-color 0.3s cubic-bezier(0.32, 0.72, 0, 1)",
              marginBottom: "2px",
            }}
          >
            <button
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              className="w-full flex items-start gap-5 py-5 pl-5 pr-3 text-left"
              style={{ cursor: "pointer" }}
            >
              {/* Number */}
              <span
                className="shrink-0 text-sm font-bold tabular-nums leading-snug mt-0.5"
                style={{
                  fontFamily:
                    "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: isOpen ? "#C8963E" : "rgba(200, 150, 62, 0.5)",
                  transition: "color 0.3s cubic-bezier(0.32, 0.72, 0, 1)",
                  minWidth: "28px",
                }}
              >
                {number}
              </span>

              {/* Question */}
              <span
                className="flex-1 text-base md:text-lg font-semibold leading-snug"
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                  color: isOpen ? "#C8963E" : "#1B2A4A",
                  transition: "color 0.3s cubic-bezier(0.32, 0.72, 0, 1)",
                }}
              >
                {faq.question}
              </span>

              {/* Chevron */}
              <span
                className="shrink-0 mt-1"
                style={{
                  color: isOpen ? "#C8963E" : "rgba(27, 42, 74, 0.4)",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition:
                    "transform 0.3s cubic-bezier(0.32, 0.72, 0, 1), color 0.3s cubic-bezier(0.32, 0.72, 0, 1)",
                  display: "inline-flex",
                }}
              >
                <CaretDownIcon weight="bold" size={15} />
              </span>
            </button>

            {/* Answer */}
            <div
              style={{
                maxHeight: isOpen ? "600px" : "0",
                overflow: "hidden",
                transition: "max-height 0.45s cubic-bezier(0.32, 0.72, 0, 1)",
              }}
            >
              <p
                className="pb-5 text-base leading-relaxed"
                style={{
                  fontFamily:
                    "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#6b6456",
                  maxWidth: "72ch",
                  paddingLeft: "calc(28px + 20px + 20px)",
                  paddingRight: "16px",
                }}
              >
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
