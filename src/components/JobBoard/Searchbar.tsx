

"use client";

import { apiGet } from "@/lib/api";
import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { buildJobSearchUrl, parseJobSearchUrl } from "@/lib/seoJobUrl";
import Image from "next/image";
import Jobboard1 from "@/assets/homeico/jobboard1.png"
import Jobbaord2 from "@/assets/homeico/jobboard2.png"
import jobboard3 from "@/assets/homeico/jobboard3.png"
import jobboard4 from "@/assets/homeico/jobboard4.png"
import Jobboard5 from "@/assets/homeico/jobboard5.png"
import Jobbaord6 from "@/assets/homeico/jobboard6.png"
import filterico from "@/assets/jobboardico/filterico.png"

type ApiSuburb = {
  suberbs_id: number;
  name: string;
};

type ApiRegion = {
  regions_id: number;
  name: string;
  suburb?: ApiSuburb[];
};

type ApiState = {
  state_id: number;
  name: string;
  regions: ApiRegion[];
};

type LocationsApiResponse = {
  states: ApiState[];
};

type ApiSpeciality = {
  specialities_id: number;
  name: string;
};

type ApiProfession = {
  profession_id: number;
  name: string;
  specialities?: ApiSpeciality[];
};

type ApiDivision = {
  divisions_id: number;
  name: string;
  professions?: ApiProfession[];
};

type ApiSeniority = {
  seniority_id: number;
  name: string;
};

type KeyDetailsApiResponse = {
  divisions: ApiDivision[];
  seniorities: ApiSeniority[];
  specialities: ApiSpeciality[];
};

type LocationMap = Record<
  string,
  {
    regions: Record<string, string[]>;
  }
>;

type State = string;
type Region = string;

