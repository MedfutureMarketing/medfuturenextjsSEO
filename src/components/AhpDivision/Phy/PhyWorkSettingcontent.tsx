'use client';

import React from 'react';
import Image from 'next/image';

interface JobCardProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  buttonText: string;
  buttonSubtext: string;
}

const JobCard: React.FC<JobCardProps> = ({
  iconSrc,
  iconAlt,
  title,
  subtitle,
  description,
  highlights,
  buttonText,
  buttonSubtext,
}) => {
  return (
    <div className="bg-[#C0C0C017]rounded-lg  transition-shadow duration-300 p-2">
      <div className="flex items-center gap-3 mb-2">

        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="54" height="54" rx="6.96774" fill="#074CA4" fill-opacity="0.05" />
          <path d="M21.4242 29.4002C21.2319 29.4002 21.0475 29.3238 20.9116 29.1878C20.7756 29.0519 20.6992 28.8675 20.6992 28.6752C20.6992 28.4829 20.7756 28.2985 20.9116 28.1625C21.0475 28.0266 21.2319 27.9502 21.4242 27.9502H31.5742C31.7665 27.9502 31.9509 28.0266 32.0869 28.1625C32.2228 28.2985 32.2992 28.4829 32.2992 28.6752C32.2992 28.8675 32.2228 29.0519 32.0869 29.1878C31.9509 29.3238 31.7665 29.4002 31.5742 29.4002H21.4242ZM21.4242 33.7502C21.2319 33.7502 21.0475 33.6738 20.9116 33.5378C20.7756 33.4019 20.6992 33.2175 20.6992 33.0252C20.6992 32.8329 20.7756 32.6485 20.9116 32.5125C21.0475 32.3766 21.2319 32.3002 21.4242 32.3002H31.5742C31.7665 32.3002 31.9509 32.3766 32.0869 32.5125C32.2228 32.6485 32.2992 32.8329 32.2992 33.0252C32.2992 33.2175 32.2228 33.4019 32.0869 33.5378C31.9509 33.6738 31.7665 33.7502 31.5742 33.7502H21.4242Z" fill="#074CA4" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M28.2179 13.4502H18.5246C17.9478 13.4502 17.3945 13.6793 16.9867 14.0872C16.5788 14.4951 16.3496 15.0483 16.3496 15.6252V37.3752C16.3496 37.952 16.5788 38.5053 16.9867 38.9132C17.3945 39.321 17.9478 39.5502 18.5246 39.5502H34.4746C35.0515 39.5502 35.6047 39.321 36.0126 38.9132C36.4205 38.5053 36.6496 37.952 36.6496 37.3752V22.4431C36.6495 21.8986 36.4451 21.3739 36.0769 20.9728L29.8216 14.1549C29.6177 13.9327 29.3699 13.7553 29.0938 13.634C28.8177 13.5126 28.5194 13.4501 28.2179 13.4502ZM17.7996 15.6252C17.7996 15.4329 17.876 15.2485 18.012 15.1125C18.1479 14.9766 18.3323 14.9002 18.5246 14.9002H28.2179C28.3185 14.9001 28.418 14.9209 28.5101 14.9614C28.6022 15.0018 28.6849 15.061 28.7529 15.1351L35.0082 21.953C35.1311 22.0866 35.1994 22.2615 35.1996 22.4431V37.3752C35.1996 37.5675 35.1232 37.7519 34.9873 37.8878C34.8513 38.0238 34.6669 38.1002 34.4746 38.1002H18.5246C18.3323 38.1002 18.1479 38.0238 18.012 37.8878C17.876 37.7519 17.7996 37.5675 17.7996 37.3752V15.6252Z" fill="#074CA4" />
          <path d="M27.95 22.1502H35.925C36.1173 22.1502 36.3017 22.2266 36.4377 22.3625C36.5736 22.4985 36.65 22.6829 36.65 22.8752C36.65 23.0675 36.5736 23.2519 36.4377 23.3878C36.3017 23.5238 36.1173 23.6002 35.925 23.6002H27.225C27.0327 23.6002 26.8483 23.5238 26.7123 23.3878C26.5764 23.2519 26.5 23.0675 26.5 22.8752V14.1752C26.5 13.9829 26.5764 13.7985 26.7123 13.6625C26.8483 13.5266 27.0327 13.4502 27.225 13.4502C27.4173 13.4502 27.6017 13.5266 27.7377 13.6625C27.8736 13.7985 27.95 13.9829 27.95 14.1752V22.1502Z" fill="#074CA4" />
        </svg>

      </div>
      <h3 className="lg:text-[18px] text-md font-semibold text-[#074CA4]">{title}</h3>
      <p className="lg:text-[16px] text-xs text-gray-500 mb-6">{subtitle}</p>

      {/* <p className="text-sm text-gray-600 mb-4">{description}</p> */}

      <ul className="space-y-1 mb-2">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-black mt-0">•</span>
            <span className="text-sm text-[#4A5565]">{highlight}</span>
          </li>
        ))}
      </ul>

      <button className="lg:w-[440px] bg-[#0A2E5C] text-left hover:bg-blue-950 text-white py-3 px-4 rounded-md transition-colors duration-200 text-sm ">
        <span className="block font-medium">{buttonText}</span>
        <span className="text-xs text-blue-100 ">{buttonSubtext}</span>
      </button>
    </div>
  );
};

