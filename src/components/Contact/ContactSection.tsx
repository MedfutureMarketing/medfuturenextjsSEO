"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Callico from "@/assets/homeico/Callico.png";
import EmailIco from "@/assets/homeico/Emailico.png";
import { apiPost } from "@/lib/api";
import { useCallback } from "react";

type Contact = {
  title: string;
  phone: string;
  email: string;
};

const contacts: Contact[] = [
  {
    title: "GP Metro",
    email: "gprecruitment@medfuture.com.au",
    phone: "+61 489 071 766",
  },
  {
    title: "Rural Unit",
    email: "simg@medfuture.com.au",
    phone: "+61 483 980 588",
  },
  {
    title: "Locum Unit (PLGP)",
    email: "ahp@medfuture.com.au",
    phone: "+61 483 965 759",
  },
  {
    title: "Allied Health Unit",
    email: "ahp@medfuture.com.au",
    phone: "+61 483 965 759",
  },
  {
    title: "Mental and Oral Health Unit",
    email: "nursing@medfuture.com.au",
    phone: "+61 483 957 757",
  },
  {
    title: "SIMG Unit",
    email: "helpdesk@medfuture.com.au",
    phone: "1300 633 388",
  },
  {
    title: "Visa Unit",
    email: "ahp@medfuture.com.au",
    phone: "+61 483 965 759",
  },
  {
    title: "New Zealand Unit",
    email: "nursing@medfuture.com.au",
    phone: "+61 483 957 757",
  },
];

type EnquiryForm = {
  name: string;
  email: string;
  mobile: string;
  message: string;
};

export default function ContactSection() {
  const [formData, setFormData] = useState<EnquiryForm>({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  /* 🔹 ADDED: form errors */
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  /* 🔹 ADDED: click flag (same pattern as EnquiryNow) */
  const [click, setClick] = useState(false);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* 🔹 ADDED: validation logic */
 const validateForm = useCallback(() => {
  const errors = {
    name: !formData.name ? "Please enter your name" : "",
    email: !formData.email ? "Please enter your email address" : "",
    mobile: !formData.mobile ? "Please enter your phone number" : "",
    message: !formData.message ? "Please submit your enquiry" : "",
  };

  setFormErrors(errors);
  return errors;
}, [formData]);


  /* 🔹 ADDED: revalidate on change after submit click */
useEffect(() => {
  if (click) validateForm();
}, [formData, click, validateForm]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setClick(true);

    const errors = validateForm();
    if (Object.values(errors).some(Boolean)) return;

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await apiPost("web/enquiries/save", {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        message: formData.message,
        page_type: "contact_page",
      });

      setSuccess("Your enquiry has been submitted successfully.");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });
      setClick(false);
    } catch (err: unknown) {
        if (err instanceof Error) {
            setError(err.message);
        } else {
            setError("Something went wrong. Please try again.");
        }
    }};

  const columns = 3;
  const rows = Math.ceil(contacts.length / columns);

  return (
    <section className="max-w-6xl mx-auto lg:px-6 py-16">
      {/* CONTACT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {contacts.map((contact, index) => {
          const col = index % columns;
          const row = Math.floor(index / columns);

          return (
            <div
              key={index}
              className={[
                "p-6",
                "border-dotted border-slate-400",
                col !== columns - 1 ? "md:border-r" : "",
                row !== rows - 1 ? "border-b" : "",
              ].join(" ")}
            >
              <h3 className="lg:text-[20px] text-lg text-[#040D48] font-semibold mb-2">
                {contact.title}
              </h3>

              <p className="text-[#4A5565] lg:text-[14px] text-sm gap-2 font-medium flex">
                <Image src={EmailIco} alt="" /> {contact.email}
              </p>

              <p className="text-[#4A5565] lg:text-[14px] text-sm gap-2 mt-2 font-medium flex">
                <Image src={Callico} alt="" /> {contact.phone}
              </p>
            </div>
          );
        })}
      </div>

      {/* ENQUIRY FORM (UI UNCHANGED) */}
      <div className="mt-16 bg-gray-50 full-width-section">
        <div className="inner-width-section flex justify-center py-16">
          <div className="w-full max-w-lg text-[#0F172A] bg-white mx-auto p-8 rounded-xl shadow-sm">
            <h2 className="text-[36px] text-[#040D48] font-semibold mb-6 text-center">
              Enquiry Now
            </h2>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-6"
              noValidate
            >
              <label className="block lg:text-[14px] text-sm font-medium">
                Name
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-md border border-[#E2E8F0] bg-[#FCFCFC] px-4 lg:py-[20px] py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
              {formErrors.name && (
                <p className="text-red-500 text-sm">{formErrors.name}</p>
              )}

              <label className="block lg:text-[14px] text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-md border  border-[#E2E8F0] bg-[#FCFCFC] px-4 lg:py-[20px] py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm">{formErrors.email}</p>
              )}

              <label className="block lg:text-[14px] text-sm font-medium">
                Phone
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="+61"
                className="w-full rounded-md border border-[#E2E8F0] bg-[#FCFCFC] px-4 lg:py-[20px] py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
              {formErrors.mobile && (
                <p className="text-red-500 text-sm">{formErrors.mobile}</p>
              )}

              <label className="block lg:text-[14px] text-sm font-medium">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows={4}
                className="w-full rounded-md border border-[#E2E8F0] bg-[#FCFCFC] px-4 lg:py-[20px] focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
              {formErrors.message && (
                <p className="text-red-500 text-sm">{formErrors.message}</p>
              )}

              {error && <p className="text-red-500 text-sm">{error}</p>}
              {success && <p className="text-green-600 text-sm">{success}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-md bg-slate-800 px-6 py-3 text-white hover:bg-slate-700 transition"
              >
                {loading ? "Submitting..." : "Submit Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
