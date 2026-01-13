"use client"
import { useState, useRef, useEffect } from 'react';
import RegistrationForm from '@/components/Forms/QuickApplySingleJob';
import Link from "next/link";
import React from "react";
import ProfessionIcon from '@/assets/icons/profession.png';
import SpecialtyIcon from '@/assets/icons/specialty.png';
import SeniorityIcon from '@/assets/icons/seniority.png';
import LocationIcon from '@/assets/icons/location.png';
import StartDateIcon from '@/assets/icons/startdate.png';
import EndDateIcon from '@/assets/icons/enddate.png';
import LocumPeriodIcon from '@/assets/icons/locumperiod.png';
import LocumRateIcon from '@/assets/icons/locumrateonoffer.png';
import EngagementTypeIcon from '@/assets/icons/engagementtype.png';
import EngagementModeIcon from '@/assets/icons/engagementmode.png';
import PaymentCycleIcon from '@/assets/icons/paymentcycle.png';
import AdditionalInfoIcon from '@/assets/icons/additionalinformation.png';
import jobboard3 from "@/assets/homeico/jobboard3.png"
import jobboard4 from "@/assets/homeico/jobboard4.png"
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { apiGet } from '@/lib/api';

type JobHighlight = {
    jobhighlights_id: number;
    name: string;
    label: string;
};

type Job = {
    job_id: number;
    job_title: string;
    status: number;
    commencement_date: string | null;
    profession: { name: string } | null;
    country: { name: string } | null;
    state: { name: string } | null;
    engagement_type: { name: string } | null;
    job_brief: string | null;
    medical_practise_details: string | null;
    required_qualification_exp: string | null;
    offer_details: string | null;
    highlights: JobHighlight[];
    speciality: { name: string } | null;
    seniority: { name: string } | null;
    location: { name: string } | null;
    region: { name: string } | null;
    engagement_mode: { name: string } | null;
};

// Map highlight labels to icons
import { StaticImageData } from "next/image";

const resolveHighlightIcon = (label: string): StaticImageData => {
    const text = label.toLowerCase();

    if (text.includes("profession")) return ProfessionIcon;
    if (text.includes("special")) return SpecialtyIcon; // specialty / speciality
    if (text.includes("seniority")) return SeniorityIcon;
    if (text.includes("location")) return LocationIcon;
    if (text.includes("start")) return StartDateIcon;
    if (text.includes("end")) return EndDateIcon;
    if (text.includes("period")) return LocumPeriodIcon;
    if (text.includes("rate")) return LocumRateIcon;
    if (text.includes("work type")) return EngagementTypeIcon;
    if (text.includes("engagement type")) return EngagementTypeIcon;
    if (text.includes("mode")) return EngagementModeIcon;
    if (text.includes("payment")) return PaymentCycleIcon;
    if (text.includes("additional")) return AdditionalInfoIcon;

    return ProfessionIcon; // safe fallback
};


