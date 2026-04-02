'use client';

import Image, { StaticImageData } from 'next/image';
import React from 'react';

import Gpm from "@/assets/Homedivisonsection/1.jpg";
import Ahp from "@/assets/Homedivisonsection/2.png";
import MH from "@/assets/Homedivisonsection/3.jpg";
import doh from "@/assets/Homedivisonsection/4.jpg";

interface RecruitmentCard {
  iconSvg: React.ReactNode;
  title: string;
  description: string;
  iconBgColor: string;
  coverImage: StaticImageData;
}

/* ================= SVG ICONS ================= */

const StethoscopeSVG = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
    <rect x="1.5" y="1.5" width="47" height="47" rx="23.5" fill="#074CA4" />
    <rect x="1.5" y="1.5" width="47" height="47" rx="23.5" stroke="white" strokeWidth="3" />
    <path
      d="M24.8879 32.0336C29.7672 32.0336 33.7231 28.4068 33.7231 24.2841C33.7231 20.1613 29.7672 17.1055 24.8879 17.1055C20.0087 17.1055 16.0527 20.4474 16.0527 24.5701C16.0527 26.1792 16.6557 27.6702 17.6817 28.8883L16.6049 33.9476L20.9298 31.2451C22.183 31.7705 23.529 32.0387 24.8879 32.0336Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const UsersSVG = () => (
  
<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1.5" y="1.5" width="47" height="47" rx="23.5" fill="#074CA4"/>
<rect x="1.5" y="1.5" width="47" height="47" rx="23.5" stroke="white" stroke-width="3"/>
<path d="M28.7941 16.0527L28.3681 16.5196C27.4142 17.5697 26.6278 18.0392 25.9733 18.3463C25.3187 18.6528 24.7687 18.7444 24.2284 19.158C23.6524 19.5996 22.8154 20.4464 22.4628 21.9581C21.7069 22.123 21.1536 22.4127 20.7173 22.7899C20.2861 23.1627 19.9614 23.5867 19.5614 24.0484C19.5581 24.0536 19.5633 24.0634 19.5614 24.0686C18.9873 24.7283 18.4854 25.4387 17.5113 25.8141L17.1055 25.9764V32.9162H29.4844C30.1942 32.8779 30.6864 32.3863 30.9858 31.9013C31.2845 31.4168 31.4501 30.8921 31.5338 30.461C31.7494 29.3622 32.1423 26.1991 32.1423 26.1991L32.1631 26.1388V26.0777C32.1423 25.6387 31.9618 25.266 31.7364 24.9205L32.467 22.7497L33.6241 21.0042L33.9488 20.5373L33.5222 20.1522L29.261 16.4586L28.7941 16.0527ZM28.835 17.8385L32.2235 20.7814L31.3306 22.0997L31.2702 22.1614L31.2494 22.2627L30.6611 24.0075C30.3539 23.8809 30.0377 23.7919 29.687 23.8049H29.6461L25.5473 23.825H24.8979V26.3414C24.807 27.0492 24.4135 27.3232 23.9239 27.5187C23.7615 27.5842 23.7414 27.5485 23.5992 27.5791V23.8056C23.4927 21.3983 24.3498 20.7055 25.02 20.1931C25.2051 20.0509 25.7473 19.8866 26.5213 19.5236C27.1681 19.2191 27.972 18.6729 28.835 17.8385ZM22.3413 23.4192C22.3387 23.5666 22.2926 23.6705 22.3004 23.825V29.02H22.9498C22.9498 29.02 23.6446 29.0122 24.3908 28.7155C25.1362 28.4187 26.0369 27.7239 26.1967 26.5037V25.1238L29.687 25.1037H29.7071C29.9922 25.088 30.2718 25.186 30.4848 25.3761C30.6978 25.5662 30.8268 25.833 30.8435 26.118C30.8409 26.1284 30.8111 26.3693 30.8033 26.4225H28.1448V27.7213H30.6409C30.5721 28.2232 30.5091 28.5382 30.4377 29.02H28.1448V30.3187H30.2351C30.1583 30.6329 30.0351 30.9339 29.8695 31.2116C29.6922 31.5006 29.5396 31.6097 29.4032 31.6175H18.4042V26.7673C19.4568 26.2089 20.1114 25.4056 20.5348 24.9212C20.9738 24.4186 21.2751 24.038 21.5699 23.7848C21.7628 23.6198 22.0647 23.5257 22.3413 23.4192Z" fill="white"/>
</svg>

);

