"use client";

import { useState } from "react";
import { PlusIcon, MinusIcon } from "@phosphor-icons/react";

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
    <div className="divide-y" style={{ borderColor: "rgba(27, 42, 74, 0.1)" }}>
      {items.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              className="w-full flex items-start justify-between gap-6 py-6 text-left group"
              style={{ cursor: "pointer" }}
            >
              <span
                className="text-base md:text-lg font-semibold leading-snug"
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                  color: isOpen ? "#C8963E" : "#1B2A4A",
                  transition: "color 0.3s cubic-bezier(0.32, 0.72, 0, 1)",
                }}
              >
                {faq.question}
              </span>
              <span
                className="shrink-0 mt-0.5 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  backgroundColor: isOpen
                    ? "#C8963E"
                    : "rgba(27, 42, 74, 0.08)",
                  color: isOpen ? "#fff" : "#1B2A4A",
                  transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                }}
              >
                {isOpen ? (
                  <MinusIcon weight="bold" size={13} />
                ) : (
                  <PlusIcon weight="bold" size={13} />
                )}
              </span>
            </button>
            <div
              style={{
                maxHeight: isOpen ? "600px" : "0",
                overflow: "hidden",
                transition: "max-height 0.45s cubic-bezier(0.32, 0.72, 0, 1)",
              }}
            >
              <p
                className="pb-6 text-base leading-relaxed"
                style={{
                  fontFamily:
                    "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#6b6456",
                  maxWidth: "72ch",
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
