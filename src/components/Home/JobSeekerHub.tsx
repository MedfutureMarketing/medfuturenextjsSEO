import Link from "next/link";

export default function JobSeekerHub({ query = "" }: { query?: string }) {
  return (
    <div className="w-full bg-[#F8F8F8] py-6 px-4 lg:px-0 full-width-section">
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-4 inner-width-section lg:gap-0">
        {/* Left: Search form */}
        <form
          action="/job-search" // Replace with your actual search results page
          method="GET"
          className="w-full lg:w-[500px] flex gap-2"
        >
          <input
            type="text"
            name="q"
            placeholder="Search jobs, skills, or employers..."
            defaultValue={query}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#040D48] text-white  rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            Find
          </button>
        </form>
        {/* Right: Buttons */}
        <div className="w-full lg:flex-1 flex lg:justify-end justify-center gap-3 lg:gap-4">
          <Link
            href="/job-seeker-hub"
            className="px-4 lg:px-6 py-3 bg-[#074CA4] text-white font-medium rounded-lg hover:bg-gray-400 transition-colors whitespace-nowrap text-center"
          >
            Job Seeker Hub
          </Link>
          <Link
            href="/employer-hub"
            className="px-4 lg:px-6 py-3 bg-[#0D1A3E] text-white font-medium rounded-lg hover:bg-gray-700 transition-colors whitespace-nowrap text-center"
          >
            Employer Hub
          </Link>
        </div>

      </div>
    </div>
  );
}
