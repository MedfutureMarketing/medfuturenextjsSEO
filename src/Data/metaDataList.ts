import type { Metadata } from "next";

const BASE_URL = "https://medfuture.com.au";

interface MetadataConfig extends Metadata {
    path?: string;
}

interface TemplateParams {
    id?: string;
    title?: string;
}

// Shared base config to avoid repetition
const sharedBase = {
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
    keywords: ["Medfuture", "Australia", "Medical & Healthcare Recruitment", "Medical", "Healthcare"],
    twitter: {
        card: "summary_large_image" as const,
        site: "@yourtwitter",
        creator: "@yourtwitter",
        title: "Medfuture – Medical & Healthcare Recruitment in Australia",
        description: "Explore top medical & healthcare jobs in Australia with Medfuture.",
        images: [`${BASE_URL}/twitter-image.jpg`],
    },
};

const sharedOG = (path: string, title: string, description: string) => ({
    type: "website" as const,
    locale: "en_AU",
    url: `${BASE_URL}${path}`,
    siteName: "Medfuture",
    title,
    description,
    images: [
        {
            url: `${BASE_URL}/assets/pathwayBanner-ANKLHITn.png`,
            width: 1200,
            height: 630,
            alt: "Medfuture – Responsive Layout Preview",
        },
    ],
});

export const metaDataList: Record<
    string,
    MetadataConfig | ((params: TemplateParams) => MetadataConfig)
