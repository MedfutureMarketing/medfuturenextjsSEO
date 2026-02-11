import Image from 'next/image';
import gppractise from "@/assets/Divisionimages/gppractise.webp";

export default function GeneralPracticeSector() {
    const sectors = [
        'General Practice Clinics (Private Practices)',
        'Rural & Remote General Practice',
        'Aboriginal Medical Services (AMS)',
        'Urgent Care Clinics (UCCs)',
        'After-Hours & Out-of-Hours GP Services',
        'Aged Care Facilities / Residential Aged Care',
        'Corporate / Occupational Health Clinics',
        'Skin Cancer Clinics',
    ];

    return (
        <section className="py-12 md:mt-[119px] full-width-section ">
            <div className="inner-width-section mx-auto px-4 sm:px-6 lg:px-8">
                {/* Sectors Label */}
                <div className="mb-4">
                    <span className="text-[14px] font-medium text-[#074CA4]">Sectors</span>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-5 items-center">
                    {/* Left Column - Content */}
                    <div>
                        <h2 className="text-3xl md:text-[30px] font-bold text-[#0F172A] mb-8">
                            General Practice Sector We Recruit Across
                        </h2>

                        {/* Bullet List */}
                        <ul className="space-y-3">
                            {sectors.map((sector, index) => (
                                <li key={index} className="flex items-start text-[14px] text-[#4A5565]" >
                                    <span className="inline-block w-1 h-1 rounded-full bg-gray-400 mt-2 mr-4 flex-shrink-0" />
                                    <span className="">{sector}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column - Image */}
                    <div className="flex justify-center">
                        <div className="relative w-full max-w-md h-80 rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src={gppractise}
                                alt="General Practice Practise"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}