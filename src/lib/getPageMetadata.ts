// lib/getPageMetadata.ts
import type { Metadata } from "next";
import { metaDataList, dynamicOverrides } from "@/Data/metaDataList";

const BASE_URL = "https://medfuture.com.au";

export interface TemplateParams {
  id?: string;
  title?: string;
}

export async function getPageMetadata(
  pageKey: string,
  params?: TemplateParams | undefined,
  path?: string | undefined,
  currentUrl?: string | undefined
): Promise<Metadata> {
  const canonicalUrl = currentUrl || (path ? `${BASE_URL}${path}` : BASE_URL);

  // CRITICAL: Strip ALL non-Metadata properties
  function stripNonMetadata(obj: Record<string, any>): Metadata {
    const {
      path: _p,           // Remove custom path
      customPath: _cp,    // Remove any other custom fields
      ...validMetadata   // Keep ONLY what Next.js expects
    } = obj;
    return validMetadata as Metadata;
  }

  try {
    // 1️⃣ Dynamic override
    if (path && dynamicOverrides[path]) {
      const overrideMeta = dynamicOverrides[path];
      const cleanMeta = stripNonMetadata(overrideMeta);
      return {
        ...cleanMeta,
        metadataBase: new URL(BASE_URL), // MUST be URL object, not string
        alternates: {
          ...cleanMeta.alternates,
          canonical: canonicalUrl,
        },
      };
    }

    // 2️⃣ Dynamic template
    const pageMeta = metaDataList[pageKey];
    if (typeof pageMeta === "function") {
      const dynamicMeta = pageMeta(params || {});
      const cleanMeta = stripNonMetadata(dynamicMeta);
      return {
        ...cleanMeta,
        metadataBase: new URL(BASE_URL),
        alternates: {
          ...cleanMeta.alternates,
          canonical: canonicalUrl,
        },
      };
    }

    // 3️⃣ Static page
    if (pageMeta) {
      const cleanMeta = stripNonMetadata(pageMeta);
      return {
        ...cleanMeta,
        metadataBase: new URL(BASE_URL),
        alternates: {
          ...cleanMeta.alternates,
          canonical: canonicalUrl,
        },
      };
    }

    // 4️⃣ Fallback
    return {
      title: "Medfuture | Medical & Healthcare Recruitment",
      description: "Medical & Healthcare Recruitment in Australia",
      metadataBase: new URL(BASE_URL),
      alternates: { canonical: canonicalUrl },
    };
  } catch (error) {
    console.error("Metadata generation error:", error);
    return {
      title: "Medfuture",
      description: "Medical & Healthcare Recruitment",
      metadataBase: new URL(BASE_URL),
      alternates: { canonical: canonicalUrl },
    };
  }
}