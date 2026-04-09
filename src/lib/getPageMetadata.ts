import type { Metadata } from "next";
import { metaDataList, dynamicOverrides } from "@/Data/metaDataList";

const BASE_URL = "https://medfuture.com.au";

export interface TemplateParams {
  id?: string;
  title?: string;
}

/**
 * Get metadata for a page (static or dynamic)
 * 
 * @param pageKey - The key in metaDataList (e.g., "home", "jobseeker")
 * @param params - Template parameters for dynamic pages (e.g., { id, title })
 * @param path - The full path of the page (e.g., "/general-practice-division")
 * @param currentUrl - Override canonical URL (optional)
 */
export async function getPageMetadata(
  pageKey: string,
  params?: TemplateParams | undefined,
  path?: string | undefined,
  currentUrl?: string | undefined
): Promise<Metadata> {
  // 1️⃣ Determine canonical URL (in priority order)
  let canonicalUrl: string;

  if (currentUrl) {
    // Use provided currentUrl if explicitly passed
    canonicalUrl = currentUrl;
  } else if (path) {
    // Use provided path parameter
    canonicalUrl = `${BASE_URL}${path.startsWith("/") ? path : "/" + path}`;
  } else {
    // Fallback: Try to get path from metaDataList
    const pageMeta = metaDataList[pageKey];
    const metaPath =
      typeof pageMeta === "function" ? undefined : pageMeta?.path;

    if (metaPath) {
      canonicalUrl = `${BASE_URL}${metaPath.startsWith("/") ? metaPath : "/" + metaPath}`;
    } else {
      // Last resort fallback to home
      canonicalUrl = BASE_URL;
    }
  }

  // 2️⃣ Check for dynamic override by full path
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

  // 3️⃣ Get metadata from metaDataList
  const pageMeta = metaDataList[pageKey];

  // 4️⃣ If dynamic template (function)
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

  // 5️⃣ If static page (object)
  if (pageMeta) {
    return {
      ...pageMeta,
      alternates: {
        ...pageMeta.alternates,
        canonical: canonicalUrl,
      },
    };
  }

  // 6️⃣ Default fallback
  return {
    title: "Medfuture | Medical & Healthcare Recruitment in Australia",
    description:
      "Medfuture stands as a leading brand in Australia and New Zealand, specializing in comprehensive medical and healthcare staffing.",
    alternates: {
      canonical: canonicalUrl,
    },
  };
}