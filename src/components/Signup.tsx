"use client";
import { useState } from "react";
import CandidateForm from "@/components/Signup/CandidateForm";
import SignInForm from "@/components/SignInForm";
import EmployerForm from "./Forms/JobSeekerandEmployerform/EmployerForm";

type TabType = "signin" | "candidate" | "employer";

export default function RegistrationForm() {
  const [activeTab, setActiveTab] = useState<TabType>("signin");
  const [animating, setAnimating] = useState(false);
  const [displayTab, setDisplayTab] = useState<TabType>("signin");

  const handleTabChange = (tab: TabType) => {
    if (tab === activeTab || animating) return;
    setAnimating(true);
    // Phase 1: fade content out (300ms)
    setTimeout(() => {
      setDisplayTab(tab);
      setActiveTab(tab);
      // Phase 2: fade content back in (after swap)
      setTimeout(() => setAnimating(false), 600);
    }, 300);
  };

  return (
    <div className="bg-white min-h-screen full-width-section flex overflow-hidden relative w-full">
      {/* LEFT PANEL */}
      <Panel
        type="left"
        activeTab={displayTab}
        setActiveTab={handleTabChange}
        animating={animating}
      />

      {/* RIGHT PANEL */}
      <Panel
        type="right"
        activeTab={displayTab}
        setActiveTab={handleTabChange}
        animating={animating}
      />
    </div>
  );
}

/* ---------------- PANEL COMPONENT ---------------- */

function Panel({
  type,
  activeTab,
  setActiveTab,
  animating,
}: {
  type: "left" | "right";
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  animating: boolean;
}) {
  const blueBg = "bg-gradient-to-br from-[#0B3264] to-[#1B62B7]";
  const whiteBg = "bg-white";
  const showWhite = type === "left" ? activeTab === "signin" : activeTab !== "signin";

  // On mobile: only show the "form" panel, hide the decorative one
  const isFormPanel = type === "left" ? activeTab === "signin" : activeTab !== "signin";

  return (
    <div
      className={`
        relative min-h-screen flex py-8 lg:py-12
        ${isFormPanel ? "flex flex-1" : "hidden lg:flex lg:flex-1"}
        ${type === "left" ? "justify-center lg:justify-end" : "justify-center lg:justify-start"}
        ${showWhite ? whiteBg : blueBg}
        transition-colors duration-700 ease-in-out
      `}
    >
      {!showWhite && <Decorations />}

      {/* Content fades + slides up on transition */}
      <div
        className={`
          relative z-20 w-full max-w-xl px-4 sm:px-6 lg:px-10
          ${type === "left" ? "lg:mr-16" : "lg:ml-16"}
          transition-all duration-300 ease-in-out
          ${animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}
        `}
      >
        {renderContent(type, activeTab, setActiveTab)}
      </div>
    </div>
  );
}

/* ---------------- CONTENT RENDERER ---------------- */

function renderContent(
  type: "left" | "right",
  activeTab: TabType,
  setActiveTab: (tab: TabType) => void
) {
  if (activeTab === "signin") {
    return type === "left" ? (
      <SignInSection setActiveTab={setActiveTab} />
    ) : (
      <WelcomeRegister setActiveTab={setActiveTab} />
    );
  }

  return type === "left" ? (
    <WelcomeBack setActiveTab={setActiveTab} />
  ) : (
    <RegisterSection activeTab={activeTab} setActiveTab={setActiveTab} />
  );
}

/* ---------------- SECTIONS ---------------- */

interface SectionProps {
  setActiveTab: (tab: TabType) => void;
}

interface RegisterSectionProps extends SectionProps {
  activeTab: TabType;
}

