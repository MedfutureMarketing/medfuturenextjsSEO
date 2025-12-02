"use client";

import { useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MedfutureLogoDark from "@/assets/logo/medfuture-logo.png";
import MedfutureLogoLight from "@/assets/logo/medfuture-white.png";
import MegaMenu from "@/components/Navbar/MegaMenu";
import styles from "./mainmenu.module.css";

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
  const defaultTopBarColors = "bg-[#0D1A3E] text-white border-blue-200";
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
  const defaultHeaderColors = "bg-[#0D1A3E] text-white border-blue-200";
  const headerColors = headerColorMap[pathname] || defaultHeaderColors;

  // ⭐ PAGE-BASED LOGO
  const logoMap: Record<string, StaticImageData> = {
    "/permanent": MedfutureLogoLight,
    "/locum": MedfutureLogoLight,
    "/international": MedfutureLogoLight,
    "/candidates": MedfutureLogoLight,
    "/employers": MedfutureLogoLight,
    "/explore": MedfutureLogoLight,
  };
  const activeLogo = logoMap[pathname] || MedfutureLogoLight;

  return (
    <>
      {/* STICKY WRAPPER */}
      <div className="sticky top-0 z-50">
        {/* TOP CATEGORY BAR */}
        <div className={`hidden lg:block full-width-section  ${topBarColors} ${styles.topBar}`}
         style={{
          borderBottomWidth: "2px",
          borderImageSlice: 1,
          width: "50%",
          borderImageSource: "linear-gradient(to right, #ffffffff, #b5b5b5ff, #ffffffff)", // blue → purple → pink
        }}>
          <div className="px-0 py-2 mx-auto max-w-screen-2xl  flex justify-center inner-width-section">
            <div className={`flex space-x-4 divide-x divide-gray-300 ${styles.topBarLinks}`}>
              <Link href="/" className={`${styles.topBarLink} pr-4`}>
                Medical
              </Link>
              <Link href="/" className={`${styles.topBarLink} px-4`}>
                GP
              </Link>
              <Link href="/" className={`${styles.topBarLink} px-4`}>
                AHP
              </Link>
              <Link href="/" className={`${styles.topBarLink} px-4`}>
                Dental & Oral
              </Link>
              <Link href="/" className={`${styles.topBarLink} px-4`}>
                Mental Health
              </Link>
              <Link href="/" className={`${styles.topBarLink} px-4`}>
                Nursing & Care Workers
              </Link>
              <Link href="/" className={`${styles.topBarLink} pl-4`}>
                Healthcare Executive
              </Link>
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
              <ul className="hidden lg:flex items-center space-x-8">
                <li>
                  <Link href="/permanent" className={styles.navListLink}>
                    Permanent Jobs
                  </Link>
                </li>
                <li>
                  <Link href="/locum" className={styles.navListLink}>
                    Locum Jobs
                  </Link>
                </li>
                <li>
                  <Link href="/international" className={styles.navListLink}>
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
                <Link href="/" className={styles.signupBtn}>
                  Sign Up
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                aria-label="Open Menu"
                title="Open Menu"
                onClick={() => setIsMenuOpen(true)}
                className={`${styles.mobileMenuBtn} lg:hidden`}
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
            className={`fixed top-0 left-0 z-50 w-[80%] h-full bg-white shadow-lg custom-scrollbar transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <Image src={MedfutureLogoDark} alt="Medfuture logo" width={230} height={32} />
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close Menu"
                className={styles.mobileMenuBtn}
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-col p-4 space-y-4 overflow-y-auto h-full">
              <div className="border-b pb-3">
                <p className={styles.mobileHeading}>Profession</p>
                <div className="flex flex-col space-y-2 font-sans">
                  <Link href="/" onClick={() => setIsMenuOpen(false)} className={styles.mobileLink}>
                    Medical
                  </Link>
                  <Link href="/" onClick={() => setIsMenuOpen(false)} className={styles.mobileLink}>
                    GP
                  </Link>
                  <Link href="/" onClick={() => setIsMenuOpen(false)} className={styles.mobileLink}>
                    AHP
                  </Link>
                  <Link href="/" onClick={() => setIsMenuOpen(false)} className={styles.mobileLink}>
                    Dental & Oral
                  </Link>
                  <Link href="/" onClick={() => setIsMenuOpen(false)} className={styles.mobileLink}>
                    Mental Health
                  </Link>
                  <Link href="/" onClick={() => setIsMenuOpen(false)} className={styles.mobileLink}>
                    Nursing & Care Workers
                  </Link>
                  <Link href="/" onClick={() => setIsMenuOpen(false)} className={styles.mobileLink}>
                    Healthcare Executive
                  </Link>
                </div>
              </div>

              <div className="">
                <p className={styles.mobileHeading}>Quick Links</p>
                <div className="flex flex-col space-y-2 font-sans">
                  <Link href="/permanent" onClick={() => setIsMenuOpen(false)} className={styles.mobileLink}>
                    Permanent Jobs
                  </Link>
                  <Link href="/locum" onClick={() => setIsMenuOpen(false)} className={styles.mobileLink}>
                    Locum Jobs
                  </Link>
                  <Link href="/international" onClick={() => setIsMenuOpen(false)} className={styles.mobileLink}>
                    International
                  </Link>
                  <Link href="/" onClick={() => setIsMenuOpen(false)} className={styles.mobileLink}>
                    For Candidates
                  </Link>
                  <Link href="/" onClick={() => setIsMenuOpen(false)} className={styles.mobileLink}>
                    For Employers
                  </Link>
                  <Link href="/" onClick={() => setIsMenuOpen(false)} className={styles.mobileLink}>
                    Explore
                  </Link>
                </div>
              </div>

              <div className="pt-6">
                <Link href="/signup" onClick={() => setIsMenuOpen(false)} className={styles.mobileCreateAccount}>
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
