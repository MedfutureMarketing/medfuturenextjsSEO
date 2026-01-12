
const specialties = [
    "Chronic disease management",
    "Rural and remote medicine",
    "Aboriginal and Torres Strait Islander health",
    "Emergency and urgent care",
    "Preventive and population ",
    "Women’s health",
    "Men’s health",
    "Aged care medicine",
    "Mental health care",
    "Paediatric primary care",
    "Occupational health",
    "Addiction medicine",
    "Skin cancer medicine",
    "Palliative and end of life care",
  
];

export default function SpecialtyAreas() {
    return (
        <section className="bg-white full-width-section mt-[96px]">
            <div className=" mx-auto inner-width-section px-6 text-center ">
                {/* Title */}
                <h2 className="text-3xl lg:text-[40px] font-[400] text-gray-800">
                    Specialty Areas within <span className="font-[700] text-[#074CA4]">Specialist GP</span>           </h2>

                {/* Description */}
                <p className="text-gray-600 max-w-2xl mx-auto text-sm lg:text-base mt-[22px] mb-[42px]">
                    Explore sub‑domains where your skills are highly valued—choose short blocks, rural adventures, or metro flexibility.                </p>

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