const BrainSVG = () => (
<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1.5" y="1.5" width="47" height="47" rx="23.5" fill="#074CA4"/>
<rect x="1.5" y="1.5" width="47" height="47" rx="23.5" stroke="white" stroke-width="3"/>
<path d="M27.5808 27.9845L28.5193 27.4417C29.588 26.8233 30.1219 26.5142 30.1934 26.0738C30.204 26.005 30.2073 25.9354 30.2034 25.866C30.1676 25.4226 29.6606 25.0806 28.6475 24.3966L23.968 21.2382C22.1299 19.9975 21.7073 17.7348 22.9978 16.0547M29.2112 18.5401C29.2112 18.9356 29.0541 19.3149 28.7744 19.5945C28.4948 19.8742 28.1155 20.0313 27.72 20.0313C27.3245 20.0313 26.9452 19.8742 26.6655 19.5945C26.3859 19.3149 26.2288 18.9356 26.2288 18.5401C26.2288 18.1446 26.3859 17.7653 26.6655 17.4856C26.9452 17.206 27.3245 17.0488 27.72 17.0488C28.1155 17.0488 28.4948 17.206 28.7744 17.4856C29.0541 17.7653 29.2112 18.1446 29.2112 18.5401Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.9679 21.2382C21.4825 23.7236 20.2637 30.6011 20.2637 33.9494M23.9679 21.2382C22.1297 19.9975 21.7072 17.7348 22.9976 16.0547M23.9679 21.2382L26.5984 23.0138M27.5806 27.9845L28.5191 27.4417C29.5878 26.8233 30.1217 26.5142 30.1933 26.0738C30.2038 26.005 30.2072 25.9354 30.2032 25.866C30.1674 25.4226 29.6604 25.0806 28.6474 24.3966L26.5994 23.0138C25.91 23.906 25.32 24.8707 24.8398 25.8908C24.4023 26.8124 24.1846 27.2727 24.2254 27.7996L21.2578 26.9904M28.2169 33.9494C27.2496 32.8211 26.2544 31.2652 25.2841 29.8316C24.6051 28.8276 24.2651 28.3245 24.2254 27.7986" stroke="white" stroke-width="1.49123" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);

const ToothSVG = () => (
  
<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1.5" y="1.5" width="47" height="47" rx="23.5" fill="#074CA4"/>
<rect x="1.5" y="1.5" width="47" height="47" rx="23.5" stroke="white" stroke-width="3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.522 23.5991V17.1055H33.6231V23.5991C33.6231 24.6286 33.9793 25.646 34.4219 26.6959C34.7319 27.4314 35 28.3282 35 29.2173C34.9994 30.5105 34.4192 31.3672 33.6534 31.8775C32.9179 32.3675 32.0447 32.5206 31.4209 32.5206C30.6684 32.5206 30.1729 32.3598 29.7539 32.1544C29.6245 32.0911 29.4913 32.0168 29.3746 31.9524C29.3232 31.9238 29.2757 31.8977 29.232 31.8742C29.0846 31.791 28.9298 31.7215 28.7696 31.6667C28.6187 31.616 28.2922 31.5808 27.8358 31.5736C27.402 31.567 26.9164 31.5857 26.4903 31.6105C26.024 31.6375 25.61 31.8032 25.103 32.0069C24.9488 32.0693 24.7837 32.1339 24.6075 32.2007C24.0845 32.3967 23.3891 32.5206 22.3371 32.5206C21.2453 32.5206 20.724 32.4578 20.3656 32.3042C20.2448 32.25 20.1295 32.1842 20.0215 32.1077C19.9885 32.0853 19.9549 32.0638 19.9207 32.0432C19.7622 32.1512 19.5881 32.2342 19.4043 32.2893C18.9529 32.4303 18.2157 32.5206 16.8317 32.5206C16.3593 32.5206 15.9541 32.4071 15.6381 32.1682C15.321 31.9276 15.1481 31.6023 15.0666 31.2802C14.9097 30.6663 15.0589 29.9914 15.2153 29.5746C15.2546 29.4697 15.325 29.3793 15.4171 29.3154C15.5092 29.2516 15.6185 29.2174 15.7306 29.2173H17.7401L18.0852 28.941C18.7266 28.4279 19.4561 28.0689 20.1955 27.8046C21.1495 27.4633 22.358 26.9403 23.4535 26.245C24.5238 25.5656 25.4355 24.753 25.9282 23.8292L26.4688 18.1542L27.5644 18.2588L27.0139 24.0395C27.0076 24.1069 26.9889 24.1726 26.9588 24.2333C26.3488 25.4527 25.2202 26.4277 24.0437 27.1748C22.8584 27.9274 21.5696 28.4824 20.566 28.8413C19.9053 29.078 19.2931 29.3847 18.7729 29.8003L18.4277 30.0773C18.2323 30.2335 17.9896 30.3185 17.7395 30.3184H16.144C16.0956 30.5573 16.0824 30.8095 16.133 31.0082C16.1683 31.1448 16.2266 31.2323 16.3026 31.2901C16.3808 31.3496 16.5338 31.4195 16.8317 31.4195C18.2003 31.4195 18.7938 31.3259 19.0762 31.2378C19.2006 31.1993 19.259 31.1624 19.303 31.1321L19.3207 31.1189C19.368 31.0825 19.4957 30.9857 19.6135 30.9273C19.744 30.8619 19.8951 30.851 20.0336 30.897C20.2924 30.9835 20.4548 31.0748 20.5863 31.1607L20.6788 31.2218C20.7344 31.2593 20.7548 31.273 20.7988 31.2918C20.9222 31.3446 21.2266 31.4195 22.3371 31.4195C23.3071 31.4195 23.8604 31.3044 24.221 31.1695C24.3394 31.1255 24.4649 31.0743 24.5965 31.0209C25.1283 30.8062 25.762 30.5496 26.4265 30.5111C26.9013 30.4816 27.3771 30.4687 27.8529 30.4726C28.3021 30.4797 28.7866 30.5111 29.1175 30.6217C29.3669 30.7049 29.5733 30.8073 29.7545 30.9047L29.9427 31.0082C30.0446 31.0649 30.1338 31.1145 30.2389 31.1662C30.5219 31.305 30.8522 31.4195 31.4209 31.4195C31.8983 31.4195 32.5385 31.2973 33.0423 30.9614C33.5157 30.646 33.8984 30.1257 33.8984 29.2173C33.8984 28.5325 33.6875 27.7892 33.4073 27.1236C32.9586 26.0589 32.522 24.8653 32.522 23.5991Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.5954 24.2637C30.7414 24.2637 30.8814 24.3217 30.9847 24.4249C31.0879 24.5282 31.1459 24.6682 31.1459 24.8142V24.8263L31.1454 24.8483C31.1454 24.8656 31.1443 24.8889 31.1421 24.9183C31.1185 25.2581 31.0525 25.5936 30.9455 25.9169C30.7473 26.5137 30.3377 27.2625 29.502 27.764C29.3767 27.8391 29.2267 27.8614 29.085 27.8259C28.9433 27.7905 28.8215 27.7002 28.7464 27.5749C28.6713 27.4496 28.649 27.2996 28.6844 27.1579C28.7199 27.0162 28.8102 26.8944 28.9355 26.8193C29.4767 26.495 29.7558 26.005 29.9011 25.5696C29.9776 25.3383 30.0253 25.0984 30.0432 24.8555L30.0448 24.8181V24.8115C30.0456 24.6659 30.1039 24.5266 30.2071 24.4239C30.3102 24.3213 30.4498 24.2637 30.5954 24.2637Z" fill="white"/>
</svg>

);

