// lib/meta.ts
import type { Metadata } from 'next';

export const aboutMeta: Metadata = {
  title: 'About Us | My Company',
  description: 'Learn more about My Company and our mission.',
  openGraph: {
    title: 'About Us - My Company',
    description: 'Learn more about My Company and our mission.',
    url: 'https://www.mycompany.com/about',
    images: ['/images/og-about.jpg'],
  },
  alternates: {
    canonical: 'https://www.mycompany.com/about',
  },
};

export const homeMeta: Metadata = {
  title: 'Home | My Company',
  description: 'Welcome to My Company. Explore our services and opportunities.',
  openGraph: {
    title: 'Home - My Company',
    description: 'Welcome to My Company. Explore our services and opportunities.',
    url: 'https://www.mycompany.com',
    images: ['/images/og-home.jpg'],
  },
  alternates: {
    canonical: 'https://www.mycompany.com',
  },
};
