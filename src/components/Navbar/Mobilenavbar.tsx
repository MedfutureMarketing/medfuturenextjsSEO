"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type MenuKey = "permanent" | "locum" | "international" | "candidates";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MENU_ITEMS: { label: string; href: string; submenu?: MenuKey }[] = [
  { label: "Permanent Jobs", href: "/permanent", submenu: "permanent" },
  { label: "Locum Jobs", href: "/locum", submenu: "locum" },
  { label: "International Candidates", href: "/international", submenu: "international" },
  { label: "For Candidates", href: "#", submenu: "candidates" },
  { label: "Employers", href: "/employer-hub" },
];

const SUBMENU_CONFIG: Record<MenuKey, { label: string; href: string }[]> = {
  permanent: [
    { label: "Jobs in New South Wales (NSW)", href: "/permanent" },
    { label: "Jobs in Australian Capital Territory (ACT)", href: "/international" },
    { label: "Jobs in South Australia (SA) ", href: "/permanent" },
    { label: "Jobs in Northern Territory (NT)", href: "/locum" },
     { label: "Jobs in Queensland (QLD)", href: "/international" },
    { label: "Jobs in Western Australia (WA)", href: "/permanent" },
    { label: "Jobs in Victoria (VIC)", href: "/locum" },
     { label: "Jobs in Tasmania (TAS)", href: "/international" },
 
  ],
  locum: [
    { label: "Jobs in New South Wales (NSW)", href: "/permanent" },
    { label: "Jobs in Australian Capital Territory (ACT)", href: "/international" },
    { label: "Jobs in South Australia (SA) ", href: "/permanent" },
    { label: "Jobs in Northern Territory (NT)", href: "/locum" },
     { label: "Jobs in Queensland (QLD)", href: "/international" },
    { label: "Jobs in Western Australia (WA)", href: "/permanent" },
    { label: "Jobs in Victoria (VIC)", href: "/locum" },
     { label: "Jobs in Tasmania (TAS)", href: "/international" },
 
  ],
  international: [
    
    { label: "Jobs for international Candidates", href: "/international" },
   
  ],
  candidates: [
    { label: "Permanent Jobs", href: "/permanent" },
    { label: "Locum Jobs", href: "/locum" },
    { label: "International Jobs", href: "/international" },
    { label: "Resume Tips", href: "/resources/resume" },
    { label: "Interview Prep", href: "/resources/interview" },
  ],
};

const DIVISIONS = [
  { label: "Medical", href: "/job-seeker-hub/medical-division" },
  { label: "Allied Health", href: "/job-seeker-hub/allied-health-division" },
  { label: "Mental Health", href: "/job-seeker-hub/mental-health-division" },
  { label: "Oral Health", href: "/job-seeker-hub/oral-health-division" },
];

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [expandedMenu, setExpandedMenu] = useState<MenuKey | null>(null);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
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
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 left-0 h-screen w-80 bg-white shadow-2xl z-50 transition-transform duration-300 overflow-y-auto lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header with Close Button */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 sticky top-0 bg-white">
          <h3 className="font-bold text-lg text-gray-900">Menu</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition text-gray-600"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="p-4 space-y-2">
          {MENU_ITEMS.map((item) => (
            <div key={item.label}>
              {item.submenu ? (
                <>
                  <button
                    onClick={() => toggleSubmenu(item.submenu as MenuKey)}
                    className="w-full text-sm flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 transition font-medium text-gray-900"
                  >
                    {item.label}
                    <span
                      className={`transition-transform text-gray-600 text-lg ${
                        expandedMenu === item.submenu ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  {/* Submenu */}
                  {expandedMenu === item.submenu && (
                    <div className="pl-4 mt-1 space-y-1 bg-gray-50 rounded-lg p-3 border border-gray-200">
                      {SUBMENU_CONFIG[item.submenu].map((subitem) => (
                        <Link
                          key={subitem.label}
                          href={subitem.href}
                          onClick={handleLinkClick}
                          className="block p-2 text-xs text-gray-700 hover:text-blue-600 hover:bg-white rounded transition"
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={handleLinkClick}
                  className="block p-3 rounded-lg hover:bg-gray-100 transition font-medium text-gray-900"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Divider */}
        <div className="border-t border-gray-200" />

        {/* Browse Divisions Section */}
        <div className="p-4">
          <h4 className="font-semibold text-sm text-gray-900 mb-3">Browse Divisions</h4>
          <div className="space-y-2">
            {DIVISIONS.map((div) => (
              <Link
                key={div.label}
                href={div.href}
                onClick={handleLinkClick}
                className="block text-sm text-blue-600 hover:text-blue-700 hover:underline py-1 font-medium"
              >
                {div.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200" />

        {/* Sign Up Button */}
        <div className="p-4">
          <Link
            href="/sign-up"
            onClick={handleLinkClick}
            className="block w-full text-center py-3 px-4 bg-[#074CA4] text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
}