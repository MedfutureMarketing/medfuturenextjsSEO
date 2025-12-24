'use client';
import React, { useState } from "react";
import { usePathname } from "next/navigation";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQData {
  [key: string]: FAQItem[];
}

const faqData: FAQData = {
  "/job-seeker-hub": [
    { question: "How do I apply for a job through Medfuture?", answer: "Register on our website and our team will match you to opportunities based on your skills and preferences." },
    { question: "How do I apply for a job through Medfuture?", answer: "Register on our website and our team will match you to opportunities based on your skills and preferences." },
      { question: "How do I apply for a job through Medfuture?", answer: "Register on our website and our team will match you to opportunities based on your skills and preferences." },
    { question: "How do I apply for a job through Medfuture?", answer: "Register on our website and our team will match you to opportunities based on your skills and preferences." },
    { question: "How do I apply for a job through Medfuture?", answer: "Register on our website and our team will match you to opportunities based on your skills and preferences." },

  ],
  "/jobs/locum": [
    { question: "What is a locum position?", answer: "Locum positions are temporary jobs covering short-term staffing needs, often with flexible hours." },
    { question: "Are locum jobs full-time?", answer: "No, they are usually temporary or part-time, but can sometimes be full-time." },
  ],
  "/jobs/international": [
    { question: "Can I work internationally?", answer: "Yes, international roles require eligibility for work visas and often offer relocation support." },
  ],
};

export default function FAQ() {
  const pathname = usePathname();
  const faqs = faqData[pathname] || [];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // JSON-LD schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQ",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <section className=" mt-[150px] mb-[140px]">
      {/* Inject JSON-LD directly */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="inner-width-section max-w-3xl mx-auto">
        <h2 className="lg:text-[36px] text-2xl font-[500] text-gray-900 mb-8 text-center">
          Frequently Asked <span className="font-[700] text-[#074CA4] lg:text-[48px] text-2xl"> Questions</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-lg border-b  overflow-hidden">
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex cursor-pointer justify-between items-center lg:text-[16px] text-sm font-[600] text-gray-900  transition"
              >
                {faq.question}
                <span className="text-blue-600 font-bold">{openIndex === index ? "-" : "+"}</span>
              </button>

              {/* Answer */}
              <div
                className={`px-6 pb-0 mb-4 text-gray-700 lg:text-[16px] text-xs transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100 pt-2" : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
