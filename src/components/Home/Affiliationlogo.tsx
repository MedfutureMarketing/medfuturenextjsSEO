'use client';

import Image from 'next/image';
import image1 from "@/assets/homeico/affliation/1.png"
import image2 from "@/assets/homeico/affliation/2.png"
import image3 from "@/assets/homeico/affliation/3.png"
import image4 from "@/assets/homeico/affliation/4.png"

interface Logo {
  id: string;
  src: string | any;
  alt: string;
}

const DEFAULT_LOGOS: Logo[] = [
  {
    id: 'affiliation-1',
    src: image1,
    alt: 'ANRA - Association of Nursing Recruitment Agencies',
  },
  {
    id: 'affiliation-2',
    src: image2,
    alt: 'AMRANZ - Association of Medical Recruiters Australia & New Zealand',
  },
  {
    id: 'affiliation-3',
    src: image3,
    alt: 'RCSA - Recruitment Consultants Association',
  },
  {
    id: 'affiliation-4',
    src: image4,
    alt: 'ANRA - Association of Nursing Recruitment Agencies',
  },
];

interface AffiliationProps {
  logos?: Logo[];
}

export default function AffiliationAccreditation({ logos = DEFAULT_LOGOS }: AffiliationProps) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">
          Affiliation & Accreditation
        </h2>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="w-full flex items-center justify-center p-4 transition-opacity duration-300 hover:opacity-80"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={120}
                className="max-w-[140px] h-auto object-contain"
                priority={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}