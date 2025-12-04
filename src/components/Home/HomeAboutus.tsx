import Image from "next/image";
import aboutusimg from "@/assets/homeico/aboutusimg.png";

export default function AboutUs() {
  return (
    <section className="w-full  px-4 lg:px-0">
      <div className="max-w-screen-2xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl lg:text-[40px] text-gray-800 mb-[13px] text-center lg:text-left">
          About<span className="text-[#074CA4] font-bold"> Us</span>
        </h2>

        {/* Grid with custom column widths */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1.2fr_auto_1.2fr] relative gap-0">

          {/* Grid 1 */}
          <div className="bg-[#040D48] border-dashed shadow-sm text-center px-2 py-[77px] flex flex-col justify-center h-[313px] hover:shadow-md transition border-b md:border-b-0 md:border-r-2 border-gray-300">
            <h3 className="text-[20px] md:text-xl font-semibold text-white">
             Healthcare-Only Focus
            </h3>
            <p className="text-[#FCFCFC] mt-[16px] text-[16px] px-[29px] md:text-base leading-relaxed">
             We specialise exclusively in healthcare recruitment, connecting professionals and employers to deliver high-quality patient care outcomes. 
            </p>
          </div>

          {/* Grid 2 */}
          <div className="bg-[#040D48] shadow-sm px-2 py-[77px] px-[29px] text-center flex flex-col justify-center h-[313px] hover:shadow-md transition border-b md:border-b-0 md:border-r-2 border-gray-300">
            <h3 className="text-lg md:text-xl font-semibold text-white">
             Compliance First
            </h3>
            <p className="text-[#FCFCFC] mt-[16px] text-[16px] leading-relaxed">
             Our processes prioritise regulatory compliance, ensuring candidates meet all legal, professional, and credential requirements.
            </p>
          </div>

          {/* Grid 3 - Horizontal Image Breakout (Centered) */}
          <div className="relative z-10 flex justify-center lg:-mt-[50px]">
            <div className="overflow-hidden rounded-none shadow-md  border-gray-300">
              <Image
                src={aboutusimg}
                alt="About Us"
                className="w-full lg:w-[240px] lg:h-[397px] object-cover"
              />
            </div>
          </div>

          {/* Grid 4 */}
          <div className="bg-[#040D48] shadow-sm py-[77px] px-[29px] text-center flex flex-col justify-center h-[313px] hover:shadow-md transition md:border-l-2 border-gray-300">
            <h3 className="text-lg md:text-xl font-semibold text-white">
              Speed with Quality
            </h3>
            <p className="text-[#FCFCFC] mt-[16px] text-[16px] leading-relaxed">
             We deliver fast recruitment solutions without compromising quality, matching the right talent with the right roles.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
