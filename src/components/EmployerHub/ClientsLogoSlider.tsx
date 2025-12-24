'use client'

import Image, { StaticImageData } from 'next/image'

/* ----------------------------- Logo Imports ----------------------------- */
import logo1 from '@/assets/clientlogos/1.png'
import logo2 from '@/assets/clientlogos/2.png'
import logo3 from '@/assets/clientlogos/3.png'
import logo4 from '@/assets/clientlogos/4.png'
import logo5 from '@/assets/clientlogos/5.png'
import logo6 from '@/assets/clientlogos/7.png'
import logo7 from '@/assets/clientlogos/8.png'
import logo8 from '@/assets/clientlogos/2.png'

/* ----------------------------- Logo Rows ----------------------------- */
const row1: StaticImageData[] = [logo1, logo2, logo3, logo4, logo5, logo6]
const row2: StaticImageData[] = [logo3, logo4, logo5, logo6, logo7, logo8]
const row3: StaticImageData[] = [logo2, logo5, logo6, logo1, logo7, logo4]
const row4: StaticImageData[] = [logo6, logo7, logo8, logo1, logo2, logo3]
const row5: StaticImageData[] = [logo3, logo4, logo5, logo6, logo7, logo8]

const duplicate = (logos: StaticImageData[]): StaticImageData[] => [...logos, ...logos]

/* ----------------------------- Component ----------------------------- */
export default function ClientsLogoSlider() {
  return (
    <section className="bg-white overflow-hidden">
      <h2 className="text-center text-[36px] text-[#040D48] font-[500] mb-8">
        Our <span className="text-[#074CA4] font-[700]">Clients</span>
      </h2>

      <div className="mx-auto px-4 space-y-6">
        <LogoRow logos={row1} direction="right" />
        <LogoRow logos={row2} direction="left" />
        <LogoRow logos={row3} direction="right" />
        <LogoRow logos={row4} direction="left" />
        <LogoRow logos={row5} direction="right" />
      </div>
    </section>
  )
}

/* ----------------------------- Logo Row ----------------------------- */
function LogoRow({
  logos,
  direction,
}: {
  logos: StaticImageData[]
  direction: 'left' | 'right'
}) {
  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex gap-12 w-max ${
          direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'
        }`}
      >
        {duplicate(logos).map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center lg:min-w-[160px] lg:h-[80px]"
          >
            <Image
              src={logo}
              alt="Client logo"
              className="object-contain lg:h-[80px] h-12 transition"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
