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

function ChevronIcon() {
  return (
    <svg
      className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4 text-slate-400"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4 text-slate-400"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

const fieldClass =
  "w-full px-3 py-2.5 border border-slate-200 rounded-lg lg:text-[13.5px] text-xs text-slate-700 placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-800/15 focus:border-blue-700 bg-white transition";

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
    <div className="border border-slate-200 rounded-2xl p-6 bg-[#F8FAFC] shadow-sm w-full">

      {/* Header */}
      <p className="lg:text-[12px] text-xs text-slate-500 font-medium mb-1.5">
        Fast employer enquiry
      </p>
      <h2 className="lg:text-[16px]  text-md font-[600] text-slate-900 leading-snug mb-2">
        Route your request to the right division
      </h2>
      <p className="lg:text-[13px] text-xs text-slate-500 leading-relaxed mb-5">
        Tell us the discipline, location and urgency. We will respond with options
        and the right specialist team.
      </p>

      <div className="flex flex-col gap-3">

        {/* Organisation */}
        <input
          type="text"
          name="organisation"
          placeholder="Organisation / Practice name*"
          value={formData.organisation}
          onChange={handleChange}
          className={fieldClass}
        />

        {/* State + Preferred Start Date */}
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            name="state"
            placeholder="State*"
            value={formData.state}
            onChange={handleChange}
            className={fieldClass}
          />
          <div className="relative">
            <input
              type="text"
              name="preferredStartDate"
              placeholder="Preferred start date"
              value={formData.preferredStartDate}
              onChange={handleChange}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => {
                if (!e.target.value) e.target.type = "text";
              }}
              className={`${fieldClass} pr-9`}
            />
            <CalendarIcon />
          </div>
        </div>

        {/* Division + Urgency */}
        <div className="grid grid-cols-2 gap-3">
          <div className="relative">
            <select
              name="division"
              value={formData.division}
              onChange={handleChange}
              className={`${fieldClass} appearance-none pr-9 cursor-pointer`}
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
          <div className="relative">
            <select
              name="urgency"
              value={formData.urgency}
              onChange={handleChange}
              className={`${fieldClass} appearance-none pr-9 cursor-pointer`}
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
          className={`${fieldClass} resize-none`}
        />

      </div>

      {/* Terms */}
      <div className="flex items-start gap-2.5 mt-4 mb-5">
        <input
          type="checkbox"
          name="agreed"
          id="terms"
          checked={formData.agreed}
          onChange={handleChange}
          className="mt-0.5 w-4 h-4 accent-blue-900 cursor-pointer shrink-0 rounded"
        />
        <label htmlFor="terms" className="text-[12.5px] text-slate-500 leading-relaxed cursor-pointer">
          I Agree to the{" "}
          <a href="#" className="text-blue-700 hover:underline font-medium">Term and Conditions</a>
          {" "}and{" "}
          <a href="#" className="text-blue-700 hover:underline font-medium">Privacy Policy</a>
          {" "}at Medfuture
        </label>
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        className="w-full py-3.5 bg-blue-900 hover:bg-blue-800 text-white font-semibold text-[14.5px] rounded-xl transition-colors duration-200 cursor-pointer"
      >
        Submit
      </button>

    </div>
  );
}