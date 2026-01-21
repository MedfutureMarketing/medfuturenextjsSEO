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
                            <li><Link href="/about-us" className="hover:text-[#074CA4]">About us</Link></li>
                            <li>
                                <a
                                    href="https://themedfuture.com/blog"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#074CA4]"
                                >
                                    Blogs
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://intuit7.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#074CA4]"
                                >
                                    Visa & Migration Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://themedfuture.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#074CA4]"
                                >
                                    Medfuture Global
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://medfuture.co.nz/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#074CA4]"
                                >
                                    Medfuture New Zealand
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <p className="text-gray-300 text-sm mb-2">+61 1300 633 388</p>
                        <p className="text-gray-300 text-sm mb-2">+61 452 668 811</p>

                        <p className="text-gray-300 text-sm mb-2">Email:notify@themedfuture.com</p>
                        <p className="text-gray-300 text-sm">Phone:+61 1300 633 388</p>
                    </div>
                </div>

                {/* Bottom Row: Copyright + Social Media */}
                <div className="border-t  inner-width-section border-gray-700  mt-5 py-4  flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm  md:mb-0 ">
                        &copy; {new Date().getFullYear()} Medfuture. All rights reserved. <Link href="/privacy-policy" className="hover:text-[#074CA4] px-2">Privacy Policy</Link><Link href="/terms-and-conditions" className="hover:text-[#074CA4] px-2">Terms And Conditions</Link>
                    </p>

                    <div className="flex gap-4">
                        <Link href="https://www.facebook.com/medfutureaustralia/" className="text-gray-400 hover:text-[#074CA4]" target="_blank"
                            rel="noopener noreferrer">
                            <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.2969 12.305C25.2969 5.50895 19.6343 0 12.65 0C5.66264 0.00152857 0 5.50896 0 12.3065C0 18.4467 4.6256 23.5369 10.6708 24.4601V15.8619H7.46166V12.3065H10.674V9.59328C10.674 6.51017 12.5631 4.80734 15.4513 4.80734C16.8362 4.80734 18.2826 5.04733 18.2826 5.04733V8.07389H16.6876C15.1178 8.07389 14.6277 9.02313 14.6277 9.99683V12.305H18.134L17.5744 15.8604H14.6261V24.4586C20.6713 23.5353 25.2969 18.4452 25.2969 12.305Z" fill="#EBEDEF" fill-opacity="0.89" />
                            </svg>
                        </Link>
                        <Link href="https://www.instagram.com/medfutureglobal/?hl=en" className="text-gray-400 hover:text-[#074CA4]" target="_blank"
                            rel="noopener noreferrer">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.9368 14.706C14.19 14.706 15.2158 13.719 15.2158 12.5024C15.2158 12.0236 15.0541 11.579 14.7863 11.2174C14.3719 10.6653 13.6998 10.2989 12.9419 10.2989C12.1839 10.2989 11.5119 10.6604 11.0975 11.2174C10.8297 11.579 10.668 12.0236 10.668 12.5024C10.6629 13.719 11.6837 14.706 12.9368 14.706Z" fill="#EBEDEF" fill-opacity="0.89" />
                                <path d="M17.9108 9.81612V7.96923V7.69562H17.6278L15.7178 7.7005L15.7279 9.821L17.9108 9.81612Z" fill="#EBEDEF" fill-opacity="0.89" />
                                <path d="M16.4733 12.5087C16.4733 14.3947 14.8866 15.9289 12.9361 15.9289C10.9856 15.9289 9.39897 14.3947 9.39897 12.5087C9.39897 12.0543 9.49498 11.6195 9.66173 11.2237H7.73145V16.3442C7.73145 17.0038 8.28729 17.5412 8.96945 17.5412H16.9028C17.585 17.5412 18.1408 17.0038 18.1408 16.3442V11.2237H16.2105C16.3823 11.6195 16.4733 12.0543 16.4733 12.5087Z" fill="#EBEDEF" fill-opacity="0.89" />
                                <path d="M12.9359 0C5.79085 0 0 5.59929 0 12.508C0 19.4167 5.79085 25.016 12.9359 25.016C20.081 25.016 25.8718 19.4167 25.8718 12.508C25.8718 5.59929 20.081 0 12.9359 0ZM19.4039 11.223V16.3435C19.4039 17.6773 18.2821 18.762 16.9026 18.762H8.96924C7.58975 18.762 6.46796 17.6773 6.46796 16.3435V11.223V8.66766C6.46796 7.3338 7.58975 6.24912 8.96924 6.24912H16.9026C18.2821 6.24912 19.4039 7.3338 19.4039 8.66766V11.223Z" fill="#EBEDEF" fill-opacity="0.89" />
                            </svg>
                        </Link>
                        <Link href="https://www.linkedin.com/company/medfuture-pty-ltd./" className="text-gray-400 hover:text-[#074CA4]" target="_blank"
                            rel="noopener noreferrer">
                            <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6485 0C5.66216 0 0 5.47486 0 12.2301C0 18.9853 5.66216 24.4601 12.6485 24.4601C19.6348 24.4601 25.2969 18.9853 25.2969 12.2301C25.2969 5.47486 19.6348 0 12.6485 0ZM9.11084 17.3466H6.64538V9.71716H9.11084V17.3466ZM7.81141 8.76169H7.79165C6.89736 8.76169 6.31929 8.17885 6.31929 7.43836C6.31929 6.68354 6.91713 6.11503 7.82623 6.11503C8.73534 6.11503 9.29365 6.68354 9.31342 7.43836C9.31836 8.17408 8.74028 8.76169 7.81141 8.76169ZM18.9727 17.3466H16.1762V13.4005C16.1762 12.3686 15.7414 11.6616 14.7779 11.6616C14.0418 11.6616 13.6317 12.1393 13.4439 12.5979C13.3748 12.7603 13.3846 12.9897 13.3846 13.2238V17.3466H10.6128C10.6128 17.3466 10.6474 10.3526 10.6128 9.71716H13.3846V10.9163C13.5477 10.3908 14.4321 9.6455 15.8452 9.6455C17.5991 9.6455 18.9727 10.7443 18.9727 13.1043V17.3466Z" fill="#EBEDEF" fill-opacity="0.89" />
                            </svg>
                        </Link>
                        <Link href="https://www.youtube.com/@TheMedfuture" className="text-gray-400 hover:text-[#074CA4]" target="_blank"
                            rel="noopener noreferrer">
                            <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_829_14503)">
                                    <path d="M11.1562 14.5907L15.2415 12.2392L11.1562 9.8877V14.5907Z" fill="#EBEDEF" fill-opacity="0.89" />
                                    <path d="M12.8159 0C5.92266 0 0.335938 5.47732 0.335938 12.2356C0.335938 18.9938 5.92266 24.4711 12.8159 24.4711C19.7091 24.4711 25.2958 18.9938 25.2958 12.2356C25.2958 5.47732 19.7091 0 12.8159 0ZM19.0558 14.4246C19.0558 16.5323 16.906 16.5323 16.906 16.5323H8.72577C6.5759 16.5323 6.5759 14.4246 6.5759 14.4246V10.0513C6.5759 7.94355 8.72577 7.94355 8.72577 7.94355H16.906C19.0558 7.94355 19.0558 10.0513 19.0558 10.0513V14.4246Z" fill="#EBEDEF" fill-opacity="0.89" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_829_14503">
                                        <rect width="25.2969" height="24.4711" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </Link>
                    </div>
                </div></div>
        </footer>
    );
}
