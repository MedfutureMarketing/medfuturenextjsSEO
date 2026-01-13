
const specialties = [
    "GP Training Programs",
    "Primary Care Medicine",
    "Chronic Disease Management",
    "Preventive Health Care",
    "Preventive and population ",
    "Rural and Remote Medicine",
    "Mens health",
    "Womens Health",
    "Paediatrics in Primary Care",
    "Mental Health in GP",
    "Aged Care Medicine",
    "Urgent Care Clinics",
    "Population Health",
    "Occupational Health",
        "Multidisciplinary Team Care",

  
];

export default function SpecialtyAreas() {
    return (
        <section className="bg-white full-width-section mt-[96px]">
            <div className=" mx-auto inner-width-section px-6 text-center">
                {/* Title */}
                <h2 className="text-3xl lg:text-[40px] font-[400] text-gray-800">
                    Specialty Areas within <span className="font-[700] text-[#074CA4]">GP Registrar</span>           </h2>

                {/* Description */}
                <p className="text-gray-600 max-w-2xl mx-auto text-sm lg:text-base mt-[22px] mb-[42px]">
General Practitioner Registrars gain exposure across a wide range of community based and clinical focus areas during accredited training placements.
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
