// lib/getPageMetadata.ts
import type { Metadata } from "next";
import { metaDataList } from "@/Data/metaDataList";

export async function getPageMetadata(pageKey: string): Promise<Metadata> {

  const pageMeta = metaDataList[pageKey];

  const defaultMeta: Metadata = {
    title: "medfuture | Medical & Healthcare Recruitment in Australia",
    description:
      "Medfuture stands as a leading brand in Australia and New Zealand, specializing in comprehensive medical and healthcare staffing",
  };

  if (!pageMeta) return defaultMeta;
  return pageMeta;
}
