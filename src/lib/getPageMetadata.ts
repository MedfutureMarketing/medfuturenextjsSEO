import type { Metadata } from "next";
import { metaDataList, dynamicOverrides } from "@/Data/metaDataList";

const BASE_URL = "https://medfuturenextjs-seo.vercel.app";

// ✅ Updated: Add profession, state, country fields
export interface TemplateParams {
  id?: string;
  title?: string;
  profession?: string;
  state?: string;
  country?: string;
}

// Get metadata for a page (static or dynamic)
export async function getPageMetadata(
  pageKey: string,
  params?: TemplateParams | undefined,
  path?: string | undefined,
  currentUrl?: string | undefined
): Promise<Metadata> {
  // Use provided currentUrl or fallback to path
  const canonicalUrl = currentUrl || (path ? `${BASE_URL}${path}` : BASE_URL);

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

  // 3️⃣ If dynamic template
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

  // 4️⃣ If static page
  if (pageMeta) {
    return {
      ...pageMeta,
      alternates: {
        ...pageMeta.alternates,
        canonical: canonicalUrl,
      },
    };
  }

  // 5️⃣ Default fallback
  return {
    title: "Medfuture | Medical & Healthcare Recruitment in Australia",
    description:
      "Medfuture stands as a leading brand in Australia and New Zealand, specializing in comprehensive medical and healthcare staffing.",
    alternates: {
      canonical: canonicalUrl,
    },
  };
}