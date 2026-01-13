import Image, { StaticImageData } from "next/image";
import NationwideIcon from "@/assets/icons/globeico.png";
import ShortlistIcon from "@/assets/icons/Passport.png";
import AhpraIcon from "@/assets/icons/verified.png";
import PayIcon from "@/assets/icons/Certificate.png";

type Feature = {
    title: string;
    description: string;
    icon: StaticImageData;
};

const featuresLeft: Feature[] = [
    { title: "Nationwide coverage:", description: "metro, regional & remote", icon: NationwideIcon },
    { title: "Visa & relocation friendly", description: " clinics (where eligible)", icon: ShortlistIcon },
];

const featuresRight: Feature[] = [
    { title: "AHPRA-registered &", description: "credentialing support", icon: AhpraIcon },
    { title: "Referral rewards for ", description: "successful placements,", icon: PayIcon },
];

export default function SimgHeroSection() {
    return (
        <section className="bg-[#040D48] full-width-section text-white py-[26px] px-4 lg:px-20">
            <div className="inner-width-section mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-[32px]">
                    <h1 className="text-2xl lg:text-[36px] font-bold">
                        International Family Medicine Specialist Pathway Careers in Australia
                    </h1>
                    <p className="text-xs lg:text-[16px] text-white/80 max-w-lg">
Advance your medical career through Australia’s International Family Medicine Specialist Pathway. This route supports experienced family physicians seeking structured assessment, supervised practice, and long term professional recognition within Australia’s diverse and patient centred healthcare system.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 border-l-0 mt-[62px] border-r-0 border-dashed border-white/30">
                        {/* Left Features */}
                        <div className="space-y-4 sm:space-y-6 sm:pr-6 sm:border-r sm:border-dashed sm:border-white/30">
                            {featuresLeft.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <Image src={feature.icon} alt={feature.title} width={24} height={24} />
                                    <div>
                                        <h3 className="font-[400] lg:text-[16px] text-xs">
                                            {feature.title} <br /> {feature.description}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Features */}
                        <div className="space-y-4 sm:space-y-6 sm:pl-6">
                            {featuresRight.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <Image src={feature.icon} alt={feature.title} width={24} height={24} />
                                    <div>
                                        <h3 className="font-[400] lg:text-[16px] text-xs">
                                            {feature.title} <br /> {feature.description}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN - Counters */}
                <div className="grid grid-cols-2 lg:grid-cols-1  gap-4 lg:gap-[17px] mt-6 lg:mt-0">
                    <div className="bg-white/7 rounded-[8px] h-[89px] w-full lg:w-[284px] flex flex-col items-center justify-center text-center">
                        <span className="lg:text-[30px] text-md font-bold">2000+</span>
                        <span className="text-white/80 lg:text-[14px] px-6 text-xs">Active International  Family 
Medicine Jobs</span>
                    </div>
                    <div className="bg-white/7 rounded-[8px] h-[89px] w-full lg:w-[284px] flex flex-col items-center justify-center text-center">
                        <span className="lg:text-[30px] text-md font-bold">9000+</span>
                        <span className="text-white/80 lg:text-[14px] text-xs px-5">International Family Medicine
 in Talent Pool</span>
                    </div>
                    <div className="bg-white/7 rounded-[8px] h-[89px] w-full lg:w-[284px] flex flex-col items-center justify-center text-center">
                        <span className="lg:text-[30px] text-md font-bold">8</span>
                        <span className="text-white/80 lg:text-[14px] text-xs">States & Territories</span>
                    </div>
                    <div className="bg-white/7 rounded-[8px] h-[89px] w-full lg:w-[284px] flex flex-col items-center justify-center text-center">
                        <span className="lg:text-[30px] text-md font-bold">~3</span>
                        <span className="text-white/80 lg:text-[14px] text-xs">Avg. Time to Offer(Weeks)</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
