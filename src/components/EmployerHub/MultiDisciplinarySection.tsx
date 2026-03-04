"use client";

import Image from "next/image";
import Backgroundimage from "@/assets/employer/backgroundimage.webp"

const items = [
  { number: "01", label: "Multi-site medical groups" },
  { number: "02", label: "Mixed GP + allied health practices" },
  { number: "03", label: "NDIS providers and multi-service organisations" },
  { number: "04", label: "Organisations scaling services nationally" },
];

export default function MultiDisciplinarySection() {
  return (
    <section className="relative full-width-section font-sans overflow-hidden mt-[145px]">

      {/* Background Image — replace src with your asset */}
      <div className="absolute inset-0 z-0">
        <Image
          src={Backgroundimage}
          alt="Background"
          fill
          className="object-contain object-center"
        />
        {/* Light overlay to keep text legible */}
        <div className="absolute inset-0 bg-white/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 inner-width-section mx-auto px-4 sm:px-8 lg:px-16 py-16 sm:py-20">

        {/* Label */}
        <p className="lg:text-[14px] text-xs font-[600] text-[#074CA4] mb-3">
          Multi-disciplinary
        </p>

        {/* Heading */}
        <h2 className="text-xl lg:text-[30px] font-[600] text-[#0F172A] leading-tight mb-4 ">
          Built for multi-site and multi-discipline organisations
        </h2>

        {/* Body */}
        <p className="lg:text-[16px] text-xs text-[#4A5565] leading-relaxed mb-10 max-w-lg">
          If you operate across multiple disciplines, start here — then engage the right division
          specialists under a unified strategy.
        </p>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-4 mb-10 max-w-full">
          {items.map((item) => (
            <div key={item.number} className="flex items-center gap-3">
              {/* Number */}
              <span className="text-[16px] font-[600]  text-[#0F172A] w-6 shrink-0">
                {item.number}
              </span>
              {/* Line */}
              <span className="w-10 h-px bg-slate-400 shrink-0" />
              {/* Label */}
              <span className="text-[16px] font-[600] text-[#0F172A]">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="w-fit px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-semibold text-[14px] rounded-md transition-colors duration-200">
            Request a service proposal
          </button>
          <button className="w-fit px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-[13.5px] rounded-md transition-colors duration-200">
            Book an employer review
          </button>
        </div>

      </div>
    </section>
  );
}