import React, { useState } from 'react';

// Define form data interface based on the image
interface EmployerFormData {
  registeredEntity: string;
  tradeName: string;
  industryType: string;
  businessServices: string;
  website: string;
  authorisedPerson: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  vacancyFile: File | null;
  referralSource: string;
  agreeToTerms: boolean;
  subscribeToJobAlert: boolean;
}

interface FormErrors {
  [key: string]: string;
}

export default function EmployerRegistrationForm(): React.JSX.Element {
  const [formData, setFormData] = useState<EmployerFormData>({
    registeredEntity: '',
    tradeName: '',
    industryType: '',
    businessServices: '',
    website: '',
    authorisedPerson: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    vacancyFile: null,
    referralSource: '',
    agreeToTerms: false,
    subscribeToJobAlert: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Handle text input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: target.checked,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0] || null;

    if (file) {
      // Validate file size (25MB max as shown in image)
      const maxSize = 25 * 1024 * 1024; // 25MB in bytes
      if (file.size > maxSize) {
        setErrors(prev => ({
          ...prev,
          vacancyFile: 'File size must not exceed 25MB',
        }));
        return;
      }

      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setErrors(prev => ({
          ...prev,
          vacancyFile: 'Only JPEG, PNG, PDF & .docx files are allowed',
        }));
        return;
      }

      setFormData(prev => ({
        ...prev,
        vacancyFile: file,
      }));

      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.vacancyFile;
        return newErrors;
      });
    }
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.registeredEntity.trim()) {
      newErrors.registeredEntity = 'Registered entity is required';
    }

    if (!formData.industryType) {
      newErrors.industryType = 'Industry type is required';
    }

    if (!formData.businessServices) {
      newErrors.businessServices = 'Business services is required';
    }

    if (!formData.authorisedPerson.trim()) {
      newErrors.authorisedPerson = 'Authorised person is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.referralSource) {
      newErrors.referralSource = 'Please select where you heard about us';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Create FormData for file upload
      const submitData = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'vacancyFile' && value instanceof File) {
          submitData.append(key, value);
        } else if (typeof value === 'boolean') {
          submitData.append(key, value.toString());
        } else if (value !== null) {
          submitData.append(key, value as string);
        }
      });

      const response = await fetch('/api/employer/register', {
        method: 'POST',
        body: submitData,
      });

      const result = await response.json();

      if (result.success) {
        // Handle success (redirect, show message, etc.)
        console.log('Registration successful');
      } else {
        setErrors(result.errors || { submit: 'Registration failed' });
      }
    } catch (error) {
      setErrors({ submit: error instanceof Error ? error.message : 'An error occurred' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Registered Entity */}
        <div className="flex flex-col">
          <label className="text-[14px] font-medium text-[#0F172A] mb-2">
            Registered Entity*
          </label>
          <input
            type="text"
            name="registeredEntity"
            value={formData.registeredEntity}
            onChange={handleInputChange}
            placeholder="Enter your entity name"
            className="px-4 py-2.5 border border-[#E2E8F0] text-[#4A5565] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {errors.registeredEntity && (
            <span className="text-red-500 text-xs mt-1">{errors.registeredEntity}</span>
          )}
        </div>

        {/* Trade Name */}
        <div className="flex flex-col">
          <label className="text-[14px] font-medium text-[#0F172A] mb-2">
            Trade Name
          </label>
          <input
            type="text"
            name="tradeName"
            value={formData.tradeName}
            onChange={handleInputChange}
            placeholder="Enter your trade name"
            className="px-4 py-2.5 border text-[#4A5565] border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Industry Type */}
        <div className="flex flex-col">
          <label className="text-[14px] font-medium text-[#0F172A] mb-2">
            Industry Type*
          </label>
          <select
            name="industryType"
            value={formData.industryType}
            onChange={handleInputChange}
            className="px-4 py-2.5 border border-[#E2E8F0]  text-[#4A5565] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
          >
            <option value="">Select your entity industry</option>
            <option value="technology">Technology</option>
            <option value="finance">Finance</option>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="retail">Retail</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="other">Other</option>
          </select>
          {errors.industryType && (
            <span className="text-red-500 text-xs mt-1">{errors.industryType}</span>
          )}
        </div>

        {/* Business Services */}
        <div className="flex flex-col">
          <label className="text-[14px] font-medium text-[#0F172A] mb-2">
            Business Services*
          </label>
          <select
            name="businessServices"
            value={formData.businessServices}
            onChange={handleInputChange}
            className="px-4 py-2.5 border border-[#E2E8F0] text-[#4A5565] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
          >
            <option value="">Select your business services</option>
            <option value="consulting">Consulting</option>
            <option value="development">Development</option>
            <option value="marketing">Marketing</option>
            <option value="sales">Sales</option>
            <option value="support">Support</option>
            <option value="other">Other</option>
          </select>
          {errors.businessServices && (
            <span className="text-red-500 text-xs mt-1">{errors.businessServices}</span>
          )}
        </div>

        {/* Website */}
        <div className="flex flex-col">
          <label className="text-[14px] font-medium text-[#0F172A] mb-2">
            Website
          </label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
            placeholder="Enter your website URL"
            className="px-4 py-2.5 border border-[#E2E8F0] text-[#4A5565] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Authorised Person */}
        <div className="flex flex-col">
          <label className="text-[14px] font-medium text-[#0F172A] mb-2">
            Authorised Person*
          </label>
          <input
            type="text"
            name="authorisedPerson"
            value={formData.authorisedPerson}
            onChange={handleInputChange}
            placeholder="Enter your name"
            className="px-4 py-2.5 border border-[#E2E8F0] rounded-lg text-[#4A5565] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {errors.authorisedPerson && (
            <span className="text-red-500 text-xs mt-1">{errors.authorisedPerson}</span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-[14px] font-medium text-[#0F172A] mb-2">
            Email*
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className="px-4 py-2.5 border border-[#E2E8F0] text-[#4A5565] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {errors.email && (
            <span className="text-red-500 text-xs mt-1">{errors.email}</span>
          )}
        </div>

        {/* Phone Number */}
        <div className="flex flex-col">
          <label className="text-[14px] font-medium text-[#0F172A] mb-2">
            Phone Number*
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value="+61"
              disabled
              className="w-16 px-3 py-2.5 border border-[#E2E8F0] text-[#4A5565] rounded-lg bg-gray-100 text-center"
            />
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder=""
              className="flex-1 px-4 py-2.5 border border-[#E2E8F0] text-[#4A5565] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          {errors.phoneNumber && (
            <span className="text-red-500 text-xs mt-1">{errors.phoneNumber}</span>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="text-[14px] font-medium text-[#0F172A] mb-2">
            Password*
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 border border-[#E2E8F0] text-[#4A5565] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              )}
            </button>
          </div>
          {errors.password && (
            <span className="text-red-500 text-xs mt-1">{errors.password}</span>
          )}
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col">
          <label className="text-[14px] font-medium text-[#0F172A] mb-2">
            Confirm Password*
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 border border-[#E2E8F0] text-[#4A5565] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showConfirmPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              )}
            </button>
          </div>
          {errors.confirmPassword && (
            <span className="text-red-500 text-xs mt-1">{errors.confirmPassword}</span>
          )}
        </div>
      </div>

      {/* Upload Vacancy File */}
      <div className="flex flex-col mt-6">
        <label className="text-[14px] font-medium text-[#0F172A] mb-2">
          Upload your vacancy
        </label>
        <div className="border-2 border-dashed  border-[#E2E8F0] rounded-lg p-8 text-center">
          <input
            type="file"
            id="vacancyFile"
            name="vacancyFile"
            onChange={handleFileChange}
            accept=".jpg,.jpeg,.png,.pdf,.docx"
            className="hidden"
          />
          <label
            htmlFor="vacancyFile"
            className="cursor-pointer flex flex-col items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mb-3">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
            <p className="text-gray-600 mb-1">
              Choose a file or drag & drop here
            </p>
            <p className="text-xs text-gray-500 mb-4">
              JPEG, PNG, PDF & .docx, up to 25MB
            </p>
            <button
              type="button"
              className="px-6 py-2 border border-[#E2E8F0] rounded-lg text-sm font-medium hover:bg-gray-50"
            >
              Browse File
            </button>
          </label>
          {formData.vacancyFile && (
            <p className="mt-3 text-sm text-green-600">
              Selected: {formData.vacancyFile.name}
            </p>
          )}
        </div>
        {errors.vacancyFile && (
          <span className="text-red-500 text-xs mt-1">{errors.vacancyFile}</span>
        )}
      </div>

      {/* Where did you hear about us */}
      <div className="flex flex-col mt-6">
        <label className="text-[14px] font-medium text-[#0F172A] mb-2">
          Where did you hear about us?*
        </label>
        <select
          name="referralSource"
          value={formData.referralSource}
          onChange={handleInputChange}
          className="px-4 py-2.5 border border-gray-300 text-[#4A5565] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
        >
          <option value="">Select an option</option>
          <option value="google">Google</option>
          <option value="linkedin">LinkedIn</option>
          <option value="facebook">Facebook</option>
          <option value="instagram">Instagram</option>
          <option value="indeed">Indeed</option>
          <option value="seek">Seek</option>
          <option value="referral">Referral</option>
          <option value="other">Other</option>
        </select>
        {errors.referralSource && (
          <span className="text-red-500 text-xs mt-1">{errors.referralSource}</span>
        )}
      </div>

      {/* Checkboxes */}
      <div className="flex flex-col gap-3 mt-6">
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleInputChange}
            className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700">
            I Agree to the{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Term and Conditions
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </span>
        </label>
        {errors.agreeToTerms && (
          <span className="text-red-500 text-xs">{errors.agreeToTerms}</span>
        )}

        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="subscribeToJobAlert"
            checked={formData.subscribeToJobAlert}
            onChange={handleInputChange}
            className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700">
            Subscribe for Job Alert
          </span>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full mt-8 py-3.5 bg-[#0A2E5C] text-white rounded-lg font-medium hover:bg-[#083157] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Registering...' : 'Register'}
      </button>

      {errors.submit && (
        <p className="text-red-500 text-sm text-center mt-4">{errors.submit}</p>
      )}
    </form>
  );
}