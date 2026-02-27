"use client";

import { useState } from "react";
import MainLayout from "@/components/Dashboard/Candidate/Mainlayout";

// ─── Types ────────────────────────────────────────────────────────────────────

interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  work: string;
  dob: string;
  gender: string;
}

interface ProfessionalInfo {
  profession: string;
  specialty: string;
  seniority: string;
  subSkills: string;
  industry: string;
  division: string;
  qualification: string;
  countryOfDegree: string;
  degree: string;
  university: string;
  board: string;
  localExp: string;
  overseasExp: string;
  comparableExp: string;
  employmentStatus: string;
}

interface GeoInfo {
  address1: string;
  address2: string;
  country: string;
  state: string;
  suburb: string;
  postCode: string;
  region: string;
  mainCity: string;
  distance: string;
}

interface LoginCredentials {
  profession: string;
  email: string;
  password: string;
}

type SectionKey = "personal" | "professional" | "geo" | "credentials" | null;

// ─── Field Definitions ────────────────────────────────────────────────────────

const personalFields: { label: string; key: keyof PersonalInfo }[] = [
  { label: "First Name", key: "firstName" },
  { label: "Last Name", key: "lastName" },
  { label: "Email", key: "email" },
  { label: "Mobile Number", key: "mobile" },
  { label: "Work Number", key: "work" },
  { label: "Date of Birth", key: "dob" },
  { label: "Gender", key: "gender" },
];

const professionalFields: { label: string; key: keyof ProfessionalInfo }[] = [
  { label: "Profession", key: "profession" },
  { label: "Specialty", key: "specialty" },
  { label: "Seniority", key: "seniority" },
  { label: "Sub-Skills", key: "subSkills" },
  { label: "Industry", key: "industry" },
  { label: "Division", key: "division" },
  { label: "Professional Qualification", key: "qualification" },
  { label: "Country of Primary Degree", key: "countryOfDegree" },
  { label: "Diploma/Degree", key: "degree" },
  { label: "University/College", key: "university" },
  { label: "Medical & Healthcare Board", key: "board" },
  { label: "Local Experience", key: "localExp" },
  { label: "Overseas Experience", key: "overseasExp" },
  { label: "Comparable Experience", key: "comparableExp" },
  { label: "Employment Status", key: "employmentStatus" },
];

const geoFields: { label: string; key: keyof GeoInfo }[] = [
  { label: "Address Line 1", key: "address1" },
  { label: "Address Line 2", key: "address2" },
  { label: "Country", key: "country" },
  { label: "State", key: "state" },
  { label: "Suburb", key: "suburb" },
  { label: "Post Code", key: "postCode" },
  { label: "Region", key: "region" },
  { label: "Main City", key: "mainCity" },
  { label: "Distance", key: "distance" },
];

// ─── Sub-Components ───────────────────────────────────────────────────────────

interface EditSaveButtonProps {
  isEditing: boolean;
  onEdit: () => void;
  onSave: () => void;
  onCancel: () => void;
  fullWidth?: boolean;
}

function EditSaveButton({
  isEditing,
  onEdit,
  onSave,
  onCancel,
  fullWidth = false,
}: EditSaveButtonProps) {
  const btnBase = `border-2 py-2 rounded font-medium transition-colors ${fullWidth ? "w-full" : "px-4"}`;

  if (isEditing) {
    return (
      <div className={`flex gap-2 ${fullWidth ? "flex-col" : ""}`}>
        <button
          type="button"
          onClick={onSave}
          className={`${btnBase} border-green-500 text-green-500 hover:bg-green-50`}
        >
          Save ✓
        </button>
        <button
          type="button"
          onClick={onCancel}
          className={`${btnBase} border-gray-400 text-gray-400 hover:bg-gray-50`}
        >
          Cancel
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onEdit}
      className={`${btnBase} border-blue-500 text-blue-500 hover:bg-blue-50`}
    >
      Edit ✏️
    </button>
  );
}

