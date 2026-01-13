



export default function AboutHero() {
    return (
        <section className="">
            <div>
                <div className="py-[126px] mx-auto px-6">
                    {/* Grid Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative ">
                        {/* Mission */}
                        <div className="flex flex-col items-start text-left w-md">
                            <h3 className="text-[32px] font-semi-bold text-[#040D48] mb-4">What <span className=" text-[#074CA4] font-bold"> We Do</span></h3>
                            <p className="text-gray-700 text-[16px] leading-relaxed">
                                We provide end-to-end recruitment solutions designed to reduce workforce shortages and strengthen healthcare delivery. Whether you are an employer seeking urgent locum cover or a candidate planning your next long-term move, we make the process smooth, transparent, and efficient.                            </p>
                        </div>
                        {/* Vision */}
                        <div className="flex flex-col items-start text-left lg:pl-12 w-lg">
                         < ul className="list-disc list-inside space-y-2 font-[500] text-[16px] text-[#0F172A]">
                            <li>Locum, permanent, and contract recruitment</li>
                            <li>GP, doctor, nursing & midwifery, and allied health hiring</li>
                            <li>Rural, regional & metro workforce support</li>
                            <li>Immigration and onboarding guidance</li>
                            <li>Talent pooling and workforce planning</li>
                            <li>Compliance, credentialing, and reference checks</li>
                            <li>Dedicated division-based recruitment teams</li>
                        </ul>
                        </div>
                    {/* Vertical Dotted Separator */}
                    <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 border-l-2 border-dotted gap-2 border-gray-300"></div>
                </div>
            </div>
        </div>
    </section>
    );
}



