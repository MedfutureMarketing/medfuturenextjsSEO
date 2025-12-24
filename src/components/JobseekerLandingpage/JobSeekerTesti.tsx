'use client';
import React from "react";
import Image, { StaticImageData } from "next/image";

// Example images
import jobseekerhub from "@/assets/homeico/jobseekerhub.png";
import Testimonial2 from "@/assets/homeico/jobseekerhub.png";
import Testimonial3 from "@/assets/homeico/jobseekerhub.png";
import Testimonial4 from "@/assets/homeico/jobseekerhub.png";
import Testimonial5 from "@/assets/homeico/jobseekerhub.png";
import Testimonial6 from "@/assets/homeico/jobseekerhub.png";

interface Testimonial {
    text: string;
    name: string;
    profession: string;
    image: StaticImageData;
}

const testimonials: Testimonial[] = [
    { text: "“Medfuture cut through the noise and got me three interviews in a week. Clear comms and honest advice.”", name: "Dr. Emily Smith", profession: "General Practitioner", image: jobseekerhub },
    { text: "“Medfuture cut through the noise and got me three interviews in a week. Clear comms and honest advice.”", name: "Dr. John Doe", profession: "GP Locum", image: Testimonial2 },
    { text: "“Medfuture cut through the noise and got me three interviews in a week. Clear comms and honest advice.”", name: "Dr. Sarah Lee", profession: "GP Consultant", image: Testimonial3 },
    { text: "“Medfuture cut through the noise and got me three interviews in a week. Clear comms and honest advice.”", name: "Dr. Ahmed Khan", profession: "International GP", image: Testimonial4 },
    { text: "“Medfuture cut through the noise and got me three interviews in a week. Clear comms and honest advice.”", name: "Dr. Lisa Wong", profession: "General Practitioner", image: Testimonial5 },
    { text: "“Medfuture cut through the noise and got me three interviews in a week. Clear comms and honest advice.”", name: "Dr. Michael Brown", profession: "Locum GP", image: Testimonial6 },
];

export default function TestimonialSection() {
    return (
        <section className="mb-[140px]">
            <div className="inner-width-section  mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8">

                    {/* Left Column */}
                    <div className="flex items-center">
                        <h2 className="text-3xl text-[#074CA4] font-[600] lg:text-[36px]    max-w-sm">
                            What Our  Candidates <br /><br />
                            <span className=" font-[400] text-[#040D48]"> Say
                                Insights, experiences, and stories from our community in the medical industry.</span>
                        </h2>

                    </div>

                    {/* Right Column */}
                    <div className="grid grid-cols-3 gap-6">
                        {Array.from({ length: 3 }).map((_, colIndex) => (
                            <div
                                key={colIndex}
                                className={`flex flex-col gap-6 ${colIndex === 1 ? "mt-10" : "" // Middle column offset for staggered effect
                                    }`}
                            >
                                {testimonials.slice(colIndex * 2, colIndex * 2 + 2).map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#F8F8F8] border rounded-lg p-4 flex flex-col gap-4"
                                    >
                                        {/* Full width testimonial text */}
                                        <p className="text-[#0F172A] text-sm mb-[24px]">{testimonial.text}</p>

                                        {/* Name, profession, and image row */}
                                        <div className="flex justify-end items-center gap-4">
                                            {/* Left side: Name & Profession */}
                                            <div className="flex flex-col text-right">
                                                <p className="font-semibold text-[14px] text-[#0F172A]">{testimonial.name}</p>
                                                <p className="text-[#0F172A] text-xs text-[14px]">{testimonial.profession}</p>
                                            </div>

                                            {/* Right side: Image */}
                                            <div className="relative w-[43px] h-[43px] flex-shrink-0">
                                                <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="rounded-full object-cover"
                                                    fill
                                                />
                                            </div>
                                        </div>

                                    </div>



                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
