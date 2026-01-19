// MegaMenu.tsx
import Link from "next/link";

type MenuKey =
  | "permanent"
  | "candidates"
  | "locum"
  | "medical"
  | "allied"
  | "mental"
  | "oral";

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

// ---------------- MEGA MENU CONFIG ----------------
const MEGA_MENU_CONFIG: Record<MenuKey, MenuConfig> = {
  permanent: {
    title: "Permanent Jobs",
    titleHref: "/permanent",
    columns: [
      {
        heading: "",
        links: [
          { label: "New South Wales (NSW)", href: "/permanent/jobs/in-new-south-wales?page=1", description: "Explore Permanent Job Openings in New South Wales (NSW)" },
          { label: "Australian Capital Territory (ACT)", href: "/international", description: "Explore Permanent Job Openings in Australian Capital Territory (ACT)" },
          { label: "South Australia (SA)", href: "/international", description: "Explore Permanent Job Openings in South Australia (SA)" },
          { label: "Northern Territory (NT)", href: "/international", description: "Explore Permanent Job Openings in Northern Territory (NT)" },
        ],
      },
      {
        heading: "",
        links: [
          { label: "Queensland (QLD)", href: "/international", description: "Explore Permanent Job Openings in Queensland (QLD)" },
          { label: "Western Australia (WA)", href: "/international", description: "Explore Permanent Job Openings in Western Australia (WA)" },
          { label: "Victoria (VIC)", href: "/international", description: "Explore Permanent Job Openings in Victoria (VIC)" },
          { label: "Tasmania (TAS)", href: "/international", description: "Explore Permanent Job Openings in Tasmania (TAS)" },
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
          { label: "New South Wales (NSW)", href: "/permanent", description: "Explore Permanent Job Openings in New South Wales (NSW)" },
          { label: "Australian Capital Territory (ACT)", href: "/international", description: "Explore Permanent Job Openings in Australian Capital Territory (ACT)" },
          { label: "South Australia (SA)", href: "/international", description: "Explore Permanent Job Openings in South Australia (SA)" },
          { label: "Northern Territory (NT)", href: "/international", description: "Explore Permanent Job Openings in Northern Territory (NT)" },
        ],
      },
      {
        heading: "",
        links: [
          { label: "Queensland (QLD)", href: "/international", description: "Explore Permanent Job Openings in Queensland (QLD)" },
          { label: "Western Australia (WA)", href: "/international", description: "Explore Permanent Job Openings in Western Australia (WA)" },
          { label: "Victoria (VIC)", href: "/international", description: "Explore Permanent Job Openings in Victoria (VIC)" },
          { label: "Tasmania (TAS)", href: "/international", description: "Explore Permanent Job Openings in Tasmania (TAS)" },
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
  medical: {
    title: "Medical",
    titleHref: "/",
    columns: [
      {
        heading: "",
        links: [
          { label: "Specialist General Practitioner (FRACGP & FRCRRM)", href: "/permanent", description: "Explore exciting opportunities for Specialist General Practitioners (FRACGP & FACRRM)." },
          { label: "General Practitioner (Registrars)", href: "/international", description: "Explore GP Registrar positions today." },
        ],
      },
      {
        heading: "",
        links: [
          { label: "International Family Medicine (Specialist Pathway Recruitment)", href: "/permanent", description: "Explore International Family Medicine specialist pathway opportunities." },
          { label: "Locum GP (Short Term or Ongoing Cover)", href: "/locum", description: "Locum GPs wanted for short-term and ongoing cover." },
        ],
      },
    ],
    explore: {
      heading: "Explore More",
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
  allied: {
    title: "Allied Health",
    titleHref: "/",
    columns: [
      {
        heading: "",
        links: [
          { label: "Speech Pathologist", href: "/permanent", description: "Explore rewarding Speech Pathologist opportunities." },
          { label: "Physiotherapy", href: "/international", description: "Discover opportunities in Physiotherapy." },
        ],
      },
      {
        heading: "",
        links: [
          { label: "Occupational Therapist", href: "/permanent", description: "Explore Occupational Therapist roles." },
          { label: "Podiatrist", href: "/locum", description: "Discover Podiatrist opportunities." },
        ],
      },
    ],
    explore: {
      heading: "Explore More",
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
  mental: {
    title: "Mental Health",
    titleHref: "/",
    columns: [
      {
        heading: "",
        links: [
          { label: "Psychology", href: "/permanent", description: "Explore Psychology opportunities to provide mental health support." },
        ],
      },
    ],
    explore: {
      heading: "Explore More",
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
  oral: {
    title: "Oral Health",
    titleHref: "/",
    columns: [
      {
        heading: "",
        links: [
          { label: "Dentist", href: "/permanent", description: "Explore Dentist opportunities." },
          { label: "Dental Specialist", href: "/international", description: "Explore Dental Specialist opportunities." },
        ],
      },
      {
        heading: "",
        links: [
          { label: "General Dentist", href: "/permanent", description: "Explore General Dentist opportunities." },
          { label: "Oral Hygienist", href: "/locum", description: "Explore Oral Hygienist opportunities." },
        ],
      },
    ],
    explore: {
      heading: "Explore More",
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
  candidates: {
    title: "Candidates",
    titleHref: "/",
    columns: [
      {
        heading: "",
        links: [
          { label: "Medical Professionals", href: "/", description: "Chart your course to success in the Australian healthcare" },
          { label: "Allied Health Professionals", href: "/international", description: "Chart your course to success in the Australian healthcare" },
          { label: "Mental health Professionals", href: "/international", description: "Chart your course to success in the Australian healthcare" },
        ],
      },
      {
        heading: "",
        links: [
          { label: "Dentistry & Oral Health Professionals", href: "/permanent", description: "Chart your course to success in the Australian healthcare" },
          { label: "Refer and Earn", href: "/locum", description: "Chart your course to success in the Australian healthcare" },
          { label: "Locum Shift Calendar", href: "/international", description: "Chart your course to success in the Australian healthcare" },
          { label: "Candidate Resources", href: "/international", description: "Chart your course to success in the Australian healthcare" },
        ],
      },
    ],
    explore: {
      heading: "Explore More",
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
};

// ---------------- MEGA MENU COMPONENT ----------------
export default function MegaMenu({ menuKey }: { menuKey: MenuKey }) {
  const menu = MEGA_MENU_CONFIG[menuKey];
  if (!menu) return null;

  return (
    <div className="relative group">
      <Link href={menu.titleHref || "#"} className="hover:text-blue-600">
        {menu.title}
      </Link>

      {/* Dropdown */}
      <div className="absolute left-1/2 -translate-x-1/2 mt-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
        <div className="inner-width-section bg-white shadow-lg border-t-4 border-[#074CA4] p-8 rounded-b-lg">
          <div className="grid grid-cols-4 gap-8">
            {menu.columns.map((col, i) => (
              <div key={i}>
                <div className="space-y-8">
                  {col.links.map((link, j) => (
                    <Link key={j} href={link.href} className="block group">
                      <div className="flex items-start gap-4">
                        {link.icon && (
                          <span className="text-3xl flex-shrink-0">{link.icon}</span>
                        )}
                        <div className="flex-1">
                          <h5 className="text-[14px] cursor-pointer font-[600] text-[#040D48] group-hover:text-blue-600 transition mb-1">
                            {link.label}
                          </h5>
                          {link.description && (
                            <p className="text-[11px] text-[#0F172A] leading-tight">{link.description}</p>
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
                  <h4 className="font-bold text-gray-900 mb-4 text-[14px]">{menu.explore.heading}</h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {menu.explore.links.map((link, i) => (
                      <li key={i}>
                        <Link
                          href={link.href}
                          className="text-[#074CA4] hover:text-blue-700 text-[13px] font-semibold hover:underline"
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
    </div>
  );
}