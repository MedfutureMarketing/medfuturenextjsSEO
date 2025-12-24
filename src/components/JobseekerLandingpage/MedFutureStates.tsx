import Image from "next/image";

// Replace with your actual images
import NSW from "@/assets/states/NewSouthWales.png";
import WA from "@/assets/states/WesternAustralia.webp";
import SA from "@/assets/states/SouthAustralia.webp";
import NT from "@/assets/states/NorthernTerritory.webp";
import QLD from "@/assets/states/Queensland.webp";
import VIC from "@/assets/states/Victoria.webp";
import TA from "@/assets/states/Tasmania.webp";
import ACT from "@/assets/states/AustralianCapitalTerritory.webp";

export default function MedFutureStates() {
  const states = [
    { name: "New South Wales", image: NSW },
    { name: "Western Australia", image: WA },
    { name: "South Australia", image: SA },
    { name: "Northern Territory", image: NT },
    { name: "Queensland", image: QLD },
    { name: "Victoria", image: VIC },
    { name: "Tasmania", image: TA },
    { name: "Australian Capital Territory", image: ACT },
  ];

  return (
    <section className=" bg-white">
      <div className="inner-width-section">
        <h2 className="text-2xl lg:text-[36px] font-[500]  text-gray-900 mb-8 text-left">
          MedFuture Across<span className="lg:text-[40px] text-2xl text-[#074CA4] font-[700]">  Australia</span>
        </h2>

        <div
          className="
            flex gap-6 overflow-x-auto pb-4
            lg:grid lg:grid-cols-8 lg:gap-[13px] lg:overflow-visible
          "
        >
          {states.map((state) => (
            <div
              key={state.name}
              className="flex-none flex flex-col lg:shadow-xl    filter grayscale hover:grayscale-0 transition duration-300 ease-in-out shadow-md  rounded-[8px] items-center w-[127px]"
            >
              <div className="w-[127px] h-[237px] relative">
                <Image
                  src={state.image}
                  alt={state.name}
                  fill
                  className="object-cover rounded-[8px] px-[5px] "
                />
              </div>
              <p className="mt-2 text-center text-[#040D48] text-sm font-[500] px-[5px] py-[5px]  text-gray-700">
                {state.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
