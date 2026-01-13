
const specialties = [
    "General primary care medicine",
    "Chronic disease management",
    "Preventive health and screening",
    "Womens health services",
    "Mens health and wellbeing ",
    "Child and adolescent health",
    "Geriatric medicine",
    "Mental health care",
    "Acute and urgent presentations",
    "Indigenous and rural health exposure",
    "Palliative care support",
    "Travel and occupational health",



];

export default function SimgSpecialtyAreas() {
    return (
        <section className="bg-white full-width-section mt-[96px]">
            <div className=" mx-auto inner-width-section px-6 text-center">
                {/* Title */}
                <h2 className="text-3xl lg:text-[40px] font-[400] text-gray-800">
                    Specialty Areas within <span className="font-[700] text-[#074CA4]">International Family Medicine</span>           </h2>

                {/* Description */}
                <p className="text-gray-600 lg:max-w-3xl mx-auto text-sm lg:text-base mt-[22px] mb-[42px]">
                    International family physicians bring broad clinical exposure across community based care, chronic disease management, and preventative health within diverse healthcare settings.
                </p>
                {/* Buttons Grid */}
                <div className="flex flex-wrap justify-center gap-4 mb-[59px]">
                    {specialties.map((spec, idx) => (
                        <button
                            key={idx}
                            className="lg:px-0 py-2  px-4 lg:w-[224px] lg:h-[44px] rounded-full border border-gray-300 text-gray-700 text-sm   transition"
                        >
                            {spec}
                        </button>
                    ))}
                </div>

            </div>
        </section>
    );
}
