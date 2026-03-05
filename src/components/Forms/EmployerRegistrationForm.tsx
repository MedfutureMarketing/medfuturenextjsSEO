import { API_BASE_URL } from "@/lib/api";
import { useState, useRef, useEffect, useCallback } from "react";
import { PhoneInput } from "react-international-phone";
import 'react-international-phone/style.css';


interface FormErrors {
  company_name?: string;
  trade_name?: string;
  industry_type?: string;
  official_contact_name?: string;
  business_services?: string;
  email?: string;
  mobile?: string;
  password?: string;
  confirmPassword?: string;
  hear_about_us?: string;
}

export default function EmployerRegistrationForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [industryTypes, setIndustryTypes] = useState<
    { id: number; name: string }[]
  >([]);
  const [businessServices, setBusinessServices] = useState<
    { businesss_services_id: string; name: string }[]
  >([]);

  const [formData, setFormData] = useState({
    company_name: "",
    trade_name: "",
    industry_type: "",
    website: "",
    official_contact_name: "",
    designation: "",
    email: "",
    mobile: "",
    business_services: "",
    password: "",
    confirmPassword: "",
    hear_about_us: "",
    agreeToTerms: false,
    subscribeForJobAlert: false,
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [notification, setNotification] = useState({
    show: false,
    title: "",
    message: "",
    type: "success" as "success" | "error",
  });

  /* ================= EMAIL VALIDATION ================= */
  const verifyEmailFormat = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  /* ================= FORM VALIDATION ================= */
  const validateForm = useCallback(() => {
    const newErrors = {
      company_name: !formData.company_name ? "Company name is required" : "",
      trade_name: !formData.trade_name ? "Trade name is required" : "",
      industry_type: !formData.industry_type ? "Industry type is required" : "",
      official_contact_name: !formData.official_contact_name
        ? "Contact name is required"
        : "",
      business_services: !formData.business_services
        ? "Business services is required"
        : "",
      email: !formData.email
        ? "Email is required"
        : !verifyEmailFormat(formData.email)
          ? "Invalid email format"
          : "",
      mobile: !formData.mobile ? "Mobile number is required" : "",
      password:
        formData.password.length < 8
          ? "Password must be at least 8 characters"
          : "",
      confirmPassword:
        formData.password !== formData.confirmPassword
          ? "Passwords do not match"
          : "",
      hear_about_us: !formData.hear_about_us ? "Please select an option" : "",
    };

    setFormErrors(newErrors);
    return newErrors;
  }, [formData, uploadedFile]);

  useEffect(() => {
    if (touched) validateForm();
  }, [formData, touched, validateForm]);

  /* ================= INPUT HANDLER ================= */
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, type, value } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  /* ================= FILE VALIDATION ================= */
  const validateFile = (file: File) => {
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpeg",
      "image/png",
    ];

    const maxSize = 25 * 1024 * 1024;

    if (!allowedTypes.includes(file.type)) {
      setNotification({
        show: true,
        title: "Invalid File",
        message: "Only PDF, DOC, DOCX, JPG, PNG allowed",
        type: "error",
      });
      return false;
    }

    if (file.size > maxSize) {
      setNotification({
        show: true,
        title: "File Too Large",
        message: "Maximum file size is 25MB",
        type: "error",
      });
      return false;
    }

    return true;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!validateFile(file)) return;
    setUploadedFile(file);
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (!file) return;
    if (!validateFile(file)) return;
    setUploadedFile(file);
  };

  useEffect(() => {
    const fetchIndustryTypes = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/web/getAllClientIndustryTypes`,
          {
            headers: {
              accept: "application/json",
            },
          },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch industry types");
        }

        const data = await response.json();

        // Adjust this if your API structure is different
        setIndustryTypes(data?.data || data || []);
      } catch (error) {
        console.error("Industry types fetch error:", error);
      }
    };

    fetchIndustryTypes();
  }, []);

  useEffect(() => {
    const fetchBusinessServices = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/web/businesss_services/get-all`,
          {
            headers: {
              accept: "application/json",
            },
          },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch business services");
        }

        const data = await response.json();

        // Adjust this if your API structure is different
        setBusinessServices(data?.data || data || []);
      } catch (error) {
        console.error("Business services fetch error:", error);
      }
    };

    fetchBusinessServices();
  }, []);

  /* ================= SUBMIT ================= */
  const handleSubmit = async () => {
    if (!formData.agreeToTerms) {
      setNotification({
        show: true,
        title: "Warning",
        message: "You must agree to Terms & Conditions",
        type: "error",
      });
      return;
    }

    setTouched(true);
    const errors = validateForm();
    console.log("Validation Errors:", errors);
    if (Object.values(errors).some((error) => error)) return;

    try {
      setIsSubmitting(true);

      let uploadedFileName = null;

      /* ===== FILE UPLOAD ===== */
      if (uploadedFile) {
        const fileData = new FormData();
        fileData.append("image", uploadedFile);
        fileData.append("folder_path", "desktop/client_vacancy");
        fileData.append(
          "file_name",
          `${formData.company_name}_${Math.floor(Math.random() * 1000000)}`,
        );

        const uploadResponse = await fetch(`${API_BASE_URL}/upload`, {
          method: "POST",
          body: fileData,
        });

        if (!uploadResponse.ok) {
          throw new Error("File upload failed");
        }

        const contentType = uploadResponse.headers.get("content-type");

        let uploadResult;
        if (contentType?.includes("application/json")) {
          uploadResult = await uploadResponse.json();
        } else {
          const text = await uploadResponse.text();
          throw new Error(text || "Invalid upload response");
        }

        if (!uploadResult?.fileName) {
          throw new Error("Upload failed - no filename returned");
        }

        uploadedFileName = uploadResult.fileName;
      }

      /* ===== REQUEST BODY ===== */
      const requestBody = {
        company_name: formData.company_name,
        trade_name: formData.trade_name || null,
        brand_name: formData.trade_name || null,
        industry_type: formData.industry_type,
        website: formData.website || null,
        official_contact_name: formData.official_contact_name,
        business_services: formData.business_services,
        email: formData.email,
        mobile: formData.mobile,
        password: formData.password,
        vacancy_profile: uploadedFileName,
        hear_about_us: formData.hear_about_us || null,
        subscribe_for_job_alert: formData.subscribeForJobAlert,
      };

      const response = await fetch(`${API_BASE_URL}/web/client/save`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        let errorMessage = "Registration failed";
        try {
          const errorResponse = await response.json();
          errorMessage =
            errorResponse.message || errorResponse.error || errorMessage;
        } catch {
          errorMessage = await response.text();
        }
        throw new Error(errorMessage);
      }

      await response.json();

      /* ===== SUCCESS ===== */
      setNotification({
        show: true,
        title: "Registration Successful",
        message: "Employer account created successfully.",
        type: "success",
      });

      /* ===== RESET ===== */
      setFormData({
        company_name: "",
        trade_name: "",
        industry_type: "",
        website: "",
        official_contact_name: "",
        designation: "",
        email: "",
        mobile: "",
        business_services: "",
        password: "",
        confirmPassword: "",
        hear_about_us: "",
        agreeToTerms: false,
        subscribeForJobAlert: false,
      });

      setUploadedFile(null);
      setTouched(false);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Something went wrong";

      setNotification({
        show: true,
        title: "Error",
        message: errorMessage,
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const EyeIcon = () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  );

  const EyeOffIcon = () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
      />
    </svg>
  );

  const inputClass =
    "w-full px-4 py-3 text-gray-900 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white";
  const labelClass = "block text-sm font-medium text-gray-700 mb-2";

  return (
    <div className="min-h-screen ">
      <div className=" mx-auto bg-white  overflow-hidden">
        {/* Header */}
        <div className="">
          <h1 className="text-2xl font-bold text-blue-900">
            Employer Registration
          </h1>
          <p className="text-blue-100 mt-2 text-gray-500">
            Find and hire the best talent for your organization
          </p>
        </div>

        {notification.show && (
          <div
            className={`mb-4 p-4 rounded-lg ${
              notification.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            <h4 className="font-semibold">{notification.title}</h4>
            <p>{notification.message}</p>
            <button
              onClick={() => setNotification({ ...notification, show: false })}
              className="mt-2 text-sm underline"
            >
              Close
            </button>
          </div>
        )}

        {/* Form Content */}
        <div className="p-0 mt-10 text-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Registered Entity */}
            <div>
              <label className={labelClass}>
                Registered Entity<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="company_name"
                value={formData.company_name}
                onChange={handleInputChange}
                placeholder="Enter your entity name"
                className={inputClass}
                required
              />
              {formErrors.company_name && touched && (
                <span className="text-red-500 text-xs mt-1">
                  {formErrors.company_name}
                </span>
              )}
            </div>

            {/* Trade Name */}
            <div>
              <label className={labelClass}>
                Trade Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="trade_name"
                value={formData.trade_name}
                onChange={handleInputChange}
                placeholder="Enter your trade name"
                className={inputClass}
                required
              />
              {formErrors.trade_name && touched && (
                <span className="text-red-500 text-xs mt-1">
                  {formErrors.trade_name}
                </span>
              )}
            </div>

            {/* Industry Type */}
            <div>
              <label className={labelClass}>
                Industry Type<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  name="industry_type"
                  value={formData.industry_type}
                  onChange={handleInputChange}
                  className={`${inputClass} appearance-none`}
                  required
                >
                  <option value="">Select your entity industry</option>

                  {industryTypes.map((industry) => (
                    <option key={industry.id} value={industry.id}>
                      {industry.name}
                    </option>
                  ))}
                </select>
                <svg
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {formErrors.industry_type && touched && (
                <span className="text-red-500 text-xs mt-1">
                  {formErrors.industry_type}
                </span>
              )}
            </div>

            {/* Business Services */}
            <div>
              <label className={labelClass}>
                Business Services<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  name="business_services"
                  value={formData.business_services}
                  onChange={handleInputChange}
                  className={`${inputClass} appearance-none`}
                  required
                >
                  <option value="">Select your business services</option>

                  {businessServices.map((service) => (
                    <option
                      key={service.businesss_services_id}
                      value={service.businesss_services_id}
                    >
                      {service.name}
                    </option>
                  ))}
                </select>
                <svg
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {formErrors.business_services && touched && (
                <span className="text-red-500 text-xs mt-1">
                  {formErrors.business_services}
                </span>
              )}
            </div>

            {/* Website */}
            <div>
              <label className={labelClass}>Website</label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                placeholder="Enter your website URL"
                className={inputClass}
              />
            </div>

            {/* Authorised Person */}
            <div>
              <label className={labelClass}>
                Authorized Person<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="official_contact_name"
                value={formData.official_contact_name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className={inputClass}
                required
              />
              {formErrors.official_contact_name && touched && (
                <span className="text-red-500 text-xs mt-1">
                  {formErrors.official_contact_name}
                </span>
              )}
            </div>

            {/* Email */}
            <div>
              <label className={labelClass}>
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className={inputClass}
                required
              />
              {formErrors.email && touched && (
                <span className="text-red-500 text-xs mt-1">
                  {formErrors.email}
                </span>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className={labelClass}>
                Phone Number<span className="text-red-500">*</span>
              </label>
              <PhoneInput
                  forceDialCode={true}
                  defaultCountry="au"
                  countrySelectorStyleProps={{
                    buttonStyle: {
                      zIndex: 5,
                      position: "absolute",
                      left: 0,
                      height: "38px",
                      width: "56px",
                      border: "none",
                      paddingTop: "10px",
                      paddingBottom: "0px",
                      backgroundColor: "transparent",
                      cursor: "pointer",
                    },
                  }}
                  onChange={(mobile) => setFormData({ ...formData, mobile })}
                  inputProps={{
                    id: "mobile",
                    autoComplete: "off",
                    className: `w-full lg:text-[14px] text-xs text-gray-500 pl-16 focus:outline-none bg-white border-2 ${formErrors.mobile ? 'border-red-300' : 'border-[#e6e8ebff]'                   } rounded-md h-[50px] px-3`,
                  }}
                  value={formData.mobile}
                />
              {formErrors.mobile && touched && (
                <span className="text-red-500 text-xs mt-1">
                  {formErrors.mobile}
                </span>
              )}
            </div>

            {/* Password */}
            <div>
              <label className={labelClass}>
                Password<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Min. 8 Characters"
                  className={`${inputClass} pr-10`}
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
              {formErrors.password && touched && (
                <span className="text-red-500 text-xs mt-1">
                  {formErrors.password}
                </span>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className={labelClass}>
                Confirm Password<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Min. 8 Characters"
                  className={`${inputClass} pr-10`}
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
              {formErrors.confirmPassword && touched && (
                <span className="text-red-500 text-xs mt-1">
                  {formErrors.confirmPassword}
                </span>
              )}
            </div>
          </div>

          {/* Upload Vacancy */}
          <div className="mt-4">
            <label className={labelClass}>Upload your vacancy</label>
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleFileDrop}
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${isDragging ? "border-blue-500 bg-blue-50" : "border-[#E2E8F0] bg-gray-50"}`}
            >
              {uploadedFile ? (
                <div className="flex items-center justify-center gap-2 text-gray-700">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm font-medium">
                    {uploadedFile.name}
                  </span>
                  <button
                    type="button"
                    onClick={() => setUploadedFile(null)}
                    className="text-red-400 hover:text-red-600 ml-2 text-xs"
                  >
                    (Remove)
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-gray-600 text-sm font-medium mb-1">
                    Choose a file or drag &amp; drop here
                  </p>
                  <p className="text-gray-400 text-xs mb-4">
                    JPEG, PNG, PDF &amp; .docx, up to 25MB
                  </p>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-6 py-2 border border-[#E2E8F0] rounded-lg text-sm text-gray-600 bg-white hover:bg-gray-100 transition"
                  >
                    Browse file
                  </button>
                </>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept=".jpg,.jpeg,.png,.pdf,.docx"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>

          {/* Where did you hear about us */}
          <div className="mt-4">
            <label className={labelClass}>
              Where did you hear about us?
              <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                name="hear_about_us"
                value={formData.hear_about_us}
                onChange={handleInputChange}
                className={`${inputClass} appearance-none`}
                required
              >
                <option value="">Select an option</option>
                <option value="google">Google</option>
                <option value="social_media">Social Media</option>
                <option value="friend">Friend / Referral</option>
                <option value="advertisement">Advertisement</option>
                <option value="other">Other</option>
              </select>
              <svg
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {formErrors.hear_about_us && touched && (
              <span className="text-red-500 text-xs mt-1">
                {formErrors.hear_about_us}
              </span>
            )}
          </div>

          {/* Checkboxes */}
          <div className="mt-6 space-y-3">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 text-blue-600 border-[#E2E8F0] rounded focus:ring-2 focus:ring-blue-500"
                required
              />
              <span className="text-sm text-gray-600">
                I Agree to the{" "}
                <button type="button" className="text-blue-600 hover:underline">
                  Term and Conditions
                </button>{" "}
                and{" "}
                <button type="button" className="text-blue-600 hover:underline">
                  Privacy Policy
                </button>
              </span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="subscribeForJobAlert"
                checked={formData.subscribeForJobAlert}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 text-blue-600 border-[#E2E8F0] rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-600">
                Subscribe for Job Alert
              </span>
            </label>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full mt-6 py-4 bg-[#0A2E5C] text-white font-semibold rounded-lg hover:bg-[#083256] transition disabled:opacity-50"
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>

          {/* Login Link */}
          <p className="text-center mt-4 text-sm text-gray-600">
            If you have an account, Please{" "}
            <button
              type="button"
              className="text-blue-600 hover:underline font-medium"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
