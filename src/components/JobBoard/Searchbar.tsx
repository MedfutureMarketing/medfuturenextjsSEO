"use client";

import { apiGet } from "@/lib/api";
import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { buildJobSearchUrl, parseJobSearchUrl } from "@/lib/seoJobUrl";

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
  
  // Parse URL on mount to get initial values
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

  const ref = useRef<HTMLDivElement>(null);

  // Fetch locations and set initial values from URL
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

        // After loading location data, detect and set the location from URL
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

  // Set keyword from URL
  useEffect(() => {
    if (urlFilters.keyword) {
      setQuery(urlFilters.keyword);
    }
  }, [urlFilters.keyword]);

  // Function to detect location type and set appropriate state
  const detectAndSetLocation = (locationName: string, map: LocationMap) => {
    // Check if it's a state
    if (map[locationName]) {
      setSelectedState(locationName);
      return;
    }

    // Check if it's a region or suburb
    for (const state of Object.keys(map)) {
      const regions = map[state].regions;

      // Check regions
      if (regions[locationName]) {
        setSelectedState(state);
        setSelectedRegion(locationName);
        return;
      }

      // Check suburbs
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

        // Divisions → Professions → Specialities
        res.divisions.forEach((division) => {
          keywordSet.add(division.name);

          division.professions?.forEach((profession) => {
            keywordSet.add(profession.name);

            profession.specialities?.forEach((spec) => {
              keywordSet.add(spec.name);
            });
          });
        });

        // Seniorities
        res.seniorities.forEach((seniority) => {
          keywordSet.add(seniority.name);
        });

        // Flat specialities
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

  // Get display text for location button
  const getLocationDisplayText = () => {
    if (selectedSuburb) return selectedSuburb;
    if (selectedRegion) return selectedRegion;
    if (selectedState) return selectedState;
    return "Location";
  };

  return (
    <>
      <div className="w-full lg:px-2 px-4 max-w-full mx-auto flex flex-col md:flex-row items-start md:items-start lg:items-left lg:justify-between md:justify-left gap-6 ">
        {/* LEFT TITLE */}
        <div>
          <h2 className="text-5xl font-bold text-gray-800">Browse</h2>
          <p className="text-gray-600 mt-1">Permanent Jobs in Australia</p>
        </div>

        {/* SEARCH + LOCATION */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center gap-3 bg-white lg:p-4 w-full md:w-auto"
        >
          {/* SEARCH INPUT */}
          <div className="relative w-full lg:w-[350px]">
            <input
              type="text"
              placeholder="Search Jobs"
              className="w-full border text-black border-gray-300 px-4 lg:py-4 py-3 rounded-lg focus:ring focus:ring-blue-300 outline-none"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
            />

            {showSuggestions && query && filteredKeywords.length > 0 && (
              <div className="absolute top-full mt-1 w-full bg-white text-black border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                {filteredKeywords.map((keyword) => (
                  <div
                    key={keyword}
                    className="px-4 py-2 cursor-pointer hover:bg-blue-50"
                    onClick={() => {
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

          {/* LOCATION WRAPPER */}
          <div className="relative w-full md:w-[300px] lg:w-[350px] cursor-pointer text-black" ref={ref}>
            <button
              type="button"
              onClick={() => {
                if (isMobile) {
                  setMobileOpen(true);
                } else {
                  setIsOpen(!isOpen);
                }
              }}
              className="w-full border border-gray-300 cursor-pointer px-4 lg:py-4 py-3 rounded-lg flex items-center justify-between bg-white"
            >
              <span className="text-gray-700">
                {getLocationDisplayText()}
              </span>
            </button>

            {/* DESKTOP DROPDOWN */}
            {!isMobile && isOpen && (
              <div className="absolute top-[110%] right-0 bg-white cursor-pointer shadow-xl border border-gray-200 rounded-lg p-4 z-50 w-[580px] transition-all duration-200">
                <div className="grid grid-cols-3 gap-4">
                  {/* STATES */}
                  <div className="space-y-2">
                    {Object.keys(locationData).map((state) => (
                      <label key={state} className="flex gap-2 items-center cursor-pointer">
                        <input
                          type="radio"
                          checked={selectedState === state}
                          onChange={() => {
                            setSelectedState(state);
                            setSelectedRegion("");
                            setSelectedSuburb("");
                          }}
                        />
                        {state}
                      </label>
                    ))}
                  </div>

                  {/* REGIONS */}
                  <div className="space-y-2">
                    {!selectedState ? (
                      <p className="text-gray-400">Select a state</p>
                    ) : (
                      Object.keys(locationData[selectedState].regions).map((region) => (
                        <label key={region} className="flex gap-2 items-center cursor-pointer">
                          <input
                            type="radio"
                            checked={selectedRegion === region}
                            onChange={() => {
                              setSelectedRegion(region);
                              setSelectedSuburb("");
                            }}
                          />
                          {region}
                        </label>
                      ))
                    )}
                  </div>

                  {/* SUBURBS */}
                  <div className="space-y-2">
                    {!selectedRegion ? (
                      <p className="text-gray-400">Select a region</p>
                    ) : (
                      locationData[selectedState].regions[selectedRegion].map((suburb) => (
                        <label key={suburb} className="flex gap-2 items-center cursor-pointer">
                          <input
                            type="radio"
                            checked={selectedSuburb === suburb}
                            onChange={() => setSelectedSuburb(suburb)}
                          />
                          {suburb}
                        </label>
                      ))
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full md:w-auto bg-[#64CAF3] text-white px-6 py-4 rounded-lg hover:bg-[#64CAd3] cursor-pointer transition"
          >
            Search
          </button>
        </form>
      </div>

      {/* MOBILE FULL-SCREEN MODAL */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col animate-slideUp text-black">
          {/* HEADER */}
          <div className="p-4 border-b-1 border-gray-100 shadow-xl flex justify-between items-center sticky top-0 bg-white">
            <h3 className="text-lg font-semi-bold">Select Location</h3>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-black-600 bg-[#64CAF3] py-2 px-4 rounded-lg shadow-xl text-white text-lg font-medium"
            >
              Done
            </button>
          </div>

          {/* BODY */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {!selectedState ? (
              <>
                <h4 className="text-gray-900 font-semi-bold text-md text-center">States</h4>
                <div className="grid gap-3">
                  {Object.keys(locationData).map((state) => (
                    <div
                      key={state}
                      className={`p-3 rounded-xl shadow-none border-b-2 border-r-1 border-l-1 border-t-1 border-gray-300 text-center bg-white cursor-pointer hover:bg-blue-50 transition ${
                        selectedState === state ? "bg-blue-200 font-semibold" : ""
                      }`}
                      onClick={() => setSelectedState(state as State)}
                    >
                      {state}
                    </div>
                  ))}
                </div>
              </>
            ) : !selectedRegion ? (
              <>
                <button
                  className="text-blue-600 mb-4 font-medium"
                  onClick={() => {
                    setSelectedState("");
                    setSelectedRegion("");
                  }}
                >
                  ← Back to States
                </button>

                <h4 className="text-gray-900 font-semi-bold text-center text-md mb-2">
                  Regions in {selectedState}
                </h4>
                <div className="grid gap-3">
                  {Object.keys(locationData[selectedState].regions).map((region) => (
                    <div
                      key={region}
                      className={`p-3 rounded-xl shadow-none border-b-2 border-r-1 border-l-1 border-t-1 border-gray-300 text-center bg-white cursor-pointer hover:bg-blue-50 transition ${
                        selectedRegion === region ? "bg-blue-200 font-semibold" : ""
                      }`}
                      onClick={() => setSelectedRegion(region)}
                    >
                      {region}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <button
                  className="text-blue-600 mb-4 font-medium"
                  onClick={() => setSelectedRegion("")}
                >
                  ← Back to Regions
                </button>

                <h4 className="text-gray-900 font-semi-bold text-center text-md mb-2">
                  Suburbs in {selectedRegion}
                </h4>
                <div className="grid gap-3">
                  {locationData[selectedState].regions[selectedRegion].map((suburb) => (
                    <div
                      key={suburb}
                      className={`p-3 rounded-xl shadow-none border-b-2 border-r-1 border-l-1 border-t-1 border-gray-300 text-center bg-white cursor-pointer hover:bg-blue-50 transition ${
                        selectedSuburb === suburb ? "bg-blue-200 font-semibold" : ""
                      }`}
                      onClick={() => {
                        setSelectedSuburb(suburb);
                        setMobileOpen(false);
                      }}
                    >
                      {suburb}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* MOBILE ANIMATION */}
      <style jsx>{`
        .animate-slideUp {
          animation: slideUp 0.25s ease-out;
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