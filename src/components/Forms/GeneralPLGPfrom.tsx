
'use client';

import React, { useState } from "react";

export default function LocumPLGP() {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    return (

        <section className="  py-14 px-4">
            <div className="bg-white rounded-xl shadow-xl p-8 text-gray-500 w-full">
                <h3 className="text-xl font-semibold text-center text-blue-700 mb-[30px]">
                    {step === 1
                        ? "Let us know your availability & Preference"
                        : "Tell us about yourself"}
                </h3>

                {step === 1 ? (
                    <form className="grid grid-cols-2 gap-4">
                        {/* Locum Tenure */}
                        <div className="flex flex-col">
                            <label className="mb-1 text-xs lg:text-[14px] font-[500] text-gray-700 mb-[8px]">
                                Locum Tenure
                            </label>
                            <select className="input h-10 lg:h-[56px] text-xs lg:text-[14px] px-4 border border-gray-200 rounded-[4px] text-gray-500 cursor-pointer">
                                {/* <option value="" disabled selected>Select Tenure</option> */}
                                <option value="short">Short-term</option>
                                <option value="long">Long-term</option>
                            </select>
                        </div>

                        {/* Engagement Term */}
                        <div className="flex flex-col">
                            <label className="mb-1 text-xs lg:text-[14px] font-[500] text-gray-700 mb-[8px]">
                                Engagement Term
                            </label>
                            <select className="input h-10 lg:h-[56px] text-xs lg:text-[14px] px-4 border border-gray-200 rounded-[4px] text-gray-500 cursor-pointer">
                                {/* <option value="" disabled selected>Select Term</option> */}
                                <option>Full-time</option>
                                <option>Part-time</option>
                            </select>
                        </div>

                        {/* Start Date */}
                        <div className="flex flex-col">
                            <label className="mb-1 text-xs lg:text-[14px] font-[500] text-gray-700 mb-[8px]">
                                Start Date
                            </label>
                            <input type="date" className="input h-10 text-xs lg:text-[14px] lg:h-[56px] px-4 border border-gray-200 rounded-[4px] text-gray-500 cursor-pointer" />
                        </div>

                        {/* End Date */}
                        <div className="flex flex-col">
                            <label className="mb-1 text-xs lg:text-[14px] font-[500] text-gray-700 mb-[8px]">
                                End Date
                            </label>
                            <input type="date" className="input h-10 text-xs lg:text-[14px] lg:h-[56px] px-4 border border-gray-200 rounded-[4px] text-gray-500 cursor-pointer" />
                        </div>

                        {/* Working Days */}
                        <div className="flex flex-col">
                            <label className="mb-1 text-xs lg:text-[14px] font-[500] text-gray-700 mb-[8px]">
                                Working Days
                            </label>
                            <select className="input h-10 lg:h-[56px] text-xs lg:text-[14px] px-4 border border-gray-200 rounded-[4px] text-gray-500 cursor-pointer">
                                <option>Select Days</option>
                                <option>Mon-Fri</option>
                                <option>Mon-Sat</option>
                            </select>
                        </div>

                        {/* Hourly Fee */}
                        <div className="flex flex-col">
                            <label className="mb-1 text-xs lg:text-[14px] font-[500] text-gray-700 mb-[8px]">
                                Hourly Fee
                            </label>
                            <select className="input h-10 lg:h-[56px] text-xs lg:text-[14px] px-4 border border-gray-200 rounded-[4px] text-gray-500 cursor-pointer">
                                <option>Select Fee</option>
                                <option>$50-$70</option>
                                <option>$70-$100</option>
                            </select>
                        </div>

                        {/* State */}
                        <div className="flex flex-col">
                            <label className="mb-1 text-xs lg:text-[14px] font-[500] text-gray-700 mb-[8px]">
                                State
                            </label>
                            <select className="input h-10 lg:h-[56px] text-xs lg:text-[14px] px-4 border border-gray-200 rounded-[4px] text-gray-500 cursor-pointer">
                                <option>Select State</option>
                                <option>NSW</option>
                                <option>VIC</option>
                            </select>
                        </div>

                        {/* Region */}
                        <div className="flex flex-col">
                            <label className="mb-1 text-xs lg:text-[14px] font-[500] text-gray-700 mb-[8px]">
                                Region
                            </label>
                            <select className="input h-10 lg:h-[56px] px-4 text-xs lg:text-[14px] border border-gray-200 rounded-[4px] text-gray-500 cursor-pointer">
                                <option>Select Region</option>
                                <option>Sydney</option>
                                <option>Melbourne</option>
                            </select>
                        </div>

                        <button
                            type="button"
                            onClick={nextStep}
                            className="col-span-2 bg-gradient-to-r from-[#0B3264] to-[#1B62B7] text-white font-semibold py-[16px] rounded-[4px] mt-4 hover:bg-blue-800 transition"
                        >
                            Next
                        </button>
                    </form>
                ) : (
                    <form className="grid lg:grid-cols-2 grid-cols-2 gap-4">
                        {/* Name */}
                        <div className="flex flex-col">
                            <label className="text-xs lg:text-[14px] font-[500] text-gray-700 mb-1">First Name</label>
                            <input type="text" placeholder="Enter First Name" className="input h-10 text-xs lg:text-[14px]  lg:h-[56px] px-4 border border-gray-200 rounded-[4px] text-gray-500" />
                        </div>

                        {/* Last Name */}
                        <div className="flex flex-col">
                            <label className="text-xs lg:text-[14px] font-[500] text-gray-700 mb-1">Last Name</label>
                            <input type="text" placeholder="Enter Last Name" className="input h-10 text-xs lg:text-[14px] lg:h-[56px] px-4 border border-gray-200 rounded-[4px] text-gray-500" />
                        </div>

                        {/* Mobile */}
                        <div className="flex flex-col">
                            <label className="text-xs lg:text-[14px] font-[500] text-gray-700 mb-1">Mobile</label>
                            <input type="tel" placeholder="Enter Mobile Number" className="input text-xs lg:text-[14px] h-10 lg:h-[56px] px-4 border border-gray-200 rounded-[4px] text-gray-500" />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col">
                            <label className="text-xs lg:text-[14px] font-[500] text-gray-700 mb-1">Email</label>
                            <input type="email" placeholder="Enter Email" className="input text-xs lg:text-[14px] h-10 lg:h-[56px] px-4 border border-gray-200 rounded-[4px] text-gray-500" />
                        </div>

                        {/* Profession */}
                        <div className="flex flex-col">
                            <label className="text-xs lg:text-[14px] font-[500] text-gray-700 mb-1">Profession</label>
                            <select className="input h-10 lg:h-[56px] px-4 text-xs lg:text-[14px] border border-gray-200 rounded-[4px] text-gray-500 cursor-pointer">
                                <option>Select Region</option>
                                <option>Sydney</option>
                                <option>Melbourne</option>
                            </select>              </div>

                        {/* Specialty */}
                        <div className="flex flex-col">
                            <label className="text-xs lg:text-[14px] font-[500] text-gray-700 mb-1">Specialty</label>
                            <select className="input h-10 lg:h-[56px] px-4 text-xs lg:text-[14px] border border-gray-200 rounded-[4px] text-gray-500 cursor-pointer">
                                <option>Select Region</option>
                                <option>Sydney</option>
                                <option>Melbourne</option>
                            </select>              </div>

                        {/* Upload CV */}
                        <div className="flex flex-col">
                            <label className="text-xs lg:text-[14px] font-[500] text-gray-700 mb-1">Upload CV</label>
                            <input type="file" className="input h-10 lg:h-[56px] px-4 border text-xs lg:text-[14px] border-gray-200 rounded-[4px] text-gray-500" />
                        </div>

                        {/* How did you hear about us */}
                        <div className="flex flex-col">
                            <label className="text-xs lg:text-[14px] font-[500] text-gray-700 mb-1">Where did you hear about us?</label>
                            <select className="input h-10 lg:h-[56px] px-4 text-xs lg:text-[14px] border border-gray-200 rounded-[4px] text-gray-500 cursor-pointer">
                                <option>Select Region</option>
                                <option>Sydney</option>
                                <option>Melbourne</option>
                            </select>              </div>

                        {/* Navigation */}
                        <div className="flex justify-between mt-4">
                            <button
                                type="button"
                                onClick={prevStep}
                                className="bg-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-400 transition"
                            >
                                Back
                            </button>
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-[#0B3264] to-[#1B62B7] text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </section>
    );
}
