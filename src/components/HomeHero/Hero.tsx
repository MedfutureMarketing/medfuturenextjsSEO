// "use client";

import React from "react";

export default function HeroSection() {
  const stats = [
    { label: "Employers", value: "400+" },
    { label: "Professionals Placed", value: "700+" },
    { label: "Avg. Time-to-Hire", value: "14–28 days" },
    { label: "Satisfaction", value: "4.9/5" },
  ];

  const organizations = [
    "AHPRA",
    "GMC (UK)",
    "MCNZ",
    "Ireland",
    "USA",
    "Canada",
    "Singapore",
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#003087] via-[#00439B] to-[#0052A3]" />

      <div className="relative container mx-auto px-6 py-20 text-white">
        {/* Hero title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Medfuture Australia – Elevate Your Medical Career
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl text-lg md:text-xl opacity-90 mb-8">
          A trusted recruitment partner for AHPRA, GMC, MCNZ and global
          healthcare professionals.
        </p>

        {/* Org badges */}
        <div className="flex flex-wrap gap-3 mb-10">
          {organizations.map((org) => (
            <span
              key={org}
              className="px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur text-sm"
            >
              {org}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white/10 border border-white/20 rounded-xl text-center p-5"
            >
              <div className="text-3xl font-bold">{s.value}</div>
              <div className="opacity-90 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
