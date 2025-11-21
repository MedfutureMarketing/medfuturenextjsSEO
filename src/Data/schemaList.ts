// data/schemaList.ts
export interface SchemaData {
  type: string; // e.g., "Organization", "WebPage", "JobPosting"
  jsonLd: Record<string, any>; // JSON-LD object
}

// Centralized schema definitions
export const schemaList: Record<string, SchemaData> = {
  home: {
    type: "WebSite",
    jsonLd: {
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

  about: {
    type: "WebPage",
    jsonLd: {
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

  jobPosting: {
    type: "JobPosting",
    jsonLd: {
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
};
