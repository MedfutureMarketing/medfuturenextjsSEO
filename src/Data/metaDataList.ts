import type { Metadata } from "next";

const BASE_URL = "https://medfuture.com.au";

interface MetadataConfig extends Metadata {
    path?: string; // optional canonical path
}

interface TemplateParams {
    id?: string;
    title?: string;
}

// Static + dynamic metadata
export const metaDataList: Record<
    string,
    MetadataConfig | ((params: TemplateParams) => MetadataConfig)
> = {
    home: {
        path: "/",
        title: "Medfuture | Medical & Healthcare Recruitment in Australia",
        description:
            "Medfuture stands as a leading brand in Australia and New Zealand, specializing in comprehensive medical and healthcare staffing recruitment solutions.",
        keywords: [
            "Medfuture",
            "Australia",
            "Medical & Healthcare Recruitment",
            "Medical",
            "Healthcare",
        ],
        alternates: {
            canonical: `${BASE_URL}/`,
            languages: {
                "en-AU": `${BASE_URL}/`,
            },
        },
        openGraph: {
            type: "website",
            locale: "en_US",
            url: `${BASE_URL}/`,
            siteName: "Medfuture",
            title: "Medfuture – Medical & Healthcare Recruitment in Australia",
            description:
                "Medfuture stands as a leading brand in Australia and New Zealand, specializing in comprehensive medical and healthcare staffing recruitment solutions.",
            images: [
                {
                    url: `${BASE_URL}/assets/pathwayBanner-ANKLHITn.png`,
                    width: 1200,
                    height: 630,
                    alt: "Medfuture – Responsive Layout Preview",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            site: "@yourtwitter",
            creator: "@yourtwitter",
            title: "Medfuture – Medical & Healthcare Recruitment in Australia",
            description:
                "Explore top medical & healthcare jobs in Australia with Medfuture.",
            images: [`${BASE_URL}/twitter-image.jpg`],
        },
        icons: {
            icon: "/favicon.ico",
            shortcut: "/favicon-32x32.png",
            apple: "/apple-touch-icon.png",
        },
        manifest: "/site.webmanifest",
        category: "Medical & Healthcare Recruitment",
        metadataBase: new URL(BASE_URL),
        applicationName: "Medfuture",
        generator: "Next.js",
        authors: [{ name: "Medfuture", url: BASE_URL }],
        creator: "Medfuture",
        publisher: "Medfuture",
    },

    // Dynamic template for single job pages
    singlepage: (params: TemplateParams): MetadataConfig => ({
        title: `${params.title || "Health Care Jobs"} | Medfuture`,
        description: `Apply for ${params.title || "this job"} at Medfuture. Explore medical & healthcare opportunities across Australia.`,
        keywords: [
            "Medfuture",
            "Australia",
            "Medical & Healthcare Recruitment",
            params.title || "Job",
            "Healthcare",
        ],
        alternates: {
            canonical: `${BASE_URL}/permanent/${params.id}`,
            languages: {
                "en-AU": `${BASE_URL}/permanent/${params.id}`,
            },
        },
        openGraph: {
            type: "website",
            locale: "en_AU",
            url: `${BASE_URL}/permanent/${params.id}`,
            siteName: "Medfuture",
            title: `${params.title || "Job"} – Medfuture`,
            description: `Apply for ${params.title || "this job"} at Medfuture. Explore medical & healthcare opportunities across Australia.`,
            images: [
                {
                    url: `${BASE_URL}/assets/job-og-image.png`,
                    width: 1200,
                    height: 630,
                    alt: params.title || "Job at Medfuture",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            site: "@yourtwitter",
            creator: "@yourtwitter",
            title: `${params.title || "Job"} – Medfuture`,
            description: `Apply for ${params.title || "this job"} at Medfuture.`,
            images: [`${BASE_URL}/twitter-image.jpg`],
        },
        icons: {
            icon: "/favicon.ico",
            shortcut: "/favicon-32x32.png",
            apple: "/apple-touch-icon.png",
        },
        manifest: "/site.webmanifest",
        category: "Medical & Healthcare Recruitment",
        metadataBase: new URL(BASE_URL),
        applicationName: "Medfuture",
        generator: "Next.js",
        authors: [{ name: "Medfuture", url: BASE_URL }],
        creator: "Medfuture",
        publisher: "Medfuture",
    }),

    // Dynamic template for permanent jobs
    permanent: (params: TemplateParams): MetadataConfig => ({
        title: `${params.title || "Health Care Jobs"} | Medfuture`,
        description: `Apply for ${params.title || "this job"} at Medfuture. Explore medical & healthcare opportunities across Australia.`,
        alternates: {
            canonical: `${BASE_URL}/permanent/${params.id}?page=1`,
        },
        openGraph: {
            type: "website",
            locale: "en_US",
            url: `${BASE_URL}/job/${params.id}`,
            siteName: "Medfuture",
            title: `${params.title || "Job"} – Medfuture`,
            description: `Apply for ${params.title || "this job"} at Medfuture. Explore medical & healthcare opportunities across Australia.`,
            images: [
                {
                    url: `${BASE_URL}/assets/job-og-image.png`,
                    width: 1200,
                    height: 630,
                    alt: params.title || "Job at Medfuture",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            site: "@yourtwitter",
            creator: "@yourtwitter",
            title: `${params.title || "Job"} – Medfuture`,
            description: `Apply for ${params.title || "this job"} at Medfuture.`,
            images: [`${BASE_URL}/twitter-image.jpg`],
        },
    }),
};

// Dynamic overrides for specific URLs
export const dynamicOverrides: Record<string, MetadataConfig> = {
    "/permanent/general-dentist-jobs/in-australian-capital-territory": {
        title: "Special GP Job – Medfuture",
        description: "Apply for this exclusive GP role in Sydney with Medfuture.",
        alternates: {
            canonical:
                `${BASE_URL}/permanent/general-dentist-jobs/in-australian-capital-territory`,
        },
        openGraph: {
            type: "website",
            locale: "en_US",
            url: `${BASE_URL}/permanent/general-dentist-jobs/in-australian-capital-territory/?page=1`,
            siteName: "Medfuture",
            title: "Special GP Job – Medfuture",
            description: "Apply for this exclusive GP role in Sydney with Medfuture.",
            images: [
                {
                    url: `${BASE_URL}/assets/gp-job.png`,
                    width: 1200,
                    height: 630,
                    alt: "Special GP Job",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            site: "@yourtwitter",
            creator: "@yourtwitter",
            title: "Special GP Job – Medfuture",
            description: "Apply for this exclusive GP role in Sydney with Medfuture.",
            images: [`${BASE_URL}/twitter-image.jpg`],
        },
    },
    "/permanent/general-practitioner-jobs/in-australia": {
        title: "Specialsss GP Job | Medfuture",
        description: "Apply for this exclusive GP role in Sydney with Medfuture.",
        alternates: {
            canonical:
                `${BASE_URL}/permanent/general-practitioner-jobs/in-australia`,
        },
        openGraph: {
            type: "website",
            locale: "en_AU",
            url: `${BASE_URL}/permanent/general-practitioner-jobs/in-australia`,
            siteName: "Medfuture",
            title: "Special GP Job – Medfuture",
            description: "Apply for this exclusive GP role in Sydney with Medfuture.",
            images: [
                {
                    url: `${BASE_URL}/assets/gp-job.png`,
                    width: 1200,
                    height: 630,
                    alt: "Special GP Job",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            site: "@yourtwitter",
            creator: "@yourtwitter",
            title: "Special GP Job – Medfuture",
            description: "Apply for this exclusive GP role in Sydney with Medfuture.",
            images: [`${BASE_URL}/twitter-image.jpg`],
        },
    },
};