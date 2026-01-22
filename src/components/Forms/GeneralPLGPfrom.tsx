'use client';

import React, { useCallback, useEffect, useRef, useState } from "react";

// export const API_BASE_URL = "http://127.0.0.1:8000/api";
export const API_BASE_URL = "https://stage.medfuture.com.au/medadminapi/public/api";


const verifyEmailFormat = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

interface Specialty {
  specialities_id: number;
  profession_id: number;
  name: string;
}

interface Profession {
  profession_id: number;
  name: string;
  specilities: Specialty[];
}

interface State {
  state_id: number;
  name: string;
}

interface Region {
  regions_id: number;
  name: string;
}


interface AvailabilityAndPreference {
  onSuccess?: () => void;
}

export default function LocumPLGP({ onSuccess }: AvailabilityAndPreference) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const [notification, setNotification] = useState({
    show: false,
    title: "",
    message: "",
    type: "success" as "success" | "error",
  });

  const agreeCheckboxRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    locumTenure: "",
    engagementType: "",
    startDate: "",
    endDate: "",
    workingDays: "",
    hourlyFee: "",
    state: "",
    region: "",
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    profession: "",
    specialty: "",
    cv: null as File | null,
    whereDidYouHear: "",
    subscribeForJobAlert: false,
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    profession: "",
    cv: "",
    endDate: "",
  });

  const [touched, setTouched] = useState(false);

  const [professions, setProfessions] = useState<Profession[]>([]);
  const [specialties, setSpecialties] = useState<Specialty[]>([]);
  const [states, setStates] = useState<State[]>([]);
  const [regions, setRegions] = useState<Region[]>([]);


  useEffect(() => {
    fetch(`${API_BASE_URL}/web/profession-and-speciality/get-all`)
      .then((res) => res.json())
      .then((data: { professions: Profession[] }) => setProfessions(data.professions))
      .catch((err) => console.error("Error fetching professions:", err));

    fetch(`${API_BASE_URL}/web/states/get-all`)
      .then((res) => res.json())
      .then((data: State[]) => setStates(data))
      .catch((err) => console.error("Error fetching states:", err));
  }, []);

  useEffect(() => {
    if (!formData.profession) {
      setSpecialties([]);
      return;
    }

    fetch(`${API_BASE_URL}/web/getSpeciality/${formData.profession}`)
      .then((res) => res.json())
      .then((res) => {
        const specs =
          res?.data?.[0]?.specilities ||
          res?.data?.specilities ||
          [];

        setSpecialties(specs);
      })
      .catch((err) => {
        console.error("Error fetching specialties:", err);
        setSpecialties([]);
      });
  }, [formData.profession]);


  useEffect(() => {
    if (formData.state) {
      fetch(`${API_BASE_URL}/web/states/${formData.state}/regions`)
        .then((res) => res.json())
        .then((data: { data?: { regions?: Region[] } }) =>
          setRegions(data.data?.regions || [])
        )
        .catch((err) => {
          console.error("Error fetching regions:", err);
          setRegions([]);
        });
    } else {
      setRegions([]);
    }
  }, [formData.state]);


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

    const maxFileSize = 2 * 1024 * 1024;

    if (!allowedTypes.includes(file.type)) {
      setFormErrors((prev) => ({
        ...prev,
        cv: "Only PDF or DOC/DOCX allowed",
      }));
      setUploadedFile(null);
      return;
    }

    if (file.size > maxFileSize) {
      setFormErrors((prev) => ({
        ...prev,
        cv: "File size exceeds the 2 MB limit",
      }));
      setUploadedFile(null);
      return;
    }

    setFormErrors((prev) => ({
      ...prev,
      cv: "",
    }));
    setUploadedFile(file);
    setFormData((prev) => ({ ...prev, cv: file }));
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
      mobile: !formData.mobile ? "Please enter your phone number" : "",
      profession: !formData.profession ? "Please select your profession" : "",
      cv: !uploadedFile ? "Please upload your CV" : "",
      endDate:
        formData.startDate &&
          formData.endDate &&
          new Date(formData.endDate) < new Date(formData.startDate)
          ? "End date must be after start date"
          : "",
    };

    setFormErrors(newErrors);
    return newErrors;
  }, [formData, uploadedFile]);

  useEffect(() => {
    if (touched) {
      validateForm();
    }
  }, [touched, validateForm]);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async () => {
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

      let cvFileName = null;

      if (uploadedFile) {
        const randomNumber = Math.floor(Math.random() * 1000000);
        const fileData = new FormData();
        fileData.append("image", uploadedFile);
        fileData.append("folder_path", "desktop/candidate_resume");
        fileData.append("file_name", `${formData.firstName}_${randomNumber}`);

        const fileUploadResponse = await fetch(`${API_BASE_URL}/upload`, {
          method: "POST",
          body: fileData,
        });

        if (!fileUploadResponse.ok) {
          throw new Error(
            `File upload failed with status: ${fileUploadResponse.status}`
          );
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

        cvFileName = fileUploadResult.fileName;
      }

      const requestBody = {
        locum_tenure: formData.locumTenure || null,
        engagement_type: formData.engagementType || null,
        start_date: formData.startDate || null,
        end_date: formData.endDate || null,
        working_days: formData.workingDays || null,
        hourly_fee: formData.hourlyFee || null,
        state: formData.state || null,
        region: formData.region || null,
        first_name: formData.firstName,
        last_name: formData.lastName,
        mobile: formData.mobile,
        email: formData.email,
        profession: formData.profession,
        specialty: formData.specialty || null,
        cv: cvFileName,
        where_did_you_hear: formData.whereDidYouHear || null,
        subscribe_for_job_alert: formData.subscribeForJobAlert,
      };

      console.log("Submitting request body:", requestBody);

      const response = await fetch(
        `${API_BASE_URL}/web/availability-and-preference-enquiries/save`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        let errorMessage = "Application submission failed";
        try {
          const errorResponse = await response.json();
          errorMessage =
            errorResponse.message || errorResponse.error || errorMessage;
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
          message:
            "Thank you for submitting your availability and preferences. We will contact you soon.",
          type: "success",
        });

        setFormData({
          locumTenure: "",
          engagementType: "",
          startDate: "",
          endDate: "",
          workingDays: "",
          hourlyFee: "",
          state: "",
          region: "",
          firstName: "",
          lastName: "",
          mobile: "",
          email: "",
          profession: "",
          specialty: "",
          cv: null,
          whereDidYouHear: "",
          subscribeForJobAlert: false,
        });
        setUploadedFile(null);
        setTouched(false);
        setStep(1);
        if (agreeCheckboxRef.current) {
          agreeCheckboxRef.current.checked = false;
        }

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
    <section className="py-14 px-4">
      <div className="bg-white rounded-xl shadow-xl p-8 text-gray-500 w-full">
        <h3 className="text-xl font-semibold text-center text-blue-700 mb-[30px]">
          {step === 1
            ? "Let us know your availability & Preference"
            : "Tell us about yourself"}
        </h3>

        {notification.show && (
          <div
            className={`mb-4 p-4 rounded-lg ${notification.type === "success"
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

        {step === 1 ? (
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="mb-1 text-xs lg:text-[14px] font-[500] text-gray-700 mb-[8px]">
                Locum Tenure
              </label>
              <input
                type="text"
                name="locumTenure"
                value={formData.locumTenure}
                onChange={handleChange}
                className="input h-10 lg:h-[56px] text-xs lg:text-[14px] px-4 border border-gray-200 rounded-[4px] text-gray-500"
                placeholder="e.g., 3 months"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-xs lg:text-[14px] font-[500] text-gray-700 mb-[8px]">
                Engagement Type
              </label>
              <select
                name="engagementType"
                value={formData.engagementType}
                onChange={handleChange}
                className="input h-10 lg:h-[56px] text-xs lg:text-[14px] px-4 border border-gray-200 rounded-[4px] text-gray-500 cursor-pointer"
              >
                <option value="">Select Type</option>
                <option value="1">Full-time</option>
                <option value="2">Part-time</option>
                <option value="3">Casual</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-xs lg:text-[14px] font-[500] text-gray-700 mb-[8px]">
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="input h-10 text-xs lg:text-[14px] lg:h-[56px] px-4 border border-gray-200 rounded-[4px] text-gray-500 cursor-pointer"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-xs lg:text-[14px] font-[500] text-gray-700 mb-[8px]">
                End Date
              </label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="input h-10 text-xs lg:text-[14px] lg:h-[56px] px-4 border border-gray-200 rounded-[4px] text-gray-500 cursor-pointer"
              />
              {formErrors.endDate && (
                <span className="text-red-500 text-xs mt-1">
                  {formErrors.endDate}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-xs lg:text-[14px] font-[500] text-gray-700 mb-[8px]">
                Working Days
              </label>
              <input
                type="text"
                name="workingDays"
                value={formData.workingDays}
                onChange={handleChange}
                className="input h-10 lg:h-[56px] text-xs lg:text-[14px] px-4 border border-gray-200 rounded-[4px] text-gray-500"
                placeholder="e.g., Mon-Fri"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-xs lg:text-[14px] font-[500] text-gray-700 mb-[8px]">
                Hourly Fee (AUD)
              </label>
              <input
                type="text"
                name="hourlyFee"
                value={formData.hourlyFee}
                onChange={handleChange}
                className="input h-10 lg:h-[56px] text-xs lg:text-[14px] px-4 border border-gray-200 rounded-[4px] text-gray-500"
                placeholder="$50-$70"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-xs lg:text-[14px] font-[500] text-gray-700 mb-[8px]">
                State
              </label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="input h-10 lg:h-[56px] text-xs lg:text-[14px] px-4 border border-gray-200 rounded-[4px] text-gray-500 cursor-pointer"
              >
                <option value="">Select State</option>
                {states.map((state: State) => (
                  <option key={state.state_id} value={state.state_id}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-xs lg:text-[14px] font-[500] text-gray-700 mb-[8px]">
                Region
              </label>
              <select
                name="region"
                value={formData.region}
                onChange={handleChange}
                disabled={!formData.state}
                className="input h-10 lg:h-[56px] px-4 text-xs lg:text-[14px] border border-gray-200 rounded-[4px] text-gray-500 cursor-pointer disabled:bg-gray-100"
              >
                <option value="">Select Region</option>
                {regions.map((region: Region) => (
                  <option key={region.regions_id} value={region.regions_id}>
                    {region.name}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={nextStep}
              className="col-span-2 bg-gradient-to-r from-[#0B3264] to-[#1B62B7] text-white font-semibold py-[16px] rounded-[4px] mt-4 hover:bg-blue-800 transition"
            >
              Next
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-xs lg:text-[14px] font-[500] text-gray-700 mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter First Name"
                className="input h-10 text-xs lg:text-[14px] lg:h-[56px] px-4 border border-gray-200 rounded-[4px] text-gray-500"
              />
              {formErrors.firstName && touched && (
                <span className="text-red-500 text-xs mt-1">
                  {formErrors.firstName}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-xs lg:text-[14px] font-[500] text-gray-700 mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter Last Name"
                className="input h-10 text-xs lg:text-[14px] lg:h-[56px] px-4 border border-gray-200 rounded-[4px] text-gray-500"
              />
              {formErrors.lastName && touched && (
                <span className="text-red-500 text-xs mt-1">
                  {formErrors.lastName}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-xs lg:text-[14px] font-[500] text-gray-700 mb-1">
                Mobile <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter Mobile Number"
                className="input text-xs lg:text-[14px] h-10 lg:h-[56px] px-4 border border-gray-200 rounded-[4px] text-gray-500"
              />
              {formErrors.mobile && touched && (
                <span className="text-red-500 text-xs mt-1">
                  {formErrors.mobile}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-xs lg:text-[14px] font-[500] text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="input text-xs lg:text-[14px] h-10 lg:h-[56px] px-4 border border-gray-200 rounded-[4px] text-gray-500"
              />
              {formErrors.email && touched && (
                <span className="text-red-500 text-xs mt-1">
                  {formErrors.email}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-xs lg:text-[14px] font-[500] text-gray-700 mb-1">
                Profession <span className="text-red-500">*</span>
              </label>
              <select
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                className="input h-10 lg:h-[56px] px-4 text-xs lg:text-[14px] border border-gray-200 rounded-[4px] text-gray-500 cursor-pointer"
              >
                <option value="">Select Profession</option>
                {professions.map((profession: Profession) => (
                  <option
                    key={profession.profession_id}
                    value={profession.profession_id}
                  >
                    {profession.name}
                  </option>
                ))}
              </select>
              {formErrors.profession && touched && (
                <span className="text-red-500 text-xs mt-1">
                  {formErrors.profession}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-xs lg:text-[14px] font-[500] text-gray-700 mb-1">
                Specialty
              </label>
              <select
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
                disabled={!formData.profession}
                className="input h-10 lg:h-[56px] px-4 text-xs lg:text-[14px] border border-gray-200 rounded-[4px] text-gray-500 cursor-pointer disabled:bg-gray-100"
              >
                <option value="">Select Specialty</option>
                {specialties.map((specialty: Specialty) => (
                  <option
                    key={specialty.specialities_id}
                    value={specialty.specialities_id}
                  >
                    {specialty.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs lg:text-sm font-medium text-gray-700">
                Upload CV <span className="text-red-500">*</span>
              </label>

              {/* Upload Box */}
              <div className="relative">
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />

                <div className="flex items-center justify-between h-10 lg:h-[56px] px-4
                        border border-dashed border-gray-300 rounded-md
                        bg-gray-50 hover:bg-gray-100 transition">
                  <span className="text-xs lg:text-sm text-gray-500">
                    {uploadedFile ? uploadedFile.name : "Click to upload your CV"}
                  </span>

                  {/* Upload Icon */}
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V4m0 0l-4 4m4-4l4 4"
                    />
                  </svg>
                </div>
              </div>

              {/* Success Message */}
              {uploadedFile && (
                <span className="text-green-600 text-xs flex items-center gap-1 mt-1">
                  ✅ {uploadedFile.name}
                </span>
              )}

              {/* Error Message */}
              {formErrors.cv && touched && (
                <span className="text-red-500 text-xs mt-1">
                  {formErrors.cv}
                </span>
              )}

              {/* Helper Text */}
              <span className="text-[11px] text-gray-400">
                Accepted formats: PDF, DOC, DOCX
              </span>
            </div>


            <div className="flex flex-col">
              <label className="text-xs lg:text-[14px] font-[500] text-gray-700 mb-1">
                Where did you hear about us?
              </label>
              <select
                name="whereDidYouHear"
                value={formData.whereDidYouHear}
                onChange={handleChange}
                className="input h-10 lg:h-[56px] px-4 text-xs lg:text-[14px] border border-gray-200 rounded-[4px] text-gray-500 cursor-pointer"
              >
                <option value="">Select Option</option>
                <option value="Google">Google</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Facebook">Facebook</option>
                <option value="Referral">Referral</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="col-span-2 flex items-start gap-2 mt-4">
              <input
                type="checkbox"
                ref={agreeCheckboxRef}
                name="subscribeForJobAlert"
                onChange={handleChange}
                className="mt-1"
              />
              <label className="text-xs lg:text-sm text-gray-600">
                I agree to the{" "}
                <a href="/terms-and-conditions" className="text-blue-600 underline">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="/privacy-policy" className="text-blue-600 underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            <div className="col-span-2 flex justify-between mt-4">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-400 transition"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-gradient-to-r from-[#0B3264] to-[#1B62B7] text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}