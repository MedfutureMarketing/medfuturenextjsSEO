"use client";

import { useState, useEffect, useCallback } from "react";
import { API_BASE_URL } from "@/lib/api";

const whatYouReceive = [
  "Service scope (perm / locum-temp / partnership)",
  "Credentialing approach tailored to your facility",
  "SLAs, update cadence and escalation pathway",
  "Commercials (transparent, defensible)",
];

interface FormData {
  organization: string;
  email: string;
  recruitmentType: string;
  state: string;
  notes: string;
  termsAgreed: boolean;
  subscribeAlert: boolean;
}

interface FormErrors {
  organization?: string;
  email?: string;
  termsAgreed?: string;
}

interface States {
  state_id: number;
  name: string;
}

interface JobTypes {
  id: number;
  name: string;
}

function ChevronDown() {
  return (
    <svg
      className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#94a3b8"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function ServiceProposalSection() {
  const [form, setForm] = useState<FormData>({
    organization: "",
    email: "",
    recruitmentType: "",
    state: "",
    notes: "",
    termsAgreed: false,
    subscribeAlert: false,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [states, setStates] = useState<States[]>([]);
  const [jobTypes, setJobTypes] = useState<JobTypes[]>([]);

  useEffect(() => {
      const fetchStates = async () => {
        try {
          const response = await fetch(`${API_BASE_URL}/web/states/get-all`, {
            headers: {
              accept: "application/json",
            },
          });

          const data = await response.json();

          setStates(data);
        } catch (error) {
          console.error("Failed to fetch states", error);
        }
      };

      fetchStates();
    }, []);

    useEffect(() => {
      const fetchJobTypes = async () => {
        try {
          const response = await fetch(`${API_BASE_URL}/web/job_type/get-all`, {
            headers: {
              accept: "application/json",
            },
          });

          const data = await response.json();

          setJobTypes(data);
        } catch (error) {
          console.error("Failed to fetch job types", error);
        }
      };

      fetchJobTypes();
    }, []);

  /* ================= VALIDATION ================= */

  const validateForm = useCallback(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const errors: FormErrors = {
      organization: !form.organization
        ? "Organisation name is required"
        : "",
      email: !form.email
        ? "Email is required"
        : !emailRegex.test(form.email)
        ? "Please enter a valid email"
        : "",
      termsAgreed: !form.termsAgreed
        ? "You must agree to the Terms of Use and Privacy Policy"
        : "",
    };

    setFormErrors(errors);
    return errors;
  }, [form]);

  useEffect(() => {
    if (touched) validateForm();
  }, [form, touched, validateForm]);

  /* ================= INPUT CHANGE ================= */

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const target = e.target;
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;
    setForm((prev) => ({ ...prev, [target.name]: value }));
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setTouched(true);

    const errors = validateForm();
    if (Object.values(errors).some((error) => error)) return;

    try {
      setLoading(true);

      const response = await fetch(
        `${API_BASE_URL}/web/employer-enquiries/save`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify({
            organization_name: form.organization,
            email: form.email,
            recruitment_type: form.recruitmentType
              ? Number(form.recruitmentType)
              : null,
            state: form.state ? Number(form.state) : null,
            roles_and_notes: form.notes || null,
            terms_and_conditions: form.termsAgreed,
            job_alert: form.subscribeAlert,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit enquiry");
      }

      await response.json();

      alert("Enquiry submitted successfully!");

      setForm({
        organization: "",
        email: "",
        recruitmentType: "",
        state: "",
        notes: "",
        termsAgreed: false,
        subscribeAlert: false,
      });

      setTouched(false);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full border border-slate-200 rounded-md px-3 py-2.5 text-[13px] text-slate-700 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition bg-white";

  return (
    <section className="full-width-section bg-[#f0f2f5] font-sans py-14 mt-[140px]">
      <div className="inner-width-section mx-auto px-4 sm:px-8 lg:px-16">

        {/* Header */}
        <p className="text-[13px] font-semibold text-blue-700 mb-2.5">
          Request Proposal
        </p>
        <h2 className="text-xl lg:text-[38px] font-600 text-slate-900 mb-3 leading-tight">
          Get a tailored service proposal
        </h2>
        <p className="text-[14px] text-slate-500 mb-10 max-w-3xl">
          Send your role list and locations. We reply with service scope,
          credentialing approach, SLAs and commercials.
        </p>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-5 items-start">

          {/* ── Left: Form Card ── */}
          <div className="flex-1 min-w-0 bg-white border border-slate-200 rounded-[8px] px-8 py-8">
            <h3 className="text-[18px] font-bold text-slate-900 mb-7">
              Employer enquiry
            </h3>

            {/* Row 1: Organization + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[12.5px] font-medium text-slate-600">
                  Organization*
                </label>
                <input
                  type="text"
                  name="organization"
                  value={form.organization}
                  onChange={handleChange}
                  placeholder="e.g. ABC Medical Group"
                  className={inputClass}
                />
                {formErrors.organization && touched && (
                  <span className="text-red-500 text-xs">
                    {formErrors.organization}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12.5px] font-medium text-slate-600">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@organization.com"
                  className={inputClass}
                />
                {formErrors.email && touched && (
                  <span className="text-red-500 text-xs">
                    {formErrors.email}
                  </span>
                )}
              </div>
            </div>

            {/* Row 2: Recruitment Type + State */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[12.5px] font-medium text-slate-600">
                  Recruitment Type
                </label>
                <div className="relative">
                  <select
                    name="recruitmentType"
                    value={form.recruitmentType}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none pr-9 cursor-pointer ${
                      !form.recruitmentType ? "text-slate-400" : "text-slate-700"
                    }`}
                  >
                    <option value="">Select an option</option>
                    {jobTypes.map((jt) => (
                      <option key={jt.id} value={jt.id}>
                        {jt.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12.5px] font-medium text-slate-600">
                  State/Territory
                </label>
                <div className="relative">
                  <select
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none pr-9 cursor-pointer ${
                      !form.state ? "text-slate-400" : "text-slate-700"
                    }`}
                  >
                    <option value="">Select an option</option>
                    {states.map((s) => (
                      <option key={s.state_id} value={s.state_id}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown />
                </div>
              </div>
            </div>

            {/* Roles & Notes */}
            <div className="flex flex-col gap-1.5 mb-6">
              <label className="text-[12.5px] font-medium text-slate-600">
                Roles &amp; notes
              </label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={4}
                placeholder="e.g. 2x GP (FT) metro + 1x RN (aged care) regional; start 4 weeks; facility credentialing required."
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Divider */}
            <div className="border-t border-slate-100 mb-5" />

            {/* Checkboxes */}
            <div className="flex flex-col gap-3 mb-7">
              <div>
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    name="termsAgreed"
                    checked={form.termsAgreed}
                    onChange={handleChange}
                    className="mt-0.5 w-4 h-4 accent-blue-800 cursor-pointer shrink-0"
                  />
                  <span className="text-[12.5px] text-slate-500 leading-relaxed">
                    I confirm that I have read and agree to the{" "}
                    <a
                      href="#"
                      className="text-blue-700 underline hover:text-blue-900"
                    >
                      Terms of Use
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-blue-700 underline hover:text-blue-900"
                    >
                      Privacy Policy.
                    </a>
                  </span>
                </label>
                {formErrors.termsAgreed && touched && (
                  <span className="text-red-500 text-xs ml-6.5 mt-1 block">
                    {formErrors.termsAgreed}
                  </span>
                )}
              </div>

              <label className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  name="subscribeAlert"
                  checked={form.subscribeAlert}
                  onChange={handleChange}
                  className="w-4 h-4 accent-blue-800 cursor-pointer shrink-0"
                />
                <span className="text-[12.5px] text-slate-500">
                  Subscribe for Job Alert
                </span>
              </label>
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full py-3.5 bg-blue-900 hover:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-[14px] rounded-[4px] transition-colors duration-200"
            >
              {loading ? "Submitting..." : "Submit & Request Proposal"}
            </button>
          </div>

          {/* ── Right: Info Panel ── */}
          <div className="w-full lg:w-[480px] shrink-0 flex flex-col gap-4">

            {/* What you receive */}
            <div className="bg-white border border-slate-200 rounded-[8px] px-6 py-6">
              <p className="text-[16px] font-bold text-[#040D48] mb-4">
                What you receive
              </p>
              <ul className="flex flex-col gap-3">
                {whatYouReceive.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-[#4A5565] lg:text-[14px] leading-relaxed shrink-0">
                      •
                    </span>
                    <span className="lg:text-[14px] text-[#4A5565] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prefer direct contact */}
            <div className="bg-white border border-slate-200 rounded-[8px] px-6 py-6">
              <p className="text-[14.5px] font-bold text-slate-900 mb-4">
                Prefer direct contact?
              </p>
              <div className="flex flex-col gap-2 mb-5">
                {[
                  ["Hotline:", "1300 633 388"],
                  ["WhatsApp:", "+61 452 668 811"],
                  ["International:", "+61 452 668 811"],
                  ["Email:", "candidateservices@medfuture.com.au"],
                ].map(([label, value]) => (
                  <p key={label} className="text-[13px] text-slate-600">
                    <span className="font-semibold text-slate-700">
                      {label}
                    </span>{" "}
                    {value}
                  </p>
                ))}
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2.5 border border-slate-200 rounded-[4px] text-[13px] font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                  Services
                </button>
                <button className="flex-1 py-2.5 bg-blue-900 hover:bg-blue-800 rounded-[4px] text-[13px] font-semibold text-white transition-colors">
                  Why Medfuture
                </button>
              </div>
            </div>

            {/* Multi-site employer */}
            <div className="bg-white border border-slate-200 rounded-[8px] px-6 py-6">
              <p className="text-[14.5px] font-bold text-slate-900 mb-2">
                Multi-site employer?
              </p>
              <p className="text-[13px] text-slate-500 leading-relaxed mb-4">
                Ask about Workforce Partnership (retained) for priority SLAs
                and predictable hiring.
              </p>
              <button className="px-5 py-2.5 bg-slate-700 hover:bg-slate-600 text-white text-[13px] font-semibold rounded-[4px] transition-colors">
                Explore Partnership
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}