export default function SearchBarWithLocation() {
  const router = useRouter();
  const pathname = usePathname();

  const urlFilters = parseJobSearchUrl(pathname);

  const [query, setQuery] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [selectedState, setSelectedState] = useState<State | "">("");
  const [selectedRegion, setSelectedRegion] = useState<Region | "">("");
  const [selectedSuburb, setSelectedSuburb] = useState<string>("");
  const [locationData, setLocationData] = useState<LocationMap>({});
  const [loadingLocations, setLoadingLocations] = useState(true);
  const [keywords, setKeywords] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const res = await apiGet<LocationsApiResponse>(
          "web/jobdetails/locations"
        );

        const map: LocationMap = {};

        res.states.forEach((state) => {
          map[state.name] = { regions: {} };

          state.regions?.forEach((region) => {
            map[state.name].regions[region.name] = [];

            region.suburb?.forEach((suburb) => {
              map[state.name].regions[region.name].push(suburb.name);
            });

            map[state.name].regions[region.name].sort();
          });
        });

        setLocationData(map);

        const location = urlFilters.suburb || urlFilters.region || urlFilters.state || urlFilters.country;
        if (location) {
          detectAndSetLocation(location, map);
        }
      } catch (error) {
        console.error("Failed to load locations", error);
      } finally {
        setLoadingLocations(false);
      }
    };

    fetchLocations();
  }, []);

  useEffect(() => {
    if (urlFilters.keyword) {
      setQuery(urlFilters.keyword);
    }
  }, [urlFilters.keyword]);

  const detectAndSetLocation = (locationName: string, map: LocationMap) => {
    if (map[locationName]) {
      setSelectedState(locationName);
      return;
    }

    for (const state of Object.keys(map)) {
      const regions = map[state].regions;

      if (regions[locationName]) {
        setSelectedState(state);
        setSelectedRegion(locationName);
        return;
      }

      for (const region of Object.keys(regions)) {
        const suburbs = regions[region];
        if (suburbs.includes(locationName)) {
          setSelectedState(state);
          setSelectedRegion(region);
          setSelectedSuburb(locationName);
          return;
        }
      }
    }
  };

  useEffect(() => {
    const fetchKeyDetails = async () => {
      try {
        const res = await apiGet<KeyDetailsApiResponse>(
          "web/jobdetails/key-details"
        );

        const keywordSet = new Set<string>();

        res.divisions.forEach((division) => {
          keywordSet.add(division.name);

          division.professions?.forEach((profession) => {
            keywordSet.add(profession.name);

            profession.specialities?.forEach((spec) => {
              keywordSet.add(spec.name);
            });
          });
        });

        res.seniorities.forEach((seniority) => {
          keywordSet.add(seniority.name);
        });

        res.specialities.forEach((spec) => {
          keywordSet.add(spec.name);
        });

        setKeywords(Array.from(keywordSet).sort());
      } catch (error) {
        console.error("Failed to load key details", error);
      }
    };

    fetchKeyDetails();
  }, []);

  const filteredKeywords = keywords.filter((keyword) =>
    keyword.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const seoUrl = buildJobSearchUrl({
      keyword: query || undefined,
      state: selectedState || undefined,
      region: selectedRegion || undefined,
      suburb: selectedSuburb || undefined,
      country: "Australia",
    });

    router.push(seoUrl);
  };


  const getLocationDisplayText = () => {
    if (selectedSuburb) return selectedSuburb;
    if (selectedRegion) return selectedRegion;
    if (selectedState) return selectedState;
    return "Location";
  };

  const getBackgroundColor = (pathname: string) => {
    if (pathname.startsWith("/permanent")) {
      return "bg-[#0A2E5C]";
    }

    if (pathname.startsWith("/locum")) {
      return "bg-[#040D48]";
    }

    if (pathname.startsWith("/international")) {
      return "bg-[#575D84]";
    }

    return "bg-[#0A2E5C]"; // default
  };

  const getCornerImages = (pathname: string) => {
    if (pathname.startsWith("/permanent")) {
      return {
        left: Jobboard1,
        right: Jobbaord2,
      };
    }

    if (pathname.startsWith("/locum")) {
      return {
        left: jobboard3,
        right: jobboard4,
      };
    }

    if (pathname.startsWith("/international")) {
      return {
        left: Jobboard5,
        right: Jobbaord6,
      };
    }

    return {
      left: "/images/default-left.png",
      right: "/images/default-right.png"
    };
  };

  const getH2Text = () => {
    const parts: string[] = [];

    if (urlFilters.keyword) {
      parts.push(`${urlFilters.keyword} jobs`);
    }

    if (urlFilters.suburb) {
      parts.push(`in ${urlFilters.suburb}`);
    } else if (urlFilters.region) {
      parts.push(`in ${urlFilters.region}`);
    } else if (urlFilters.state) {
      parts.push(`in ${urlFilters.state}`);
    } else if (urlFilters.country) {
      parts.push(`in ${urlFilters.country}`);
    }

    return parts.length
      ? parts.join(" ")
      : "Healthcare Jobs in Australia";
  };
  const getButtonColor = (pathname: string) => {
    if (pathname.startsWith("/permanent")) {
      return "bg-[#074CA4] hover:bg-[#50B8E0]";
    }

    if (pathname.startsWith("/locum")) {
      return "bg-[#074CA4] hover:bg-[#4C51BF]";
    }

    if (pathname.startsWith("/international")) {
      return "bg-[#040D48] hover:bg-[#7A81B0]";
    }

    return "bg-[#64CAF3] hover:bg-[#50B8E0]"; // default
  };
  // Add this function inside your component
