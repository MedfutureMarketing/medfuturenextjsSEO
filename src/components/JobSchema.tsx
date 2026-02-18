// app/test-schema/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schema Test',
};

export default function TestSchemaPage() {
  const testSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Test Job",
    "description": "This is a test job posting",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Test Company"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(testSchema) }}
      />
      <div>
        <h1>Schema Test Page</h1>
        <p>Check the console to see if schema is loaded</p>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              console.log('Testing schema injection...');
              const scripts = document.querySelectorAll('script[type="application/ld+json"]');
              console.log('Found', scripts.length, 'schema scripts');
              if (scripts.length > 0) {
                console.log('Schema content:', scripts[0].textContent);
              }
            `,
          }}
        />
      </div>
    </>
  );
}