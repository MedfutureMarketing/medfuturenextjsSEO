'use client';

import { useState, useRef } from "react";
import RegistrationForm from '@/components/Forms/QuickApplySingleJob';

export default function ApplyButton() {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleApplyNow = () => {
    const wasClosed = !showRegistrationForm;
    setShowRegistrationForm(!showRegistrationForm);

    if (wasClosed) {
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  };

  return (
    <>
      {!showRegistrationForm && (
        <button
          onClick={handleApplyNow}
          className="bg-[#074CA4] text-white w-[194px] px-6 py-3 cursor-pointer rounded-[4px] hover:bg-[#55b8e0] transition-colors font-medium"
        >
          Apply Now
        </button>
      )}

      {showRegistrationForm && (
        <div ref={formRef} className="mt-6 lg:mt-0 lg:shadow-[0_0_12px_rgba(0,0,0,0.1)] border-[#66768F]/16 mb-36 w-full">
          <RegistrationForm onClose={() => setShowRegistrationForm(false)} />
        </div>
      )}
    </>
  );
}