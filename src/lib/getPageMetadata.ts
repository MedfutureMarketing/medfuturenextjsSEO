import type { Metadata } from "next";
import { metaDataList, dynamicOverrides } from "@/Data/metaDataList";

// Define the expected shape of params for dynamic pages
export interface TemplateParams {
  id?: string;
  title?: string;
}

// Get metadata for a page (static or dynamic)
export async function getPageMetadata(
  pageKey: string,
  params?: TemplateParams, // <-- use TemplateParams instead of `any`
  path?: string
): Promise<Metadata> {
  // 1️⃣ Check for dynamic override by full path
  if (path && dynamicOverrides[path]) {
    return dynamicOverrides[path];
  }

  // 2️⃣ Get metadata from metaDataList
  const pageMeta = metaDataList[pageKey];

  // 3️⃣ If dynamic template
  if (typeof pageMeta === "function") {
    return pageMeta(params || {});
  }

  // 4️⃣ If static page
  if (pageMeta) {
    return pageMeta;
  }

  // 5️⃣ Default fallback
  return {
    title: "Medfuture | Medical & Healthcare Recruitment in Australia",
    description:
      "Medfuture stands as a leading brand in Australia and New Zealand, specializing in comprehensive medical and healthcare staffing.",
  };
}
