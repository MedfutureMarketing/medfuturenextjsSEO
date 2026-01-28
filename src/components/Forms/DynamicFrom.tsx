'use client';
import Link from 'next/link';
/* eslint-disable react/no-unescaped-entities */

import React from 'react';

const FormComponent = () => {
    return (
        <form className="space-y-5">
            {/* Header */}
            <div>
                <h2 className="text-[#0F172A] font-bold text-gray-900 mb-1">
                    Get matched (60 seconds)
                </h2>
                <p className="text-[12px] text-gray-600">
                    Tell us what matters — we'll send a curated shortlist <br /> within 48 hours.
                </p>
            </div>

            {/* First / Last Name */}
            <div className="grid grid-cols-2 gap-3">
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[#4A5565] text-[12px] px-[13px]"
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[#4A5565] text-[12px] px-[13px]"
                />
            </div>

            {/* Phone / Email */}
            <div className="grid grid-cols-2 gap-3">
                <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[#4A5565] text-[12px] px-[13px]"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[#4A5565] text-[12px] px-[13px]"
                />
            </div>

            {/* AHPRA / State */}
            <div className="grid grid-cols-2 gap-3">
                <input
                    type="text"
                    name="ahpraNo"
                    placeholder="AHPRA / Provider No."
                    className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[#4A5565] text-[12px] px-[13px]"
                />
                <select name="preferredState" className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[#4A5565] text-[12px] px-[13px]">
                    <option value="">Select state</option>
                    <option value="NSW">NSW</option>
                    <option value="VIC">VIC</option>
                    <option value="QLD">QLD</option>
                    <option value="WA">WA</option>
                    <option value="SA">SA</option>
                    <option value="TAS">TAS</option>
                    <option value="ACT">ACT</option>
                    <option value="NT">NT</option>
                </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
                <select name="incomeTarget"
                    className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[#4A5565] text-[12px] px-[13px]"
                >
                    <option value="">Select income range</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-150k">$100,000 - $150,000</option>
                    <option value="150k-200k">$150,000 - $200,000</option>
                    <option value="200k+">$200,000+</option>
                </select>

            </div>

            {/* Income */}


            {/* Terms */}
            <label className="flex flex-wrap items-start gap-2 text-xs text-gray-600">
               
                    <input
                        type="checkbox"
                        name="agreeTerms"
                        className="w-4 h-4 accent-blue-600 cursor-pointer flex-shrink-0 mt-0.5"
                    />
                    <span>I agree to the</span>
          

             
                    <Link
                        href="/terms-and-conditions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        Term and Conditions
                    </Link>
                    <span className="whitespace-nowrap">and</span>
                    <Link
                        href="/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        Privacy Policy
                    </Link>
                 
        
            </label>



            {/* Submit */}
            <button
                type="button"
                className="w-full cursor-pointer h-[50px] bg-[#074CA4] hover:bg-blue-700 text-white py-[13px] rounded-[4px] transition"
            >
                Submit
            </button>
        </form>
    );
};

export default FormComponent;
