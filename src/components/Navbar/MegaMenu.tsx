"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type MenuKey = "permanent" | "candidates" | "locum" | "medical" | "allied" | "mental" | "oral" | "Explore";

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
  Explore: {
    title: "Explore",
    titleHref: "/permanent",
    columns: [
      {
        heading: "",
        links: [

          {
            label: "Medical Job is New Zealand",
            href: "https://medfuture.co.nz/",
            icon: "",
            description: "Medfuture New Zealand connects healthcare professionals with opportunities across New Zealand, offering guidance, recruitment, and career support for international and local talent.",
          },
          {
            label: "Blogs",
            href: "https://themedfuture.com/blog",
            icon: "",
            description: "Stay updated with our latest insights, news, and expert articles. Discover tips, trends, and stories that help you stay informed",
          },

        ],
      },
      {
        heading: "",
        links: [
          // {
          //   label: "About us",
          //   href: "/about-us",
          //   icon: "",
          //   description: "Discover who we are and what drives us. Medfuture Global is committed to empowering healthcare professionals and providing innovative global solutions",
          // },

          {
            label: "Medfuture Global",
            href: "https://themedfuture.com/blog",
            icon: "",
            description: "Explore Permanent Job Openings in South Australia (SA)",
          },
           

        ],
      },
      {
        heading: "",
        links: [
          {
            label: "Visa & Immigration Services",
            href: "https://intuit7.com/",
            icon: "",
            description: "Get expert guidance on visa applications, immigration processes, and residency options. We simplify complex procedures to help you move with confidence",
          },
         


        ],
      },


    ],

    // explore: {
    //   heading: "Browse Jobs by Key Cities",
    //   links: [
    //     { label: "Sydney, New South Wales", href: "/permanent/jobs/in-western-sydney?page=1" },
    //     { label: "Melbourne, Victoria", href: "/permanent/jobs/in-south-eastern-melbourne?page=1" },
    //     { label: "Brisbane, Queensland", href: "/permanent/jobs/in-brisbane-south?page=1" },
    //     { label: "Perth, Western Australia", href: "/permanent/jobs/in-south-perth?page=1" },
    //     { label: "Adelaide, South Australia", href: "/permanent/jobs/in-adelaide?page=1" },
    //     { label: "Gold Coast, Queensland", href:"/permanent/jobs/in-gold-coast?page=1" },
    //     { label: "Canberra, Australian Capital Territory", href: "/permanent/jobs/in-canberra?page=1" },
    //     { label: "Hobart, Tasmania", href: "/permanent/jobs/in-hobart?page=1" },

    //     { label: "Wollongong, New South Wales", href: "/permanent/jobs/in-south-western-sydney?page=1" },

    //     { label: "Geelong, Victoria", href: "/permanent/jobs/in-geelong?page=1" },


    //   ],
    // },
  },
  permanent: {
    title: "Permanent Jobs",
    titleHref: "/permanent",
    columns: [
      {
        heading: "",
        links: [
          {
            label: "New South Wales (NSW)",
            href: "/permanent/jobs/in-new-south-wales?page=1",
            icon: "",
            description: "Explore Permanent Job Openings in New South Wales (NSW)",
          },
          {
            label: "Australian Capital Territory (ACT)",
            href: "/permanent/jobs/in-australian-capital-territory?page=1",
            icon: "",
            description: "Explore Permanent Job Openings in Australian Capital Territory (ACT)",
          },
          {
            label: "South Australia (SA)",
            href: "/permanent/jobs/in-south-australia?page=1",
            icon: "",
            description: "Explore Permanent Job Openings in South Australia (SA)",
          },
          {
            label: "Northern Territory (NT)",
            href: "/permanent/jobs/in-northern-territory?page=1",
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
            href: "/permanent/jobs/in-queensland?page=1",
            icon: "",
            description: "Explore Permanent Job Openings in Queensland (QLD)",
          },
          {
            label: "Western Australia (WA)",
            href: "/permanent/jobs/in-western-australia?page=1",
            icon: "",
            description: "Explore Permanent Job Openings in Western Australia (WA)",
          },
          {
            label: "Victoria (VIC)",
            href: "/permanent/jobs/in-victoria?page=1",
            icon: "",
            description: "Explore Permanent Job Openings in Victoria (VIC)",
          },
          {
            label: "Tasmania (TAS)",
            href: "/permanent/jobs/in-tasmania?page=1",
            icon: "",
            description: "Explore Permanent Job Openings in Tasmania (TAS)",
          },
        ],
      },
    ],
    explore: {
      heading: "Browse Jobs by Key Cities",
      links: [
        { label: "Sydney, New South Wales", href: "/permanent/jobs/in-western-sydney?page=1" },
        { label: "Melbourne, Victoria", href: "/permanent/jobs/in-south-eastern-melbourne?page=1" },
        { label: "Brisbane, Queensland", href: "/permanent/jobs/in-brisbane-south?page=1" },
        { label: "Perth, Western Australia", href: "/permanent/jobs/in-south-perth?page=1" },
        { label: "Adelaide, South Australia", href: "/permanent/jobs/in-adelaide?page=1" },
        { label: "Gold Coast, Queensland", href: "/permanent/jobs/in-gold-coast?page=1" },
        { label: "Canberra, Australian Capital Territory", href: "/permanent/jobs/in-canberra?page=1" },
        { label: "Hobart, Tasmania", href: "/permanent/jobs/in-hobart?page=1" },
        { label: "Wollongong, New South Wales", href: "/permanent/jobs/in-south-western-sydney?page=1" },
        { label: "Geelong, Victoria", href: "/permanent/jobs/in-geelong?page=1" },


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
            href: "/locum/jobs/in-new-south-wales?page=1",
            icon: "",
            description: "Explore Permanent Job Openings in New South Wales (NSW)",
          },
          {
            label: "Australian Capital Territory (ACT)",
            href: "/locum/jobs/in-australian-capital-territory?page=1",
            icon: "",
            description: "Explore Permanent Job Openings in Australian Capital Territory (ACT)",
          },
          {
            label: "South Australia (SA)",
            href: "/locum/jobs/in-south-australia?page=1",
            icon: "",
            description: "Explore Permanent Job Openings in South Australia (SA)",
          },
          {
            label: "Northern Territory (NT)",
            href: "/locum/jobs/in-northern-territory?page=1",
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
            href: "/locum/jobs/in-queensland?page=1",
            icon: "",
            description: "Explore Permanent Job Openings in Queensland (QLD)",
          },
          {
            label: "Western Australia (WA)",
            href: "/locum/jobs/in-western-australia?page=1",
            icon: "",
            description: "Explore Permanent Job Openings in Western Australia (WA)",
          },
          {
            label: "Victoria (VIC)",
            href: "/locum/jobs/in-victoria?page=1",
            icon: "",
            description: "Explore Permanent Job Openings in Victoria (VIC)",
          },
          {
            label: "Tasmania (TAS)",
            href: "/locum/jobs/in-tasmania?page=1",
            icon: "",
            description: "Explore Permanent Job Openings in Tasmania (TAS)",
          },
        ],
      },
    ],
    explore: {
      heading: "Browse Jobs by Key Cities",
      links: [
        { label: "Sydney, New South Wales", href: "/permanent/jobs/in-western-sydney?page=1" },
        { label: "Melbourne, Victoria", href: "/permanent/jobs/in-south-eastern-melbourne?page=1" },
        { label: "Brisbane, Queensland", href: "/permanent/jobs/in-brisbane-south?page=1" },
        { label: "Perth, Western Australia", href: "/permanent/jobs/in-south-perth?page=1" },
        { label: "Adelaide, South Australia", href: "/permanent/jobs/in-adelaide?page=1" },
        { label: "Gold Coast, Queensland", href: "/permanent/jobs/in-gold-coast?page=1" },
        { label: "Canberra, Australian Capital Territory", href: "/permanent/jobs/in-canberra?page=1" },
        { label: "Hobart, Tasmania", href: "/permanent/jobs/in-hobart?page=1" },

        { label: "Wollongong, New South Wales", href: "/permanent/jobs/in-south-western-sydney?page=1" },

        { label: "Geelong, Victoria", href: "/permanent/jobs/in-geelong?page=1" },


      ],
    },
  },

  medical: {
    title: "General Practice",
    titleHref: "/",
    columns: [
      {
        heading: "",
        links: [
          {
            label: "Specialist General Practitioner (FRACGP & FRCRRM)",
            href: "/general-practice-division/fracgp-facrrm",
            icon: "",
            description: "Explore exciting opportunities for Specialist General Practitioners (FRACGP & FACRRM).",
          },
          {
            label: "General Practitioner (Registrars)",
            href: "/general-practice-division/gp-registrars",
            icon: "",
            description: "Explore GP Registrar positions today.",
          },
        ],
      },
      {
        heading: "",
        links: [
          {
            label: "International Family Medicine (Specialist Pathway Recruitment)",
            href: "/international/family-medicine-jobs/in-australia?page=1",
            icon: "",
            description: "Explore International Family Medicine specialist pathway opportunities.",
          },

        ],
      },
      {
        heading: "",
        links: [

          {
            label: "Locum GP (Short Term or Ongoing Cover)",
            href: "/general-practice-division/locum-gp",
            icon: "",
            description: "Locum GPs wanted for short-term and ongoing cover.",
          },
        ],
      },
    ],
    // explore: {
    //   heading: "Explore More",
    //   links: [
    //     { label: "Sydney, New South Wales", href: "/permanent/jobs/in-western-sydney?page=1" },
    //     { label: "Melbourne, Victoria", href: "/permanent/jobs/in-south-eastern-melbourne?page=1" },
    //     { label: "Brisbane, Queensland", href: "/permanent/jobs/in-brisbane-south?page=1" },
    //     { label: "Perth, Western Australia", href: "/permanent/jobs/in-south-perth?page=1" },
    //     { label: "Adelaide, South Australia", href: "/permanent/jobs/in-adelaide?page=1" },
    //     { label: "Gold Coast, Queensland", href:"/permanent/jobs/in-gold-coast?page=1" },
    //     { label: "Canberra, Australian Capital Territory", href: "/permanent/jobs/in-canberra?page=1" },
    //     { label: "Hobart, Tasmania", href: "/permanent/jobs/in-hobart?page=1" },

    //     { label: "Wollongong, New South Wales", href: "/permanent/jobs/in-south-western-sydney?page=1" },

    //     { label: "Geelong, Victoria", href: "/permanent/jobs/in-geelong?page=1" },

    //   ],
    // },
  },
  allied: {
    title: "Allied Health",
    titleHref: "/",
    columns: [
      {
        heading: "",
        links: [
          {
            label: "Speech Pathologist",
            href: "/permanent/speech-pathology-jobs/in-australia?page=1",
            icon: "",
            description: "Explore rewarding Speech Pathologist opportunities, providing care across paediatrics, adults, and clinical settings while advancing your career."
          },
          {
            label: "Physiotherapy",
            href: "/permanent/physiotherapy-jobs/in-australia?page=1",
            icon: "",
            description: "Looking for a Physiotherapy role? Discover opportunities to deliver patient-centred care in hospitals, clinics, or community settings."
          },
        ],
      },
      {
        heading: "",
        links: [
          {
            label: "Occupational Therapist",
            href: "/permanent/occupational-therapists-jobs/in-australia?page=1",
            icon: "",
            description: "Explore Occupational Therapist roles offering diverse experiences across health, NDIS, and rehabilitation services, supporting meaningful patient outcomes."
          },

        ],
      },
      {
        heading: "",
        links: [

          {
            label: "Podiatrist",
            href: "/permanent/podiatrist-jobs/in-australia?page=1",
            icon: "",
            description: "Discover Podiatrist opportunities to work in clinical or community settings, helping patients with foot health, mobility, and long-term care."
          },
        ],
      },



    ],
    // explore: {
    //   heading: "Explore More",
    //   links: [
    //    { label: "Sydney, New South Wales", href: "/permanent/jobs/in-western-sydney?page=1" },
    //     { label: "Melbourne, Victoria", href: "/permanent/jobs/in-south-eastern-melbourne?page=1" },
    //     { label: "Brisbane, Queensland", href: "/permanent/jobs/in-brisbane-south?page=1" },
    //     { label: "Perth, Western Australia", href: "/permanent/jobs/in-south-perth?page=1" },
    //     { label: "Adelaide, South Australia", href: "/permanent/jobs/in-adelaide?page=1" },
    //     { label: "Gold Coast, Queensland", href:"/permanent/jobs/in-gold-coast?page=1" },
    //     { label: "Canberra, Australian Capital Territory", href: "/permanent/jobs/in-canberra?page=1" },
    //     { label: "Hobart, Tasmania", href: "/permanent/jobs/in-hobart?page=1" },

    //     { label: "Wollongong, New South Wales", href: "/permanent/jobs/in-south-western-sydney?page=1" },

    //     { label: "Geelong, Victoria", href: "/permanent/jobs/in-geelong?page=1" },

    //   ],
    // },
  },
  mental: {
    title: "Mental Health",
    titleHref: "/",
    columns: [
      {
        heading: "",
        links: [
          {
            label: "Psychology",
            href: "/permanent/psychology-jobs/in-australia?page=1",
            icon: "",
            description: "Explore Psychology opportunities to provide mental health support, counselling, and evidence-based care across clinical, community, and organisational settings.",
          },
          // {
          //   label: "International Family Medicine (Specialised Pathway Recruitment)",
          //   href: "/international",
          //   icon: "",
          //   description: "Chart your course to success in the Australian healthcare",
          // },
        ],
      },
      // {
      //   heading: "",
      //   links: [
      //     {
      //       label: "General Practitioner (Registrars)",
      //       href: "/permanent",
      //       icon: "⚕️",
      //       description: "Chart your course to success in the Australian healthcare",
      //     },
      //     {
      //       label: "Locum GP (Short Term or Ongoing Cover)",
      //       href: "/locum",
      //       icon: "",
      //       description: "Chart your course to success in the Australian healthcare",
      //     },
      //   ],
      // },
    ],
    // explore: {
    //   heading: "Explore More",
    //   links: [
    //     { label: "Sydney, New South Wales", href: "/permanent/jobs/in-western-sydney?page=1" },
    //     { label: "Melbourne, Victoria", href: "/permanent/jobs/in-south-eastern-melbourne?page=1" },
    //     { label: "Brisbane, Queensland", href: "/permanent/jobs/in-brisbane-south?page=1" },
    //     { label: "Perth, Western Australia", href: "/permanent/jobs/in-south-perth?page=1" },
    //     { label: "Adelaide, South Australia", href: "/permanent/jobs/in-adelaide?page=1" },
    //     { label: "Gold Coast, Queensland", href:"/permanent/jobs/in-gold-coast?page=1" },
    //     { label: "Canberra, Australian Capital Territory", href: "/permanent/jobs/in-canberra?page=1" },
    //     { label: "Hobart, Tasmania", href: "/permanent/jobs/in-hobart?page=1" },

    //     { label: "Wollongong, New South Wales", href: "/permanent/jobs/in-south-western-sydney?page=1" },

    //     { label: "Geelong, Victoria", href: "/permanent/jobs/in-geelong?page=1" },

    //   ],
    // },
  },
  oral: {
    title: "Oral Health",
    titleHref: "/",
    columns: [
      {
        heading: "",
        links: [
          {
            label: "Dentist",
            href: "/permanent/dentists-jobs/in-australia?page=1",
            icon: "",
            description: "Explore Dentist opportunities to provide high-quality oral healthcare, preventive treatments, and patient-focused care in clinical and community settings.",
          },
          {
            label: "Dental Specialist",
            href: "/permanent/dental-jobs/in-australia?page=1",
            icon: "",
            description: "Explore Dental Specialist opportunities to provide expert care in areas such as orthodontics, endodontics, periodontics, and oral surgery, delivering advanced, patient-focused treatments.",
          },
        ],
      },
      {
        heading: "",
        links: [
          {
            label: "General Dentist",
            href: "/permanent/general-dentist-jobs/in-australia?page=1",
            icon: "",
            description: "Explore General Dentist opportunities to provide comprehensive dental care, including preventive, restorative, and patient-focused treatments in clinical settings.",
          },

        ],
      },
      {
        heading: "",
        links: [

          {
            label: "Oral Hygienist",
            href: "/permanent/oral-hygienist-jobs/in-australia?page=1",
            icon: "",
            description: "Explore Oral Hygienist opportunities to provide preventive dental care and promote oral health in clinical settings.",
          },
        ],
      },
    ],
    // explore: {
    //   heading: "Explore More",
    //   links: [
    //   { label: "Sydney, New South Wales", href: "/" },
    //     { label: "Melbourne, Victoria", href: "/" },
    //     { label: "Brisbane, Queensland", href: "/" },
    //     { label: "Perth, Western Australia", href: "/" },
    //     { label: "Adelaide, South Australia", href: "/" },
    //     { label: "Gold Coast, Queensland", href: "/" },
    //     { label: "Canberra, Australian Capital Territory", href: "/" },
    //     { label: "Hobart, Tasmania", href: "/" },

    //     { label: "Wollongong, New South Wales", href: "/" },

    //     { label: "Geelong, Victoria", href: "/" },
    //   ],
    // },
  },
  candidates: {
    title: "Candidates",
    titleHref: "/",
    columns: [
      {
        heading: "",
        links: [
          {
            label: "Medical Professionals",
            href: "/",
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
            label: "Mental health Professionals",
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
            label: "Dentistry & Oral Health Professionals",
            href: "/permanent",
            icon: "",
            description: "Chart your course to success in the Australian healthcare",
          },
          {
            label: "Refer and Earn",
            href: "/locum",
            icon: "",
            description: "Chart your course to success in the Australian healthcare",
          },
          {
            label: "Locum Shift Calendar",
            href: "/international",
            icon: "",
            description: "Chart your course to success in the Australian healthcare",
          },
          {
            label: "Candidate Resources",
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
        { label: "Sydney, New South Wales", href: "/permanent/jobs/in-western-sydney?page=1" },
        { label: "Melbourne, Victoria", href: "/permanent/jobs/in-south-eastern-melbourne?page=1" },
        { label: "Brisbane, Queensland", href: "/permanent/jobs/in-brisbane-south?page=1" },
        { label: "Perth, Western Australia", href: "/permanent/jobs/in-south-perth?page=1" },
        { label: "Adelaide, South Australia", href: "/permanent/jobs/in-adelaide?page=1" },
        { label: "Gold Coast, Queensland", href: "/permanent/jobs/in-gold-coast?page=1" },
        { label: "Canberra, Australian Capital Territory", href: "/permanent/jobs/in-canberra?page=1" },
        { label: "Hobart, Tasmania", href: "/permanent/jobs/in-hobart?page=1" },

        { label: "Wollongong, New South Wales", href: "/permanent/jobs/in-south-western-sydney?page=1" },

        { label: "Geelong, Victoria", href: "/permanent/jobs/in-geelong?page=1" },

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
          className=" hover:text-gray-400 cursor-pointer"
        >
          {menu.title}
        </button>
      </Link>

      {mounted &&
        createPortal(
          <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className={`fixed z-99 transition-all duration-150 w-full left-0 ${open ? "opacity-100 visible" : "opacity-0 invisible"
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