"use client"
import { useState, useRef } from "react";

export default function EmployerRegistrationForm() {
  const [formData, setFormData] = useState({
    registeredEntity: "",
    tradeName: "",
    industryType: "",
    businessServices: "",
    website: "",
    authorisedPerson: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    whereDidYouHear: "",
    agreeToTerms: false,
    subscribeForJobAlert: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : false;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData, uploadedFile);
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) setUploadedFile(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setUploadedFile(file);
  };

  const EyeIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );

  const EyeOffIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
    </svg>
  );

  const inputClass = "w-full px-4 py-3 text-gray-900 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white";
  const labelClass = "block text-sm font-medium text-gray-700 mb-2";

  return (
    <div className="min-h-screen ">
      <div className=" mx-auto bg-white  overflow-hidden">
        {/* Header */}
        <div className="">
          <h1 className="text-2xl font-bold text-blue-900">Employer Registration</h1>
          <p className="text-blue-100 mt-2 text-gray-500">Find and hire the best talent for your organization</p>
        </div>

        {/* Form Content */}
        <div className="p-0 mt-10 text-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Registered Entity */}
            <div>
              <label className={labelClass}>Registered Entity<span className="text-red-500">*</span></label>
              <input type="text" name="registeredEntity" value={formData.registeredEntity} onChange={handleInputChange} placeholder="Enter your entity name" className={inputClass} required />
            </div>

            {/* Trade Name */}
            <div>
              <label className={labelClass}>Trade Name</label>
              <input type="text" name="tradeName" value={formData.tradeName} onChange={handleInputChange} placeholder="Enter your trade name" className={inputClass} />
            </div>

            {/* Industry Type */}
            <div>
              <label className={labelClass}>Industry Type<span className="text-red-500">*</span></label>
              <div className="relative">
                <select name="industryType" value={formData.industryType} onChange={handleInputChange} className={`${inputClass} appearance-none`} required>
                  <option value="">Select your entity industry</option>
                  <option value="hospital">Hospital & Health Systems</option>
                  <option value="aged_care">Aged Care & Disability Services</option>
                  <option value="primary_care">Primary Care & General Practice</option>
                  <option value="mental_health">Mental Health Services</option>
                  <option value="allied_health">Allied Health Services</option>
                  <option value="pharmacy">Pharmacy</option>
                  <option value="pathology_radiology">Pathology & Radiology</option>
                  <option value="community_health">Community Health</option>
                  <option value="telehealth">Telehealth</option>
                  <option value="medical_education">Medical Education & Training</option>
                  <option value="other">Other</option>
                </select>
                <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Business Services */}
            <div>
              <label className={labelClass}>Business Services<span className="text-red-500">*</span></label>
              <div className="relative">
                <select name="businessServices" value={formData.businessServices} onChange={handleInputChange} className={`${inputClass} appearance-none`} required>
                  <option value="">Select your business services</option>
                  <option value="nursing_staffing">Nursing & Midwifery Staffing</option>
                  <option value="doctor_recruitment">Doctor & Specialist Recruitment</option>
                  <option value="allied_health_staffing">Allied Health Staffing</option>
                  <option value="aged_care_staffing">Aged Care Staffing</option>
                  <option value="mental_health_staffing">Mental Health Staffing</option>
                  <option value="locum_staffing">Locum & Temporary Staffing</option>
                  <option value="permanent_placement">Permanent Placement</option>
                  <option value="contract_staffing">Contract Staffing</option>
                  <option value="executive_search">Executive & Leadership Search</option>
                  <option value="other">Other</option>
                </select>
                <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Website */}
            <div>
              <label className={labelClass}>Website</label>
              <input type="url" name="website" value={formData.website} onChange={handleInputChange} placeholder="Enter your website URL" className={inputClass} />
            </div>

            {/* Authorised Person */}
            <div>
              <label className={labelClass}>Authorised Person<span className="text-red-500">*</span></label>
              <input type="text" name="authorisedPerson" value={formData.authorisedPerson} onChange={handleInputChange} placeholder="Enter your name" className={inputClass} required />
            </div>

            {/* Email */}
            <div>
              <label className={labelClass}>Email<span className="text-red-500">*</span></label>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" className={inputClass} required />
            </div>

            {/* Phone Number */}
            <div>
              <label className={labelClass}>Phone Number<span className="text-red-500">*</span></label>
              <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} placeholder="+61" className={inputClass} required />
            </div>

            {/* Password */}
            <div>
              <label className={labelClass}>Password<span className="text-red-500">*</span></label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleInputChange} placeholder="Min. 8 Characters" className={`${inputClass} pr-10`} required minLength={8} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className={labelClass}>Confirm Password<span className="text-red-500">*</span></label>
              <div className="relative">
                <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} placeholder="Min. 8 Characters" className={`${inputClass} pr-10`} required minLength={8} />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>
          </div>

          {/* Upload Vacancy */}
          <div className="mt-4">
            <label className={labelClass}>Upload your vacancy</label>
            <div
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleFileDrop}
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${isDragging ? "border-blue-500 bg-blue-50" : "border-[#E2E8F0] bg-gray-50"}`}
            >
              {uploadedFile ? (
                <div className="flex items-center justify-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-medium">{uploadedFile.name}</span>
                  <button type="button" onClick={() => setUploadedFile(null)} className="text-red-400 hover:text-red-600 ml-2 text-xs">(Remove)</button>
                </div>
              ) : (
                <>
                  <p className="text-gray-600 text-sm font-medium mb-1">Choose a file or drag &amp; drop here</p>
                  <p className="text-gray-400 text-xs mb-4">JPEG, PNG, PDF &amp; .docx, up to 25MB</p>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-6 py-2 border border-[#E2E8F0] rounded-lg text-sm text-gray-600 bg-white hover:bg-gray-100 transition"
                  >
                    Browse file
                  </button>
                </>
              )}
              <input ref={fileInputRef} type="file" accept=".jpg,.jpeg,.png,.pdf,.docx" className="hidden" onChange={handleFileChange} />
            </div>
          </div>

          {/* Where did you hear about us */}
          <div className="mt-4">
            <label className={labelClass}>Where did you hear about us?<span className="text-red-500">*</span></label>
            <div className="relative">
              <select name="whereDidYouHear" value={formData.whereDidYouHear} onChange={handleInputChange} className={`${inputClass} appearance-none`} required>
                <option value="">Select an option</option>
                <option value="google">Google</option>
                <option value="social_media">Social Media</option>
                <option value="friend">Friend / Referral</option>
                <option value="advertisement">Advertisement</option>
                <option value="other">Other</option>
              </select>
              <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Checkboxes */}
          <div className="mt-6 space-y-3">
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleInputChange} className="mt-1 w-4 h-4 text-blue-600 border-[#E2E8F0] rounded focus:ring-2 focus:ring-blue-500" required />
              <span className="text-sm text-gray-600">
                I Agree to the <button type="button" className="text-blue-600 hover:underline">Term and Conditions</button> and <button type="button" className="text-blue-600 hover:underline">Privacy Policy</button>
              </span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" name="subscribeForJobAlert" checked={formData.subscribeForJobAlert} onChange={handleInputChange} className="mt-1 w-4 h-4 text-blue-600 border-[#E2E8F0] rounded focus:ring-2 focus:ring-blue-500" />
              <span className="text-sm text-gray-600">Subscribe for Job Alert</span>
            </label>
          </div>

          {/* Register Button */}
          <button onClick={handleSubmit} className="w-full mt-6 py-4 bg-[#0A2E5C] text-white font-semibold rounded-lg hover:bg-[#083256] transition">
            Register
          </button>

          {/* Login Link */}
          <p className="text-center mt-4 text-sm text-gray-600">
            If you have an account, Please <button type="button" className="text-blue-600 hover:underline font-medium">Login</button>
          </p>
        </div>
      </div>
    </div>
  );
}