import type { Metadata } from "next";

const BASE_URL = "https://medfuture.com.au";

interface MetadataConfig extends Metadata {
    path?: string;
}

interface MetadataInput {
    path: string;
    title: string;
    description: string;
}

interface TemplateParams {
    id?: string;
    title?: string;
}
// ============================================================================
// HELPER: Create base metadata (eliminates 90% of repetition)
// ============================================================================
const createPageMetadata = ({
    path,
    title,
    description,
}: MetadataInput): MetadataConfig => ({
    path,
    title,
    description,
    keywords: [
        "Medfuture",
        "Australia",
        "Medical & Healthcare Recruitment",
        "Medical",
        "Healthcare",
    ],
    alternates: {
        canonical: `${BASE_URL}${path}`,
        languages: { "en-AU": `${BASE_URL}${path}` },
    },
    openGraph: {
        type: "website",
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
    },
    twitter: {
        card: "summary_large_image",
        site: "@yourtwitter",
        creator: "@yourtwitter",
        title,
        description,
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
});

// ============================================================================
// STATIC PAGE CONFIGURATIONS (easy to maintain & add new pages)
// ============================================================================
const staticPages: MetadataInput[] = [
    {
        path: "/",
        title: "Medfuture | Medical Recruitment Agency in Australia",
        description:
            "Medfuture is a trusted Australian medical recruitment agency, connecting local and international healthcare professionals with permanent and locum roles.",
    },
    {
        path: "/job-seeker-hub",
        title: "Medical Recruitment Agency for Medical Professionals | Medfuture",
        description:
            "Medfuture is a medical recruitment agency in Australia helping doctors and healthcare professionals secure trusted permanent and locum positions.",
    },
    {
        path: "/employee-hub",
        title: "Employee Hub | Medfuture",
        description:
            "Medfuture is a trusted Australian medical recruitment agency, connecting local and international healthcare professionals with permanent and locum roles.",
    },
    {
        path: "/about-us",
        title: "About Us | Medfuture",
        description:
            "Medfuture is a trusted Australian medical recruitment agency, connecting local and international healthcare professionals with permanent and locum roles.",
    },
    {
        path: "/contact-us",
        title: "Contact our Medical Recruitment Agency team | Medfuture",
        description:
            "Contact Medfuture, a reliable medical recruitment agency in Australia, for healthcare staffing and recruitment support.",
    },
    {
        path: "/sign-in",
        title: "Register with Medical Recruitment Agency | Medfuture",
        description:
            "Sign up with Medfuture, a medical recruitment agency in Australia, to access trusted healthcare roles, connect with top employers, and advance your career.",
    },
    {
        path: "/employer-hub",
        title: "Medfuture Employer Hub — Healthcare Recruitment Australia - ",
        description:
            "Partner with Medfuture to hire top talent in Australia's healthcare sector, including general practitioners and registered occupational therapists. Find the right professionals to strengthen your workforce today.",
    },
   
    {
        path: "/general-practice-division",
        title: "General Practice Division | Medfuture",
        description:
            "Grow your career at Medfuture: General Practice jobs in Australia, including roles for registered practitioners",
    },
    {
        path: "/general-practice-division/fracgp-facrrm",
        title: "GP Jobs for Fellowed GPs | Medfuture",
        description:
            "Grow your career at Medfuture: 150 general practitioners jobs (GP jobs) in Australia, including doctor jobs for general practitioner FRACGP & FACRRM specialists",
    },
    {
        path: "/general-practice-division/gp-registrars",
        title: "GP Training Program Jobs in Australia",
        description:
            "Train with the best! Medfuture is the medical recruitment agency for 100+ GP Training jobs in Australia. Find (Full Time & Part Time) registrar roles now.",
    },
    {
        path: "/general-practice-division/locum-gp",
        title: "Locum GP Jobs in Australia",
        description:
            "Enjoy flexibility! Medfuture is the medical recruitment agency for 200+ Locum GP jobs in Australia. Browse (Full Time & Part Time) locum opportunities today.",
    },
    {
        path: "/ahp-division",
        title: "Allied Health Jobs in Australia: Medical Recruitment Agency",
        description:
            "Your next move starts here! Medfuture is the medical recruitment agency for 300+ Allied Health jobs in Australia. View (Full Time & Part Time) openings today.",
    },
    {
        path: "/ahp-division/physiotherapy",
        title: "Physiotherapist Jobs Australia: Medical Recruitment Agency",
        description:
            "Reach your potential! Medfuture is a medical recruitment agency for 140+ Physiotherapist jobs in Australia. Apply (Full Time & Part Time) to join us today.",
    },
    {
        path: "/ahp-division/speech-pathology",
        title: "Speech Therapist Jobs Australia: Medical Recruitment Agency | Medfuture",
        description:
            "Boost your career! Medfuture is the medical recruitment agency for 330+ Speech Pathologist jobs in Australia. Check (Full Time & Part Time) opportunities now.",
    },
    {
        path: "/ahp-division/occupational-therapist",
        title: "Occupational Therapist Jobs in Australia",
        description:
            "Grow your career at Medfuture: 72 occupational therapist jobs in Australia, including roles for registered occupational therapists",
    },
    {
        path: "/ahp-division/podiatrist",
        title: "Podiatrist Jobs in Australia | Medfuture",
        description:
            "Grow your career at Medfuture: 36 podiatrist jobs in Australia, including roles for registered podiatrists",
    },
    {
        path: "/mental-health",
        title: "Mental Health Division | Medfuture",
        description:
            "Clinical excellence! Medfuture is a medical recruitment agency with 150+ Mental Health jobs in Australia. View (Full Time & Part Time) specialist roles today.",
    },
    {
        path: "/mental-health/psychology",
        title: "Medical Recruitment Agency: Psychologist Jobs Australia",
        description:
            "Empower your career! Medfuture is a medical recruitment agency with 110+ Psychologist jobs in Australia. View (Full Time & Part Time) vacancies on our site.",
    },
    {
        path: "/terms-and-conditions",
        title: "Terms And Condition | Medfuture",
        description:
            "Medfuture is a leading medical recruitment agency in Australia with proven expertise placing healthcare professionals across various specialties since 2014.",
    },
    {
        path: "/privacy-policy",
        title: "Privacy Policy | Medfuture",
        description:
            "Medfuture is a leading medical recruitment agency in Australia with proven expertise placing healthcare professionals across various specialties since 2014.",
    },
     {
        path: "/international",
        title: "Medical Jobs For International Candidates | Medfuture",
        description:
            "Medfuture is a leading medical recruitment agency in Australia with proven expertise placing healthcare professionals across various specialties since 2014.",
    },
];

// ============================================================================
// GENERATE STATIC METADATA LIST
// ============================================================================
export const metaDataList: Record<string, MetadataConfig | ((params: TemplateParams) => MetadataConfig)> = {
    home: createPageMetadata(staticPages[0]),
    jobseeker: createPageMetadata(staticPages[1]),
    employee: createPageMetadata(staticPages[2]),
    aboutus: createPageMetadata(staticPages[3]),
    contactus: createPageMetadata(staticPages[4]),
    signin: createPageMetadata(staticPages[5]),
    employerhub: createPageMetadata(staticPages[6]),
    gpdivison: createPageMetadata(staticPages[7]),
    fracgp: createPageMetadata(staticPages[8]),
    gpregistar: createPageMetadata(staticPages[9]),
    locumgp: createPageMetadata(staticPages[10]),
    ahp: createPageMetadata(staticPages[11]),
    physiotherapy: createPageMetadata(staticPages[12]),
    speechpatho: createPageMetadata(staticPages[13]),
    occupational: createPageMetadata(staticPages[14]),
    podiatrist: createPageMetadata(staticPages[15]),
    mentalhealth: createPageMetadata(staticPages[16]),
    psychology: createPageMetadata(staticPages[17]),
    termsand: createPageMetadata(staticPages[18]),
    privacy: createPageMetadata(staticPages[19]),

    // ========================================================================
    // DYNAMIC TEMPLATES (for job pages)
    // ========================================================================
    permanent: (params: TemplateParams): MetadataConfig => ({
        title: `${params.title || "Job"} | Medfuture`,
        description: `Apply for ${params.title || "this job"} at Medfuture. Explore medical & healthcare opportunities across Australia.`,
        alternates: {
            canonical: `${BASE_URL}/permanent/${params.id}?page=1`,
        },
        openGraph: {
            type: "website",
            locale: "en_US",
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

// ============================================================================
// DYNAMIC OVERRIDES (only for pages that need custom metadata)
// ============================================================================
export const dynamicOverrides: Record<string, MetadataConfig> = {
    "/permanent/general-dentist-jobs/in-australian-capital-territory": {
        title: "Special GP Job – Medfuture",
        description: "Apply for this exclusive GP role in Sydney with Medfuture.",
        
    },
    "/permanent/job": {
        title: "Medical and Healthcare Jobs in Australia | Medfuture",
        description: "view all permanent medical and healthcare positions across Australia with Medfuture.",
       
    },
    "/permanent/jobs/in-canberra": {
        title: "Medical and Healthcare Jobs in canberra | Medfuture",
        description: "view all permanent medical and healthcare positions across canberra with Medfuture.",
       
    },
    "/permanent": {
        title: "Permanent Medical and Healthcare Jobs in Australia | Medfuture",
        description: "Browse permanent medical and healthcare positions across Australia with Medfuture.",
       
    },
    "/permanent/australia": {
        title: "High Paying Medical jobs in Australia | Medfuture",
        description: "Browse High Paying permanent medical positions across Australia with Medfuture.",
       
    },
    "/permanent/jobs/in-australian-capital-territory": {
        title: "Permanent Medical jobs in Australian Capital Territory | Medfuture",
        description: "Browse permanent medical and healthcare positions across   Australian Capital Territory with Medfuture.",
      
    },
    "/permanent/jobs/in-new-south-wales": {
        title: "Permanent Medical Jobs in New South Wales | Medfuture | Medfuture",
        description: "Browse permanent medical and healthcare positions across New South Wales with Medfuture.",
       
    },
    "/permanent/jobs/in-northern-territory": {
        title: "Permanent Medical and Healthcare Jobs in Northern Territory | Medfuture",
        description: "Browse permanent medical and healthcare positions across Northern Territory with Medfuture.",
        
    },
    "/permanent/jobs/in-queensland": {
        title: "Permanent Medical jobs in Queensland | Medfuture",
        description: "Browse permanent medical and healthcare positions across Queensland with Medfuture.",
       
    },
    "/permanent/jobs/in-south-australia": {
        title: "Permanent Medical Jobs in South Australia | Medfuture",
        description: "Browse permanent medical and healthcare positions across South Australia with Medfuture.",
       
    },
    "/permanent/jobs/in-tasmania": {
        title: "Permanent Medical Jobs in Tasmania | Medfuture",
        description: "Browse permanent medical and healthcare positions across Tasmania with Medfuture.",
       
    },
    "/permanent/jobs/in-victoria": {
        title: "Permanent Medical Jobs in Victoria | Medfuture",
        description: "Browse permanent medical and healthcare positions across Victoria with Medfuture.", 
    },
    "/permanent/jobs/in-western-australia": {
        title: "Permanent Medical Jobs in Western Australia | Medfuture",
        description: "Browse permanent medical and healthcare positions across Western Australia with Medfuture.", 
    },
    "/permanent/jobs/in-north-island": {
        title: "Permanent Medical Jobs in North Island | Medfuture",
        description: "Browse permanent medical and healthcare positions across North Island with Medfuture.", 
    },
      "/permanent/jobs/in-south-island": {
        title: "Permanent Medical Jobs in South Island| Medfuture",
        description: "Browse permanent medical and healthcare positions across South Island with Medfuture.", 
    },
};