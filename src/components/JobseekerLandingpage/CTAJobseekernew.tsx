"use client";

import JobSeekerForm from "@/components/Forms/JobSeekerandEmployerform/JobSeekerFrom";
import Link from "next/link";

export default function CTAJobseeker() {
  return (
    <section className="w-full flex items-center bg-white/10 justify-center">
      <div className="w-full ">
        {/* FORM CONTENT */}
        <div className=" rounded-lg bg-white/10">
          <div className="lg:px-[30px] py-[25px]">
            <JobSeekerForm />
          </div>
        </div>
      </div>
    </section>
  );
}