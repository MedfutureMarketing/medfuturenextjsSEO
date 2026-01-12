import Image from 'next/image';
// import { StaticImageData } from 'next/image';
import GlobeImage from '@/assets/Team/globe.png';

export default function GlobalTalentReach() {
    return (
        <section className="py-16 px-4 full-width-section bg-[#F5F7FB]">
            <div className="inner-width-section mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Image */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-md aspect-square">
                            <Image
                                src={GlobeImage}
                                alt="Global Talent Network"
                                fill
                                className="object-contain"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="space-y-1">
                        <h2 className="text-[36px] font-bold text-gray-900">
                            Local Expertise,
                        </h2>
                        <h2 className="text-[40px] font-bold text-[#074CA4] mb-4">
                            Global Talent Reach
                        </h2>

                        <p className="text-gray-700 leading-relaxed">
With offices operating across Australia and international networks spanning New Zealand, the UK, Ireland, and Asia, we bring both local understanding and global capability to the healthcare sector.                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            We help local agencies access world-class talent and support overseas clinicians in starting successful careers in Australia.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}