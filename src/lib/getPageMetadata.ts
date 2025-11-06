// lib/getPageMetadata.ts
import type { Metadata } from "next";
import { metaDataList } from "@/Data/metaDataList";

export async function getPageMetadata(pageKey: string): Promise<Metadata> {
  // 🔹 Later, you’ll replace this with a backend API call
  const pageMeta = metaDataList[pageKey];

  // Default fallback (used if page key doesn’t exist)
  const defaultMeta: Metadata = {
    title: "My App – Responsive Layout",
    description:
      "A Next.js and Tailwind CSS app optimized for SEO and performance.",
  };

  if (!pageMeta) return defaultMeta;
  return pageMeta;
}
