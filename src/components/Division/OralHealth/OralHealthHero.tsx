import Image, { StaticImageData } from "next/image";
import NationwideIcon from "@/assets/icons/globeico.png";
import ShortlistIcon from "@/assets/icons/time.png";
import AhpraIcon from "@/assets/icons/verified.png";
import PayIcon from "@/assets/icons/pay.png";

type Feature = {
    title: string;
    description: string;
    icon: StaticImageData;
};

const featuresLeft: Feature[] = [
    { title: "Nationwide coverage:", description: "metro, regional & remote", icon: NationwideIcon },
    { title: "Shortlists in ≈72 hours", description: "for priority roles", icon: ShortlistIcon },
];

const featuresRight: Feature[] = [
    { title: "AHPRA-registered &", description: "credentialing support", icon: AhpraIcon },
    { title: "Transparent pay, visas,", description: "and relocation guidance", icon: PayIcon },
];

export default function OralHealthHeroSection() {
    return (
        <section className="bg-[#040D48] full-width-section text-white py-[26px] px-4 lg:px-20">
            <div className="inner-width-section mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-[32px]">
                    <h1 className="text-2xl lg:text-[36px] font-bold">
                    Advancing Careers in Oral Health Across Australia
                    </h1>
                    <p className="text-xs lg:text-[16px] text-white/80 max-w-lg">
Build a fulfilling oral health career with access to trusted roles across Australia. Medfuture connects dentists and oral health professionals with opportunities that match skills, goals, and lifestyle.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 border-l-0 mt-[62px] border-r-0 border-dashed border-white/30">
                        {/* Left Features */}
                        <div className="space-y-4 sm:space-y-6 sm:pr-6 sm:border-r sm:border-dashed sm:border-white/30">
                            {featuresLeft.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <Image src={feature.icon} alt={feature.title} width={18} height={18} />
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
                                    <Image src={feature.icon} alt={feature.title} width={18} height={18} />
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

                {/* Right Column - Form */}
                <div>
                    <div className="bg-white/30 text-gray-800 rounded-[4px] p-6 shadow-lg">
                        <div className="mb-[9px]">
                            <label className="block text-[20px] text-white font-medium mb-[16px]">Browse Jobs</label>
                            <input
                                type="text"
                                placeholder="Enter job title or keyword"
                                className="w-full border border-gray-50 bg-white rounded-[4px] px-4 py-[13px] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>

                        <div className="mb-[9px]">
                            <select className="w-full border border-gray-50 bg-white rounded-[4px] px-4 py-[13px] text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
                                <option value="">Profession or Specialty</option>
                                <option value="medical">Medical</option>
                                <option value="allied">Allied Health</option>
                                <option value="dental">Dental</option>
                                <option value="mental">Mental Health</option>
                            </select>
                        </div>

                        <div className="mb-[9px]">
                            <select className="w-full border border-gray-50 bg-white rounded-[4px] px-4 py-[13px] text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
                                <option value="">Select location</option>
                                <option value="nsw">New South Wales</option>
                                <option value="vic">Victoria</option>
                                <option value="qld">Queensland</option>
                                <option value="wa">Western Australia</option>
                            </select>
                        </div>

                        <button className="w-full bg-blue-900 text-white py-[13px] px-4 rounded-md text-sm font-medium hover:bg-blue-800 transition mb-6">
                            Browse Jobs
                        </button>
                    </div>

                    <div className="bg-white rounded-[4px] pt-4 mt-4 px-[44px] py-[14px]">
                        <p className="text-[16px] font-[600] text-[#0F172A]">Quick Contact</p>
                        <p className="text-[#575D84] text-[16px] mt-1">
                            Phone: <a href="tel:+123456789" className="text-[16px] font-[500]">1300 633 388</a>
                        </p>
                        <p className="text-sm text-[#575D84] mt-1">
                            Email: <a href="mailto:info@example.com" className="text-[16px] font-[500]">helpdesk@themedfuture.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
