// components/JobDescription.tsx
import RegistrationForm from '@/components/Forms/QuickApply';


export default function JobDescription() {
  return (
    <div className="mt-4">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6 shadow-[0_6px_6px_rgba(0,0,0,0.05)] p-4 sm:p-6 rounded-lg bg-white">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 text-center sm:text-left">
          GP Registrar – Aged Care | AUD 160 per hour | DPA MMM6 | Condobolin
        </h1>
        <button className="bg-[#64CAF3] text-white px-6 py-3 rounded-lg hover:bg-[#64CAF3] transition-colors font-medium whitespace-nowrap w-full sm:w-auto">
          Apply Now
        </button>
      </div>

      {/* Job Tags */}
      <div className="flex flex-wrap gap-3 mt-5 mb-4 p-3">
        <span className="text-[#0E2851] text-sm sm:text-[18px] px-3 py-1 rounded flex items-center gap-2 bg-gray-50">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_23854_3969)">
              <path d="M8.25525 15.75H7.20375C4.515 15.75 3.171 15.75 2.3355 14.8987C1.5 14.0475 1.5 12.6773 1.5 9.9375C1.5 7.19775 1.5 5.8275 2.3355 4.97625C3.171 4.125 4.515 4.125 7.20375 4.125H10.056C12.7448 4.125 14.0895 4.125 14.925 4.97625C15.5677 5.631 15.7155 6.59325 15.75 8.25" stroke="url(#paint0_linear_23854_3969)" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 4.125L11.925 3.8925C11.5537 2.7375 11.3685 2.16 10.9267 1.83C10.4842 1.5 9.89775 1.5 8.7225 1.5H8.52525C7.3515 1.5 6.76425 1.5 6.3225 1.83C5.88 2.16 5.69475 2.7375 5.3235 3.8925L5.25 4.125M12.8332 9.94125C12.972 9.81375 13.041 9.75 13.125 9.75C13.209 9.75 13.278 9.81375 13.4167 9.94125L13.9515 10.434C14.016 10.4932 14.0482 10.5233 14.088 10.5375C14.1285 10.5525 14.172 10.551 14.2605 10.5472L14.982 10.5187C15.168 10.5112 15.261 10.5082 15.3247 10.5615C15.3885 10.6147 15.4012 10.707 15.426 10.8915L15.525 11.631C15.537 11.7165 15.5422 11.7585 15.5632 11.796C15.5842 11.832 15.618 11.8582 15.6855 11.9115L16.2675 12.369C16.4115 12.483 16.4835 12.5392 16.4977 12.6202C16.512 12.7012 16.4632 12.7792 16.3672 12.9352L15.9727 13.5705C15.9277 13.6432 15.9052 13.68 15.8977 13.7205C15.8902 13.761 15.8992 13.8038 15.9172 13.8878L16.074 14.6213C16.1115 14.8013 16.131 14.8913 16.0897 14.9633C16.0485 15.0353 15.9607 15.0637 15.786 15.1207L15.0915 15.3465C15.009 15.3735 14.967 15.387 14.9347 15.414C14.9025 15.4418 14.8822 15.4807 14.8425 15.558L14.5035 16.2112C14.4172 16.3785 14.3737 16.4617 14.295 16.4902C14.2162 16.5187 14.13 16.4828 13.956 16.4108L13.29 16.1348C13.2082 16.101 13.1677 16.0837 13.125 16.0837C13.0822 16.0837 13.0417 16.101 12.96 16.1348L12.294 16.4108C12.12 16.4828 12.0337 16.5187 11.955 16.4902C11.8762 16.4617 11.8327 16.3777 11.7465 16.2112L11.4075 15.558C11.367 15.4807 11.3475 15.4417 11.3152 15.4147C11.283 15.3877 11.241 15.3735 11.1585 15.3472L10.464 15.1207C10.2892 15.0637 10.2015 15.0353 10.1602 14.9633C10.119 14.8913 10.1377 14.802 10.176 14.6213L10.3335 13.8878C10.3507 13.8038 10.3597 13.7618 10.3522 13.7213C10.3369 13.667 10.3114 13.6161 10.2772 13.5712L9.8835 12.9352C9.786 12.7792 9.738 12.7012 9.75225 12.6202C9.7665 12.5392 9.8385 12.483 9.9825 12.3698L10.5645 11.9123C10.632 11.8583 10.6657 11.832 10.6867 11.7953C10.7077 11.7585 10.713 11.7165 10.7242 11.6302L10.824 10.8915C10.8487 10.7078 10.8615 10.6147 10.9252 10.5615C10.989 10.5082 11.082 10.5112 11.268 10.5187L11.9902 10.5472C12.078 10.551 12.1215 10.5525 12.162 10.5375C12.2017 10.5225 12.234 10.4932 12.2985 10.434L12.8332 9.94125Z" stroke="url(#paint1_linear_23854_3969)" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <linearGradient id="paint0_linear_23854_3969" x1="8.625" y1="4.125" x2="8.625" y2="15.75" gradientUnits="userSpaceOnUse">
                <stop stop-color="#20A0E2" />
                <stop offset="1" stop-color="#1290D1" />
              </linearGradient>
              <linearGradient id="paint1_linear_23854_3969" x1="10.8751" y1="1.5" x2="10.8751" y2="16.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#20A0E2" />
                <stop offset="1" stop-color="#1290D1" />
              </linearGradient>
              <clipPath id="clip0_23854_3969">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Permanent
        </span>
        <span className="text-[#0E2851] text-sm sm:text-[18px] px-3 py-1 rounded flex items-center gap-2 bg-gray-50">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1667 6.66667C14.1667 8.96792 12.3012 10.8333 10 10.8333C7.69875 10.8333 5.83333 8.96792 5.83333 6.66667C5.83333 4.36542 7.69875 2.5 10 2.5C12.3012 2.5 14.1667 4.36542 14.1667 6.66667ZM13.3333 6.66667C13.3333 7.55072 12.9821 8.39857 12.357 9.02369C11.7319 9.64881 10.8841 10 10 10C9.11594 10 8.2681 9.64881 7.64298 9.02369C7.01786 8.39857 6.66667 7.55072 6.66667 6.66667C6.66667 5.78261 7.01786 4.93477 7.64298 4.30964C8.2681 3.68452 9.11594 3.33333 10 3.33333C10.8841 3.33333 11.7319 3.68452 12.357 4.30964C12.9821 4.93477 13.3333 5.78261 13.3333 6.66667ZM7.46417 12.0229L7.46875 12.0321L7.5 12.0933H12.3954C12.4908 11.9125 12.7071 11.6242 12.9167 11.6721C13.3875 11.7792 13.8617 11.9283 14.3171 12.1121L14.3308 12.1054L14.3354 12.1146L14.3387 12.1208C16.0533 12.8175 17.5 13.9983 17.5 15.2375V17.5H2.5V15.2375C2.5 13.6646 4.83167 12.1846 7.08333 11.6721C7.26708 11.6304 7.37625 11.8471 7.46417 12.0229ZM13.6267 12.7429C13.448 12.6802 13.2672 12.6237 13.0846 12.5733L12.8988 12.9267H6.99708L6.82458 12.5987L6.67458 12.6437C6.67153 12.671 6.66931 12.7021 6.66792 12.7371C6.6625 12.8808 6.67333 13.0512 6.69708 13.2246C6.7213 13.4054 6.76032 13.5839 6.81375 13.7583C7.10644 13.793 7.37747 13.93 7.57897 14.1451C7.78046 14.3602 7.89946 14.6396 7.91495 14.9339C7.93045 15.2283 7.84143 15.5186 7.66364 15.7537C7.48584 15.9888 7.23069 16.1535 6.94325 16.2187C6.65582 16.2839 6.35458 16.2454 6.09274 16.1101C5.83091 15.9748 5.62531 15.7513 5.51227 15.4791C5.39923 15.2069 5.38601 14.9035 5.47495 14.6225C5.56389 14.3415 5.74926 14.1009 5.99833 13.9433L5.995 13.9317C5.93936 13.7369 5.898 13.5383 5.87125 13.3375C5.85358 13.2092 5.8419 13.0802 5.83625 12.9508C5.32125 13.1708 4.84083 13.4367 4.43833 13.73C3.6375 14.315 3.33333 14.8617 3.33333 15.2375V16.6667H16.6667V15.2375C16.6667 14.8612 16.3625 14.3146 15.5617 13.7304C15.2124 13.4794 14.8405 13.2615 14.4508 13.0796C14.4338 13.3054 14.3992 13.5295 14.3475 13.75H14.5833C14.6607 13.75 14.7365 13.7716 14.8023 13.8123C14.8681 13.853 14.9213 13.9112 14.9558 13.9804L15.3725 14.8138C15.4017 14.8717 15.4167 14.9354 15.4167 15V15.8333C15.4167 15.9438 15.3728 16.0498 15.2946 16.128C15.2165 16.2061 15.1105 16.25 15 16.25H14.1667V15.4167H14.5833V15.0983L14.3258 14.5833H13.1742L12.9167 15.0983V15.4167H13.3333V16.25H12.5C12.3895 16.25 12.2835 16.2061 12.2054 16.128C12.1272 16.0498 12.0833 15.9438 12.0833 15.8333V15C12.0833 14.9354 12.0983 14.8717 12.1275 14.8138L12.5442 13.9804C12.5787 13.9112 12.6319 13.853 12.6977 13.8123C12.7635 13.7716 12.8393 13.75 12.9167 13.75H13.4842L13.4996 13.6983C13.5387 13.5646 13.5737 13.3983 13.5975 13.225C13.6208 13.0533 13.6317 12.8854 13.6267 12.7429ZM7.08333 15C7.08333 15.2392 6.89083 15.4229 6.66667 15.4229C6.4425 15.4229 6.25 15.2396 6.25 15C6.25 14.7608 6.4425 14.5771 6.66667 14.5771C6.89083 14.5771 7.08333 14.7604 7.08333 15Z" fill="url(#paint0_linear_23854_3974)" />
            <defs>
              <linearGradient id="paint0_linear_23854_3974" x1="10" y1="2.5" x2="10" y2="17.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#20A0E2" />
                <stop offset="1" stop-color="#1290D1" />
              </linearGradient>
            </defs>
          </svg>
          Medical Practitioner
        </span>
        <span className="text-[#0E2851] text-sm sm:text-[18px] px-3 py-1 rounded flex items-center gap-2 bg-gray-50">
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.75 11.875V15.4375H16.625V7.125H14.25V5.9375H17.0513C17.3161 5.9375 17.4123 5.96481 17.5085 6.01706C17.6046 6.06747 17.6832 6.14569 17.7341 6.2415C17.7852 6.33769 17.8125 6.43387 17.8125 6.69869V15.8638C17.8125 16.1286 17.7852 16.2248 17.7329 16.321C17.6825 16.4171 17.6043 16.4957 17.5085 16.5466C17.4123 16.5977 17.3161 16.625 17.0513 16.625H4.32369C4.05888 16.625 3.96269 16.5977 3.8665 16.5454C3.77042 16.495 3.69179 16.4168 3.64087 16.321C3.591 16.2248 3.5625 16.1286 3.5625 15.865V11.875H4.75Z" fill="url(#paint0_linear_23854_3977)" />
            <path d="M14.25 3.5625H2.375V11.875H14.25V3.5625ZM15.4375 3.13619V12.3013C15.4375 12.5661 15.4102 12.6623 15.3579 12.7585C15.3075 12.8546 15.2293 12.9332 15.1335 12.9841C15.0373 13.0352 14.9411 13.0625 14.6763 13.0625H1.94869C1.68388 13.0625 1.58769 13.0352 1.4915 12.9829C1.39542 12.9325 1.31679 12.8543 1.26587 12.7585C1.216 12.6623 1.1875 12.5661 1.1875 12.3025V3.13619C1.1875 2.87138 1.21481 2.77519 1.26706 2.679C1.31747 2.58292 1.39569 2.50429 1.4915 2.45337C1.58769 2.4035 1.68387 2.375 1.9475 2.375H14.6751C14.9399 2.375 15.0361 2.40231 15.1323 2.45456C15.2284 2.50497 15.307 2.58319 15.3579 2.679C15.409 2.77519 15.4363 2.87138 15.4363 3.13619H15.4375Z" fill="url(#paint1_linear_23854_3977)" />
            <path d="M8.3125 10.6875C7.52514 10.6875 6.77003 10.3747 6.21328 9.81797C5.65653 9.26122 5.34375 8.50611 5.34375 7.71875C5.34375 6.93139 5.65653 6.17628 6.21328 5.61953C6.77003 5.06278 7.52514 4.75 8.3125 4.75C9.09986 4.75 9.85497 5.06278 10.4117 5.61953C10.9685 6.17628 11.2812 6.93139 11.2812 7.71875C11.2812 8.50611 10.9685 9.26122 10.4117 9.81797C9.85497 10.3747 9.09986 10.6875 8.3125 10.6875ZM8.3125 9.5C8.78492 9.5 9.23798 9.31233 9.57203 8.97828C9.90608 8.64423 10.0938 8.19117 10.0938 7.71875C10.0938 7.24633 9.90608 6.79327 9.57203 6.45922C9.23798 6.12517 8.78492 5.9375 8.3125 5.9375C7.84008 5.9375 7.38702 6.12517 7.05297 6.45922C6.71892 6.79327 6.53125 7.24633 6.53125 7.71875C6.53125 8.19117 6.71892 8.64423 7.05297 8.97828C7.38702 9.31233 7.84008 9.5 8.3125 9.5Z" fill="url(#paint2_linear_23854_3977)" />
            <defs>
              <linearGradient id="paint0_linear_23854_3977" x1="10.6875" y1="5.9375" x2="10.6875" y2="16.625" gradientUnits="userSpaceOnUse">
                <stop stop-color="#20A0E2" />
                <stop offset="1" stop-color="#1290D1" />
              </linearGradient>
              <linearGradient id="paint1_linear_23854_3977" x1="8.3125" y1="2.375" x2="8.3125" y2="13.0625" gradientUnits="userSpaceOnUse">
                <stop stop-color="#20A0E2" />
                <stop offset="1" stop-color="#1290D1" />
              </linearGradient>
              <linearGradient id="paint2_linear_23854_3977" x1="8.3125" y1="4.75" x2="8.3125" y2="10.6875" gradientUnits="userSpaceOnUse">
                <stop stop-color="#20A0E2" />
                <stop offset="1" stop-color="#1290D1" />
              </linearGradient>
            </defs>
          </svg>
          AUD 160/Hour
        </span>
        <span className="text-[#0E2851] text-sm sm:text-[18px] px-3 py-1 rounded flex items-center gap-2 bg-gray-50">
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 2.375C5.56641 2.375 2.375 5.56641 2.375 9.5C2.375 13.4336 5.56641 16.625 9.5 16.625C13.4336 16.625 16.625 13.4336 16.625 9.5C16.625 5.56641 13.4336 2.375 9.5 2.375Z" stroke="url(#paint0_linear_23854_3982)" stroke-miterlimit="10" />
            <path d="M9.5 4.75V10.0938H13.0625" stroke="url(#paint1_linear_23854_3982)" stroke-linecap="round" stroke-linejoin="round" />
            <defs>
              <linearGradient id="paint0_linear_23854_3982" x1="9.5" y1="2.375" x2="9.5" y2="16.625" gradientUnits="userSpaceOnUse">
                <stop stop-color="#20A0E2" />
                <stop offset="1" stop-color="#1290D1" />
              </linearGradient>
              <linearGradient id="paint1_linear_23854_3982" x1="11.2812" y1="4.75" x2="11.2812" y2="10.0938" gradientUnits="userSpaceOnUse">
                <stop stop-color="#20A0E2" />
                <stop offset="1" stop-color="#1290D1" />
              </linearGradient>
            </defs>
          </svg>
          Full Time Or Part Time
        </span>
      </div>

      {/* Job Description */}
      <div className="prose max-w-none p-4 sm:p-6">
        <div>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            We are seeking a committed GP Registrar to work in Condobolin, NSW. In this role, you will provide comprehensive aged care services to the local community. Enjoy appealing benefits, including competitive pay, support with travel and accommodation, and opportunities for career development. Apply today to work in a welcoming and fulfilling environment.
          </p>
          <h4 className=" text-gray-900 mb-2 text-base sm:text-lg">Offer Details:</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4 text-sm sm:text-base">
            <li>Permanent position</li>
            <li>Full-time or part-time engagement</li>
            <li>80% of billings or AUD 200 per hour for the first 3 months</li>
            <li>Sign-on bonus potential</li>
          </ul>
        </div>
        <div>
          <h3 className=" text-gray-900 mb-3 text-base sm:text-lg">Medical Practice Details</h3>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            Located in New South Wales, this facility offers a wide range of healthcare services to support the local community. Services include GP care for aged care residents, drug and alcohol programs, pre-employment and diving medicals, along with specialised health assessments for aviation, asbestos exposure, and the mining industry. Condobolin has amenities such as parks, recreational areas, and a variety of dining and shopping options, making it a great place to live and work.
          </p>
          <h4 className=" text-gray-900 mb-2 text-base sm:text-lg">Eligibility Requirements</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
            <li>Should hold General registration with AHPRA</li>
            <li>GP Registrar or Non VR GP with General Registration</li>
            <li>Unlimited working rights in Australia</li>
          </ul>
        </div>
      </div>

      {/* Contact Information */}
      {/* Contact Information */}
      <div className="grid lg:grid-cols-2">
        <div><RegistrationForm /></div>
        <div className="mb-3 p-4 sm:p-6 gap-4 mt-24">
          <h3 className="text-black text-[18px] mb-6">Contact Us</h3>
          <div className="flex flex-wrap items-center gap-1 mb-4">
            <span className="flex-shrink-0">
            </span>
            <div className="flex flex-wrap items-center gap-1">
              <h3 className=" text-gray-900 text-sm sm:text-base">Recruitment Consultant:</h3>
              <h3 className=" text-gray-900 text-sm sm:text-base">Gaya</h3>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-1 mb-4">
            <span className="flex-shrink-0">
            </span>
            <div className="flex flex-wrap items-center gap-1">
              <h3 className=" text-gray-900 text-sm sm:text-base">Contact Number:</h3>
              <h3 className=" text-gray-900 text-sm sm:text-base">0452 468 515</h3>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-1 mb-4">
            <span className="flex-shrink-0">
            </span>
            <div className="flex flex-wrap items-center gap-1">
              <h3 className=" text-gray-900 text-sm sm:text-base">Email:</h3>
              <h3 className=" text-gray-900 text-sm sm:text-base break-all">gprecruitment@medfuture.com.au</h3>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-1 mb-0">
            <span className="flex-shrink-0">
            </span>
            <div className="flex flex-wrap items-center gap-1">
              <h3 className=" text-gray-900 text-sm sm:text-base">General Enquire:</h3>
              <h3 className=" text-gray-900 text-sm sm:text-base">0452 468 515</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}