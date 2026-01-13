'use client'

import { useState } from 'react'

/* ---------------------------------- Types --------------------------------- */

type Tab = 'All' | 'Medical' | 'Allied Health' | 'Mental Health' | 'Oral Health'
type Column = 'permanent' | 'locum' | 'international'

type Row = {
  label: string
  ticks: Partial<Record<Column, boolean>>
}

/* ---------------------------------- Tick SVG ------------------------------- */

function TickIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-5 h-5 mx-auto text-blue-700 ${className}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  )
}

/* ---------------------------------- Tabs ---------------------------------- */

const tabs: Tab[] = [
  'All',
  'Medical',
  'Allied Health',
  'Mental Health',
  'Oral Health',
]

/* ---------------------------------- Cards --------------------------------- */

const cards = [
  {
    key: 'permanent' as Column,
    title: 'Permanent Recruitment',
    description:
      'We match healthcare organisations with committed professionals for long-term roles, ensuring stability, cultural fit, and lasting value for continued growth.',
  },
  {
    key: 'locum' as Column,
    title: 'Locum & Short-Term Recruitment',
    description:
      'We provide reliable locum and short-term professionals to maintain smooth operations, ensuring uninterrupted patient care during staffing gaps.',
  },
  {
    key: 'international' as Column,
    title: 'International Graduate Recruitment',
    description:
      'We guide international healthcare graduates into the Australian workforce with supportive recruitment, compliance assistance, and meaningful entry-level opportunities.',
  },
]

/* ---------------------------- Custom Tick Rows ----------------------------- */

const baseRows: Row[] = [
  {
    label: 'Workforce Planning & Vacancy Analysis',
    ticks: { permanent: true, locum: true },
  },
  {
    label: 'Candidate Sourcing & Screening',
    ticks: { permanent: true, locum: true, international: true },
  },
  {
    label: 'Credentialing & Compliance Checks (AHPRA, WWCC, Police, etc.)',
    ticks: { permanent: true, locum: true, international: true },
  },
  {
    label: 'Visa & Immigration Support',
    ticks: { international: true },
  },
  {
    label: 'Cultural Orientation & Relocation Assistance',
    ticks: { international: true },
  },
  {
    label: 'Contract Negotiation & Offer Management',
    ticks: { permanent: true, locum: true },
  },
  {
    label: 'Roster & Schedule Management',
    ticks: { locum: true, international: true },
  },
  {
    label: '24/7 On-Call Support for Urgent Cover',
    ticks: { locum: true, international: true },
  },
  {
    label: 'Workforce Retention & Post-Placement Support',
    ticks: { permanent: true, international: true },
  },
  {
    label: 'Access to Medfuture National Talent Pool',
    ticks: { permanent: true, locum: true, international: true },
  },
  {
    label: 'Employer Branding & Job Marketing Campaigns',
    ticks: { permanent: true, locum: true },
  },
  {
    label: 'Training & Professional Development Pathways',
    ticks: { international: true },
  },
  {
    label: 'Specialist Division Consultancies (GP, AHP, Nursing, etc.)',
    ticks: { locum: true, international: true },
  },
  {
    label: 'Workforce Diversity & Equal Opportunity Compliance',
    ticks: { international: true },
  },
  {
    label: 'Payroll, Contracting & Administrative Support',
    ticks: { locum: true },
  },
]

/* ----------------------------- Tab Overrides ------------------------------- */

const tabRows: Record<Tab, Row[]> = {
  All: baseRows,

  Medical: baseRows.map(r => ({
    ...r,
    ticks: {
      permanent: r.ticks.permanent,
      locum: r.ticks.locum,
    },
  })),

  'Allied Health': baseRows.map(r => ({
    ...r,
    ticks: {
      permanent: r.ticks.permanent,
      international: r.ticks.international,
    },
  })),

  'Mental Health': baseRows.map(r => ({
    ...r,
    ticks: {
      locum: r.ticks.locum,
      international: r.ticks.international,
    },
  })),

  'Oral Health': baseRows.map(r => ({
    ...r,
    ticks: {
      permanent: r.ticks.permanent,
    },
  })),
}

/* ------------------------------ Component ---------------------------------- */

export default function RecruitmentDivisions() {
  const [activeTab, setActiveTab] = useState<Tab>('All')

  return (
    <section className=" full-width-section mx-auto px-6 my-[140px]">
      <div className='inner-width-section'>  {/* Title */}
        <h2 className="text-center text-[36px] text-[#040D48] font-[500] mb-8">
          Services by <span className="text-[#074CA4] font-[700]">Recruitment Divisions</span>
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 text-sm rounded-md cursor-pointer border w-[192px] transition
              ${activeTab === tab
                  ? 'bg-blue-900 text-white border-blue-900'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
<div className='bg-[#FAFAFA] full-width-section '>
        {/* Table */}
        <div className="overflow-x-auto border-b inner-width-section ">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {/* Left Headline */}
                <th className="align-top w-[28%] pr-6 text-left ">
                  <p className="italic text-blue-900 font-[400] text-[32px] mt-[43px] justify-center  leading-snug">
                    Choose your recruitment plan, secure top medical talent
                  </p>
                </th>

                {/* Cards */}
                {cards.map(card => (
                  <th key={card.key} className="align-top w-[24%] bg-white">
                    <div
                      className="border rounded-lg p-6 flex flex-col justify-between h-[300px]" // fixed height
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-black text-left text-[20px] mb-3">
                          {card.title}
                        </h3>
                        <p className="lg:text-[14px] text-left text-gray-600 font-[400]">
                          {card.description}
                        </p>
                      </div>

                      <button className="mt-4 text-sm bg-blue-900 text-white py-2 px-4 rounded w-full hover:bg-blue-800">
                        Explore →
                      </button>
                    </div>


                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {tabRows[activeTab].map(row => (
                <tr key={row.label} className="border-t">
                  <td className="py-4 pr-6 font-[500] text-sm text-[#4A5565]">
                    {row.label}
                  </td>

                  {(['permanent', 'locum', 'international'] as Column[]).map(
                    col => (
                      <td key={col} className="py-4 text-center bg-white">
                        {row.ticks[col] && <TickIcon />}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div></div></div>
    </section>
  )
}
