// data/metaDataList.ts
import type { Metadata } from "next";

export const metaDataList: Record<string, Metadata> = {
    home: {
        title: "Medfuture | Medical & Healthcare Recruitment in Australia",
        description:
            "Medfuture stands as a leading brand in Australia and New Zealand, specializing in comprehensive medical and healthcare staffing recruitment solutions.",
        keywords: [
            "Next.js",
            "Tailwind CSS",
            "Responsive Layout",
            "SEO Optimization",
            "Web Design",
            "Frontend Development",
            "Web Performance",
            "Accessibility",
        ],

        //Canonical URL 
        alternates: {
            canonical: "https://example.com/",
        },
        //Canonical URL 

        // ✅ Open Graph
        openGraph: {
            type: "website",
            locale: "en_US",
            url: "https://example.com/",
            siteName: "My App",
            title: "My App – Responsive Full-Width Layout Built with Next.js & Tailwind CSS",
            description:
                "Experience a fast, mobile-first web layout built with Next.js and Tailwind CSS. Optimized for SEO, speed, and accessibility.",
            images: [
                {
                    url: "https://example.com/og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: "My App – Responsive Layout Preview",
                },
            ],
        },
        // ✅ Open Graph
        // ✅ Twitter Card — used when shared on X (Twitter)
        twitter: {
            card: "summary_large_image",
            site: "@yourtwitter",
            creator: "@yourtwitter",
            title: "My App – Responsive Full-Width Layout Built with Next.js & Tailwind CSS",
            description:
                "A fast, SEO-friendly layout built with Next.js and Tailwind CSS. Fully responsive and optimized for modern web performance.",
            images: ["https://example.com/twitter-image.jpg"],
        },
        // ✅ Icons & Manifest — for PWA and mobile devices
        icons: {
            icon: "/favicon.ico",
            shortcut: "/favicon-32x32.png",
            apple: "/apple-touch-icon.png",
        },
        manifest: "/site.webmanifest",

       


        // ✅ Optional structured data (helps Google understand your site type)
        category: "Technology",

        // ✅ Added optional metadata for social and brand consistency
        metadataBase: new URL("https://example.com"),
        applicationName: "My App",
        generator: "Next.js",
        authors: [{ name: "Your Name", url: "https://example.com" }],
        creator: "Your Name",
        publisher: "Your Company",
    },



    about: {
        title: "My App – Responsive Full-Width Layout Built with Next.js & Tailwind CSS",
        description:
            "Medfuture stands as a leading brand in Australia and New Zealand, specializing in comprehensive medical and healthcare staffing recruitment solutions.",
        keywords: [
            "Next.js",
            "Tailwind CSS",
            "Responsive Layout",
            "SEO Optimization",
            "Web Design",
            "Frontend Development",
            "Web Performance",
            "Accessibility",
        ],

        // ✅ Canonical URL — helps prevent duplicate content
        alternates: {
            canonical: "https://example.com/",
        },

        // ✅ Open Graph — used by Facebook, LinkedIn, Slack, etc.
        openGraph: {
            type: "website",
            locale: "en_US",
            url: "https://example.com/",
            siteName: "My App",
            title: "My App – Responsive Full-Width Layout Built with Next.js & Tailwind CSS",
            description:
                "Experience a fast, mobile-first web layout built with Next.js and Tailwind CSS. Optimized for SEO, speed, and accessibility.",
            images: [
                {
                    url: "https://example.com/og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: "My App – Responsive Layout Preview",
                },
            ],
        },

        // ✅ Twitter Card — used when shared on X (Twitter)
        twitter: {
            card: "summary_large_image",
            site: "@yourtwitter",
            creator: "@yourtwitter",
            title: "My App – Responsive Full-Width Layout Built with Next.js & Tailwind CSS",
            description:
                "A fast, SEO-friendly layout built with Next.js and Tailwind CSS. Fully responsive and optimized for modern web performance.",
            images: ["https://example.com/twitter-image.jpg"],
        },

        // ✅ Icons & Manifest — for PWA and mobile devices
        icons: {
            icon: "/favicon.ico",
            shortcut: "/favicon-32x32.png",
            apple: "/apple-touch-icon.png",
        },
        manifest: "/site.webmanifest",

        // ✅ Robots — SEO crawler directives
        // robots: {
        //     index: true,
        //     follow: true,
        //     googleBot: {
        //         index: true,
        //         follow: true,
        //         maxSnippet: "max-snippet:-1",
        //         maxImagePreview: "large",
        //         maxVideoPreview: "max-video-preview:-1",
        //     },
        // },sss

        // ✅ Optional structured data (helps Google understand your site type)
        category: "Technology",

    },
};
