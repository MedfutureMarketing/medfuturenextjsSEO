"use client";

import { useState } from "react";

const recruitmentTypes = [
  "Permanent Recruitment",
  "Locum Recruitment",
  "International Recruitment",
  "MCIRCLE Partner Program",
  "Visa & Migration Services",
];

const states = [
  "New South Wales",
  "Victoria",
  "Queensland",
  "Western Australia",
  "South Australia",
  "Tasmania",
  "ACT",
  "Northern Territory",
];

const whatYouReceive = [
  "Service scope (perm / locum-temp / partnership)",
  "Credentialing approach tailored to your facility",
  "SLAs, update cadence and escalation pathway",
  "Commercials (transparent, defensible)",
];

export default function ServiceProposalSection() {
  const [form, setForm] = useState({
    organization: "",
    email: "",
    recruitmentType: "",
    state: "",
    notes: "",
    termsAgreed: false,
    subscribeAlert: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;
    setForm((prev) => ({ ...prev, [target.name]: value }));
  };

  return (
    <section className="full-width-section bg-[#f4f6f8] font-sans py-14 px-4 sm:px-8 lg:px-16 mt-[140px]">
      <div className="inner-width-section mx-auto">

        {/* Header */}
        <p className="text-[13px] font-semibold text-blue-700 mb-2.5">
          Request Proposal
        </p>
        <h2 className="text-2xl sm:text-[32px] font-extrabold text-slate-900 mb-3 leading-tight">
          Get a tailored service proposal
        </h2>
        <p className="text-[13.5px] text-slate-500 mb-9 max-w-2xl">
          Send your role list and locations. We reply with service scope, credentialing approach, SLAs and commercials.
        </p>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* ── Left: Form Card ── */}
          <div className="flex-1 min-w-0 bg-white border border-slate-200 rounded-xl px-7 py-7">
            <h3 className="text-[16px] font-bold text-slate-900 mb-6">
              Employer enquiry
            </h3>

            {/* Row 1: Organization + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[12.5px] font-medium text-slate-700">
                  Organization
                </label>
                <input
                  type="text"
                  name="organization"
                  value={form.organization}
                  onChange={handleChange}
                  placeholder="e.g. ABC Medical Group"
                  className="border border-slate-200 rounded-md px-3 py-2.5 text-[13px] text-slate-700 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[12.5px] font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@organization.com"
                  className="border border-slate-200 rounded-md px-3 py-2.5 text-[13px] text-slate-700 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                />
              </div>
            </div>

            {/* Row 2: Recruitment Type + State */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[12.5px] font-medium text-slate-700">
                  Recruitment Type
                </label>
                <div className="relative">
                  <select
                    name="recruitmentType"
                    value={form.recruitmentType}
                    onChange={handleChange}
                    className="w-full appearance-none border border-slate-200 rounded-md px-3 py-2.5 text-[13px] text-slate-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition bg-white pr-9 cursor-pointer"
                  >
                    <option value="" disabled>Select an option</option>
                    {recruitmentTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[12.5px] font-medium text-slate-700">
                  State/Territory
                </label>
                <div className="relative">
                  <select
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    className="w-full appearance-none border border-slate-200 rounded-md px-3 py-2.5 text-[13px] text-slate-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition bg-white pr-9 cursor-pointer"
                  >
                    <option value="" disabled>Select an option</option>
                    {states.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Roles & Notes */}
            <div className="flex flex-col gap-1.5 mb-5">
              <label className="text-[12.5px] font-medium text-slate-700">
                Roles &amp; notes
              </label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={4}
                placeholder="e.g. 2x GP (FT) metro + 1x RN (aged care) regional; start 4 weeks; facility credentialing required."
                className="border border-slate-200 rounded-md px-3 py-2.5 text-[13px] text-slate-700 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition resize-none"
              />
            </div>

            {/* Checkboxes */}
            <div className="flex flex-col gap-3 mb-6">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  name="termsAgreed"
                  checked={form.termsAgreed}
                  onChange={handleChange}
                  className="mt-0.5 w-4 h-4 accent-blue-800 cursor-pointer shrink-0"
                />
                <span className="text-[12.5px] text-slate-600 leading-relaxed">
                  I confirm that I have read and agree to the{" "}
                  <a href="#" className="text-blue-700 underline hover:text-blue-900">Terms of Use</a>
                  {" "}and{" "}
                  <a href="#" className="text-blue-700 underline hover:text-blue-900">Privacy Policy.</a>
                </span>
              </label>
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  name="subscribeAlert"
                  checked={form.subscribeAlert}
                  onChange={handleChange}
                  className="w-4 h-4 accent-blue-800 cursor-pointer shrink-0"
                />
                <span className="text-[12.5px] text-slate-600">Subscribe for Job Alert</span>
              </label>
            </div>

            {/* Submit */}
            <button className="w-full py-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold text-[14px] rounded-md transition-colors duration-200">
              Submit &amp; Request Proposal
            </button>
          </div>

          {/* ── Right: Info Panel ── */}
          <div className="w-full lg:w-[360px] shrink-0 flex flex-col gap-4">

            {/* What you receive */}
            <div className="bg-white border border-slate-200 rounded-xl px-6 py-6">
              <p className="text-[14.5px] font-bold text-blue-900 mb-4">
                What you receive
              </p>
              <ul className="flex flex-col gap-2.5">
                {whatYouReceive.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span className="text-[13px] text-slate-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prefer direct contact */}
            <div className="bg-white border border-slate-200 rounded-xl px-6 py-5">
              <p className="text-[14px] font-bold text-slate-900 mb-3.5">
                Prefer direct contact?
              </p>
              <div className="flex flex-col gap-1.5 mb-5">
                {[
                  ["Hotline:", "1300 633 388"],
                  ["WhatsApp:", "+61 452 668 811"],
                  ["International:", "+61 452 668 811"],
                  ["Email:", "candidateservices@medfuture.com.au"],
                ].map(([label, value]) => (
                  <p key={label} className="text-[12.5px] text-slate-600">
                    <span className="font-medium">{label}</span> {value}
                  </p>
                ))}
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2.5 border border-slate-200 rounded-md text-[13px] font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                  Services
                </button>
                <button className="flex-1 py-2.5 bg-blue-900 hover:bg-blue-800 rounded-md text-[13px] font-semibold text-white transition-colors">
                  Why Medfuture
                </button>
              </div>
            </div>

            {/* Multi-site employer */}
            <div className="bg-white border border-slate-200 rounded-xl px-6 py-5">
              <p className="text-[14px] font-bold text-slate-900 mb-2">
                Multi-site employer?
              </p>
              <p className="text-[12.5px] text-slate-500 leading-relaxed mb-4">
                Ask about Workforce Partnership (retained) for priority SLAs and predictable hiring.
              </p>
              <button className="px-4 py-2.5 bg-slate-700 hover:bg-slate-600 text-white text-[13px] font-semibold rounded-md transition-colors">
                Explore Partnership
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}