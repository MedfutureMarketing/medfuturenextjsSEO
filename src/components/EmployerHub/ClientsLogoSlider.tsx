'use client'

import Image, { StaticImageData } from 'next/image'

/* ----------------------------- Logo Imports ----------------------------- */
import logo1 from '@/assets/clientlogo/1.webp'
import logo2 from '@/assets/clientlogo/2.png'
import logo3 from '@/assets/clientlogo/3.png'
import logo4 from '@/assets/clientlogo/4.png'
import logo5 from '@/assets/clientlogo/5.png'
import logo29 from '@/assets/clientlogo/6.webp'

import logo6 from '@/assets/clientlogo/7.png'
import logo7 from '@/assets/clientlogo/8.png'
import logo8 from '@/assets/clientlogo/9.png'
import logo9 from '@/assets/clientlogo/10.png'
import logo10 from '@/assets/clientlogo/31.webp'
import logo11 from '@/assets/clientlogo/12.png'
import logo12 from '@/assets/clientlogo/13.png'
import logo13 from '@/assets/clientlogo/14.png'
import logo14 from '@/assets/clientlogo/15.png'
import logo15 from '@/assets/clientlogo/16.png'
import logo16 from '@/assets/clientlogo/17.png'
import logo17 from '@/assets/clientlogo/30.png'
import logo18 from '@/assets/clientlogo/19.png'
import logo19 from '@/assets/clientlogo/32.png'
import logo20 from '@/assets/clientlogo/21.png'
import logo21 from '@/assets/clientlogo/22.png'
import logo22 from '@/assets/clientlogo/23.webp'
import logo23 from '@/assets/clientlogo/24.png'
import logo24 from '@/assets/clientlogo/25.png'
import logo25 from '@/assets/clientlogo/26.jpg'
import logo26 from '@/assets/clientlogo/27.png'
import logo27 from '@/assets/clientlogo/28.png'
import logo28 from '@/assets/clientlogo/29.png'


/* ----------------------------- Logo Rows ----------------------------- */
const row1: StaticImageData[] = [logo1, logo2, logo3, logo4, logo5, logo6]
const row2: StaticImageData[] = [logo7, logo8, logo9, logo10, logo11, logo12]
const row3: StaticImageData[] = [logo13, logo14, logo15, logo16, logo17, logo18]
const row4: StaticImageData[] = [logo19, logo20, logo21, logo22, logo23, logo24]
const row5: StaticImageData[] = [logo25, logo26, logo27, logo28, logo29, logo1]

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
              className="object-contain lg:h-[80px] h-12 w-42 transition"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
