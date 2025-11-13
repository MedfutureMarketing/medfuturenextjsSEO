"use client"
import { useState, useRef } from 'react';
import RegistrationForm from '@/components/Forms/LocumForm';
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
import Image from 'next/image';

export default function LocumJobDescription() {
    const formRef = useRef<HTMLDivElement>(null);
    const [showRegistrationForm, setShowRegistrationForm] = useState(false);

    const handleApplyNow = () => {
        setShowRegistrationForm(!showRegistrationForm);
        
        if (!showRegistrationForm && formRef.current) {
            setTimeout(() => {
                formRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    };

    return (
        <div className="">
            {/* Mobile Apply Button - Only show on small screens */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 z-50 border-t">
                <button
                    onClick={handleApplyNow}
                    className="w-full bg-gradient-to-r from-[#141E65] to-[#151C50] text-white px-6 py-3 rounded-lg font-medium text-[18px]"
                >
                    {showRegistrationForm ? 'Close Form' : 'Apply Now'}
                </button>
            </div>

            {/* Two Column Layout */}
            <div className='grid lg:grid-cols-3 gap-6'>
                {/* Left Column - Job Details (2/3 width on desktop, full width on mobile) */}
                <div className='lg:col-span-2 border-2'>
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6 shadow-[0_6px_6px_rgba(0,0,0,0.05)] p-4 lg:p-6 rounded-none bg-white">
                        <h1 className="text-lg lg:text-[32px] font-bold text-[#0E2851] pr-4 flex-1">
                            Locum GP Registrar – Aged Care | AUD 160 per hour | DPA MMM6 | Condobolin
                        </h1>
                    </div>

                    {/* External Link Icon */}
                    <div className="relative px-4 lg:px-5">
                        <div className="absolute top-0 right-0 px-4 lg:px-5">
                            <Link href="/locum/job" className="hover:underline">
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_21001_3721)">
                                        <path d="M14.2193 17.379H2.63335C2.354 17.379 2.0861 17.268 1.88857 17.0705C1.69105 16.873 1.58008 16.6051 1.58008 16.3257V4.73979C1.58008 4.46045 1.69105 4.19254 1.88857 3.99502C2.0861 3.79749 2.354 3.68652 2.63335 3.68652H7.89969V4.73979H2.63335V16.3257H14.2193V11.0594H15.2726V16.3257C15.2726 16.6051 15.1616 16.873 14.9641 17.0705C14.7665 17.268 14.4986 17.379 14.2193 17.379Z" fill="#0C3262" />
                                        <path d="M9.47974 1.5791C9.34007 1.5791 9.20612 1.63459 9.10736 1.73335C9.00859 1.83211 8.95311 1.96606 8.95311 2.10574C8.95311 2.24541 9.00859 2.37936 9.10736 2.47812C9.20612 2.57689 9.34007 2.63237 9.47974 2.63237H15.5834L8.28955 9.92625C8.23442 9.97346 8.18965 10.0316 8.15804 10.0969C8.12643 10.1622 8.10866 10.2334 8.10586 10.3059C8.10306 10.3785 8.11528 10.4508 8.14176 10.5184C8.16823 10.5859 8.20839 10.6473 8.25972 10.6986C8.31104 10.75 8.37242 10.7901 8.44 10.8166C8.50758 10.8431 8.5799 10.8553 8.65243 10.8525C8.72496 10.8497 8.79612 10.8319 8.86146 10.8003C8.9268 10.7687 8.98489 10.7239 9.0321 10.6688L16.326 3.37492V9.47861C16.326 9.61829 16.3815 9.75224 16.4802 9.851C16.579 9.94977 16.7129 10.0052 16.8526 10.0052C16.9923 10.0052 17.1262 9.94977 17.225 9.851C17.3238 9.75224 17.3793 9.61829 17.3793 9.47861V1.5791H9.47974Z" fill="#0C3262" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_21001_3721">
                                            <rect width="18.9588" height="18.9588" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Hardcoded Job Details Section */}
                    <div className="flex items-center justify-center">
                        <div className="w-full bg-white p-4 lg:p-6 ">
                            <div className="grid grid-cols-1  lg:grid-cols-[auto_2fr] gap-y-3 lg:gap-y-4 gap-x-0 lg:gap-x-5 border-gray-200">
                                {/* Profession */}
                                <div className="pl-2 lg:pl-4 text-[18px] font-medium text-[#666666] flex items-center gap-2">
                                    <Image
                                        src={ProfessionIcon}
                                        alt="Profession icon"
                                        width={20}
                                        height={20}
                                        className="object-contain opacity-80"
                                    />
                                    <span>Profession</span>
                                </div>
                                <div className="text-[18px] text-[#66768F] bg-[#66768F]/5 py-2 lg:py-3 px-2 rounded-[4px] mb-2 lg:mb-0">
                                    Medical Practitioner
                                </div>

                                {/* Specialty */}
                                <div className="pl-2 lg:pl-4 text-[18px] font-medium text-[#666666] flex items-center gap-2">
                                    <Image
                                        src={SpecialtyIcon}
                                        alt="Specialty icon"
                                        width={20}
                                        height={20}
                                        className="object-contain opacity-80"
                                    />
                                    <span>Specialty</span>
                                </div>
                                <div className="text-[18px] text-[#66768F] bg-[#66768F]/5 py-2 lg:py-3 px-2 rounded-[4px] mb-2 lg:mb-0">
                                    General Practitioner
                                </div>

                                {/* Seniority */}
                                <div className="pl-2 lg:pl-4 text-[18px] font-medium text-[#666666] flex items-center gap-2">
                                    <Image
                                        src={SeniorityIcon}
                                        alt="Seniority icon"
                                        width={20}
                                        height={20}
                                        className="object-contain opacity-80"
                                    />
                                    <span>Seniority</span>
                                </div>
                                <div className="text-[18px] text-[#66768F] bg-[#66768F]/5 py-2 lg:py-3 px-2 rounded-[4px] mb-2 lg:mb-0">
                                    Surgery
                                </div>

                                {/* Location */}
                                <div className="pl-2 lg:pl-4 text-[18px] font-medium text-[#666666] flex items-center gap-2">
                                    <Image
                                        src={LocationIcon}
                                        alt="Location icon"
                                        width={20}
                                        height={20}
                                        className="object-contain opacity-80"
                                    />
                                    <span>Location</span>
                                </div>
                                <div className="text-[18px] text-[#66768F] bg-[#66768F]/5 py-2 lg:py-3 px-2 rounded-[4px] mb-2 lg:mb-0">
                                    Guildford, New South Wales
                                </div>

                                {/* Start Date */}
                                <div className="pl-2 lg:pl-4 text-[18px] font-medium text-[#666666] flex items-center gap-2">
                                    <Image
                                        src={StartDateIcon}
                                        alt="Start date icon"
                                        width={20}
                                        height={20}
                                        className="object-contain opacity-80"
                                    />
                                    <span>Start Date</span>
                                </div>
                                <div className="text-[18px] text-[#66768F] bg-[#66768F]/5 py-2 lg:py-3 px-2 rounded-[4px] mb-2 lg:mb-0">
                                    Flexible
                                </div>

                                {/* End Date */}
                                <div className="pl-2 lg:pl-4 text-[18px] font-medium text-[#666666] flex items-center gap-2">
                                    <Image
                                        src={EndDateIcon}
                                        alt="End date icon"
                                        width={20}
                                        height={20}
                                        className="object-contain opacity-80"
                                    />
                                    <span>End Date</span>
                                </div>
                                <div className="text-[18px] text-[#66768F] bg-[#66768F]/5 py-2 lg:py-3 px-2 rounded-[4px] mb-2 lg:mb-0">
                                    Flexible
                                </div>

                                {/* Locum Period */}
                                <div className="pl-2 lg:pl-4 text-[18px] font-medium text-[#666666] flex items-center gap-2">
                                    <Image
                                        src={LocumPeriodIcon}
                                        alt="Locum period icon"
                                        width={20}
                                        height={20}
                                        className="object-contain opacity-80"
                                    />
                                    <span>Locum Period</span>
                                </div>
                                <div className="text-[18px] text-[#66768F] bg-[#66768F]/5 py-2 lg:py-3 px-2 rounded-[4px] mb-2 lg:mb-0">
                                    Ongoing
                                </div>

                                {/* Locum Rate On Offer */}
                                <div className="pl-2 lg:pl-4 text-[18px] font-medium text-[#666666] flex items-center gap-2">
                                    <Image
                                        src={LocumRateIcon}
                                        alt="Locum rate icon"
                                        width={20}
                                        height={20}
                                        className="object-contain opacity-80"
                                    />
                                    <span>Locum Rate On Offer</span>
                                </div>
                                <div className="text-[18px] text-[#66768F] bg-[#66768F]/5 py-2 lg:py-3 px-2 rounded-[4px] mb-2 lg:mb-0">
                                    AUD 200 per hour
                                </div>

                                {/* Engagement Type */}
                                <div className="pl-2 lg:pl-4 text-[18px] font-medium text-[#666666] flex items-center gap-2">
                                    <Image
                                        src={EngagementTypeIcon}
                                        alt="Engagement type icon"
                                        width={20}
                                        height={20}
                                        className="object-contain opacity-80"
                                    />
                                    <span>Engagement Type</span>
                                </div>
                                <div className="text-[18px] text-[#66768F] bg-[#66768F]/5 py-2 lg:py-3 px-2 rounded-[4px] mb-2 lg:mb-0">
                                    Full-Time or Part-Time
                                </div>

                                {/* Engagement Mode */}
                                <div className="pl-2 lg:pl-4 text-[18px] font-medium text-[#666666] flex items-center gap-2">
                                    <Image
                                        src={EngagementModeIcon}
                                        alt="Engagement mode icon"
                                        width={20}
                                        height={20}
                                        className="object-contain opacity-80"
                                    />
                                    <span>Engagement Mode</span>
                                </div>
                                <div className="text-[18px] text-[#66768F] bg-[#66768F]/5 py-2 lg:py-3 px-2 rounded-[4px] mb-2 lg:mb-0">
                                    Onsite
                                </div>

                                {/* Payment Cycle */}
                                <div className="pl-2 lg:pl-4 text-[18px] font-medium text-[#666666] flex items-center gap-2">
                                    <Image
                                        src={PaymentCycleIcon}
                                        alt="Payment cycle icon"
                                        width={20}
                                        height={20}
                                        className="object-contain opacity-80"
                                    />
                                    <span>Payment Cycle</span>
                                </div>
                                <div className="text-[18px] text-[#66768F] bg-[#66768F]/5 py-2 lg:py-3 px-2 rounded-[4px] mb-2 lg:mb-0">
                                    Fortnightly
                                </div>

                                {/* Additional Information */}
                                <div className="pl-2 lg:pl-4 text-[18px] font-medium text-[#666666] flex items-center gap-2">
                                    <Image
                                        src={AdditionalInfoIcon}
                                        alt="Additional information icon"
                                        width={20}
                                        height={20}
                                        className="object-contain opacity-80"
                                    />
                                    <span>Additional Information</span>
                                </div>
                                <div className="text-[18px] text-[#66768F] bg-[#66768F]/5 py-2 lg:py-3 px-2 rounded-[4px] mb-2 lg:mb-0">
                                    Full-time nursing support provided | Consultation fees: Standard – AUD 80 | Long – AUD 140 |
                                    Negotiable offers for the ideal candidate | On-site pathology services | AGPAL-accredited practice |
                                    Opening hours – Monday to Friday 7:00 am to 9:00 pm and Saturday and Sunday 8:00 am to 6:00 pm
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Job Description Content */}
                    <div className="prose max-w-none p-4 lg:p-6">
                        <div className='mt-[38px]'>
                            <p className="text-gray-700 mb-4 text-[18px] lg:text-base">
                                We are seeking a committed GP Registrar to work in Condobolin, NSW. In this role, you will provide comprehensive aged care services to the local community. Enjoy appealing benefits, including competitive pay, support with travel and accommodation, and opportunities for career development. Apply today to work in a welcoming and fulfilling environment.
                            </p>
                            <h4 className="font-semibold text-[#66768F] mb-2 text-base lg:text-lg mt-[38px]">Offer Details:</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4 text-[18px] lg:text-base">
                                <li>Permanent position</li>
                                <li>Full-time or part-time engagement</li>
                                <li>80% of billings or AUD 200 per hour for the first 3 months</li>
                                <li>Sign-on bonus potential</li>
                            </ul>
                        </div>
                        <div className='mt-[38px]'>
                            <h3 className="font-semibold text-[#66768F] mb-3 text-base lg:text-lg">Medical Practice Details</h3>
                            <p className="text-gray-700 mb-4 text-[18px] lg:text-base">
                                Located in New South Wales, this facility offers a wide range of healthcare services to support the local community. Services include GP care for aged care residents, drug and alcohol programs, pre-employment and diving medicals, along with specialised health assessments for aviation, asbestos exposure, and the mining industry. Condobolin has amenities such as parks, recreational areas, and a variety of dining and shopping options, making it a great place to live and work.
                            </p>
                            <h4 className="font-semibold text-[#66768F] mb-2 text-base lg:text-lg mt-[38px]">Eligibility Requirements</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 text-[18px] lg:text-base">
                                <li>Should hold General registration with AHPRA</li>
                                <li>GP Registrar or Non VR GP with General Registration</li>
                                <li>Unlimited working rights in Australia</li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="grid grid-cols-1 gap-4 lg:gap-[7px] mb-6 p-4 lg:p-6 ">
                        <div className="flex flex-col lg:flex-row lg:flex-wrap gap-2 lg:gap-[13px]">
                            <h3 className="font-semibold text-[#66768F] text-[18px] lg:text-base ">Recruitment Consultant:</h3>
                            <span className="text-gray-700 text-[18px] lg:text-base">Gaya</span>
                        </div>
                        <div className="flex flex-col lg:flex-row lg:flex-wrap gap-2 lg:gap-[13px]">
                            <h3 className="font-semibold text-[#66768F] text-[18px] lg:text-base">Contact Number:</h3>
                            <a href="tel:0452468515" className="text-[#64CAF3] hover:underline text-[18px] lg:text-base">0452 468 515</a>
                        </div>
                        <div className="flex flex-col lg:flex-row lg:flex-wrap gap-2 lg:gap-[13px]">
                            <h3 className="font-semibold text-[#66768F] text-[18px] lg:text-base">Email:</h3>
                            <a href="mailto:gprecruitment@medfuture.com.au" className="text-[#64CAF3] hover:underline text-[18px] lg:text-base break-all">gprecruitment@medfuture.com.au</a>
                        </div>
                        <div className="flex flex-col lg:flex-row lg:flex-wrap gap-2 lg:gap-[13px]">
                            <h3 className="font-semibold text-[#66768F] text-[18px] lg:text-base">General Enquiries:</h3>
                            <a href="tel:0452468515" className="text-[#64CAF3] hover:underline text-[18px] lg:text-base">0452 468 515</a>
                        </div>
                    </div>
                </div>

                {/* Right Column - Registration Form (1/3 width on desktop, conditional on mobile) */}
                <div className={`lg:col-span-1 ${showRegistrationForm ? 'block' : 'hidden lg:block'}`}>
                    <div ref={formRef}>
                        <RegistrationForm />
                    </div>
                </div>
            </div>

            {/* Add padding at the bottom for mobile to account for fixed button */}
            <div className="lg:hidden h-20"></div>
        </div>
    );
}