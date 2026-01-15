"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type MenuKey = "permanent" | "candidates" |"locum" | "international";

interface MenuLink {
  label: string;
  href: string;
  icon?: string;
  description?: string;
}

interface MenuConfig {
  title: string;
  titleHref?: string;
  columns: {
    heading: string;
    links: MenuLink[];
  }[];
  explore?: {
    heading: string;
    links: { label: string; href: string }[];
  };
}

const MEGA_MENU_CONFIG: Record<MenuKey, MenuConfig> = {
  permanent: {
    title: "Permanent Jobs",
    titleHref: "/permanent",
    columns: [
      {
        heading: "",
        links: [
          {
            label: "Specialist General Practitioner (FRACGP & FRCRRM)",
            href: "/permanent",
            icon: "👨‍⚕️",
            description: "Chart your course to success in the Australian healthcare",
          },
          {
            label: "International Family Medicine (Specialised Pathway Recruitment)",
            href: "/international",
            icon: "🌍",
            description: "Chart your course to success in the Australian healthcare",
          },
        ],
      },
      {
        heading: "",
        links: [
          {
            label: "General Practitioner (Registrars)",
            href: "/permanent",
            icon: "⚕️",
            description: "Chart your course to success in the Australian healthcare",
          },
          {
            label: "Locum GP (Short Term or Ongoing Cover)",
            href: "/locum",
            icon: "📅",
            description: "Chart your course to success in the Australian healthcare",
          },
        ],
      },
    ],
    explore: {
      heading: "Explore More",
      links: [
        { label: "GP Jobs in Victoria", href: "/" },
        { label: "Permanent Roles in Perth", href: "/" },
        { label: "Locum Jobs in NSW", href: "/" },
        { label: "Psychology Jobs in Tasmania", href: "/" },
        { label: "Locum Physiotherapy Jobs", href: "/" },
        { label: "International OT Jobs", href: "/" },
      ],
    },
  },
  locum: {
    title: "Locum Jobs",
    titleHref: "/locum",
    columns: [
      {
        heading: "",
        links: [
          {
            label: "Specialist General Practitioner (FRACGP & FRCRRM)",
            href: "/permanent",
            icon: "👨‍⚕️",
            description: "Chart your course to success in the Australian healthcare",
          },
          {
            label: "International Family Medicine (Specialised Pathway Recruitment)",
            href: "/international",
            icon: "🌍",
            description: "Chart your course to success in the Australian healthcare",
          },
        ],
      },
      {
        heading: "",
        links: [
          {
            label: "General Practitioner (Registrars)",
            href: "/permanent",
            icon: "⚕️",
            description: "Chart your course to success in the Australian healthcare",
          },
          {
            label: "Locum GP (Short Term or Ongoing Cover)",
            href: "/locum",
            icon: "📅",
            description: "Chart your course to success in the Australian healthcare",
          },
        ],
      },
    ],
    explore: {
      heading: "Explore More",
      links: [
        { label: "GP Jobs in Victoria", href: "/" },
        { label: "Permanent Roles in Perth", href: "/" },
        { label: "Locum Jobs in NSW", href: "/" },
        { label: "Psychology Jobs in Tasmania", href: "/" },
        { label: "Locum Physiotherapy Jobs", href: "/" },
        { label: "International OT Jobs", href: "/" },
      ],
    },
  },

  international: {
    title: "international Jobs",
    titleHref: "/international",
    columns: [
      {
        heading: "",
        links: [
          {
            label: "Specialist General Practitioner (FRACGP & FRCRRM)",
            href: "/permanent",
            icon: "👨‍⚕️",
            description: "Chart your course to success in the Australian healthcare",
          },
          {
            label: "International Family Medicine (Specialised Pathway Recruitment)",
            href: "/international",
            icon: "🌍",
            description: "Chart your course to success in the Australian healthcare",
          },
        ],
      },
      {
        heading: "",
        links: [
          {
            label: "General Practitioner (Registrars)",
            href: "/permanent",
            icon: "⚕️",
            description: "Chart your course to success in the Australian healthcare",
          },
          {
            label: "Locum GP (Short Term or Ongoing Cover)",
            href: "/locum",
            icon: "📅",
            description: "Chart your course to success in the Australian healthcare",
          },
        ],
      },
    ],
    explore: {
      heading: "Explore More",
      links: [
        { label: "GP Jobs in Victoria", href: "/" },
        { label: "Permanent Roles in Perth", href: "/" },
        { label: "Locum Jobs in NSW", href: "/" },
        { label: "Psychology Jobs in Tasmania", href: "/" },
        { label: "Locum Physiotherapy Jobs", href: "/" },
        { label: "International OT Jobs", href: "/" },
      ],
    },
  },
  candidates: {
    title: "For Candidates",
    titleHref: "/candidates",
    columns: [
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
    ],
    explore: {
      heading: "Explore More",
      links: [
        { label: "GP Jobs in Victoria", href: "/" },
        { label: "Permanent Roles in Perth", href: "/" },
        { label: "Locum Jobs in NSW", href: "/" },
        { label: "Psychology Jobs in Tasmania", href: "/" },
        { label: "Locum Physiotherapy Jobs", href: "/" },
        { label: "International OT Jobs", href: "/" },
      ],
    },
  },
};

export default function MegaMenu({ menuKey }: { menuKey: MenuKey }) {
  const menu = MEGA_MENU_CONFIG[menuKey];

  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [top, setTop] = useState(0);

  useEffect(() => setMounted(true), []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTop(rect.bottom + 8);
    setOpen(true);
  };

  if (!menu) return null;

  return (
    <>
      {/* Trigger */}
      <Link href={menu.titleHref || "#"}>
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => setOpen(false)}
          className=" hover:text-blue-600"
        >
          {menu.title}
        </button>
      </Link>

      {mounted &&
        createPortal(
          <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className={`fixed z-100 transition-all duration-150 w-full left-0 ${
              open ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            style={{ top }}
          >
            <div className="inner-width-section bg-white shadow-lg border-t-4 border-[#074CA4] p-8">
              <div className="inner-width-section">
                <div className="grid grid-cols-3 gap-12">
                  {menu.columns.map((col, i) => (
                    <div key={i}>
                      <div className="space-y-8">
                        {col.links.map((link, j) => (
                          <Link
                            key={j}
                            href={link.href}
                            className="block group"
                          >
                            <div className="flex   items-start gap-4">
                              {/* Icon */}
                              {link.icon && (
                                <span className="text-3xl flex-shrink-0">
                                  {link.icon}
                                </span>
                              )}
                              {/* Title & Description */}
                              <div className="flex-1">
                                <h5 className="font-semibold cursor-pointer text-gray-800 group-hover:text-blue-600 transition mb-1">
                                  {link.label}
                                </h5>
                                {link.description && (
                                  <p className="text-sm text-gray-600">
                                    {link.description}
                                  </p>
                                )}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  {/* Explore More Section */}
                  {menu.explore && (
                    <div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h4 className="font-bold text-gray-900 mb-4">
                          {menu.explore.heading}
                        </h4>
                        <ul className="grid grid-cols-1 gap-3">
                          {menu.explore.links.map((link, i) => (
                            <li key={i}>
                              <Link
                                href={link.href}
                                className="text-blue-600 hover:text-blue-700 text-sm font-medium hover:underline"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}