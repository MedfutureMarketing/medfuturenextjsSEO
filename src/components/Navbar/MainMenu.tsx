"use client";

import { useState } from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MedfutureLogoLight from "@/assets/logo/medfuture-white.png";
import MedfutureLogoDark from "@/assets/logo/medfuture-white.png";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // ⭐ TOP CATEGORY BAR COLORS
  const topBarColorMap: Record<string, string> = {
    
    "/permanent": "bg-white text-black border-blue-200",
    "/locum": "bg-white text-black border-blue-200",
    "/international": "bg-white text-black border-blue-200",
    "/candidates": "bg-yellow-50 text-yellow-700 border-yellow-200",
    "/employers": "bg-red-50 text-red-700 border-red-200",
    "/explore": "bg-teal-50 text-teal-700 border-teal-200",
  };
  const defaultTopBarColors = "bg-[#040D48] text-white border-blue-200";
  const topBarColors = topBarColorMap[pathname] || defaultTopBarColors;

  // ⭐ MAIN HEADER COLORS
  const headerColorMap: Record<string, string> = {
    "/permanent": "bg-[#040D48] text-white border-blue-200",
    "/locum": "bg-[#040D48] text-white border-blue-200",
    "/international": "bg-[#040D48] text-white border-blue-200",
    "/candidates": "bg-yellow-100 text-yellow-800 border-yellow-300",
    "/employers": "bg-red-100 text-red-800 border-red-300",
    "/explore": "bg-teal-100 text-teal-800 border-teal-300",
  };
  const defaultHeaderColors = "bg-[#040D48] text-white border-blue-200";
  const headerColors = headerColorMap[pathname] || defaultHeaderColors;

  // ⭐ PAGE-BASED LOGO
  const logoMap: Record<string, StaticImageData> = {
  "/permanent": MedfutureLogoDark,
  "/locum": MedfutureLogoLight,
  "/international": MedfutureLogoLight,
  "/candidates": MedfutureLogoLight,
  "/employers": MedfutureLogoLight,
  "/explore": MedfutureLogoLight,
};
  const activeLogo = logoMap[pathname] || MedfutureLogoDark;

  return (
    <>
      {/* STICKY WRAPPER */}
      <div className="sticky top-0 z-50">
        {/* TOP CATEGORY BAR */}
        <div className={`hidden lg:block py-2 full-width-section border-b-2 ${topBarColors}`}>
          <div className="px-0 py-2 mx-auto max-w-screen-2xl flex justify-center full-width-section">
            <div className="flex space-x-4 divide-x divide-gray-300">
              <Link href="/support" className="hover:underline pr-4">
                Medical
              </Link>
              <Link href="/contact" className="hover:underline px-4">
                GP
              </Link>
              <Link href="/faq" className="hover:underline px-4">
                AHP
              </Link>
              <Link href="/faq" className="hover:underline px-4">
                Dental & Oral
              </Link>
              <Link href="/faq" className="hover:underline px-4">
                Mental Health
              </Link>
              <Link href="/faq" className="hover:underline px-4">
                Nursing & Care Workers
              </Link>
              <Link href="/faq" className="hover:underline pl-4">
                Healthcare Executive
              </Link>
            </div>
          </div>
        </div>

        {/* MAIN HEADER */}
        <div className={`${headerColors} full-width-section border-b`}>
          <header>
            <div className="px-0 py-3 w-full inner-width-section flex items-center justify-between">
              {/* Logo */}
              <Link href="/" aria-label="Medfuture" className="inline-flex items-center">
                <Image src={activeLogo} alt="Medfuture logo" width={180} height={40} priority />
              </Link>

              {/* Desktop Navigation */}
              <ul className="hidden lg:flex items-center space-x-8">
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
                <li>
                  <Link href="/candidates" className="font-medium hover:text-blue-600">
                    For Candidates
                  </Link>
                </li>
                <li>
                  <Link href="/employers" className="font-medium hover:text-blue-600">
                    For Employers
                  </Link>
                </li>
                <li>
                  <Link href="/explore" className="font-medium hover:text-blue-600">
                    Explore
                  </Link>
                </li>
              </ul>

              {/* Signup Button */}
              <div className="hidden lg:block">
                <Link
                  href="/signup"
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
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            className={`fixed top-0 left-0 z-50 w-[70%] h-full bg-white shadow-lg custom-scrollbar transform transition-transform duration-300 ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <Image src={activeLogo} alt="Medfuture logo" width={140} height={32} />
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close Menu"
                className="text-gray-600 hover:text-blue-600"
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-col p-4 space-y-4 overflow-y-auto h-full">
              <div className="border-b pb-3">
                <p className="text-sm text-gray-500 mb-2 font-semibold">Categories</p>
                <div className="flex flex-col space-y-2 text-gray-700">
                  <Link href="/support" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">
                    Medical
                  </Link>
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">
                    GP
                  </Link>
                  <Link href="/faq" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">
                    AHP
                  </Link>
                  <Link href="/faq" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">
                    Dental & Oral
                  </Link>
                  <Link href="/faq" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">
                    Mental Health
                  </Link>
                  <Link href="/faq" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">
                    Nursing & Care Workers
                  </Link>
                  <Link href="/faq" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">
                    Healthcare Executive
                  </Link>
                </div>
              </div>

              <div className="pt-3">
                <p className="text-sm text-gray-500 mb-2 font-semibold">Navigation</p>
                <div className="flex flex-col space-y-2 text-gray-700">
                  <Link href="/permanent" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">
                    Permanent Jobs
                  </Link>
                  <Link href="/locum" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">
                    Locum Jobs
                  </Link>
                  <Link href="/international" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">
                    International
                  </Link>
                  <Link href="/candidates" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">
                    For Candidates
                  </Link>
                  <Link href="/employers" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">
                    For Employers
                  </Link>
                  <Link href="/explore" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">
                    Explore
                  </Link>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href="/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex items-center justify-center px-4 py-2 font-medium text-white bg-blue-600 rounded hover:bg-blue-700 w-full text-center"
                >
                  Sign Up
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
