"use client";

import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import HeroImage from "@/assets/homeico/jobseekerhub.png";
import uploadCVIcon from "@/assets/icons/upload.png";
import registerIcon from "@/assets/icons/register.png";
import CallIcon from "@/assets/icons/Call.png";
import ReferIcon from "@/assets/icons/Reffer.png";
import Link from "next/link";
import { apiGet } from "@/lib/api";

type Profession = {
  profession_id: number;
  name: string;
};

type Location = {
  state_id: number;
  name: string;
};

type JobSeekerHub = {
  professions: Profession[];
  locations: Location[];
};


export default function JobseekersearchHero() {
    const router = useRouter();

    const [profession, setProfession] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [JobSeekerHub, setJobSeekerHub] = useState<JobSeekerHub | null>(null);
    
        useEffect(() => {
            async function fetchJobSeekerHub() {
                try {
                const res = await apiGet< JobSeekerHub >(`web/job-seeker-hub-page/get-all`);
                setJobSeekerHub(res);
                } catch {
                }
            }
            fetchJobSeekerHub();
        }, []);

    const slugify = (value: string) =>
        value.toLowerCase().trim().replace(/\s+/g, "-");

    const handleSearch = () => {
        const professionSlug = profession
            ? `${slugify(profession)}-jobs`
            : "";

        const locationSlug = location
            ? `in-${slugify(location)}?page=1`
            : "australia?page=1";

        router.push(`/permanent/${professionSlug}/${locationSlug}`);
    };

    return (
        <section className="bg-[#040D48]  full-width-section">
            <div className="inner-width-section">
                <div className="grid items-center gap-12 lg:grid-cols-[1fr_359px]">

                    {/* LEFT CONTENT */}
                    <div>
                        <h1 className="text-2xl lg:text-[36px] font-bold text-white max-w-2xl">
                            Find Your Next Medical & Healthcare Job in Australia
                        </h1>

                        <p className="mt-4 text-xs lg:text-[16px] text-white/70 max-w-2xl">
                            Discover rewarding medical and healthcare opportunities across Australia
                            with a team committed to your career growth.
                        </p>

                        {/* SEARCH BAR */}
                        <div className="mt-6 flex flex-col sm:flex-row gap-4">
                            {/* Profession */}
                            <select
                                value={profession}
                                onChange={(e) => setProfession(e.target.value)}
                                className="w-full sm:w-[240px] px-4 py-3 bg-white text-sm text-gray-700 rounded cursor-pointer"
                                >
                                <option value="">Select Profession</option>

                                {JobSeekerHub?.professions.map((item) => (
                                    <option key={item.profession_id} value={item.name}>
                                    {item.name}
                                    </option>
                                ))}
                            </select>

                            {/* Location */}
                            <select
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="w-full sm:w-[240px] px-4 py-3 bg-white text-sm text-gray-700 rounded cursor-pointer"
                                >
                                <option value="">Select Location</option>

                                {JobSeekerHub?.locations.map((item) => (
                                    <option key={item.state_id} value={item.name}>
                                    {item.name}
                                    </option>
                                ))}
                            </select>

                            {/* Search Button */}
                            <button
                                onClick={handleSearch}
                                className="bg-[#074CA4] cursor-pointer text-white px-6 py-3 rounded hover:bg-blue-700 transition"
                            >
                                Search Jobs
                            </button>

                        </div>

                        {/* CTA BUTTONS */}
                        <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
                            <Link href="/permanent/general-practitioner-jobs/australia?page=1" className="px-4 py-1 text-sm cursor-pointer bg-white/90 text-gray-700 lg:text-[16px] text-xs rounded-full" > GP Locum Jobs </Link>
                            <Link href="/permanent/allied-health-jobs/australia?page=1" className="px-4 py-1 text-sm cursor-pointer bg-white/90 text-gray-700 lg:text-[16px] text-xs rounded-full" > Allied Health Jobs </Link>
                            <Link href="/permanent/psychology-jobs/australia?page=1" className="px-4 py-1 text-sm cursor-pointer bg-white/90 text-gray-700 lg:text-[16px] text-xs rounded-full" > Psychologist Jobs </Link>
                            <Link href="/permanent/dentists-jobs/australia?page=1" className="px-4 py-1 text-sm cursor-pointer bg-white/90 text-gray-700 lg:text-[16px] text-xs rounded-full" > Dentist Jobs </Link>



                        </div>
                        <div className="mt-9 mb-4 flex flex-wrap gap-3">
                            <CTAButton icon={uploadCVIcon} text="Upload CV" />
                            <CTAButton icon={registerIcon} text="Register as a Candidate" />
                            <CTAButton icon={CallIcon} text="Talk to a Consultant" />
                            <CTAButton icon={ReferIcon} text="Refer a Friend" />
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="hidden lg:flex justify-center -mt-[46px]">
                        <Image
                            src={HeroImage}
                            alt="Job search illustration"
                            width={359}
                            priority
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

/* CTA BUTTON COMPONENT */
function CTAButton({
    icon,
    text,
}: {
    icon: StaticImageData;
    text: string;
}) {
    return (
        <button className="flex items-center gap-2 bg-white/30 text-white px-4 py-3 rounded-lg hover:bg-blue-900 transition text-xs lg:text-[16px]">
            <Image src={icon} alt={text} width={18} height={18} />
            {text}
        </button>
    );
}
