import Link from "next/dist/client/link";
import React from "react";

type Location = {
    name: string;
    address: string;
    mapEmbedUrl: string; // Google Maps embed URL
};

const locations: Location[] = [
    {
        name: "Australia",
        address: "Suite 204- Level 2 ,55-75 Victor Crescent, Narre Warren, Victoria - 3805, Australia",
        mapEmbedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.058528947689!2d145.30955657728677!3d-38.02241497192402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad61755198fe2bf%3A0x1e60e41130b61145!2sSuite%20204-%20Level%202%2F55%20Victor%20Cres%2C%20Narre%20Warren%20VIC%203805%2C%20Australia!5e0!3m2!1sen!2slk!4v1766115310752!5m2!1sen!2slk",
    },
    {
        name: "New Zealand",
        address: "Level 16, NTT Tower, 157 Lambton Quay, Wellington 6011, New Zealand",
        mapEmbedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.211983704462!2d174.77418437738183!3d-41.2824906713134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38af4469c2eb53%3A0x188ff948eaf78583!2sNTT%20New%20Zealand%20Limited!5e0!3m2!1sen!2slk!4v1766115461137!5m2!1sen!2slk",
    },
    {
        name: "Sri Lanka",
        address: "65 Srimath Anagarika Dharmapala Mawatha Colombo 00700 Sri Lanka",
        mapEmbedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.81386160481!2d79.85198467674998!3d6.91284629308666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259699b732433%3A0xb6dd255a347c3cb8!2s65%20Srimath%20Anagarika%20Dharmapala%20Mawatha%2C%20Colombo%2000700!5e0!3m2!1sen!2slk!4v1766115518979!5m2!1sen!2slk",
    },
];

export default function LocationMap() {
    return (
        <section className="bg-white py-20">
            {/* Choose Your Path Section */}
            <section className="bg-white">
                <div className="full-width-section bg-gradient-to-r from-[#0B3264] to-[#1B62B7]">
                    <div className="inner-width-section mx-auto px-6 py-[92px] text-center">
                        <div className="w-full md:w-[754px] mx-auto">
                            <h2 className="text-[36px] font-[400] text-white mb-[24px]">
                                Choose Your Path to <span className="font-[700]">Get Started</span>
                            </h2>

                            <p className="text-white text-[16px] font-[500] mb-[42px]">
                                Whether you are looking for your next career opportunity or seeking
                                the right talent for your organisation, select the option below to
                                begin your journey with us.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                               <Link href="/sign-up"> <button className="rounded-md cursor-pointer bg-white px-8 py-3 text-[#0F172A] font-[500] hover:bg-slate-700 transition">
                                    Register as a Job Seeker
                                </button></Link>

                                 <Link href="/sign-up">  <button className="rounded-md bg-white px-8 py-3 text-[#0F172A] font-[500] hover:bg-slate-700 transition">
                                    Register as an Employer
                                </button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className=" mx-auto px-6 mt-[140px] mb-[142px]">
                <h2 className="text-3xl font-semi-bold text-center text-[#040D48] mb-12">
                    Find <span className="font-[700] text-[#074CA4]"> Us</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-[12px] gap-y-24">
                    {locations.map((loc) => (
                        <div
                            key={loc.name} // <- ADD THIS
                            className="relative w-full h-[238.67999267578125px] rounded-xl shadow-lg"
                        >
                            {/* Google Map */}
                            <iframe
                                src={loc.mapEmbedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                title={loc.name}
                                className="absolute top-0 left-0 w-full h-full"
                            ></iframe>

                            {/* Floating Address Box */}
                            <div className="absolute bottom-0 left-[160px] transform -translate-x-1/2 translate-y-1/2 w-4/5 bg-white p-4 z-10">
                                <h3 className="font-semibold lg:[16px] text-sm text-slate-900">{loc.name}</h3>
                                <p className="text-slate-600 lg:[16px] text-sm">{loc.address}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
