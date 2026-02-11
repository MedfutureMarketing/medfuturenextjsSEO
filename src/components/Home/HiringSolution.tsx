import Link from "next/link";

export default function FlexibleHiringSolution() {
    const allCards = [
        {
            title: "Permanent Recruitment Solutions",
            desc: "Connect with skilled healthcare professionals for long-term roles, ensuring team stability.",
            points: [
                "Tailored candidate sourcing",
                "Cultural fit assessment",
                "Streamlined hiring process",
                "Ongoing support post-placement",
            ],
        },
        {
            title: "Permanent Recruitment Solutions",
            desc: "Connect with skilled healthcare professionals for long-term roles, ensuring team stability.",
            points: [
                "Tailored candidate sourcing",
                "Cultural fit assessment",
                "Streamlined hiring process",
                "Ongoing support post-placement",
            ],
        },
        {
            title: "Permanent Recruitment Solutions",
            desc: "Connect with skilled healthcare professionals for long-term roles, ensuring team stability.",
            points: [
                "Tailored candidate sourcing",
                "Cultural fit assessment",
                "Streamlined hiring process",
                "Ongoing support post-placement",
            ],
        },
        {
            title: "Permanent Recruitment Solutions",
            desc: "Connect with skilled healthcare professionals for long-term roles, ensuring team stability.",
            points: [
                "Tailored candidate sourcing",
                "Cultural fit assessment",
                "Streamlined hiring process",
                "Ongoing support post-placement",
            ],
        },
        {
            title: "Permanent Recruitment Solutions",
            desc: "Connect with skilled healthcare professionals for long-term roles, ensuring team stability.",
            points: [
                "Tailored candidate sourcing",
                "Cultural fit assessment",
                "Streamlined hiring process",
                "Ongoing support post-placement",
            ],
        },
    ];

    const Card = ({ title, desc, points }: { title: string; desc: string; points: string[] }) => (
        <div className="bg-white rounded-lg border shadow-sm flex flex-col px-6 py-6 w-full ">
            <h3 className="text-lg lg:text-[16px] font-semibold text-[#0A2E5C] mb-3">{title}</h3>
            <p className="text-gray-600 lg:text-[14px] text-xs">{desc}</p>
            <ul className="list-disc pl-5 text-[#171717B2] mt-3 lg:text-[14px] text-xs text-sm">
                {points.map((p, i) => (
                    <li key={i}>{p}</li>
                ))}
            </ul>
            <div className="grid grid-cols-2 gap-2 mt-[42px]">
                <Link href="/contact-us" className="bg-[#0A2E5C] text-white text-sm py-2 rounded text-center hover:underline">
                    Talk to Us
                </Link>
                <Link href="/sign-up" className="border-2 border-[#0A2E5C] text-[#0A2E5C] text-sm py-2 rounded text-center hover:underline">
                    Submit a Vacancy
                </Link>
            </div>
        </div>
    );

    return (
        <section className="w-full bg-gray-50 lg:py-[106px] px-4 lg:px-0 py-10 full-width-section ">
            <div className=" mx-auto inner-width-section">
                <div className="text-left mb-12">

                    <h2 className="text-3xl lg:text-[40px]  text-gray-800 mb-4 text-center lg:text-left">
                        Flexible <span className="text-[#074CA4] font-bold">Hiring Solutions</span>
                    </h2>

                  
                    <div className="flex flex-col lg:flex-row lg:items-center items-center justify-center lg:justify-between gap-4">

                        <p className="text-gray-600 lg:text-[16px] text-xs max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
                            Every employer is different — and so is our approach. Choose the engagement model that fits your goals, budget and timeframes.
                        </p>

                        <button className="self-center lg:self-auto px-[19px] py-[9.5px] bg-[#074CA4] text-white text-sm lg:text-[14px] rounded-[4px] hover:bg-blue-700 transition-colors whitespace-nowrap">
                            View Employer Hub
                        </button>

                    </div>

                </div>


          
                <div className="hidden md:grid lg:grid-cols-3 gap-6 mb-12">
                    {allCards.slice(0, 3).map((card, i) => (
                        <Card key={i} {...card} />
                    ))}
                </div>
                <div className="hidden md:grid lg:grid-cols-2 gap-6">
                    {allCards.slice(3).map((card, i) => (
                        <Card key={i} {...card} />
                    ))}
                </div>

           
                <div className="flex md:hidden overflow-x-auto gap-4 snap-x snap-mandatory -mx-4 px-4">
                    {allCards.map((card, i) => (
                        <div className="snap-start w-[340px] flex-shrink-0" key={i}>
                            <Card {...card} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