function SignInSection({ setActiveTab }: SectionProps) {
  return (
    <>
      {/* Mobile-only logo/brand mark at top */}
      <div className="lg:hidden text-center mb-6">
        <h1 className="text-2xl font-bold text-[#0A2E5C]">Welcome Back!</h1>
        <p className="text-gray-500 text-sm mt-1">Sign in to continue your experience</p>
      </div>

      <div>
        <SignInForm />
      </div>

      <p className="mt-8 text-center text-gray-600 text-sm">
        Don&apos;t have an account?{" "}
        <button
          onClick={() => setActiveTab("candidate")}
          className="text-[#0A2E5C] font-semibold cursor-pointer hover:underline"
        >
          Register
        </button>
      </p>
    </>
  );
}

function WelcomeRegister({ setActiveTab }: SectionProps) {
  return (
    <div className="text-center text-white mt-36 w-full">
      <h2 className="text-4xl lg:text-[36px] font-bold mb-[24px]">Hey There!</h2>
      <p className="text-white/80 lg:text-[20px] text-xs mb-10">
        Begin your amazing journey by creating an account with us today
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={() => setActiveTab("candidate")}
          className="btn-outline-white border-[1px] rounded-[4px] text-[16px] py-[16px] px-[32px] cursor-pointer hover:bg-white/10 transition-colors duration-200"
        >
          Register as Candidate
        </button>
        <button
          onClick={() => setActiveTab("employer")}
          className="btn-outline-white border-[1px] rounded-[4px] text-[16px] py-[16px] px-[32px] cursor-pointer hover:bg-white/10 transition-colors duration-200"
        >
          Register as Employer
        </button>
      </div>
    </div>
  );
}

function WelcomeBack({ setActiveTab }: SectionProps) {
  return (
    <div className="text-center text-white mt-36">
      <h2 className="text-4xl lg:text-5xl font-bold mb-6">Welcome Back!</h2>
      <p className="text-white/80 mb-10">
        Stay connected by logging in with your credentials and continue your experience
      </p>
      <button
        onClick={() => setActiveTab("signin")}
        className="btn-outline-white border-[1px] rounded-[4px] text-[16px] py-[16px] px-[52px] cursor-pointer hover:bg-white/10 transition-colors duration-200"
      >
        Sign In
      </button>
    </div>
  );
}

function RegisterSection({ activeTab, setActiveTab }: RegisterSectionProps) {
  return (
    <>
      {/* Mobile-only back + register type toggle */}
      <div className="lg:hidden mb-4">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => setActiveTab("signin")}
            className="flex items-center gap-1 text-sm text-[#0A2E5C] font-medium hover:underline"
          >
            ← Back to Sign In
          </button>
          <div className="flex gap-2 text-sm">
            <button
              onClick={() => setActiveTab("candidate")}
              className={`px-3 py-1 rounded-full border transition-colors duration-200 ${
                activeTab === "candidate"
                  ? "bg-[#0A2E5C] text-white border-[#0A2E5C]"
                  : "text-[#0A2E5C] border-[#0A2E5C] hover:bg-[#0A2E5C]/10"
              }`}
            >
              Candidate
            </button>
            <button
              onClick={() => setActiveTab("employer")}
              className={`px-3 py-1 rounded-full border transition-colors duration-200 ${
                activeTab === "employer"
                  ? "bg-[#0A2E5C] text-white border-[#0A2E5C]"
                  : "text-[#0A2E5C] border-[#0A2E5C] hover:bg-[#0A2E5C]/10"
              }`}
            >
              Employer
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold text-[#0A2E5C] mb-6">
        Create Account
      </h2>

      <div>
        {activeTab === "candidate" ? (
          <CandidateForm />
        ) : (
          <EmployerForm />
        )}
      </div>

      <p className="mt-8 text-center text-gray-600 text-sm">
        Already have an account?{" "}
        <button
          onClick={() => setActiveTab("signin")}
          className="text-[#0A2E5C] font-semibold cursor-pointer hover:underline"
        >
          Sign In
        </button>
      </p>
    </>
  );
}

/* ---------------- DECORATIONS ---------------- */

function Decorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
    </div>
  );
}