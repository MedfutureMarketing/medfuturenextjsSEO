"use client";
<<<<<<< HEAD
import Image from "next/image";
import avatar from "@/assets/homeico/aboutusimg.webp";
=======
import avatar from "@/assets/homeico/aboutusimg.png";

import Image from "next/image";

>>>>>>> 0624cd8599da62fbfb6e101042b25e3d0aa75471

const cards = [
  { text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad”", author: "Dr. Peter Parker", role: "General Practitioner" },
  { text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad”", author: "Dr. Peter Parker", role: "General Practitioner" },
  { text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad”", author: "Dr. Peter Parker", role: "General Practitioner" },
  { text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad”", author: "Dr. Peter Parker", role: "General Practitioner" },
  { text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad”", author: "Dr. Peter Parker", role: "General Practitioner" },
<<<<<<< HEAD
  { text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad”", author: "Dr. Peter Parker", role: "General Practitioner" },
=======
  { text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad” Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", author: "Dr. Peter Parker", role: "General Practitioner" },
>>>>>>> 0624cd8599da62fbfb6e101042b25e3d0aa75471
  { text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad”", author: "Dr. Peter Parker", role: "General Practitioner" },
  { text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad”", author: "Dr. Peter Parker", role: "General Practitioner" },
];

export default function TestimonialPuzzle() {
  return (
<<<<<<< HEAD
    <section className="w-full lg:py-[146px] py-16 px-4 lg:px-0">
      <h2 className="lg:text-[36px] text-2xl font-bold text-center text-[#074CA4] ">
        Testimonials
      </h2>

      <div className="flex sm:hidden overflow-x-auto gap-6 py-4">
        {cards.map((item, i) => (
          <div
            key={i}
            className="min-w-[280px] bg-[#F8F8F8] border border-gray-50 shadow-sm rounded-[8px] p-5 flex flex-col justify-between"
          >
            <p className="lg:text-[16px] text-sm text-gray-600 leading-relaxed mb-4">{item.text}</p>
            <div className="flex justify-end">
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-[14px] font-semibold text-[#074CA4]">{item.author}</p>
                  <p className="text-[14px] text-[#074CA4]">{item.role}</p>
                </div>
                <Image
                  src={avatar}
                  alt={item.author}
                  className="rounded-full object-cover h-[43px] w-[43px]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      
      <div className="hidden sm:grid max-w-screen-2xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
        {[0, 1, 2, 3].map((col) => {
          const start = col * 2;
          const items = cards.slice(start, start + 2);
=======
    <section className="w-full py-20 px-4 lg:px-0">
      <h2 className="text-[36px] font-bold text-center text-[#074CA4] mb-12">
        Testimonials
      </h2>

      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
        {[0, 1, 2, 3].map((col) => {
          const start = col * 2;
          const items = cards.slice(start, start + 2);

>>>>>>> 0624cd8599da62fbfb6e101042b25e3d0aa75471
          const isTall = col % 2 === 1;
          const offset = col % 2 === 0 ? "mt-16" : "mt-2";

          return (
            <div key={col} className={`${offset} grid gap-6`}>
              {items.map((item, i) => (
                <div
                  key={i}
                  className={`bg-[#F8F8F8] border border-gray-50 shadow-sm rounded-[8px] p-5 flex flex-col justify-between hover:shadow-md transition
<<<<<<< HEAD
                    ${isTall ? "h-[280px]" : "h-[250px]"}
                  `}
                >
                  <p className="text-[16px] text-gray-600 leading-relaxed mb-4">{item.text}</p>
=======
                    ${isTall ? "h-[280px]" : "h-250px"}
                  `}
                >
                  <p className="text-[16px] text-gray-600 leading-relaxed mb-4">
                    {item.text}
                  </p>
>>>>>>> 0624cd8599da62fbfb6e101042b25e3d0aa75471
                  <div className="flex justify-end">
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="text-[14px] font-semibold text-[#074CA4]">{item.author}</p>
<<<<<<< HEAD
                        <p className="text-[14px] text-[#074CA4]">{item.role}</p>
                      </div>
                      <Image
                        src={avatar}
                        alt={item.author}
                        className="rounded-full object-cover h-[43px] w-[43px]"
                      />
                    </div>
                  </div>
=======
                        <p className="text-[14px] text-gray-500">{item.role}</p>
                      </div>
                      <Image
                        src={avatar} // or src={avatarUrl}
                        alt={item.author}
                        
                        className="rounded-full object- h-[43px] w-[43px] "
                      />
                    </div>
                  </div>


>>>>>>> 0624cd8599da62fbfb6e101042b25e3d0aa75471
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <div className="text-center mt-10">
<<<<<<< HEAD
        <button className="bg-[#074CA4] text-white w-[104px] px-6 py-2 text-sm rounded-[4px]">
=======
        <button className="bg-[#074CA4] text-white px-6 py-2 text-sm rounded-md">
>>>>>>> 0624cd8599da62fbfb6e101042b25e3d0aa75471
          View All
        </button>
      </div>
    </section>
  );
}
