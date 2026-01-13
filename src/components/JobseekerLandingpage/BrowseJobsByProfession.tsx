"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DoctorImg from "@/assets/homeico/profession.png";

const tabs = [
  { label: "Permanent Jobs", slug: "permanent", color: "bg-[#074CA4]" },
  { label: "Locum Jobs", slug: "locum", color: "bg-[#040D48]" },
  { label: "Jobs for International Candidates", slug: "international", color: "bg-[#575D84]" },
];

const allProfessions = [
  "General Practitioner",
  "Oral Health Therapist",
  "Dietitian",
  "Nursing",
  "Dental Assistant",
  "Exercise Physiologist",
  "Psychology",
  "Occupational Therapists",
  "Podiatrist",
  "Psychiatry",
  "Speech Pathologist",
  "Behavioural Therapist",
  "Behavior Support Practitioner",
  "Dentists",
  "Physiotherapist",
  "Osteopathy",
  "Healthcare Executives",
].map(title => ({ title, image: DoctorImg }));

export default function BrowseJobsByProfession() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const columns = [
    allProfessions.slice(0, 3),
    allProfessions.slice(3, 6),
    allProfessions.slice(6, 9),
    allProfessions.slice(9, 13),
    allProfessions.slice(13, 17),
  ];

  return (
    <section className="mt-16 lg:mt-[139px]">
      <div className="inner-width-section space-y-8">

        {/* Heading */}
        <h2 className="text-2xl lg:text-[36px] font-[500] text-[#040D48] text-left lg:text-right">
          Browse Jobs By{" "}
          <span className="font-[700] text-[#074CA4] lg:text-[40px]">
            Profession
          </span>
        </h2>

        {/* Tabs */}
        <div className="flex flex-col lg:flex-row lg:justify-end gap-3">
          {tabs.map(tab => {
            const isActive = tab.label === activeTab.label;
            return (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab)}
                className={`
                  w-full lg:w-[307px] h-[44px] lg:h-[47px]
                  rounded font-medium text-sm lg:text-[16px]
                  text-white transition
                  ${tab.color}
                  ${isActive ? "ring-2 ring-offset-2 ring-blue-500" : "opacity-90 hover:opacity-100"}
                `}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ===== MOBILE LIST ===== */}
        {/* ===== MOBILE HORIZONTAL SCROLL ===== */}
        <div className="lg:hidden -mx-4 px-4">
          <div
            className="
      flex gap-4 overflow-x-auto pb-4
      snap-x snap-mandatory
      scrollbar-hide
    "
          >
            {allProfessions.map((job) => (
              <Link
                key={job.title}
                href={`${activeTab.slug}/${job.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="
          snap-start
          min-w-[240px]
          flex items-center justify-between
          bg-white border rounded-lg
          px-4 py-3
          shadow-sm hover:shadow-md
          transition
        "
              >
                <p className="text-sm font-semibold text-gray-800 pr-3">
                  {job.title}
                </p>

                <div className="relative w-8 h-8 flex-shrink-0">
                  <Image
                    src={job.image}
                    alt={job.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>



        {/* ===== DESKTOP GRID ===== */}
        <div className="hidden lg:grid grid-cols-5 gap-6">
          {columns.map((col, index) => (
            <div key={index} className="flex flex-col gap-4">
              {col.map(job => (
                <Link
                  key={job.title}
                  href={`${activeTab.slug}/${job.title.toLowerCase().replace(/\s+/g, "-")}-jobs?page=1`}
                  className="flex items-center justify-between bg-white border rounded p-3 shadow-sm hover:shadow-lg transition"
                >
                  <p className="text-[14px] font-[700] text-gray-800">
                    {job.title}
                  </p>
                  <div className="relative w-8 h-8">
                    <Image src={job.image} alt={job.title} fill className="object-contain" />
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