const getTitleText = (pathname: string) => {
  if (pathname.startsWith("/permanent")) {
    return "Permanent";
  }
  if (pathname.startsWith("/locum")) {
    return "Locum";
  }
  if (pathname.startsWith("/international")) {
    return "International ";
  }
  return "Browse"; // default
};


  const cornerImages = getCornerImages(pathname);

  return (
    <>
      <div className={`${getBackgroundColor(pathname)} full-width-section relative `}>
        {/* Left Corner Image */}
        <div className="absolute left-0 z-0  lg:block hidden bottom-0 w-[182px] h-[182px] md:w-48 md:h-48 lg:w-64 lg:h-64 pointer-events-none">
          <Image
            src={cornerImages.left}
            alt="Decorative left corner"
            fill
            className="object-contain object-bottom-left"
            priority
          />
        </div>

        {/* Right Corner Image */}
        <div className="absolute lg:block hidden z-0 right-0 bottom-0 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 pointer-events-none">
          <Image
            src={cornerImages.right}
            alt="Decorative right corner"
            fill
            className="object-contain object-bottom-right"
            priority
          />
        </div>

        <div className="inner-width-section mx-auto py-2 px-0 relative z-10">
          {/* Breadcrumb */}

          {/* Title and Search Form - Same Row */}
          <div className="flex flex-col lg:flex-row  mb-10 items-start lg:items-center gap-6">
            {/* Title Section */}
            <div className="lg:min-w-[300px]">
              <p></p>

              <h1 className="text-white lg:text-[16px] text-md lg:mt-1 mt-3  mb-1"> <span  className="text-white font-bold lg:text-[36px] text-5xl">{getTitleText(pathname)}</span> <br /> {getH2Text()}</h1>
            </div>
            {/* Search Form */}
            <form onSubmit={handleSubmit} className="flex-1 w-full">
              <div className=" rounded-xl  flex flex-col md:flex-row md:justify-end gap-2">
                {/* Job Title Input */}
                <div className="relative ">
                  <input
                    type="text"
                    placeholder="Job Title or Key Words"
                    className="w-full md:w-80 bg-white h-14 px-5 rounded-[8px] text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setShowSuggestions(true);
                    }}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                  />

                  {/* {showSuggestions && query && filteredKeywords.length > 0 && (
                    <div className="absolute top-full mt-2 w-full bg-white text-black border border-gray-200 rounded-lg shadow-xl z-50 max-h-90 overflow-y-auto">
                      {filteredKeywords.map((keyword) => (
                        <div
                          key={keyword}
                          className="px-4 py-3 cursor-pointer hover:bg-blue-50 text-black   last:border-b-0"
                          onClick={() => {
                            setQuery(keyword);
                            setShowSuggestions(false);
                          }}
                        >
                          {keyword}
                        </div>
                      ))}
                    </div>
                  )} */}

                  {showSuggestions && query && filteredKeywords.length > 0 && (
                    <div className="absolute top-full mt-2 w-full bg-white text-black border border-gray-200 rounded-lg shadow-xl z-50 max-h-90 overflow-y-auto">
                      {filteredKeywords.map((keyword) => (
                        <div
                          key={keyword}
                          className="px-4 py-3 cursor-pointer hover:bg-blue-50 text-black last:border-b-0"
                          onMouseDown={(e) => {
                            e.preventDefault(); // Prevents the blur event
                            setQuery(keyword);
                            setShowSuggestions(false);
                          }}
                        >
                          {keyword}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Location Dropdown */}
                <div className="relative md:w-80" ref={ref}>
                  <button
                    type="button"
                    onClick={() => {
                      if (isMobile) {
                        setMobileOpen(true);
                      } else {
                        setIsOpen(!isOpen);
                      }
                    }}
                    className="w-full h-14 px-5 cursor-pointer rounded-lg bg-gray-50 text-gray-800 flex items-center justify-between hover:bg-gray-100 transition"
                  >
                    <span>{getLocationDisplayText()}</span>
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {!isMobile && isOpen && (
                    <div className="absolute top-[110%] right-0 bg-white text-black shadow-2xl border border-gray-200 rounded-xl p-6 z-50 w-[780px]">
                      <div className="grid grid-cols-3 gap-6">
                        <div className="space-y-3">
                          <p className="font-semibold text-gray-700 mb-3">State</p>
                          {Object.keys(locationData).map((state) => (
                            <label key={state} className="flex gap-3 items-center text-black cursor-pointer hover:text-blue-800">
                              <input
                                type="radio"
                                className="w-4 h-4 accent-blue-600"
                                checked={selectedState === state}
                                onChange={() => {
                                  setSelectedState(state);
                                  setSelectedRegion("");
                                  setSelectedSuburb("");
                                }}
                              />
                              <span className="text-sm">{state}</span>
                            </label>
                          ))}
                        </div>

                        <div className="space-y-3">
                          <p className="font-semibold text-gray-700 mb-3">Region</p>
                          {!selectedState ? (
                            <p className="text-black text-sm">Select a state first</p>
                          ) : (
                            Object.keys(locationData[selectedState].regions).map((region) => (
                              <label key={region} className="flex gap-3 items-center cursor-pointer hover:text-blue-600">
                                <input
                                  type="radio"
                                  className="w-4 h-4 accent-blue-600 "
                                  checked={selectedRegion === region}
                                  onChange={() => {
                                    setSelectedRegion(region);
                                    setSelectedSuburb("");
                                  }}
                                />
                                <span className="text-sm">{region}</span>
                              </label>
                            ))
                          )}
                        </div>

                        <div className="space-y-3">
                          <p className="font-semibold text-gray-700 mb-3">Suburb</p>
                          {!selectedRegion ? (
                            <p className="text-black text-sm">Select a region first</p>
                          ) : (
                            locationData[selectedState].regions[selectedRegion].map((suburb) => (
                              <label key={suburb} className="flex gap-3 text-black items-center cursor-pointer hover:text-blue-600">
                                <input
                                  type="radio"
                                  className="w-4 h-4 accent-blue-600"
                                  checked={selectedSuburb === suburb}
                                  onChange={() => setSelectedSuburb(suburb)}
                                />
                                <span className="text-sm">{suburb}</span>
                              </label>
                            ))
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Search Button */}
                {/* <button
                  type="submit"
                  className="h-14 px-10 bg-[#64CAF3] text-white cursor-pointer font-semibold rounded-lg hover:bg-[#50B8E0] transition shadow-lg"
                >
                  Search
                </button> */}
                <button
                  type="submit"
                  className={`h-14 px-10 text-white cursor-pointer font-semibold rounded-[8px] transition shadow-lg ${getButtonColor(pathname)}`}
                >
                  Search
                </button>
              </div>

              {/* More Options */}
              {/* <div className="relative flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowMoreOptions(!showMoreOptions)}
                  className="text-blue-100 text-sm mt-5 cursor-pointer flex items-center gap-2 hover:text-white transition"
                >
                  More options
                  <Image src={filterico} alt="Arrow" />
                </button>
              </div> */}

              {showMoreOptions && (
                <div className="mt-4 flex flex-wrap  justify-end gap-3">
                  {/* Box 1 */}
                  <div className="px-5 py-3 flex flex-wrap border border-gray-200 rounded-lg text-sm text-white cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition">
                    Profession <svg
                      className={`w-4 h-4 transition-transform ${showMoreOptions ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>

                  {/* Box 2 */}
                  <div className="px-5 py-3  flex flex-wrap border border-gray-200 rounded-lg text-sm text-white cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition">
                    Speciality <svg
                      className={`w-4 h-4 transition-transform ${showMoreOptions ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>

                  {/* Box 3 */}
                  <div className="px-5 py-3  flex flex-wrap border border-gray-200 rounded-lg text-sm text-white cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition">
                    Seniority <svg
                      className={`w-4 h-4 transition-transform ${showMoreOptions ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>

                  {/* Box 4 */}
                  <div className="px-5 py-3 flex flex-wrap  border border-gray-200 rounded-lg text-sm text-white cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition">
                    Engagment Type <svg
                      className={`w-4 h-4 transition-transform ${showMoreOptions ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              )}

            </form>
          </div>
        </div>
      </div>

      {/* Mobile Modal */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-white z-100 flex flex-col animate-slideUp">
          <div className="p-4 border-b flex justify-between items-center bg-white shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800">Select Location</h3>
            <button
              onClick={() => setMobileOpen(false)}
              className="bg-[#64CAF3] text-white py-2 px-6 rounded-lg font-medium"
            >
              Done
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {!selectedState ? (
              <div className="space-y-3">
                <h4 className="text-gray-700 font-semibold mb-4">Select State</h4>
                {Object.keys(locationData).map((state) => (
                  <div
                    key={state}
                    className="p-4 bg-white text-sm text-black border-1 border-gray-100 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition"
                    onClick={() => setSelectedState(state as State)}
                  >
                    {state}
                  </div>
                ))}
              </div>
            ) : !selectedRegion ? (
              <div className="space-y-3">
                <button
                  className="text-blue-600 mb-4 text-sm font-medium flex items-center gap-2"
                  onClick={() => {
                    setSelectedState("");
                    setSelectedRegion("");
                  }}
                >
                  ← Back
                </button>
                <h4 className="text-gray-700 font-semibold mb-4">Select Region in {selectedState}</h4>
                {Object.keys(locationData[selectedState].regions).map((region) => (
                  <div
                    key={region}
                    className="p-4 bg-white text-black text-sm border-1 border-gray-100 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition"
                    onClick={() => setSelectedRegion(region)}
                  >
                    {region}
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                <button
                  className="text-blue-600 mb-4 font-medium flex items-center gap-2"
                  onClick={() => setSelectedRegion("")}
                >
                  ← Back
                </button>
                <h4 className="text-gray-700 font-semibold mb-4">Select Suburb in {selectedRegion}</h4>
                {locationData[selectedState].regions[selectedRegion].map((suburb) => (
                  <div
                    key={suburb}
                    className="p-4 bg-white text-black border-1 border-gray-100 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition"
                    onClick={() => {
                      setSelectedSuburb(suburb);
                      setMobileOpen(false);
                    }}
                  >
                    {suburb}
                  </div>
                ))}
              </div>
            )}
          </div>


        </div>
      )}

      <style jsx>{`
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0%);
          }
        }
      `}</style>
    </>
  );
}