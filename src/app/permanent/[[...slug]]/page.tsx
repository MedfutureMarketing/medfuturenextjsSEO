import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/getPageMetadata";
import PermanentClient from "./PermanentClient";

const BASE_URL = "https://medfuture.com.au";

interface PermanentPageProps {
  params?: Promise<{ slug?: string[] }>;
  // ✅ searchParams removed — query params should never be in canonical URLs
}

function formatTitle(slugArray: string[]): string {
  if (!slugArray || slugArray.length === 0) return "Permanent Jobs";

  const locationIndex = slugArray.findIndex((slug) => slug.startsWith("in-"));

  if (locationIndex === -1) {
    return slugArray
      .map((slug) => slug.replace(/-/g, " "))
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  const jobTitle = slugArray
    .slice(0, locationIndex)
    .map((slug) => slug.replace(/-/g, " "))
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const location = slugArray
    .slice(locationIndex)
    .map((slug) => slug.replace(/^in-/, "").replace(/-/g, " "))
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return `${jobTitle} in ${location}`;
}

// ✅ Still async because props.params is a Promise in Next.js 15 App Router
// ✅ But getPageMetadata itself is now sync — no await needed on it
export async function generateMetadata(
  props: PermanentPageProps
): Promise<Metadata> {
  const params = await props.params;
  const slugArray = params?.slug ?? [];

  const path =
    slugArray.length > 0
      ? `/permanent/${slugArray.join("/")}`
      : `/permanent`;

  const formattedTitle = formatTitle(slugArray);

  return getPageMetadata(
    "permanent",
    { id: slugArray.join("/") || "permanent", title: formattedTitle },
    path
    // ✅ No currentUrl with ?page=1 — canonical URLs must be query-param free
  );
}

export default function PermanentPage() {
  return (
    <main className="bg-white">
      <PermanentClient />
    </main>
  );
}