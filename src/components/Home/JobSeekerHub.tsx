import Link from "next/link";
<<<<<<< HEAD
import Image from "next/image";
import searchico from "@/assets/homeico/searchico.png"

export default function JobSeekerHub({ query = "" }: { query?: string }) {
  return (
    <section className="w-full full-width-section bg-[#F8F8F8] lg:py-[20px] py-4 px-4 lg:px-0">
      <div className=" mx-auto flex flex-col lg:flex-row items-center gap-4 lg:gap-0 inner-width-section">
=======

export default function JobSeekerHub({ query = "" }: { query?: string }) {
  return (
    <section className="w-full full-width-section bg-[#F8F8F8] py-6 px-4 lg:px-0">
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-4 lg:gap-0 inner-width-section">
>>>>>>> 0624cd8599da62fbfb6e101042b25e3d0aa75471
        {/* Left: Search form */}
        <form
          action="/job-search"
          method="GET"
<<<<<<< HEAD
          className="w-full lg:w-[300px] flex gap-2"
        >
          <div className="relative flex-1">
            <Image
              src={searchico} // your icon file
              alt="search"
              width={18}
              height={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 opacity-60 pointer-events-none"
            />
            <input
              type="text"
              name="q"
              placeholder="Search jobs, skills, or employers..."
              defaultValue={query}
              className="w-full lg:w-[297px] pl-10 pr-4 lg:h-[50px] h-[45px] border border-gray-300 rounded-none text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 lg:w-[77px] lg:h-[50px]  bg-[#040D48] text-white font-medium rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
=======
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
            className="px-6 py-3 bg-[#040D48] text-white font-medium rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
>>>>>>> 0624cd8599da62fbfb6e101042b25e3d0aa75471
          >
            Find
          </button>
        </form>

<<<<<<< HEAD

   
        <div className="w-full  lg:flex-1 flex lg:justify-end  justify-center gap-3 lg:gap-4">
     
          <Link
            href="/job-seeker-hub"
            className="px-4 lg:px-6 lg:block hidden py-3 bg-[#074CA4] text-white font-[16px] rounded-[4px] hover:bg-gray-400 transition-colors whitespace-nowrap text-center"
=======
        {/* Right: Hub Links */}
        <div className="w-full lg:flex-1 flex lg:justify-end justify-center gap-3 lg:gap-4">
          <Link
            href="/job-seeker-hub"
            className="px-4 lg:px-6 py-3 bg-[#074CA4] text-white font-medium rounded-lg hover:bg-gray-400 transition-colors whitespace-nowrap text-center"
>>>>>>> 0624cd8599da62fbfb6e101042b25e3d0aa75471
          >
            Job Seeker Hub
          </Link>
          <Link
            href="/employer-hub"
<<<<<<< HEAD
            className="px-4 lg:px-6 py-3 lg:block hidden bg-[#0D1A3E] text-white font-[16px] rounded-[4px] hover:bg-gray-700 transition-colors whitespace-nowrap text-center"
=======
            className="px-4 lg:px-6 py-3 bg-[#0D1A3E] text-white font-medium rounded-lg hover:bg-gray-700 transition-colors whitespace-nowrap text-center"
>>>>>>> 0624cd8599da62fbfb6e101042b25e3d0aa75471
          >
            Employer Hub
          </Link>
        </div>
      </div>
    </section>
  );
}
