"use client";

import { useState } from "react";

interface FormData {
  organisation: string;
  state: string;
  preferredStartDate: string;
  division: string;
  urgency: string;
  notes: string;
  agreed: boolean;
}

export default function EmployerEnquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    organisation: "",
    state: "",
    preferredStartDate: "",
    division: "",
    urgency: "",
    notes: "",
    agreed: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="border border-slate-200 rounded-lg p-6 bg-white shadow-sm w-full">
      {/* Header */}
      <p className="text-xs text-slate-500 font-medium mb-1.5">Fast employer enquiry</p>
      <h2 className="text-[17px] font-bold text-slate-900 leading-snug mb-1.5">
        Route your request to the right division
      </h2>
      <p className="text-[13px] text-slate-500 leading-relaxed mb-5">
        Tell us the discipline, location and urgency. We will respond with options and the right
        specialist team.
      </p>

      {/* Organisation */}
      <input
        type="text"
        name="organisation"
        placeholder="Organisation / Practice name*"
        value={formData.organisation}
        onChange={handleChange}
        className="w-full px-3 py-2.5 border border-slate-300 rounded-md text-[13.5px] text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 mb-2.5"
      />

      {/* State + Date row */}
      <div className="flex gap-2 mb-2.5">
        <input
          type="text"
          name="state"
          placeholder="State*"
          value={formData.state}
          onChange={handleChange}
          className="flex-1 px-3 py-2.5 border border-slate-300 rounded-md text-[13.5px] text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900"
        />
        <div className="relative flex-1">
          <input
            type="date"
            name="preferredStartDate"
            value={formData.preferredStartDate}
            onChange={handleChange}
            className="w-full px-3 py-2.5 border border-slate-300 rounded-md text-[13.5px] text-slate-400 outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900"
          />
        </div>
      </div>

      {/* Division + Urgency row */}
      <div className="flex gap-2 mb-2.5">
        <div className="relative flex-1">
          <select
            name="division"
            value={formData.division}
            onChange={handleChange}
            className="w-full appearance-none px-3 py-2.5 pr-8 border border-slate-300 rounded-md text-[13.5px] text-slate-400 outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 bg-white cursor-pointer"
          >
            <option value="" disabled>Division</option>
            <option value="general-practice">General Practice</option>
            <option value="allied-health">Allied Health</option>
            <option value="mental-health">Mental Health</option>
            <option value="dental">Dental</option>
            <option value="pharmacy">Pharmacy</option>
          </select>
          <ChevronIcon />
        </div>
        <div className="relative flex-1">
          <select
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            className="w-full appearance-none px-3 py-2.5 pr-8 border border-slate-300 rounded-md text-[13.5px] text-slate-400 outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 bg-white cursor-pointer"
          >
            <option value="" disabled>Urgency</option>
            <option value="immediate">Immediate</option>
            <option value="within-1-month">Within 1 month</option>
            <option value="within-3-months">Within 3 months</option>
            <option value="planning-ahead">Planning ahead</option>
          </select>
          <ChevronIcon />
        </div>
      </div>

      {/* Notes */}
      <textarea
        name="notes"
        placeholder="Notes"
        value={formData.notes}
        onChange={handleChange}
        rows={3}
        className="w-full px-3 py-2.5 border border-slate-300 rounded-md text-[13.5px] text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 resize-y min-h-[72px] mb-2.5"
      />

      {/* Terms */}
      <div className="flex items-start gap-2.5 mb-5">
        <input
          type="checkbox"
          name="agreed"
          id="terms"
          checked={formData.agreed}
          onChange={handleChange}
          className="mt-0.5 w-4 h-4 accent-blue-900 cursor-pointer shrink-0"
        />
        <label htmlFor="terms" className="text-[12.5px] text-slate-500 leading-relaxed">
          I Agree to the{" "}
          <a href="#" className="text-blue-800 hover:underline">Term and Conditions</a>{" "}
          and{" "}
          <a href="#" className="text-blue-800 hover:underline">Privacy Policy</a>{" "}
          at Medfuture
        </label>
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        className="w-full py-3.5 bg-blue-900 hover:bg-blue-800 text-white font-semibold text-[15px] rounded-md transition-colors duration-200 cursor-pointer"
      >
        Submit
      </button>
    </div>
  );
}

function ChevronIcon() {
  return (
    <svg
      className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4 text-slate-500"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}