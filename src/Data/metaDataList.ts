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

        alternates: {
            canonical: "https://medfuture.com.au",
        },
      
        openGraph: {
            type: "website",
            locale: "en_US",
            url: "https://example.com/",
            siteName: "Medfuture",
            title: "Medfuture – Medical & Healthcare Recruitment in Australia",
            description:
                "Experience a fast, mobile-first web layout built with Next.js and Tailwind CSS. Optimized for SEO, speed, and accessibility.",
            images: [
                {
                    url: "https://medfuture.com.au/assets/pathwayBanner-ANKLHITn.png",
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
            images: ["https://example.com/twitter-image.jpg"],
        },
    
        icons: {
            icon: "/favicon.ico",
            shortcut: "/favicon-32x32.png",
            apple: "/apple-touch-icon.png",
        },
        manifest: "/site.webmanifest",

        category: "Technology",

        
        metadataBase: new URL("https://example.com"),
        applicationName: "Medfuture",
        generator: "Next.js",
        authors: [{ name: "Your Name", url: "https://example.com" }],
        creator: "Your Name",
        publisher: "Your Company",
    },
    permanent: {
        title: "Permanent | Medical & Healthcare Recruitment in Australia",
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


        alternates: {
            canonical: "https://example.com/",
        },

        openGraph: {
            type: "website",
            locale: "en_US",
            url: "https://example.com/",
            siteName: "Medfuture",
            title: "Medfuture – Medical & Healthcare Recruitment in Australia",
            description:
                "Experience a fast, mobile-first web layout built with Next.js and Tailwind CSS. Optimized for SEO, speed, and accessibility.",
            images: [
                {
                    url: "https://example.com/og-image.jpg",
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
            images: ["https://example.com/twitter-image.jpg"],
        },
    
        icons: {
            icon: "/favicon.ico",
            shortcut: "/favicon-32x32.png",
            apple: "/apple-touch-icon.png",
        },
        manifest: "/site.webmanifest",

        category: "Technology",

    
        metadataBase: new URL("https://example.com"),
        applicationName: "Medfuture",
        generator: "Next.js",
        authors: [{ name: "Your Name", url: "https://example.com" }],
        creator: "Your Name",
        publisher: "Your Company",
    },

    about: {
        title: "Medfuture – Medical & Healthcare Recruitment in Australia",
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
 
        alternates: {
            canonical: "https://example.com/",
        },
  
        openGraph: {
            type: "website",
            locale: "en_US",
            url: "https://example.com/",
            siteName: "Medfuture",
            title: "Medfuture – Medical & Healthcare Recruitment in Australia",
            description:
                "Experience a fast, mobile-first web layout built with Next.js and Tailwind CSS. Optimized for SEO, speed, and accessibility.",
            images: [
                {
                    url: "https://example.com/og-image.jpg",
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
            images: ["https://example.com/twitter-image.jpg"],
        },

        icons: {
            icon: "/favicon.ico",
            shortcut: "/favicon-32x32.png",
            apple: "/apple-touch-icon.png",
        },
        manifest: "/site.webmanifest",

        //  Robots — SEO crawler directives
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

        //  Optional structured data (helps Google understand your site type)
        category: "Technology",

    },
};