export default function PhysiotherapistJobs() {
  const jobCards: JobCardProps[] = [
    {
      iconSrc: '/icons/document.png',
      iconAlt: 'Document Icon',
      title: 'Private Practice Physiotherapist Jobs',
      subtitle: '',
      description: 'Setting changes everything: patient mix, consult length, documentation, support structure and long-term progression. Choose roles aligned to how you want to practice.',
      highlights: [
        'MSK-focused caseloads',
        'KPI-driven environment',
        'Income growth opportunities',
        'Variable mentoring quality',
      ],
      buttonText: 'Best for: Practice who enjoy autonomy, performance rewards and skill advancement',
      buttonSubtext: '',
    },
    {
      iconSrc: '/icons/briefcase.png',
      iconAlt: 'Briefcase Icon',
      title: 'Hospital & Health Service Physiotherapist Jobs',
      subtitle: '',
      description: 'Setting changes everything: patient mix, consult length, documentation, support structure and long-term progression. Choose roles aligned to how you want to practice.',
      highlights: [
        'Acute, sub-acute & rehab settings',
        'Structured teams',
        'Strong multidisciplinary exposure',
        'Slower income growth but high clinical depth',
      ],
      buttonText: 'Best for: Therapists seeking stability, complexity, and long-term career growth',
      buttonSubtext: '',
    },
    {
      iconSrc: '/icons/document.png',
      iconAlt: 'Document Icon',
      title: 'Community & NDIS Physiotherapist Jobs',
      subtitle: '',
      description: 'Setting changes everything: patient mix, consult length, documentation, support structure and long-term progression. Choose roles aligned to how you want to practice.',
      highlights: [
        'Home & community visits',
        'Functional, long-term patient relationships',
        'Significant documentation',
        'Strong demand nationwide',
      ],
      buttonText: 'Best for: Therapists who value flexibility, relationships and varied clients',
      buttonSubtext: '',
    },
    {
      iconSrc: '/icons/briefcase.png',
      iconAlt: 'Briefcase Icon',
      title: 'Sports Physiotherapist Jobs',
      subtitle: '',
      description: 'Setting changes everything: patient mix, consult length, documentation, support structure and long-term progression. Choose roles aligned to how you want to practice.',
      highlights: [
        'Elite, semi-elite, or community sport',
        'High complexity',
        'Extended hours common',
        'Registration & compliance progression',
      ],
      buttonText: 'Best for: Therapists committed to performance culture and high clinical standards',
      buttonSubtext: '',
    },
  ];

  return (
    <div className="full-width-section bg-[#C0C0C017] py-12 px-4 sm:px-6 lg:px-8  mt-[140px]">
      <div className="inner-width-section mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
            Professional Roles
          </p>
          <h1 className="lg:text-[30px] text-xl font-bold text-gray-900 mb-4">
            Physiotherapist jobs by setting (Australia)
          </h1>
          <p className="text-gray-600 lg:text-[16px] text-xs max-w-3xl">
            Setting changes everything: patient mix, consult length, documentation, support structure and long-term progression. Choose roles aligned to how you want to practice.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobCards.map((card, index) => (
            <JobCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}