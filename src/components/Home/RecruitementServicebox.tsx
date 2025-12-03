import Image from "next/image";
import Link from "next/link";
import MedfutureIcon from "@/assets/icons/Medfuture.png";

export default function ExclusiveRecruitmentServices() {
  return (
    <section className="w-full py-[140px] px-4 lg:px-0">
      <div className="max-w-screen-2xl mx-auto">

        <div className="w-full bg-white border shadow-md rounded-sm flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 p-8 lg:p-12 hover:shadow-lg transition-shadow">
          {/* Left: Icon + Text */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-[60px]">
            <Image
              src={MedfutureIcon}
              width={93}
              height={46}
              alt="Exclusive Recruitment"
              className="object-contain"
            />

            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-4xl font-bold text-[#0A2E5C]">
                Exclusive Recruitment Services
              </h3>

              <p className="text-gray-600 text-base lg:text-lg mt-2 max-w-2xl">
                Access dedicated healthcare recruitment solutions tailored to
                your organisation’s needs with priority support and specialised expertise.
              </p>
            </div>
          </div>
          {/* Right: Button */}
          <Link
            href="/contact"
            className=" lg:mt-0 bg-[#074CA4] w-[209px] h-[56px] text-center  text-white text-[16px] lg:text-base px-6 lg:px-8  py-[16px] rounded-sm hover:bg-[#093055] transition-all whitespace-nowrap"
          >
            Reach Us
          </Link>
        </div>
      </div>
    </section>
  );
}
