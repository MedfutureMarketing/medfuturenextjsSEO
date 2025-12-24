

const skills = [
    "Comprehensive Primary Care",
    "Preventative Health & Screening",
    "Care Planning (GPMP/TCA)",
    "Mental Health Care Plans",
    "Women’s & Men’s Health Consults",
    "Child & Adolescent Health",
    "CDM: Diabetes, COPD, CVD",
    "Dermatology & Minor Procedures",
    "Immunisations & Travel Medicine",
    "Aged Care Rounds",
    "Telehealth Triage & Follow-up",

    "Rural Emergencies (FACRRM)",
    "Skin Checks & Excisions",
    "Chronic Pain Management",
    "Population Health & QI",
];

export default function CoreSkillsClinical() {
    return (
        <section className="bg-white py-16">
            <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
                {/* Title */}
                <h2 className="text-2xl lg:text-[36px] font-bold text-[#040D48]">
                    Core Skills & Clinical <span className="font-[700] text-[#074CA4]"> Expertise</span>
                </h2>

                {/* Description */}
                <p className="text-[#4A5565]  mx-auto lg:text-[16px] text-xs lg:w-[853px] ">
                    Our team of healthcare professionals possess a broad range of core skills and clinical expertise. These are essential to providing safe, effective, and compassionate care to patients across various settings.
                </p>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[18px] gap-2 mt-8 text-left">
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
