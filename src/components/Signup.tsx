"use client";
import { useState } from "react";
import CandidateForm from "@/components/Signup/CandidateForm";
import EmployerForm from "@/components/Signup/EmployerForm";

export default function RegistrationForm() {
  const [activeTab, setActiveTab] = useState<"candidate" | "employer">("candidate");
  const [showEmailForm, setShowEmailForm] = useState(false);

  const [formData, setFormData] = useState({
    // Candidate
    firstName: "",
    lastName: "",
    profession: "",
    specialty: "",
    country: "",
    state: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    whereDidYouHear: "",
    agreeToTerms: false,
    subscribeToJobAlert: false,

    // Employer
    companyName: "",
    companySize: "",
    industry: "",
    companyEmail: "",
    companyPhone: "",
    officeLocation: "",
    employerPassword: "",
    employerConfirmPassword: "",
    agreeToTermsEmployer: false,
    newsAndUpdates: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, type } = e.target;
    const value = type === "checkbox"
      ? (e.target as HTMLInputElement).checked
      : e.target.value;

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
    <div className="min-h-screen  py-12 px-4">
      <h1 className="text-center text-[#0F172A] lg:text-[48px] text-2xl lg:mb-[69px] mb-5">Registration</h1>
      <div className="lg:w-[930px] mx-auto bg-white rounded-lg shadow-lg overflow-hidden">

        {/* Tabs */}
        <div className="flex" >
          <button
            onClick={() => { setActiveTab("candidate"); setShowEmailForm(false); }}
            className={`flex-1 py-4 ${activeTab === "candidate" ? "bg-[#575D84] text-white text-[18px]" : "bg-gray-100"}`}
          >
            Candidate
          </button>

          <button   
disabled
            onClick={() => { setActiveTab("employer"); setShowEmailForm(true); }}
            className={`flex-1 py-4 ${activeTab === "employer" ? "bg-[#0A2E5C]    text-white" : "bg-gray-100 text-black font-[500] text-[18px] cursor-not-allowed"}`}
          >
            Employer
          </button>
        </div>

        <div className="p-8">
          {activeTab === "candidate" ? (
            <CandidateForm
            />
          ) : (
            <EmployerForm
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
}
