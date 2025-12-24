'use client'

import React from 'react'

export default function EmployerEnquirySection() {
    return (
        <section className="max-w-7xl bg-[#FCFCFC] mx-auto px-6 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* ---------------- Left: How It Works ---------------- */}
                <div>
                    <h2 className="text-[36px] font-[700] uppercase text-[#074CA4] font-semibold mb-12">
                        How It Works
                    </h2>

                    <div className="relative space-y-12">

                        {/* Vertical dotted line */}
                        <div className="absolute left-5 top-0 bottom-0 border-l-2 border-dotted border-black" />

                        {[
                            {
                                step: 1,
                                title: 'Register as an Employer',
                                desc: 'Create your employer account to begin connecting with qualified healthcare professionals.'
                            },
                            {
                                step: 2,
                                title: 'Submit the Vacancy',
                                desc: 'Share your job details so we can source suitable candidates quickly.'
                            },
                            {
                                step: 3,
                                title: 'Have the Discovery Call from the Dedicated Recruitment Consultant',
                                desc: 'Discuss your requirements with our consultant to ensure perfect candidate matching.'
                            },
                            {
                                step: 4,
                                title: 'Start the Selection Process',
                                desc: 'Review shortlisted candidates and proceed with interviews to finalise hiring.'
                            },
                        ].map((item, ) => (
                            <div key={item.step} className="relative flex gap-6">

                                {/* Number Circle */}
                                <div className="relative z-10">
                                    <div className="w-10 h-10  rounded-full bg-black text-white flex items-center justify-center font-semibold">
                                        {item.step}
                                    </div>
                                </div>

                                {/* Content */}
                                <div>
                                    <h4 className="font-semibold text-[#0F172A] text-[20px] mb-1">
                                        {item.title}
                                    </h4>
                                    <p className="text-[#0F172A] text-[16px] max-w-md">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ---------------- Right: Form ---------------- */}
                <div className="bg-white  rounded-[8px] p-8 shadow-lg">
                    <h3 className="text-xl text-center text-[#040D48] font-semibold mb-6">
                        Ready to Find the Right Talent for <br /> Your GP Team?
                    </h3>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Left Column */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Name*
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full border rounded-md px-4 py-3 bg-[#FCFCFC] placeholder-[#4A556580] text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Position
                                </label>
                                <input
                                    type="Enter your position"
                                    placeholder="Your position"
                                    className="w-full border placeholder-[#4A556580] bg-[#FCFCFC] rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full border rounded-md bg-[#FCFCFC] px-4 py-3 placeholder-[#4A556580] text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Organization
                                </label>
                                <input
                                    type="text"
                                    placeholder="Organization name"
                                    className="w-full border rounded-md bg-[#FCFCFC] placeholder-[#4A556580] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>

                            <div>
                                <label className="block text-sm  font-medium text-gray-700 mb-1">
                                    Interested Service
                                </label>
                                <select
                                    className="w-full  rounded-md border border-gray-100 bg-[#FCFCFC] px-4 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    defaultValue=""
                                >
                                    <option value="" disabled hidden className="text-gray-400">
                                        Select a service
                                    </option>
                                    <option value="permanent">Permanent Recruitment</option>
                                    <option value="locum">Locum Recruitment</option>
                                    <option value="international">International Recruitment</option>
                                </select>
                            </div>


                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    placeholder="+61 XXX XXX XXX"
                                    className="w-full border rounded-md bg-[#FCFCFC] px-4 py-3 placeholder-[#4A556580] text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>
                        </div>

                        {/* Upload Vacancy */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Upload Vacancy
                            </label>
                            <input
                                type="file"
                                className="w-full  rounded-md bg-[#FCFCFC] px-4 py-2 text-sm text-gray-600
        file:border-0 file:bg-blue-50 file:px-4 file:py-2
        file:rounded-md file:text-blue-700 file:font-medium"
                            />
                        </div>

                        {/* Terms */}
                        


                    </form>
                    <div className="grid grid-cols-2 gap-4">
                            {/* Terms & Conditions */}
                            <div className=" flex items-start gap-3 text-sm text-gray-600">
                                <input type="checkbox" className="mt-1 accent-blue-500" />
                                <p>
                                    I agree to the{' '}
                                    <span className="text-blue-700 underline cursor-pointer">
                                        Terms & Conditions
                                    </span>{' '}
                                    and{' '}
                                    <span className="text-blue-700 underline cursor-pointer">
                                        Privacy Policy
                                    </span>
                                </p>
                            </div>

                            {/* Submit */}
                            <div className="">
                                <button
                                    type="submit"
                                    className="w-full bg-blue-900 text-white py-3 rounded-md text-sm font-medium hover:bg-blue-800 transition"
                                >
                                    Submit Enquiry
                                </button>
                            </div>
                        </div>


                </div>
            </div>
        </section>
    )
}
