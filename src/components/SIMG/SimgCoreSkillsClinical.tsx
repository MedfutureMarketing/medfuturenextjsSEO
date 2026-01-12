

const skills = [
    "Comprehensive patient assessmen",
    "Cultural competency in care delivery",
    "Ethical and professional practice",
    "Evidence based clinical decision making",
    "Mental health assessment and support",
    "Adaptability to new healthcare systems",
    "Chronic disease care planning",
    "Acute care management",
    "Time management in clinical settings",
    "Preventive health counselling",
    "Clinical documentation accuracy",
    "Risk assessment and patient safety",
    "Multidisciplinary collaboration",
    "Patient communication and education",
    "Commitment to continuous professional development",
];

export default function SimgCoreSkillsClinical() {
    return (
        <section className="bg-white py-[137px] ">
            <div className="inner-width-section mx-auto px-6 text-center space-y-6">
                {/* Title */}
                <h2 className="text-2xl lg:text-[36px]  text-[#040D48]">
                    Core Skills & Clinical <span className="font-[700] font-bold text-[#074CA4]"> Expertise</span>
                </h2>

                {/* Description */}
                <p className="text-[#4A5565]  mx-auto lg:text-[16px] text-xs lg:w-4xl ">
                    International Family Medicine professionals demonstrate adaptable clinical judgment, continuity of care expertise, and strong patient focused communication skills.                </p>

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
