"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MedfutureLogoDark from "@/assets/logo/medfuture-logo.webp";

type MenuKey = "permanent" | "locum" | "international" | "candidates" | "medical" | "allied" | "mental" | "oral";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MENU_ITEMS: { label: string; href: string; submenu?: MenuKey; icon: React.ReactNode; tag?: string }[] = [
  {
    label: "Permanent Jobs",
    href: "/permanent",
    submenu: "permanent",
    tag: "Full-time",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
  {
    label: "Locum Jobs",
    href: "/locum",
    submenu: "locum",
    tag: "Flexible",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    label: "International Candidates",
    href: "/international",
    submenu: "international",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <circle cx="12" cy="12" r="9" />
        <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
      </svg>
    ),
  },
  {
    label: "For Candidates",
    href: "#",
    submenu: "candidates",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    label: "Medical Division",
    href: "#",
    submenu: "medical",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <path d="M12 3L4 7v6c0 4.4 3.4 8.5 8 9.9 4.6-1.4 8-5.5 8-9.9V7l-8-4z" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
  {
    label: "Allied Health Division",
    href: "#",
    submenu: "allied",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
        <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
        <circle cx="20" cy="10" r="2" />
      </svg>
    ),
  },
  {
    label: "Mental Health Division",
    href: "#",
    submenu: "mental",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <path d="M12 2a7 7 0 0 1 7 7c0 3-1.5 5-4 6.5V17a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1.5C6.5 14 5 12 5 9a7 7 0 0 1 7-7z" />
        <path d="M9 21h6" />
        <path d="M10 17v1m4-1v1" />
      </svg>
    ),
  },
  {
    label: "Oral Health Division",
    href: "#",
    submenu: "oral",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <path d="M12 2C9 2 6 4 6 7c0 1.5.5 3 1 4.5C8 14 8 17 9 19c.5 1.5 1 3 3 3s2.5-1.5 3-3c1-2 1-5 2-7.5.5-1.5 1-3 1-4.5 0-3-3-5-6-5z" />
      </svg>
    ),
  },
];

