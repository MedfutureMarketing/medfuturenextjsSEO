"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import gpImg from "@/assets/homeico/IMGFORCONSULTANT.jpg";
import medicalImg from "@/assets/homeico/IMGFORCONSULTANT.jpg";
import alliedImg from "@/assets/homeico/IMGFORCONSULTANT.jpg";

type Consultant = {
  name: string;
  role: string;
  location: string;
  stat: string;
  img: StaticImageData;
  phone: string;
  email: string;
};

const allConsultants: Consultant[] = [
  {
    name: "Dr. John Doe",
    role: "Division Manager - AHP",
    location: "Sydney",
    stat: "NSW",
    img: gpImg,
    phone: "+61 400 123 456",
    email: "john.doe@example.com",
  },
  {
    name: "Dr. Jane Smith",
    role: "Division Manager - AHP",
    location: "Melbourne",
    stat: "VIC",
    img: medicalImg,
    phone: "+61 400 234 567",
    email: "jane.smith@example.com",
  },
  {
    name: "Dr. Sam Lee",
    role: "Division Manager - AHP",
    location: "Brisbane",
    stat: "QLD",
    img: alliedImg,
    phone: "+61 400 345 678",
    email: "sam.lee@example.com",
  },
  {
    name: "Dr. Emily White",
    role: "Division Manager - AHP",
    location: "Sydney",
    stat: "NSW",
    img: gpImg,
    phone: "+61 400 456 789",
    email: "emily.white@example.com",
  },
  {
    name: "Dr. Robert Brown",
    role: "Division Manager - AHP",
    location: "Melbourne",
    stat: "VIC",
    img: medicalImg,
    phone: "+61 400 567 890",
    email: "robert.brown@example.com",
  },
  {
    name: "Dr. Mia Wilson",
    role: "Division Manager - AHP",
    location: "Brisbane",
    stat: "QLD",
    img: alliedImg,
    phone: "+61 400 678 901",
    email: "mia.wilson@example.com",
  },
];

const tabs = ["All", "GP", "Medical", "Allied Health"];

export default function MeetOurConsultants() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const filteredConsultants =
    activeTab === "All"
      ? allConsultants
      : allConsultants.filter((c) => c.role === activeTab);

  return (
    <section className="w-full py-20 px-4 lg:px-0 overflow-visible">
      <div className="mx-auto text-center lg:text-left relative">
        <h2 className="text-[36px] font-bold text-[#074CA4] mb-4">
          Meet Our Consultants
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl">
          Our team of healthcare consultants are experts in their fields, ready to support your hiring needs.
        </p>

        {/* Tabs */}
        <div className="flex gap-4 mb-12 flex-wrap justify-start lg:justify-start">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                activeTab === tab
                  ? "bg-[#074CA4] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Consultant Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 overflow-visible">
          {filteredConsultants.map((c, i) => (
            <div key={i} className="relative group w-[209px] h-[224px]">
              {/* Image */}
              <div className="w-[209px] h-[224px] rounded-lg shadow-lg relative group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={c.img}
                  alt={c.name}
                  className="object-cover w-full h-full rounded-lg"
                />

                {/* Stat Box - half inside, half outside */}
                <div className="absolute -bottom-10.5 text-[#C0C0C0] left-0 mt-2  px-3 py-1 text-[36px] font-semibold rounded  z-20">
                  {c.stat}
                </div>
              </div>

              {/* Details Box */}
              <div className="absolute top-1/2 -right-[130px] transform -translate-y-1/2 w-[250px] bg-white p-4 shadow-lg rounded-[4px] flex flex-col gap-1 z-30">
                <h4 className="font-semibold text-[20px] text-[#074CA4]">{c.name}</h4>
                <p className="text-sm text-[#040D48] text-[16px]">{c.role}</p>
                {/* <p className="text-sm text-[#4A5565]">{c.location}</p> */}
                <p className="text-sm text-[#4A5565]">📞 {c.phone}</p>
                <p className="text-sm text-[#4A5565]">✉️ {c.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
