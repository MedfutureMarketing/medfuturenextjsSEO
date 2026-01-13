import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import Default from '@/assets/Team/1.png';

interface TeamMember {
  name: string;
  title: string;
  image: StaticImageData;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Mr. Niraj Chenthoran',
    title: 'Managing Director - CEO',
    image: Default,
  },
  {
    name: 'Miss. Gayathri Thiruchenthoran',
    title: 'Director – HR & Corporate Relations',
    image: Default,
  },
  {
    name: 'Mrs. Sreevidya Vengayil',
    title: 'Chief Manager-GP Metro',
    image: Default,
  }
];

export default function LeadershipTeam() {
  return (
    <section className="py-16 full-width-section ">
      <div className="max-w-7xl inner-width-section mx-auto">
        <h2 className="text-4xl font-bold text-center mb-[54px] text-gray-900">
          Meet Our <span className="text-[#074CA4]">Leadership Team</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-b w-[278px] h-[537px] from-[#0B3264] to-[#1B62B7] overflow-hidden "
            >
              <div className="p-4 mt-4 text-white">
                <h3 className="text-[16px] font-semibold mb-1">{member.name}</h3>
                <p className="text-[14px] text-blue-100 mb-4">{member.title}</p>
              </div>

              <div className="relative  h-[425px] ">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-contain"
                  style={{ objectPosition: 'left bottom' }}
                />



              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}