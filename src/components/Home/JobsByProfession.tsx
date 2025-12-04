import Link from "next/link";

const professions = [
  {
    title: "Medical Practitioner",
    exploreLink: "/jobs/medical-practitioner",
    jobs: [
      { title: "Frontend Developer", location: "New York, NY", link: "/jobs/frontend-developer" },
      { title: "Backend Engineer", location: "San Francisco, CA", link: "/jobs/backend-engineer" },
    ],
    viewAllText: "View All Medical Practitioner Jobs",
    viewAllLink: "/jobs/medical-practitioner",
  },
  {
    title: "Allied Health",
    exploreLink: "/jobs/allied-health",
    jobs: [
      { title: "Physiotherapist", location: "Los Angeles, CA", link: "/jobs/physiotherapist" },
      { title: "Occupational Therapist", location: "Chicago, IL", link: "/jobs/occupational-therapist" },
    ],
    viewAllText: "View All Allied Health Jobs",
    viewAllLink: "/jobs/allied-health",
  },
  {
    title: "Dental Professionals",
    exploreLink: "/jobs/dental-professionals",
    jobs: [
      { title: "Dentist", location: "Miami, FL", link: "/jobs/dentist" },
      { title: "Dental Assistant", location: "Boston, MA", link: "/jobs/dental-assistant" },
    ],
    viewAllText: "View All Dental Jobs",
    viewAllLink: "/jobs/dental-professionals",
  },
];

export default function JobsbyProfession() {
  return (
    <section className="w-full py-[106px] px-4 lg:px-0">
      <div className="max-w-screen-2xl mx-auto">
        {/* Title */}
        <div className="text-left mb-12">
          <h2 className="text-3xl lg:text-[40px] font-Inter text-gray-800 mb-4">
            Find Jobs by <span className="text-[#074CA4] font-bold">Professions</span>
          </h2>
          <p className="text-gray-600 text-lg lg:text-[16px] max-w-2xl">
            Discover healthcare roles for your profession. Browse opportunities for doctors, allied health, dental experts, and more. Find positions matching your skills and career goals across Australia.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {professions.map((prof, idx) => (
            <ProfessionCard key={idx} prof={prof} />
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="flex md:hidden overflow-x-auto gap-4 snap-x snap-mandatory -mx-4 px-4">
          {professions.map((prof, idx) => (
            <div key={idx} className="snap-start min-w-[260px] flex-shrink-0">
              <ProfessionCard prof={prof} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Separate card component
function ProfessionCard({ prof }: { prof: typeof professions[0] }) {
  return (
    <div className="bg-white rounded-lg border shadow-lg flex flex-col text-left px-7 py-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-[#0A2E5C]">{prof.title}</h3>
        <Link
          href={prof.exploreLink}
          className="bg-white text-[#0F172A] shadow-lg border border-gray-100 text-sm px-4 py-2 rounded hover:bg-blue-700"
        >
          Explore
        </Link>
      </div>

      <p className="text-gray-600 mt-2 text-sm">Latest Jobs</p>

      {/* Job Listings */}
      <div className="grid grid-cols-1 gap-3 mt-4">
        {prof.jobs.map((job, jidx) => (
          <div key={jidx} className="bg-white rounded-lg border shadow-sm py-3 px-4 flex items-center justify-between">
            <div>
              <h4 className="text-lg font-semibold text-[#0A2E5C]">{job.title}</h4>
              <p className="text-gray-600 text-sm mt-1">{job.location}</p>
            </div>
            <Link href={job.link} className="text-[#074CA4] text-sm px-4 py-2 rounded">
              View
            </Link>
          </div>
        ))}

        {/* View All Button */}
        <Link
          href={prof.viewAllLink}
          className="hover:underline text-[14px] rounded-[8px] bg-[#040D48] text-white py-[9.5px] mt-4 block text-center"
        >
          {prof.viewAllText}
        </Link>
      </div>
    </div>
  );
}
