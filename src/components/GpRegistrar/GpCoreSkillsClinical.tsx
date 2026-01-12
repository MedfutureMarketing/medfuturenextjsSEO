

const skills = [
    "Patient assessment and diagnosis",
    "Care coordination and referrals",
    "Risk assessment",
    "Evidence based clinical decision making",
    "Time and workload management",
    "Continuity of care",
    "Communication and consultation skills",
    "Cultural competence",
    "Patient centred care delivery",
    "Chronic disease planning",
    "Clinical documentation accuracy",
    "Professional ethics and integrity",
    "Preventive health screening",
    "Medication management",
    "Adaptability across clinical settings",
];

export default function FracgpCoreSkillsClinical() {
    return (
        <section className="bg-white py-[137px] ">
            <div className="inner-width-section mx-auto px-6 text-center space-y-6">
                {/* Title */}
                <h2 className="text-2xl lg:text-[36px]  text-[#040D48]">
                    Core Skills & Clinical <span className="font-[700] font-bold text-[#074CA4]"> Expertise</span>
                </h2>

                {/* Description */}
                <p className="text-[#4A5565]  mx-auto lg:text-[16px] text-xs  ">
                    A General Practitioner Registrar develops strong clinical judgment while progressing through supervised and independent practice.
                </p>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[18px] gap-2 mt-[72px] text-left">
                    {skills.map((skill, idx) => (
                        <div key={idx} className="flex items-start gap-[18px] lg:text-[16px] text-xs font-[400]">
                            {/* Bullet point */}
                            <span className="text-[#000000] font-bold mt-1">•</span>
                            <p className="text-gray-700">{skill}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
