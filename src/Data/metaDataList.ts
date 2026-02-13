import type { Metadata } from "next";

const BASE_URL = "https://medfuturenextjs-seo.vercel.app/";

interface MetadataConfig extends Metadata {
    path?: string; // optional canonical path
}

interface TemplateParams {
    id?: string;
    title?: string;
    profession?: string;
    state?: string;
    country?: string;
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
            locale: "en_AU",
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

    // Dynamic template for permanent jobs
    permanent: (params: TemplateParams): MetadataConfig => {
        const jobTitle = params.title || "Job Opportunity";
        const locationInfo = params.state && params.country 
            ? ` in ${params.state}, ${params.country}` 
            : "";
        const professionInfo = params.profession ? ` - ${params.profession}` : "";
        
        const fullTitle = `${jobTitle}${professionInfo} | Medfuture`;
        const description = `Apply for ${jobTitle}${locationInfo} at Medfuture. Explore medical & healthcare opportunities across Australia. Join our leading recruitment team today.`;

        return {
            title: fullTitle,
            description: description,
            keywords: [
                jobTitle,
                "Medical Job",
                "Healthcare Recruitment",
                "Australia",
                params.profession || "Medical Position",
                params.state || "Australia",
            ],
            alternates: {
                canonical: `${BASE_URL}/permanent/${params.id}`,
            },
            openGraph: {
                type: "website",
                locale: "en_AU",
                url: `${BASE_URL}/permanent/${params.id}`,
                siteName: "Medfuture",
                title: fullTitle,
                description: description,
                images: [
                    {
                        url: `${BASE_URL}/assets/job-og-image.png`,
                        width: 1200,
                        height: 630,
                        alt: jobTitle,
                    },
                ],
            },
            twitter: {
                card: "summary_large_image",
                site: "@medfuture_au",
                creator: "@medfuture_au",
                title: fullTitle,
                description: description,
                images: [`${BASE_URL}/assets/twitter-job-image.jpg`],
            },
        };
    },
};

// Dynamic overrides for specific URLs (optional - for special cases)
export const dynamicOverrides: Record<string, MetadataConfig> = {
    "/permanent/general-dentist-jobs/in-australian-capital-territory": {
        title: "General Dentist Jobs in ACT | Medfuture",
        description: "Apply for General Dentist positions in Australian Capital Territory with Medfuture. Explore exclusive dental recruitment opportunities.",
        alternates: {
            canonical:
                `${BASE_URL}/permanent/general-dentist-jobs/in-australian-capital-territory`,
        },
        openGraph: {
            type: "website",
            locale: "en_AU",
            url: `${BASE_URL}/permanent/general-dentist-jobs/in-australian-capital-territory`,
            siteName: "Medfuture",
            title: "General Dentist Jobs in ACT | Medfuture",
            description: "Apply for General Dentist positions in Australian Capital Territory with Medfuture.",
            images: [
                {
                    url: `${BASE_URL}/assets/dentist-job.png`,
                    width: 1200,
                    height: 630,
                    alt: "Dentist Job",
                },
            ],
        },
    },
    "/permanent/general-practitioner-jobs/in-australia": {
        title: "GP Jobs in Australia | Medical Recruitment | Medfuture",
        description: "Apply for General Practitioner jobs across Australia with Medfuture. Find your next medical opportunity with Australia's leading recruitment agency.",
        alternates: {
            canonical:
                `${BASE_URL}/permanent/general-practitioner-jobs/in-australia`,
        },
        openGraph: {
            type: "website",
            locale: "en_AU",
            url: `${BASE_URL}/permanent/general-practitioner-jobs/in-australia`,
            siteName: "Medfuture",
            title: "GP Jobs in Australia | Medfuture",
            description: "Apply for General Practitioner jobs across Australia with Medfuture.",
            images: [
                {
                    url: `${BASE_URL}/assets/gp-job.png`,
                    width: 1200,
                    height: 630,
                    alt: "GP Job",
                },
            ],
        },
    },
};