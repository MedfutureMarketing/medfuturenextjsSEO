import Image, { StaticImageData } from "next/image";

// Consultant types
interface Consultant {
    id: string;
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
}

interface ConsultantGroup {
    consultants: Consultant[];
    centerImages: StaticImageData[];
}

// Import images directly from assets
import testimony1 from "@/assets/Divisionimages/testimony.png";
import testimony2 from "@/assets/Divisionimages/testimony2.png";
import testimony3 from "@/assets/Divisionimages/testimony3.png";
import testimony4 from "@/assets/Divisionimages/testimony4.png";
import callico from "@/assets/homeico/Callico.png";
import emailico from "@/assets/homeico/Emailico.png";
import Locationicos from "@/assets/homeico/Locationicos.png";

// Simulate SSR data fetching
async function getConsultantData(): Promise<ConsultantGroup> {
    return {
        consultants: [
            {
                id: "1",
                name: "Sree Ranju",
                title: "Chief Manager - GP Metro and PLGP Unit",
                email: "sree@medifuture.com.au",
                phone: "+61 489 071 766",
                location: "New South Wales",
            },
            {
                id: "2",
                name: "Christopher Chris",
                title: "Recruitment Business Consultant",
                email: "christopher@themedifuture.com.au",
                phone: "+61 482 090 315",
                location: "Victoria",
            },
            {
                id: "3",
                name: "Alex Johnson",
                title: "Recruitment Specialist",
                email: "alex@themedifuture.com.au",
                phone: "+61 400 123 456",
                location: "Tasmania",
            },
            {
                id: "4",
                name: "Ridma Gomezzzz",
                title: "Division Manager - AHP",
                email: "tamy@themedifuture.com.au",
                phone: "+61 123 456 789",
                location: "Queensland",
            },
            {
                id: "5",
                name: "test Gomezzzz",
                title: "Division Manager - AHP",
                email: "tamy@themedifuture.com.au",
                phone: "+61 123 456 789",
                location: "Queensland",
            },
            {
                id: "6",
                name: "test Gomezzzz",
                title: "Division Manager - AHP",
                email: "tamy@themedifuture.com.au",
                phone: "+61 123 456 789",
                location: "Queensland",
            },

        ],
        centerImages: [testimony1, testimony2, testimony3, testimony4],
    };
}

// Consultant Card Component
function ConsultantCard({ consultant }: { consultant: Consultant }) {
  return (
    <div className="pb-2">
      <h3 className="text-sm lg:text-[18px] font-bold text-[#040D48] mb-0.5">
        {consultant.name}
      </h3>

      <p className="text-xs sm:text-sm lg:text-[14px] text-[#040D48] mb-3">
        {consultant.title}
      </p>

      <div className="space-y-2 mb-5">
        {/* Email */}
        <div className="flex items-start gap-3">
          <div className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0 mt-0.5">
            <Image src={emailico} alt="Email icon" />
          </div>
          <a
            href={`mailto:${consultant.email}`}
            className="text-xs sm:text-sm lg:text-[14px] text-[#4A5565] hover:text-blue-600 break-all"
          >
            {consultant.email}
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0">
            <Image src={callico} alt="Phone icon" />
          </div>
          <a
            href={`tel:${consultant.phone}`}
            className="text-xs sm:text-sm lg:text-[14px] text-[#4A5565] hover:text-blue-600"
          >
            {consultant.phone}
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0">
            <Image src={Locationicos} alt="Location icon" />
          </div>
          <span className="text-xs sm:text-sm lg:text-[14px] text-[#4A5565]">
            {consultant.location}
          </span>
        </div>
      </div>

      <div className="lg:border-b lg:border-gray-300 lg:border-dashed mb-6 lg:mb-8" />
    </div>
  );
}


// SSR Page Component
export default async function ConsultantsPage() {
    const data = await getConsultantData();

    // Split consultants into left and right columns (desktop only)
    const leftConsultants = data.consultants.slice(0, Math.ceil(data.consultants.length / 2));
    const rightConsultants = data.consultants.slice(Math.ceil(data.consultants.length / 2));

    return (
        <div className="full-width-section bg-[#F7F7F782] mt-6 lg:mt-[130px]">
  {/* Header */}
  <div className="px-4 sm:px-6 inner-width-section lg:px-0 py-8 lg:py-[83px]">
    <div className=" px-0 lg:px-0 md:px-8"><div className=" mx-auto">
      <p className="text-xs lg:text-[14px] text-[#074CA4] font-medium mb-2">
        Meet Our Consultants
      </p>

      <h2 className="text-lg sm:text-2xl lg:text-[30px] font-bold text-[#0F172A] mb-6 lg:mb-[52px]">
        Your Dedicated Specialist GP Recruitment Experts
      </h2>
    </div>

    {/* Main Content */}
    <div className="w-full">
      <div className="inner-width-section mx-auto">

        {/* Mobile – Single Column */}
       <div className="lg:hidden">
  <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4">
    {data.consultants.map((consultant) => (
      <div
        key={consultant.id}
        className="min-w-[85%] sm:min-w-[70%] snap-center bg-white rounded-xl shadow-sm p-4"
      >
        <ConsultantCard consultant={consultant} />
      </div>
    ))}
  </div>

  {/* Optional scroll hint */}
  <p className="text-xs text-gray-500 mt-2 text-center">
    Swipe to see more consultants →
  </p>
</div>


        {/* Desktop – unchanged */}
        <div className="hidden lg:grid grid-cols-3 gap-8 lg:gap-18">
          <div className="space-y-8">
            {leftConsultants.map((consultant) => (
              <ConsultantCard key={consultant.id} consultant={consultant} />
            ))}
          </div>

          <div className="flex items-center justify-center h-full">
            <div className="grid grid-cols-2 gap-4 py-6 w-full h-full">
              {data.centerImages.map((image, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden shadow-md h-full">
                  <Image
                    src={image}
                    alt={`Professional image ${idx + 1}`}
                    className="w-full h-full object-cover"
                    placeholder="blur"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8 lg:ml-24">
            {rightConsultants.map((consultant) => (
              <ConsultantCard key={consultant.id} consultant={consultant} />
            ))}
          </div>
        </div>

      </div>
    </div>
  </div></div>
</div>

    );
}