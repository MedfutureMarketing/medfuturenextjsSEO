"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState, useMemo,  } from "react";

type BreadcrumbItem = {
  href: string;
  label: string;
  isCurrent: boolean;
};

type RouteConfig = {
  pattern: string;
  bgColor: string;
  textColor?: string;
  breadcrumbLabel?: string;
};

const ROUTE_CONFIGS: RouteConfig[] = [
  { pattern: "/permanent/job/", bgColor: "bg-[#0A2E5C]", textColor: "text-white", breadcrumbLabel: "Job Detail" },
  { pattern: "/job-seeker-hub", bgColor: "bg-[#040D48]", textColor: "text-white", breadcrumbLabel: "Job Seeker Hub" },
  { pattern: "/employer-hub", bgColor: "bg-[#0A2E5C]", textColor: "text-white", breadcrumbLabel: "Employer Hub" },
  { pattern: "/contact-us", bgColor: "bg-[#0D1A3E]", textColor: "text-white", breadcrumbLabel: "Contact Us" },
  { pattern: "/fracgp-facrrm", bgColor: "bg-[#040D48]", textColor: "text-white", breadcrumbLabel: "Fracgp - FACRRM" },
  { pattern: "/general-practice-division/fracgp-facrrm", bgColor: "bg-[#040D48]", textColor: "text-white", breadcrumbLabel: "Frac GP / FACRRM" },

  { pattern: "/medical-division", bgColor: "bg-[#040D48]", textColor: "text-white", breadcrumbLabel: "Medical Division" },
  { pattern: "/about-us", bgColor: "bg-[#0D1A3E]", textColor: "text-white", breadcrumbLabel: "About Us" },
  { pattern: "/permanent", bgColor: "bg-[#0A2E5C]", textColor: "text-white", breadcrumbLabel: "" },
  { pattern: "/locum", bgColor: "bg-[#040D48]", textColor: "text-white", breadcrumbLabel: "" },
  { pattern: "/international", bgColor: "bg-[#575D84]", textColor: "text-white", breadcrumbLabel: "" },
  { pattern: "/general-practice-division/locum-gp", bgColor: "bg-[#040D48]", textColor: "text-white", breadcrumbLabel: "" },
  { pattern: "/general-practice-division/gp-registrars", bgColor: "bg-[#040D48]", textColor: "text-white", breadcrumbLabel: "" },
  { pattern: "/ahp-division/speech-pathology", bgColor: "bg-white", textColor: "text-[#040D48]", breadcrumbLabel: "Speech Pathology" },
  { pattern: "/ahp-division/occupational-therapist", bgColor: "bg-white", textColor: "text-[#040D48]", breadcrumbLabel: "Occupational Therapist" },
  { pattern: "/ahp-division/podiatrist", bgColor: "bg-white", textColor: "text-[#040D48]", breadcrumbLabel: "Podiatrist" },
  { pattern: "/ahp-division/physiotherapy", bgColor: "bg-white", textColor: "text-[#040D48]", breadcrumbLabel: "Physiotherapy" },

  { pattern: "/mental-health/psychology", bgColor: "bg-[#040D48]", textColor: "text-white", breadcrumbLabel: "Psychology" },
  { pattern: "/general-practice-division", bgColor: "bg-white ", textColor: "text-[#040D48]", breadcrumbLabel: "General Practice Division" },
    { pattern: "/ahp-division", bgColor: "bg-[#040D48] ", textColor: "text-white", breadcrumbLabel: "Allied Health Division" },

  { pattern: "/sign-up", bgColor: "bg-[#040D48] hidden ", textColor: "text-white", breadcrumbLabel: "Allied Health Division" },


];
// 🔹 Helper functions
const formatSegmentLabel = (segment: string): string => {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

const getRouteConfig = (currentPath: string): RouteConfig | undefined => {
  return ROUTE_CONFIGS.find((route) => currentPath.startsWith(route.pattern));
};

const generateBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
  if (!pathname) return [];

  const pathSegments = pathname.split("/").filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [
    { href: "/", label: "Home", isCurrent: pathSegments.length === 0 },
  ];

  let currentPath = "";
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isCurrent = index === pathSegments.length - 1;
    const prevSegment = index > 0 ? pathSegments[index - 1] : "";

    const matchedRoute = getRouteConfig(currentPath);

    let label: string;
    if (prevSegment === "job" && isCurrent) {
      label = segment;
    } else if (segment === "job" && pathSegments[index + 1]) {
      label = "Job Listings";
    } else if (isCurrent && matchedRoute?.breadcrumbLabel) {
      label = matchedRoute.breadcrumbLabel;
    } else {
      label = formatSegmentLabel(segment);
    }

    breadcrumbs.push({ href: currentPath, label, isCurrent });
  });

  return breadcrumbs;
};

// 🔹 JSON-LD Schema for SEO
const generateBreadcrumbSchema = (breadcrumbs: BreadcrumbItem[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: `${typeof window !== "undefined" ? window.location.origin : ""}${crumb.href}`,
    })),
  };
};

export default function Breadcrumb() {
  const pathname = usePathname();
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);
  const [previousPage, setPreviousPage] = useState<string>("");

  // 🔹 Get background and text color with better memoization
  const themeColors = useMemo(() => {
    if (!pathname) return { bgColor: "bg-white", textColor: "" };
    const config = getRouteConfig(pathname);
    return {
      bgColor: config?.bgColor || "bg-white",
      textColor: config?.textColor || "",
    };
  }, [pathname]);

  // 🔹 Generate breadcrumbs efficiently
  useEffect(() => {
    const newBreadcrumbs = generateBreadcrumbs(pathname);
    setBreadcrumbs(newBreadcrumbs);
  }, [pathname]);

  // 🔹 Track previous page from URL referrer
  useEffect(() => {
    if (typeof window !== "undefined") {
      const referrer = document.referrer;
      setPreviousPage(referrer);
    }
  }, []);

  // 🔹 Memoized schema for SEO
  const breadcrumbSchema = useMemo(() => {
    return generateBreadcrumbSchema(breadcrumbs);
  }, [breadcrumbs]);

  // Early return for single breadcrumb
  if (breadcrumbs.length <= 1) return null;

  return (
    <>
      {/* 🔹 JSON-LD Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <nav
        aria-label="Breadcrumb"
        className={`flex lg:py-[13px] py-4 lg:px-1  px-4 full-width-section ${themeColors.bgColor} ${themeColors.textColor}`}
      >
        <ol className="flex items-center space-x-2 z-98 lg:text-sm text-[9px] inner-width-section">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={breadcrumb.href} className="flex items-center ">
              {index > 0 && (
                <span className="mx-2 opacity-50" aria-hidden="true">
                  /
                </span>
              )}

              {breadcrumb.isCurrent ? (
                <span className="font-medium opacity-70" aria-current="page">
                  {breadcrumb.label}
                </span>
              ) : (
                <Link
                  href={breadcrumb.href}
                  className={`transition-colors ${themeColors.textColor
                      ? "hover:opacity-70"
                      : "text-gray-600 hover:text-blue-700"
                    }`}
                  onClick={(e) => {
                    // If it's "Job Listings" breadcrumb, go back to previous page
                    if (breadcrumb.label === "Job Listings" && previousPage) {
                      e.preventDefault();
                      router.back();
                    }
                  }}
                >
                  {breadcrumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}