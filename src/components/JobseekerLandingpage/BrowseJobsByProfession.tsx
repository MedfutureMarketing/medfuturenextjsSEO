"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DoctorImg from "@/assets/homeico/profession.png";

const tabs = [
  { label: "Permanent Jobs", slug: "permanent", color: "bg-[#074CA4]", count: 1250 },
  { label: "Locum Jobs", slug: "locum", color: "bg-[#040D48]", count: 340 },
  { label: "Jobs for International Candidates", slug: "international", color: "bg-[#575D84]", count: 680 },
];

const allProfessions = [
  { 
    title: "General Practitioner", 
    image: DoctorImg, 
    counts: { permanent: 1833, locum: 120, international: 89 }
  },
  { 
    title: "Oral Health Therapist", 
    image: DoctorImg, 
    counts: { permanent: 89, locum: 45, international: 32 }
  },
  { 
    title: "Dietitian", 
    image: DoctorImg, 
    counts: { permanent: 156, locum: 78, international: 54 }
  },
  { 
    title: "Nursing", 
    image: DoctorImg, 
    counts: { permanent: 17, locum: 287, international: 198 }
  },
  { 
    title: "Dental Assistant", 
    image: DoctorImg, 
    counts: { permanent: 127, locum: 65, international: 43 }
  },
  { 
    title: "Exercise Physiologist", 
    image: DoctorImg, 
    counts: { permanent: 93, locum: 47, international: 31 }
  },
  { 
    title: "Psychology", 
    image: DoctorImg, 
    counts: { permanent: 178, locum: 92, international: 67 }
  },
  { 
    title: "Occupational Therapists", 
    image: DoctorImg, 
    counts: { permanent: 234, locum: 118, international: 82 }
  },
  { 
    title: "Podiatrist", 
    image: DoctorImg, 
    counts: { permanent: 67, locum: 34, international: 23 }
  },
  { 
    title: "Psychiatry", 
    image: DoctorImg, 
    counts: { permanent: 145, locum: 73, international: 52 }
  },
  { 
    title: "Speech Pathologist", 
    image: DoctorImg, 
    counts: { permanent: 102, locum: 51, international: 36 }
  },
  { 
    title: "Behavioural Therapist", 
    image: DoctorImg, 
    counts: { permanent: 88, locum: 44, international: 29 }
  },
  { 
    title: "Behavior Support Practitioner", 
    image: DoctorImg, 
    counts: { permanent: 201, locum: 101, international: 71 }
  },
  { 
    title: "Dentists", 
    image: DoctorImg, 
    counts: { permanent: 312, locum: 156, international: 108 }
  },
  { 
    title: "Physiotherapist", 
    image: DoctorImg, 
    counts: { permanent: 289, locum: 145, international: 101 }
  },
  { 
    title: "Osteopathy", 
    image: DoctorImg, 
    counts: { permanent: 76, locum: 38, international: 26 }
  },
  { 
    title: "Healthcare Executives", 
    image: DoctorImg, 
    counts: { permanent: 154, locum: 77, international: 54 }
  },
];

export default function BrowseJobsByProfession() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const columns = [
    allProfessions.slice(0, 3),
    allProfessions.slice(3, 6),
    allProfessions.slice(6, 9),
    allProfessions.slice(9, 13),
    allProfessions.slice(13, 17),
  ];

  const getJobCount = (job: typeof allProfessions[0], tabSlug: string) => {
    if (tabSlug === "permanent") return job.counts.permanent;
    if (tabSlug === "locum") return job.counts.locum;
    if (tabSlug === "international") return job.counts.international;
    return 0;
  };

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
                  ${isActive ? tab.color + " ring-2 ring-offset-2 ring-blue-500" : "bg-gray-400 cursor-pointer opacity-60 hover:opacity-75"}
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
                  className="flex items-center justify-between bg-white hover:bg-[#074CA4] border rounded p-3 shadow-sm hover:shadow-lg transition group"
                >
                  <p className="text-[14px] font-[700] text-gray-800 group-hover:text-white">
                    {job.title}
                  </p>
                  <div className="relative w-8 h-8">
                    <div className="opacity-100 group-hover:opacity-0 transition">
                      <Image src={job.image} alt={job.title} fill className="object-contain" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <span className="text-sm font-bold bg-white px-2 py-2 text-[#074CA4] rounded">
                        {getJobCount(job, activeTab.slug)}
                      </span>
                    </div>
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