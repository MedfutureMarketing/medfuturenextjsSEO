// lib/getSchema.ts
export function getSchema(page: string) {
  switch (page) {
    case "home":
      return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Medfuture | Medical & Healthcare Recruitment in Australia",
        "url": "https://www.medfuture.com.au/",
        "description": "Medfuture stands as a leading brand in Australia and New Zealand, specializing in comprehensive medical and healthcare staffing recruitment solutions.",
        "publisher": {
          "@type": "Organization",
          "name": "Medfuture",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.myapp.com/logo.png",
          },
        },
      };
    // Add more pages like "about", "contact", etc.
    default:
      return {};
  }
}
