"use client";

import Link from "next/link";

const quickLinks = [
     { label: "GP Jobs in NSW", href: "/permanent/general-practitioner-jobs/in-new-south-wales?page=1" },
    { label: "GP Jobs in WA", href: "/permanent/general-practitioner-jobs/in-western-australia?page=1" },
    { label: "Speech Pathologist Jobs in Victoria", href: "/permanent/speech-pathologist-jobs/in-victoria?page=1" },
    { label: "Occupational Therapist Jobs in QLD", href: "/permanent/occupational-therapist-jobs/in-queensland?page=1" },
    { label: "Psychologist Jobs in NSW", href: "/permanent/psychologist-jobs/in-new-south-wales?page=1" },
    { label: "GP Jobs in SA", href: "/permanent/general-practitioner-jobs/in-south-australia?page=1" },
    { label: "Speech Pathologist Jobs in WA", href: "/permanent/speech-pathologist-jobs/in-western-australia?page=1" },
    { label: "Occupational Therapist Jobs in NSW", href: "/permanent/occupational-therapist-jobs/in-new-south-wales?page=1" },
    { label: "Psychologist Jobs in Victoria", href: "/permanent/psychologist-jobs/in-victoria?page=1" },
    { label: "GP Jobs in QLD", href: "/permanent/general-practitioner-jobs/in-queensland?page=1" },
    { label: "Speech Pathologist Jobs in SA", href: "/permanent/speech-pathologist-jobs/in-south-australia?page=1" },
    { label: "Occupational Therapist Jobs in WA", href: "/permanent/occupational-therapist-jobs/in-western-australia?page=1" },
    { label: "Psychologist Jobs in QLD", href: "/permanent/psychologist-jobs/in-queensland?page=1" },
    { label: "GP Jobs in Victoria", href: "/permanent/general-practitioner-jobs/in-victoria?page=1" },
    { label: "Speech Pathologist Jobs in QLD", href: "/permanent/speech-pathologist-jobs/in-queensland?page=1" },
    { label: "Occupational Therapist Jobs in SA", href: "/permanent/occupational-therapist-jobs/in-south-australia?page=1" },
    { label: "Psychologist Jobs in SA", href: "/permanent/psychologist-jobs/in-south-australia?page=1" },
    { label: "GP Jobs in NT", href: "/permanent/general-practitioner-jobs/in-northern-territory?page=1" },
    { label: "Speech Pathologist Jobs in NSW", href: "/permanent/speech-pathologist-jobs/in-new-south-wales?page=1" },
    { label: "Occupational Therapist Jobs in Victoria", href: "/permanent/occupational-therapist-jobs/in-victoria?page=1" },
    { label: "Psychologist Jobs in WA", href: "/permanent/psychologist-jobs/in-western-australia?page=1" },
    { label: "GP Jobs in TAS", href: "/permanent/general-practitioner-jobs/in-tasmania?page=1" },
    { label: "Speech Pathologist Jobs in NT", href: "/permanent/speech-pathologist-jobs/in-northern-territory?page=1" },
    { label: "Occupational Therapist Jobs in TAS", href: "/permanent/occupational-therapist-jobs/in-tasmania?page=1" },
    // { label: "Psychologist Jobs in NT", href: "/permanent/psychologist-jobs/in-northern-territory?page=1" },
    // { label: "GP Jobs in ACT", href: "/permanent/general-practitioner-jobs/in-australian-capital-territory?page=1" },
    // { label: "Speech Pathologist Jobs in TAS", href: "/permanent/speech-pathologist-jobs/in-tasmania?page=1" },
    // { label: "Occupational Therapist Jobs in NT", href: "/permanent/occupational-therapist-jobs/in-northern-territory?page=1" },
    // { label: "Psychologist Jobs in TAS", href: "/permanent/psychologist-jobs/in-tasmania?page=1" },
    // { label: "Occupational Therapist Jobs in ACT", href: "/permanent/occupational-therapist-jobs/in-australian-capital-territory?page=1" },

];

export default function QuickLinks() {
    return (
        <section className="full-width-section bg-white mt-10 sm:mt-16 md:mt-20 lg:mt-[125px] mb-24">
            <div className="inner-width-section">

                <div className="rounded-2xl px-5 py-5 sm:px-6 sm:py-6 md:px-0 md:py-7">

                    {/* Title */}
                    <h3 className="text-sm sm:text-base md:text-[20px] font-bold text-[#040D48] mb-3 sm:mb-4">
                        Quick Links:
                    </h3>

                    {/* Links */}
                    <div className="flex flex-wrap gap-x-3 gap-y-2 sm:gap-x-4 sm:gap-y-2.5">
                        {quickLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="text-[11px] sm:text-xs md:text-[14px] text-[#040D48] hover:text-[#074CA4] hover:underline transition-colors duration-150 whitespace-nowrap"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}