"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type MenuKey = "permanent" | "candidates" | "locum" ;

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
            label: "New South Wales (NSW)",
            href: "/permanent",
            icon: "",
            description: "Explore Permanent Job Openings in New South Wales (NSW)",
          },
          {
            label: "Australian Capital Territory (ACT)",
            href: "/international",
            icon: "",
            description: "Explore Permanent Job Openings in Australian Capital Territory (ACT)",
          },
          {
            label: "South Australia (SA)",
            href: "/international",
            icon: "",
            description: "Explore Permanent Job Openings in South Australia (SA)",
          },
          {
            label: "Northern Territory (NT)",
            href: "/international",
            icon: "",
            description: "Explore Permanent Job Openings in Northern Territory (NT)",
          },
        ],
      },
      {
        heading: "",
        links: [
          {
            label: "Queensland (QLD)",
            href: "/international",
            icon: "",
            description: "Explore Permanent Job Openings in Queensland (QLD)",
          },
          {
            label: "Western Australia (WA)",
            href: "/international",
            icon: "",
            description: "Explore Permanent Job Openings in Western Australia (WA)",
          },
          {
            label: "Victoria (VIC)",
            href: "/international",
            icon: "",
            description: "Explore Permanent Job Openings in Victoria (VIC)",
          },
          {
            label: "Tasmania (TAS)",
            href: "/international",
            icon: "",
            description: "Explore Permanent Job Openings in Tasmania (TAS)",
          },
        ],
      },
    ],
    explore: {
      heading: "Browse Jobs by Key Cities",
      links: [
        { label: "Sydney, New South Wales", href: "/" },
        { label: "Melbourne, Victoria", href: "/" },
        { label: "Brisbane, Queensland", href: "/" },
        { label: "Perth, Western Australia", href: "/" },
        { label: "Adelaide, South Australia", href: "/" },
        { label: "Gold Coast, Queensland", href: "/" },
        { label: "Canberra, Australian Capital Territory", href: "/" },
        { label: "Hobart, Tasmania", href: "/" },

        { label: "Wollongong, New South Wales", href: "/" },

        { label: "Geelong, Victoria", href: "/" },


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
            label: "New South Wales (NSW)",
            href: "/permanent",
            icon: "",
            description: "Explore Permanent Job Openings in New South Wales (NSW)",
          },
          {
            label: "Australian Capital Territory (ACT)",
            href: "/international",
            icon: "",
            description: "Explore Permanent Job Openings in Australian Capital Territory (ACT)",
          },
          {
            label: "South Australia (SA)",
            href: "/international",
            icon: "",
            description: "Explore Permanent Job Openings in South Australia (SA)",
          },
          {
            label: "Northern Territory (NT)",
            href: "/international",
            icon: "",
            description: "Explore Permanent Job Openings in Northern Territory (NT)",
          },
        ],
      },
      {
        heading: "",
        links: [
          {
            label: "Queensland (QLD)",
            href: "/international",
            icon: "",
            description: "Explore Permanent Job Openings in Queensland (QLD)",
          },
          {
            label: "Western Australia (WA)",
            href: "/international",
            icon: "",
            description: "Explore Permanent Job Openings in Western Australia (WA)",
          },
          {
            label: "Victoria (VIC)",
            href: "/international",
            icon: "",
            description: "Explore Permanent Job Openings in Victoria (VIC)",
          },
          {
            label: "Tasmania (TAS)",
            href: "/international",
            icon: "",
            description: "Explore Permanent Job Openings in Tasmania (TAS)",
          },
        ],
      },
    ],
    explore: {
      heading: "Browse Jobs by Key Cities",
      links: [
        { label: "Sydney, New South Wales", href: "/" },
        { label: "Melbourne, Victoria", href: "/" },
        { label: "Brisbane, Queensland", href: "/" },
        { label: "Perth, Western Australia", href: "/" },
        { label: "Adelaide, South Australia", href: "/" },
        { label: "Gold Coast, Queensland", href: "/" },
        { label: "Canberra, Australian Capital Territory", href: "/" },
        { label: "Hobart, Tasmania", href: "/" },

        { label: "Wollongong, New South Wales", href: "/" },

        { label: "Geelong, Victoria", href: "/" },


      ],
    },
  },

  // international: {
  //   title: "international Candidates",
  //   titleHref: "/international",
  //   columns: [
  //     {
  //       heading: "",
  //       links: [
  //         {
  //           label: "Specialist General Practitioner (FRACGP & FRCRRM)",
  //           href: "/permanent",
  //           icon: "",
  //           description: "Chart your course to success in the Australian healthcare",
  //         },
  //         {
  //           label: "International Family Medicine (Specialised Pathway Recruitment)",
  //           href: "/international",
  //           icon: "",
  //           description: "Chart your course to success in the Australian healthcare",
  //         },
  //       ],
  //     },
  //     {
  //       heading: "",
  //       links: [
  //         {
  //           label: "General Practitioner (Registrars)",
  //           href: "/permanent",
  //           icon: "⚕️",
  //           description: "Chart your course to success in the Australian healthcare",
  //         },
  //         {
  //           label: "Locum GP (Short Term or Ongoing Cover)",
  //           href: "/locum",
  //           icon: "",
  //           description: "Chart your course to success in the Australian healthcare",
  //         },
  //       ],
  //     },
  //   ],
  //   explore: {
  //     heading: "Explore More",
  //     links: [
  //       { label: "GP Jobs in Victoria", href: "/" },
  //       { label: "Permanent Roles in Perth", href: "/" },
  //       { label: "Locum Jobs in NSW", href: "/" },
  //       { label: "Psychology Jobs in Tasmania", href: "/" },
  //       { label: "Locum Physiotherapy Jobs", href: "/" },
  //       { label: "International OT Jobs", href: "/" },
  //     ],
  //   },
  // },
  candidates: {
    title: "Candidates",
    titleHref: "/",
    columns: [
      {
        heading: "",
        links: [
          {
            label: "Medical Professionals",
            href: "/permanent",
            icon: "",
            description: "Chart your course to success in the Australian healthcare",
          },
          {
            label: "Allied Health Professionals",
            href: "/international",
            icon: "",
            description: "Chart your course to success in the Australian healthcare",
          },
          {
            label: "Allied Health Professionals",
            href: "/international",
            icon: "",
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
            icon: "",
            description: "Chart your course to success in the Australian healthcare",
          },
          {
            label: "Allied Health Professionals",
            href: "/international",
            icon: "",
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
            className={`fixed z-100 transition-all duration-150 w-full left-0 ${open ? "opacity-100 visible" : "opacity-0 invisible"
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
                                <h5 className="text-[14px] cursor-pointer font-[600] text-[#040D48] group-hover:text-blue-600 transition mb-1">
                                  {link.label}
                                </h5>
                                {link.description && (
                                  <p className="text-[11px] text-[#0F172A]">
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
                        <ul className="grid grid-cols-1 gap-1">
                          {menu.explore.links.map((link, i) => (
                            <li key={i}>
                              <Link
                                href={link.href}
                                className="text-[#074CA4] hover:text-blue-700 text-[14px] font-semi-bold hover:underline"
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