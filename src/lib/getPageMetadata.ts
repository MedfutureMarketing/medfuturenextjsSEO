import type { Metadata } from "next";
import { metaDataList, dynamicOverrides } from "@/Data/metaDataList";

const BASE_URL = "https://medfuture.com.au";

// Define the expected shape of params for dynamic pages
export interface TemplateParams {
  id?: string;
  title?: string;
}

// Get metadata for a page (static or dynamic)
export async function getPageMetadata(
  pageKey: string,
  params?: TemplateParams,
  path?: string // Full page path like "/permanent/general-practitioner-jobs/in-australia"
): Promise<Metadata> {
  let metadata: Metadata;

  // 1️⃣ Check for dynamic override by full path
  if (path && dynamicOverrides[path]) {
    metadata = { ...dynamicOverrides[path] };
  } else {
    // 2️⃣ Get metadata from metaDataList
    const pageMeta = metaDataList[pageKey];

    // 3️⃣ If dynamic template
    if (typeof pageMeta === "function") {
      metadata = pageMeta(params || {});
    } else if (pageMeta) {
      // 4️⃣ If static page
      metadata = { ...pageMeta };
    } else {
      // 5️⃣ Default fallback
      metadata = {
        title: "Medfuture | Medical & Healthcare Recruitment in Australia",
        description:
          "Medfuture stands as a leading brand in Australia and New Zealand, specializing in comprehensive medical and healthcare staffing.",
      };
    }
  }

  // 6️⃣ Override canonical URL with actual page path
  if (path) {
    if (!metadata.alternates) {
      metadata.alternates = {};
    }
    metadata.alternates.canonical = `${BASE_URL}${path}`;
  }

  return metadata;
}