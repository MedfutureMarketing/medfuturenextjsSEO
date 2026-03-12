import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/getPageMetadata";
import PermanentClient from "./PermanentClient";

const BASE_URL = "https://medfuture.com.au";

interface PermanentPageProps {
  params?: Promise<{ slug?: string[] }>;
  searchParams?: Promise<Record<string, string | string[]>>;
}

function formatTitle(slugArray: string[]): string {
  if (!slugArray || slugArray.length === 0) {
    return "Permanent Jobs";
  }

  const locationIndex = slugArray.findIndex((slug) => slug.startsWith("in-"));

  if (locationIndex === -1) {
    return slugArray
      .map((slug) => slug.replace(/-/g, " "))
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
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

  return `${jobTitle} in ${location}`;
}

export async function generateMetadata(
  props: PermanentPageProps
): Promise<Metadata> {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const slugArray = params?.slug ?? [];

  const path = slugArray.length > 0 
    ? `/permanent/${slugArray.join("/")}` 
    : `/permanent`;
  
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

  const formattedTitle = formatTitle(slugArray);

  const templateParams = {
    id: slugArray.join("/") || "permanent",
    title: formattedTitle,
  };

  const metadata = await getPageMetadata(
    "permanent",
    templateParams,
    path,
    currentUrl
  );

  // 🔍 LOG THE METADATA TO SEE WHAT'S BEING RETURNED
  console.log("🔍 Generated Metadata:", JSON.stringify(metadata, null, 2));
  console.log("🔍 Current URL:", currentUrl);

  return metadata;
}

export default function PermanentPage() {
  return (
    <main className="bg-white">
      <PermanentClient />
    </main>
  );
}