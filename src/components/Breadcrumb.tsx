"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

type BreadcrumbItem = {
  href: string;
  label: string;
  isCurrent: boolean;
};

export default function Breadcrumb() {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);

  // 🔹 Background color logic
  const getBgColor = () => {
    if (!pathname) return "bg-white";

    if (pathname.startsWith("/jobs")) return "bg-blue-50";
    if (pathname.startsWith("/job-seeker-hub")) return "bg-[#040D48] text-white";
    if (pathname.startsWith("/employer-hub")) return "bg-[#0A2E5C]";
    if (pathname.startsWith("/contact-us")) return "bg-[#0D1A3E]";
    if (pathname.startsWith("/fracgp-facrrm")) return "bg-[#040D48]";
    if (pathname.startsWith("/medical-division")) return "bg-[#040D48]";
    if (pathname.startsWith("/about-us")) return "bg-[#0D1A3E]";
    if (pathname.startsWith("/general-practitioner-registrar")) return "bg-[#040D48]";
    if (pathname.startsWith("/permanent/")) return "bg-[#0A2E5C]";
    if (pathname.startsWith("/permanent")) return "bg-[#0A2E5C]";
    if (pathname.startsWith("/locum/")) return "bg-[#040D48]";
    if (pathname.startsWith("/locum")) return "bg-[#040D48]";
    if (pathname.startsWith("/international")) return "bg-[#575D84]";
        if (pathname.startsWith("/international/")) return "bg-[#575D84]";


    

    return "bg-white";
  };

  useEffect(() => {
    if (!pathname) return;

    const pathSegments = pathname.split("/").filter(Boolean);
    const newBreadcrumbs: BreadcrumbItem[] = [];

    // Home
    newBreadcrumbs.push({
      href: "/",
      label: "Home",
      isCurrent: pathSegments.length === 0,
    });

    let currentPath = "";
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;

      newBreadcrumbs.push({
        href: currentPath,
        label: segment
          .split("-")
          .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1)
          )
          .join(" "),
        isCurrent: index === pathSegments.length - 1,
      });
    });

    setBreadcrumbs(newBreadcrumbs);
  }, [pathname]);

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav
      className={`flex lg:py-[13px] py-4 lg:px-1 px-4   full-width-section ${getBgColor()}`}
    >
      <ol className="flex items-center space-x-2 text-sm z-49 inner-width-section">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 ">/</span>
            )}

            {breadcrumb.isCurrent ? (
              <span className="text-gray-400 lg:text-sm text-[8px] font-medium">
                {breadcrumb.label}
              </span>
            ) : (
              <Link
                href={breadcrumb.href}
                className=" hover:text-blue-700 lg:text-sm text-[8px]  text-gray-400 transition-colors"
              >
                {breadcrumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
