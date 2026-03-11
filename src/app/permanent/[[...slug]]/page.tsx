import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/getPageMetadata";
import PermanentClient from "./PermanentClient";

const BASE_URL = "https://medfuture.com.au";
const MAX_PAGINATION_DEPTH = 5; // Don't index beyond page 5

interface PermanentPageProps {
  params?: Promise<{ slug?: string[] }>;
  searchParams?: Promise<Record<string, string | string[]>>;
}

function formatTitle(slugArray: string[], page: number = 1): string {
  if (!slugArray || slugArray.length === 0) {
    return page > 1 ? `All Permanent Jobs - Page ${page}` : "All Permanent Jobs in Australia";
  }

  try {
    const locationIndex = slugArray.findIndex((slug) => slug.startsWith("in-"));

    if (locationIndex === -1) {
      const baseTitle = slugArray
        .map((slug) => slug.replace(/-/g, " "))
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      
      return page > 1 ? `${baseTitle} - Page ${page}` : baseTitle;
    }

    const jobParts = slugArray.slice(0, locationIndex);
    const locationParts = slugArray.slice(locationIndex);

    const jobTitle = jobParts
      .map((slug) => slug.replace(/-/g, " "))
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    const location = locationParts
      .map((slug) => slug.replace(/^in-/, "").replace(/-/g, " "))
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    const baseTitle = `${jobTitle} in ${location}`;
    return page > 1 ? `${baseTitle} - Page ${page}` : baseTitle;
  } catch (error) {
    console.error("Error formatting title:", error);
    return "Medical & Healthcare Jobs in Australia";
  }
}

export async function generateMetadata(
  props: PermanentPageProps
): Promise<Metadata> {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const slugArray = params?.slug ?? [];
  
  // Get page number from searchParams
  const page = searchParams?.page ? parseInt(searchParams.page as string) : 1;
  const isPaginated = page > 1;

  const path = slugArray.length > 0 
    ? `/permanent/${slugArray.join("/")}` 
    : `/permanent`;
  
  // Build canonical URL (without page=1, with page for >1)
  let canonicalUrl = `${BASE_URL}${path}`;
  if (isPaginated) {
    canonicalUrl += `?page=${page}`;
  }
  
  // Build current URL (always include all params)
  let currentUrl = `${BASE_URL}${path}`;
  if (searchParams && Object.keys(searchParams).length > 0) {
    const queryString = new URLSearchParams();
    Object.entries(searchParams).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach(v => queryString.append(key, v));
      } else {
        queryString.set(key, value);
      }
    });
    const qs = queryString.toString();
    if (qs) {
      currentUrl += `?${qs}`;
    }
  }

  const formattedTitle = formatTitle(slugArray, page);

  const templateParams = {
    id: slugArray.join("/") || "permanent",
    title: formattedTitle,
    page: page.toString(),
    isPaginated: isPaginated.toString(),
  };

  const metadata = await getPageMetadata(
    "permanent",
    templateParams,
    path,
    currentUrl  // Use currentUrl for og:url and twitter
  );

  // Add robots control for deep pagination
  const robots = page > MAX_PAGINATION_DEPTH ? {
    index: false,
    follow: true,
  } : undefined;

  // Override canonical in the returned metadata
  return {
    ...metadata,
    alternates: {
      ...metadata.alternates,
      canonical: canonicalUrl,  // Use canonicalUrl for canonical
    },
    robots,
  };
}

export default function PermanentPage() {
  return (
    <main className="bg-white">
      <PermanentClient />
    </main>
  );
}