"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// Example images (replace with your actual images)
import Med2 from "@/assets/homeico/IMGFORCONSULTANT.webp";
import Med3 from "@/assets/homeico/IMGFORCONSULTANT.webp";
import Med4 from "@/assets/homeico/IMGFORCONSULTANT.webp";
import Med5 from "@/assets/homeico/IMGFORCONSULTANT.webp";
import ico from "@/assets/jobseeker/Navigation.png";
import Med1 from "@/assets/jobseeker/coverimg.png";

import Nurse1 from "@/assets/homeico/IMGFORCONSULTANT.webp";
import Nurse2 from "@/assets/homeico/IMGFORCONSULTANT.webp";
import Nurse3 from "@/assets/homeico/IMGFORCONSULTANT.webp";
import Nurse4 from "@/assets/homeico/IMGFORCONSULTANT.webp";
import Nurse5 from "@/assets/homeico/IMGFORCONSULTANT.webp";

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
        label: "Medical",
        icon: Med1,
        blogs: [
            {
                title: "SPEECH PATHOLOGIST",
                description:
                    "Find rewarding roles supporting communication and swallowing needs with employers who value your expertise and professional growth.",
                image: Med1,
                link: "/medical/speech-pathologist",
            },
            {
                title: "PHYSIOTHERAPIST",
                description:
                    "Explore physiotherapy positions focused on rehabilitation, mobility, and patient recovery with supportive employers offering genuine career development.",
                image: Med2,
                link: "/medical/physiotherapist",
            },
            {
                title: "OCCUPATIONAL",
                description:
                    "Discover OT opportunities helping clients achieve independence, supported by organisations committed to quality care and your growth.",
                image: Med3,
                link: "/medical/occupational",
            },
            {
                title: "PSYCHOLOGIST",
                description:
                    "Access meaningful psychology roles delivering mental health support with employers who prioritise evidence-based care and development.",
                image: Med4,
                link: "/medical/psychologist",
            },
            {
                title: "SPEECH PATHOLOGIST",
                description:
                    "Advance your speech therapy career with roles suited to your skills and teams dedicated to improving patient outcomes.",
                image: Med5,
                link: "/medical/speech-pathologist-2",
            },
        ],
    },
    {
        label: "Allied Health",
        icon: Med2,
        blogs: [
            {
                title: "SPEECH PATHOLOGIST",
                description:
                    "Find rewarding roles supporting communication and swallowing needs with employers who value your expertise and professional growth.",
                image: Med2,
                link: "/medical/speech-pathologist",
            },

        ],
    },
    {
        label: "Mental Health",
        icon: Med2,
        blogs: [
            {
                title: "SPEECH PATHOLOGIST",
                description:
                    "Find rewarding roles supporting communication and swallowing needs with employers who value your expertise and professional growth.",
                image: Med2,
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
        label: "Dentistry & Oral Health",
        icon: Nurse1,
        blogs: [
            { title: "Nursing Career 1", description: "Description for blog 1", image: Nurse1, link: "/nursing/career-1" },
            { title: "Nursing Career 2", description: "Description for blog 2", image: Nurse2, link: "/nursing/career-2" },
            { title: "Nursing Career 3", description: "Description for blog 3", image: Nurse3, link: "/nursing/career-3" },
            { title: "Nursing Career 4", description: "Description for blog 4", image: Nurse4, link: "/nursing/career-4" },
            { title: "Nursing Career 5", description: "Description for blog 5", image: Nurse5, link: "/nursing/career-5" },
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
                    <div className="flex flex-wrap justify-center  gap-4">
                        {activeDivision.blogs.map((blog, index) => (
                            <div
                                key={index}
                                className="flex flex-col bg-white  lg:w-[416px] rounded-lg shadow-[0_8px_15px_rgba(0,0,0,0.12)]
                                            hover:shadow-lg transition p-4 text-left w-full"
                            >
                                <div className="relative  h-36 mb-4">
                                    <Image src={blog.image} alt={blog.title} fill className="object-cover rounded" />
                                </div>
                                <h3 className="lg:text-[20px] font-[600] text-[#074CA4] mb-2">{blog.title}</h3>
                                <p className="text-gray-600 text-sm lg:text-[16px] mb-4">{blog.description}</p>
                                <Link
                                    href={blog.link}
                                    className="mt-auto inline-block text-left  text-[14px] font-[500] text-[#074CA4] px-4 py-2 rounded  transition"
                                >
                                    Explore <Image src={ico} alt="arrow" className="inline-block ml-2 w-4 h-4 object-contain" />
                                </Link>
                            </div>
                        ))}
                    </div></div>

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
