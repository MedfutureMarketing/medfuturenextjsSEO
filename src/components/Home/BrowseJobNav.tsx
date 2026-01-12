import Link from "next/link";
import Image from "next/image";
import arrowico from "@/assets/homeico/arrowico.png"

export default function BrowseJobs() {
  const tabs = [
    {
      title: "Permanent Jobs",
      link: "/permanent",
      color: "bg-[#074CA4]", 
    },
    {
      title: "Locum Jobs",
      link: "/locum",
      color: "bg-[#040D48]", 
    },
    {
      title: "Jobs for International Candidates",
      link: "/international",
      color: "bg-[#575D84]",
    },
  ];

  return (
    <section className="w-full bg-white lg:py-[106px]  px-4 lg:px-0">
      <div className=" mx-auto inner-width-section">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        
          <div>
            <h2 className="text-3xl lg:text-[40px]  text-gray-800 ">
              Browse<span className="text-[#074CA4] font-bold"> Jobs</span>
            </h2>

            <p className="text-gray-600 text-xs lg:text-[16px] mt-[26px] max-w-md">
              Explore thousands of healthcare opportunities across Australia. Browse jobs by location, profession, or specialty, and find roles that match your skills, experience, and career goals. Our platform connects you with trusted employers, streamlines applications, and helps you take the next confident career step.
            </p>
          </div>

  
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-2">
            {tabs.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className={`${item.color} relative border rounded-lg px-5 py-6 hover:opacity-90 transition block`}
              >
        
                <span className="absolute top-5 right-3  w-[42px] h-[42px]  rounded-[8px] bg-white flex items-center justify-center shadow-sm">
                  <span className="  font-bold text-[#0A2E5C] lg-[12.5px]"> <Image src={arrowico} width={22.962722778320312} height={16.847396850585938} alt=""/></span> 
                </span>

           
                <span className="lg:text-[20px] text-sm font-semi-bold text-white pr-8 block">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
