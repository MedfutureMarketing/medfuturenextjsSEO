"use client";
import Image from "next/image";
import avatar from "@/assets/homeico/aboutusimg.webp";

const cards = [
    { text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad”", author: "Dr. Peter Parker", role: "General Practitioner" },
    { text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad”", author: "Dr. Peter Parker", role: "General Practitioner" },
    { text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad”", author: "Dr. Peter Parker", role: "General Practitioner" },
    { text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad”", author: "Dr. Peter Parker", role: "General Practitioner" },
    { text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad”", author: "Dr. Peter Parker", role: "General Practitioner" },
    { text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad”", author: "Dr. Peter Parker", role: "General Practitioner" },
    { text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad”", author: "Dr. Peter Parker", role: "General Practitioner" },
    { text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad”", author: "Dr. Peter Parker", role: "General Practitioner" },
];

export default function TestimonialPuzzle() {
    return (
        <section className="w-full lg:py-[146px] py-16 px-4 lg:px-0">
            <h2 className="lg:text-[36px] text-2xl font-bold text-center text-black  ">
                A Trusted Recruitment Partner for <span className="text-[#074CA4]"> 10,000+</span> Healthcare Services      </h2>

            {/* Mobile Slider */}
            <div className="flex sm:hidden overflow-x-auto gap-6 ">
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

            {/* Desktop Grid */}
            {/* Desktop Puzzle Grid */}
            <div className="hidden sm:grid  mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 mt-16">
                {[0, 1, 2, 3].map((col) => {
                    const start = col * 2
                    const items = cards.slice(start, start + 2)

                    // 👇 Alternate column offset (puzzle effect)
                    const columnOffset = col % 2 === 1 ? 'mt-6 lg:mt-9' : 'mt-0'

                    return (
                        <div key={col} className={`grid gap-4 ${columnOffset}`}>
                            {items.map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-[#F8F8F8] border border-gray-50  rounded-[8px] p-5 flex flex-col justify-between h-[260px] hover:shadow-md transition"
                                >
                                    <p className="text-[16px] text-gray-600 leading-relaxed mb-4">
                                        {item.text}
                                    </p>

                                    <div className="flex justify-end">
                                        <div className="flex items-center gap-3">
                                            <div className="text-right">
                                                <p className="text-[14px] font-semibold text-[#074CA4]">
                                                    {item.author}
                                                </p>
                                                <p className="text-[14px] text-[#074CA4]">
                                                    {item.role}
                                                </p>
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
                    )
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
