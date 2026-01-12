import Image from "next/image";
import img1 from "@/assets/division/image.png"; 
import img2 from "@/assets/division/OralHealthRoles.png"; 
import img4 from "@/assets/division/image3.png"; 

export default function ImageTextSection() {
    return (
        <section className="py-20 full-width-section px-4 lg:px-20 ">
            <div className="mx-auto inner-width-section grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 items-center">
                {/* Reduced gap-8 to gap-4 above */}

                {/* Left Column - 2x2 Image Grid */}
                <div className="grid grid-cols-2 grid-rows-2 w-md gap-y-4">
                    {/* Reduced gap-[6px] to gap-[2px] above */}
                    <Image
                        src={img1}
                        alt="Image 1"
                        className="w-[205px] h-[265px] object-cover gray-scale-500 rounded-[8px]"
                    />
                    <Image
                        src={img2}
                        alt="Image 2"
                        className="w-[205px] h-[265px] object-cover rounded-[8px]"
                    />
                    {/* Empty space for 3rd image */}
                    <div className="w-[205px] h-[265px]"></div>
                    <Image
                        src={img4}
                        alt="Image 4"
                        className="w-[205px] h-[265px] object-cover rounded-[8px]"
                    />
                </div>

                {/* Right Column - Paragraph */}
                <div className="flex flex-col justify-center">

                    <p className="text-[#4A5565] text-xs lg:text-[16px] leading-[24px] mb-10">
Choosing the right recruitment partner is essential for oral health professionals seeking long term career growth in Australia. Medfuture specialises in oral health recruitment with a clear understanding of the professional journeys of general dentists, dental specialists, and oral hygienists. Our approach focuses on aligning your clinical expertise with roles that support career progression, work life balance, and professional satisfaction across metropolitan, regional, and rural Australia.                    </p>
                    <p className="text-[#4A5565] text-xs lg:text-[16px] leading-[24px] mb-10">
At Medfuture, we recognise that every oral health professional has unique career priorities. Whether you are seeking permanent roles, locum opportunities, or specialist pathways, our recruitment process is designed around your preferences. We focus on profession specific knowledge, Australian dental regulations, and location based opportunities to ensure you are presented with roles that truly fit your qualifications and experience. Our deep understanding of oral health careers allows us to guide you with clarity and confidence at every stage.
                    </p>
                    <p className="text-[#4A5565] text-xs lg:text-[16px] leading-[24px] mb-10">
Our candidate centric approach ensures visibility for oral health roles across key Australian regions, supporting discoverability through location relevant opportunities. By focusing on profession aligned terminology and regional relevance, we help job seekers find suitable roles efficiently. Medfuture supports oral health professionals with personalised guidance, transparent communication, and access to career opportunities that support long term success within Australia’s evolving dental sector.
                    </p>
                    {/* <p className="text-[#4A5565] text-xs lg:text-[16px] leading-[24px] mb-3">
                        With opportunities available across New South Wales Victoria Queensland South Australia Western Australia Tasmania the Northern Territory and regional Australia Medfuture offers access to roles that support both career progression and work life balance. Our approach is professional transparent and practitioner focused enabling you to build a rewarding medical career within Australia’s healthcare system with confidence and support.
                    </p> */}
                </div>

            </div>
        </section>
    );
}