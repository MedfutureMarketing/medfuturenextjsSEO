import Link from "next/link";
import Image from "next/image";
import loctionico from "@/assets/homeico/loctionico.png";

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
    title: "Psychology",
    exploreLink: "/jobs/allied-health",
    jobs: [
      { title: "Physiotherapist", location: "Los Angeles, CA", link: "/jobs/physiotherapist" },
      { title: "Occupational Therapist", location: "Chicago, IL", link: "/jobs/occupational-therapist" },
    ],
    viewAllText: "View All Mental Psychology Jobs",
    viewAllLink: "/jobs/allied-health",
  },
  {
    title: "Nursing",
    exploreLink: "/jobs/dental-professionals",
    jobs: [
      { title: "Dentist", location: "Miami, FL", link: "/jobs/dentist" },
      { title: "Dental Assistant", location: "Boston, MA", link: "/jobs/dental-assistant" },
    ],
    viewAllText: "View All Nusing Jobs",
    viewAllLink: "/jobs/dental-professionals",
  },
   {
    title: "Occupational Therapists",
    exploreLink: "/jobs/dental-professionals",
    jobs: [
      { title: "Dentist", location: "Miami, FL", link: "/jobs/dentist" },
      { title: "Dental Assistant", location: "Boston, MA", link: "/jobs/dental-assistant" },
    ],
    viewAllText: "View All Occupational Therapy Jobs",
    viewAllLink: "/jobs/dental-professionals",
  },
   {
    title: "Speech Pathologist",
    exploreLink: "/jobs/dental-professionals",
    jobs: [
      { title: "Dentist", location: "Miami, FL", link: "/jobs/dentist" },
      { title: "Dental Assistant", location: "Boston, MA", link: "/jobs/dental-assistant" },
    ],
    viewAllText: "View All Speech Pathology Jobs",
    viewAllLink: "/jobs/dental-professionals",
  },
   {
    title: "Physiotherapist",
    exploreLink: "/jobs/dental-professionals",
    jobs: [
      { title: "Dentist", location: "Miami, FL", link: "/jobs/dentist" },
      { title: "Dental Assistant", location: "Boston, MA", link: "/jobs/dental-assistant" },
    ],
    viewAllText: "View All Physiotherapy Jobs",
    viewAllLink: "/jobs/dental-professionals",
  },
];

export default function JobsbyProfession() {
  return (
    <section className="w-full lg:py-[106px] py-10 px-4 lg:px-0">
      <div className="max-w-screen-2xl mx-auto">
   
        <div className="text-left mb-12">

          <h2 className="text-2xl lg:text-[40px] font-Inter text-gray-800 mb-4">
            Find Jobs by <span className="text-[#074CA4] font-bold">Professions</span>
          </h2>

     
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

            <p className="text-gray-600 text-xs lg:text-[16px] max-w-3xl">
              Discover healthcare roles for your profession. Browse opportunities for doctors, allied health, dental experts, and more. Find positions matching your skills and career goals across Australia.
            </p>

            <button className="self-start lg:self-auto px-[19px] py-[9.5px] bg-[#074CA4] text-white text-sm lg:text-[14px] rounded-[4px] hover:bg-blue-700 transition-colors whitespace-nowrap">
              View Job Seeker Hub
            </button>

          </div>

        </div>


        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {professions.map((prof, idx) => (
            <ProfessionCard key={idx} prof={prof} />
          ))}
          
        </div>


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


function ProfessionCard({ prof }: { prof: typeof professions[0] }) {
  return (
    <div className="bg-white rounded-lg border shadow-lg flex flex-col text-left px-7 py-6">

      <div className="flex items-center justify-between">
        <h3 className="lg:text-[16px] text-md font-semibold text-[#0A2E5C]">{prof.title}</h3>
        <Link
          href={prof.exploreLink}
          className="bg-white text-[#0F172A] lg:shadow-lg shadow-sm border border-gray-100 lg:text-[14px] text-sm px-4 py-2 rounded hover:bg-blue-700"
        >
          Explore
        </Link>
      </div>

      <p className="text-gray-600 mt-2 lg:text-[14px] text-xs">Latest Jobs</p>


      <div className="grid grid-cols-1 gap-3 mt-4">
        {prof.jobs.map((job, jidx) => (
          <div key={jidx} className="bg-white rounded-lg border shadow-sm py-3 px-4 flex items-center justify-between">
            <div>
              <h4 className="lg:text-[14px] text-sm font-semibold text-[#0A2E5C]">{job.title}</h4>
              <p className="text-gray-600 lg:text-[12px] text-[10px] flex flex-wrap gap-2 w-full  mt-1"><Image src={loctionico} className="" alt="Locationico" />{job.location}</p>
            </div>
            <Link href={job.link} className="text-[#074CA4] text-[12px] px-4 py-2 rounded">
              View
            </Link>
          </div>
        ))}


        <Link
          href={prof.viewAllLink}
          className="hover:underline lg:text-[14px] text-[10px] rounded-[8px] bg-[#040D48] text-white py-[9.5px] mt-4 block text-center"
        >
          {prof.viewAllText}
        </Link>
      </div>
    </div>
  );
}
