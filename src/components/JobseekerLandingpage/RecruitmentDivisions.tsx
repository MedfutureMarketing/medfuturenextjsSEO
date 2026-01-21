"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// Example images (replace with your actual images)
import FRACGP from "@/assets/Divisionimages/FRACGP.png";
import Registrars from "@/assets/Divisionimages/General-Practitioner-Registrars.png";
import Family from "@/assets/Divisionimages/International-Family-Medicine.png";
import Locum from "@/assets/Divisionimages/Locum-gp.png";
import ico from "@/assets/jobseeker/Navigation.png";
import sp from "@/assets/Divisionimages/Speech-Pathologist.png";

import Physiotherapist from "@/assets/Divisionimages/Physiotherapist.png";
import Occupational from "@/assets/Divisionimages/Occupational-Therapist.png";
import Podiatrist from "@/assets/Divisionimages/Podiatrist.png";
import Psychologist from "@/assets/Divisionimages/Psychologist.png";
import Dentals from "@/assets/Divisionimages/Dental-Specialist.png";
import Hygienist from "@/assets/Divisionimages/Oral-Hygienist.png";
import Dentist from "@/assets/Divisionimages/General-Dentist.png";

interface BlogCard {
    title: string;
    description: string;
    image: StaticImageData;
    link: string; // <-- add link field
}

interface Division {
    label: string;
    icon: StaticImageData;
    blogs: BlogCard[];
}

// Example data
const divisions: Division[] = [
    {
        label: "General Practitioner",
        icon: FRACGP,
        blogs: [
            {
                title: "Specialist General Practitioner (FRACGP & FRCRRM)",
                description:
                    "Find rewarding roles supporting communication and swal",
                image: FRACGP,
                link: "/medical/speech-pathologist",
            },
            {
                title: "General Practitioner (Registrars)",
                description:
                    "Explore physiotherapy positions focused on rehabilitation, mobility, and patien",
                image: Registrars,
                link: "/medical/physiotherapist",
            },
            {
                title: "International Family Medicine (Specialist Pathwa Recruitment)",
                description:
                    "Discover OT opportunities helping clients achiev.",
                image: Family,
                link: "/medical/occupational",
            },
            {
                title: "Locum GP (Short Term or Ongoing Cover)",
                description:
                    "Explore physiotherapy positions focused on rehabilitation, mobility, and patien ",
                image: Locum,
                link: "/medical/psychologist",
            },
            // {
            //     title: "SPEECH PATHOLOGIST",
            //     description:
            //         "Advance your speech therapy career with roles suited to your skills and teams dedicated to improving patient outcomes.",
            //     image: Med5,
            //     link: "/medical/speech-pathologist-2",
            // },
        ],
    },
    {
        label: "Allied Health",
        icon: sp,
        blogs: [
            {
                title: "Speech Pathologist",
                description:
                    "Explore roles supporting communication and swallowing care across diverse clinical and community healthcare settings.",
                image: sp,
                link: "/medical/speech-pathologist",
            },
             {
                title: "Physiotherapist",
                description:
                    "Discover opportunities focused on rehabilitation, movement, and patient recovery across private and public healthcare environments.",
                image: Physiotherapist,
                link: "/medical/speech-pathologist",
            },
             {
                title: "Occupational Therapist",
                description:
                    "Find roles helping individuals build independence and improve daily living through meaningful, goal-oriented care.",
                image: Occupational,
                link: "/medical/speech-pathologist",
            },
             {
                title: "Podiatrist",
                description:
                    "Browse positions delivering specialised foot and lower-limb care across clinics, hospitals, and community services.",
                image: Podiatrist,
                link: "/medical/speech-pathologist",
            },

        ],
    },
    {
        label: "Mental Health",
        icon: Locum,
        blogs: [
            {
                title: "Psychologist",
                description:
                    "Explore opportunities delivering evidence-based mental health support across clinical, community, and organisational settings.",
                image: Psychologist,
                link: "/medical/speech-pathologist",
            },

        ],
    },
    // {
    //     label: "Mental Health",
    //     icon: Med2,
    //     blogs: [
    //         {
    //             title: "SPEECH PATHOLOGIST",
    //             description:
    //                 "Find rewarding roles supporting communication and swallowing needs with employers who value your expertise and professional growth.",
    //             image: Med2,
    //             link: "/medical/speech-pathologist",
    //         },

    //     ],
    // },
    {
        label: "Oral Health",
        icon: Physiotherapist,
        blogs: [
            { title: "General Dentist", description: "Discover rewarding roles providing comprehensive dental care across public and private practice settings nationwide.", image: Dentist, link: "/nursing/career-1" },
            { title: "Dental Specialist", description: "Access advanced career opportunities in specialised dental fields with leading healthcare organisations across Australia.", image: Dentals, link: "/nursing/career-2" },
            { title: "Oral Hygienist", description: "Explore roles focused on preventive oral care and patient education within modern dental practices and clinics.", image: Hygienist, link: "/nursing/career-3" },
        ],
    },
    // {
    //     label: "Healthcare Executive",
    //     icon: Med2,
    //     blogs: [
    //         {
    //             title: "SPEECH PATHOLOGIST",
    //             description:
    //                 "Find rewarding roles supporting communication and swallowing needs with employers who value your expertise and professional growth.",
    //             image: Med2,
    //             link: "/medical/speech-pathologist",
    //         },

    //     ],
    // },
];

