"use client";

import { useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MedfutureLogoDark from "@/assets/logo/medfuture-logo.webp";
import MedfutureLogoLight from "@/assets/logo/medfuture-white.webp";
import MegaMenu from "@/components/Navbar/MegaMenu";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // ⭐ TOP CATEGORY BAR COLORS
  const topBarColorMap: Record<string, string> = {

    "/permanent": "bg-white text-[#040D48] border-yellow-200",
    "/locum": "bg-white text-[#040D48] border-yellow-200",
    "/international": "bg-white text-[#040D48] border-yellow-200",
    "/job-seeker-hub": "bg-white text-[#040D48] border-yellow-200",
    "/": "",
    "/employer-hub": "bg-white text-[#040D48] border-yellow-200",
    "/contact-us": "bg-white text-[#040D48] border-yellow-200",
    "/fracgp-facrrm": "bg-white text-[#040D48] border-yellow-200",
    "/job-seeker-hub/medical-division": "bg-white text-[#040D48] border-yellow-200",
    "/job-seeker-hub/allied-health-division": "bg-white text-[#040D48] border-yellow-200",
    "/job-seeker-hub/oral-health-division": "bg-white text-[#040D48] border-yellow-200",
    "/job-seeker-hub/mental-health-division": "bg-white text-[#040D48] border-yellow-200",
    "/general-practitioner-registrar": "bg-white text-[#040D48] border-yellow-200",



    "/about-us": "bg-white text-[#040D48] border-yellow-200",



  };
  const defaultTopBarColors = "bg-white text-[#040D48] border-yellow-200 ";
  const topBarColors = topBarColorMap[pathname] || defaultTopBarColors;

  // ⭐ MAIN HEADER COLORS
  const headerColorMap: Record<string, string> = {
    "/permanent": "bg-white text-[#040D48] border-yellow-200",
    "/locum": "bg-white text-[#040D48] border-yellow-200",
    "/international": "bg-white text-[#040D48] border-yellow-200",
    "/job-seeker-hub": "bg-white text-[#040D48] border-yellow-200",
    "/": "bg-[#0D1A3E] text-white border-blue-200",
    "/employer-hub": "bg-white text-[#040D48] border-yellow-200",
    "/contact-us": "bg-white text-[#040D48] border-yellow-200",
    "/fracgp-facrrm": "bg-white text-[#040D48] border-yellow-200",
    "/job-seeker-hub/medical-division": "bg-white text-[#040D48] border-yellow-200",
    "/job-seeker-hub/allied-health-division": "bg-white text-[#040D48] border-yellow-200",
    "/job-seeker-hub/oral-health-division": "bg-white text-[#040D48] border-yellow-200",
    "/job-seeker-hub/mental-health-division": "bg-white text-[#040D48] border-yellow-200",
    "/general-practitioner-registrar": "bg-white text-[#040D48] border-yellow-200",




    "/about-us": "bg-white text-[#040D48] border-yellow-200",


  };
  const defaultHeaderColors = "bg-white text-[#040D48] border-yellow-200";
  const headerColors = headerColorMap[pathname] || defaultHeaderColors;

  // ⭐ PAGE-BASED LOGO
  const logoMap: Record<string, StaticImageData> = {
    "/permanent": MedfutureLogoDark,
    "/locum": MedfutureLogoDark,
    "/international": MedfutureLogoDark,
    "/job-seeker-hub": MedfutureLogoDark,
    "/employer-hub": MedfutureLogoDark,
    "/contact-us": MedfutureLogoDark,
    "/fracgp-facrrm": MedfutureLogoDark,
    "/job-seeker-hub/medical-division": MedfutureLogoDark,
    "/job-seeker-hub/allied-health-division": MedfutureLogoDark,
    "/job-seeker-hub/oral-health-division": MedfutureLogoDark,
    "/job-seeker-hub/mental-health-division": MedfutureLogoDark,
    "/general-practitioner-registrar": MedfutureLogoDark,




    "/": MedfutureLogoLight,



    "/about-us": MedfutureLogoDark,

    "/explore": MedfutureLogoLight,
  };
  const activeLogo = logoMap[pathname] || MedfutureLogoDark;

  return (
    <>
      {/* STICKY WRAPPER */}
      <div className="sticky top-0 z-100">
        {/* TOP CATEGORY BAR */}
        <div className={`hidden lg:block py-2 full-width-section  ${topBarColors}`}
          style={{
            borderBottomWidth: "1px",
            borderImageSlice: 1,
            width: "50%",
            borderImageSource: "linear-gradient(to right, #ffffffff, #b5b5b5ff, #ffffffff)", // blue → purple → pink
          }}>
          <div className="px-0 py-2 mx-auto max-w-screen-2xl  flex justify-center inner-width-section">
            <div className="flex space-x-4 divide-x text-[16px] divide-gray-300">
              <Link href="/job-seeker-hub/medical-division" className="hover:underline pr-4">
                Medical
              </Link>
              <Link href="/job-seeker-hub/allied-health-division" className="hover:underline px-4">
                Allied Health
              </Link>
              <Link href="/job-seeker-hub/mental-health-division" className="hover:underline px-4">
                Mental Health
              </Link>
              <Link href="/job-seeker-hub/oral-health-division" className="hover:underline px-4">
                Oral Health
              </Link>
              {/* <Link href="/" className="hover:underline px-4">
                Mental Health
              </Link>
              <Link href="/" className="hover:underline px-4">
                Nursing & Care Workers
              </Link>
              <Link href="/" className="hover:underline pl-4">
                Healthcare Executive
              </Link> */}
            </div>
          </div>
        </div>

        {/* MAIN HEADER */}
        <div className={`${headerColors} full-width-section `}>
          <header>
            <div className="px-0 py-3 w-full inner-width-section flex items-center justify-between">
              {/* Logo */}
              <Link href="/" aria-label="Medfuture" className="inline-flex items-center">
                <Image src={activeLogo} alt="Medfuture logo" width={180} height={40} priority />
              </Link>

              {/* Desktop Navigation */}
              <ul className="hidden lg:flex items-center text-[16px] font-[700] space-x-8">
                <li>
                  <Link href="/permanent" className="font-medium hover:text-blue-600">
                    Permanent Jobs
                  </Link>
                </li>
                <li>
                  <Link href="/locum" className="font-medium hover:text-blue-600">
                    Locum Jobs
                  </Link>
                </li>
                <li>
                  <Link href="/international" className="font-medium hover:text-blue-600">
                    International
                  </Link>
                </li>
                <li className="relative cursor-pointer">
                  <MegaMenu
                    title="For Candidates"
                    columns={[
                      {
                        heading: "Job Search",
                        links: [
                          { label: "Permanent Jobs", href: "/permanent" },
                          { label: "Locum Jobs", href: "/locum" },
                          { label: "International Jobs", href: "/international" },
                        ],
                      },
                      {
                        heading: "Resources",
                        links: [
                          { label: "Resume Tips", href: "/resources/resume" },
                          { label: "Interview Preparation", href: "/resources/interview" },
                          { label: "Salary Guide", href: "/resources/salary-guide" },
                        ],
                      },
                      {
                        heading: "Support",
                        links: [
                          { label: "FAQ", href: "/faq" },
                          { label: "Candidate Support", href: "/support/candidates" },
                        ],
                      },
                    ]}
                  />
                </li>

                <li>
                  <Link href="/" className="font-medium hover:text-blue-600">
                    For Employers
                  </Link>
                </li>
                <li>
                  <Link href="/" className="font-medium hover:text-blue-600">
                    Explore
                  </Link>
                </li>
              </ul>

              {/* Signup Button */}
              <div className="hidden lg:block">
                <Link
                  href="/sign-up"
                  className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium text-white bg-[#074CA4] rounded-md hover:bg-blue-700"
                >
                  Sign Up
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                aria-label="Open Menu"
                title="Open Menu"
                onClick={() => setIsMenuOpen(true)}
                className="p-2 text-gray-700 rounded-md hover:bg-gray-100 lg:hidden"
              >
                <svg className="w-6 h-6" fill="none" stroke="gray" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </header>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <>
          <div className="fixed inset-0 bg-opacity-0 z-40" onClick={() => setIsMenuOpen(false)} />

          <div
            className={`fixed top-0 left-0 z-50 w-[80%] h-full bg-white shadow-lg custom-scrollbar transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <Image src={MedfutureLogoDark} alt="Medfuture logo" width={230} height={32} />
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close Menu"
                className="text-gray-600 hover:text-blue-600"
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-col p-4 space-y-4 overflow-y-auto h-full">
              <div className="pb-3">
                <p className="text-2xl text-gray-500 mb-2 font-bold">Profession</p>
                <div className="flex flex-col space-y-2 font-sans text-gray-700">
                  <Link href="/job-seeker-hub/medical-division" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">
                    Medical
                  </Link>
                  <Link href="/job-seeker-hub/allied-health-division" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">
                    Allied Health
                  </Link>
                  <Link href="/job-seeker-hub/mental-health-division" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">
                    Mental Health
                  </Link>
                  <Link href="/job-seeker-hub/oral-health-division" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">
                    Oral Health
                  </Link>
                  {/* <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">
                    Mental Health
                  </Link>
                  <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">
                    Nursing & Care Workers
                  </Link>
                  <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">
                    Healthcare Executive
                  </Link> */}
                </div>
              </div>

              <div className="pt-3">
                <p className="text-2xl text-gray-500 mb-2 font-semibold">Quick Links</p>
                <div className="flex flex-col space-y-2 font-sans text-gray-700">
                  <Link href="/permanent" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">
                    Permanent Jobs
                  </Link>
                  <Link href="/locum" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">
                    Locum Jobs
                  </Link>
                  <Link href="/international" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">
                    International
                  </Link>
                  <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">
                    For Candidates
                  </Link>
                  <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">
                    For Employers
                  </Link>
                  <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">
                    Explore
                  </Link>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href="/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex items-center w-56 justify-center px-4 py-2 font-medium text-white bg-blue-900 rounded hover:bg-blue-700 text-center"
                >
                  Create an Account
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
