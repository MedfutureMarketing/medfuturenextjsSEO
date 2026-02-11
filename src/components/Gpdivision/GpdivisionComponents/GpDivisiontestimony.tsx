/* eslint-disable react/no-unescaped-entities */


"use client";

import { useEffect, useState } from "react";
import { apiGet } from "@/lib/api";

type HomeData = {
    clientCount: number;
    candidateCount: number;
    testimonials: Array<{
        comment: string;
        user_name: string;
        profession_name: string;
    }>;
};

export default function TestimonialPuzzle() {
    const [homeData, setHomeData] = useState<HomeData | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        async function fetchHomeData() {
            try {
                const res = await apiGet<HomeData>(`web/home-page/get-all`);
                setHomeData(res);
            } catch {
            }
        }
        fetchHomeData();
    }, []);

    const nextSlide = () => {
        if (homeData?.testimonials) {
            setCurrentSlide((prev) => (prev + 1) % homeData.testimonials.length);
        }
    };

    const prevSlide = () => {
        if (homeData?.testimonials) {
            setCurrentSlide((prev) => (prev - 1 + homeData.testimonials.length) % homeData.testimonials.length);
        }
    };
    //   silder auto play
    useEffect(() => {
        if (!homeData?.testimonials || homeData.testimonials.length === 0) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) =>
                (prev + 1) % homeData.testimonials.length
            );
        }, 2000); // change speed here (ms)

        return () => clearInterval(interval);
    }, [homeData]);
    //   silder auto play


    // Star rating component
    const StarRating = () => (
        <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    className="w-4 h-4 fill-[#FDB241]"
                    viewBox="0 0 20 20"
                >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
            ))}
        </div>
    );

    return (
        <section className="full-width-section bg-[#F8FAFC] px-4 lg:px-0 ">
            <div className="inner-width-section lg:py-20 py-16  mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <p className="text-[#074CA4] text-sm font-medium mb-2">Testimonials</p>
                    <div className="flex items-start justify-between">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a1a] mb-3">
                                Trusted Voices from Healthcare Professionals
                            </h2>
                            <p className="text-gray-600 text-base max-w-2xl">
                                Real experiences and honest feedback from doctors and specialists<br />
                                who've partnered with Medfuture.
                            </p>
                        </div>

                        {/* Desktop Navigation Arrows */}
                        <div className="hidden lg:flex gap-3">
                            <button
                                onClick={prevSlide}
                                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Desktop Slider */}
                <div className="hidden lg:block relative">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-out gap-6"
                            style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
                        >
                            {homeData?.testimonials?.map((item, index) => (
                                <div key={index} className="w-[410px] flex-shrink-0">
                                    <div className="  rounded-lg p-0 h-full flex flex-col">
                                        <p className="text-gray-700 border-l-4 px-8 border-[#074CA4] text-[15px] leading-relaxed mb-6 flex-grow">
                                            {item.comment.length > 310
                                                ? `${item.comment.substring(0, 180)}...`
                                                : item.comment}
                                        </p>

                                        <div>
                                            <p className="text-[#1a1a1a] font-semibold text-base mb-0.5">
                                                {item.user_name}
                                            </p>
                                            <p className="text-gray-600 text-sm mb-2">
                                                {item.profession_name}
                                            </p>
                                            <StarRating />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile & Tablet Slider */}
                <div className="lg:hidden">
                    <div className="relative">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {homeData?.testimonials?.map((item, index) => (
                                    <div key={index} className="w-full flex-shrink-0 px-2">
                                        <div className=" border-l-4 border-[#074CA4] shadow-sm rounded-lg p-6">
                                            <p className="text-gray-700 text-[15px] leading-relaxed mb-6">
                                                {item.comment.length > 180
                                                    ? `${item.comment.substring(0, 180)}...`
                                                    : item.comment}
                                            </p>

                                            <div>
                                                <p className="text-[#1a1a1a] font-semibold text-base mb-0.5">
                                                    {item.user_name}
                                                </p>
                                                <p className="text-gray-600 text-sm mb-2">
                                                    {item.profession_name}
                                                </p>
                                                <StarRating />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white border border-gray-300 text-gray-700 w-8 h-8 rounded-full hover:bg-gray-50 transition z-10 flex items-center justify-center"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white border border-gray-300 text-gray-700 w-8 h-8 rounded-full hover:bg-gray-50 transition z-10 flex items-center justify-center"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex justify-center gap-2 mt-6">
                            {homeData?.testimonials?.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2 h-2 rounded-full transition ${index === currentSlide ? "bg-[#074CA4]" : "bg-gray-300"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}