export default function RecruitmentDivisionsTabs() {
    const [activeDivision, setActiveDivision] = useState(divisions[0]);

    return (
        <section className="mt-[106px] mb-[104px]">
            <div className=" text-center">
                <h2 className="lg:text-[36px]  text-2xl  font-[500] text-[#040D48]  mb-[40px]">Recruitment <span className="text-[#074CA4] font-[700]"> Divisions</span></h2>


                {/* Division Tabs */}
                <div className="flex flex-wrap justify-center gap-2 lg:mb-[40px] ">
                    {divisions.map((division) => (
                        <button
                            key={division.label}
                            onClick={() => setActiveDivision(division)}
                            className={`flex items-center gap-2 lg:px-10 rounded-[8px] cursor-pointer lg:shadow-lg lg:py-[11.5px] py-2 px-2 rounded  transition  lg:text-[16px] text-[10px] text-[#040D48] ${activeDivision.label === division.label ? "bg-blue-600 shadow-lg lg:text-[16px] text-white  " : "bg-white border border-gray-200 font-[500] text-[#040D48]  lg:text-[16px] hover:text-white  hover:bg-gray-500"
                                }`}
                        >
                            {division.label}
                        </button>
                    ))}
                </div>

                {/* Blog Cards desktop */}
                <div className="lg:block hidden ">
<div className="flex flex-wrap justify-center gap-4">
                        {activeDivision.blogs.map((blog, index) => (
                            <div
                                key={index}
                                className="flex flex-col bg-white  lg:w-[280px] rounded-lg shadow-[0_8px_15px_rgba(0,0,0,0.12)]
                                            hover:shadow-lg transition p-4 text-left w-full"
                            >
                                <div className="relative  h-[149px] w-[246px] mb-4">
                                    <Image src={blog.image} alt={blog.title} fill className="object-cover rounded-[6.99px]" />
                                </div>
                                <h3 className="lg:text-[18px] font-[600] text-[#074CA4] mb-2">{blog.title}</h3>
                                <p className="text-gray-600 text-sm lg:text-[14px] mb-4">{blog.description}</p>
                                <Link
                                    href={blog.link}
                                    className="mt-auto inline-block text-left  text-[14px] font-[500] text-[#074CA4] px-4 py-2 rounded  transition"
                                >
                                    Explore <Image src={ico} alt="arrow" className="inline-block ml-2 w-4 h-4 object-contain" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:hidden">
                    {/* Blog Cards */}
                    <div className="overflow-x-auto lg:overflow-x-visible">
                        <div className="flex lg:grid lg:grid-cols-3 gap-4 px-4 lg:px-0">
                            {activeDivision.blogs.map((blog, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 lg:flex-shrink-1 flex flex-col bg-white lg:w-auto w-[280px] rounded-lg shadow hover:shadow-lg transition p-4 text-left"
                                >
                                    <div className="relative h-26 mb-4">
                                        <Image src={blog.image} alt={blog.title} fill className="object-cover rounded" />
                                    </div>
                                    <h3 className="text-sm font-semibold text-gray-900 mb-2">{blog.title}</h3>
                                    <p className="text-gray-600 text-xs mb-4">{blog.description}</p>
                                    <Link
                                        href={blog.link}
                                        className="mt-auto inline-block text-left font-[500] text-xs text-[#074CA4] px-4 py-2 rounded transition"
                                    >
                                        Explore <Image src={ico} alt="arrow" className="inline-block ml-2 w-4 h-4 object-contain" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
