import Link from "next/link";
import Image from "next/image";
import locationIcon from "@/assets/homeico/loctionico.png";


type Job = {
  id: string;
  title: string;
  location: string;
  posted: string;
  bullets: string[];
  applyLink: string;
};

type Profession = {
  title: string;
  jobs: Job[];
};


const professions: Profession[] = [
  {
    title: "Occupational Therapist",
    jobs: [
      {
        id: "JOB-001",
        title: "Occupational Therapist | AUD 120,000 per annum | Kingsgrove",
        location: "Sydney, NSW",
        posted: "3 days ago",
        bullets: [
          "Assist patients with rehabilitation",
          "Develop treatment plans",
          "Coordinate with healthcare teams",
        ],
        applyLink: "/jobs/occupational-therapist",
      },
      {
        id: "JOB-002",
        title: "Physiotherapist | AUD 110,000 per annum | Melbourne",
        location: "Melbourne, VIC",
        posted: "1 week ago",
        bullets: [
          "Provide patient assessments",
          "Design exercise programs",
          "Document patient progress",
        ],
        applyLink: "/jobs/physiotherapist",
      },
    ],
  },
  {
    title: "Speech Pathologist",
    jobs: [
      {
        id: "JOB-003",
        title: "Speech Pathologist | AUD 100,000 per annum | Brisbane",
        location: "Brisbane, QLD",
        posted: "5 days ago",
        bullets: [
          "Assess speech & language",
          "Create therapy plans",
          "Collaborate with families",
        ],
        applyLink: "/jobs/speech-pathologist",
      },
    ],
  },
];


export default function SimgJobsByProfession() {
  return (
    <section className="full-width-section lg:py-[106px] py-10 px-4 lg:px-0">
      <div className="inner-width-section mx-auto space-y-10">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl lg:text-[40px] font-bold text-gray-800 mb-4">
            Featured <span className="text-[#074CA4]">International Family Medicine Roles</span>
          </h2>

          <p className="text-gray-600 text-xs text-center mx-auto lg:w-[1092px] lg:text-[16px]">
International Family Medicine roles support experienced overseas trained doctors transitioning into the Australian healthcare system.These opportunities focus on structured pathways that strengthen clinical integration, professional growth, and long term career stability.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-[30px]">
          {professions.map((prof) =>
            prof.jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))
          )}
        </div>

        {/* Mobile Slider */}
        <div className="flex md:hidden overflow-x-auto gap-4 snap-x snap-mandatory -mx-4 px-4">
          {professions.map((prof) =>
            prof.jobs.map((job) => (
              <div key={job.id} className="snap-start flex-shrink-0">
                <JobCard job={job} />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}


function JobCard({ job }: { job: Job }) {
  return (
    <div className="bg-white border rounded-lg p-6 shadow-sm flex flex-col justify-between lg:w-full w-[290px] h-full">
      {/* Job ID & Posted */}
      <div className="flex justify-between text-[12px] text-[#4A5565] mb-2">
        <span>{job.id}</span>
        <span>{job.posted}</span>
      </div>

      {/* Job Title */}
      <h3 className="text-[#0A2E5C] font-semibold text-[16px] mb-2">
        {job.title}
      </h3>

      {/* Location */}
      <div className="flex items-center text-gray-600 text-[12px] mb-4">
        <Image
          src={locationIcon}
          alt="Location"
          width={13}
          height={13}
          className="mr-2"
        />
        <span>{job.location}</span>
      </div>

      {/* Bullet Points */}
      <ul className="space-y-2 mb-4">
        {job.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2">
            <span className="w-[10px] h-[10px] mt-1 bg-[#074CA4] block flex-shrink-0"></span>
            <span className="text-[#0F172A] text-xs lg:text-[14px]">
              {bullet}
            </span>
          </li>
        ))}
      </ul>

      {/* Apply Button */}
      <Link
        href={job.applyLink}
        className="mt-auto text-center bg-white text-[#0F172A] text-sm py-2 border border-gray-200 rounded shadow hover:bg-[#074CA4] hover:text-white transition"
      >
        View & Apply
      </Link>
    </div>
  );
}
