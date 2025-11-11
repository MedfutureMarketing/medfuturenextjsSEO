// components/RegistrationForm.tsx
"use client"
import { useState } from 'react';

interface RegistrationFormProps {
  onClose: () => void;
}

export default function RegistrationForm({ onClose }: RegistrationFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    ahpraNumber: '',
    currentPosition: '',
    experience: '',
    coverLetter: '',
    resume: null as File | null,
    fullTime: false,
    partTime: false,
    immediately: false,
    fourWeeksNotice: false,
    agreeToTerms: false
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
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add API call here
  };

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-[0_6px_6px_rgba(0,0,0,0.05)] border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Application Form</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#64CAF3] focus:border-transparent"
              placeholder="Enter your first name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#64CAF3] focus:border-transparent"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#64CAF3] focus:border-transparent"
              placeholder="Enter your email address"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#64CAF3] focus:border-transparent"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        {/* Professional Information */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            AHPRA Registration Number *
          </label>
          <input
            type="text"
            name="ahpraNumber"
            value={formData.ahpraNumber}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#64CAF3] focus:border-transparent"
            placeholder="Enter your AHPRA registration number"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Position
            </label>
            <select 
              name="currentPosition"
              value={formData.currentPosition}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#64CAF3] focus:border-transparent"
            >
              <option value="">Select your position</option>
              <option value="gp-registrar">GP Registrar</option>
              <option value="non-vr-gp">Non-VR GP</option>
              <option value="vr-gp">VR GP</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Years of Experience
            </label>
            <select 
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#64CAF3] focus:border-transparent"
            >
              <option value="">Select years</option>
              <option value="0-2">0-2 years</option>
              <option value="3-5">3-5 years</option>
              <option value="6-10">6-10 years</option>
              <option value="10+">10+ years</option>
            </select>
          </div>
        </div>

        {/* Availability */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Availability
          </label>
          <div className="flex flex-wrap gap-4">
            <label className="inline-flex items-center">
              <input 
                type="checkbox" 
                name="fullTime"
                checked={formData.fullTime}
                onChange={handleInputChange}
                className="rounded border-gray-300 text-[#64CAF3] focus:ring-[#64CAF3]" 
              />
              <span className="ml-2">Full Time</span>
            </label>
            <label className="inline-flex items-center">
              <input 
                type="checkbox" 
                name="partTime"
                checked={formData.partTime}
                onChange={handleInputChange}
                className="rounded border-gray-300 text-[#64CAF3] focus:ring-[#64CAF3]" 
              />
              <span className="ml-2">Part Time</span>
            </label>
            <label className="inline-flex items-center">
              <input 
                type="checkbox" 
                name="immediately"
                checked={formData.immediately}
                onChange={handleInputChange}
                className="rounded border-gray-300 text-[#64CAF3] focus:ring-[#64CAF3]" 
              />
              <span className="ml-2">Immediately</span>
            </label>
            <label className="inline-flex items-center">
              <input 
                type="checkbox" 
                name="fourWeeksNotice"
                checked={formData.fourWeeksNotice}
                onChange={handleInputChange}
                className="rounded border-gray-300 text-[#64CAF3] focus:ring-[#64CAF3]" 
              />
              <span className="ml-2">4 Weeks Notice</span>
            </label>
          </div>
        </div>

        {/* Cover Letter & Resume */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cover Letter
          </label>
          <textarea
            rows={4}
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#64CAF3] focus:border-transparent"
            placeholder="Tell us why you're interested in this position..."
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Resume/CV *
          </label>
          <input
            type="file"
            name="resume"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#64CAF3] focus:border-transparent"
          />
          <p className="text-sm text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max: 5MB)</p>
        </div>

        {/* Terms and Submit */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleInputChange}
            required
            className="rounded border-gray-300 text-[#64CAF3] focus:ring-[#64CAF3]"
          />
          <label className="ml-2 text-sm text-gray-700">
            I agree to the terms and conditions and privacy policy
          </label>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-[#64CAF3] text-white px-8 py-3 rounded-lg hover:bg-[#55b8e0] transition-colors font-medium"
          >
            Submit Application
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-400 transition-colors font-medium"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}