"use client";

import Image from "next/image";
import card1 from "@/assets/employer/1.png";

// Dummy card data
const cards = [
    {
        title: "98%",
        subtitle: "Client Satisfaction Rate",
        image: card1,
    },
    {
        title: "24/7",
        subtitle: "Support for Urgent Staffing Requests",
        image: card1,
    },
    {
        title: "Nationwide Coverage",
        subtitle: "Urban & Regional Areas",
        image: card1,
    },
    {
        title: "2000+",
        subtitle: "Trusted Healthcare Employers",
        image: card1,
    },
];

export default function InfoCards() {
    return (
        <section className="mt-[91px] px-4 hidden lg:block">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cards.map((card) => (
                    <div
                        key={card.title}
                        className="relative lg:w-[261px] h-[302px] rounded-lg overflow-hidden shadow-lg group"
                    >
                        {/* Background Image */}
                        <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            className="object-cover"
                        />

                        {/* Blue Glass Overlay */}
                        <div className="absolute inset-0 "></div>

                        {/* Title & Subtitle */}
                        <div className="absolute bottom-4 left-4 text-white z-10">
                            <h3
                                className={` lg:w-[150px] font-[700] mb-[11px] ${card.title === "Nationwide Coverage"
                                        ? "lg:text-[18px] font-600" // fixed font size
                                        : "lg:text-[48px] text-4xl"
                                    }`}
                            >
                                {card.title}
                            </h3>
                            <p className="text-xs lg:text-[20px] lg:w-[200px] w-[120px] ">{card.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
