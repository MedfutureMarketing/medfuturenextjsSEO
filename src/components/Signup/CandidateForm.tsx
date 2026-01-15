import { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  profession: string;
  specialty: string;
  country: string;
  state: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  whereDidYouHear: string;
  agreeToTerms: boolean;
  subscribeToJobAlert: boolean;
}

interface CandidateFormProps {
  formData: FormData;
  setShowEmailForm: (value: boolean) => void;
  showEmailForm: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function CandidateForm({
  formData,
  setShowEmailForm,
  showEmailForm,
  handleInputChange,
  handleSubmit,
}: CandidateFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="w-full max-w-full mx-auto  mt-[93px] lg:px-[131px] ">


      <div className="flex justify-center gap-3 mb-8">
        <button type="button" className="flex-1 cursor-pointer py-2 bg-red-500 lg:w-[212px] h-[48px] text-white rounded-[8px] flex items-center justify-center gap-2 hover:bg-red-600">
          <span className='text-[16px] font-bold'>G</span>
          <span className="hidden sm:inline">Google</span>
        </button>
        <button type="button" className="flex-1 cursor-pointer py-0 bg-[#0A66C2] lg:w-[212px] text-white rounded-[8px] flex items-center justify-center gap-2 hover:bg-blue-700">
          <span className='h-[18px] w-[18px] font-bold bg-white text-[#0A66C2] rounded-[2px] flex items-center justify-center'>
            in
          </span>
          <span className="hidden sm:inline">LinkedIn</span>
        </button>
        <button type="button" className="flex-1 py-2 cursor-pointer bg-[#3A589B] lg:w-[212px] text-white rounded-[8px] flex items-center justify-center gap-2 hover:bg-blue-800">
          <span className='text-[18px] font-bold'>f</span>
          <span className="hidden sm:inline">Facebook</span>
        </button>
      </div>

      {!showEmailForm && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowEmailForm(true)}
            className="w-[212px] py-3 bg-gray-400 cursor-pointer text-white rounded-[4px] font-medium hover:bg-gray-500 transition"
          >
            Register via Email
          </button>
        </div>

      )}

      {showEmailForm && (
        <div className="animate-in fade-in duration-500">
          <button
            onClick={() => setShowEmailForm(false)}
            className="mb-6 text-blue-600 font-medium text-sm hover:text-blue-800"
          >
            ← Back
          </button>

          {/* First Name & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-[14px] text-xs font-medium text-[#0F172A] mb-2">First Name*</label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter your first name"
                className="w-full px-4 py-2 border border-[#E2E8F0] lg:h-[56px] lg:text-[14px] text-xs text-gray-500 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-[14px] text-xs font-medium text-[#0F172A] mb-2">Last Name*</label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter your last name"
                className="w-full px-4 py-2 border border-[#E2E8F0] lg:h-[56px] rounded-[4px] lg:text-[14px] text-xs text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Profession & Specialty */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-[14px] text-xs font-medium text-[#0F172A] mb-2">Profession*</label>
              <select
                name="profession"
                value={formData.profession}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-[#E2E8F0]  lg:h-[56px] rounded-[4px] lg:text-[14px] text-xs text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="">Select your profession</option>
                <option value="engineer">Engineer</option>
                <option value="designer">Designer</option>
                <option value="manager">Manager</option>
              </select>
            </div>
            <div>
              <label className="block text-[14px] text-xs font-medium text-[#0F172A] mb-2">Specialty*</label>
              <select
                name="specialty"
                value={formData.specialty}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-[#E2E8F0] lg:h-[56px] lg:text-[14px] text-xs text-gray-500 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="">Select your specialty</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="fullstack">Full Stack</option>
              </select>
            </div>
          </div>

          {/* Country & State */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-[14px] text-xs font-medium  text-[#0F172A] mb-2">Seniority*</label>
              <select
                name="Seniority"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-[#E2E8F0] lg:h-[56px] lg:text-[14px] text-xs text-gray-500 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="">Select your Seniority</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="australia">Australia</option>
              </select>
            </div>
            <div>
              <label className="block text-[14px] text-xs font-medium text-[#0F172A] mb-2">Registered Type*</label>
              <select
                name="Registered Type"
                value={formData.state}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-[#E2E8F0] lg:h-[56px] lg:text-[14px] text-xs text-gray-500 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="">Select your state</option>
                <option value="ny">APHRA</option>
                <option value="ca">SPA</option>
               
              </select>
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-[14px] text-xs font-medium text-[#0F172A] mb-2">Email*</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-[#E2E8F0] lg:h-[56px] rounded-[4px] lg:text-[14px] text-xs text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-[14px] text-xs font-medium text-[#0F172A] mb-2">Phone Number*</label>
              <input
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="+61"
                className="w-full px-4 py-2 border border-[#E2E8F0] lg:h-[56px] rounded-[4px] lg:text-[14px] text-xs text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Password & Confirm Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-[14px] text-xs font-medium text-[#0F172A] mb-2">Password*</label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter password"
                  className="w-full px-4 py-2 border border-[#E2E8F0] lg:h-[56px] lg:text-[14px] text-xs text-gray-500 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 text-lg"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-[14px] text-xs font-medium text-[#0F172A] mb-2">Confirm Password*</label>
              <div className="relative">
                <input
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm password"
                  className="w-full px-4 py-2 border border-[#E2E8F0] lg:h-[56px] lg:text-[14px] text-xs text-gray-500 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 text-lg"
                >
                  {showConfirmPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
          </div>

          {/* CV Upload */}
          <div className="mb-5">
            <label className="block text-[14px] text-xs font-medium text-[#0F172A] mb-2">Upload your CV</label>
            <div className="border-2 border-dashed border-[#E2E8F0] rounded-[4px] p-6 text-center cursor-pointer hover:border-blue-500 transition">
              <input
                type="file"
                name="cv"
                accept=".pdf,.doc,.docx"
                className="hidden"
                id="cv-input"
              />
              <label htmlFor="cv-input" className="cursor-pointer block">
                <p className="text-sm text-gray-600">Choose a file or drag & drop here</p>
                <p className="text-xs text-gray-500 mt-1">JPEG,PNG,PDF & .docx, up to 25MB </p>
              </label>
            </div>
          </div>

          {/* Where did you hear about us */}
          <div className="mb-5">
            <label className="block text-[14px] text-xs font-medium text-[#0F172A] mb-2">Where did you hear about us?*</label>
            <select
              name="whereDidYouHear"
              value={formData.whereDidYouHear}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border lg:h-[56px] text-gray-600 border-[#E2E8F0] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="">Select an option</option>
              <option value="google">Google</option>
              <option value="linkedin">LinkedIn</option>
              <option value="facebook">Facebook</option>
              <option value="friend">Referal Website</option>
            </select>
          </div>



          {/* Register Button */}
          <button
            onClick={handleSubmit}
            className="w-full h-[56px] py-3 bg-[#074CA4] cursor-pointer text-white rounded-[4px] font-medium hover:bg-blue-800 transition"
          >
            Register
          </button>
        </div>
      )}
      {/* Checkboxes */}
      <div className="mb-6 text-center space-y-3 mt-[86px]">
        <label className="flex items-center justify-center gap-3 cursor-pointer">
          {/* <input
      type="checkbox"
      name="agreeToTerms"
      checked={formData.agreeToTerms}
      onChange={handleInputChange}
      className="mt-1 w-4 h-4 rounded border-[#E2E8F0] accent-blue-500 text-blue-600 focus:ring-blue-500"
      required
    /> */}
          <span className="text-sm text-gray-600 text-center">
            By registration you agree to <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
          </span>
        </label>
        <label className="flex items-center justify-center gap-3 cursor-pointer">
          {/* <input
      type="checkbox"
      name="subscribeToJobAlert"
      checked={formData.subscribeToJobAlert}
      onChange={handleInputChange}
      className="mt-1 w-4 h-4 rounded border-[#E2E8F0] accent-blue-500  text-blue-600 focus:ring-blue-500"
    /> */}
          <span className="text-sm text-gray-600 text-center">If you have an account, Please Login</span>
        </label>
      </div>
    </div>
  );
}