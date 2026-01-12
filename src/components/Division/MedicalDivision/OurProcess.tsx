

import Image from "next/image"
import Coverimage from "@/assets/employer/doctor.gif"

export default function StepByStep() {
    return (
        <section className="full-width-section bg-[#FCFCFC] mx-auto px-6 mb-[154px]">
            <div className="inner-width-section">
            <h2 className="lg:text-[36px]  text-2xl font-[700] uppercase text-[#074CA4] font-semibold mb-12">
               Our Process — Fast, Transparent, Compliant
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                    <div className="relative space-y-12">
                        <div className="absolute left-5 top-0 bottom-0 border-l-2 border-dotted border-black" />

                        {[
                            {
                                step: 1,
                                title: 'Register & Consult',
                                desc: 'Tell us your scope, hours, locations and billing goals.'
                            },
                            {
                                step: 2,
                                title: 'Shortlist in 72h',
                                desc: 'Targeted roles with clinic insights and pay transparency.'
                            },
                            {
                                step: 3,
                                title: 'Interview & Offer',
                                desc: 'We organise meetings, references and negotiation.'
                            },
                            {
                                step: 4,
                                title: 'Compliance & Start',
                                desc: 'AHPRA, provider, credentials and onboarding handled.'
                            },
                        ].map((item,) => (
                            <div key={item.step} className="relative flex gap-6">

                         
                                <div className="relative z-10">
                                    <div className="w-10 h-10  rounded-full bg-black text-white flex items-center justify-center font-semibold">
                                        {item.step}
                                    </div>
                                </div>

                       
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
              
                <div className="relative bg-white rounded-[8px] p-8 ">
                  
                    <div className="absolute bottom-2 right-[0px] w-[315px] h-[187px] bg-[#0D1A3E] z-1"></div>
                  
                    <Image src={Coverimage} alt="tst" className="relative h-[357px w-[523.2903442382812px] z-10" />
                </div>
            </div></div>
        </section>
    )
}
