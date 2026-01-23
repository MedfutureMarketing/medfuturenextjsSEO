import Image from "next/image";
import aboutusimg from "@/assets/homeico/aboutusimg.webp";

const cards = [
  {
    title: "Healthcare-Only Focus",
    description: "We specialise exclusively in healthcare recruitment, connecting professionals and employers to deliver high-quality patient care outcomes.",
  },
  {
    title: "Compliance First",
    description: "Our processes prioritise regulatory compliance, ensuring candidates meet all legal, professional, and credential requirements.",
  },
  {
    title: "Speed with Quality",
    description: "We deliver fast recruitment solutions without compromising quality, matching the right talent with the right roles.",
  },
];

export default function AboutUs() {
  return (
    <section className="w-full px-4 lg:px-0">
      <div className="max-w-screen-2xl mx-auto">

        <h2 className="text-2xl lg:text-[40px] text-gray-800 mb-4 text-center lg:text-left">
          About<span className="text-[#074CA4] font-bold"> Us</span>
        </h2>

    
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1.2fr_auto_1.2fr] gap-0 relative">
   
          <article className="bg-[#040D48] border-dashed shadow-sm text-center px-[47px] lg:py-16 flex flex-col justify-center lg:h-[313px] py-10 hover:shadow-md transition border-b md:border-b-0 md:border-r-2 border-gray-300">
            <h3 className="text-lg md:text-[20px] font-semibold text-white">{cards[0].title}</h3>
            <p className="text-[#FCFCFC] mt-4 text-xs md:text-[16px] leading-relaxed">
              {cards[0].description}
            </p>
          </article>

          <article className="bg-[#040D48] shadow-sm px-[47px] py-10 text-center flex flex-col justify-center lg:py-16 lg:h-[313px] py-6 hover:shadow-md transition border-b md:border-b-0 md:border-r-2 border-gray-300">
            <h3 className="text-lg md:text-[20px] font-semibold text-white">{cards[1].title}</h3>
            <p className="text-[#FCFCFC] mt-4 text-xs md:text-[16px] leading-relaxed">
              {cards[1].description}
            </p>
          </article>

          <div className="relative z-10 flex justify-center lg:-mt-12">
            <div className="overflow-hidden shadow-md">
              <Image
                src={aboutusimg}
                alt="About Us"
                width={240}
                height={397}
                className="object-cover rounded-none"
                  priority={false}
            loading="lazy"
              />
            </div>
          </div>

      
          <article className="bg-[#040D48] shadow-sm px-[47px] px-4 text-center flex py-10 flex-col justify-center lg:h-[313px] hover:shadow-md transition md:border-l-2 border-gray-300">
            <h3 className="text-lg md:text-[20px] font-semibold text-white">{cards[2].title}</h3>
            <p className="text-[#FCFCFC] mt-4 text-xs md:text-[16px] leading-relaxed">
              {cards[2].description}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
