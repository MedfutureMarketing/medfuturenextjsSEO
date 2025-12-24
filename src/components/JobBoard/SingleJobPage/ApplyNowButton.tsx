// app/job/[jobId]/ApplyNowButton.tsx
"use client";

export default function ApplyNowButton() {
  const handleApplyNow = () => {
    const formRef = document.getElementById('registration-form');
    if (formRef) {
      formRef.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <button
      onClick={handleApplyNow}
      className="bg-[#64CAF3] text-white px-6 py-3 lg:w-[160px] lg:h-[56px] rounded-lg hover:bg-[#55b8e0] transition-colors font-medium whitespace-nowrap lg:ml-4 flex-shrink-0"
    >
      Apply Now
    </button>
  );
}