'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { API_BASE_URL } from '@/lib/api';

/* eslint-disable react/no-unescaped-entities */

const DynamicComponent = () => {
    const pathname = usePathname();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const isFACRRM = pathname === '/general-practice-division/fracgp-facrrm';
    const isGpRegistrars = pathname === '/general-practice-division/gp-registrars';
    const islocumgp = pathname === '/general-practice-division/locum-gp';
    const isSpeech = pathname === '/ahp-division/speech-pathology';
    const isOccupational = pathname === '/ahp-division/occupational-therapist';
    const ispodiatrist = pathname === '/ahp-division/podiatrist';
    const isphysiotherapy = pathname === '/ahp-division/physiotherapy';
    const ispsychology = pathname === '/mental-health/psychology';
    const hideHeader = pathname === '/general-practice-division';



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(null);
        setError(null);

        const form = e.currentTarget;

        // Basic fields expected by backend
        const first_name = (form.elements.namedItem('first_name') as HTMLInputElement | null)?.value ?? '';
        const last_name = (form.elements.namedItem('last_name') as HTMLInputElement | null)?.value ?? '';
        const phone_number = (form.elements.namedItem('phone_number') as HTMLInputElement | null)?.value ?? '';
        const email = (form.elements.namedItem('email') as HTMLInputElement | null)?.value ?? '';

        // Checkbox handling
        const agreeInput = form.querySelector('input[name="agree_terms"]') as HTMLInputElement | null;
        const agree_terms = !!agreeInput && agreeInput.checked;

        // derive profession_slug from pathname (last segment)
        const segments = pathname ? pathname.split('/').filter(Boolean) : [];
        const profession_slug = segments.length ? segments[segments.length - 1] : '';

        // collect additional fields into array (key/value pairs)
        const fd = new FormData(form);
        const baseKeys = new Set(['first_name', 'last_name', 'phone_number', 'email', 'agree_terms']);
        const additional_data: Array<{ key: string; value: string }> = [];

        for (const [key, value] of fd.entries()) {
            if (!baseKeys.has(key)) {
                additional_data.push({ key, value: String(value) });
            }
        }

        const payload = {
            first_name,
            last_name,
            phone_number: phone_number || null,
            email,
            profession_slug,
            additional_data: additional_data.length ? additional_data : null,
            agree_terms,
        };

        try {
            const res = await fetch(`${API_BASE_URL}/web/candidate-enquiries`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data.message || `Request failed with status ${res.status}`);
            }

            const data = await res.json();
            setSuccess(data.message || 'Enquiry submitted successfully');
            form.reset();
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Submission failed');
            }
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-[8px] text-[#4A5565] ">
            {/* Header */}
            {!hideHeader && (<div>
                <h2 className="text-[#0F172A] font-bold mb-1">
                    Get matcheds (60 seconds)
                </h2>
                <p className="text-[12px] text-gray-600">
                    Tell us what matters — we'll send a curated shortlist <br />
                    within 48 hours.
                </p>
            </div>)}

            {/* First / Last Name */}
            <div className="grid grid-cols-2 gap-[8px] mt-[24px]">
                <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    className="input h-[40px] border border-[#E2E8F0] text-[#4A5565] rounded-[8px] text-[12px] px-[13px]"
                    required
                />
                <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                    required
                />
            </div>

            {/* Phone / Email */}
            <div className="grid grid-cols-2 gap-3">
                <input
                    type="tel"
                    name="phone_number"
                    placeholder="Phone Number"
                    className="input h-[40px] text-[#4A5565] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input h-[40px] border border-[#E2E8F0] rounded-[8px] text-[12px] px-[13px]"
                    required
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
            <label className="flex items-start gap-2 mt-[22px] text-sm text-gray-600 ">
                <input
                    type="checkbox"
                    name="agree_terms"
                    className="w-4 h-4 mt-1 accent-blue-600 shrink-0"
                    required
                />

                <span className="flex flex-wrap gap-1">
                    <span>I agree to the</span>

                    <Link
                        href="/terms-and-conditions"
                        target="_blank"
                        className="text-[#074CA4] hover:underline font-medium"
                    >
                        Terms and Conditions
                    </Link>

                    <span>and</span>

                    <Link
                        href="/privacy-policy"
                        target="_blank"
                        className="text-[#074CA4] hover:underline font-medium"
                    >
                        Privacy Policy
                    </Link>

                    <span>at Medfuture</span>
                </span>
            </label>


            {/* Submit */}
            <button
                type="submit"
                className="w-full h-[50px] bg-[#074CA4] cursor-pointer mt-[22px] hover:bg-blue-800 text-white rounded-[4px] transition"
                disabled={loading}
            >
                {loading ? 'Submitting…' : 'Submit'}
            </button>

            {success && <p className="text-sm text-green-600">{success}</p>}
            {error && <p className="text-sm text-red-600">{error}</p>}
        </form>
    );
};

export default DynamicComponent;
