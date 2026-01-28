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
    {
      "question": "What types of healthcare professionals does Medfuture recruit?",
      "answer": "Medfuture recruits across a broad range of medical and healthcare disciplines, including General Practitioners, Allied Health Professionals, Dentists, Psychologists, Nurses, and Health Executives. We support both primary care and specialist healthcare settings across Australia and New Zealand."
    },
    {
      "question": "Does Medfuture offer both permanent and locum recruitment solutions?",
      "answer": "Yes. Medfuture provides permanent placements, short-term and long-term locum staffing, and tailored workforce solutions. This flexibility allows employers to manage staffing shortages, planned leave, service expansion, or long-term growth with confidence."
    },
    {
      "question": "How does Medfuture ensure the quality of candidates?",
      "answer": "All candidates undergo a comprehensive screening process, including qualification verification, AHPRA registration checks (where applicable), experience assessment, and suitability for the specific role and location. Our consultants specialise in healthcare recruitment, ensuring only well-matched candidates are presented."
    },
    {
      "question": "What makes Medfuture different from other medical recruitment agencies?",
      "answer": "Medfuture combines deep healthcare industry knowledge, an extensive national talent network, and a consultative approach. Since 2014, we have successfully placed over 1,000 GPs across Australia, earning a strong reputation for reliability, compliance, and long-term employer satisfaction."
    },
    {
      "question": "Can Medfuture help with hard-to-fill or regional roles?",
      "answer": "Absolutely. Medfuture has extensive experience recruiting for regional, rural, and hard-to-fill positions across Australia. We actively source both local and internationally trained healthcare professionals and support them through the recruitment and onboarding process."
    }
  ],
  "/jobs/locum": [
    { question: "What is a locum position?", answer: "Locum positions are temporary jobs covering short-term staffing needs, often with flexible hours." },
    { question: "Are locum jobs full-time?", answer: "No, they are usually temporary or part-time, but can sometimes be full-time." },
  ],
  "/jobs/international": [
    { question: "Can I work internationally?", answer: "Yes, international roles require eligibility for work visas and often offer relocation support." },
  ],
  "/general-practice-division/fracgp-facrrm": [
    { question: "Can I work internationally?", answer: "Yes, international roles require eligibility for work visas and often offer relocation support." },
    { question: "Can I work internationally?", answer: "Yes, international roles require eligibility for work visas and often offer relocation support." },

    { question: "Can I work internationally?", answer: "Yes, international roles require eligibility for work visas and often offer relocation support." },

    { question: "Can I work internationally?", answer: "Yes, international roles require eligibility for work visas and often offer relocation support." },
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

      <div className="inner-width-section  mx-auto">  <p className="text-xs lg:text-[14px] text-[#074CA4] font-medium mb-2">
                 FAQ
                </p>
        <h2 className="lg:text-[36px] text-2xl font-[500] text-gray-900 mb-8 text-left">
        Quick answers 
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
                className={`px-6 pb-0 mb-4 text-gray-700 lg:text-[16px] text-xs transition-all duration-300 ${openIndex === index ? "max-h-96 opacity-100 pt-2" : "max-h-0 opacity-0 overflow-hidden"
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
