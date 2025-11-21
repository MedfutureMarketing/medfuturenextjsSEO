// lib/getSchema.ts
export function getSchema(page: string) {
  switch (page) {
    case "home":
      return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "My App Home",
        "url": "https://www.myapp.com/",
        "description": "Welcome to My App, the best place for XYZ.",
        "publisher": {
          "@type": "Organization",
          "name": "My App",
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
