"use client";
import Image from "next/image";
import avatar from "@/assets/homeico/aboutusimg.webp";
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

  // Group testimonials into rows of 4 for desktop
  const groupedTestimonials = homeData?.testimonials ? 
    Array.from({ length: Math.ceil(homeData.testimonials.length / 4) }, (_, i) =>
      homeData.testimonials.slice(i * 4, i * 4 + 4)
    ) : [];

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

  return (
    <section className="w-full lg:py-[146px] py-16 px-4 lg:px-0">
      <h2 className="lg:text-[36px] text-2xl font-bold text-center text-[#074CA4] mb-12">
        Testimonials
      </h2>

      {/* Desktop Puzzle Layout */}
      <div className="hidden lg:block max-w-screen-2xl mx-auto">
        {groupedTestimonials.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-6 mb-0">
            {row.map((item, colIndex) => {
              const isOffsetCol = colIndex % 2 === 1;
              const offsetClass = isOffsetCol ? "mt-0" : "mt-8";
              
              return (
                <div key={colIndex} className={`flex-1 ${offsetClass}`}>
                  <div className="bg-[#F8F8F8] border border-gray-50 rounded-[8px] p-5 flex flex-col justify-between hover:shadow-md transition h-[250px]">
                    <p className="text-[16px] text-gray-600 leading-relaxed mb-4">
                      {item.comment.length > 150
                        ? `${item.comment.substring(0, 150)}...`
                        : item.comment}
                    </p>
                    
                    <div className="flex justify-end">
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <p className="text-[14px] font-semibold text-[#074CA4]">
                            {item.user_name}
                          </p>
                          <p className="text-[14px] text-[#074CA4]">
                            {item.profession_name}
                          </p>
                        </div>
                        <Image
                          src={avatar}
                          alt={item.user_name}
                          className="rounded-full object-cover h-[43px] w-[43px]"
                            priority={false}
            loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Mobile & Tablet Slider */}
      <div className="lg:hidden max-w-screen-2xl mx-auto">
        <div className="relative">
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-300 ease-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {homeData?.testimonials?.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-[#F8F8F8] border border-gray-50 rounded-[8px] p-5 flex flex-col justify-between h-[300px]">
                    <p className="text-[16px] text-gray-600 leading-relaxed mb-4">
                      {item.comment.length > 150
                        ? `${item.comment.substring(0, 150)}...`
                        : item.comment}
                    </p>
                    
                    <div className="flex justify-end">
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <p className="text-[14px] font-semibold text-[#074CA4]">
                            {item.user_name}
                          </p>
                          <p className="text-[14px] text-[#074CA4]">
                            {item.profession_name}
                          </p>
                        </div>
                        <Image
                          src={avatar}
                          alt={item.user_name}
                          className="rounded-full object-cover h-[43px] w-[43px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[#074CA4] text-white p-2 rounded-full hover:bg-[#0a3a7a] transition z-10"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#074CA4] text-white p-2 rounded-full hover:bg-[#0a3a7a] transition z-10"
          >
            ❯
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {homeData?.testimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition ${
                  index === currentSlide ? "bg-[#074CA4]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        {/* <button className="bg-[#074CA4] text-white px-6 py-2 text-sm rounded-[4px] hover:bg-[#0a3a7a] transition">
          View All
        </button> */}
      </div>
    </section>
  );
}