/* ================= MAIN COMPONENT ================= */

const HealthcareRecruitment = () => {
  const cards: RecruitmentCard[] = [
    {
      iconSvg: <StethoscopeSVG />,
      title: 'General Practice & Medical',
      description:
        'Recruitment for general practitioners, specialists, and hospital-based roles.',
      iconBgColor: 'bg-blue-600',
      coverImage: Gpm,
    },
    {
      iconSvg: <UsersSVG />,
      title: 'Allied Health',
      description:
        'Opportunities and hiring solutions across physiotherapy, occupational therapy, speech pathology, and more.',
      iconBgColor: 'bg-blue-700',
      coverImage: Ahp,
    },
    {
      iconSvg: <BrainSVG />,
      title: 'Mental Health',
      description:
        'Supporting workforce needs across psychiatry, psychology, and community mental health services.',
      iconBgColor: 'bg-slate-700',
      coverImage: MH,
    },
    {
      iconSvg: <ToothSVG />,
      title: 'Dental & Oral Health',
      description:
        'Connecting dental professionals with clinics and specialist practices across Australia.',
      iconBgColor: 'bg-gray-700',
      coverImage: doh,
    },
  ];

  return (
    <div className="w-full bg-white px-6 py-12 lg:px-0">
      {/* Top Title */}
      <div className="flex items-center gap-8 mb-16">
        <div className="flex-grow h-px bg-gray-300"></div>
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 whitespace-nowrap">
          For JobSeekers
        </h1>
      </div>

      {/* Header */}
      <div className="mb-12">
        <p className="text-sm text-gray-600 mb-2 font-medium">
          Explore by divisions
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Specialised recruitment across key healthcare sectors
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl">
          Each healthcare discipline has unique workforce needs. Medfuture delivers recruitment
          solutions aligned to clinical scope, service models, and patient care requirements.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col bg-white rounded-lg shadow-sm overflow-hidden h-full">
            
            {/* Image */}
            <div className="relative h-40 w-full">
              <Image
                src={card.coverImage}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-0">
              
              {/* Icon */}
              <div className="flex items-center gap-3 mb-3 -mt-8 relative z-10">
                <div className={`${card.iconBgColor} rounded-full shadow-md`}>
                  {card.iconSvg}
                </div>
              </div>

              <div className="px-4 flex-1 flex flex-col">
                {/* Title */}
                <h3 className="text-[16px] font-bold text-[#0F172A] mb-2">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] text-[#4A5565] mb-4 flex-grow">
                  {card.description}
                </p>
              </div>

              {/* Button */}
              <button className="w-full bg-[#074CA4] hover:bg-blue-800 text-white font-semibold py-3 rounded">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthcareRecruitment;