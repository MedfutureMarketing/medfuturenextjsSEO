"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { JSX, useEffect, useState } from "react";
import { createPortal } from "react-dom";

// ── Asset Imports ──────────────────────────────────────────────────────────────
import gpHubImage from "@/assets/icons/medfuturecover.webp";
import permanentHubImage from "@/assets/icons/medfuturecover.webp";
import locumHubImage from "@/assets/icons/medfuturecover.webp";
import alliedHubImage from "@/assets/icons/medfuturecover.webp";
import mentalHubImage from "@/assets/icons/medfuturecover.webp";
import oralHubImage from "@/assets/icons/medfuturecover.webp";
import candidatesHubImage from "@/assets/icons/medfuturecover.webp";
// ──────────────────────────────────────────────────────────────────────────────

type MenuKey = "permanent" | "candidates" | "locum" | "medical" | "allied" | "mental" | "oral" | "Explore";

interface MenuLink {
  label: string;
  href: string;
  icon?: string;
  description?: string;
}

interface HubSection {
  title: string;
  titleHref?: string;
  image: StaticImageData;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}

interface MenuConfig {
  title: string;
  titleHref?: string;
  hub?: HubSection;
  professionsHeading?: string;
  columns: {
    heading: string;
    links: MenuLink[];
  }[];
  explore?: {
    heading: string;
    links: { label: string; href: string }[];
  };
}

// SVG icon components matching the screenshot style
const icons: Record<string, JSX.Element> = {
  stethoscope: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#074CA4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
      <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
      <circle cx="20" cy="10" r="2" />
    </svg>
  ),
  user: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#074CA4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  clock: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#074CA4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  globe: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#074CA4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  heart: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#074CA4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  building: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#074CA4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 9h1v1H9z" /><path d="M14 9h1v1h-1z" />
      <path d="M9 14h1v1H9z" /><path d="M14 14h1v1h-1z" />
      <path d="M9 19v-4h6v4" />
    </svg>
  ),
  map: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#074CA4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" />
      <line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  ),
  briefcase: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#074CA4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  ),
};

