"use client";
import { useState } from "react";
import CandidateForm from "@/components/Signup/CandidateForm";
import EmployerForm from "@/components/Signup/EmployerForm";

export default function RegistrationForm() {
  const [activeTab, setActiveTab] = useState<"candidate" | "employer">("candidate");

  return (
    <div className="min-h-screen py-12 px-4">
      <h1 className="text-center text-[#0F172A] lg:text-[48px] text-2xl lg:mb-[69px] mb-5">
        Registration
      </h1>
      <div className="lg:w-[930px] mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Tabs */}
        <div className="flex">
          <button
            onClick={() => setActiveTab("candidate")}
            className={`flex-1 py-4 cursor-pointer font-medium transition-colors ${activeTab === "candidate"
                ? "bg-[#575D84] text-white text-[18px]"
                : "bg-gray-100 text-black text-[18px]"
              }`}
          >
            Candidate
          </button>

          <button
            onClick={() => setActiveTab("employer")}
            className={`flex-1 py-4  cursor-pointer font-medium transition-colors ${activeTab === "employer"
                ? "bg-[#0A2E5C] text-white text-[18px]"
                : "bg-gray-100 text-black text-[18px]"
              }`}
          >
            Employer
          </button>
        </div>

        <div className="p-8">
          {activeTab === "candidate" ? (
            <CandidateForm />
          ) : (
            <EmployerForm />
          )}
        </div>
      </div>
    </div>
  );
}