const SUBMENU_CONFIG: Record<MenuKey, { label: string; href: string }[]> = {
  permanent: [
    { label: "Jobs in New South Wales (NSW)", href: "/permanent/jobs/in-new-south-wales?page=1" },
    { label: "Jobs in Australian Capital Territory (ACT)", href: "/permanent/jobs/in-australian-capital-territory?page=1" },
    { label: "Jobs in South Australia (SA)", href: "/permanent/jobs/in-south-australia?page=1" },
    { label: "Jobs in Northern Territory (NT)", href: "/permanent/jobs/in-northern-territory?page=1" },
    { label: "Jobs in Queensland (QLD)", href: "/permanent/jobs/in-queensland?page=1" },
    { label: "Jobs in Western Australia (WA)", href: "/permanent/jobs/in-western-australia?page=1" },
    { label: "Jobs in Victoria (VIC)", href: "/permanent/jobs/in-victoria?page=1" },
    { label: "Jobs in Tasmania (TAS)", href: "/permanent/jobs/in-tasmania?page=1" },
  ],
  locum: [
    { label: "Jobs in New South Wales (NSW)", href: "/locum/jobs/in-new-south-wales?page=1" },
    { label: "Jobs in Australian Capital Territory (ACT)", href: "/locum/jobs/in-australian-capital-territory?page=1" },
    { label: "Jobs in South Australia (SA)", href: "/locum/jobs/in-south-australia?page=1" },
    { label: "Jobs in Northern Territory (NT)", href: "/locum/jobs/in-northern-territory?page=1" },
    { label: "Jobs in Queensland (QLD)", href: "/locum/jobs/in-queensland?page=1" },
    { label: "Jobs in Western Australia (WA)", href: "/locum/jobs/in-western-australia?page=1" },
    { label: "Jobs in Victoria (VIC)", href: "/locum/jobs/in-victoria?page=1" },
    { label: "Jobs in Tasmania (TAS)", href: "/locum/jobs/in-tasmania?page=1" },
  ],
  international: [
    { label: "Jobs for International Candidates", href: "/international" },
  ],
  candidates: [
    { label: "Job Seeker Hub", href: "/job-seeker-hub" },
    // { label: "Locum Jobs", href: "/locum" },
    // { label: "International Jobs", href: "/international" },

  ],
  medical: [
    { label: "Specialist General Practitioner (FRACGP & FRCRRM)", href: "/general-practice-division/fracgp-facrrm" },
    { label: "General Practitioner (Registrars)", href: "/general-practice-division/gp-registrars" },
    { label: "International Family Medicine", href: "/international/family-medicine-jobs/in-australia?page=1" },
    { label: "Locum GP (Short Term or Ongoing Cover)", href: "/general-practice-division/locum-gp" },
  ],
  allied: [
    { label: "Speech Pathologist", href: "/ahp-division/speech-pathology" },
    { label: "Physiotherapy", href: "/ahp-division/physiotherapy" },
    { label: "Occupational Therapist", href: "/ahp-division/occupational-therapist" },
    { label: "Podiatrist", href: "/ahp-division/podiatrist" },
  ],
  mental: [
    { label: "Psychology", href: "/permanent/psychology-jobs/in-australia?page=1" },
  ],
  oral: [
    { label: "Dentist", href: "/permanent/dentists-jobs/in-australia?page=1" },
    { label: "General Dentist", href: "/permanent/dental-jobs/in-australia?page=1" },
    { label: "Dental Specialist", href: "/permanent/general-dentist-jobs/in-australia?page=1" },
    { label: "Oral Hygienist", href: "/permanent/oral-hygienist-jobs/in-australia?page=1" },
  ],
};

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [expandedMenu, setExpandedMenu] = useState<MenuKey | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 🔹 Check auth state on mount
  useEffect(() => {
    const token = localStorage.getItem("TOKEN");
    setIsLoggedIn(!!token);
  }, [isOpen]); // re-check whenever drawer opens

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const toggleSubmenu = (menuKey: MenuKey) => {
    setExpandedMenu(expandedMenu === menuKey ? null : menuKey);
  };

  const handleLinkClick = () => {
    setExpandedMenu(null);
    document.body.style.overflow = "";
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isOpen ? "bg-black/50 pointer-events-auto" : "bg-transparent pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-screen w-[300px] sm:w-80 bg-white z-[101] flex flex-col transition-transform duration-300 ease-in-out lg:hidden shadow-[4px_0_32px_rgba(0,0,0,0.12)] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3.5 border-b border-[#F1F5F9] sticky top-0 bg-white z-10">
          <Image src={MedfutureLogoDark} alt="Medfuture" width={120} height={30} className="object-contain" />
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#F1F5F9] transition-colors text-[#64748B]"
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-4 h-4">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav section label */}
        <p className="px-4 pt-4 pb-1.5 text-[10px] font-semibold tracking-[0.1em] uppercase text-[#94A3B8]">
          Navigation
        </p>

        {/* Navigation — scrollable */}
        <nav className="flex-1 overflow-y-auto px-3 pb-4 space-y-0.5">
          {MENU_ITEMS.map((item) => {
            const isExpanded = expandedMenu === item.submenu;

            return (
              <div key={item.label}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(item.submenu as MenuKey)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                        isExpanded
                          ? "bg-[#074CA4]/8 text-[#074CA4]"
                          : "hover:bg-[#F8FAFC] text-[#1E293B]"
                      }`}
                    >
                      <span className={`flex-shrink-0 transition-colors duration-200 ${
                        isExpanded ? "text-[#074CA4]" : "text-[#94A3B8] group-hover:text-[#074CA4]/60"
                      }`}>
                        {item.icon}
                      </span>
                      <span className="flex-1 text-left text-[12px] font-medium">{item.label}</span>
                      {item.tag && !isExpanded && (
                        <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-[#EFF6FF] text-[#074CA4]">
                          {item.tag}
                        </span>
                      )}
                      <span className={`flex-shrink-0 transition-transform duration-300 ${
                        isExpanded ? "rotate-180 text-[#074CA4]" : "text-[#CBD5E1]"
                      }`}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </span>
                    </button>

                    {/* Submenu */}
                    <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className="ml-3 pl-3 border-l-2 border-[#074CA4]/15 mt-1 mb-1 space-y-0.5">
                        {SUBMENU_CONFIG[item.submenu as MenuKey].map((subitem) => (
                          <Link
                            key={subitem.label}
                            href={subitem.href}
                            onClick={handleLinkClick}
                            className="flex items-center gap-2 px-2 py-2 rounded-lg text-[12px] text-[#475569] hover:text-[#074CA4] hover:bg-[#EFF6FF] transition-all duration-150 group"
                          >
                            <span className="w-1 h-1 rounded-full bg-[#CBD5E1] group-hover:bg-[#074CA4] flex-shrink-0 transition-colors" />
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={handleLinkClick}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#F8FAFC] transition-colors text-[#1E293B] group"
                  >
                    <span className="flex-shrink-0 text-[#94A3B8] group-hover:text-[#074CA4]/60 transition-colors">
                      {item.icon}
                    </span>
                    <span className="text-[13px] font-medium">{item.label}</span>
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        {/* Footer — Dashboard or Sign In */}
        <div className="border-t border-[#F1F5F9] p-4 space-y-2.5">
          {isLoggedIn ? (
            <Link
              href="/permanent?page=1"
              onClick={handleLinkClick}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#074CA4] hover:bg-[#0a3d8a] text-white text-[13px] font-semibold rounded-xl transition-colors duration-200"
            >
              {/* User icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M12 12a5 5 0 100-10 5 5 0 000 10zm-7 8a7 7 0 1114 0H5z" clipRule="evenodd" />
              </svg>
              Search Jobs
            </Link>
          ) : (
            <Link
              href="/sign-in"
              onClick={handleLinkClick}
              className="flex items-center justify-center w-full py-2.5 px-4 bg-[#F8FAFC] hover:bg-[#F1F5F9] text-[#1E293B] text-[13px] font-semibold rounded-xl transition-colors duration-200 border border-[#E2E8F0]"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </>
  );
}