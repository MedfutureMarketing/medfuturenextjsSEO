"use client";

import { useRef, useState } from "react";
import RegistrationForm from "@/components/Forms/QuickApplySingleJob";
import Link from "next/link";
import Image from "next/image";

import Permenentico from "@/assets/jobboardico/Permanentico.png";
import Doctorico from "@/assets/jobboardico/Doctorico.png";
import Moneyico from "@/assets/jobboardico/Moneyico.png";
import Timeico from "@/assets/jobboardico/Timeico.png";
import Jobboard1 from "@/assets/homeico/jobboard1.png";
import Jobbaord2 from "@/assets/homeico/jobboard2.png";

/* ================= TYPES ================= */

type JobHighlight = {
  jobhighlights_id: number;
  name: string;
};

type Job = {
  job_id: number;
  job_title: string;
  profession?: { name: string };
  engagement_type?: { name: string };
  country?: { name: string };
  state?: { name: string };
  job_brief?: string;
  medical_practise_details?: string;
  required_qualification_exp?: string;
  highlights?: JobHighlight[];
  first_contact_person_name?: string;
  first_contact_number?: string;
  email?: string;
};

interface Props {
  job: Job;
}

export default function JobDescriptionClient({ job }: Props) {
  const formRef = useRef<HTMLDivElement>(null);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

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
    <div className="rounded-8px relative">
      {/* Header */}
      <div className="full-width-section bg-[#0A2E5C] lg:h-[113px]">
        <div className="absolute left-0 z-0 lg:block hidden bottom-0 w-[182px] h-[182px] pointer-events-none">
          <Image
            src={Jobboard1}
            alt="Decorative left corner"
            fill
            className="object-contain object-bottom-left"
            priority
          />
        </div>

        <div className="absolute lg:block hidden z-0 right-0 bottom-0 w-32 h-32 pointer-events-none">
          <Image
            src={Jobbaord2}
            alt="Decorative right corner"
            fill
            className="object-contain object-bottom-right"
            priority
          />
        </div>

        <div className="flex inner-width-section py-[16px]">
          <h1 className="text-[18px] lg:text-[24px] font-bold text-white">
            {job.job_title}
          </h1>
        </div>

        <div className="absolute top-0 right-0 px-4">
          <Link href="/job" className="hover:underline">
            Back
          </Link>
        </div>
      </div>

      {/* Tags */}
      <div className="inner-width-section px-4 mt-4 flex flex-wrap gap-3">
        <span>
          <Image src={Permenentico} alt="Permanent" className="inline-block" /> Permanent
        </span>
        <span>
          <Image src={Doctorico} alt="Doctor" className="inline-block" /> {job.profession?.name}
        </span>
        <span>
          <Image src={Moneyico} alt="Money" className="inline-block" /> {job.engagement_type?.name}
        </span>
        <span>
          <Image src={Timeico} alt="Time" className="inline-block" /> {job.state?.name}, {job.country?.name}
        </span>
      </div>

      {/* Description */}
      <div className="prose max-w-none px-4 mt-6">
        <p>{job.job_brief}</p>

        <h4>Offer Details:</h4>
        <ul>
          {job.highlights?.map((h) => (
            <li key={h.jobhighlights_id}>{h.name}</li>
          ))}
        </ul>

        <h4>Medical Practice Details</h4>
        <p>{job.medical_practise_details}</p>

        <h4>Eligibility Requirements</h4>
        <ul>
          {(job.required_qualification_exp ?? "")
            .split(/\r?\n/)
            .map((item, i) => (
              <li key={i}>{item}</li>
            ))}
        </ul>
      </div>

      {/* Apply Section */}
      <div className="px-4 mt-6">
        {!showRegistrationForm && (
          <button
            onClick={handleApplyNow}
            className="bg-[#074CA4] text-white px-6 py-3 rounded"
          >
            Apply Now
          </button>
        )}
      </div>

      {showRegistrationForm && (
        <div ref={formRef} className="mt-6">
          <RegistrationForm onClose={() => setShowRegistrationForm(false)} />
        </div>
      )}
    </div>
  );
}
