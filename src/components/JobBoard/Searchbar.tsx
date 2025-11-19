"use client";

import { useState, useRef, useEffect } from "react";


const DATA: Record<string, string[]> = {
  "Australian Capital Territory": ["Canberra Region"],
  "New South Wales": [
    "Central and Eastern Sydney",
    "Hunter New England and Central Coast",
    "Murrumbidgee",
    "Nepean Blue Mountains",
    "North Coast",
    "North Sydney",
    "South Eastern NSW",
    "South Western Sydney",
    "Western NSW",
    "Western Sydney",
  ],
  "Northern Territory": ["Top End", "Central NT"],
  "Queensland": ["Brisbane Region", "Gold Coast", "Townsville"],
  "South Australia": ["Adelaide Metro", "South Coast"],
  "Tasmania": ["Hobart Region", "North West Tasmania"],
  "Victoria": ["Melbourne Metro", "Geelong Region"],
  "Western Australia": ["Perth Metro", "South West WA"],
};

type State = keyof typeof DATA;
type Region = string;

export default function SearchBarWithLocation() {
  const [query, setQuery] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [selectedState, setSelectedState] = useState<State | "">("");
  const [selectedRegion, setSelectedRegion] = useState<Region | "">("");

  const ref = useRef<HTMLDivElement>(null);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Track mobile/desktop view
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
    console.log({
      query,
      selectedState,
      selectedRegion,
    });
  };

  return (
    <>
      <div className="w-full max-w-full mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* LEFT TITLE */}
        <div>
          <h2 className="text-5xl font-bold text-gray-800">Browse</h2>
          <p className="text-gray-600 mt-1">Permanent Jobs in Australia</p>
        </div>

        {/* SEARCH + LOCATION */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center gap-3 bg-white p-4 w-full md:w-auto"
        >
          {/* SEARCH INPUT */}
          <div className="relative w-full md:w-[350px]">
            <input
              type="text"
              placeholder="Search Jobs"
              className="w-full border text-black border-gray-300 px-10 lg:py-4 py-3 rounded-lg focus:ring focus:ring-blue-300 outline-none"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>


          {/* LOCATION WRAPPER */}
          <div className="relative w-full md:w-[350px] text-black" ref={ref}>
            <button
              type="button"
              onClick={() => (isMobile ? setMobileOpen(true) : setIsOpen(!isOpen))}
              className="w-full border border-gray-300 px-4 lg:py-4 py-3 rounded-lg flex items-center justify-between bg-white"
            >
              <span className="text-gray-700">
                {selectedRegion || selectedState || "Location"}
              </span>
              <span className="text-gray-500">⌄</span>
            </button>

            {/* DESKTOP DROPDOWN */}
            {!isMobile && isOpen && (
              <div
                className={`absolute top-[110%] left-0 bg-white shadow-xl border border-gray-200 rounded-lg p-4 z-50 w-[500px] transition-all duration-200
                  ${selectedState ? "-translate-x-36" : "translate-x-0"}
                `}
              >
                <div className="grid grid-cols-2 gap-4">
                  {/* STATES */}
                  <div className="border-r pr-4">
                    {Object.keys(DATA).map((state) => (
                      <label
                        key={state}
                        className="flex items-center gap-2 py-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="state"
                          checked={selectedState === state}
                          onChange={() => {
                            setSelectedState(state as State);
                            setSelectedRegion("");
                          }}
                        />
                        <span>{state}</span>
                      </label>
                    ))}
                  </div>

                  {/* REGIONS */}
                  <div className="pl-4">
                    {!selectedState ? (
                      <p className="text-gray-400 text-sm">Select a state</p>
                    ) : (
                      DATA[selectedState].map((region) => (
                        <label
                          key={region}
                          className="flex items-center gap-2 py-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="region"
                            checked={selectedRegion === region}
                            onChange={() => {
                              setSelectedRegion(region);
                              setIsOpen(false);
                            }}
                          />
                          <span>{region}</span>
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
            className="w-full md:w-auto bg-[#64CAF3] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Search
          </button>
        </form>
      </div>

      {/* MOBILE FULL-SCREEN MODAL */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col animate-slideUp text-black">
          {/* HEADER */}
          <div className="p-4 border-b flex justify-between items-center sticky top-0 bg-white">
            <h3 className="text-lg font-semibold">Select Location</h3>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-blue-600 text-sm"
            >
              Done
            </button>
          </div>

          {/* BODY */}
          <div className="flex-1 overflow-y-auto p-4">
            {!selectedState ? (
              <>
                <h4 className="text-gray-800 font-medium mb-3">States</h4>
                {Object.keys(DATA).map((state) => (
                  <div
                    key={state}
                    className="p-3 border rounded-lg mb-2 bg-gray-50 active:bg-gray-100 cursor-pointer"
                    onClick={() => setSelectedState(state as State)}
                  >
                    {state}
                  </div>
                ))}
              </>
            ) : !selectedRegion ? (
              <>
                <button
                  className="text-blue-600 mb-4"
                  onClick={() => setSelectedState("")}
                >
                  ← Back to States
                </button>

                <h4 className="text-gray-800 font-medium mb-3">Regions</h4>
                {DATA[selectedState].map((region) => (
                  <div
                    key={region}
                    className="p-3 border rounded-lg mb-2 bg-gray-50 active:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedRegion(region);
                      setMobileOpen(false);
                    }}
                  >
                    {region}
                  </div>
                ))}
              </>
            ) : null}
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
