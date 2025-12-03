


import Link from "next/link";
export default function JobsbyProfession() {
    return (
        <section className="w-full  py-[106px] px-4 lg:px-0 full-width-section">
            <div className="inner-width-section">
                <div className="max-w-screen-2xl mx-auto text-left mb-12 ">
                    <h2 className="text-3xl lg:text-[40px] font-Inter  text-gray-800 mb-4">
                        Find Jobs by <span className="text-[#074CA4] font-bold"> Professions</span>
                    </h2>
                    <p className="text-gray-600 text-lg lg:text-[16px]  max-w-2xl ">
                        Discover healthcare roles for your profession. Browse opportunities for doctors, allied health, dental experts, and more. Find positions matching your skills and career goals across Australia. </p>
                </div>
                {/* Top Grid: 3 Cards */}
                <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

                    <div className="bg-white rounded-lg border shadow-lg flex flex-col text-left px-7 py-6">
                        {/* Header with title + button */}
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-semibold text-[#0A2E5C]">Medical Practitioner</h3>
                            <Link
                                href="/jobs/medical-practitioner"
                                className="bg-white text-[#0F172A] shadow-lg border border-gray-100 text-sm px-4 py-2 rounded hover:bg-blue-700"
                            >
                                Explore
                            </Link>
                        </div>

                        <p className="text-gray-600 mt-2 text-sm">Latest Jobs</p>

                        {/* Job Cards */}
                        <div className="w-full mx-auto grid grid-cols-1 gap-3 mt-4">
                            <div className="bg-white rounded-lg border shadow-sm py-3 px-4 flex items-center justify-between">
                                <div>
                                    <h4 className="text-lg font-semibold text-[#0A2E5C]">Frontend Developer</h4>
                                    <p className="text-gray-600 text-sm mt-1">New York, NY</p>
                                </div>
                                <Link
                                    href="/jobs/backend-engineer"
                                    className=" text-[#074CA4] text-sm px-4 py-2 rounded "
                                >
                                    View
                                </Link>
                            </div>

                            <div className="bg-white rounded-lg border shadow-sm py-3 px-4 flex items-center justify-between">
                                <div>
                                    <h4 className="text-lg font-semibold text-[#0A2E5C]">Backend Engineer</h4>
                                    <p className="text-gray-600 text-sm mt-1">San Francisco, CA</p>
                                </div>
                                <Link
                                    href="/jobs/backend-engineer"
                                    className=" text-[#074CA4] text-sm px-4 py-2 rounded "
                                >
                                    View
                                </Link>
                            </div>
                             <div className="grid grid-cols-1 gap-[10px] mt-[24px] ">
                                <Link href="/" className="hover:underline pr-4  text-[14px]  rounded-[8px] bg-[#040D48]   py-[9.5px] text-center">View All Medical Practitoner Jobs</Link>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg border shadow-lg flex flex-col text-left px-7 py-6">
                        {/* Header with title + button */}
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-semibold text-[#0A2E5C]">Medical Practitioner</h3>
                            <Link
                                href="/jobs/medical-practitioner"
                                className="bg-white text-[#0F172A] shadow-lg border border-gray-100 text-sm px-4 py-2 rounded hover:bg-blue-700"
                            >
                                Explore
                            </Link>
                        </div>

                        <p className="text-gray-600 mt-2 text-sm">Latest Jobs</p>

                        {/* Job Cards */}
                        <div className="w-full mx-auto grid grid-cols-1 gap-3 mt-4">
                            <div className="bg-white rounded-lg border shadow-sm py-3 px-4 flex items-center justify-between">
                                <div>
                                    <h4 className="text-lg font-semibold text-[#0A2E5C]">Frontend Developer</h4>
                                    <p className="text-gray-600 text-sm mt-1">New York, NY</p>
                                </div>
                                <Link
                                    href="/jobs/backend-engineer"
                                    className=" text-[#074CA4] text-sm px-4 py-2 rounded "
                                >
                                    View
                                </Link>
                            </div>

                            <div className="bg-white rounded-lg border shadow-sm py-3 px-4 flex items-center justify-between">
                                <div>
                                    <h4 className="text-lg font-semibold text-[#0A2E5C]">Backend Engineer</h4>
                                    <p className="text-gray-600 text-sm mt-1">San Francisco, CA</p>
                                </div>
                                <Link
                                    href="/jobs/backend-engineer"
                                    className=" text-[#074CA4] text-sm px-4 py-2 rounded "
                                >
                                    View
                                </Link>
                            </div>
                             <div className="grid grid-cols-1 gap-[10px] mt-[24px] ">
                                <Link href="/" className="hover:underline pr-4  text-[14px]  rounded-[8px] bg-[#040D48]   py-[9.5px] text-center">View All Medical Practitoner Jobs</Link>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg border shadow-lg flex flex-col text-left px-7 py-6">
                        {/* Header with title + button */}
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-semibold text-[#0A2E5C]">Medical Practitioner</h3>
                            <Link
                                href="/jobs/medical-practitioner"
                                className="bg-white text-[#0F172A] shadow-lg border border-gray-100 text-sm px-4 py-2 rounded hover:bg-blue-700"
                            >
                                Explore
                            </Link>
                        </div>

                        <p className="text-gray-600 mt-2 text-sm">Latest Jobs</p>

                        {/* Job Cards */}
                        <div className="w-full mx-auto grid grid-cols-1 gap-3 mt-4">
                            <div className="bg-white rounded-lg border shadow-sm py-3 px-4 flex items-center justify-between">
                                <div>
                                    <h4 className="text-lg font-semibold text-[#0A2E5C]">Frontend Developer</h4>
                                    <p className="text-gray-600 text-sm mt-1">New York, NY</p>
                                </div>
                                <Link
                                    href="/jobs/backend-engineer"
                                    className=" text-[#074CA4] text-sm px-4 py-2 rounded "
                                >
                                    View
                                </Link>
                            </div>

                            <div className="bg-white rounded-lg border shadow-sm py-3 px-4 flex items-center justify-between">
                                <div>
                                    <h4 className="text-lg font-semibold text-[#0A2E5C]">Backend Engineer</h4>
                                    <p className="text-gray-600 text-sm mt-1">San Francisco, CA</p>
                                </div>
                                <Link
                                    href="/jobs/backend-engineer"
                                    className=" text-[#074CA4] text-sm px-4 py-2 rounded "
                                >
                                    View
                                </Link>
                            </div>
                             <div className="grid grid-cols-1 gap-[10px] mt-[24px] ">
                                <Link href="/" className="hover:underline pr-4  text-[14px]  rounded-[8px] bg-[#040D48]   py-[9.5px] text-center">View All Medical Practitoner Jobs</Link>
                            </div>
                        </div>
                    </div>


                </div>
                {/* Bottom Grid: 2 Cards */}
                <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

                    <div className="bg-white rounded-lg border shadow-lg flex flex-col text-left px-7 py-6">
                        {/* Header with title + button */}
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-semibold text-[#0A2E5C]">Medical Practitioner</h3>
                            <Link
                                href="/jobs/medical-practitioner"
                                className="bg-white text-[#0F172A] shadow-lg border border-gray-100 text-sm px-4 py-2 rounded hover:bg-blue-700"
                            >
                                Explore
                            </Link>
                        </div>

                        <p className="text-gray-600 mt-2 text-sm">Latest Jobs</p>

                        {/* Job Cards */}
                        <div className="w-full mx-auto grid grid-cols-1 gap-3 mt-4">
                            <div className="bg-white rounded-lg border shadow-sm py-3 px-4 flex items-center justify-between">
                                <div>
                                    <h4 className="text-lg font-semibold text-[#0A2E5C]">Frontend Developer</h4>
                                    <p className="text-gray-600 text-sm mt-1">New York, NY</p>
                                </div>
                                <Link
                                    href="/jobs/backend-engineer"
                                    className=" text-[#074CA4] text-sm px-4 py-2 rounded "
                                >
                                    View
                                </Link>
                            </div>

                            <div className="bg-white rounded-lg border shadow-sm py-3 px-4 flex items-center justify-between">
                                <div>
                                    <h4 className="text-lg font-semibold text-[#0A2E5C]">Backend Engineer</h4>
                                    <p className="text-gray-600 text-sm mt-1">San Francisco, CA</p>
                                </div>
                                <Link
                                    href="/jobs/backend-engineer"
                                    className=" text-[#074CA4] text-sm px-4 py-2 rounded "
                                >
                                    View
                                </Link>
                            </div>
                             <div className="grid grid-cols-1 gap-[10px] mt-[24px] ">
                                <Link href="/" className="hover:underline pr-4  text-[14px]  rounded-[8px] bg-[#040D48]   py-[9.5px] text-center">View All Medical Practitoner Jobs</Link>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg border shadow-lg flex flex-col text-left px-7 py-6">
                        {/* Header with title + button */}
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-semibold text-[#0A2E5C]">Medical Practitioner</h3>
                            <Link
                                href="/jobs/medical-practitioner"
                                className="bg-white text-[#0F172A] shadow-lg border border-gray-100 text-sm px-4 py-2 rounded hover:bg-blue-700"
                            >
                                Explore
                            </Link>
                        </div>

                        <p className="text-gray-600 mt-2 text-sm">Latest Jobs</p>

                        {/* Job Cards */}
                        <div className="w-full mx-auto grid grid-cols-1 gap-3 mt-4">
                            <div className="bg-white rounded-lg border shadow-sm py-3 px-4 flex items-center justify-between">
                                <div>
                                    <h4 className="text-lg font-semibold text-[#0A2E5C]">Frontend Developer</h4>
                                    <p className="text-gray-600 text-sm mt-1">New York, NY</p>
                                </div>
                                <Link
                                    href="/jobs/backend-engineer"
                                    className=" text-[#074CA4] text-sm px-4 py-2 rounded "
                                >
                                    View
                                </Link>
                            </div>

                            <div className="bg-white rounded-lg border shadow-sm py-3 px-4 flex items-center justify-between">
                                <div>
                                    <h4 className="text-lg font-semibold text-[#0A2E5C]">Backend Engineer</h4>
                                    <p className="text-gray-600 text-sm mt-1">San Francisco, CA</p>
                                </div>
                                <Link
                                    href="/jobs/backend-engineer"
                                    className=" text-[#074CA4] text-sm px-4 py-2 rounded "
                                >
                                    View
                                </Link>
                            </div>
                             <div className="grid grid-cols-1 gap-[10px] mt-[24px] ">
                                <Link href="/" className="hover:underline pr-4  text-[14px]  rounded-[8px] bg-[#040D48]   py-[9.5px] text-center">View All Medical Practitoner Jobs</Link>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg border shadow-lg flex flex-col text-left px-7 py-6">
                        {/* Header with title + button */}
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-semibold text-[#0A2E5C]">Medical Practitioner</h3>
                            <Link
                                href="/jobs/medical-practitioner"
                                className="bg-white text-[#0F172A] shadow-lg border border-gray-100 text-sm px-4 py-2 rounded hover:bg-blue-700"
                            >
                                Explore
                            </Link>
                        </div>

                        <p className="text-gray-600 mt-2 text-sm">Latest Jobs</p>

                        {/* Job Cards */}
                        <div className="w-full mx-auto grid grid-cols-1 gap-3 mt-4">
                            <div className="bg-white rounded-lg border shadow-sm py-3 px-4 flex items-center justify-between">
                                <div>
                                    <h4 className="text-lg font-semibold text-[#0A2E5C]">Frontend Developer</h4>
                                    <p className="text-gray-600 text-sm mt-1">New York, NY</p>
                                </div>
                                <Link
                                    href="/jobs/backend-engineer"
                                    className=" text-[#074CA4] text-sm px-4 py-2 rounded "
                                >
                                    View
                                </Link>
                            </div>

                            <div className="bg-white rounded-lg border shadow-sm py-3 px-4 flex items-center justify-between">
                                <div>
                                    <h4 className="text-lg font-semibold text-[#0A2E5C]">Backend Engineer</h4>
                                    <p className="text-gray-600 text-sm mt-1">San Francisco, CA</p>
                                </div>
                                <Link
                                    href="/jobs/backend-engineer"
                                    className=" text-[#074CA4] text-sm px-4 py-2 rounded "
                                >
                                    View
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 gap-[10px] mt-[24px] ">
                                <Link href="/" className="hover:underline pr-4  text-[14px]  rounded-[8px] bg-[#040D48]   py-[9.5px] text-center">View All Medical Practitoner Jobs</Link>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}
