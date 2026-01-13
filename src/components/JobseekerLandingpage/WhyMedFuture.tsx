import Image from "next/image";
import medfutureglobe from "@/assets/homeico/medfutureglobe.png";


export default function WhyMedFuture() {
    const features = [
        {
            image: medfutureglobe,
            title: "Global Reach, Local Expertise",
            description:
                "Roles across Australia, New Zealand, the UK and Ireland with regional consultants.",
        },
        {
            image: medfutureglobe,
            title: "End-to-End Career Support",
            description:
                "From registration & licensing to onboarding and relocation guidance.",
        },
        {
            image: medfutureglobe,
            title: "Tailored Job Matching",
            description:
                "Our ATS + recruiters match roles to your skills, values and lifestyle.",
        },
        {
            image: medfutureglobe,
            title: "Trusted Nationwide",
            description:
                "2,000+ placements each year across metro and rural communities.",
        },
    ];

    return (
        <section className=" mb-[106px] bg-white">
            <div className="inner-width-section">
                <div className="grid gap-12  lg:grid-cols-[1.5fr_2fr] mt-[86px] items-start">
                    {/* LEFT COLUMN */}
                    <div className="flex flex-col   border-r-2 border-dashed border-[#0F172A] pr-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            <span className="lg:text-[36px] text-2xl  text-[#074CA4] "> Why</span> <br /> <span className="text-2xl lg:text-[36px] font-[500] text-[#040D48]">Medical & Healthcare Professionals </span><br />
                            <span className="lg:text-[48px] text-3xl text-[#074CA4]">Choose</span> <span className="lg:text-[36px] text-2xl text-[#040D48]">Medfuture</span>
                        </h2>
                        <p className="text-[#4A5565] lg:text-[16px] text-xs mb-6">
                            MedFuture is dedicated to connecting healthcare professionals
                            with rewarding job opportunities across Australia. We provide
                            support, guidance, and resources to help you thrive in your
                            career journey.
                        </p>
                        <div className="border-l-2 border-dashed border-gray-300 h-full"></div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {features.map((feature) => (
                            <div key={feature.title} className="flex flex-col items-center text-center">
                                <div className="mb-4 w-10 h-10 relative">
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-md lg:text-[16px] font-semibold text-gray-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-xs">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
