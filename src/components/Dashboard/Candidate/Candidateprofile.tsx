'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/Dashboard/Candidate/Dashboardlayout';

interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;
  workNumber: string;
}

interface ProfessionalInfo {
  profession: string;
  specialty: string;
  seniority: string;
  subSkills: string;
  industry: string;
  division: string;
  qualification: string;
  country: string;
  experience: string;
  board: string;
  localExp: string;
  overseas: string;
  comparable: string;
  status: string;
}

interface GeographyInfo {
  address1: string;
  address2: string;
  suburb: string;
  postcode: string;
  country: string;
  state: string;
  region: string;
  distance: string;
}

interface UserProfile {
  personal: PersonalInfo;
  professional: ProfessionalInfo;
  geography: GeographyInfo;
}

interface FieldData {
  label: string;
  value: string;
}

interface SectionProps {
  title: string;
  fields: FieldData[];
}

const CandidateProfile: React.FC = () => {
  const [profile] = useState<UserProfile>({
    personal: {
      firstName: 'Dr Peter',
      lastName: 'Andrew',
      email: 'peter.andrew345@gmail.com',
      phone: '+61 5238 5632 456',
      dob: '02/10/2024',
      gender: 'Male',
      workNumber: '+61 5655 5632 456',
    },
    professional: {
      profession: 'Medical Practitioner',
      specialty: 'General Practitioner',
      seniority: 'GP Register',
      subSkills: '',
      industry: 'Private Clinic',
      division: 'Medical',
      qualification: 'FRACGP',
      country: 'Egypt',
      experience: '1-3',
      board: 'Medical & Healthcare Board',
      localExp: '1-3',
      overseas: '3-5',
      comparable: '3-5',
      status: 'Employed',
    },
    geography: {
      address1: '12 Shelley Street',
      address2: 'Sydney',
      suburb: 'Rockingham',
      postcode: '6168',
      country: 'Australia',
      state: 'WA',
      region: 'Main City',
      distance: '10 - 20 Km',
    },
  });

  const Section: React.FC<SectionProps> = ({ title, fields }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        <button className="flex items-center space-x-2 px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          <span>Edit</span>
        </button>
      </div>

      <div className="bg-white rounded border border-gray-200 p-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {fields.map((field, index) => (
            <div key={index}>
              <p className="text-xs font-medium text-gray-600 uppercase mb-1">
                {field.label}
              </p>
              <p className="text-sm text-gray-900">{field.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <DashboardLayout title="My Profile">
      <div className="flex gap-6">
        {/* Left Sidebar - User Profile Card */}
        <div className="w-64 flex-shrink-0">
          <div className="bg-white rounded border border-gray-200 p-6 text-center">
            {/* Avatar */}
            <img
              src="https://via.placeholder.com/150"
              alt={profile.personal.firstName}
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-200 object-cover"
            />
            
            {/* Name and Title */}
            <h2 className="text-lg font-semibold text-gray-900 mb-1">
              {profile.personal.firstName} {profile.personal.lastName}
            </h2>
            <p className="text-sm text-gray-600 mb-4">{profile.professional.profession}</p>

            {/* Edit Button */}
            <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors mb-6 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              <span>Edit</span>
            </button>

            {/* Login Credentials Section */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Login Credentials</h3>
              
              <div className="space-y-3 text-left">
                <div>
                  <p className="text-xs font-medium text-gray-600 uppercase mb-1">Profession</p>
                  <p className="text-sm text-gray-900">{profile.professional.profession}</p>
                </div>

                <div>
                  <p className="text-xs font-medium text-gray-600 uppercase mb-1">User Name / Email</p>
                  <p className="text-sm text-gray-900 truncate">{profile.personal.email}</p>
                </div>

                <div>
                  <p className="text-xs font-medium text-gray-600 uppercase mb-1">Password</p>
                  <p className="text-sm text-gray-900">••••••••</p>
                </div>
              </div>

              {/* Edit Credentials Button */}
              <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors mt-4 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span>Edit</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Content - Profile Sections */}
        <div className="flex-1">
          {/* Personal Information */}
          <Section
            title="Personal Information"
            fields={[
              { label: 'First Name', value: profile.personal.firstName },
              { label: 'Last Name', value: profile.personal.lastName },
              { label: 'Email', value: profile.personal.email },
              { label: 'Mobile Number', value: profile.personal.phone },
              { label: 'Work Number', value: profile.personal.workNumber },
              { label: 'Date of Birth', value: profile.personal.dob },
              { label: 'Gender', value: profile.personal.gender },
            ]}
          />

          {/* Professional Information */}
          <Section
            title="Professional Information"
            fields={[
              { label: 'Profession', value: profile.professional.profession },
              { label: 'Specialty', value: profile.professional.specialty },
              { label: 'Seniority', value: profile.professional.seniority },
              { label: 'Sub-Skills', value: profile.professional.subSkills || '-' },
              { label: 'Industry', value: profile.professional.industry },
              { label: 'Division', value: profile.professional.division },
              { label: 'Professional Qualification', value: profile.professional.qualification },
              { label: 'Country of Primary Degree', value: profile.professional.country },
              { label: 'Diploma/Degree', value: 'Bachelor of Medicine' },
              { label: 'University/College', value: 'University of Cairo' },
              { label: 'Medical & Healthcare Board', value: profile.professional.board },
              { label: 'Local Experience', value: profile.professional.localExp },
              { label: 'Overseas Experience', value: profile.professional.overseas },
              { label: 'Comparable Experience', value: profile.professional.comparable },
              { label: 'Employment Status', value: profile.professional.status },
            ]}
          />

          {/* Geography Information */}
          <Section
            title="Geography Information"
            fields={[
              { label: 'Address Line 1', value: profile.geography.address1 },
              { label: 'Address Line 2', value: profile.geography.address2 },
              { label: 'Suburb', value: profile.geography.suburb },
              { label: 'Post Code', value: profile.geography.postcode },
              { label: 'Country', value: profile.geography.country },
              { label: 'State', value: profile.geography.state },
              { label: 'Region', value: profile.geography.region },
              { label: 'Distance', value: profile.geography.distance },
            ]}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CandidateProfile;