"use client";

import { useState } from "react";
import EmployerEnquiryForm from "@/components/EmployerHub/EmployerEnquirySection";

const pills = ["General Practice", "Allied Health", "Mental Health", "Dental", "Pharmacy"];

const featureCards = [
  { label: "Employer-first", title: "Designed to reduce vacancy risk" },
  { label: "Division specialists", title: "Pipelines per discipline" },
  { label: "National reach", title: "Metro + regional coverage" },
];

export default function EmployerHubPage() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  return (
    <div className="full-width-section bg-white font-sans">

      {/* Main Content */}
      <div className="inner-width-section mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8 lg:py-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

        {/* Left Column */}
        <div className="flex-1 min-w-0 w-full">

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-5 sm:mb-7">
            {pills.map((pill) => (
              <button
                key={pill}
                onClick={() => setActiveTab(pill === activeTab ? null : pill)}
                className={`px-3 sm:px-4 py-1.5 rounded-full border text-xs sm:text-[13.5px] font-medium transition-colors duration-150 cursor-pointer
                  ${activeTab === pill
                    ? "bg-blue-900 text-white border-blue-900"
                    : "bg-white text-slate-600 border-slate-300 hover:border-slate-400"
                  }`}
              >
                {pill}
              </button>
            ))}
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#040D48] leading-tight mb-3 sm:mb-3.5 max-w-lg">
            Employer Hub — Healthcare Recruitment Australia
          </h1>

          {/* Subheading */}
          <p className="text-sm lg:text-[20px] text-slate-700 font-[500] mb-3 sm:mb-4">
            Workforce solutions built for continuity, compliance and growth.
          </p>

          {/* Body */}
          <p className="text-sm lg:text-[16px] text-[#4A5565] leading-relaxed mb-6 lg:mb-[31px] mt-[31px] max-w-[600px]">
            Healthcare employers dont just need candidates. They need workforce certainty across
            disciplines — delivered with discipline-specific pipelines, governance-aware screening,
            and a continuity-first approach.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8 sm:mb-10">
            <button className="w-full sm:w-auto px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-[500] text-sm sm:text-[14.5px] rounded-md transition-colors duration-200 cursor-pointer text-center">
              Request a Service Proposal
            </button>
            <button className="w-full sm:w-auto px-6 py-3 bg-white text-slate-900 border border-slate-300 hover:border-slate-400 font-[500] text-sm sm:text-[14.5px] rounded-md transition-colors duration-200 cursor-pointer text-center">
              Why Medfuture
            </button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {featureCards.map((card) => (
              <div
                key={card.label}
                className="border border-slate-200 rounded-lg p-4 bg-white"
              >
                <p className="text-[12px] text-[#4A5565] font-medium mb-1.5">{card.label}</p>
                <p className="text-[14px] font-[500] text-[#0F172A] leading-snug">{card.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column — Form Component */}
        <div className="w-full lg:w-[460px] lg:shrink-0">
          <EmployerEnquiryForm/>
        </div>

      </div>
    </div>
  );
}