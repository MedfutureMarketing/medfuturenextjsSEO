'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/* eslint-disable react/no-unescaped-entities */

const FormComponent = () => {
    const pathname = usePathname();

    const isFACRRM = pathname === '/general-practice-division/fracgp-facrrm';
    const isGpRegistrars = pathname === '/general-practice-division/gp-registrars';
    const islocumgp = pathname === '/general-practice-division/locum-gp';
    const isSpeech = pathname === '/ahp-division/speech-pathology';
    const isOccupational = pathname === '/ahp-division/occupational-therapist';
    const ispodiatrist = pathname === '/ahp-division/podiatrist';
    const isphysiotherapy = pathname === '/ahp-division/physiotherapy';
    const ispsychology = pathname === '/mental-health/psychology';






    return (
        <form className="space-y-5 text-gray-500">
            {/* Header */}
            <div>
                <h2 className="text-[#0F172A] font-bold mb-1">
                    Get matched (60 seconds)
                </h2>
                <p className="text-[12px] text-gray-600">
                    Tell us what matters — we'll send a curated shortlist <br />
                    within 48 hours.
                </p>
            </div>

            {/* First / Last Name */}
            <div className="grid grid-cols-2 gap-3">
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                />
            </div>

            {/* Phone / Email */}
            <div className="grid grid-cols-2 gap-3">
                <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                />
            </div>

            {/* ================= CONDITIONAL FIELDS ================= */}

            {/* Fracgp */}
            {isFACRRM && (
                <>
                    <div className="grid grid-cols-2 gap-3">
                        <input
                            type="text"
                            name="ahpraNo"
                            placeholder="AHPRA Number"
                            className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                        />
                        <select
                            name="preferredState"
                            className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                        >
                            <option value="">Preferred State</option>
                            <option value="NSW">NSW</option>
                            <option value="VIC">VIC</option>
                            <option value="QLD">QLD</option>
                            <option value="WA">WA</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <input
                            type="text"
                            name="Expectations"
                            placeholder="Income Target/Expectations"
                            className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                        />

                        {/* <select
                            name="practiceType"
                            className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                        >
                            <option value="">Practice type</option>
                            <option value="private">Private</option>
                            <option value="public">Public</option>
                        </select> */}
                    </div>
                </>
            )}

            {/* isGpRegistrars */}
            {isGpRegistrars && (
                <>
                    <div className="grid grid-cols-2 gap-3">
                        <select
                            name="preferredState"
                            className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                        >
                            <option value="">AHPRA registration status</option>
                            <option value="NSW">NSW</option>
                            <option value="VIC">VIC</option>
                            <option value="QLD">QLD</option>
                        </select>

                        <select
                            name="availability"
                            className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                        >
                            <option value="">Pathway</option>
                            <option value="full-time">Full-time</option>
                            <option value="part-time">Part-time</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <select
                            name="shiftPreference"
                            className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                        >
                            <option value="">Preferred MMM range</option>
                            <option value="day">Day</option>
                            <option value="night">Night</option>
                        </select>

                        {/* <select
                            name="incomeTarget"
                            className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                        >
                            <option value="">Income range</option>
                            <option value="50k-80k">$50,000 - $80,000</option>
                            <option value="80k-120k">$80,000 - $120,000</option>
                        </select> */}
                    </div>
                </>
            )}
            {/* locum Gp */}
            {islocumgp && (
                <>
                    <div className="grid grid-cols-2 gap-3">
                        <select
                            name="preferredState"
                            className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                        >
                            <option value="">Engagement Type</option>
                            <option value="NSW">NSW</option>
                            <option value="VIC">VIC</option>
                            <option value="QLD">QLD</option>
                        </select>

                        <select
                            name="availability"
                            className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                        >
                            <option value="">Preferred State*</option>
                            <option value="full-time">Full-time</option>
                            <option value="part-time">Part-time</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <select
                            name="shiftPreference"
                            className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                        >
                            <option value="">Start  Date</option>
                            <option value="day">Day</option>
                            <option value="night">Night</option>
                        </select>

                        <select
                            name="incomeTarget"
                            className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                        >
                            <option value="">End  Date</option>
                            <option value="50k-80k">$50,000 - $80,000</option>
                            <option value="80k-120k">$80,000 - $120,000</option>
                        </select>
                    </div>
                </>
            )}

            {/*Speech Pathology  */}
            {isSpeech && (
                <>
                    <div className="grid grid-cols-2 gap-3">
                        <select
                            name="preferredState"
                            className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                        >
                            <option value="">Setting</option>
                            <option value="NSW">NSW</option>
                            <option value="VIC">VIC</option>
                            <option value="QLD">QLD</option>
                        </select>

                        <select
                            name="availability"
                            className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                        >
                            <option value="">Clinical Focus</option>
                            <option value="full-time">Full-time</option>
                            <option value="part-time">Part-time</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <select
                            name="shiftPreference"
                            className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                        >
                            <option value="">Career Stage</option>
                            <option value="day">Day</option>
                            <option value="night">Night</option>
                        </select>

                        <select
                            name="incomeTarget"
                            className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                        >
                            <option value="">Work Style/ KPI Preference</option>
                            <option value="50k-80k">$50,000 - $80,000</option>
                            <option value="80k-120k">$80,000 - $120,000</option>
                        </select>
                    </div>
                </>
            )}
            {/* ot */}
            {isOccupational && (
                <>
                    <div className="grid grid-cols-2 gap-3">
                        <select
                            name="preferredState"
                            className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                        >
                            <option value="">Specialty</option>
                            <option value="NSW">NSW</option>
                            <option value="VIC">VIC</option>
                            <option value="QLD">QLD</option>
                        </select>

                        <select
                            name="availability"
                            className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                        >
                            <option value="">Seniority</option>
                            <option value="full-time">Full-time</option>
                            <option value="part-time">Part-time</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <select
                            name="shiftPreference"
                            className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                        >
                            <option value="">Engagement Type</option>
                            <option value="day">Day</option>
                            <option value="night">Night</option>
                        </select>

                        <select
                            name="incomeTarget"
                            className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                        >
                            <option value="">Preferred State</option>
                            <option value="50k-80k">$50,000 - $80,000</option>
                            <option value="80k-120k">$80,000 - $120,000</option>
                        </select>
                    </div>
                </>
            )}
            {/* pod */}
            {ispodiatrist && (
                <>
                    <div className="grid grid-cols-2 gap-3">
                        <select
                            name="preferredState"
                            className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                        >
                            <option value="">Specialty</option>
                            <option value="NSW">NSW</option>
                            <option value="VIC">VIC</option>
                            <option value="QLD">QLD</option>
                        </select>

                        <select
                            name="availability"
                            className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                        >
                            <option value="">Seniority</option>
                            <option value="full-time">Full-time</option>
                            <option value="part-time">Part-time</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <select
                            name="shiftPreference"
                            className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                        >
                            <option value="">Engagement Type</option>
                            <option value="day">Day</option>
                            <option value="night">Night</option>
                        </select>

                        <select
                            name="incomeTarget"
                            className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                        >
                            <option value="">Preferred State</option>
                            <option value="50k-80k">$50,000 - $80,000</option>
                            <option value="80k-120k">$80,000 - $120,000</option>
                        </select>
                    </div>
                </>
            )}
            {/* Phy */}
            {isphysiotherapy && (
                <>
                    <div className="grid grid-cols-2 gap-3">
                        <select
                            name="preferredState"
                            className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                        >
                            <option value="">Specialty</option>
                            <option value="NSW">NSW</option>
                            <option value="VIC">VIC</option>
                            <option value="QLD">QLD</option>
                        </select>

                        <select
                            name="availability"
                            className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                        >
                            <option value="">Seniority</option>
                            <option value="full-time">Full-time</option>
                            <option value="part-time">Part-time</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <select
                            name="shiftPreference"
                            className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                        >
                            <option value="">Engagement Type</option>
                            <option value="day">Day</option>
                            <option value="night">Night</option>
                        </select>

                        <select
                            name="incomeTarget"
                            className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                        >
                            <option value="">Preferred State</option>
                            <option value="50k-80k">$50,000 - $80,000</option>
                            <option value="80k-120k">$80,000 - $120,000</option>
                        </select>
                    </div>
                </>
            )}
            {/* psy */}
            {ispsychology && (
                <>
                    <div className="grid grid-cols-2 gap-3">
                        <select
                            name="preferredState"
                            className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                        >
                            <option value="">Registrational Level</option>
                            <option value="NSW">NSW</option>
                            <option value="VIC">VIC</option>
                            <option value="QLD">QLD</option>
                        </select>

                        <select
                            name="availability"
                            className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                        >
                            <option value="">Preferred Setting</option>
                            <option value="full-time">Full-time</option>
                            <option value="part-time">Part-time</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <select
                            name="shiftPreference"
                            className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                        >
                            <option value="">Preferred State</option>
                            <option value="day">Day</option>
                            <option value="night">Night</option>
                        </select>

                        {/* <select
                            name="incomeTarget"
                            className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                        >
                            <option value="">Income range</option>
                            <option value="50k-80k">$50,000 - $80,000</option>
                            <option value="80k-120k">$80,000 - $120,000</option>
                        </select> */}
                    </div>
                </>
            )}

            {/* ================= TERMS ================= */}
            <label className="flex flex-wrap items-start gap-2 text-xs text-gray-600">
                <input
                    type="checkbox"
                    name="agreeTerms"
                    className="w-4 h-4 accent-blue-600 mt-0.5"
                />
                <span>I agree to the</span>

                <Link href="/terms-and-conditions" target="_blank" className="text-blue-600 hover:underline">
                    Terms and Conditions
                </Link>

                <span>and</span>

                <Link href="/privacy-policy" target="_blank" className="text-blue-600 hover:underline">
                    Privacy Policy
                </Link>
            </label>

            {/* Submit */}
            <button
                type="button"
                className="w-full h-[50px] bg-[#074CA4] hover:bg-blue-700 text-white rounded-[4px] transition"
            >
                Submit
            </button>
        </form>
    );
};

export default FormComponent;
