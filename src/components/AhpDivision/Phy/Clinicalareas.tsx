'use client';

export default function ClinicalAreas() {
    return (
        <div className="full-width-section py-[140px] ">
            <div className="inner-width-section mx-auto">
                {/* Header Section */}
                {/* Grid Section */}
                <div className="grid grid-cols-2 gap-6">
                    {/* Paediatric & Developmental */}
                    <div className="col-span-1 bg-white  p-8 text-white">
                        <p className="text-[14px] text-[#074CA4] font-[500] mb-2">
                            Clinical Focus Areas
                        </p>
                        <h1 className="lg:text-[30px] font-bold text-[#0F172A] mb-4">
                            Clinical Areas & Skills We Match<br />Properly
                        </h1>
                        <p className="text-[#4A5565] lg:text-[16px]">
                            Your clinical identity matters. We don’t force generalist roles onto specialists.
                        </p>
                    </div>
                    <div className="col-span-1 bg-gradient-to-b from-[#074CA4] to-white-400 rounded-lg p-8 text-white">
                        <h2 className="lg:text-[18px] font-bold mb-6">Paediatric & Developmental</h2>
                        <ul className="space-y-1">
                            <li className="flex items-start">
                                <span className="mr-3 mt-1">•</span>
                                <span>Early language development</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1">•</span>
                                <span>Speech sound disorders</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1">•</span>
                                <span>Autism & neurodiversity</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1">•</span>
                                <span>Literacy & language-based learning difficulties</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1">•</span>
                                <span>AAC (low-tech & high-tech)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1">•</span>
                                <span>Feeding & paediatric dysphagia</span>
                            </li>
                        </ul>
                    </div>

                    {/* Service Delivery Models */}
                    <div className="col-span-1 bg-gradient-to-b from-[#074CA4] to-white-400 rounded-lg p-8 text-white">
                        <h2 className="text-xl font-bold mb-6">Service Delivery Models</h2>
                        <ul className="space-y-1">
                            <li className="flex items-start">
                                <span className="mr-3 mt-1">•</span>
                                <span>Clinic-based</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1">•</span>
                                <span>Community/outreach</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1">•</span>
                                <span>School-embedded services</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1">•</span>
                                <span>Telehealth (Australia-wide)</span>
                            </li>
                        </ul>
                    </div>

                    {/* Adult & Neuro */}
                    <div className="col-span-1 bg-gradient-to-b from-[#074CA4] to-white-400 rounded-lg p-8 text-white">
                        <h2 className="text-xl font-bold mb-6">Adult & Neuro</h2>
                        <ul className="space-y-1">
                            <li className="flex items-start">
                                <span className="mr-3 mt-1">•</span>
                                <span>Dysphagia (acute, rehab, aged care)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1">•</span>
                                <span>Cognitive-communication disorders</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1">•</span>
                                <span>Neurological conditions (stroke, TBI, neurodegenerative)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1">•</span>
                                <span>Voice & fluency</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}