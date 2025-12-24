export default function JobSeekerForm() {
    return (
        <form className="space-y-6 ">

            {/* Row 1: Full + Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div>
                    <label className="block lg:text-[16px] text-sm font-medium text-gray-700 mb-2">
                        Full Name
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your first name"
                        className="w-full border p-3 rounded border-gray-100 text-sm text-gray-600"
                    />
                </div>

                <div>
                    <label className="block lg:text-[16px] text-sm font-medium text-gray-700 mb-2">
                        Last Name
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your last name"
                        className="w-full border p-3 rounded border-gray-100 text-sm text-gray-600"
                    />
                </div>

            </div>

            {/* Row 2: Profession + Seniority */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div>
                    <label className="block lg:text-[16px] text-sm font-medium text-gray-700 mb-2">
                        Profession
                    </label>
                    <select className="w-full border p-3 rounded border-gray-100 text-sm text-gray-400"
                    >
                        <option value="">Select a profession</option>
                        <option>Doctor</option>
                        <option>Nurse</option>
                        <option>Physiotherapist</option>
                        <option>Psychologist</option>
                        <option>Dentist</option>
                    </select>
                </div>

                <div>
                    <label className="block lg:text-[16px] text-sm font-medium text-sm text-gray-700 mb-2">
                        Seniority Level
                    </label>
                    <select className="w-full border p-3 rounded border-gray-100 text-sm text-gray-400"
                    >
                        <option value="">Select seniority level</option>
                        <option>Junior</option>
                        <option>Mid-Level</option>
                        <option>Senior</option>
                        <option>Head / Lead</option>
                    </select>
                </div>

            </div>

            {/* Row 3 + 4: Upload CV + Source */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div>
                    <label className="block lg:text-[16px] text-sm text-gray-700 mb-2">
                        Upload CV (PDF or DOC)
                    </label>
                    <input
                        type="file"
                        className="w-full border p-3 rounded border-gray-100 text-sm text-gray-400"
                        accept=".pdf,.doc,.docx"
                    />
                </div>

                <div>
                    <label className="block lg:text-[16px] text-sm font-medium text-gray-700 mb-2">
                        Where did you hear about us?
                    </label>
                    <select className="w-full border p-3 rounded text-sm border-gray-100 text-gray-400"
                    >
                        <option value="">Select a source</option>
                                <option value="website">Google</option>
                        <option value="website">Website</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="facebook">Facebook</option>
                        <option value="instagram">Instagram</option>
                        <option value="job-board">Job Board</option>
                        <option value="referral">Referral</option>
                        <option value="recruiter">Recruiter</option>
                        <option value="other">Other</option>
                    </select>
                </div>

            </div>

            {/* Row 5: Checkboxes + Submit Button */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                {/* Left Checkboxes */}
                <div className="space-y-3">

                    {/* Terms */}
                    <label className="flex  text-[14px] items-start gap-2 lg:text-[16px] text-xs text-gray-700">
                        <input type="checkbox" className="mt-1  w-[18px] h-[18px] accent-[#040D48]" />
                        <span className="text-[14px] text-[#4A5565] ">
                            I agree to the{" "}
                            <a href="/terms" className="text-[#040D48] underline">
                                Terms & Conditions
                            </a>{" "}
                            and{" "}
                            <a href="/privacy" className="text-[#040D48] ]  underline">
                                Privacy Policy
                            </a>
                        </span>
                    </label>

                    {/* Subscribe */}
                    <label className="flex items-start gap-2 lg:text-[16px] text-sm text-gray-700">
                        <input type="checkbox" className="mt-1 w-[18px] h-[18px] accent-[#040D48]" />
                        <span className="text-[14px] ">
                            Subscribe for job alerts</span>
                    </label>

                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="md:w-auto w-full bg-[#074CA4] cursor-pointer text-white px-8 py-3 rounded-lg font-medium"
                >
                    Submit
                </button>

            </div>

        </form>
    );
}
