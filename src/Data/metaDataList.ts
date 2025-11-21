// src/data/pageData.ts
import type { Metadata } from "next";

export interface PageData {
  metadata: Metadata;
  schema?: Record<string, unknown>; // JSON-LD schema
}

export const pageData: Record<string, PageData> = {
  home: {
    metadata: {
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
      alternates: { canonical: "https://example.com/" },
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
    schema: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Medfuture",
      url: "https://example.com/",
      description: "Medfuture is a leading medical and healthcare recruitment brand in Australia & NZ.",
      publisher: {
        "@type": "Organization",
        name: "Medfuture",
        logo: {
          "@type": "ImageObject",
          url: "https://example.com/logo.png",
        },
      },
    },
  },

  permanent: {
    metadata: {
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
      alternates: { canonical: "https://example.com/permanent" },
      openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://example.com/permanent",
        siteName: "Medfuture",
        title: "Medfuture – Permanent Jobs",
        description:
          "Explore permanent medical and healthcare job opportunities in Australia & NZ.",
        images: [
          {
            url: "https://example.com/og-image-permanent.jpg",
            width: 1200,
            height: 630,
            alt: "Permanent Jobs Preview",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        site: "@yourtwitter",
        creator: "@yourtwitter",
        title: "Medfuture – Permanent Jobs",
        description:
          "Explore permanent medical and healthcare job opportunities in Australia & NZ.",
        images: ["https://example.com/twitter-image-permanent.jpg"],
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
    schema: {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      title: "Registered Nurse – Full Time",
      description: "Looking for a Registered Nurse with 3+ years of experience in Australia.",
      datePosted: "2025-01-01",
      validThrough: "2025-12-31",
      employmentType: "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: "Medfuture",
        sameAs: "https://example.com",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          streetAddress: "123 Main Street",
          addressLocality: "Sydney",
          addressRegion: "NSW",
          postalCode: "2000",
          addressCountry: "AU",
        },
      },
    },
  },

  about: {
    metadata: {
      title: "Medfuture – About Us",
      description:
        "Learn about Medfuture, a leading medical and healthcare recruitment brand in Australia & NZ.",
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
      alternates: { canonical: "https://example.com/about" },
      openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://example.com/about",
        siteName: "Medfuture",
        title: "About Medfuture",
        description:
          "Learn about Medfuture, a leading healthcare recruitment agency in Australia & NZ.",
        images: [
          {
            url: "https://example.com/og-image-about.jpg",
            width: 1200,
            height: 630,
            alt: "About Medfuture Preview",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        site: "@yourtwitter",
        creator: "@yourtwitter",
        title: "About Medfuture",
        description: "Learn about Medfuture, a leading healthcare recruitment agency in Australia & NZ.",
        images: ["https://example.com/twitter-image-about.jpg"],
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
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About Medfuture",
      description: "Learn about Medfuture, a top healthcare recruitment agency in Australia & NZ.",
      url: "https://example.com/about",
      publisher: {
        "@type": "Organization",
        name: "Medfuture",
        logo: {
          "@type": "ImageObject",
          url: "https://example.com/logo.png",
        },
      },
    },
  },
};
