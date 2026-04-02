'use client';

import Image, { StaticImageData } from 'next/image';
import React from 'react';

import Gpm from "@/assets/Homedivisonsection/1.jpg";
import Ahp from "@/assets/Homedivisonsection/2.png";
import MH from "@/assets/Homedivisonsection/3.jpg";
import doh from "@/assets/Homedivisonsection/4.jpg";

interface RecruitmentCard {
  iconSvg: React.ReactNode;
  title: string;
  description: string;
  iconBgColor: string;
  coverImage: StaticImageData;
}

/* ================= SVG ICONS ================= */

const StethoscopeSVG = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
    <rect x="1.5" y="1.5" width="47" height="47" rx="23.5" fill="#074CA4" />
    <rect x="1.5" y="1.5" width="47" height="47" rx="23.5" stroke="white" strokeWidth="3" />
    <path
      d="M24.8879 32.0336C29.7672 32.0336 33.7231 28.4068 33.7231 24.2841C33.7231 20.1613 29.7672 17.1055 24.8879 17.1055C20.0087 17.1055 16.0527 20.4474 16.0527 24.5701C16.0527 26.1792 16.6557 27.6702 17.6817 28.8883L16.6049 33.9476L20.9298 31.2451C22.183 31.7705 23.529 32.0387 24.8879 32.0336Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const UsersSVG = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
    <rect x="1.5" y="1.5" width="47" height="47" rx="23.5" fill="#074CA4" />
    <rect x="1.5" y="1.5" width="47" height="47" rx="23.5" stroke="white" strokeWidth="3" />
    <path d="M28.7941 16.0527L28.3681 16.5196..." fill="white" />
  </svg>
);

const BrainSVG = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
    <rect x="1.5" y="1.5" width="47" height="47" rx="23.5" fill="#074CA4" />
    <rect x="1.5" y="1.5" width="47" height="47" rx="23.5" stroke="white" strokeWidth="3" />
    <path
      d="M27.5808 27.9845L28.5193..."
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ToothSVG = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
    <rect x="1.5" y="1.5" width="47" height="47" rx="23.5" fill="#074CA4" />
    <rect x="1.5" y="1.5" width="47" height="47" rx="23.5" stroke="white" strokeWidth="3" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32.522 23.5991V17.1055..."
      fill="white"
    />
  </svg>
);

/* ================= MAIN COMPONENT ================= */

const HealthcareRecruitment = () => {
  const cards: RecruitmentCard[] = [
    {
      iconSvg: <StethoscopeSVG />,
      title: 'General Practice & Medical',
      description:
        'Recruitment for general practitioners, specialists, and hospital-based roles.',
      iconBgColor: 'bg-blue-600',
      coverImage: Gpm,
    },
    {
      iconSvg: <UsersSVG />,
      title: 'Allied Health',
      description:
        'Opportunities and hiring solutions across physiotherapy, occupational therapy, speech pathology, and more.',
      iconBgColor: 'bg-blue-700',
      coverImage: Ahp,
    },
    {
      iconSvg: <BrainSVG />,
      title: 'Mental Health',
      description:
        'Supporting workforce needs across psychiatry, psychology, and community mental health services.',
      iconBgColor: 'bg-slate-700',
      coverImage: MH,
    },
    {
      iconSvg: <ToothSVG />,
      title: 'Dental & Oral Health',
      description:
        'Connecting dental professionals with clinics and specialist practices across Australia.',
      iconBgColor: 'bg-gray-700',
      coverImage: doh,
    },
  ];

  return (
    <div className="w-full bg-white px-6 py-12 lg:px-0">
      {/* Top Title */}
      <div className="flex items-center gap-8 mb-16">
        <div className="flex-grow h-px bg-gray-300"></div>
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 whitespace-nowrap">
          For JobSeekers
        </h1>
      </div>

      {/* Header */}
      <div className="mb-12">
        <p className="text-sm text-gray-600 mb-2 font-medium">
          Explore by divisions
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Specialised recruitment across key healthcare sectors
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl">
          Each healthcare discipline has unique workforce needs. Medfuture delivers recruitment
          solutions aligned to clinical scope, service models, and patient care requirements.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col bg-white rounded-lg shadow-sm overflow-hidden">
            
            {/* Image */}
            <div className="relative h-40 w-full">
              <Image
                src={card.coverImage}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col p-4 flex-1">
              
              {/* Icon */}
              <div className="flex items-center gap-3 mb-3 -mt-8 relative z-10">
                <div className={`${card.iconBgColor} rounded-full shadow-md`}>
                  {card.iconSvg}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[16px] font-bold text-[#0F172A] mb-2">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] text-[#4A5565] mb-4 flex-grow">
                {card.description}
              </p>

              {/* Button */}
              <button className="w-full bg-[#074CA4] hover:bg-blue-800 text-white font-semibold py-3 rounded">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthcareRecruitment;