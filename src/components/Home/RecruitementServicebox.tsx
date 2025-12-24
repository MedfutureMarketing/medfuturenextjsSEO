import Image from "next/image";
import Link from "next/link";
<<<<<<< HEAD
import MedfutureIcon from "@/assets/icons/Medfuture.webp";

export default function ExclusiveRecruitmentServices() {
  return (
    <section className="w-full lg:py-[140px] py-10 px-4 lg:px-0">
      <div className="max-w-screen-2xl mx-auto">

        <div className="w-full bg-white rounded-sm shadow-[0_0_30px_rgba(0,0,0,0.15)] hover:shadow-[0_0_28px_rgba(0,0,0,0.15)] transition-shadow flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 p-8 lg:p-12">
        
=======
import MedfutureIcon from "@/assets/icons/Medfuture.png";

export default function ExclusiveRecruitmentServices() {
  return (
    <section className="w-full py-[140px] px-4 lg:px-0">
      <div className="max-w-screen-2xl mx-auto">

        <div className="w-full bg-white border shadow-md rounded-sm flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 p-8 lg:p-12 hover:shadow-lg transition-shadow">
          {/* Left: Icon + Text */}
>>>>>>> 0624cd8599da62fbfb6e101042b25e3d0aa75471
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

<<<<<<< HEAD
              <p className="text-gray-600  lg:text-[16px] text-xs mt-2 max-w-2xl">
=======
              <p className="text-gray-600 text-base lg:text-lg mt-2 max-w-2xl">
>>>>>>> 0624cd8599da62fbfb6e101042b25e3d0aa75471
                Access dedicated healthcare recruitment solutions tailored to
                your organisation’s needs with priority support and specialised expertise.
              </p>
            </div>
          </div>
<<<<<<< HEAD
        
          <Link
            href="/contact"
            className=" lg:mt-0 bg-[#074CA4] lg:w-[209px] lg:h-[56px] text-center  text-white  lg:text-[16px] text-sm px-6 lg:px-8  lg:py-[16px] py-3 rounded-[4px] hover:bg-[#093055]"
=======
          {/* Right: Button */}
          <Link
            href="/contact"
            className=" lg:mt-0 bg-[#074CA4] w-[209px] h-[56px] text-center  text-white text-[16px] lg:text-base px-6 lg:px-8  py-[16px] rounded-sm hover:bg-[#093055] transition-all whitespace-nowrap"
>>>>>>> 0624cd8599da62fbfb6e101042b25e3d0aa75471
          >
            Reach Us
          </Link>
        </div>
      </div>
    </section>
  );
}
