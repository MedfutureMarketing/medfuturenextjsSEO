

import Image from "next/image"
import Coverimage from "@/assets/employer/doctor.gif"

export default function FracgpStepByStep() {
    return (
        <section className="max-w-7xl bg-[#FCFCFC] mx-auto px-6 py-20">
            <h2 className="lg:text-[36px] text-2xl font-[700] uppercase text-[#074CA4] font-semibold mb-12">
            Advance Your GP Registrar Career with Medfuture.
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* ---------------- Left: How It Works ---------------- */}
                <div>
                    <div className="relative space-y-12">
                        <div className="absolute left-5 top-0 bottom-0 border-l-2 border-dotted border-black" />
                        {[
                            {
                                step: 1,
                                title: 'Search Jobs',
                                desc: 'Browse live GP Registrar vacancies across Australia.'
                            },
                            {
                                step: 2,
                                title: 'Register with Medfuture',
                                desc: 'Create a profile to get matched to clinics that fit your priorities.'
                            },
                            {
                                step: 3,
                                title: 'Upload CV',
                                desc: 'Share your resume securely for discreet market updates.'
                            },
                            {
                                step: 4,
                                title: 'Refer & Earn',
                                desc: 'Introduce a fellow GP and receive referral rewards on placement.'
                            },
                        ].map((item,) => (
                            <div key={item.step} className="relative flex gap-6">

                                {/* Number Circle */}
                                <div className="relative z-10">
                                    <div className="w-10 h-10  rounded-full bg-black text-white flex items-center justify-center font-semibold">
                                        {item.step}
                                    </div>
                                </div>
                                {/* Content */}
                                <div>
                                    <h4 className="font-semibold text-[#0F172A] text-md lg:text-[20px] mb-1">
                                        {item.title}
                                    </h4>
                                    <p className="text-[#0F172A] lg:text-[16px] text-xs max-w-md">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* ---------------- Right: Form ---------------- */}
                <div className="relative bg-white rounded-[8px] p-8 ">
                    {/* Decorative rectangle behind the image */}
                    <div className="absolute bottom-2 right-[0px] w-[315px] h-[187px] bg-[#0D1A3E] z-1"></div>
                    <Image src={Coverimage} alt="tst" className="relative h-[357px w-[523.2903442382812px] z-10" />
                </div>
            </div>
        </section>
    )
}
