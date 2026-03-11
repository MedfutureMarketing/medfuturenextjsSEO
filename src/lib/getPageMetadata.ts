import type { Metadata } from "next";
import { metaDataList, dynamicOverrides } from "@/Data/metaDataList";

const BASE_URL = "https://medfuture.com.au";

export interface TemplateParams {
  id?: string;
  title?: string;
}

// ✅ Synchronous — no async, no Promise. Metadata lands in <head> on first byte.
export function getPageMetadata(
  pageKey: string,
  params?: TemplateParams,
  path?: string,
  currentUrl?: string
): Metadata {
  // Canonical should never include query params like ?page=1
  const canonicalUrl = path ? `${BASE_URL}${path}` : BASE_URL;

  // 1️⃣ Check for dynamic override by full path
  if (path && dynamicOverrides[path]) {
    const overrideMeta = dynamicOverrides[path];
    return {
      ...overrideMeta,
      alternates: {
        ...overrideMeta.alternates,
        canonical: canonicalUrl,
      },
    };
  }

  // 2️⃣ Get metadata from metaDataList
  const pageMeta = metaDataList[pageKey];

  // 3️⃣ Dynamic template (function)
  if (typeof pageMeta === "function") {
    const dynamicMeta = pageMeta(params || {});
    return {
      ...dynamicMeta,
      alternates: {
        ...dynamicMeta.alternates,
        canonical: canonicalUrl,
      },
    };
  }

  // 4️⃣ Static page
  if (pageMeta) {
    return {
      ...pageMeta,
      alternates: {
        ...pageMeta.alternates,
        canonical: canonicalUrl,
      },
    };
  }

  // 5️⃣ Fallback
  return {
    title: "Medfuture | Medical & Healthcare Recruitment in Australia",
    description:
      "Medfuture stands as a leading brand in Australia and New Zealand, specializing in comprehensive medical and healthcare staffing.",
    alternates: {
      canonical: canonicalUrl,
    },
  };
}