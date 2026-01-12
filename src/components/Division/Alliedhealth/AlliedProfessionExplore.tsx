import Image from "next/image";
import Link from "next/link";

import Med2 from "@/assets/division/SPECIALIST-gp-fracgp-farcrrm.png";
import Med3 from "@/assets/division/LOCUM-GP.png";

import Med4 from "@/assets/division/RURAL-GP.png";

import Med5 from "@/assets/division/SIMG.png";

import ico from "@/assets/jobseeker/Navigation.png";




export default function RecruitmentDivisionsTabs() {


    return (
        <section className="mt-[154px] full-width-section mb-[154px] ">
            <div className=" text-center inner-width-section mx-auto">
                <h2 className="lg:text-[36px]  text-2xl  font-[500] text-[#040D48]  mb-[40px]">Recruitment <span className="text-[#074CA4] font-[700]"> Professions</span></h2>
                <div className="">
                    <div className="flex flex-wrap justify-center  gap-6">
                        <div
                            className="flex flex-col bg-white  lg:w-[284px] rounded-lg shadow-[0_8px_15px_rgba(0,0,0,0.12)]
                                            hover:shadow-lg transition p-4 text-left w-full"
                        >
                            <div className="relative  h-36 mb-4">
                                <Image src={Med2} alt='' fill className="object-cover rounded" />
                            </div>
                            <h3 className="lg:text-[20px] font-[600] text-[#074CA4] mb-2"> SPECIALIST GP
                                (FRACGP & FACRRM)</h3>
                            <p className="text-gray-600 text-sm lg:text-[16px] mb-4">Explore VR positions offering excellent billings, supportive teams.</p>
                            <Link
                                href="/fracgp-facrrm"
                                className="mt-auto inline-block text-left  text-[14px] font-[500] text-[#074CA4] px-4 py-2 rounded  transition"
                            >
                                Explore <Image src={ico} alt="arrow" className="inline-block ml-2 w-4 h-4 object-contain" />
                            </Link>
                        </div>
                        <div
                            className="flex flex-col bg-white  lg:w-[284px] rounded-lg shadow-[0_8px_15px_rgba(0,0,0,0.12)]
                                            hover:shadow-lg transition p-4 text-left w-full"
                        >
                            <div className="relative  h-36 mb-4">
                                <Image src={Med3} alt='' fill className="object-cover rounded" />
                            </div>
                            <h3 className="lg:text-[20px] font-[600] text-[#074CA4] mb-2"> LOCUM GP</h3>
                            <p className="text-gray-600 text-sm lg:text-[16px] mb-4">Explore VR positions offering excellent billings, supportive teams.</p>
                            <Link
                                href='{blog.link}'
                                className="mt-auto inline-block text-left  text-[14px] font-[500] text-[#074CA4] px-4 py-2 rounded  transition"
                            >
                                Explore <Image src={ico} alt="arrow" className="inline-block ml-2 w-4 h-4 object-contain" />
                            </Link>
                        </div>
                        <div
                            className="flex flex-col bg-white  lg:w-[284px] rounded-lg shadow-[0_8px_15px_rgba(0,0,0,0.12)]
                                            hover:shadow-lg transition p-4 text-left w-full"
                        >
                            <div className="relative  h-36 mb-4">
                                <Image src={Med4} alt='' fill className="object-cover rounded" />
                            </div>
                            <h3 className="lg:text-[20px] font-[600] text-[#074CA4] mb-2"> RURAL GP</h3>
                            <p className="text-gray-600 text-sm lg:text-[16px] mb-4">Explore VR positions offering excellent billings, supportive teams.</p>
                            <Link
                                href='{blog.link}'
                                className="mt-auto inline-block text-left  text-[14px] font-[500] text-[#074CA4] px-4 py-2 rounded  transition"
                            >
                                Explore <Image src={ico} alt="arrow" className="inline-block ml-2 w-4 h-4 object-contain" />
                            </Link>
                        </div>
                        <div

                            className="flex flex-col bg-white  lg:w-[284px] rounded-lg shadow-[0_8px_15px_rgba(0,0,0,0.12)]
                                            hover:shadow-lg transition p-4 text-left w-full"
                        >
                            <div className="relative  h-36 mb-4">
                                <Image src={Med5} alt='' fill className="object-cover rounded" />
                            </div>
                            <h3 className="lg:text-[20px] font-[600] text-[#074CA4] mb-2"> SIMG
                                (INTERNATIONAL)</h3>
                            <p className="text-gray-600 text-sm lg:text-[16px] mb-4">Explore VR positions offering excellent billings, supportive teams.</p>
                            <Link
                                href='{blog.link}'
                                className="mt-auto inline-block text-left  text-[14px] font-[500] text-[#074CA4] px-4 py-2 rounded  transition"
                            >
                                Explore <Image src={ico} alt="arrow" className="inline-block ml-2 w-4 h-4 object-contain" />
                            </Link>
                        </div>

                    </div></div>


            </div>
        </section>
    );
}
