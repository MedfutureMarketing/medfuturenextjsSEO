// Data/metaDataList.ts - ✅ FIXED for Vercel
import type { Metadata } from "next";

const BASE_URL = "https://medfuture.com.au";

export interface TemplateParams {
  id?: string;
  title?: string;
}

// CRITICAL: Do NOT extend Metadata with custom fields
// Keep Metadata pure, handle custom fields separately
export const metaDataList: Record<
  string,
  | Metadata 
  | ((params: TemplateParams) => Metadata)
> = {
  home: {
    title: "Medfuture | Medical & Healthcare Recruitment in Australia",
    description: "Medfuture stands as a leading brand in Australia and New Zealand...",
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/`,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `${BASE_URL}/`,
      siteName: "Medfuture",
      title: "Medfuture – Medical & Healthcare Recruitment in Australia",
      description: "Medfuture stands as a leading brand in Australia and New Zealand...",
      images: [{
        url: `${BASE_URL}/assets/pathwayBanner-ANKLHITn.png`,
        width: 1200,
        height: 630,
        alt: "Medfuture",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Medfuture – Medical & Healthcare Recruitment in Australia",
      description: "Explore top medical & healthcare jobs in Australia with Medfuture.",
      images: [`${BASE_URL}/twitter-image.jpg`],
    },
  },

  permanent: (params: TemplateParams): Metadata => ({
    title: `${params.title || "Health Care Jobs"} | Medfuture`,
    description: `Apply for ${params.title || "this job"} at Medfuture.`,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/permanent/${params.id}?page=1`,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `${BASE_URL}/job/${params.id}`,
      siteName: "Medfuture",
      title: `${params.title || "Job"} – Medfuture`,
      description: `Apply for ${params.title || "this job"} at Medfuture.`,
      images: [{
        url: `${BASE_URL}/assets/job-og-image.png`,
        width: 1200,
        height: 630,
        alt: params.title || "Job at Medfuture",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${params.title || "Job"} – Medfuture`,
      description: `Apply for ${params.title || "this job"} at Medfuture.`,
      images: [`${BASE_URL}/twitter-image.jpg`],
    },
  }),
};

// Store custom paths SEPARATELY from Metadata
export const customPaths: Record<string, string> = {
  permanent: "/permanent/",
  singlepage: "/permanent/job/",
};

// Dynamic overrides - pure Metadata, no custom fields
export const dynamicOverrides: Record<string, Metadata> = {
  "/permanent/general-dentist-jobs/in-australian-capital-territory": {
    title: "Special GP Job – Medfuture",
    description: "Apply for this exclusive GP role in Sydney with Medfuture.",
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/permanent/general-dentist-jobs/in-australian-capital-territory`,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `${BASE_URL}/permanent/general-dentist-jobs/in-australian-capital-territory/?page=1`,
      siteName: "Medfuture",
      title: "Special GP Job – Medfuture",
      description: "Apply for this exclusive GP role in Sydney with Medfuture.",
      images: [{
        url: `${BASE_URL}/assets/gp-job.png`,
        width: 1200,
        height: 630,
        alt: "Special GP Job",
      }],
    },
  },
};