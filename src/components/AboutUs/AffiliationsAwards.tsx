import Image from 'next/image';
import { StaticImageData } from 'next/image';

// Import all your logo images
import AMRANZ1Logo from '@/assets/awards/1.png';
import ANRA1Logo from '@/assets/awards/2.png';
import RCSA1Logo from '@/assets/awards/3.png';
import ANRA2Logo from '@/assets/awards/4.png';
import RCSA2Logo from '@/assets/awards/5.png';
import ANRA3Logo from '@/assets/awards/6.png';
import AustralianAchieverLogo from '@/assets/awards/australian-achiever.png';
import PACInsiderLogo from '@/assets/awards/pac-insider.png';

interface Logo {
    src: StaticImageData;
    alt: string;
}

const allLogos: Logo[] = [
    {
        src: AMRANZ1Logo,
        alt: 'AMRANZ - Association of Medical Recruiters Australia & New Zealand',
    },
    {
        src: ANRA1Logo,
        alt: 'ANRA - Association of Nursing Recruitment Agencies',
    },
    {
        src: RCSA1Logo,
        alt: 'RCSA',
    },
    {
        src: ANRA2Logo,
        alt: 'ANRA - Association of Nursing Recruitment Agencies',
    },
    {
        src: RCSA2Logo,
        alt: 'RCSA',
    },
    {
        src: ANRA3Logo,
        alt: 'ANRA - Association of Nursing Recruitment Agencies',
    },
    {
        src: AustralianAchieverLogo,
        alt: '2024 Australian Achiever - Highly Recommended Excellence in Customer Service',
    },
    {
        src: PACInsiderLogo,
        alt: 'PAC Insider Business Awards 2023 - Winner! Medfuture Most Trusted Healthcare Recruitment Agency 2023 - Australia',
    },
];

export default function AffiliationsAwards() {
    const affiliationRow1 = allLogos.slice(0, 3);
    const affiliationRow2 = allLogos.slice(3, 6);
    const awards = allLogos.slice(6, 8);

    return (
        <section className="py-16 px-4 full-width-section bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-900 mb-12">
                    Affiliations & <span className="text-[#074CA4]">Awards</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Affiliations */}
                    <div className="space-y-8">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
                            {affiliationRow1.map((logo, index) => (
                                <div key={index} className="flex items-center justify-center h-24">
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        className="max-h-20 w-auto opacity-60 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
                            {affiliationRow2.map((logo, index) => (
                                <div key={index} className="flex items-center justify-center h-24">
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        className="max-h-20 w-auto opacity-60 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Awards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center justify-items-center">
                        {awards.map((logo, index) => (
                            <div key={index} className="flex items-center justify-center h-[174px]">
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="max-h-[174px]"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
