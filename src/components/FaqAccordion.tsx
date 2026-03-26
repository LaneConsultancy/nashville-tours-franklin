"use client";

import { useState } from "react";
import { CaretDownIcon } from "@phosphor-icons/react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Where do tours meet?",
    answer:
      "All tours depart from downtown Franklin, Tennessee. The exact meeting point is confirmed in your booking confirmation along with parking guidance. Downtown Franklin has free parking in both garages and street spaces — it's one of the most accessible small-town downtowns you'll visit.",
  },
  {
    question: "What happens if it rains?",
    answer:
      "Tours run in light rain — Franklin weather is part of the experience, and most guests are glad they came. We cancel only for lightning, tornado warnings, or below-freezing temperatures. If we cancel, you'll receive a full refund or rescheduling at no charge.",
  },
  {
    question: "Are the tours suitable for children?",
    answer:
      "The historic walking tour and food tour are great for families with children aged 8 and up. The ghost tour is best for ages 12 and up — the content is historically intense but not gory or actor-based. The celebrity tour works for all ages. Private tours can be adjusted for any group composition.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 48 hours in advance, especially on weekends and in October when the ghost tour in particular sells out quickly. Private tours should be booked at least a week out to allow time for customization.",
  },
  {
    question: "Do you offer gift certificates?",
    answer:
      "Yes. Tours make excellent gifts, and gift certificates can be purchased for any tour or as a dollar amount toward a private booking. Contact us at dberry017@icloud.com or call (661) 201-9003 to arrange one.",
  },
  {
    question: "Is Franklin, Tennessee worth visiting from Nashville?",
    answer:
      "Without question. Franklin consistently ranks among the most charming small towns in America, and the historic district, food scene, and overall atmosphere are genuinely different from Nashville's tourist center. Most visitors from Nashville say they wish they'd budgeted more time. A half-day is enough for a single tour; a full day lets you pair a tour with lunch or dinner on Main Street.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {faqs.map((faq, i) => {
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
                  fontFamily:
                    "var(--font-playfair), 'Playfair Display', serif",
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
                  transition: "transform 0.3s cubic-bezier(0.32, 0.72, 0, 1), color 0.3s cubic-bezier(0.32, 0.72, 0, 1)",
                  display: "inline-flex",
                }}
              >
                <CaretDownIcon weight="bold" size={15} />
              </span>
            </button>

            {/* Answer */}
            <div
              style={{
                maxHeight: isOpen ? "400px" : "0",
                overflow: "hidden",
                transition: "max-height 0.45s cubic-bezier(0.32, 0.72, 0, 1)",
              }}
            >
              <p
                className="pb-5 pl-5 pr-4 text-base leading-relaxed"
                style={{
                  fontFamily:
                    "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  color: "#6b6456",
                  maxWidth: "72ch",
                  paddingLeft: "calc(28px + 20px + 20px)",
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
