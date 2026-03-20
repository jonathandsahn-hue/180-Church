"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What should I wear?",
    a: "Come as you are — seriously. Some people dress up, some come casual. There is no dress code here.",
  },
  {
    q: "How long is the service?",
    a: "About 90 minutes. We worship together, hear a message, and stick around to connect afterward.",
  },
  {
    q: "Is there parking?",
    a: "We're in Union Square — easily reachable by subway (N/Q/R/W/4/5/6/L trains) and several bus lines. Street parking is available but limited.",
  },
  {
    q: "What about my kids?",
    a: "We'd love to have your whole family. Check with us on arrival about children's programming — we're happy to walk you through it.",
  },
  {
    q: "Do I need to be a Christian to come?",
    a: "Not at all. Whether you're curious, skeptical, or somewhere in between — you're welcome here. Come with all your questions.",
  },
  {
    q: "Can I watch online instead?",
    a: "Yes! We livestream every Sunday at 12:00 PM on YouTube. You can also watch past sermons anytime.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            aria-controls={`faq-answer-${i}`}
            id={`faq-question-${i}`}
            className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
          >
            <span className="font-semibold text-[#1a1a2e] text-base">{faq.q}</span>
            <span className={`shrink-0 w-7 h-7 rounded-full border-2 border-[#29B9E8] flex items-center justify-center transition-transform motion-reduce:transition-none ${open === i ? "rotate-45" : ""}`}>
              <svg className="w-3.5 h-3.5 text-[#29B9E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </button>
          {open === i && (
            <div
              id={`faq-answer-${i}`}
              role="region"
              aria-labelledby={`faq-question-${i}`}
              className="px-6 pb-5 text-[#4a4a6a] leading-relaxed border-t border-gray-100 pt-4"
            >
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
