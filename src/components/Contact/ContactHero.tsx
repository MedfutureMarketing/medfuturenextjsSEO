"use client";

import Image from "next/image";


import HeroImage from "@/assets/homeico/contactpage.png";



export default function Hero() {

    return (
        <section className="bg-[#0D1A3E]  full-width-section">
            <div className="inner-width-section lg:py-0 py-16">
                <div className="grid items-center gap-12 lg:grid-cols-[1fr_359px]">
                
                    <div>
                        <h1 className="text-2xl lg:text-[36px] font-bold text-white ">
                            Get in Touch With Our Team
                        </h1>

                        <p className="mt-4 text-xs lg:text-[16px] text-white/70 max-w-2xl">
                            We are here to support healthcare professionals and employers across Australia. Reach out to our team for assistance, inquiries, or guidance. Whether you need recruitment support, career advice, or tailored solutions, our specialists are ready to help you every step of the way.
                        </p>


                    </div>

                    
                    <div className="hidden lg:flex justify-center -mt-[46px]">
                        <Image
                            src={HeroImage}
                            alt="Job search illustration"
                            width={359}
                                priority={false}
            loading="lazy"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

