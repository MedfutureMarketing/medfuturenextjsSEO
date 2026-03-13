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
        title: "Medfuture | Medical Recruitment Agency in Australia",
        description:
            "Medfuture is a trusted Australian medical recruitment agency, connecting local and international healthcare professionals with permanent and locum roles.",
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
            title: "Medfuture | Medical Recruitment Agency in Australia",
            description:
                "Medfuture is a trusted Australian medical recruitment agency, connecting local and international healthcare professionals with permanent and locum roles.",
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
    
    jobseeker: {
        path: "/job-seeker-hub",
        title: "Medical Recruitment Agency for Medical Professionals | Medfuture",
        description:
            "Medfuture is a medical recruitment agency in Australia helping doctors and healthcare professionals secure trusted permanent and locum positions.",
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
            title: "Medfuture | Medical Recruitment Agency in Australia",
            description:
                "Medfuture is a trusted Australian medical recruitment agency, connecting local and international healthcare professionals with permanent and locum roles.",
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
    employee: {
        path: "/",
        title: "Medfuturess | Medical Recruitment Agency in Australia",
        description:
            "Medfuture is a trusted Australian medical recruitment agency, connecting local and international healthcare professionals with permanent and locum roles.",
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
            title: "Medfuture | Medical Recruitment Agency in Australia",
            description:
                "Medfuture is a trusted Australian medical recruitment agency, connecting local and international healthcare professionals with permanent and locum roles.",
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
    aboutus: {
        path: "/",
        title: "Medfuture | Medical Recruitment Agency in Australia",
        description:
            "Medfuture is a trusted Australian medical recruitment agency, connecting local and international healthcare professionals with permanent and locum roles.",
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
            title: "Medfuture | Medical Recruitment Agency in Australia",
            description:
                "Medfuture is a trusted Australian medical recruitment agency, connecting local and international healthcare professionals with permanent and locum roles.",
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
    contactus: {
        path: "/",
        title: "Contact our Medical Recruitment Agency team | Medfuture",
        description:
            "Contact Medfuture, a reliable medical recruitment agency in Australia, for healthcare staffing and recruitment support.",
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
            title: "Medfuture | Medical Recruitment Agency in Australia",
            description:
                "Medfuture is a trusted Australian medical recruitment agency, connecting local and international healthcare professionals with permanent and locum roles.",
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

     signin: {
        path: "/sign-in",
        title: "Register with Medical Recruitment Agency | Medfuture",
        description:
            "Sign up with Medfuture, a medical recruitment agency in Australia, to access trusted healthcare roles, connect with top employers, and advance your career.",
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
            title: "Medfuture | Medical Recruitment Agency in Australia",
            description:
                "Medfuture is a trusted Australian medical recruitment agency, connecting local and international healthcare professionals with permanent and locum roles.",
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
    fracgp: {
        path: "/general-practice-division/fracgp-facrrm",
        title: "GP Jobs for Fellowed GPs | Medfuture",
        description:
            "Grow your career at Medfuture: 150 general practitioners jobs (GP jobs) in Australia, including doctor jobs for general practitioner FRACGP & FACRRM specialists",
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
            title: "Medfuture | Medical Recruitment Agency in Australia",
            description:
                "Medfuture is a trusted Australian medical recruitment agency, connecting local and international healthcare professionals with permanent and locum roles.",
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
    
    gpregistar: {
        path: "/general-practice-division/gp-registrars",
        title: "GP Training Program Jobs in Australia",
        description:
            "Train with the best! Medfuture is the medical recruitment agency for 100+ GP Training jobs in Australia. Find (Full Time & Part Time) registrar roles now.",
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
            title: "Medfuture | Medical Recruitment Agency in Australia",
            description:
                "Medfuture is a trusted Australian medical recruitment agency, connecting local and international healthcare professionals with permanent and locum roles.",
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
    locumgp: {
        path: "/general-practice-division/locum-gp",
        title: "Locum GP Jobs in Australia",
        description:
            "Enjoy flexibility! Medfuture is the medical recruitment agency for 200+ Locum GP jobs in Australia. Browse (Full Time & Part Time) locum opportunities today.",
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
            title: "Medfuture | Medical Recruitment Agency in Australia",
            description:
                "Medfuture is a trusted Australian medical recruitment agency, connecting local and international healthcare professionals with permanent and locum roles.",
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

    speechpatho: {
        path: "/ahp-division/speech-pathology",
        title: "Speech Therapist Jobs Australia: Medical Recruitment Agency | Medfuture ",
        description:
            "Boost your career! Medfuture is the medical recruitment agency for 330+ Speech Pathologist jobs in Australia. Check (Full Time & Part Time) opportunities now.",
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
            title: "Medfuture | Medical Recruitment Agency in Australia",
            description:
                "Medfuture is a trusted Australian medical recruitment agency, connecting local and international healthcare professionals with permanent and locum roles.",
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

    occupational: {
        path: "/ahp-division/occupational-therapist",
        title: "Occupational Therapist Jobs in Australia",
        description:
            "Grow your career at Medfuture: 72 occupational therapist jobs in Australia, including roles for registered occupational therapists",
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
            title: "Medfuture | Medical Recruitment Agency in Australia",
            description:
                "Medfuture is a trusted Australian medical recruitment agency, connecting local and international healthcare professionals with permanent and locum roles.",
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

    podiatrist: {
        path: "/ahp-division/podiatrist",
        title: "Podiatrist  Jobs in Australia | Medfuture",
        description:
            "Grow your career at Medfuture: 36 occupational therapist jobs in Australia, including roles for registered occupational therapists",
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
            title: "Medfuture | Medical Recruitment Agency in Australia",
            description:
                "Medfuture is a trusted Australian medical recruitment agency, connecting local and international healthcare professionals with permanent and locum roles.",
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
    
  psychology: {
        path: "/mental-health/psychology",
        title: "Medical Recruitment Agency: Psychologist Jobs Australia",
        description:"Empower your career! Medfuture is a medical recruitment agency with 110+ Psychologist jobs in Australia. View (Full Time & Part Time) vacancies on our site.",
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
            title: "Medfuture | Medical Recruitment Agency in Australia",
            description:
                "Medfuture is a trusted Australian medical recruitment agency, connecting local and international healthcare professionals with permanent and locum roles.",
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

     gpdivison: {
        path: "/general-practice-division",
        title: "General Practice Division | Medfuture",
        description:
            "Grow your career at Medfuture:  General Practice jobs in Australia, including roles for registered occupational therapists",
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
            title: "Medfuture | Medical Recruitment Agency in Australia",
            description:
                "Medfuture is a trusted Australian medical recruitment agency, connecting local and international healthcare professionals with permanent and locum roles.",
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

     mentalhealth: {
        path: "/mental-health",
        title: "Mental Health Division | Medfuture",
        description:
            "Clinical excellence! Medfuture is a medical recruitment agency with 150+ Mental Health jobs in Australia. View (Full Time & Part Time) specialist roles today.",
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
            title: "Medfuture | Medical Recruitment Agency in Australia",
            description:
                "Medfuture is a trusted Australian medical recruitment agency, connecting local and international healthcare professionals with permanent and locum roles.",
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
 ahp: {
        path: "/ahp-division",
        title: "Allied Health Jobs in Australia: Medical Recruitment Agency",
        description:
            "Your next move starts here! Medfuture is the medical recruitment agency for 300+ Allied Health jobs in Australia. View (Full Time & Part Time) openings today.",
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
            title: "Medfuture | Medical Recruitment Agency in Australia",
            description:
                "Medfuture is a trusted Australian medical recruitment agency, connecting local and international healthcare professionals with permanent and locum roles.",
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
     physiotherapy: {
        path: "/ahp-division/physiotherapy",
        title: "Physiotherapist Jobs Australia: Medical Recruitment Agency",
        description:
            "Reach your potential! Medfuture is a medical recruitment agency for 140+ Physiotherapist jobs in Australia. Apply (Full Time & Part Time) to join us today.",
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
            title: "Medfuture | Medical Recruitment Agency in Australia",
            description:
                "Medfuture is a trusted Australian medical recruitment agency, connecting local and international healthcare professionals with permanent and locum roles.",
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

     aboutUs: {
        path: "/about-us",
        title: "12 Years of Excellence in Medical Recruitment | Medfuture",
        description:"Medfuture is a leading medical recruitment agency in Australia with proven expertise placing healthcare professionals across various specialties since 2014.",
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
            title: "Medfuture | Medical Recruitment Agency in Australia",
            description:
                "Medfuture is a trusted Australian medical recruitment agency, connecting local and international healthcare professionals with permanent and locum roles.",
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

    termsand: {
        path: "/terms-and-conditions",
        title: "Terms And Condition | Medfuture",
        description:"Medfuture is a leading medical recruitment agency in Australia with proven expertise placing healthcare professionals across various specialties since 2014.",
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
            title: "Medfuture | Medical Recruitment Agency in Australia",
            description:
                "Medfuture is a trusted Australian medical recruitment agency, connecting local and international healthcare professionals with permanent and locum roles.",
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

    privacy: {
        path: "/privacy-policy",
        title: "Privacy Policy | Medfuture",
        description:"Medfuture is a leading medical recruitment agency in Australia with proven expertise placing healthcare professionals across various specialties since 2014.",
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
            title: "Medfuture | Medical Recruitment Agency in Australia",
            description:
                "Medfuture is a trusted Australian medical recruitment agency, connecting local and international healthcare professionals with permanent and locum roles.",
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
    


    

//  When updating section below this be carefull 
// Nootttttteee




    // Dynamic template for permanent jobs
    permanent: (params: TemplateParams): MetadataConfig => ({
        title: `${params.title || "Job"} | Medfuture`,
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