> = {
    home: {
        path: "/",
        title: "Medfuture | Medical Recruitment Agency in Australia",
        description: "Medfuture is a trusted Australian medical recruitment agency, connecting local and international healthcare professionals with permanent and locum roles.",
        ...sharedBase,
        alternates: { canonical: `${BASE_URL}/`, languages: { "en-AU": `${BASE_URL}/` } },
        openGraph: sharedOG("/", "Medfuture | Medical Recruitment Agency in Australia", "Medfuture is a trusted Australian medical recruitment agency, connecting local and international healthcare professionals with permanent and locum roles."),
    },
    jobseeker: {
        path: "/job-seeker-hub",
        title: "Medical Recruitment Agency for Medical Professionals | Medfuture",
        description: "Medfuture is a medical recruitment agency in Australia helping doctors and healthcare professionals secure trusted permanent and locum positions.",
        ...sharedBase,
        // ✅ Fixed: was incorrectly pointing to BASE_URL/
        alternates: { canonical: `${BASE_URL}/job-seeker-hub`, languages: { "en-AU": `${BASE_URL}/job-seeker-hub` } },
        openGraph: sharedOG("/job-seeker-hub", "Medical Recruitment Agency for Medical Professionals | Medfuture", "Medfuture is a medical recruitment agency in Australia helping doctors and healthcare professionals secure trusted permanent and locum positions."),
    },
    employee: {
        path: "/employer-hub",
        title: "Hire Healthcare Professionals in Australia | Medfuture",
        description: "Medfuture is a trusted Australian medical recruitment agency, connecting local and international healthcare professionals with permanent and locum roles.",
        ...sharedBase,
        // ✅ Fixed: was incorrectly pointing to BASE_URL/
        alternates: { canonical: `${BASE_URL}/employer-hub`, languages: { "en-AU": `${BASE_URL}/employer-hub` } },
        openGraph: sharedOG("/employer-hub", "Hire Healthcare Professionals in Australia | Medfuture", "Medfuture is a trusted Australian medical recruitment agency, connecting local and international healthcare professionals with permanent and locum roles."),
    },
    aboutus: {
        path: "/about-us",
        title: "About Medfuture | Medical Recruitment Agency in Australia",
        description: "Medfuture is a trusted Australian medical recruitment agency, connecting local and international healthcare professionals with permanent and locum roles.",
        ...sharedBase,
        // ✅ Fixed: was incorrectly pointing to BASE_URL/
        alternates: { canonical: `${BASE_URL}/about-us`, languages: { "en-AU": `${BASE_URL}/about-us` } },
        openGraph: sharedOG("/about-us", "About Medfuture | Medical Recruitment Agency in Australia", "Medfuture is a trusted Australian medical recruitment agency, connecting local and international healthcare professionals with permanent and locum roles."),
    },
    contactus: {
        path: "/contact-us",
        title: "Contact our Medical Recruitment Agency team | Medfuture",
        description: "Contact Medfuture, a reliable medical recruitment agency in Australia, for healthcare staffing and recruitment support.",
        ...sharedBase,
        // ✅ Fixed: was incorrectly pointing to BASE_URL/
        alternates: { canonical: `${BASE_URL}/contact-us`, languages: { "en-AU": `${BASE_URL}/contact-us` } },
        openGraph: sharedOG("/contact-us", "Contact our Medical Recruitment Agency team | Medfuture", "Contact Medfuture, a reliable medical recruitment agency in Australia, for healthcare staffing and recruitment support."),
    },
    signin: {
        path: "/sign-in",
        title: "Register with Medical Recruitment Agency | Medfuture",
        description: "Sign up with Medfuture, a medical recruitment agency in Australia, to access trusted healthcare roles, connect with top employers, and advance your career.",
        ...sharedBase,
        // ✅ Fixed: was incorrectly pointing to BASE_URL/
        alternates: { canonical: `${BASE_URL}/sign-in`, languages: { "en-AU": `${BASE_URL}/sign-in` } },
        openGraph: sharedOG("/sign-in", "Register with Medical Recruitment Agency | Medfuture", "Sign up with Medfuture, a medical recruitment agency in Australia, to access trusted healthcare roles, connect with top employers, and advance your career."),
    },
    fracgp: {
        path: "/general-practice-division/fracgp-facrrm",
        title: "GP Jobs for Fellowed GPs | Medfuture",
        description: "Grow your career at Medfuture: 150 general practitioners jobs (GP jobs) in Australia, including doctor jobs for general practitioner FRACGP & FACRRM specialists",
        ...sharedBase,
        // ✅ Fixed: was incorrectly pointing to BASE_URL/
        alternates: { canonical: `${BASE_URL}/general-practice-division/fracgp-facrrm`, languages: { "en-AU": `${BASE_URL}/general-practice-division/fracgp-facrrm` } },
        openGraph: sharedOG("/general-practice-division/fracgp-facrrm", "GP Jobs for Fellowed GPs | Medfuture", "Grow your career at Medfuture: 150 general practitioners jobs (GP jobs) in Australia, including doctor jobs for general practitioner FRACGP & FACRRM specialists"),
    },
    gpregistar: {
        path: "/general-practice-division/gp-registrars",
        title: "GP Training Program Jobs in Australia",
        description: "Grow your career at Medfuture: 49 general practitioners jobs (GP jobs) in Australia, including doctor jobs for general practitioner FRACGP & FACRRM specialists",
        ...sharedBase,
        // ✅ Fixed: was incorrectly pointing to BASE_URL/
        alternates: { canonical: `${BASE_URL}/general-practice-division/gp-registrars`, languages: { "en-AU": `${BASE_URL}/general-practice-division/gp-registrars` } },
        openGraph: sharedOG("/general-practice-division/gp-registrars", "GP Training Program Jobs in Australia", "Grow your career at Medfuture: 49 general practitioners jobs (GP jobs) in Australia, including doctor jobs for general practitioner FRACGP & FACRRM specialists"),
    },
    locumgp: {
        path: "/general-practice-division/locum-gp",
        title: "Locum GP Jobs in Australia",
        description: "Grow your career at Medfuture: 49 general practitioners jobs (GP jobs) in Australia, including doctor jobs for general practitioner FRACGP & FACRRM specialists",
        ...sharedBase,
        // ✅ Fixed: was incorrectly pointing to BASE_URL/
        alternates: { canonical: `${BASE_URL}/general-practice-division/locum-gp`, languages: { "en-AU": `${BASE_URL}/general-practice-division/locum-gp` } },
        openGraph: sharedOG("/general-practice-division/locum-gp", "Locum GP Jobs in Australia", "Grow your career at Medfuture: 49 general practitioners jobs (GP jobs) in Australia, including doctor jobs for general practitioner FRACGP & FACRRM specialists"),
    },
    speechpatho: {
        path: "/ahp-division/speech-pathology",
        title: "Speech Pathology Jobs in Australia",
        description: "Grow your career at Medfuture: 80 speech pathology jobs in Australia, including roles for speech pathologists and communication specialists",
        ...sharedBase,
        // ✅ Fixed: was incorrectly pointing to BASE_URL/
        alternates: { canonical: `${BASE_URL}/ahp-division/speech-pathology`, languages: { "en-AU": `${BASE_URL}/ahp-division/speech-pathology` } },
        openGraph: sharedOG("/ahp-division/speech-pathology", "Speech Pathology Jobs in Australia", "Grow your career at Medfuture: 80 speech pathology jobs in Australia, including roles for speech pathologists and communication specialists"),
    },
    occupational: {
        path: "/ahp-division/occupational-therapist",
        title: "Occupational Therapist Jobs in Australia",
        description: "Grow your career at Medfuture: 72 occupational therapist jobs in Australia, including roles for registered occupational therapists",
        ...sharedBase,
        // ✅ Fixed: was incorrectly pointing to BASE_URL/
        alternates: { canonical: `${BASE_URL}/ahp-division/occupational-therapist`, languages: { "en-AU": `${BASE_URL}/ahp-division/occupational-therapist` } },
        openGraph: sharedOG("/ahp-division/occupational-therapist", "Occupational Therapist Jobs in Australia", "Grow your career at Medfuture: 72 occupational therapist jobs in Australia, including roles for registered occupational therapists"),
    },
    podiatrist: {
        path: "/ahp-division/podiatrist",
        title: "Podiatrist Jobs in Australia | Medfuture",
        description: "Grow your career at Medfuture: 36 podiatrist jobs in Australia, including roles for registered podiatrists",
        ...sharedBase,
        // ✅ Fixed: was incorrectly pointing to BASE_URL/
        alternates: { canonical: `${BASE_URL}/ahp-division/podiatrist`, languages: { "en-AU": `${BASE_URL}/ahp-division/podiatrist` } },
        openGraph: sharedOG("/ahp-division/podiatrist", "Podiatrist Jobs in Australia | Medfuture", "Grow your career at Medfuture: 36 podiatrist jobs in Australia, including roles for registered podiatrists"),
    },
    psychology: {
        path: "/mental-health/psychology",
        title: "Psychologist Jobs in Australia | Medfuture",
        description: "Grow your career at Medfuture: 96 Psychologist jobs in Australia, including roles for registered psychologists",
        ...sharedBase,
        // ✅ Fixed: was incorrectly pointing to BASE_URL/
        alternates: { canonical: `${BASE_URL}/mental-health/psychology`, languages: { "en-AU": `${BASE_URL}/mental-health/psychology` } },
        openGraph: sharedOG("/mental-health/psychology", "Psychologist Jobs in Australia | Medfuture", "Grow your career at Medfuture: 96 Psychologist jobs in Australia, including roles for registered psychologists"),
    },
    gpdivison: {
        path: "/general-practice-division",
        title: "General Practice Division | Medfuture",
        description: "Grow your career at Medfuture: General Practice jobs in Australia for GPs, registrars, and locum doctors.",
        ...sharedBase,
        // ✅ Fixed: was incorrectly pointing to BASE_URL/
        alternates: { canonical: `${BASE_URL}/general-practice-division`, languages: { "en-AU": `${BASE_URL}/general-practice-division` } },
        openGraph: sharedOG("/general-practice-division", "General Practice Division | Medfuture", "Grow your career at Medfuture: General Practice jobs in Australia for GPs, registrars, and locum doctors."),
    },
    mentalhealth: {
        path: "/mental-health",
        title: "Mental Health Division | Medfuture",
        description: "Grow your career at Medfuture: Mental health jobs in Australia including psychologists and mental health practitioners.",
        ...sharedBase,
        // ✅ Fixed: was incorrectly pointing to BASE_URL/
        alternates: { canonical: `${BASE_URL}/mental-health`, languages: { "en-AU": `${BASE_URL}/mental-health` } },
        openGraph: sharedOG("/mental-health", "Mental Health Division | Medfuture", "Grow your career at Medfuture: Mental health jobs in Australia including psychologists and mental health practitioners."),
    },
    ahp: {
        path: "/ahp-division",
        title: "Allied Health Division | Medfuture",
        description: "Grow your career at Medfuture: Allied health jobs in Australia including physiotherapists, OTs, speech pathologists and more.",
        ...sharedBase,
        // ✅ Fixed: was incorrectly pointing to BASE_URL/
        alternates: { canonical: `${BASE_URL}/ahp-division`, languages: { "en-AU": `${BASE_URL}/ahp-division` } },
        openGraph: sharedOG("/ahp-division", "Allied Health Division | Medfuture", "Grow your career at Medfuture: Allied health jobs in Australia including physiotherapists, OTs, speech pathologists and more."),
    },

    // ─── Dynamic template for permanent/locum job pages ───────────────────────
    permanent: (params: TemplateParams): MetadataConfig => ({
        title: `${params.title || "Job"} | Medfuture`,
        description: `Apply for ${params.title || "this job"} at Medfuture. Explore medical & healthcare opportunities across Australia.`,
        alternates: {
            canonical: `${BASE_URL}/permanent/${params.id}`,
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
    }),
};

// Dynamic overrides for specific URLs that need custom metadata
export const dynamicOverrides: Record<string, MetadataConfig> = {
    "/permanent/general-dentist-jobs/in-australian-capital-territory": {
        title: "General Dentist Jobs in ACT – Medfuture",
        description: "Apply for general dentist roles in the Australian Capital Territory with Medfuture.",
        alternates: {
            canonical: `${BASE_URL}/permanent/general-dentist-jobs/in-australian-capital-territory`,
        },
        openGraph: {
            type: "website",
            locale: "en_AU",
            url: `${BASE_URL}/permanent/general-dentist-jobs/in-australian-capital-territory`,
            siteName: "Medfuture",
            title: "General Dentist Jobs in ACT – Medfuture",
            description: "Apply for general dentist roles in the Australian Capital Territory with Medfuture.",
            images: [{ url: `${BASE_URL}/assets/gp-job.png`, width: 1200, height: 630, alt: "Dentist Jobs ACT" }],
        },
        twitter: {
            card: "summary_large_image",
            site: "@yourtwitter",
            creator: "@yourtwitter",
            title: "General Dentist Jobs in ACT – Medfuture",
            description: "Apply for general dentist roles in the Australian Capital Territory with Medfuture.",
            images: [`${BASE_URL}/twitter-image.jpg`],
        },
    },
    "/permanent/general-practitioner-jobs/in-australia": {
        title: "General Practitioner Jobs in Australia | Medfuture",
        description: "Apply for GP roles across Australia with Medfuture. Browse hundreds of general practitioner opportunities.",
        alternates: {
            canonical: `${BASE_URL}/permanent/general-practitioner-jobs/in-australia`,
        },
        openGraph: {
            type: "website",
            locale: "en_AU",
            url: `${BASE_URL}/permanent/general-practitioner-jobs/in-australia`,
            siteName: "Medfuture",
            title: "General Practitioner Jobs in Australia | Medfuture",
            description: "Apply for GP roles across Australia with Medfuture. Browse hundreds of general practitioner opportunities.",
            images: [{ url: `${BASE_URL}/assets/gp-job.png`, width: 1200, height: 630, alt: "GP Jobs Australia" }],
        },
        twitter: {
            card: "summary_large_image",
            site: "@yourtwitter",
            creator: "@yourtwitter",
            title: "General Practitioner Jobs in Australia | Medfuture",
            description: "Apply for GP roles across Australia with Medfuture.",
            images: [`${BASE_URL}/twitter-image.jpg`],
        },
    },
};