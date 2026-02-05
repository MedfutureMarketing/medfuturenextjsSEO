import { useState, useEffect, useRef } from 'react';

import { API_BASE_URL } from "../../lib/api";

type Profession = {
  profession_id: number;
  name: string;
};

type Speciality = {
  specialities_id: number;
  name: string;
};

type Seniority = {
  seniorities_id: number;
  name: string;
};

interface FormData {
  firstName: string;
  lastName: string;
  profession: string;
  specialty: string;
  seniority: string;
  registered_type: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  whereDidYouHear: string;
  cv: File | null;
  agreeToTerms: boolean;
  subscribe_for_job_alert: boolean;
}

const verifyEmailFormat = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default function CandidateForm() {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState(false);

  // Dynamic data states
  const [professions, setProfessions] = useState<Profession[]>([]);
  const [specialities, setSpecialities] = useState<Speciality[]>([]);
  const [seniorities, setSeniorities] = useState<Seniority[]>([]);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [notification, setNotification] = useState({
    show: false,
    title: "",
    message: "",
    type: "success" as "success" | "error",
  });

  const cvInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    profession: '',
    specialty: '',
    seniority: '',
    registered_type: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    whereDidYouHear: '',
    cv: null,
    agreeToTerms: false,
    subscribe_for_job_alert: false,
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    profession: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    whereDidYouHear: '',
  });

  const getRegistrationTypeConfig = () => {
    const selectedProfession = professions.find(
      (p) => p.profession_id.toString() === formData.profession
    );

    if (!selectedProfession) {
      return {
        label: "Registered Type",
        options: []
      };
    }

    const professionName = selectedProfession.name.toLowerCase();

    if (professionName.includes('speech pathologist')) {
      return {
        label: "What's your registration type with SPA?",
        options: ['Accredited', 'Non Accredited']
      };
    } else if (professionName.includes('exercise physiologist')) {
      return {
        label: "Are you registered with ESSA?",
        options: ['Accredited', 'Non Accredited']
      };
    } else if (professionName.includes('behavior support practitioner') || professionName.includes('behaviour support practitioner')) {
      return {
        label: "Are you registered with NDIS?",
        options: ['Registered', 'Not registered']
      };
    } else {
      return {
        label: "What's your registration type with AHPRA?",
        options: ['Limited', 'Provisional', 'General', 'Specialist', 'Non-Practising', 'Not registered']
      };
    }
  };

  const registrationConfig = getRegistrationTypeConfig();

  // Fetch professions, specialities
  useEffect(() => {
    const fetchMeta = async () => {
      try {
        const res = await fetch(
          `${API_BASE_URL}/web/profession-and-speciality/get-all`
        );
        const data = await res.json();
        setProfessions(data.professions || []);
        setSpecialities(data.specialities || []);
      } catch (error) {
        console.error("Failed to fetch professions and specialities", error);
      }
    };

    fetchMeta();
  }, []);

  useEffect(() => {
    const fetchSeniorities = async () => {
      try {
        const res = await fetch(
          `${API_BASE_URL}/web/seniority/get-all`
        );
        const data = await res.json();
        setSeniorities(data || []);
      } catch (error) {
        console.error("Failed to fetch seniority", error);
      }
    };

    fetchSeniorities();
  }, []);


  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (!file) return;

    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'image/jpeg',
      'image/png',
    ];

    const maxFileSize = 25 * 1024 * 1024; // 25MB

    if (!allowedTypes.includes(file.type)) {
      setFormErrors((prev) => ({
        ...prev,
        cv: 'Only PDF, DOC, DOCX, JPEG, or PNG allowed',
      }));
      setUploadedFile(null);
      return;
    }

    if (file.size > maxFileSize) {
      setFormErrors((prev) => ({
        ...prev,
        cv: 'File size exceeds the 25 MB limit',
      }));
      setUploadedFile(null);
      return;
    }

    setFormErrors((prev) => ({
      ...prev,
      cv: '',
    }));
    setUploadedFile(file);
    setFormData((prev) => ({ ...prev, cv: file }));
  };

  const validateForm = () => {
    const newErrors = {
      firstName: !formData.firstName ? 'Please enter your first name' : '',
      lastName: !formData.lastName ? 'Please enter your last name' : '',
      email: !formData.email
        ? 'Please enter your email address'
        : !verifyEmailFormat(formData.email)
          ? 'Please enter a valid email address'
          : '',
      phoneNumber: !formData.phoneNumber ? 'Please enter your phone number' : '',
      profession: !formData.profession ? 'Please select a profession' : '',
      specialty: !formData.specialty ? 'Please select a specialty' : '',
      password: !formData.password
        ? 'Please enter a password'
        : formData.password.length < 6
          ? 'Password must be at least 6 characters'
          : '',
      confirmPassword: !formData.confirmPassword
        ? 'Please confirm your password'
        : formData.password !== formData.confirmPassword
          ? 'Passwords do not match'
          : '',
      whereDidYouHear: !formData.whereDidYouHear
        ? 'Please select where you heard about us'
        : '',
    };

    setFormErrors(newErrors);
    return newErrors;
  };

  useEffect(() => {
    if (touched) {
      validateForm();
    }
  }, [touched, formData, uploadedFile]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreeToTerms) {
      setNotification({
        show: true,
        title: 'Warning',
        message: 'Please agree to the Terms & Conditions and Privacy Policy',
        type: 'error',
      });
      return;
    }

    setTouched(true);
    const errors = validateForm();

    if (Object.values(errors).some((error) => error)) {
      return;
    }

    try {
      setIsSubmitting(true);

      // Upload CV first
      const randomNumber = Math.floor(Math.random() * 1000000);
      const fileData = new FormData();
      fileData.append('image', uploadedFile!);
      fileData.append('folder_path', 'desktop/candidate_resume');
      fileData.append('file_name', `${formData.firstName}_${randomNumber}`);

      const fileUploadResponse = await fetch(`${API_BASE_URL}/upload`, {
        method: 'POST',
        body: fileData,
      });

      if (!fileUploadResponse.ok) {
        throw new Error('File upload failed');
      }

      const fileUploadResult = await fileUploadResponse.json();

      if (!fileUploadResult || !fileUploadResult.fileName) {
        throw new Error('File upload failed - no filename returned');
      }

      // Prepare candidate registration data
      const requestBody = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        mobile: formData.phoneNumber,
        profession: parseInt(formData.profession),
        speciality: parseInt(formData.specialty),
        seniority: parseInt(formData.seniority),
        registered_type: formData.registered_type,
        hear_us: formData.whereDidYouHear,
        resume: fileUploadResult.fileName,
        role_name: 'candidate',
        access_status: true,
        password: formData.password,
        subscribe_for_job_alert: formData.subscribe_for_job_alert,
      };

      console.log('Submitting registration:', requestBody);

      const response = await fetch(`${API_BASE_URL}/web/candidate/save/new`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        let errorMessage = 'Registration failed';
        try {
          const errorResponse = await response.json();
          errorMessage = errorResponse.message || errorResponse.error || errorMessage;
          console.error('API Error Response:', errorResponse);
        } catch (e) {
          const textError = await response.text();
          errorMessage = textError || `HTTP error! status: ${response.status}`;
        }
        throw new Error(errorMessage);
      }

      const result = await response.json();

      if (result) {
        setNotification({
          show: true,
          title: 'Registration Successful',
          message: 'Thank you for registering.',
          type: 'success',
        });

        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          profession: '',
          specialty: '',
          seniority: '',
          registered_type: '',
          email: '',
          phoneNumber: '',
          password: '',
          confirmPassword: '',
          whereDidYouHear: '',
          cv: null,
          agreeToTerms: false,
          subscribe_for_job_alert: false,
        });
        setUploadedFile(null);
        setTouched(false);
        setShowEmailForm(false);
        if (cvInputRef.current) {
          cvInputRef.current.value = '';
        }
      }
    } catch (error: unknown) {
      let errorMessage = 'An error occurred during registration.';

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      setNotification({
        show: true,
        title: 'Registration Error',
        message: errorMessage,
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${API_BASE_URL}/web/auth/google/redirect`;
  };

  const handleLinkedInLogin = () => {
    window.location.href = `${API_BASE_URL}/web/auth/linkedin/redirect`;
  };

  const handleFacebookLogin = () => {
    window.location.href = `${API_BASE_URL}/web/auth/facebook/redirect`;
  };

  return (
    <div className="w-full max-w-full mx-auto mt-[93px] lg:px-[90px] ">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-4 gap-4 mb-4">
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="flex-1 py-2 bg-red-500 cursor-pointer lg:w-[212px] h-[48px] text-white rounded flex items-center justify-center gap-2 hover:bg-red-600"
        >
          <span className="text-[16px] font-bold">G</span>
          <span className="">Google</span>
        </button>
        <button
          type="button"
          onClick={handleLinkedInLogin}
          className="flex-1 py-2 bg-[#0A66C2] cursor-pointer lg:w-[212px] text-white rounded-[4px] flex items-center justify-center gap-2 hover:bg-blue-700"
        >
          <span className="h-[18px] w-[18px] font-bold bg-white text-[#0A66C2] rounded-[2px] flex items-center justify-center">
            in
          </span>
          <span className="">LinkedIn</span>
        </button>
        <button
          type="button"
          onClick={handleFacebookLogin}
          className="flex-1 py-2 bg-[#3A589B] lg:w-[212px] cursor-pointer text-white rounded-[4px] flex items-center justify-center gap-2 hover:bg-blue-800"
        >
          <span className="text-[18px] font-bold">f</span>
          <span className=" ">Facebook</span>
        </button>
      </div>

      {!showEmailForm && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowEmailForm(true)}
            className="lg:w-[222px] w-full py-3 bg-gray-400 cursor-pointer text-white rounded-[4px] font-medium hover:bg-gray-500 transition"
          >
            Register via Email
          </button>
        </div>
      )}

      {showEmailForm && (
        <form onSubmit={handleSubmit} className="animate-in fade-in duration-500">
          <button
            type="button"
            onClick={() => setShowEmailForm(false)}
            className="mb-6 text-blue-600 font-medium text-sm hover:text-blue-800"
          >
            ← Back
          </button>

          {/* First Name & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-[14px] text-xs font-medium text-[#0F172A] mb-2">
                First Name*
              </label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter your first name"
                className={`w-full px-4 py-2 border lg:h-[56px] lg:text-[14px] text-xs text-gray-500 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.firstName ? 'border-red-500' : 'border-[#E2E8F0]'
                  }`}
              />
              {formErrors.firstName && (
                <div className="mt-1 text-xs text-red-600">{formErrors.firstName}</div>
              )}
            </div>
            <div>
              <label className="block text-[14px] text-xs font-medium text-[#0F172A] mb-2">
                Last Name*
              </label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter your last name"
                className={`w-full px-4 py-2 border lg:h-[56px] rounded-[4px] lg:text-[14px] text-xs text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.lastName ? 'border-red-500' : 'border-[#E2E8F0]'
                  }`}
              />
              {formErrors.lastName && (
                <div className="mt-1 text-xs text-red-600">{formErrors.lastName}</div>
              )}
            </div>
          </div>

          {/* Profession & Specialty */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-[14px] text-xs font-medium text-[#0F172A] mb-2">
                Profession*
              </label>
              <select
                name="profession"
                value={formData.profession}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border lg:h-[56px] rounded-[4px] lg:text-[14px] text-xs text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white ${formErrors.profession ? 'border-red-500' : 'border-[#E2E8F0]'
                  }`}
              >
                <option value="">Select your profession</option>
                {professions.map((p) => (
                  <option key={p.profession_id} value={p.profession_id}>
                    {p.name}
                  </option>
                ))}
              </select>
              {formErrors.profession && (
                <div className="mt-1 text-xs text-red-600">{formErrors.profession}</div>
              )}
            </div>
            <div>
              <label className="block text-[14px] text-xs font-medium text-[#0F172A] mb-2">
                Specialty
              </label>
              <select
                name="specialty"
                value={formData.specialty}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border border-gray-300 lg:h-[56px] lg:text-[14px] text-xs text-gray-500 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white`}
              >
                <option value="">Select your specialty</option>
                {specialities.map((s) => (
                  <option key={s.specialities_id} value={s.specialities_id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-[14px] text-xs font-medium  text-[#0F172A] mb-2">Seniority</label>
              <select
                name="seniority"
                value={formData.seniority}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-[#E2E8F0] lg:h-[56px] lg:text-[14px] text-xs text-gray-500 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="">Select your Seniority</option>
                {seniorities.map((s) => (
                  <option key={s.seniorities_id} value={s.seniorities_id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-[14px] text-xs font-medium text-[#0F172A] mb-2">
                {registrationConfig.label}
              </label>
              <select
                name="registered_type"
                value={formData.registered_type}
                onChange={handleInputChange}
                disabled={!formData.profession}
                className="w-full px-4 py-2 border border-[#E2E8F0] lg:h-[56px] lg:text-[14px] text-xs text-gray-500 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
              >
                <option value="">Select registration type</option>
                {registrationConfig.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-[14px] text-xs font-medium text-[#0F172A] mb-2">
                Email*
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className={`w-full px-4 py-2 border lg:h-[56px] rounded-[4px] lg:text-[14px] text-xs text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.email ? 'border-red-500' : 'border-[#E2E8F0]'
                  }`}
              />
              {formErrors.email && (
                <div className="mt-1 text-xs text-red-600">{formErrors.email}</div>
              )}
            </div>
            <div>
              <label className="block text-[14px] text-xs font-medium text-[#0F172A] mb-2">
                Phone Number*
              </label>
              <input
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="+61"
                className={`w-full px-4 py-2 border lg:h-[56px] rounded-[4px] lg:text-[14px] text-xs text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.phoneNumber ? 'border-red-500' : 'border-[#E2E8F0]'
                  }`}
              />
              {formErrors.phoneNumber && (
                <div className="mt-1 text-xs text-red-600">{formErrors.phoneNumber}</div>
              )}
            </div>
          </div>

          {/* Password & Confirm Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-[14px] text-xs font-medium text-[#0F172A] mb-2">
                Password*
              </label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter password"
                  className={`w-full px-4 py-2 border lg:h-[56px] lg:text-[14px] text-xs text-gray-500 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 ${formErrors.password ? 'border-red-500' : 'border-[#E2E8F0]'
                    }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-4 text-gray-400 hover:text-gray-600 cursor-pointer text-sm"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              {formErrors.password && (
                <div className="mt-1 text-xs text-red-600">{formErrors.password}</div>
              )}
            </div>
            <div>
              <label className="block text-[14px] text-xs font-medium text-[#0F172A] mb-2">
                Confirm Password*
              </label>
              <div className="relative">
                <input
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm password"
                  className={`w-full px-4 py-2 border lg:h-[56px] lg:text-[14px] text-xs text-gray-500 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 ${formErrors.confirmPassword ? 'border-red-500' : 'border-[#E2E8F0]'
                    }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-4 text-gray-400 hover:text-gray-600 cursor-pointer text-sm"
                >
                  {showConfirmPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              {formErrors.confirmPassword && (
                <div className="mt-1 text-xs text-red-600">{formErrors.confirmPassword}</div>
              )}
            </div>
          </div>

          {/* CV Upload */}
          <div className="mb-5">
            <label className="block text-[14px] text-xs font-medium text-[#0F172A] mb-2">
              Upload your CV
            </label>
            <div
              className={`border-2 border-dashed rounded-[4px] p-6 text-center cursor-pointer hover:border-blue-500 transition`}
            >
              <input
                ref={cvInputRef}
                type="file"
                name="cv"
                accept=".pdf,.doc,.docx,.jpeg,.jpg,.png"
                onChange={handleFileChange}
                className="hidden"
                id="cv-input"
              />
              <label htmlFor="cv-input" className="cursor-pointer block">
                <p className="text-sm text-gray-600">
                  {uploadedFile ? uploadedFile.name : 'Choose a file or drag & drop here'}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  JPEG, PNG, PDF & .docx, up to 25MB
                </p>
              </label>
            </div>
          </div>

          {/* Where did you hear about us */}
          <div className="mb-5">
            <label className="block text-[14px] text-xs font-medium text-[#0F172A] mb-2">
              Where did you hear about us?*
            </label>
            <select
              name="whereDidYouHear"
              value={formData.whereDidYouHear}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border lg:h-[56px] text-gray-600 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white ${formErrors.whereDidYouHear ? 'border-red-500' : 'border-[#E2E8F0]'
                }`}
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
            {formErrors.whereDidYouHear && (
              <div className="mt-1 text-xs text-red-600">{formErrors.whereDidYouHear}</div>
            )}
          </div>

          {/* Subscribe Checkbox */}
          <label className="flex items-start  mb-3 mt-16 gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              className="mt-1 w-4 h-4 rounded border-[#E2E8F0] accent-blue-500 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-600 text-center">
              By registration you agree to{' '}
              <a href="/terms" className="text-blue-600 hover:underline">
                Terms and Conditions
              </a>{' '}
              and{' '}
              <a href="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
            </span>
          </label>
          <div className="mb-5">
            <label className="flex items-start gap-2 text-sm text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                name="subscribe_for_job_alert"
                checked={formData.subscribe_for_job_alert}
                onChange={handleInputChange}
                className="mt-1 w-[18px] h-[18px] accent-[#074CA4]"
              />
              <span>Subscribe for job alerts</span>
            </label>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-[56px] py-3 bg-[#074CA4] cursor-pointer text-white rounded-[4px] font-medium hover:bg-blue-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Registering...' : 'Register'}
          </button>
        </form>
      )}

      {/* Checkboxes */}
      <div className="mb-6 text-center space-y-3 mt-[86px]">

        <label className="flex items-center justify-center gap-3">
          <span className="text-sm text-gray-600 text-center">
            If you have an account,{' '}
            <a href="/login" className="text-blue-600 hover:underline">
              Please Login
            </a>
          </span>
        </label>
      </div>

      {/* Notification Popup */}
      {notification.show && (
        <div className="fixed inset-0 bg-white/20 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md mx-4">
            <h3
              className={`text-xl font-bold mb-2 ${notification.type === 'success' ? 'text-green-600' : 'text-red-600'
                }`}
            >
              {notification.title}
            </h3>
            <p className="text-gray-700 mb-4">{notification.message}</p>
            <button
              onClick={() => setNotification({ ...notification, show: false })}
              className="bg-[#074CA4] text-white px-4 py-2 rounded hover:bg-[#055a8a] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}