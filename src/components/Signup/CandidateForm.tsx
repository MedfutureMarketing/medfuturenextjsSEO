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
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-6">
        <div className="text-blue-400 text-sm font-semibold mb-4">466 × 58.67</div>
      </div>

      <div className="flex gap-3 mb-8">
        <button type="button" className="flex-1 py-2 bg-red-500 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-red-600">
          <span>G</span>
          <span className="hidden sm:inline">Google</span>
        </button>
        <button type="button" className="flex-1 py-2 bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700">
          <span>in</span>
          <span className="hidden sm:inline">LinkedIn</span>
        </button>
        <button type="button" className="flex-1 py-2 bg-blue-700 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-blue-800">
          <span>f</span>
          <span className="hidden sm:inline">Facebook</span>
        </button>
      </div>

      {!showEmailForm && (
        <button
          onClick={() => setShowEmailForm(true)}
          className="w-full py-3 bg-gray-400 text-white rounded-lg font-medium hover:bg-gray-500 transition"
        >
          Register via Email
        </button>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name*</label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter your first name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name*</label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter your last name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Profession & Specialty */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Profession*</label>
              <select
                name="profession"
                value={formData.profession}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="">Select your profession</option>
                <option value="engineer">Engineer</option>
                <option value="designer">Designer</option>
                <option value="manager">Manager</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Specialty*</label>
              <select
                name="specialty"
                value={formData.specialty}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Country*</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="">Select your country</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="australia">Australia</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">State*</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="">Select your state</option>
                <option value="ny">New York</option>
                <option value="ca">California</option>
                <option value="tx">Texas</option>
              </select>
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email*</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number*</label>
              <input
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="+61"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Password & Confirm Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password*</label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 text-lg"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password*</label>
              <div className="relative">
                <input
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 text-lg"
                >
                  {showConfirmPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>
          </div>

          {/* CV Upload */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">Upload your CV</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition">
              <input
                type="file"
                name="cv"
                accept=".pdf,.doc,.docx"
                className="hidden"
                id="cv-input"
              />
              <label htmlFor="cv-input" className="cursor-pointer block">
                <p className="text-sm text-gray-600">📁 Choose a file or drag & drop here</p>
                <p className="text-xs text-gray-500 mt-1">JPG, PNG & PDF max 2MB</p>
              </label>
            </div>
          </div>

          {/* Where did you hear about us */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">Where did you hear about us?*</label>
            <select
              name="whereDidYouHear"
              value={formData.whereDidYouHear}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="">Select an option</option>
              <option value="linkedin">LinkedIn</option>
              <option value="facebook">Facebook</option>
              <option value="google">Google</option>
              <option value="friend">Friend</option>
            </select>
          </div>

          {/* Checkboxes */}
          <div className="mb-6 space-y-3">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                required
              />
              <span className="text-sm text-gray-600">
                I agree to the <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
              </span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="subscribeToJobAlert"
                checked={formData.subscribeToJobAlert}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-600">Subscribe for Job Alerts</span>
            </label>
          </div>

          {/* Register Button */}
          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition"
          >
            Register
          </button>
        </div>
      )}
    </div>
  );
}