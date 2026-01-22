"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import Script from "next/script";

type JourneyStep = {
  href: string;
  label: string;
  timestamp: number;
};

export default function UserJourneyBreadcrumb() {
  const pathname = usePathname();
  const [journey, setJourney] = useState<JourneyStep[]>([]);

  // Get background color based on current route
  const getBgColor = () => {
    if (pathname.startsWith("/job-seeker-hub")) return "bg-[#040D48] text-white";
    if (pathname.startsWith("/employer-hub")) return "bg-[#0A2E5C] text-white";
    if (pathname.startsWith("/contact-us")) return "bg-[#0D1A3E] text-white";
    if (pathname.startsWith("/permanent")) return "bg-[#0A2E5C] text-white";
    if (pathname.startsWith("/locum")) return "bg-[#040D48] text-white";
    if (pathname.startsWith("/international")) return "bg-[#575D84] text-white";
    if (pathname.startsWith("/about-us")) return "bg-[#0D1A3E] text-white";
    return "bg-white text-gray-800";
  };

  // Generate meaningful label for current page
  const getPageLabel = (path: string): string => {
    if (path === "/") return "Home";
    if (path === "/permanent") return "Browse Permanent Jobs";
    if (path === "/locum") return "Browse Locum Jobs";
    if (path === "/international") return "International Opportunities";
    if (path === "/job-seeker-hub") return "Job Seeker Hub";
    if (path === "/employer-hub") return "Employer Hub";
    if (path === "/contact-us") return "Contact Us";
    if (path === "/sign-up") return "Sign Up";
    if (path === "/about-us") return "About Us";
    
    // Job detail page - CHECK THIS FIRST
    if (path.includes("/job/")) {
      const jobId = path.split("/job/")[1]?.split("/")[0];
      return `Job Details - ${jobId}`;
    }

    // Job search results page
    if (path.includes("/permanent/") || path.includes("/locum/") || path.includes("/international/")) {
      const parts = path.split("/").filter(Boolean);
      
      // Format: /[type]/[profession]/[location]
      if (parts.length >= 3) {
        let profession = parts[1]?.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
        let location = parts[2]?.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
        
        // Remove trailing "Jobs" if it exists (to avoid duplication)
        profession = profession?.replace(/\s+Jobs\s*$/, "").trim();
        
        // Remove leading "In" from location if it exists (e.g., "in-australian-capital-territory")
        location = location?.replace(/^In\s+/, "").trim();
        
        return `${profession} in ${location}`;
      }
      
      // Format: /[type]/[profession]
      if (parts.length >= 2) {
        let profession = parts[1]?.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
        
        // Remove trailing "Jobs" if it exists (to avoid duplication)
        profession = profession?.replace(/\s+Jobs\s*$/, "").trim();
        
        return `${profession} Jobs`;
      }
    }

    return "Page";
  };

  useEffect(() => {
    // Reset journey when user goes to homepage
    if (pathname === "/") {
      setJourney([]);
      return;
    }

    // Pages that start fresh breadcrumb (only show Home → Current Page)
    const freshStartPages = ["/contact-us", "/about-us", "/sign-up"];

    // Only add to journey if it's a meaningful page
    const meaningfulPages = [
      "/permanent",
      "/locum",
      "/international",
      "/job-seeker-hub",
      "/employer-hub",
      "/contact-us",
      "/sign-up",
      "/about-us"
    ];

    const isSearchPage = pathname.includes("/permanent/") || 
                         pathname.includes("/locum/") || 
                         pathname.includes("/international/");
    
    const isJobDetail = pathname.includes("/job/");

    if (meaningfulPages.includes(pathname) || isSearchPage || isJobDetail) {
      const label = getPageLabel(pathname);
      
      setJourney((prev) => {
        // If on a fresh start page, reset breadcrumb to just Home → Current Page
        if (freshStartPages.includes(pathname)) {
          return [
            {
              href: "/",
              label: "Home",
              timestamp: Date.now(),
            },
            {
              href: pathname,
              label,
              timestamp: Date.now(),
            },
          ];
        }

        // If user navigated away from home, reset journey and start fresh
        if (pathname !== "/" && prev.length === 0) {
          return [
            {
              href: "/",
              label: "Home",
              timestamp: Date.now(),
            },
            {
              href: pathname,
              label,
              timestamp: Date.now(),
            },
          ];
        }

        // Check if this exact path already exists in the journey
        const pathExists = prev.some(step => step.href === pathname);
        if (pathExists) {
          // If going back to an existing page, remove everything after it
          return prev.slice(0, prev.findIndex(step => step.href === pathname) + 1);
        }

        // If navigating to a job detail page, add it
        if (isJobDetail) {
          return [
            ...prev,
            {
              href: pathname,
              label,
              timestamp: Date.now(),
            },
          ];
        }

        // If navigating to a search results page, remove job detail pages and add new search page
        if (isSearchPage) {
          // Remove trailing job detail pages
          const updatedJourney = prev.filter(step => !step.href.includes("/job/"));
          
          return [
            ...updatedJourney,
            {
              href: pathname,
              label,
              timestamp: Date.now(),
            },
          ];
        }

        // Add new step for other pages
        return [
          ...prev,
          {
            href: pathname,
            label,
            timestamp: Date.now(),
          },
        ];
      });
    }
  }, [pathname]);

  if (journey.length === 0) return null;

  // Keep only the last 4 steps in the breadcrumb
  const displayJourney = journey.length > 4 ? journey.slice(-4) : journey;

  const bgColor = getBgColor();
  const isWhiteBg = bgColor === "bg-white text-gray-800";

  // Generate breadcrumb schema for SEO
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": displayJourney.map((step, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": step.label,
      "item": `${typeof window !== 'undefined' ? window.location.origin : ''}${step.href}`
    }))
  };

  return (
    <>
      {/* Breadcrumb Schema for SEO */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav className={`flex lg:py-[13px] py-4 lg:px-1  px-4 full-width-section ${bgColor} transition-colors`}>
        <ol className="flex items-center space-x-2 text-sm z-49 inner-width-section flex-wrap gap-2">
          {displayJourney.map((step, index) => (
            <li key={`${step.href}-${step.timestamp}`} className="flex items-center lg:block hidden">
              {index > 0 && (
                <span className={`mx-2 ${isWhiteBg ? "text-gray-400" : "text-white/40"}`}>
                  →
                </span>
              )}

              {index === displayJourney.length - 1 ? (
                // Current page
                <span
                  className={`lg:text-sm text-[10px] font-semibold ${
                    isWhiteBg ? "text-gray-700" : "text-white/80"
                  }`}
                  aria-current="page"
                >
                  {step.label}
                </span>
              ) : (
                // Previous pages (clickable)
                <Link
                  href={step.href}
                  className={`lg:text-sm text-[10px] font-medium transition-colors ${
                    isWhiteBg
                      ? "text-gray-600 hover:text-blue-700"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {step.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}