"use client";
import { useState } from "react";
import CandidateForm from "@/components/Signup/CandidateForm";
import SignInForm from "@/components/SignInForm";

type TabType = "signin" | "candidate" | "employer";

export default function RegistrationForm() {
  const [activeTab, setActiveTab] = useState<TabType>("signin");

  const isSignIn = activeTab === "signin";

  return (
    <div className="min-h-screen full-width-section flex bg-white overflow-hidden">
      {/* LEFT PANEL */}
      <Panel
        isActive={isSignIn}
        type="left"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* RIGHT PANEL */}
      <Panel
        isActive={!isSignIn}
        type="right"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
}

/* ---------------- PANEL COMPONENT ---------------- */

function Panel({
  isActive,
  type,
  activeTab,
  setActiveTab,
}: {
  isActive: boolean;
  type: "left" | "right";
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}) {
  const isSignIn = activeTab === "signin";

  const baseClasses =
    "absolute lg:static top-0 h-[1500px] w-full lg:w-1/2 transition-all duration-700 ease-out flex px-6 lg:px-12 py-12";

  const blueBg = "bg-gradient-to-br from-[#0A3B6E] to-[#1a5a9a]";
  const whiteBg = "bg-white";

  const showWhite = type === "left" ? isSignIn : !isSignIn;

  return (
    <div className={`${baseClasses} ${showWhite ? whiteBg : blueBg}`}>
      {!showWhite && <Decorations />}

      <div className="relative z-20 w-full max-w-md">
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
      <h2 className="text-3xl lg:text-4xl font-bold text-[#0A2E5C] mb-6">
        Sign In
      </h2>

      <div className="animate-fade-in">
        <SignInForm />
      </div>

      <p className="mt-8 text-center text-gray-600 text-sm">
        Don&apos;t have an account?{" "}
        <button
          onClick={() => setActiveTab("candidate")}
          className="text-[#0A2E5C] font-semibold hover:underline"
        >
          Register
        </button>
      </p>
    </>
  );
}

function WelcomeRegister({ setActiveTab }: SectionProps) {
  return (
    <div className="text-center text-white">
      <h2 className="text-4xl lg:text-5xl font-bold mb-6">Hey There!</h2>
      <p className="text-white/80 mb-10">
        Start your journey by creating an account
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => setActiveTab("candidate")}
          className="btn-outline-white cursor-pointer"
        >
          Candidate
        </button>
        <button
          onClick={() => setActiveTab("employer")}
          className="btn-outline-white cursor-pointer"
        >
          Employer
        </button>
      </div>
    </div>
  );
}

function WelcomeBack({ setActiveTab }: SectionProps) {
  return (
    <div className="text-center text-white">
      <h2 className="text-4xl lg:text-5xl font-bold mb-6">
        Welcome Back!
      </h2>
      <p className="text-white/80 mb-10">
        Login to continue your experience
      </p>

      <button
        onClick={() => setActiveTab("signin")}
        className="btn-outline-white cursor-pointer"
      >
        Sign In
      </button>
    </div>
  );
}

function RegisterSection({ activeTab, setActiveTab }: RegisterSectionProps) {
  return (
    <>
      <h2 className="text-3xl lg:text-4xl font-bold text-[#0A2E5C] mb-6">
        Create Account
      </h2>

      <div className="animate-fade-in">
        {activeTab === "candidate" ? (
          <CandidateForm />
        ) : (
          <div>Employer Form (TODO)</div>
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
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
    </div>
  );
}