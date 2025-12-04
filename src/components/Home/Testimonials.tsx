"use client";

const cards = [
  { text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad”", author: "Dr. Peter Parker", role: "General Practitioner" },
  { text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad”", author: "Dr. Peter Parker", role: "General Practitioner" },
  { text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad”", author: "Dr. Peter Parker", role: "General Practitioner" },
  { text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad”", author: "Dr. Peter Parker", role: "General Practitioner" },
  { text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad”", author: "Dr. Peter Parker", role: "General Practitioner" },
  { text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad” Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", author: "Dr. Peter Parker", role: "General Practitioner" },
  { text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad”", author: "Dr. Peter Parker", role: "General Practitioner" },
  { text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad”", author: "Dr. Peter Parker", role: "General Practitioner" },
];

export default function TestimonialPuzzle() {
  return (
    <section className="w-full py-20 px-4 lg:px-0">
      <h2 className="text-3xl font-bold text-center text-[#074CA4] mb-12">
        Testimonials
      </h2>

      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
        {[0, 1, 2, 3].map((col) => {
          const start = col * 2;
          const items = cards.slice(start, start + 2);

          const isTall = col % 2 === 1;
          const offset = col % 2 === 0 ? "mt-6" : "mt-0";

          return (
            <div key={col} className={`${offset} grid gap-6`}>
              {items.map((item, i) => (
                <div
                  key={i}
                  className={`bg-white border border-gray-200 shadow-sm rounded-xl p-5 flex flex-col justify-between hover:shadow-md transition
                    ${isTall ? "h-[280px]" : "h-[200px]"}
                  `}
                >
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {item.text}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-[#074CA4]">{item.author}</p>
                      <p className="text-xs text-gray-500">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <div className="text-center mt-10">
        <button className="bg-[#074CA4] text-white px-6 py-2 text-sm rounded-md">
          View All
        </button>
      </div>
    </section>
  );
}
