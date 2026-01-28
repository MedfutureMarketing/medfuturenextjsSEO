"use client";

import { useEffect, useState, useRef, useCallback } from "react";

import { API_BASE_URL } from "../../../lib/api";

type Profession = {
  profession_id: number;
  name: string;
};

type Speciality = {
  specialities_id: number;
  name: string;
};

interface JobSeekerFormProps {
  jobId?: string | number | null;
  onSuccess?: () => void;
}

const verifyEmailFormat = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default function JobSeekerForm({ jobId = null, onSuccess }: JobSeekerFormProps) {
  const [professions, setProfessions] = useState<Profession[]>([]);
  const [specialities, setSpecialities] = useState<Speciality[]>([]);
  const [filteredSpecialities, setFilteredSpecialities] = useState<Speciality[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [lockedProfessionId, setLockedProfessionId] = useState<number | null>(null);
  
  const [notification, setNotification] = useState({
    show: false,
    title: "",
    message: "",
    type: "success" as "success" | "error",
  });

  const agreeCheckboxRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    profession: "",
    specialty: "",
    resume: null as File | null,
    jobSource: "",
    agree: false,
    subscribe: false,
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    profession: "",
    specialty: "",
    resume: "",
    jobSource: "",
  });

  const [touched, setTouched] = useState(false);

  // Fetch professions and specialities
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
        console.error("Meta fetch failed", error);
      }
    };

    fetchMeta();
  }, []);

  // Fetch job details if jobId is provided
  useEffect(() => {
    if (!jobId || jobId === 0 || jobId === "0") return;

    const fetchJobDetails = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/web/jobdetails/${jobId}`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch job details");
        }

        const result = await response.json();
        const professionId = result?.data?.profession?.profession_id;

        if (professionId) {
          setLockedProfessionId(professionId);
          setFormData((prev) => ({
            ...prev,
            profession: String(professionId),
          }));
        }
      } catch (error) {
        console.error("Failed to load job details", error);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  // Filter specialities
  useEffect(() => {
    if (formData.profession) {
      setFilteredSpecialities(specialities);
    } else {
      setFilteredSpecialities([]);
    }
  }, [formData.profession, specialities]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
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
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    const maxFileSize = 2 * 1024 * 1024; // 2MB

    if (!allowedTypes.includes(file.type)) {
      setFormErrors((prev) => ({
        ...prev,
        resume: "Only PDF or DOC/DOCX allowed",
      }));
      setUploadedFile(null);
      return;
    }

    if (file.size > maxFileSize) {
      setFormErrors((prev) => ({
        ...prev,
        resume: "File size exceeds the 2 MB limit",
      }));
      setUploadedFile(null);
      return;
    }

    setFormErrors((prev) => ({
      ...prev,
      resume: "",
    }));
    setUploadedFile(file);
    setFormData((prev) => ({ ...prev, resume: file }));
  };

  const validateForm = useCallback(() => {
    const newErrors = {
      firstName: !formData.firstName ? "Please enter your first name" : "",
      lastName: !formData.lastName ? "Please enter your last name" : "",
      email: !formData.email
        ? "Please enter your email address"
        : !verifyEmailFormat(formData.email)
        ? "Please enter a valid email address"
        : "",
      phone: !formData.phone ? "Please enter your phone number" : "",
      profession: !formData.profession ? "Please select a profession" : "",
      specialty: !formData.specialty ? "Please select a specialty" : "",
      resume: !uploadedFile ? "Please upload your CV" : "",
      jobSource: !formData.jobSource ? "Please select how you heard about us" : "",
    };

    setFormErrors(newErrors);
    return newErrors;
  }, [formData, uploadedFile]);

  useEffect(() => {
    if (touched) {
      validateForm();
    }
  }, [touched, validateForm]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check terms agreement
    const isAgreeBoxChecked = agreeCheckboxRef.current?.checked;
    if (!isAgreeBoxChecked) {
      setNotification({
        show: true,
        title: "Warning",
        message: "Please agree to the Terms & Conditions and Privacy Policy",
        type: "error",
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

      // Upload file first
      const randomNumber = Math.floor(Math.random() * 1000000);
      const fileData = new FormData();
      fileData.append("image", uploadedFile!);
      fileData.append("folder_path", "desktop/candidate_resume");
      fileData.append("file_name", `${formData.firstName}_${randomNumber}`);

      const fileUploadResponse = await fetch(`${API_BASE_URL}/upload`, {
        method: "POST",
        body: fileData,
      });

      if (!fileUploadResponse.ok) {
        throw new Error(`File upload failed with status: ${fileUploadResponse.status}`);
      }

      let fileUploadResult;
      const contentType = fileUploadResponse.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        fileUploadResult = await fileUploadResponse.json();
      } else {
        const text = await fileUploadResponse.text();
        console.error("File upload response is not JSON:", text);
        throw new Error("File upload failed - invalid response format");
      }

      if (!fileUploadResult || !fileUploadResult.fileName) {
        throw new Error("File upload failed - no filename returned");
      }

      const parsedJobId = 20925;

      const requestBody = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        mobile: formData.phone,
        email: formData.email,
        profession: parseInt(formData.profession),
        cv: fileUploadResult.fileName,
        job_id: parsedJobId,
        state: null,
        seniority: null,
        speciality: formData.specialty ? parseInt(formData.specialty) : null,
        hear_about_us: formData.jobSource,
        message: null,
        subscribe_for_job_alert: formData.subscribe,
      };

      console.log("Submitting request body:", requestBody);

      const response = await fetch(`${API_BASE_URL}/web/quick_apply/save`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        let errorMessage = "Application submission failed";
        try {
          const errorResponse = await response.json();
          errorMessage = errorResponse.message || errorResponse.error || errorMessage;
          console.error("API Error Response:", errorResponse);
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
          title: "Application Successfully Submitted",
          message: "Thank you for applying. Please verify yourself by clicking on the verification link in your email.",
          type: "success",
        });

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          profession: "",
          specialty: "",
          resume: null,
          jobSource: "",
          agree: false,
          subscribe: false,
        });
        setUploadedFile(null);
        setTouched(false);
        if (agreeCheckboxRef.current) {
          agreeCheckboxRef.current.checked = false;
        }

        // Call success callback if provided
        if (onSuccess) {
          setTimeout(() => {
            onSuccess();
          }, 3000);
        }
      }
    } catch (error: unknown) {
      let errorMessage = "An error occurred during application.";

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      setNotification({
        show: true,
        title: "Application Error",
        message: errorMessage,
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Row 1 - Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block lg:text-[16px] text-sm font-medium text-gray-700 mb-2">
              First Name
            </label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full border p-3 rounded border-gray-100 text-sm text-gray-600 ${
                formErrors.firstName ? "border-red-500" : ""
              }`}
              placeholder="Enter your first name"
            />
            {formErrors.firstName && (
              <div className="mt-1 text-xs text-red-600">{formErrors.firstName}</div>
            )}
          </div>

          <div>
            <label className="block lg:text-[16px] text-sm text-gray-700 mb-2">
              Last Name
            </label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full border p-3 rounded border-gray-100 text-sm text-gray-600 ${
                formErrors.lastName ? "border-red-500" : ""
              }`}
              placeholder="Enter your last name"
            />
            {formErrors.lastName && (
              <div className="mt-1 text-xs text-red-600">{formErrors.lastName}</div>
            )}
          </div>
        </div>

        {/* Row 1.5 - Email and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block lg:text-[16px] text-sm text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border p-3 rounded border-gray-100 text-sm text-gray-600 ${
                formErrors.email ? "border-red-500" : ""
              }`}
              placeholder="Enter your email"
            />
            {formErrors.email && (
              <div className="mt-1 text-xs text-red-600">{formErrors.email}</div>
            )}
          </div>

          <div>
            <label className="block lg:text-[16px] text-sm text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full border p-3 rounded border-gray-100 text-sm text-gray-600 ${
                formErrors.phone ? "border-red-500" : ""
              }`}
              placeholder="Enter your phone number"
            />
            {formErrors.phone && (
              <div className="mt-1 text-xs text-red-600">{formErrors.phone}</div>
            )}
          </div>
        </div>

        {/* Row 2 - Profession and Specialty */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block lg:text-[16px] text-sm text-gray-700 mb-2">
              Profession
            </label>
            <select
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              disabled={lockedProfessionId !== null}
              className={`w-full border p-3 rounded border-gray-100 text-sm text-gray-400 ${
                formErrors.profession ? "border-red-500" : ""
              } ${lockedProfessionId !== null ? "bg-gray-100 cursor-not-allowed" : ""}`}
            >
              <option value="">Select a profession</option>
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
            <label className="block lg:text-[16px] text-sm text-gray-700 mb-2">
              Specialty
            </label>
            <select
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              disabled={!formData.profession}
              className={`w-full border p-3 rounded border-gray-100 text-sm text-gray-400 ${
                formErrors.specialty ? "border-red-500" : ""
              }`}
            >
              <option value="">Select Specialty</option>
              {filteredSpecialities.map((s) => (
                <option key={s.specialities_id} value={s.specialities_id}>
                  {s.name}
                </option>
              ))}
            </select>
            {formErrors.specialty && (
              <div className="mt-1 text-xs text-red-600">{formErrors.specialty}</div>
            )}
          </div>
        </div>

        {/* Row 3 - CV Upload and Source */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block lg:text-[16px] text-sm text-gray-700 mb-2">
              Upload CV (PDF or DOC)
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className={`w-full border p-3 rounded border-gray-100 text-sm text-gray-400 ${
                formErrors.resume ? "border-red-500" : ""
              }`}
            />
            {uploadedFile && (
              <div className="mt-1 text-xs text-green-600">
                Selected: {uploadedFile.name}
              </div>
            )}
            {formErrors.resume && (
              <div className="mt-1 text-xs text-red-600">{formErrors.resume}</div>
            )}
          </div>

          <div>
            <label className="block lg:text-[16px] text-sm text-gray-700 mb-2">
              Where did you hear about us?
            </label>
            <select
              name="jobSource"
              value={formData.jobSource}
              onChange={handleChange}
              className={`w-full border p-3 rounded text-sm border-gray-100 text-gray-400 ${
                formErrors.jobSource ? "border-red-500" : ""
              }`}
            >
              <option value="">Select a source</option>
              <option value="google">Google</option>
              <option value="linkedin">LinkedIn</option>
              <option value="indeed">Indeed</option>
              <option value="seek">Seek</option>
              <option value="company-website">Website</option>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
              <option value="job-board">Job Board</option>
              <option value="referral">Referral</option>
              <option value="recruiter">Recruiter</option>
              <option value="other">Other</option>
            </select>
            {formErrors.jobSource && (
              <div className="mt-1 text-xs text-red-600">{formErrors.jobSource}</div>
            )}
          </div>
        </div>

        {/* Row 5 - Checkboxes and Submit */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-3">
            <label className="flex items-start gap-2 text-sm text-gray-700">
              <input
                ref={agreeCheckboxRef}
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="mt-1 w-[18px] h-[18px] accent-[#040D48]"
              />
              <span>
                I agree to the{" "}
                <a href="/terms-and-conditions" className="underline text-[#040D48]">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="/privacy-policy" className="underline text-[#040D48]">
                  Privacy Policy
                </a>
              </span>
            </label>

            <label className="flex items-start gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                name="subscribe"
                checked={formData.subscribe}
                onChange={handleChange}
                className="mt-1 w-[18px] h-[18px] accent-[#040D48]"
              />
              <span>Subscribe for job alerts</span>
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="md:w-auto w-full bg-[#074CA4] text-white px-8 py-3 rounded-[4px] font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>

      {/* Notification Popup */}
      {notification.show && (
        <div className="fixed inset-0 bg-white/60  flex items-center  shadow-xl border-2 justify-center z-50">
          <div className="bg-blue-900 rounded-lg p-6 max-w-md mx-4">
            <h3
              className={`text-xl font-bold mb-2 text-white ${
                notification.type === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {notification.title}
            </h3>
            <p className="text-gray-50 mb-4">{notification.message}</p>
            <button
              onClick={() => setNotification({ ...notification, show: false })}
              className="bg-white text-blue-900 px-4 py-2 rounded hover:bg-[#055a8a] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}