export default function LocumJobDescription() {
    const { jobId } = useParams<{ jobId: string }>();
    const formRef = useRef<HTMLDivElement>(null);
    const [showRegistrationForm, setShowRegistrationForm] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [job, setJob] = useState<Job | null>(null);

    useEffect(() => {
        async function fetchJob() {
            try {
                const res = await apiGet<{ data: Job }>(`web/jobdetails/${jobId}`);
                setJob(res.data);
            } catch {
                setJob(null);
            }
        }
        fetchJob();
    }, [jobId]);

    const handleApplyNow = () => {
        setShowRegistrationForm(!showRegistrationForm);
        if (!showRegistrationForm && formRef.current) {
            setTimeout(() => {
                formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    };

    const handleQuickApply = () => {
        setShowForm(true);
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="">
            {/* Mobile Apply Button */}
            {/* <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 z-50 border-t">
        <button
          onClick={handleApplyNow}
          className="w-full bg-gradient-to-r from-[#141E65] to-[#151C50] text-white px-6 py-3 rounded-lg font-medium text-[18px]"
        >
          {showRegistrationForm ? 'Close Form' : 'Apply Now'}
        </button>
      </div> */}

            <div className='grid gap-6'>
                <div>
                    {/* Header */}
                    <div className='bg-[#040D48] lg:h-[123px] full-width-section mb-[30px]'>
                        <div className="absolute left-0 z-0  lg:block hidden bottom-0 w-[182px] h-[182px] md:w-48 md:h-48 lg:w-64 lg:h-64 pointer-events-none">
                            <Image
                                src={jobboard3}
                                alt="Decorative left corner"
                                fill
                                className="object-contain object-bottom-left"
                                priority
                            />
                        </div>

                        {/* Right Corner Image */}
                        <div className="absolute lg:block hidden z-0 right-0 bottom-0 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 pointer-events-none">
                            <Image
                                src={jobboard4}
                                alt="Decorative right corner"
                                fill
                                className="object-contain object-bottom-right"
                                priority
                            />
                        </div>
                        <div className="flex justify-between inner-width-section items-start p-4  lg:p-6">
                            <h1 className="text-lg lg:text-[32px] text-white font-bold pr-4 flex-1">
                                {job?.job_title}
                            </h1>
                        </div>
                    </div>

                    {/* Highlights Section */}
                    <div className="flex items-center  justify-center">
                        <div className="w-full bg-white p-4 lg:p-0">
                            <div className="grid grid-cols-2 lg:grid-cols-[auto_2fr] lg:gap-y-4 gap-x-0 lg:gap-x-5 border-gray-200">
                                {job?.highlights.map((highlight, idx) => (
                                    <React.Fragment key={idx}>
                                        <div className="lg:pl-4 lg:text-[18px] font-medium text-gray-600 flex items-center gap-2">
                                            <Image
                                                src={resolveHighlightIcon(highlight.label)}
                                                alt={`${highlight.label} icon`}
                                                width={20}
                                                height={20}
                                                className="object-contain opacity-80"
                                            />


                                            <span className=' lg:text-[18px] text-xs'>{highlight.label}</span>
                                        </div>
                                        <div className="lg:text-[18px] text-xs text-[#66768F] bg-[#66768F]/5 py-3 px-2 rounded-[4px]">
                                            {highlight.name}
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Job Description Content */}
                    <div className="prose max-w-none p-4 lg:p-6">
                        <div className='mt-[38px]'>
                            <p className="text-gray-700 mb-4 lg:text-[18px] text-[13px] lg:text-base">
                                {job?.job_brief}
                            </p>
                        </div>
                        <div className='mt-[38px]'>
                            <h3 className="font-semibold text-[#66768F] mb-3 text-base lg:text-[18px] text-sm">Medical Practice Details</h3>
                            <p className="text-gray-700 mb-4 lg:text-[18px] text-xs  lg:text-base">
                                {job?.medical_practise_details}
                            </p>
                            <h4 className="font-semibold text-[#66768F] mb-2 text-base lg:text-[18px] text-sm mt-[38px]">Eligibility Requirements</h4>
                            <ul className="list-disc list-inside text-[#666] lg:text-[18px] text-xs mt-[10px] space-y-1">
                                {(job?.required_qualification_exp?.split(/\r?\n/) ?? []).map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Information */}
                    {/* Contact Information */}
                    <div className='grid lg:grid-cols-2 inner-width-section grid-cols-1 lg:items-end'>
                        <div className="grid grid-cols-1 gap-3 lg:gap-[7px] mb-6 lg:p-0 lg:px-0 px-4">
                            <h4 className="font-semibold text-[#66768F] mt-6 lg:mt-[40px] text-base text-[14px] lg:text-[18px]">
                                Contact Us
                            </h4>
                            <div className="grid grid-cols-2 gap-0 lg:gap-[1px]">
                                <h3 className="font-semi-bold text-[#4A5565] lg:text-[16px] text-[13px]">Recruitment Consultant:</h3>
                                <span className="text-[#4A5565] lg:text-[16px] text-[13px]">Gaya</span>
                            </div>
                            <div className="grid grid-cols-2 ">
                                <h3 className="font-semi-bold text-[#4A5565] lg:text-[16px] text-[13px]">Contact Number:</h3>
                                <a href="tel:0452468515" className="text-[#4A5565] hover:underline lg:text-[16px] text-[13px]">0452 468 515 or 02 6188 5739</a>
                            </div>
                            <div className="grid grid-cols-2">
                                <h3 className="font-semi-bold text-[#4A5565] lg:text-[16px] text-[13px]">Email:</h3>
                                <a href="mailto:locum@medfuture.com.au" className="text-[#4A5565] hover:underline lg:text-[18px] text-[13px] break-all">locum@medfuture.com.au</a>
                            </div>
                            <div className="grid grid-cols-2 ">
                                <h3 className="font-semi-bold text-[#4A5565] lg:text-[16px] text-[13px]">General Enquiries:</h3>
                                <a href="tel:0452468515" className="text-[#4A5565] hover:underline lg:text-[16px] text-[13px]">0452 468 515</a>
                            </div>
                        </div>

                        {/* Quick Apply Button */}
                        {!showForm && (
                            <div className="flex lg:justify-end justify-center p-4 lg:p-6">
                                <button
                                    onClick={handleQuickApply}
                                    className="bg-[#074CA4] text-white w-[194px] px-6 py-3 cursor-pointer rounded-[4px] hover:bg-[#55b8e0] transition-colors font-medium"
                                >
                                    Apply Now
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Registration Form */}
                    {showForm && (
                        <div ref={formRef} className="mt-6 lg:mt-0 lg:shadow-[0_0_12px_rgba(0,0,0,0.1)] border-[#66768F]/16 mb-36">
                            <RegistrationForm onClose={() => setShowForm(false)} />
                        </div>
                    )}

                </div>

                {/* Extra bottom padding for mobile fixed button */}
                <div className="lg:hidden h-20"></div>
            </div>
        </div>
    );
}
