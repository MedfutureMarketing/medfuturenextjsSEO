import Image from 'next/image';
import { StaticImageData } from 'next/image';
import Default from '@/assets/Team/3.png';

interface Manager {
    name: string;
    title: string;
    image: string | StaticImageData;
}

const divisionManagers: Manager[] = [
    {
        name: 'Shajenith Sathananthan',
        title: 'Manager ICT and Infrastructure',
        image: Default,
    },
    {
        name: 'Amanda Fernando',
        title: 'Candidate On-Boarding (International)',
        image: Default,
    },
    {
        name: 'Thareni Srikumar',
        title: 'Talent Management & MIS',
        image: Default,
    },
    {
        name: 'Pabashi Perera',
        title: 'Group Accountant',
        image: Default,
    },
    {
        name: 'Narthana Fernando',
        title: 'HR & Administration',
        image: Default,
    },
    {
        name: 'Thamara Rajawardena',
        title: 'AHP & MOD Unit',
        image: Default,
    },
    {
        name: 'Anusha Samarasinghe',
        title: 'PLGP',
        image: Default,
    },
    {
        name: 'Taniya Dilu',
        title: 'Business Development & Corporate Relations',
        image: Default,
    },
];

export default function DivisionManagers() {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                    Division Managers
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
                    {divisionManagers.slice(0, 5).map((manager, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="relative w-full aspect-[3/4] bg-slate-900 rounded-lg overflow-hidden mb-3">
                                <Image
                                    src={manager.image}
                                    alt={manager.name}
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                                />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-900 text-center mb-1">
                                {manager.name}
                            </h3>
                            <p className="text-xs text-gray-600 text-center">
                                {manager.title}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                    {divisionManagers.slice(5).map((manager, index) => (
                        <div key={index + 5} className="flex flex-col items-center">
                            <div className="relative w-full aspect-[3/4] bg-[#0D1A3E] rounded-[4px] overflow-hidden mb-3">
                                <Image
                                    src={manager.image}
                                    alt={manager.name}
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 33vw"
                                />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-900 text-center mb-1">
                                {manager.name}
                            </h3>
                            <p className="text-xs text-gray-600 text-center">
                                {manager.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <section className="py-16 px-4 ">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Left Column - Title */}
                        <div>
                            
                            <h2 className="text-[36px] font-bold text-gray-900 ">
                                Committed to
                            </h2>
                            <h2 className="text-[40px] leading-tight font-bold text-[#074CA4]">
                                Quality, Safet <br />          & Compliance
                            </h2>
                            {/* <h2 className="text-[40px] font-bold text-[#074CA4]">
                      
                            </h2> */}
                        </div>

                        {/* Right Column - Content */}
                        <div className="space-y-4">
                            <p className="text-sm text-gray-600 mb-3">
                                In healthcare, compliance is non-negotiable.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                We follow industry-leading standards in credentialing, background checks, documentation, and verification. Our internal processes are aligned with ANMAC requirements, RCSA guidelines, and best practices in healthcare workforce governance.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                We ensure every candidate we present is thoroughly vetted, well-supported, and ready to deliver exceptional care.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}