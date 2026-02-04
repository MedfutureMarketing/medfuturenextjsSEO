"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import MedfutureLogoDark from "@/assets/logo/medfuture-logo.webp";
import MedfutureLogoLight from "@/assets/logo/medfuture-white.webp";
import MegaMenu from "@/components/Navbar/MegaMenu";
import MobileNav from "@/components/Navbar/Mobilenavbar";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // ⭐ Check if home page
  const isHomePage = pathname === "/";

  // ⭐ TOP BAR COLORS
  const topBarColorMap: Record<string, string> = {
    "/": "bg-[#074CA4] text-white",
    "/permanent": "bg-white text-[#040D48]",
    "/locum": "bg-white text-[#040D48]",
    "/international": "bg-white text-[#040D48]",
    "/job-seeker-hub": "bg-white text-[#040D48]",
    "/employer-hub": "bg-white text-[#040D48]",
    "/contact-us": "bg-white text-[#040D48]",
    "/about-us": "bg-white text-[#040D48]",
    "/general-practitioner-registrar": "bg-white text-[#040D48]",
    "/job-seeker-hub/medical-division": "bg-white text-[#040D48]",
    "/job-seeker-hub/allied-health-division": "bg-white text-[#040D48]",
    "/job-seeker-hub/oral-health-division": "bg-white text-[#040D48]",
    "/job-seeker-hub/mental-health-division": "bg-white text-[#040D48]",
    "/ahp-division/speech-pathology": "bg-white text-[#040D48] shadow-[0_15px_20px_-18px_rgba(4,13,72,0.25)]",
    "/ahp-division/occupational-therapist": "bg-white text-[#040D48] shadow-[0_15px_20px_-18px_rgba(4,13,72,0.25)]",
    "/ahp-division/podiatrist": "bg-white text-[#040D48] shadow-[0_15px_20px_-18px_rgba(4,13,72,0.25)]",
    "/ahp-division/physiotherapy": "bg-white text-[#040D48] shadow-[0_15px_20px_-18px_rgba(4,13,72,0.25)]",

  };
  const topBarColors =
    topBarColorMap[pathname] || "bg-white text-[#040D48]";

  // ⭐ HEADER COLORS
  const headerColorMap: Record<string, string> = {
    "/": "bg-white text-black",
    "/permanent": "bg-white text-[#040D48]",
    "/locum": "bg-white text-[#040D48]",
    "/international": "bg-white text-[#040D48]",
    "/job-seeker-hub": "bg-white text-[#040D48]",
    "/employer-hub": "bg-white text-[#040D48]",
    "/contact-us": "bg-white text-[#040D48]",
    "/about-us": "bg-white text-[#040D48]",
    "/general-practitioner-registrar": "bg-white text-[#040D48] ",
    "/ahp-division/speech-pathology": "bg-white text-[#040D48] ",
    "/ahp-division/occupational-therapist": "bg-white text-[#040D48] ",


  };
  const headerColors =
    headerColorMap[pathname] || "bg-white text-[#040D48]";

  // ⭐ LOGO MAP (UNCHANGED)
  const logoMap: Record<string, StaticImageData> = {
    "/": MedfutureLogoDark,
    "/explore": MedfutureLogoLight,
    "/permanent": MedfutureLogoDark,
    "/locum": MedfutureLogoDark,
    "/international": MedfutureLogoDark,
    "/job-seeker-hub": MedfutureLogoDark,
    "/employer-hub": MedfutureLogoDark,
    "/contact-us": MedfutureLogoDark,
    "/about-us": MedfutureLogoDark,
    "/general-practitioner-registrar": MedfutureLogoDark,
    "/job-seeker-hub/medical-division": MedfutureLogoDark,
    "/job-seeker-hub/allied-health-division": MedfutureLogoDark,
    "/job-seeker-hub/oral-health-division": MedfutureLogoDark,
    "/job-seeker-hub/mental-health-division": MedfutureLogoDark,
  };
  const activeLogo = logoMap[pathname] || MedfutureLogoDark;

  return (
    <>
      {/* STICKY HEADER */}
      <div className="sticky top-0 z-99 ">
        <div className={`${headerColors} full-width-section `}>
          <header className="inner-width-section py-3 flex items-center  justify-between">
            {/* LEFT SECTION: LOGO + PERMANENT/LOCUM/INTERNATIONAL */}
            <div className="flex items-center space-x-8">
              {/* LOGO */}
              <Link href="/" aria-label="Medfuture">
                <Image
                  src={activeLogo}
                  alt="Medfuture logo"
                  width={180}
                  height={40}
                  priority={false}
                  loading="lazy"
                />
              </Link>

              {/* DESKTOP NAV - LEFT SIDE */}
              <ul className="hidden lg:flex items-center space-x-6 text-[16px] font-[700]">
                <li className="relative font-medium cursor-pointer hover:text-blue-600">
                  <MegaMenu menuKey="permanent" />
                </li>
                <li className="relative font-medium cursor-pointer hover:text-blue-600">
                  <MegaMenu menuKey="locum" />
                </li>

                <li className="relative font-medium cursor-pointer hover:text-blue-600">
                  <Link href="/international?page=1"
                    className="text-[16px] font-[500] hover:text-gray-400 "
                  > International Candidates</Link>
                </li>
              </ul>
            </div>

            {/* RIGHT SECTION: EMPLOYERS + SIGN UP */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* <li className="list-none relative font-medium hover:text-blue-600">
                <MegaMenu menuKey="candidates" />
              </li> */}
              <li className="relative list-none  font-medium cursor-pointer hover:text-blue-600">
                <Link href="/employer-hub"
                  className="text-[16px] font-[500] hover:text-gray-400 "
                >  Candidates</Link>
              </li>

              <li className="list-none">
                <Link
                  href="/employer-hub"
                  className="text-[16px] font-[500] hover:text-gray-400 "
                >
                  Employers
                </Link>
              </li>

              <Link
                href="/sign-up"
                className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium text-white bg-[#074CA4] rounded-[4px] hover:bg-gray-400"
              >
                Sign Up
              </Link>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2 text-inherit text-2xl"
              aria-label="Open menu"
            >
              ☰
            </button>

            {/* MOBILE NAVIGATION */}
            <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
          </header>
        </div>

        {/* TOP CATEGORY BAR */}
        <div
          className={`hidden lg:block py-2 full-width-section ${topBarColors}`}
          style={
            !isHomePage
              ? {
                borderTopWidth: "1px",
                borderImageSlice: 1,
                borderImageSource:
                  "linear-gradient(to right, #fff, #b5b5b5, #fff)",
              }
              : {}
          }
        >
          <div className="inner-width-section flex py-2 gap-10">
            {/* Left menu */}
            <li className="list-none font-medium cursor-pointer ">
              <MegaMenu menuKey="medical" />
            </li>
            <li className="list-none font-medium cursor-pointer ">
              <MegaMenu menuKey="allied" />
            </li>
            <li className="list-none font-medium cursor-pointer">
              <MegaMenu menuKey="mental" />
            </li>
            <li className="list-none font-medium cursor-pointer ">
              <MegaMenu menuKey="oral" />
            </li>

            {/* Right menu */}
            <div className="ml-auto flex gap-8">
              <li className="list-none font-medium cursor-pointer hover:text-gray-400 ">
                <Link href="/contact-us">  Contact Us</Link>
              </li>
              <li className="list-none font-medium cursor-pointer hover:text-gray-400 ">
                <MegaMenu menuKey="Explore" />
              </li>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}