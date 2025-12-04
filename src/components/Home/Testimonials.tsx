import Image from "next/image";
import avatar from "@/assets/homeico/aboutusimg.png";

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
      <h2 className="text-[36px] font-bold text-center text-[#074CA4] mb-12">
        Testimonials
      </h2>

      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
        {cards.reduce((cols, card, index) => {
          const colIndex = Math.floor(index / 2);
          if (!cols[colIndex]) cols[colIndex] = [];
          cols[colIndex].push(card);
          return cols;
        }, [] as typeof cards[]).map((colCards, col) => {
          const isTall = col % 2 === 1;
          const offset = col % 2 === 0 ? "mt-16" : "mt-2";

          return (
            <div key={col} className={`${offset} grid gap-6`}>
              {colCards.map((item, i) => (
                <article
                  key={i}
                  className={`bg-[#F8F8F8] border border-gray-50 shadow-sm rounded-[8px] p-5 flex flex-col justify-between hover:shadow-md transition
                    ${isTall ? "h-[280px]" : "h-[250px]"}
                  `}
                >
                  <p className="text-[16px] text-gray-600 leading-relaxed mb-4">
                    {item.text}
                  </p>

                  <div className="flex justify-end">
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="text-[14px] font-semibold text-[#074CA4]">{item.author}</p>
                        <p className="text-[14px] text-gray-500">{item.role}</p>
                      </div>
                      <Image
                        src={avatar}
                        alt={item.author}
                        width={43}
                        height={43}
                        className="rounded-full object-cover"
                        priority
                      />
                    </div>
                  </div>
                </article>
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
