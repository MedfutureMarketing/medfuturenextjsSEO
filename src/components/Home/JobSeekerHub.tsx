'use client';
import Link from "next/link";
import Image from "next/image";
import searchico from "@/assets/homeico/searchico.png"
import { useEffect, useState } from "react";
import { apiGet } from "@/lib/api";
import { useRouter } from "next/navigation";

type HomeData = {
  clientCount: number;
  candidateCount: number;
  testimonials: Array<{
    comment: string;
    user_name: string;
    profession_name: string;
  }>;
  professions: Array<{
    profession_id: number;
    name: string;
  }>;
};

export default function JobSeekerHub({ query = "" }: { query?: string }) {
  const router = useRouter();

  const [homeData, setHomeData] = useState<HomeData | null>(null);
  const [search, setSearch] = useState(query);
  const [selectedLink, setSelectedLink] = useState<string | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    async function fetchHomeData() {
      try {
        const res = await apiGet<HomeData>(`web/home-page/get-all`);
        setHomeData(res);
      } catch {}
    }
    fetchHomeData();
  }, []);

  const professions =
    homeData?.professions.map((profession) => ({
      title: profession.name,
      searchLink: `/permanent/${profession.name
        .toLowerCase()
        .replace(/\s+/g, "-")}-jobs/in-australia`,
    })) || [];

  const filteredProfessions = professions.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleFind = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedLink) {
      router.push(selectedLink);
    } else if (search.trim()) {
      router.push(`/job-search?q=${encodeURIComponent(search)}`);
    }
  };
  return (
    <section className="w-full full-width-section bg-[#F8F8F8] lg:py-[20px] py-4 px-4 lg:px-0">
      <div className=" mx-auto flex flex-col lg:flex-row items-center gap-4 lg:gap-0 inner-width-section">
        {/* Left: Search form */}
        <form
          onSubmit={handleFind}
          className="w-full lg:w-[337px] flex gap-2"
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
              placeholder="Search profession..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setShowSuggestions(true);
                setSelectedLink(null);
              }}
              className="w-full pl-10 pr-4 h-[50px]  border border-gray-300 text-black"
            />
            {showSuggestions && search && filteredProfessions.length > 0 && (
              <ul className="absolute z-10 bg-white border w-full mt-1 max-h-48 overflow-y-auto">
                {filteredProfessions.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setSearch(item.title);
                      setSelectedLink(item.searchLink);
                      setShowSuggestions(false);
                    }}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-black"
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            type="submit"
            className="px-6 py-3 lg:w-[77px] lg:h-[50px] cursor-pointer  bg-[#040D48] text-white font-medium rounded-[4px] hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            Find
          </button>
        </form>


   
        <div className="w-full  lg:flex-1 flex lg:justify-end  justify-center gap-3 lg:gap-4">
     
          <Link
            href="/job-seeker-hub"
            className="px-4 lg:px-6  lg:h-[50px] lg:w-[170px] lg:block hidden py-3 bg-[#074CA4] text-white font-[16px] rounded-[4px] hover:bg-gray-400 transition-colors whitespace-nowrap text-center"
          >
            Job Seeker Hub
          </Link>
          <Link
            href="/employer-hub"
            className="px-4 lg:px-6 py-3 lg:block hidden bg-[#0D1A3E] text-white font-[16px] rounded-[4px] hover:bg-gray-700 transition-colors whitespace-nowrap text-center"
          >
            Employer Hub
          </Link>
        </div>
      </div>
    </section>
  );
}
