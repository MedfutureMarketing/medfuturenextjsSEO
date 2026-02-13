// components/RegistrationForm.tsx
"use client"
import { useEffect, useState, useRef, useCallback } from 'react';
import Link from "next/link";
import { useSearchParams } from 'next/navigation';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

import { API_BASE_URL } from "../../lib/api";

type Profession = {
  profession_id: number;
  name: string;
};

type Speciality = {
  specialities_id: number;
  name: string;
};

interface RegistrationFormProps {
  onClose: () => void;
}

// Email validation function
const verifyEmailFormat = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone validation function
const isPhoneValid = (phone: string): boolean => {
  const digitsOnly = phone.replace(/\D/g, '');
  return digitsOnly.length >= 10;
};

export default function RegistrationForm({ onClose }: RegistrationFormProps) {
  const searchParams = useSearchParams();
  const jobId = searchParams.get('jobId');

  const [professions, setProfessions] = useState<Profession[]>([]);
  const [specialities, setSpecialities] = useState<Speciality[]>([]);
  const [filteredSpecialities, setFilteredSpecialities] = useState<Speciality[]>([]);
  const [loadingMeta, setLoadingMeta] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [lockedProfessionId, setLockedProfessionId] = useState<number | null>(null);
  const [notification, setNotification] = useState({
    show: false,
    title: "",
    message: "",
    type: "success" as "success" | "error"
  });

  const agreeCheckboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    async function fetchMeta() {
      try {
        const response = await fetch(`${API_BASE_URL}/web/profession-and-speciality/get-all`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch professions and specialities');
        }

        const res = await response.json();
        setProfessions(res.professions || []);
        setSpecialities(res.specialities || []);
      } catch (err) {
        console.error("Failed to load professions", err);
        setProfessions([]);
        setSpecialities([]);
      } finally {
        setLoadingMeta(false);
      }
    }

    fetchMeta();
  }, []);

  useEffect(() => {
    if (!jobId) return;

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

        const professionId = result?.data?.profession.profession_id;

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


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    profession: '',
    specialty: '',
    resume: null as File | null,
    jobSource: '',
    agreeToTerms: false,
    subscribeToAlerts: false
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    profession: '',
    specialty: '',
    resume: '',
    jobSource: ''
  });

  const [touched, setTouched] = useState(false);

  // Filter specialities based on selected profession
  useEffect(() => {
    if (formData.profession) {
      setFilteredSpecialities(specialities);
    } else {
      setFilteredSpecialities([]);
    }
  }, [formData.profession, specialities]);

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

    if (file) {
      const allowedFileTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ];
      const maxFileSize = 2 * 1024 * 1024; // 2MB

      if (!allowedFileTypes.includes(file.type)) {
        setFormErrors(prev => ({
          ...prev,
          resume: "Please upload your CV in PDF or DOCX format"
        }));
        setUploadedFile(null);
        return;
      }

      if (file.size > maxFileSize) {
        setFormErrors(prev => ({
          ...prev,
          resume: "File size exceeds the 2 MB limit"
        }));
        setUploadedFile(null);
        return;
      }

      setFormErrors(prev => ({
        ...prev,
        resume: ""
      }));
      setUploadedFile(file);
    }

    setFormData(prev => ({
      ...prev,
      resume: file
    }));
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
      phone: !formData.phone
        ? "Please enter your phone number"
        : !isPhoneValid(formData.phone)
          ? "Please enter a valid phone number"
          : "",
      profession: !formData.profession ? "Please select a profession" : "",
      specialty: !formData.specialty ? "Please select a specialty" : "",
      resume: !uploadedFile ? "Please upload your CV" : "",
      jobSource: !formData.jobSource ? "Please select how you heard about us" : ""
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

    // Check if jobId exists
    if (!jobId) {
      setNotification({
        show: true,
        title: "Error",
        message: "Job ID is missing. Please try again from the job listing page.",
        type: "error"
      });
      return;
    }

    const isAgreeBoxChecked = agreeCheckboxRef.current?.checked;
    if (!isAgreeBoxChecked) {
      setNotification({
        show: true,
        title: "Warning",
        message: "Please agree to the Terms of Use and Privacy Policy",
        type: "error"
      });
      return;
    }

    setTouched(true);
    const errors = validateForm();

    if (Object.values(errors).some(error => error)) {
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
        body: fileData
      });

      if (!fileUploadResponse.ok) {
        throw new Error(`File upload failed with status: ${fileUploadResponse.status}`);
      }

      let fileUploadResult;
      const contentType = fileUploadResponse.headers.get('content-type');

      if (contentType && contentType.includes('application/json')) {
        fileUploadResult = await fileUploadResponse.json();
      } else {
        const text = await fileUploadResponse.text();
        console.error('File upload response is not JSON:', text);
        throw new Error("File upload failed - invalid response format");
      }

      if (!fileUploadResult || !fileUploadResult.fileName) {
        throw new Error("File upload failed - no filename returned");
      }

      const numericJobId = jobId.replace(/\D/g, '');

      const requestBody = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        mobile: formData.phone,
        email: formData.email,
        profession: parseInt(formData.profession),
        cv: fileUploadResult.fileName,
        job_id: parseInt(numericJobId), // Convert to integer
        state: null,
        seniority: null,
        speciality: formData.specialty ? parseInt(formData.specialty) : null,
        hear_about_us: formData.jobSource,
        message: null,
        subscribe_for_job_alert: formData.subscribeToAlerts
      };

      console.log('Submitting request body:', requestBody);

      const response = await fetch(`${API_BASE_URL}/web/quick_apply/save`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        let errorMessage = 'Application submission failed';
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
          title: "Application Successfully Submitted",
          message: "Thank you for applying. Please verify yourself by clicking on the verification link in your email.",
          type: "success"
        });

        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          profession: '',
          specialty: '',
          resume: null,
          jobSource: '',
          agreeToTerms: false,
          subscribeToAlerts: false
        });
        setUploadedFile(null);
        setTouched(false);
        if (agreeCheckboxRef.current) {
          agreeCheckboxRef.current.checked = false;
        }

        // Close form after 3 seconds
        setTimeout(() => {
          onClose();
        }, 3000);
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

  const inputClasses = "w-full px-[10px] px-[18px] lg:text-[16px] text-xs py-[13px] border border-[#E2E8F0] text-[#4A5565] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#64CAF3] focus:border-transparent placeholder:text-[#666666] text-sm sm:text-base";

  // Show error if jobId is missing
  if (!jobId) {
    return (
      <div className="mt-4 sm:mt-8 p-4 sm:p-6 bg-white rounded-lg ">
        <div className="text-center py-8">
          <h3 className="text-xl font-bold text-red-600 mb-4">Job ID Missing</h3>
          <p className="text-gray-700 mb-4">
            Unable to find job information. Please go back to the job listing and try again.
          </p>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 sm:mt-8 p-4 sm:p-6 bg-white rounded-lg ">
      <h3 className="text-xl sm:text-2xl font-semi-bold text-gray-900 mb-4 sm:mb-6 text-center sm:text-center">Quick Apply</h3>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 text-black" noValidate>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-[29px]">
          <div className="relative">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className={`${inputClasses} ${formErrors.firstName ? 'border-red-300' : ''}`}
              placeholder="First Name"
            />
            <span className="asterisk_input"> </span>
            {formErrors.firstName && (
              <div className="mt-1 text-xs px-2 text-red-600">{formErrors.firstName}</div>
            )}
          </div>

          <div className="relative">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className={`${inputClasses} ${formErrors.lastName ? 'border-red-300' : ''}`}
              placeholder="Last Name"
            />
            <span className="asterisk_input"> </span>
            {formErrors.lastName && (
              <div className="mt-1 text-xs px-2 text-red-600">{formErrors.lastName}</div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-[29px]">
          <div className="relative">
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
              onChange={(phone) => setFormData({ ...formData, phone })}
              inputProps={{
                id: "phone",
                autoComplete: "off",
                className: `w-full pl-16 focus:outline-none bg-white border-2 ${formErrors.phone ? 'border-red-300' : 'border-[#e6e8ebff]'
                  } rounded-md h-[50px] px-3`,
              }}
              value={formData.phone}
            />
            <span className="asterisk_input"> </span>
            {formErrors.phone && (
              <div className="mt-1 text-xs px-2 text-red-600">{formErrors.phone}</div>
            )}
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className={`${inputClasses} ${formErrors.email ? 'border-red-300' : ''}`}
              placeholder="Email Address"
            />
            <span className="asterisk_input"> </span>
            {formErrors.email && (
              <div className="mt-1 text-xs px-2 text-red-600">{formErrors.email}</div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-[29px]">
          <div className="relative">
            <select
              name="profession"
              value={formData.profession}
              onChange={handleInputChange}
              required
              disabled={lockedProfessionId !== null}
              className={`${inputClasses} ${formErrors.profession ? 'border-red-300' : ''
                } ${lockedProfessionId !== null ? 'bg-gray-100 cursor-not-allowed appearance-none' : ''}`}
            >
              <option value="">Select Profession</option>
              {professions.map(p => (
                <option key={p.profession_id} value={p.profession_id}>
                  {p.name}
                </option>
              ))}
            </select>
            {/* Custom arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg
                className="h-7 w-7 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="asterisk_input"> </span>
            {formErrors.profession && (
              <div className="mt-1 text-xs px-2 text-red-600">{formErrors.profession}</div>
            )}
          </div>

          <div className="relative">
            <select
              name="specialty"
              value={formData.specialty}
              onChange={handleInputChange}
              required
              className={`${inputClasses} ${formErrors.specialty ? 'border-red-300 ' : 'appearance-none'}`}
              disabled={!formData.profession}
            >
              <option value="">Select Specialty</option>
              {filteredSpecialities.map(s => (
                <option key={s.specialities_id} value={s.specialities_id}>
                  {s.name}
                </option>
              ))}
            </select>{/* Custom arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg
                className="h-7 w-7 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="asterisk_input"> </span>
            {formErrors.specialty && (
              <div className="mt-1 text-xs px-2 text-red-600">{formErrors.specialty}</div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-[29px]">
          <div className="relative">
            <div className="relative">
              <input
                type="file"
                name="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                required
                className="w-full px-3 py-2 border border-[#66768F]/16 rounded-md focus:outline-none focus:ring-2 focus:ring-[#64CAF3] focus:border-transparent opacity-0 absolute z-10 cursor-pointer h-12 sm:h-[50px]"
                id="resume-upload"
              />

              <label
                htmlFor="resume-upload"
                className={`${inputClasses} ${formErrors.resume ? "border-red-300" : ""
                  } bg-white cursor-pointer text-gray-500 h-12 sm:h-[50px] flex items-center justify-between text-sm px-3`}
              >
                <span className="truncate">
                  {uploadedFile ? uploadedFile.name : "Upload Your CV"}
                </span>

                {/* Upload Icon */}
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 flex-shrink-0"
                >
                  <path
                    d="M6.15083 5.2296L8.25 3.12126V11.9121C8.25 12.1552 8.34658 12.3884 8.51849 12.5603C8.69039 12.7322 8.92355 12.8288 9.16667 12.8288C9.40978 12.8288 9.64294 12.7322 9.81485 12.5603C9.98676 12.3884 10.0833 12.1552 10.0833 11.9121V3.12126L12.1825 5.2296C12.2677 5.31551 12.3691 5.38371 12.4808 5.43025C12.5925 5.47678 12.7123 5.50074 12.8333 5.50074C12.9543 5.50074 13.0742 5.47678 13.1859 5.43025C13.2976 5.38371 13.399 5.31551 13.4842 5.2296C13.5701 5.14438 13.6383 5.043 13.6848 4.93129C13.7314 4.81959 13.7553 4.69977 13.7553 4.57876C13.7553 4.45775 13.7314 4.33794 13.6848 4.22623C13.6383 4.11453 13.5701 4.01315 13.4842 3.92793L9.8175 0.261262C9.73032 0.177809 9.62752 0.112391 9.515 0.0687624C9.29183 -0.0229208 9.04151 -0.0229208 8.81833 0.0687624C8.70581 0.112391 8.60301 0.177809 8.51583 0.261262L4.84917 3.92793C4.7637 4.0134 4.6959 4.11486 4.64965 4.22653C4.60339 4.3382 4.57958 4.45789 4.57958 4.57876C4.57958 4.69963 4.60339 4.81932 4.64965 4.93099C4.6959 5.04266 4.7637 5.14413 4.84917 5.2296C4.93464 5.31506 5.0361 5.38286 5.14777 5.42912C5.25944 5.47537 5.37913 5.49918 5.5 5.49918C5.62087 5.49918 5.74056 5.47537 5.85223 5.42912C5.9639 5.38286 6.06536 5.31506 6.15083 5.2296ZM17.4167 9.1621C17.1736 9.1621 16.9404 9.25867 16.7685 9.43058C16.5966 9.60249 16.5 9.83565 16.5 10.0788V15.5788C16.5 15.8219 16.4034 16.055 16.2315 16.2269C16.0596 16.3989 15.8264 16.4954 15.5833 16.4954H2.75C2.50688 16.4954 2.27373 16.3989 2.10182 16.2269C1.92991 16.055 1.83333 15.8219 1.83333 15.5788V10.0788C1.83333 9.83565 1.73676 9.60249 1.56485 9.43058C1.39294 9.25867 1.15978 9.1621 0.916667 9.1621C0.673552 9.1621 0.440394 9.25867 0.268485 9.43058C0.0965771 9.60249 0 9.83565 0 10.0788V15.5788C0 16.3081 0.289731 17.0076 0.805456 17.5233C1.32118 18.039 2.02065 18.3288 2.75 18.3288H15.5833C16.3127 18.3288 17.0122 18.039 17.5279 17.5233C18.0436 17.0076 18.3333 16.3081 18.3333 15.5788V10.0788C18.3333 9.83565 18.2368 9.60249 18.0648 9.43058C17.8929 9.25867 17.6598 9.1621 17.4167 9.1621Z"
                    fill="#4A5565"
                  />
                </svg>
              </label>
            </div>

            <span className="asterisk_input"> </span>
            {formErrors.resume && (
              <div className="mt-1 text-xs px-2 text-red-600">{formErrors.resume}</div>
            )}
          </div>

          <div className="relative">
            <select
              name="jobSource"
              value={formData.jobSource}
              onChange={handleInputChange}
              required
              className={`${inputClasses} ${formErrors.jobSource ? 'border-red-300' : 'appearance-none'}`}
            >
              <option value="">How did you hear about us?</option>
              <option value="company-website">Company Website</option>

              <option value="bing">Bing</option>
              <option value="google">Google</option>
              <option value="indeed">Indeed</option>
              <option value="seek">Seek</option>
              <option value="referral">Employee Referral</option>
              <option value="linkedin">LinkedIn</option>
              <option value="social-media">Facebook</option>
              <option value="social-media">Instagram</option>
              <option value="other">Other</option>
            </select>{/* Custom arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg
                className="h-7 w-7 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="asterisk_input"> </span>
            {formErrors.jobSource && (
              <div className="mt-1 text-xs px-2 text-red-600">{formErrors.jobSource}</div>
            )}
          </div>
        </div>

        <div className='grid grid-cols-[2fr_1fr] '> <div className="space-y-3 sm:space-y-4">
          <div className="flex items-start">
            <input
              ref={agreeCheckboxRef}
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              required
              className="w-4 h-4 rounded border-[#66768F]/16 cursor-pointer text-[#64CAF3] accent-blue-500 focus:ring-[#64CAF3] mt-1 flex-shrink-0"
            />
            <label className="ml-2 text-[15px] text-gray-700 leading-tight">
              <span className="asterisk_input_checkbox"> </span>
              I confirm that I have read and agree to the{' '}
              <Link href="/terms-and-conditions" className="hover:underline text-[#64CAF3]">
                Terms of Use
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="hover:underline text-[#64CAF3]">
                Privacy Policy
              </Link>
              .
            </label>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              name="subscribeToAlerts"
              checked={formData.subscribeToAlerts}
              onChange={handleInputChange}
              className="w-4 h-4 rounded border-[#66768F]/16 cursor-pointer text-[#64CAF3] accent-blue-500 focus:ring-[#64CAF3] mt-1 flex-shrink-0"
            />
            <label className="ml-2 text-[15px] text-gray-700 leading-tight">
              Subscribe for Job Alerts
            </label>
          </div>
        </div>

          <div className="flex lg:justify-end justify-center gap-3 sm:gap-4 lg:mt-0 mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#074CA4] text-white px-6 cursor-pointer sm:px-8 py-3  h-[48px]  lg:text-[16px] text-xs rounded-[4px] hover:bg-[#55b8e0] transition-colors font-medium order-2 sm:order-1 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
            {/* <button
            type="button"
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-6 sm:px-8 py-3  h-[48px]  lg:text-[16px] text-xs rounded-[4px] hover:bg-gray-400 transition-colors font-medium order-1 sm:order-2"
          >
            Cancel
          </button> */}
          </div></div>
      </form>

      {/* Notification Popup */}
      {notification.show && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-4 transform animate-slideUp">
            {/* Icon */}
            <div className="flex justify-center mb-4">
              {notification.type === 'success' ? (
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              ) : (
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              )}
            </div>

            {/* Title */}
            <h3 className={`text-2xl font-bold text-center mb-3 ${notification.type === 'success' ? 'text-green-600' : 'text-red-600'
              }`}>
              {notification.title}
            </h3>

            {/* Message */}
            <p className="text-gray-600 text-center mb-6 leading-relaxed">
              {notification.message}
            </p>

            {/* Button */}
            <button
              onClick={() => setNotification({ ...notification, show: false })}
              className="w-full bg-[#64CAF3] text-white px-6 py-3 rounded-lg hover:bg-[#55b8e0] transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}