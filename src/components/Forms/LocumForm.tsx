// components/RegistrationForm.tsx
"use client"
import { useState } from 'react';
import Link from "next/link";
import PhoneNumber from '@/components/Forms/FormsComponent/PhoneNumber';

// Remove the onClose prop since we don't need toggle functionality
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

  const inputClasses = "w-full px-3 py-3 border border-[#66768F29]  text-[#333333] rounded-md focus:outline-none focus:ring-2 focus:ring-[#64CAF3] focus:border-transparent placeholder:text-[#666666] text-sm sm:text-base";
  
  return (
    <div className="mt-0 sm:mt-0 p-4 sm:p-6 bg-white rounded-lg border-2 border-gray-50 shadow-xl shadow-[0_6px_6px_rgba(0,0,0,0.05)] border-gray-200">
      <h3 className="text-xl sm:text-2xl font-bold text-[#FFD791] mb-4 sm:mb-6 text-center sm:text-left">Quick Apply</h3>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-2 text-black">
        {/* Personal Information - 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 sm:gap-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {/* First Name * */}
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className={inputClasses}
              placeholder="Enter your first name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {/* Last Name * */}
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className={inputClasses}
              placeholder="Enter your last name"
            />
          </div>
        </div>

        {/* Contact Information - 2 columns on desktop */}
        <div className="grid grid-cols-1 assetsmd:grid-cols-1 gap-4 sm:gap-2">
          <PhoneNumber
            value={formData.phone}
            onChange={handleInputChange}
            required={true}
            inputClasses={inputClasses}
          />
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {/* Email Address * */}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className={inputClasses}
              placeholder="Enter your email address"
            />
          </div>
        </div>

        {/* Professional Information - 2 columns on desktop */}
        <div className="grid grid-cols-1 assetsmd:grid-cols-1 gap-4 sm:gap-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {/* Profession * */}
            </label>
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
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {/* Specialty * */}
            </label>
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

        {/* File Upload and Job Source - 2 columns on desktop */}
        <div className="grid grid-cols-1 assetsmd:grid-cols-1 gap-4 sm:gap-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
             
            </label>
            <div className="relative">
              <input
                type="file"
                name="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#64CAF3] focus:border-transparent opacity-0 absolute z-10 cursor-pointer h-12 sm:h-10"
                id="resume-upload"
              />
              <label
                htmlFor="resume-upload"
                className={`${inputClasses} bg-white cursor-pointer text-gray-500 block h-12 sm:h-10 flex items-center text-sm`}
              >
                Resume/CV *
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
             
            </label>
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

        {/* Terms and Submit */}
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-start">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              required
              className="w-4 h-4 rounded border-gray-300 text-[#64CAF3] focus:ring-[#64CAF3] mt-1 flex-shrink-0"
            />
            <label className="ml-2 text-sm text-gray-700 leading-tight">
              I confirm that I have read and agree to the <Link href="/terms" className="hover:underline text-[#64CAF3]">Terms of Use</Link> and <Link href="/privacy" className="hover:underline text-[#64CAF3]">Privacy Policy.</Link>
            </label>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              name="subscribeToAlerts"
              checked={formData.subscribeToAlerts}
              onChange={handleInputChange}
              className="w-4 h-4 rounded border-gray-300 text-[#64CAF3] focus:ring-[#64CAF3] mt-1 flex-shrink-0"
            />
            <label className="ml-2 text-sm text-gray-700 leading-tight">
              Subscribe for Job Alerts.
            </label>
          </div>
        </div>

        {/* Submit Button Only - No Cancel button */}
        <div className="flex justify-center sm:justify-start">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#141E65] to-[#151C50] text-[#FFD791]  w-full text-white px-8 sm:px-12 py-3 rounded-lg hover:bg-[#55b8e0] transition-colors font-medium text-sm sm:text-base"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}