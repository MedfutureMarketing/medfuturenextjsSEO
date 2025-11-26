// components/RegistrationForm.tsx
"use client"
import { useState } from 'react';
import Link from "next/link";
import PhoneNumber from '@/components/Forms/FormsComponent/PhoneNumber';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    ahpraNumber: '',
    profession: '',
    specialty: '',
    coverLetter: '',
    resume: null as File | null,
    jobSource: '',
    agreeToTerms: false,
    subscribeToAlerts: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const inputClasses =
  "w-full px-2 py-2 border border-[#66768F]/16 text-[#333333] rounded-md focus:outline-none focus:ring-2 focus:ring-[#64CAF3] focus:border-transparent placeholder:text-[#666666] text-sm sm:text-base"; 

  return (
    <div className="mt-4 sm:mt-8 p-4 sm:p-6 bg-white rounded-lg shadow-[0_6px_6px_rgba(0,0,0,0.05)] border-[#66768F]/16">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center sm:text-left">
        Quick Apply
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4 text-black">

        {/* Personal Info */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-[13px]">
          <div>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className={inputClasses}
              placeholder="First Name"
            />
          </div>

          <div>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className={inputClasses}
              placeholder="Last Name"
            />
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-[13px]">
          <PhoneNumber
            value={formData.phone}
            onChange={handleInputChange}
            required={true}
            inputClasses={inputClasses}
          />

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className={inputClasses}
              placeholder="Email Address"
            />
          </div>
        </div>

        {/* Professional Info */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-[13px]">
          <div>
            <select
              name="profession"
              value={formData.profession}
              onChange={handleInputChange}
              required
              className={inputClasses}
            >
              <option value="">Select Profession</option>
              <option value="medical-practitioner">Medical Practitioner</option>
              <option value="non-vr-gp">Non-VR GP</option>
              <option value="vr-gp">VR GP</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <select
              name="specialty"
              value={formData.specialty}
              onChange={handleInputChange}
              required
              className={inputClasses}
            >
              <option value="">Select Specialty</option>
              <option value="gp-registrar">GP Registrar</option>
              <option value="general-practice">General Practice</option>
              <option value="emergency-medicine">Emergency Medicine</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

     
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-[13px]">
          <div>
            <div className="relative">
              <input
                type="file"
                name="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                required
                className="w-full px-3 py-2 border border-[#66768F]/16 rounded-md focus:outline-none focus:ring-2 focus:ring-[#64CAF3] focus:border-transparent opacity-0 absolute z-10 cursor-pointer h-12 sm:h-10"
                id="resume-upload"
              />
              <label
                htmlFor="resume-upload"
                className={`${inputClasses} bg-white cursor-pointer text-gray-500 block  sm:h-10 flex items-center text-sm`}
              >
                Resume/CV *
              </label>
            </div>
          </div>

          <div>
            <select
              name="jobSource"
              value={formData.jobSource}
              onChange={handleInputChange}
              required
              className={inputClasses}
            >
              <option value="">Select an option</option>
              <option value="google">Google</option>
              <option value="linkedin">LinkedIn</option>
              <option value="indeed">Indeed</option>
              <option value="company-website">Company Website</option>
              <option value="referral">Employee Referral</option>
              <option value="social-media">Social Media</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Terms */}
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-start">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              required
              className="w-4 h-4 rounded border-[#66768F]/16 text-[#64CAF3] accent-blue-500 focus:ring-[#64CAF3] mt-1 flex-shrink-0"
            />
            <label className="ml-2 text-[15px] text-gray-700 leading-tight">
              I confirm that I have read and agree to the{" "}
              <Link href="/terms" className="hover:underline text-[#64CAF3]">Terms of Use</Link> and{" "}
              <Link href="/privacy" className="hover:underline text-[#64CAF3]">Privacy Policy.</Link>
            </label>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              name="subscribeToAlerts"
              checked={formData.subscribeToAlerts}
              onChange={handleInputChange}
              className="w-4 h-4 rounded border-[#66768F]/16 text-[#64CAF3] accent-blue-500 focus:ring-[#64CAF3] mt-1 flex-shrink-0"
            />
            <label className="ml-2 text-[15px] text-gray-700 leading-tight">
              Subscribe for Job Alerts.
            </label>
          </div>
        </div>

        {/* Submit Button Only */}
        <button
          type="submit"
          className="w-full bg-[#64CAF3] text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-[#55b8e0] transition-colors font-medium"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
