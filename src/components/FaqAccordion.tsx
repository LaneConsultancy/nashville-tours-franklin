"use client";

import { useState } from "react";
import { PlusIcon, MinusIcon } from "@phosphor-icons/react";

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
    <div className="divide-y" style={{ borderColor: "rgba(27, 42, 74, 0.1)" }}>
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              className="w-full flex items-start justify-between gap-6 py-6 text-left group"
              style={{
                cursor: "pointer",
              }}
            >
              <span
                className="text-base md:text-lg font-semibold leading-snug"
                style={{
                  fontFamily:
                    "var(--font-playfair), 'Playfair Display', serif",
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
                maxHeight: isOpen ? "400px" : "0",
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
