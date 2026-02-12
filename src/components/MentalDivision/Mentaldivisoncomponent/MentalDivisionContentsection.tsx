import React from "react";
import Link from "next/link";
// import Image from "next/image";

/* ================= ICON IMPORTS ================= */
// import CareerIcon from "@/assets/icons/ahpico1.png";
// import EmployerIcon from "@/assets/icons/ahpico2.png";
// import MultiOfferIcon from "@/assets/icons/ahpico3.png";

/* ================= TYPES ================= */
interface JobLink {
    title: string;
    url: string;
}

interface AlliedHealthHubProps {
    jobLinks?: JobLink[];
}

/* ================= COMPONENT ================= */
const AlliedHealthHub: React.FC<AlliedHealthHubProps> = ({ jobLinks = [] }) => {
    /* ---------- Default job links ---------- */
    const defaultJobLinks: JobLink[] = [
        { title: 'Psychologist jobs Sydney', url: '/permanent/general-practitioner-jobs/in-tasmania?page=1' },
        { title: 'Clinical Psychologist Jobs Australia', url: '/permanent/gp-registrar-jobs/in-victoria?page=1' },


        { title: 'NDIS Psychologist Jobs Australia', url: '/permanent/gp-specialist-jobs/in-new-south-wales?page=1' },
        { title: 'Hospital consultation-liaison psychiatry jobs', url: '/permanent/gp-specialist-jobs/in-australia?page=1' },
        { title: 'FRACGP Jobs Australia', url: '#' },
        { title: 'Community mental health clinician roles', url: '/permanent/general-practitioner-jobs/in-new-south-wales?page=1' },
        { title: 'Telehealth Psychologist jobs', url: '/permanent/gp-registrar-jobs/in-new-south-wales?page=1' },
        { title: 'Child & Adolescent Psychiatrist jobs', url: '/permanent/general-practitioner-jobs/in-queensland?page=1' },
        { title: 'Forensic Psychologist jobs', url: '/permanent/gp-registrar-jobs/in-queensland?page=1' },
        { title: 'Telepsychiatry jobs Australia', url: '/permanent/gp-specialist-jobs/in-queensland?page=1' },
        { title: 'Psychiatrist jobs Brisbane', url: '#' },
        // { title: 'Specialist GP Victoria', url: '/permanent/gp-specialist-jobs/in-victoria?page=1' },
        // { title: 'Specialist GP SA', url: '/permanent/gp-specialist-jobs/in-south-australia?page=1' },
        // { title: 'Specialist GP WA', url: '/permanent/gp-specialist-jobs/in-western-australia?page=1' },
        // { title: 'Specialist GP NT', url: '/permanent/gp-specialist-jobs/in-northern-territory?page=1' },
        // { title: 'Specialist GP NSW', url: '/permanent/gp-specialist-jobs/in-new-south-wales?page=1' },
        // { title: 'Specialist GP Australia', url: '/permanent/gp-specialist-jobs/in-australia?page=1' },

    ];

    const links = jobLinks.length > 0 ? jobLinks : defaultJobLinks;

    /* ---------- Feature cards data ---------- */
    const features = [
        {
            title: "Career-first recruitment",
            text: "We don't push vacancies. We align roles to your caseload interests, supervision needs, lifestyle and progression plan.",
            // icon: CareerIcon,
        },
        {
            title: "Employer quality screening",
            text: "We prioritise employers with ethical KPIs, sustainable caseload design, quality supervision and strong retention.",
            // icon: EmployerIcon,
        },
        {
            title: "Multi-offer advantage",
            text: "Compare multiple employers confidentially, benchmark pay, and negotiate from a position of strength.",
            // icon: MultiOfferIcon,
        },
    ];

    return (
        <div className="full-width-section">
            <div className="inner-width-section mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-20">

                    {/* ================= MAIN CONTENT ================= */}
                    <div className="lg:col-span-2">

                        {/* ---------- Header ---------- */}
                        <div className="mb-6 lg:mb-8">
                            <p className="text-[#074CA4] text-xs sm:text-sm lg:text-[14px] font-medium mb-2">
                                About this hub
                            </p>

                            <h2 className="text-lg sm:text-xl lg:text-[30px] font-bold text-[#0F172A] mb-4 lg:mb-6 leading-snug">

                                Why Mental Health Professionals Choose Medfuture
                            </h2>
                            <p className="text-[#4A5565] lg:text-[16px] text-xs">
                                If you are an AHPRA-registered Psychologist or Psychiatrist, your next role should strengthen your clinical identity—not dilute it. Medfuture supports clinicians seeking ethical caseloads, realistic KPIs, quality supervision, and workplace cultures that respect clinical judgement.
                            </p>

                            <div className="space-y-3 lg:space-y-3 text-[#4A5565] text-sm lg:text-[16px] mt-[37px]">
                                <div className="max-w-2xl">

                                    <div className="flex gap-4 mb-5">
                                        <div className="w-5 h-5 bg-blue-900 rounded flex-shrink-0 mt-1"></div>
                                        <p className="text-[#0F172A] lg:text-[16px] text-xs">We understand real clinical workloads—not just job titles.</p>
                                    </div>


                                    <div className="flex gap-4 mb-5">
                                        <div className="w-5 h-5 bg-blue-900 rounded flex-shrink-0 mt-1"></div>
                                        <p className="text-[#0F172A] lg:text-[16px] text-xs">We screen employers for safe caseloads, supervision, and admin support.</p>
                                    </div>


                                    <div className="flex gap-4 mb-5">
                                        <div className="w-5 h-5 bg-blue-900 rounded flex-shrink-0 mt-1"></div>
                                        <p className="text-[#0F172A] lg:text-[16px] text-xs">We recruit across private practice, hospitals, community, NDIS, forensic, and telehealth.</p>
                                    </div>


                                    <div className="flex gap-4">
                                        <div className="w-5 h-5 bg-blue-900 rounded flex-shrink-0 mt-1"></div>
                                        <p className="text-[#0F172A] lg:text-[16px] text-xs">We support metro, regional, and hybrid models across Australia.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ---------- Why Section ---------- */}
                        {/* <div className="mt-12 lg:mt-[86px]">
                            <p className="text-[#074CA4] text-xs sm:text-sm lg:text-[14px] font-medium mb-2">
                                The why
                            </p>

                            <h2 className="text-lg sm:text-xl lg:text-[30px] font-bold text-[#0F172A] mb-4 lg:mb-6">
                                Why the Medfuture Allied Health Recruitment Hub Exists
                            </h2>

                            <div className="space-y-3 lg:space-y-4 text-[#4A5565] text-sm lg:text-[16px] mb-6 lg:mb-8">
                                <p>
                                    Medfuture GP Hub is structured to answer real GP questions with clear terminology: AHPRA,DPA,MMM,FRACGP,FACRRM,RACGP,ACRRM, and locum pathways — making it easier for GPs and AI search experiences to surface accurate, practice-relevant information.
                                </p>

                            </div>

                  
                            <div className="space-y-5 lg:space-y-6 mt-6 lg:mt-[32px]">
                                {features.map((item, index) => (
                                    <div key={index} className="flex gap-4 items-start">
                                        <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                                            <Image
                                                src={item.icon}
                                                alt={item.title}
                                                width={24}
                                                height={24}
                                                className="lg:w-10 lg:h-10"
                                            />
                                        </div>

                                        <div>
                                            <h3 className="text-base lg:text-lg font-semibold text-[#0F172A] mb-1 lg:mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-[#4A5565] text-sm lg:text-[16px]">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div> */}
                    </div>

                    {/* ================= SIDEBAR ================= */}
                    <div className="lg:col-span-1">
                        <div className="bg-[#F8FAFC] rounded-[4px] p-4 lg:p-6 lg:sticky top-6">
                            <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-3 lg:mb-4">
                                Quick Links
                            </h3>

                            <nav className="space-y-3 lg:space-y-[17px]">
                                {links.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.url}
                                        className="block text-[#074CA4] hover:text-blue-800 hover:underline text-sm transition-colors"
                                    >
                                        {link.title}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AlliedHealthHub;
