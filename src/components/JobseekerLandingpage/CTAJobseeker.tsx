"use client";

import JobSeekerForm from "@/components/Forms/JobSeekerandEmployerform/JobSeekerFrom";
import Link from "next/link";

export default function CTAJobseeker() {
  return (
    <section className="w-full py-20 px-4 lg:px-0 bg-gradient-to-br from-[#0B3264] via-[#0B3264] to-[#1B62B4] full-width-section">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(200px,0.85fr)_minmax(300px,1.35fr)] inner-width-section gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h2 className="text-2xl text-white lg:text-[32px] font-bold">
            Ready to Take the Next Step in Your Healthcare Career?
          </h2>

          <p className="text-[#FCFCFC] lg:text-[16px] text-xs">
            Find jobs, upload your CV to discover new opportunities. You can also talk to a consultant,
            refer a friend, or request a callback using the form.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Link href="/contact-us" className="px-6 py-3 bg-white text-[#074CA4] rounded-lg font-medium text-center cursor-pointer">
              Talk to a Consultant
            </Link>

            {/* <button className="px-6 py-3 bg-white text-[#074CA4] rounded-lg font-medium cursor-pointer">
              Upload a CV
            </button> */}

            {/* <button className="px-6 py-3 bg-white text-[#074CA4] rounded-lg font-medium cursor-pointer col-span-2">
              Refer a Friend
            </button> */}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="shadow-lg rounded-lg bg-white">
          <div className="px-[30px] py-[25px]">
            <JobSeekerForm />
          </div>
        </div>

      </div>
    </section>
  );
}
