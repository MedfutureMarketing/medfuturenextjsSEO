// lib/getPageMetadata.ts
import type { Metadata } from "next";
import { metaDataList } from "@/Data/metaDataList";

export async function getPageMetadata(pageKey: string): Promise<Metadata> {

  const pageMeta = metaDataList[pageKey];

  const defaultMeta: Metadata = {
    title: "My App – Responsive Layout",
    description:
      "A Next.js and Tailwind CSS app optimized for SEO and performance.",
  };

  if (!pageMeta) return defaultMeta;
  return pageMeta;
}
