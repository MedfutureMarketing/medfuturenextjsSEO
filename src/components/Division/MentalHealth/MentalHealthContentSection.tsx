import Image from "next/image";
import img1 from "@/assets/division/image.png"; 
import img2 from "@/assets/division/mentalhealth.png"; 
import img4 from "@/assets/division/image3.png"; 

export default function MentalHealthImageTextSection() {
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
                        Medfuture is a specialist medical recruitment agency dedicated to supporting medical practitioners across Australia. Our Medical Practitioner Division focuses solely on helping General Practitioners navigate career opportunities with confidence clarity and long term stability. We understand the professional expectations regulatory requirements and lifestyle considerations that shape medical careers in Australia.
                    </p>
                    <p className="text-[#4A5565] text-xs lg:text-[16px] leading-[24px] mb-10">
                        We support a wide range of GP career pathways including Specialist General Practitioners holding FRACGP or FACRRM recognition GP Registrars seeking suitable training aligned roles international family medicine specialists progressing through approved pathways and locum GPs looking for flexible short term or ongoing opportunities. Each role is assessed carefully to ensure it aligns with your registration status experience and professional direction.
                    </p>
                    <p className="text-[#4A5565] text-xs lg:text-[16px] leading-[24px] mb-10">
                        At Medfuture your career journey is supported beyond job matching. Our consultants provide guidance on AHPRA registration pathways Medicare considerations suitable locations and contract clarity so you can make informed decisions at every stage. International doctors receive structured support to understand specialist recognition processes regional suitability and transition requirements before accepting a role.
                    </p>
                    <p className="text-[#4A5565] text-xs lg:text-[16px] leading-[24px] mb-3">
                        With opportunities available across New South Wales Victoria Queensland South Australia Western Australia Tasmania the Northern Territory and regional Australia Medfuture offers access to roles that support both career progression and work life balance. Our approach is professional transparent and practitioner focused enabling you to build a rewarding medical career within Australia’s healthcare system with confidence and support.
                    </p>
                </div>

            </div>
        </section>
    );
}