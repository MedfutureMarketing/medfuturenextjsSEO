// app/permanent/[...slug]/page.tsx
import type { Metadata } from "next";
import PermanentClient from "./PermanentClient";
import { getPageMetadata } from "@/lib/getPageMetadata";

const BASE_URL = "https://medfuture.com.au";

interface PermanentPageProps {
  params?: { slug?: string[] };
  searchParams?: Record<string, string | string[]>;
}

function formatTitle(slugArray: string[], page: number = 1): string {
  if (!slugArray || slugArray.length === 0) return page > 1 ? `All Permanent Jobs - Page ${page}` : "All Permanent Jobs in Australia";
  
  const locationIndex = slugArray.findIndex((s) => s.startsWith("in-"));
  if (locationIndex === -1) {
    const baseTitle = slugArray.map(s => s.replace(/-/g," ")).map(w => w.charAt(0).toUpperCase()+w.slice(1)).join(" ");
    return page > 1 ? `${baseTitle} - Page ${page}` : baseTitle;
  }

  const jobParts = slugArray.slice(0, locationIndex).map(s => s.replace(/-/g," ")).map(w => w.charAt(0).toUpperCase()+w.slice(1)).join(" ");
  const locationParts = slugArray.slice(locationIndex).map(s => s.replace(/^in-/,"").replace(/-/g," ")).map(w => w.charAt(0).toUpperCase()+w.slice(1)).join(" ");
  const baseTitle = `${jobParts} in ${locationParts}`;
  return page > 1 ? `${baseTitle} - Page ${page}` : baseTitle;
}

export async function generateMetadata(props: PermanentPageProps): Promise<Metadata> {
  const slugArray = props.params?.slug ?? [];
  const page = props.searchParams?.page ? parseInt(props.searchParams.page as string) : 1;

  const formattedTitle = formatTitle(slugArray, page);
  const path = slugArray.length > 0 ? `/permanent/${slugArray.join("/")}` : `/permanent`;
  const currentUrl = page > 1 ? `${BASE_URL}${path}?page=${page}` : `${BASE_URL}${path}`;

  return getPageMetadata("permanent", {
    id: slugArray.join("/") || "permanent",
    title: formattedTitle,
  }, path, currentUrl);
}

export default function PermanentPage() {
  return (
    <main className="bg-white">
      <PermanentClient /> {/* purely UI */}
    </main>
  );
}