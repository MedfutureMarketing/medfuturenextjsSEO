

const skills = [
    " Advanced diagnostic reasoning",
    "Emergency response capability",
    "Preventive health leadership",
    " Comprehensive patient assessment",
    "Holistic patient centred care",
    "Continuity of care management",
    " Chronic disease care planning",
    "Mental health assessment and management",
    " Clinical governance awareness",
    " Evidence based clinical decision making",
    " Multidisciplinary collaboration",
    "Digital health system proficiency",

    "Rural and remote clinical adaptabilit",
    "Cultural safety and sensitivity",
    " Professional communication excellence",
];

export default function FracgpCoreSkillsClinical() {
    return (
        <section className="bg-white py-[137px] ">
            <div className="inner-width-section mx-auto px-6 text-center space-y-6">
                {/* Title */}
                <h2 className="text-2xl lg:text-[36px] font-bold text-[#040D48]">
                    Core Skills & Clinical <span className="font-[700] text-[#074CA4]"> Expertise</span>
                </h2>

                {/* Description */}
                <p className="text-[#4A5565]  mx-auto lg:text-[16px] text-xs lg:w-[853px] ">
A Specialist General Practitioner applies advanced clinical judgment across complex primary care environments.
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
