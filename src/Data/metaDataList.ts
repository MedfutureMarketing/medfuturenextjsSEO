// data/metaDataList.ts
import type { Metadata } from "next";

const BASE_URL = "https://medfuture.com.au";

interface MetadataConfig extends Metadata {
    path?: string; // Add path property to generate canonical dynamically
}

export const metaDataList: Record<string, MetadataConfig> = {
    home: {
        path: "/",
        title: "Medfuture | Medical & Healthcare Recruitment in Australia",
        description:
            "Medfuture stands as a leading brand in Australia and New Zealand, specializing in comprehensive medical and healthcare staffing recruitment solutions.",
        keywords: [
            "Medfuture",
            "Australia",
            "Responsive Layout",
            "Medical & Healthcare Recruitment in Australia",
            "Medical",
            "Healthcare",
        ],
        alternates: {
            canonical: `${BASE_URL}/`,
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
                "Explore top medical & healthcare jobs in Australia with Medfuture. Find the best GP, AHP & Nursing opportunities nationwide.",
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
    jobseeker: {
        path: "/job-seeker-hub",
        title: "Jobseeker | Medical & Healthcare Recruitment in Australia",
        description:
            "Medfuture stands as a leading brand in Australia and New Zealand, specializing in comprehensive medical and healthcare staffing recruitment solutions.",
        keywords: [
            "Medfuture",
            "Australia",
            "Responsive Layout",
            "Medical & Healthcare Recruitment in Australia",
            "Medical",
            "Healthcare",
        ],
        alternates: {
            canonical: `${BASE_URL}/job-seeker-hub`,
        },
        openGraph: {
            type: "website",
            locale: "en_US",
            url: `${BASE_URL}/job-seeker-hub`,
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
                "Explore top medical & healthcare jobs in Australia with Medfuture. Find the best GP, AHP & Nursing opportunities nationwide.",
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

    permanent: {
        path: "/permanent",
        title: "Permanent | Medical & Healthcare Recruitment in Australia",
        description:
            "Medfuture stands as a leading brand in Australia and New Zealand, specializing in comprehensive medical and healthcare staffing recruitment solutions.",
        keywords: [
            "Medfuture",
            "Australia",
            "Responsive Layout",
            "Medical & Healthcare Recruitment in Australia",
            "Medical",
            "Healthcare",
        ],
        alternates: {
            canonical: `${BASE_URL}/permanent`,
        },
        openGraph: {
            type: "website",
            locale: "en_US",
            url: `${BASE_URL}/permanent`,
            siteName: "Medfuture",
            title: "Medfuture – Medical & Healthcare Recruitment in Australia",
            description:
                "Medfuture stands as a leading brand in Australia and New Zealand, specializing in comprehensive medical and healthcare staffing recruitment solutions.",
            images: [
                {
                    url: `${BASE_URL}/og-image.jpg`,
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
                "A fast, SEO-friendly layout built with Next.js and Tailwind CSS. Fully responsive and optimized for modern web performance.",
            images: [`${BASE_URL}/twitter-image.jpg`],
        },
        icons: {
            icon: "/favicon.ico",
            shortcut: "/favicon-32x32.png",
            apple: "/apple-touch-icon.png",
        },
        category: "Medical & Healthcare Recruitment",
        metadataBase: new URL(BASE_URL),
        applicationName: "Medfuture",
        generator: "Next.js",
        authors: [{ name: "Medfuture", url: BASE_URL }],
        creator: "Medfuture",
        publisher: "Medfuture",
    },

    about: {
        path: "/about",
        title: "About | Medical & Healthcare Recruitment in Australia",
        description:
            "Medfuture stands as a leading brand in Australia and New Zealand, specializing in comprehensive medical and healthcare staffing recruitment solutions.",
        keywords: [
            "Medfuture",
            "Australia",
            "Responsive Layout",
            "Medical & Healthcare Recruitment in Australia",
            "Medical",
            "Healthcare",
        ],
        alternates: {
            canonical: `${BASE_URL}/about`,
        },
        openGraph: {
            type: "website",
            locale: "en_US",
            url: `${BASE_URL}/about`,
            siteName: "Medfuture",
            title: "Medfuture – Medical & Healthcare Recruitment in Australia",
            description:
                "Medfuture stands as a leading brand in Australia and New Zealand, specializing in comprehensive medical and healthcare staffing recruitment solutions.",
            images: [
                {
                    url: `${BASE_URL}/og-image.jpg`,
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
                "Medfuture stands as a leading brand in Australia and New Zealand, specializing in comprehensive medical and healthcare staffing recruitment solutions.",
            images: [`${BASE_URL}/twitter-image.jpg`],
        },
        icons: {
            icon: "/favicon.ico",
            shortcut: "/favicon-32x32.png",
            apple: "/apple-touch-icon.png",
        },
        category: "Medical & Healthcare Recruitment",
        metadataBase: new URL(BASE_URL),
        applicationName: "Medfuture",
        generator: "Next.js",
        authors: [{ name: "Medfuture", url: BASE_URL }],
        creator: "Medfuture",
        publisher: "Medfuture",
    },
};

// Helper function to get metadata for a specific page
export function getMetadata(page: string): Metadata {
    return metaDataList[page];
}