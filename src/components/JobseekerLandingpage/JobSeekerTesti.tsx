'use client';
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

// Example images
import jobseekerhub from "@/assets/homeico/jobseekerhub.png";

interface Testimonial {
    text: string;
    name: string;
    profession: string;
    image: StaticImageData;
}

const testimonials: Testimonial[] = [
    { text: "\"I am so glad that I worked through Medfuture for my recent job search. I worked mostly with Sree, the service was exceptionally professional. She was .......\"", name: "Dr. Thanu", profession: "Doctor", image: jobseekerhub },
    { text: "\"We have relied on Medfuture Healthcare Recruitment for our healthcare staffing needs, and they have consistently delivered top-tier candidates. Their ...\"", name: "[ Name withheld for privacy ]", profession: "Vocationally Registered GP", image: jobseekerhub },
    { text: "\" can only say it was a nice and helpful service you provided me with and it was very supportive in the communication between myself and the intereste....\"", name: "Dr. Markus Schuemann", profession: "Doctor", image: jobseekerhub },
    { text: "\"This was first time I needed agency to find placement for me.It had been good experience so far. Especially sree has been very efficient in communicat...\"", name: "Dr. Zahra", profession: "Doctor", image: jobseekerhub },
    { text: "\"I had a very positive experience. The contestant who I dealt with was exceptionally person entered and provided fantastic service. She patiently and c...\"", name: "Dr Ambareesh Mohan", profession: "Doctor", image: jobseekerhub },
    { text: "\"I am an Australian GP who has worked with Medfuture for an extended period of time. I can strongly recommend Medfuture in providing medical placement...\"", name: "[ Name withheld for privacy ]", profession: "Vocationally Registered GP", image: jobseekerhub },
    { text: "\"Outstanding experience working with this team. They understood exactly what I was looking for and matched me perfectly with the right opportunity...\"", name: "Dr. Sarah Williams", profession: "Emergency Medicine Specialist", image: jobseekerhub },
    { text: "\"The professionalism and dedication shown throughout my placement journey was remarkable. Highly recommended for any medical professional...\"", name: "Dr. James Mitchell", profession: "Surgeon", image: jobseekerhub },
    { text: "\"Great communication and support at every step. They really care about their candidates and ensure the best fit for both parties involved...\"", name: "Dr. Emily Johnson", profession: "GP", image: jobseekerhub },
    { text: "\"I was impressed by their knowledge of the healthcare sector and their ability to match candidates with positions that truly suit them...\"", name: "Dr. Robert Chen", profession: "Consultant", image: jobseekerhub },
    { text: "\"From initial contact to placement, everything was seamless. The team was responsive and professional throughout the entire process...\"", name: "Dr. Patricia Moore", profession: "Dentist", image: jobseekerhub },
    { text: "\"Working with them made my job search stress-free. They handled all the details and kept me informed every step of the way...\"", name: "Dr. Michael Brown", profession: "Pharmacist", image: jobseekerhub },
];

const CARDS_PER_PAGE = 6;

export default function TestimonialSection() {
    const [currentPage, setCurrentPage] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);

    const totalPages = Math.ceil(testimonials.length / CARDS_PER_PAGE);
    const startIndex = currentPage * CARDS_PER_PAGE;
    const currentTestimonials = testimonials.slice(startIndex, startIndex + CARDS_PER_PAGE);

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
        setCurrentSlide(0);
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
        setCurrentSlide(0);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % currentTestimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + currentTestimonials.length) % currentTestimonials.length);
    };

    return (
        <section className="mb-[140px]">
            <div className="inner-width-section mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8">

                    {/* Left Column */}
                    <div className="flex items-center">
                        <div>
                            <h2 className="text-3xl text-[#074CA4] font-[600] lg:text-[36px] max-w-sm">
                                What Our Candidates <br /><br />
                                <span className="font-[400] lg:text-[36px] text-xl leading-tight text-[#040D48]">Say
                                    Insights, experiences, and stories from our community in the medical industry.</span>
                            </h2>
                        </div>
                    </div>

                    {/* Right Column - Desktop Grid */}
                    <div className="hidden lg:flex items-center justify-between gap-2">
                        {/* Left Arrow */}
                        <button
                            onClick={prevPage}
                            className="bg-white  p-0 hover:bg-[#074CA4] transition-colors group flex-shrink-0"
                            aria-label="Previous page"
                        >
                            <svg className="w-5 h-5 text-[#074CA4] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Cards Grid */}
                        <div className="grid grid-cols-3 gap-6 flex-1">
                            {Array.from({ length: 3 }).map((_, colIndex) => (
                                <div
                                    key={colIndex}
                                    className={`flex flex-col gap-6 ${colIndex === 1 ? "mt-15" : ""}`}
                                >
                                    {currentTestimonials.slice(colIndex * 2, colIndex * 2 + 2).map((testimonial, index) => (
                                        <div
                                            key={index}
                                            className="bg-[#F8F8F8] border rounded-lg p-4 flex flex-col gap-4"
                                        >
                                            <p className="text-[#0F172A] text-sm mb-[24px]">{testimonial.text}</p>
                                            <div className="flex justify-end items-center gap-4">
                                                <div className="flex flex-col text-right">
                                                    <p className="font-semibold text-[14px] text-[#0F172A]">{testimonial.name}</p>
                                                    <p className="text-[#0F172A] text-xs text-[14px]">{testimonial.profession}</p>
                                                </div>
                                                <div className="relative w-[43px] h-[43px] flex-shrink-0">
                                                    <Image
                                                        src={jobseekerhub}
                                                        alt={testimonial.name}
                                                        className="rounded-full object-cover w-full h-full"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>

                        {/* Right Arrow */}
                        <button
                            onClick={nextPage}
                            className="bg-white  p-0 hover:bg-[#074CA4] transition-colors group flex-shrink-0"
                            aria-label="Next page"
                        >
                            <svg className="w-5 h-5 text-[#074CA4] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Right Column - Mobile Slider */}
                    <div className="lg:hidden relative">
                        <div className="overflow-hidden">
                            <div 
                                className="flex transition-transform duration-300 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {currentTestimonials.map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className="w-full flex-shrink-0 px-2"
                                    >
                                        <div className="bg-[#F8F8F8] border rounded-lg p-4 flex flex-col gap-4">
                                            <p className="text-[#0F172A] text-sm mb-[24px]">{testimonial.text}</p>
                                            <div className="flex justify-end items-center gap-4">
                                                <div className="flex flex-col text-right">
                                                    <p className="font-semibold text-[14px] text-[#0F172A]">{testimonial.name}</p>
                                                    <p className="text-[#0F172A] text-xs text-[14px]">{testimonial.profession}</p>
                                                </div>
                                                <div className="relative w-[43px] h-[43px] flex-shrink-0">
                                                    <Image
                                                        src={jobseekerhub}
                                                        alt={testimonial.name}
                                                        className="rounded-full object-cover w-full h-full"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <svg className="w-6 h-6 text-[#074CA4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                            aria-label="Next testimonial"
                        >
                            <svg className="w-6 h-6 text-[#074CA4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Dots Indicator for slides */}
                        <div className="flex justify-center gap-2 mt-4">
                            {currentTestimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-colors ${
                                        currentSlide === index ? "bg-[#074CA4]" : "bg-gray-300"
                                    }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Pagination Dots for Pages (Desktop & Mobile) */}
               
            </div>
        </section>
    );
}