import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo/medfuture-white.webp"; // replace with your logo path
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full full-width-section bg-[#0D1A3E] text-white px-4 lg:px-0 ">
            <div className="inner-width-section">
            <div className="  mx-auto grid grid-cols-1  py-[88px] mb-[70px] md:grid-cols-4 gap-10 ">

                {/* Column 1: Logo + Description */}
                <div>
                    <Image src={logo} alt="Logo" width={150} height={50} className="mb-4" />
                    <p className="text-gray-300 text-sm">
                        Australia’s trusted medical recruitment partner connecting healthcare professionals with rewarding roles across the globe.
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">For Employers</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li><Link href="/" className="hover:text-[#074CA4]">Talent Acquisition Solutions</Link></li>
                        <li><Link href="/about" className="hover:text-[#074CA4]">Submit a Vacancy</Link></li>
                        <li><Link href="/jobs" className="hover:text-[#074CA4]">Employer Recourses</Link></li>
                        <li><Link href="/contact" className="hover:text-[#074CA4]">Locum Candidate Calender</Link></li>
                    </ul>
                </div>

                {/* Column 3: Services */}
                <div className="">
                    <h4 className="text-lg font-semibold mb-4">Explore</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li><Link href="/recruitment" className="hover:text-[#074CA4]">About us</Link></li>
                        <li><Link href="/consulting" className="hover:text-[#074CA4]">Blogs</Link></li>
                        <li><Link href="/job-seeker-support" className="hover:text-[#074CA4]">Visa & Migration Services</Link></li>
                        <li><Link href="/employer-solutions" className="hover:text-[#074CA4]">Medfuture Global</Link></li>
                        <li><Link href="/employer-solutions" className="hover:text-[#074CA4]">Medfuture New Zealand</Link></li>

                    </ul>
                </div>

                {/* Column 4: Contact Info */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                    <p className="text-gray-300 text-sm mb-2">1300 633 388</p>
                    <p className="text-gray-300 text-sm mb-2">1300 633 388</p>

                    <p className="text-gray-300 text-sm mb-2">Email:notify@themedfuture.com</p>
                    <p className="text-gray-300 text-sm">Phone:+61 1300 633 388</p>
                </div>
            </div>

            {/* Bottom Row: Copyright + Social Media */}
            <div className="border-t  inner-width-section border-gray-700  mt-5  flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm  md:mb-0">
                    &copy; {new Date().getFullYear()} medfuture. All rights reserved.
                </p>
                <div className="flex gap-4">
                    {/* <Link href="#" className="text-gray-400 hover:text-[#074CA4]"><FaFacebookF /></Link>
          <Link href="#" className="text-gray-400 hover:text-[#074CA4]"><FaTwitter /></Link>
          <Link href="#" className="text-gray-400 hover:text-[#074CA4]"><FaLinkedinIn /></Link> 
          <Link href="#" className="text-gray-400 hover:text-[#074CA4]"><FaInstagram /></Link> */} logos here social icons
                </div>
            </div></div>
        </footer>
    );
}