const MEGA_MENU_CONFIG: Record<MenuKey, MenuConfig> = {
  Explore: {
    title: "Explore",
    titleHref: "/permanent",
    columns: [
      {
        heading: "",
        links: [
          {
            label: "Medical Jobs in New Zealand",
            href: "https://medfuture.co.nz/",
            icon: "globe",
            description: "Medfuture New Zealand connects healthcare professionals with opportunities across New Zealand, offering guidance, recruitment, and career support.",
          },
          {
            label: "Blogs",
            href: "https://themedfuture.com/blog",
            icon: "briefcase",
            description: "Stay updated with our latest insights, news, and expert articles. Discover tips, trends, and stories that keep you informed.",
          },
        ],
      },
      {
        heading: "",
        links: [
          {
            label: "Medfuture Global",
            href: "https://themedfuture.com/blog",
            icon: "globe",
            description: "Explore how Medfuture Global connects healthcare talent with the right opportunities worldwide.",
          },
        ],
      },
      {
        heading: "",
        links: [
          {
            label: "Visa & Immigration Services",
            href: "https://intuit7.com/",
            icon: "map",
            description: "Get expert guidance on visa applications, immigration processes, and residency options. We simplify complex procedures.",
          },
        ],
      },
    ],
  },

  permanent: {
    title: "Permanent Jobs",
    titleHref: "/permanent",
    hub: {
      title: "Permanent Jobs ",
      titleHref: "/permanent",
      image: permanentHubImage,
      description: "Access permanent roles, market insights, and career support tailored to your clinical focus.",
      buttonLabel: "Explore Permanent Jobs",
      buttonHref: "/permanent",
    },
    professionsHeading: "Browse by State",
    columns: [
      {
        heading: "",
        links: [
          { label: "New South Wales (NSW)", href: "/permanent/jobs/in-new-south-wales?page=1", icon: "map", description: "Explore Permanent Job Openings in New South Wales (NSW)" },
          { label: "Australian Capital Territory (ACT)", href: "/permanent/jobs/in-australian-capital-territory?page=1", icon: "map", description: "Explore Permanent Job Openings in ACT" },
          { label: "South Australia (SA)", href: "/permanent/jobs/in-south-australia?page=1", icon: "map", description: "Explore Permanent Job Openings in South Australia" },
          { label: "Northern Territory (NT)", href: "/permanent/jobs/in-northern-territory?page=1", icon: "map", description: "Explore Permanent Job Openings in Northern Territory" },
        ],
      },
      {
        heading: "",
        links: [
          { label: "Queensland (QLD)", href: "/permanent/jobs/in-queensland?page=1", icon: "map", description: "Explore Permanent Job Openings in Queensland (QLD)" },
          { label: "Western Australia (WA)", href: "/permanent/jobs/in-western-australia?page=1", icon: "map", description: "Explore Permanent Job Openings in Western Australia" },
          { label: "Victoria (VIC)", href: "/permanent/jobs/in-victoria?page=1", icon: "map", description: "Explore Permanent Job Openings in Victoria (VIC)" },
          { label: "Tasmania (TAS)", href: "/permanent/jobs/in-tasmania?page=1", icon: "map", description: "Explore Permanent Job Openings in Tasmania (TAS)" },
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
    hub: {
      title: "Locum Jobs Hub",
      titleHref: "/locum",
      image: locumHubImage,
      description: "Discover flexible locum roles with competitive pay across Australia. Find short-term and ongoing placements.",
      buttonLabel: "Explore Locum Jobs",
      buttonHref: "/locum",
    },
    professionsHeading: "Browse by State",
    columns: [
      {
        heading: "",
        links: [
          { label: "New South Wales (NSW)", href: "/locum/jobs/in-new-south-wales?page=1", icon: "map", description: "Explore Locum Job Openings in New South Wales (NSW)" },
          { label: "Australian Capital Territory (ACT)", href: "/locum/jobs/in-australian-capital-territory?page=1", icon: "map", description: "Explore Locum Job Openings in ACT" },
          { label: "South Australia (SA)", href: "/locum/jobs/in-south-australia?page=1", icon: "map", description: "Explore Locum Job Openings in South Australia" },
          { label: "Northern Territory (NT)", href: "/locum/jobs/in-northern-territory?page=1", icon: "map", description: "Explore Locum Job Openings in Northern Territory" },
        ],
      },
      {
        heading: "",
        links: [
          { label: "Queensland (QLD)", href: "/locum/jobs/in-queensland?page=1", icon: "map", description: "Explore Locum Job Openings in Queensland (QLD)" },
          { label: "Western Australia (WA)", href: "/locum/jobs/in-western-australia?page=1", icon: "map", description: "Explore Locum Job Openings in Western Australia" },
          { label: "Victoria (VIC)", href: "/locum/jobs/in-victoria?page=1", icon: "map", description: "Explore Locum Job Openings in Victoria (VIC)" },
          { label: "Tasmania (TAS)", href: "/locum/jobs/in-tasmania?page=1", icon: "map", description: "Explore Locum Job Openings in Tasmania (TAS)" },
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
    titleHref: "/general-practice-division",
    hub: {
      title: "General Practitioner Hub",
      titleHref: "/general-practice-division",
      image: gpHubImage,
      description: "Access GP roles, market insights, and career support tailored to your clinical focus.",
      buttonLabel: "Explore GP Hub",
      buttonHref: "/general-practice-division",
    },
    professionsHeading: "Professions",
    columns: [
      {
        heading: "",
        links: [
          {
            label: "Specialist GP (FRACGP/FACRRM)",
            href: "/general-practice-division/fracgp-facrrm",
            icon: "stethoscope",
            description: "Chart your course to success in the Australian healthcare",
          },
          {
            label: "Locum GP",
            href: "/general-practice-division/locum-gp",
            icon: "clock",
            description: "Chart your course to success in the Australian healthcare",
          },
        ],
      },
      {
        heading: "",
        links: [
          {
            label: "GP Registrar",
            href: "/general-practice-division/gp-registrars",
            icon: "user",
            description: "Chart your course to success in the Australian healthcare",
          },
          {
            label: "International GP",
            href: "/international/family-medicine-jobs/in-australia?page=1",
            icon: "globe",
            description: "Chart your course to success in the Australian healthcare",
          },
        ],
      },
    ],
    explore: {
      heading: "Explore More",
      links: [
        { label: "GP Jobs in Victoria", href: "/permanent/jobs/in-victoria?page=1" },
        { label: "Permanent Roles in Perth", href: "/permanent/jobs/in-south-perth?page=1" },
        { label: "Locum Jobs in NSW", href: "/locum/jobs/in-new-south-wales?page=1" },
        { label: "Gp Jobs in Tasmania", href: "/permanent/jobs/in-tasmania?page=1" },
        { label: "Locum Gp Jobs", href: "/locum/jobs/in-australia?page=1" },
        { label: "International OT Jobs", href: "/ahp-division/occupational-therapist" },
      ],
    },
  },

  allied: {
    title: "Allied Health",
    titleHref: "/ahp-division",
    hub: {
      title: "Allied Health Hub",
      titleHref: "/ahp-division",
      image: alliedHubImage,
      description: "Access allied health roles, market insights, and career support tailored to your clinical specialty.",
      buttonLabel: "Explore Allied Health Hub",
      buttonHref: "/ahp-division",
    },
    professionsHeading: "Professions",
    columns: [
      {
        heading: "",
        links: [
          {
            label: "Speech Pathologist",
            href: "/ahp-division/speech-pathology",
            icon: "heart",
            description: "Rewarding opportunities in paediatrics, adults, and clinical settings.",
          },
          {
            label: "Occupational Therapist",
            href: "/ahp-division/occupational-therapist",
            icon: "briefcase",
            description: "Diverse experiences across health, NDIS, and rehabilitation services.",
          },
        ],
      },
      {
        heading: "",
        links: [
          {
            label: "Physiotherapy",
            href: "/ahp-division/physiotherapy",
            icon: "user",
            description: "Deliver patient-centred care in hospitals, clinics, or community settings.",
          },
          {
            label: "Podiatrist",
            href: "/ahp-division/podiatrist",
            icon: "stethoscope",
            description: "Help patients with foot health, mobility, and long-term care.",
          },
        ],
      },
    ],
    explore: {
      heading: "Explore More",
      links: [
        { label: "Speech Pathology Jobs in NSW", href: "/permanent/speech-pathologist-jobs/in-new-south-wales?page=1" },
        { label: "Physiotherapy Jobs in VIC", href: "/permanent/physiotherapy-jobs/in-victoria?page=1" },
        { label: "OT Roles in Queensland", href: "/permanent/occupational-therapists-jobs/in-queensland?page=1" },
        { label: "Podiatry Jobs in WA", href: "/permanent/podiatry-jobs/in-western-australia?page=1" },
      ],
    },
  },

  mental: {
    title: "Mental Health",
    titleHref: "/mental-health",
    hub: {
      title: "Mental Health Hub",
      titleHref: "/mental-health",
      image: mentalHubImage,
      description: "Explore mental health roles, career resources, and support tailored to your specialisation.",
      buttonLabel: "Explore Mental Health Hub",
      buttonHref: "/mental-health",
    },
    professionsHeading: "Professions",
    columns: [
      {
        heading: "",
        links: [
          {
            label: "Psychology",
            href: "/mental-health/psychology",
            icon: "heart",
            description: "Provide mental health support and evidence-based care across clinical and community settings.",
          },
        ],
      },
      {
        heading: "",
        links: [],
      },
    ],
    explore: {
      heading: "Explore More",
      links: [
        { label: "Psychology Jobs in NSW", href: "/permanent/psychology-jobs/in-new-south-wales?page=1" },
        { label: "Psychology Jobs in VIC", href: "/permanent/psychology-jobs/in-victoria?page=1" },
        { label: "Psychology Jobs in Tasmania", href: "/permanent/psychology-jobs/in-tasmania?page=1" },
      ],
    },
  },

  oral: {
    title: "Oral Health",
    titleHref: "/",
    hub: {
      title: "Oral Health Hub",
      titleHref: "/",
      image: oralHubImage,
      description: "Find dentistry and oral health roles across Australia with career support and placement expertise.",
      buttonLabel: "Explore Oral Health Hub",
      buttonHref: "/",
    },
    professionsHeading: "Professions",
    columns: [
      {
        heading: "",
        links: [
          {
            label: "Dentist",
            href: "/permanent/dentists-jobs/in-australia?page=1",
            icon: "stethoscope",
            description: "Provide high-quality oral healthcare in clinical and community settings.",
          },
          {
            label: "General Dentist",
            href: "/permanent/general-dentist-jobs/in-australia?page=1",
            icon: "user",
            description: "Comprehensive dental care including preventive and restorative treatments.",
          },
        ],
      },
      {
        heading: "",
        links: [
          {
            label: "Dental Specialist",
            href: "/permanent/dental-jobs/in-australia?page=1",
            icon: "briefcase",
            description: "Expert care in orthodontics, endodontics, periodontics, and oral surgery.",
          },
          {
            label: "Oral Hygienist",
            href: "/permanent/oral-hygienist-jobs/in-australia?page=1",
            icon: "heart",
            description: "Preventive dental care and oral health promotion in clinical settings.",
          },
        ],
      },
    ],
    explore: {
      heading: "Explore More",
      links: [
        { label: "Dentist Jobs in NSW", href: "/permanent/dentists-jobs/in-australia?page=1" },
        { label: "Dentist Jobs in VIC", href: "/permanent/dentists-jobs/in-australia?page=1" },
        { label: "Dental Specialist Roles", href: "/permanent/dental-jobs/in-australia?page=1" },
      ],
    },
  },

  candidates: {
    title: "Candidates",
    titleHref: "/",
    hub: {
      title: "Candidate Hub",
      titleHref: "/",
      image: candidatesHubImage,
      description: "Access resources, tools, and support to advance your healthcare career in Australia.",
      buttonLabel: "Explore Candidate Hub",
      buttonHref: "/",
    },
    professionsHeading: "Resources",
    columns: [
      {
        heading: "",
        links: [
          { label: "Medical Professionals", href: "/", icon: "stethoscope", description: "Chart your course to success in the Australian healthcare" },
          { label: "Allied Health Professionals", href: "/international", icon: "heart", description: "Chart your course to success in the Australian healthcare" },
          { label: "Mental Health Professionals", href: "/international", icon: "user", description: "Chart your course to success in the Australian healthcare" },
        ],
      },
      {
        heading: "",
        links: [
          { label: "Dentistry & Oral Health Professionals", href: "/permanent", icon: "briefcase", description: "Chart your course to success in the Australian healthcare" },
          { label: "Refer and Earn", href: "/locum", icon: "globe", description: "Chart your course to success in the Australian healthcare" },
          { label: "Locum Shift Calendar", href: "/international", icon: "clock", description: "Chart your course to success in the Australian healthcare" },
          { label: "Candidate Resources", href: "/international", icon: "map", description: "Chart your course to success in the Australian healthcare" },
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

  const hasHub = !!menu.hub;

  return (
    <>
      {/* Trigger */}
      <Link href={menu.titleHref || "#"}>
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => setOpen(false)}
          className="hover:text-gray-400 cursor-pointer"
        >
          {menu.title}
        </button>
      </Link>

      {mounted &&
        createPortal(
          <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className={`fixed z-[99] transition-all duration-150 w-full  left-0 ${open ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            style={{ top }}
          >
            <div className=" inner-width-section border-gray-200">
              <div className="mx-auto px-0 py-0 mt-2 bg-white">
                {/* Layout: Hub | Divider | Professions | Divider | Explore More */}
                <div className="flex gap-0 bg-white" >

                  {/* ── LEFT: Hub Panel ── */}
                  {/* ── LEFT: Hub Panel ── */}
                  {/* ── LEFT: Hub Panel ── */}
                  {hasHub && (
                    <>
                      <div className="w-[270px] flex-shrink-0 px-8 bg-white shadow-[20px_0_40px_-35px_rgba(0,0,0,0.3)] py-4 relative">

                        {/* Arrow — sits ON the right edge / shadow line */}
                        <Link
                          href={menu.hub!.titleHref || "#"}
                          className="absolute -right-5 top-4 z-10 w-[40px] h-[40px] rounded-full shadow-md border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#040D48" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </Link>

                        {/* Title row — no arrow here anymore */}
                        <div className="mb-4">
                          <h3 className="text-[16px] font-[700] text-[#040D48] leading-tight">
                            {menu.hub!.title}
                          </h3>
                        </div>

                        {/* Image */}
                        <div className="rounded-lg overflow-hidden mb-4 bg-gray-100 h-[135px] relative">
                          <Image
                            src={menu.hub!.image}
                            alt={menu.hub!.title}
                            fill
                            className="object-cover"
                            sizes="220px"
                          />
                        </div>

                        {/* Description */}
                        <p className="text-[12px] text-gray-600 mb-4 leading-relaxed">
                          {menu.hub!.description}
                        </p>

                        {/* CTA Button */}
                        <Link href={menu.hub!.buttonHref}>
                          <button className="w-full bg-[#074CA4] hover:bg-[#0557be] text-white text-[13px] font-[500] px-4 py-2.5 rounded-[8px] transition-colors cursor-pointer">
                            {menu.hub!.buttonLabel}
                          </button>
                        </Link>
                      </div>

                      {/* Vertical divider */}
                      <div className="w-px bg-gray-200 mx-4 hidden self-stretch flex-shrink-0" />
                    </>
                  )}

                  {/* ── MIDDLE: Professions / Columns ── */}
                  <div className="flex-1 px-16 py-4 bg-white">
                    {menu.professionsHeading && (
                      <h4 className="text-[16px] font-[700] text-[#0F172A] mb-4 pb-1 border-gray-200">
                        {menu.professionsHeading}
                      </h4>
                    )}
                    <div className="grid gap-x-8" style={{ gridTemplateColumns: `repeat(${menu.columns.length}, 1fr)` }}>
                      {menu.columns.map((col, i) => (
                        <div key={i} className="space-y-5">
                          {col.heading && (
                            <p className="text-[14px] font-[700] text-[#074CA4] uppercase tracking-wide">
                              {col.heading}
                            </p>
                          )}
                          {col.links.map((link, j) => (
                            <Link key={j} href={link.href} className="flex items-start gap-3 group">
                              {/* Icon circle */}
                              {link.icon && icons[link.icon] && (
                                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mt-0.5">
                                  {icons[link.icon]}
                                </div>
                              )}
                              <div>
                                <p className="text-[14px] font-[600] text-[#0D1A3E] group-hover:text-[#074CA4] transition-colors leading-snug mb-0.5">
                                  {link.label}
                                </p>
                                {link.description && (
                                  <p className="text-[11px] text-[#4A5565] leading-relaxed">
                                    {link.description}
                                  </p>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ── RIGHT: Explore More ── */}
                  {menu.explore && (
                    <>
                      {/* Vertical divider */}
                      <div className="w-px" />

                      <div className="w-[200px] py-4 px-0  bg-gray-200 flex-shrink-0 px-4">
                        <h4 className="text-[13px] font-[700] text-gray-800 mb-3 pb-1 border-b border-gray-500">
                          {menu.explore.heading}
                        </h4>
                        <ul className="space-y-2">
                          {menu.explore.links.map((link, i) => (
                            <li key={i}>
                              <Link
                                href={link.href}
                                className="text-[12px] text-[#374151] hover:text-[#074CA4] hover:underline transition-colors block leading-snug"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
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