interface FieldRowProps {
  label: string;
  isEditing: boolean;
  value: string;
  onChange: (value: string) => void;
  inputType?: string;
}

function FieldRow({
  label,
  isEditing,
  value,
  onChange,
  inputType = "text",
}: FieldRowProps) {
  return (
    <div>
      <p className="text-gray-600 text-sm mb-1">{label}</p>
      {isEditing ? (
        <input
          type={inputType}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full border border-blue-300 rounded px-2 py-1 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      ) : (
        <p className="text-gray-900 font-medium">{value || "—"}</p>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ProfilePage() {
  // ── State ──────────────────────────────────────────────────────────────────

  const [editingSection, setEditingSection] = useState<SectionKey>(null);

  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    firstName: "Dr Peter",
    lastName: "Andrew",
    email: "peter.andrew345@gmail.com",
    mobile: "+61 5238 5632 456",
    work: "+61 5555 5632 456",
    dob: "02/10/2024",
    gender: "Male",
  });

  const [professionalInfo, setProfessionalInfo] = useState<ProfessionalInfo>({
    profession: "Medical Practitioner",
    specialty: "General Practitioner",
    seniority: "GP Register",
    subSkills: "-",
    industry: "Private Clinic",
    division: "Medical",
    qualification: "FRACGP",
    countryOfDegree: "Egypt",
    degree: "Bachelor of Medicine",
    university: "University of Cairo",
    board: "-",
    localExp: "1-3",
    overseasExp: "1-3",
    comparableExp: "3-5",
    employmentStatus: "Employed",
  });

  const [geoInfo, setGeoInfo] = useState<GeoInfo>({
    address1: "12 Shelley Street",
    address2: "Sydney",
    country: "Australia",
    state: "WA",
    suburb: "Rockingham",
    postCode: "6168",
    region: "North Perth",
    mainCity: "-",
    distance: "10 - 20 Km",
  });

  const [credentials, setCredentials] = useState<LoginCredentials>({
    profession: "Medical Practitioner",
    email: "peter.andrew345@gmail.com",
    password: "",
  });

  // Temporary draft state while editing
  const [tempPersonal, setTempPersonal] = useState<PersonalInfo>(personalInfo);
  const [tempProfessional, setTempProfessional] = useState<ProfessionalInfo>(professionalInfo);
  const [tempGeo, setTempGeo] = useState<GeoInfo>(geoInfo);
  const [tempCredentials, setTempCredentials] = useState<LoginCredentials>(credentials);

  // ── Handlers ───────────────────────────────────────────────────────────────

  const handleEdit = (section: SectionKey) => {
    // Reset temp state to current saved state before opening editor
    setTempPersonal({ ...personalInfo });
    setTempProfessional({ ...professionalInfo });
    setTempGeo({ ...geoInfo });
    setTempCredentials({ ...credentials });
    setEditingSection(section);
  };

  const handleSave = (section: SectionKey) => {
    // TODO (Backend): Replace with API call e.g. await updateProfile(section, data)
    if (section === "personal") setPersonalInfo({ ...tempPersonal });
    if (section === "professional") setProfessionalInfo({ ...tempProfessional });
    if (section === "geo") setGeoInfo({ ...tempGeo });
    if (section === "credentials") setCredentials({ ...tempCredentials });
    setEditingSection(null);
  };

  const handleCancel = () => setEditingSection(null);

  const handlePersonalChange = (key: keyof PersonalInfo) => (value: string) =>
    setTempPersonal((prev) => ({ ...prev, [key]: value }));

  const handleProfessionalChange = (key: keyof ProfessionalInfo) => (value: string) =>
    setTempProfessional((prev) => ({ ...prev, [key]: value }));

  const handleGeoChange = (key: keyof GeoInfo) => (value: string) =>
    setTempGeo((prev) => ({ ...prev, [key]: value }));

  const handleCredentialsChange = (key: keyof LoginCredentials) => (value: string) =>
    setTempCredentials((prev) => ({ ...prev, [key]: value }));

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <MainLayout>
      {/* Page Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-blue-600">My Profile</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* ── Left Sidebar ── */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg p-6">
            {/* Avatar */}
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full flex items-center justify-center">
                <span className="text-6xl">👨‍⚕️</span>
              </div>
            </div>

            <h2 className="text-xl font-bold text-center text-gray-900">Dr. Peter Andrew</h2>
            <p className="text-center text-gray-600 text-sm mb-4">General Practitioner</p>

            {/* TODO (Backend): Wire avatar upload */}
            <button
              type="button"
              className="w-full border-2 border-blue-500 text-blue-500 py-2 rounded hover:bg-blue-50 font-medium mb-8"
            >
              Edit ✏️
            </button>

            {/* Login Credentials */}
            <div className="border-t pt-6">
              <h3 className="font-bold text-gray-900 mb-4">Login Credentials</h3>

              <div className="space-y-4 text-sm">
                <FieldRow
                  label="Profession"
                  isEditing={editingSection === "credentials"}
                  value={editingSection === "credentials" ? tempCredentials.profession : credentials.profession}
                  onChange={handleCredentialsChange("profession")}
                />
                <FieldRow
                  label="User Name / Email"
                  isEditing={editingSection === "credentials"}
                  value={editingSection === "credentials" ? tempCredentials.email : credentials.email}
                  onChange={handleCredentialsChange("email")}
                />
                <div>
                  <p className="text-gray-600 mb-1">Password</p>
                  {editingSection === "credentials" ? (
                    <input
                      type="password"
                      placeholder="Enter new password"
                      value={tempCredentials.password}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCredentialsChange("password")(e.target.value)}
                      className="w-full border border-blue-300 rounded px-2 py-1 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  ) : (
                    <p className="text-gray-900">••••••••</p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <EditSaveButton
                  isEditing={editingSection === "credentials"}
                  onEdit={() => handleEdit("credentials")}
                  onSave={() => handleSave("credentials")}
                  onCancel={handleCancel}
                  fullWidth
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Right Content ── */}
        <div className="lg:col-span-3 space-y-6">
          {/* Personal Information */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg text-gray-900">Personal Information</h3>
              <EditSaveButton
                isEditing={editingSection === "personal"}
                onEdit={() => handleEdit("personal")}
                onSave={() => handleSave("personal")}
                onCancel={handleCancel}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {personalFields.map(({ label, key }) => (
                <FieldRow
                  key={key}
                  label={label}
                  isEditing={editingSection === "personal"}
                  value={editingSection === "personal" ? tempPersonal[key] : personalInfo[key]}
                  onChange={handlePersonalChange(key)}
                />
              ))}
            </div>
          </div>

          {/* Professional Information */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg text-gray-900">Professional Information</h3>
              <EditSaveButton
                isEditing={editingSection === "professional"}
                onEdit={() => handleEdit("professional")}
                onSave={() => handleSave("professional")}
                onCancel={handleCancel}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {professionalFields.map(({ label, key }) => (
                <FieldRow
                  key={key}
                  label={label}
                  isEditing={editingSection === "professional"}
                  value={editingSection === "professional" ? tempProfessional[key] : professionalInfo[key]}
                  onChange={handleProfessionalChange(key)}
                />
              ))}
            </div>
          </div>

          {/* Geography Information */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg text-gray-900">Geography Information</h3>
              <EditSaveButton
                isEditing={editingSection === "geo"}
                onEdit={() => handleEdit("geo")}
                onSave={() => handleSave("geo")}
                onCancel={handleCancel}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {geoFields.map(({ label, key }) => (
                <FieldRow
                  key={key}
                  label={label}
                  isEditing={editingSection === "geo"}
                  value={editingSection === "geo" ? tempGeo[key] : geoInfo[key]}
                  onChange={handleGeoChange(key)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}