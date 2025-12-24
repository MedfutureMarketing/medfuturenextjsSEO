"use client";

import Image from "next/image";
import img1 from "@/assets/homeico/contactpage.png"; 
import img2 from "@/assets/homeico/contactpage.png"; 
import img3 from "@/assets/homeico/contactpage.png"; 
import img4 from "@/assets/homeico/contactpage.png"; 

export default function ImageTextSection() {
    return (
        <section className="py-20 full-width-section px-4 lg:px-20 ">
            <div className="mx-auto inner-width-section grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] gap-8 items-center">

                {/* Left Column - 2x2 Image Grid */}
                <div className="grid grid-cols-2 grid-rows-2 gap-2">
                    <Image
                        src={img1}
                        alt="Image 1"
                        className="w-[205PX] h-[265px] object-cover rounded-lg "
                    />
                    <Image
                        src={img2}
                        alt="Image 2"
                        className="w-[205PX] h-[265px] object-cover rounded-lg "
                    />
                    <Image
                        src={img3}
                        alt="Image 3"
                        className="w-[205PX] h-[265px] object-cover rounded-lg "
                    />
                    <Image
                        src={img4}
                        alt="Image 4"
                        className="w-[205PX] h-[265px] object-cover rounded-lg "
                    />
                </div>

                {/* Right Column - Paragraph */}
                <div className="flex flex-col justify-center">

                    <p className="text-gray-700 text-xs lg:text-[16px] leading-[24px] mb-6">
                        Choosing the right recruitment partner is critical for psychologists seeking rewarding mental health careers. Medfuture understands the diverse pathways within psychology including clinical counselling educational and organisational roles. Our dedicated mental health recruitment team focuses solely on job seekers ensuring each opportunity aligns with professional goals registration requirements and lifestyle preferences. From metropolitan practices to regional community services we support psychologists at every career stage.
                    </p>
                    <p className="text-gray-700 text-xs lg:text-[16px] leading-[24px] mb-6   ">

                        Medfuture takes a personalised approach to psychology recruitment by understanding individual specialisations experience levels and work preferences. Whether you are seeking full time part time or locum psychology roles we guide you through suitable options with clarity and transparency. Our strong understanding of AHPRA standards Medicare pathways and Australian mental health frameworks ensures job seekers receive accurate role information and compliant opportunities that support career progression and professional confidence.
                    </p>
                    <p className="text-gray-700 text-xs lg:text-[16px] leading-[24px] mb-3   ">
                        With a national reach and a reputation built on trust Medfuture provides psychologists access to exclusive mental health vacancies across Australia. We prioritise clear communication career guidance and ongoing support throughout the job search journey. Our content and job matching approach is designed for answer based search discovery helping psychologists quickly find relevant roles by location specialty and employment type. Medfuture stands as a long term career partner helping mental health professionals secure roles where their expertise makes a genuine difference.
                    </p>
                </div>

            </div>
        </section>
    );
}
