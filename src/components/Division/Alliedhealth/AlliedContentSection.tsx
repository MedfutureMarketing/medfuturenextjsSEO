import Image from "next/image";
import img1 from "@/assets/division/image.png"; 
import img2 from "@/assets/division/Alliedhealth.png"; 
import img4 from "@/assets/division/image3.png"; 

export default function ImageTextSectionAllied() {
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
At Medfuture, we are committed to supporting Allied Health professionals in building meaningful and rewarding careers across Australia. We work closely with Speech Pathologists, Physiotherapists, Occupational Therapists, and Podiatrists to understand their professional goals, clinical interests, and preferred work environments, ensuring every opportunity presented is genuinely aligned with their career direction.
                    </p>
                    <p className="text-[#4A5565] text-xs lg:text-[16px] leading-[24px] mb-10">
Our Allied Health team understands the realities of clinical practice, including workload expectations, patient diversity, and professional development needs. Whether you are seeking your first role, planning a career move, or looking for greater flexibility, we provide clear guidance and honest support throughout your job search. Opportunities are available across metropolitan, regional, and rural locations, allowing you to explore roles that suit both your professional and personal lifestyle preferences.
                    </p>
                    <p className="text-[#4A5565] text-xs lg:text-[16px] leading-[24px] mb-10">
From registration to placement, Medfuture offers ongoing support to help you navigate each stage of your career journey. We take the time to understand your experience, qualifications, and future aspirations, helping you make informed decisions with confidence. Our focus is not just on helping you secure a role, but on supporting long term career progression and professional satisfaction.
                    </p>
                    <p className="text-[#4A5565] text-xs lg:text-[16px] leading-[24px] mb-3">
With a strong national presence and a dedicated Allied Health division, Medfuture connects you with opportunities that support growth, stability, and purpose. When you partner with Medfuture, you gain access to a team that values your contribution to healthcare and is committed to supporting your success at every stage of your Allied Health career.
                    </p>
                </div>

            </div>
        </section>
    );
}