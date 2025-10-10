// src/app/about/page.tsx
import type { Metadata } from 'next';
// import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'About Uss | My Company',
  description: 'Learn more about My Company and our mission.',
  alternates: {
    canonical: 'https://www.mycompany.com/about',
  },
};

export default function AboutPage() {
  return (
    <main>
      {/* <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "My Company",
          "url": "https://www.mycompany.com",
        }}
      /> */}
      <h1>About Us</h1>
      <p>Our mission is to deliver amazing products and services.</p>
    </main>
  );
}
