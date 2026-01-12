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

  return (
    <section className="w-full lg:py-[146px] py-16 px-4 lg:px-0">
      <h2 className="lg:text-[36px] text-2xl font-bold text-center text-[#074CA4] ">
        Testimonials
      </h2>

      <div className="hidden sm:grid max-w-screen-2xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
        {[0, 1, 2, 3].map((col) => {
          const start = col * 2;
          const items = homeData?.testimonials?.slice(start, start + 2);
          const isTall = col % 2 === 1;
          const offset = col % 2 === 0 ? "mt-16" : "mt-2";

          return (
            <div key={col} className={`${offset} grid gap-6`}>
              {items?.map((item, i) => (
                <div
                  key={i}
                  className={`bg-[#F8F8F8] border border-gray-50  rounded-[8px] p-5 flex flex-col justify-between hover:shadow-md transition
                    ${isTall ? "h-[280px]" : "h-[250px]"}
                  `}
                >
                  <p className="text-[16px] text-gray-600 leading-relaxed mb-4">
                    {item.comment.length > 150
                      ? `${item.comment.substring(0, 150)}...`
                      : item.comment}
                  </p>                  <div className="flex justify-end">
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="text-[14px] font-semibold text-[#074CA4]">{item.user_name}</p>
                        <p className="text-[14px] text-[#074CA4]">{item.profession_name}</p>
                      </div>
                      <Image
                        src={avatar}
                        alt={item.user_name}
                        className="rounded-full object-cover h-[43px] w-[43px]"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <div className="text-center mt-10">
        <button className="bg-[#074CA4] text-white w-[104px] px-6 py-2 text-sm rounded-[4px]">
          View All
        </button>
      </div>
    </section>
  );
}

