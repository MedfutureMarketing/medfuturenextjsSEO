// src/data/schemaList.ts

export interface SchemaData {
  /** Type of the schema, e.g., "WebSite", "WebPage", "JobPosting" */
  type: string;

  /** JSON-LD object representing the structured data */
  jsonLd: Record<string, unknown>;
}

/**
 * Centralized schema definitions for all pages.
 * Key = page identifier (same as metaDataList keys)
 */
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

  permanent: {
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

  locumJob: {
    type: "JobPosting",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      title: "Locum Doctor – Contract",
      description: "Looking for a Locum Doctor for short-term contract work in Sydney.",
      datePosted: "2025-01-01",
      validThrough: "2025-12-31",
      employmentType: "CONTRACTOR",
      hiringOrganization: {
        "@type": "Organization",
        name: "Medfuture",
        sameAs: "https://example.com",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          streetAddress: "456 Medical Street",
          addressLocality: "Sydney",
          addressRegion: "NSW",
          postalCode: "2000",
          addressCountry: "AU",
        },
      },
    },
  },
};
