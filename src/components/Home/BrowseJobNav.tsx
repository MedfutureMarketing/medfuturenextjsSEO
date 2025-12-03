import Link from "next/link";

export default function BrowseJobs() {
  const tabs = [
    {
      title: "Permanent Jobs",
      link: "/jobs/permanent",
      color: "bg-[#074CA4]", // light blue
    },
    {
      title: "Locum Jobs",
      link: "/jobs/locum",
      color: "bg-[#040D48]", // light orange
    },
    {
      title: "Jobs for International Candidates",
      link: "/jobs/international",
      color: "bg-[#575D84]", // light green
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 lg:px-0">
      <div className=" mx-auto">

        {/* Wrapper: Text Left + Tabs Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left content */}
          <div>
            <h2 className="text-3xl lg:text-[40px]  text-gray-800 mb-4">
              Browse<span className="text-[#074CA4] font-bold"> Jobs</span>
            </h2>

            <p className="text-gray-600 text-base lg:text-[16px] max-w-lg">
              Explore thousands of healthcare opportunities across Australia. Browse jobs by location, profession, or specialty, and find roles that match your skills, experience, and career goals. Our platform connects you with trusted employers, streamlines applications, and helps you take the next confident career step.
            </p>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-2">
            {tabs.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className={`${item.color} relative border rounded-lg px-5 py-6 hover:opacity-90 transition block`}
              >
                {/* Arrow circle top-right */}
                <span className="absolute top-5 right-3  w-[42px] h-[42px]  rounded-[8px] bg-white flex items-center justify-center shadow-sm">
                  <span className="text-2xl font-bold text-[#0A2E5C] py-[12.5px]">→</span>
                </span>

                {/* text */}
                <span className="text-[20px] font-semi-bold text-white pr-8 block">
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
