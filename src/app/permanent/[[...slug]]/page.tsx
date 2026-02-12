import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/getPageMetadata";
import PermanentClient from "./PermanentClient";

const BASE_URL = "https://medfuture.com.au";

interface PermanentPageProps {
  params?: Promise<{ slug?: string[] }>;
}

// ✅ Helper function to format slug into readable title
function formatTitle(slugArray: string[]): string {
  if (!slugArray || slugArray.length === 0) {
    return "Permanent Jobs";
  }

  const words = slugArray
    .map((slug) => {
      if (slug.startsWith("in-")) {
        return slug.replace("/in-", "").replace(/-/g, " ");
      }
      return slug.replace(/-/g, " ");
    })
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1));

  return words.join(" in ");
}

// ✅ Correct dynamic metadata generator for App Router
export async function generateMetadata(
  props: PermanentPageProps
): Promise<Metadata> {
  // ✅ Await params first
  const params = await props.params;
  const slugArray = params?.slug ?? [];

  // Construct the full path for dynamicOverrides
  const path = `/permanent/${slugArray.join("/")}`;
  
  // ✅ NEW: Build the actual current URL (without query params for canonical)
  const currentUrl = `${BASE_URL}${path}`;

  // Template parameters for dynamic metadata
  const formattedTitle = formatTitle(slugArray);

  const templateParams = {
    id: slugArray.join("/") || "permanent",
    title: formattedTitle,
  };

  // ✅ NEW: Pass currentUrl to getPageMetadata
  const metadata = await getPageMetadata(
    "permanent",
    templateParams,
    path,
    currentUrl
  );

  return metadata;
}

// Page component
export default function PermanentPage() {
  return (
    <main className="bg-white">
      <PermanentClient />
    </main>
  );
}