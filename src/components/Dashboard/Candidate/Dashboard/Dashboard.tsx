"use client";

import { useState, useCallback, useMemo, memo } from "react";
import MainLayout from "@/components/Dashboard/Candidate/Mainlayout";

// Types
interface UserInfo {
  registeredDate: string;
  email: string;
  mobileNumber: string;
  workNumber: string;
  address: string;
  specialty: string;
  seniority: string;
  employmentStatus: string;
}

interface Job {
  id: string;
  description: string;
  type: 'permanent' | 'locum';
  rate?: string;
  location: string;
}

// Mock data - move to separate file in real app
const MOCK_USER: UserInfo = {
  registeredDate: "01/01/2023",
  email: "peter.andrew345@gmail.com",
  mobileNumber: "+61 565 558 962",
  workNumber: "+61 565 558 962",
  address: "12 Shelley Street, Sydney",
  specialty: "General Practitioner",
  seniority: "GP Register",
  employmentStatus: "Employed",
};

const MOCK_JOBS: Job[] = [
  { 
    id: "NU25129", 
    description: "Registered Nurse (DIV 1)", 
    type: 'locum',
    rate: "AUD 70/hr",
    location: "Raminging"
  },
  { 
    id: "NU25130", 
    description: "General Practitioner", 
    type: 'permanent',
    rate: "AUD 180k",
    location: "Sydney"
  },
  { 
    id: "NU25131", 
    description: "Nurse Practitioner", 
    type: 'locum',
    rate: "AUD 85/hr",
    location: "Melbourne"
  },
];

// Memoized Components
const ToggleSwitch = memo(({ 
  label, 
  enabled, 
  onChange,
  leftLabel,
  rightLabel 
}: { 
  label: string;
  enabled: boolean;
  onChange: () => void;
  leftLabel: string;
  rightLabel: string;
}) => (
  <div className="flex items-center gap-2">
    <span className={`text-xs font-medium ${!enabled ? "text-blue-600" : "text-gray-400"}`}>
      {leftLabel}
    </span>
    <button
      type="button"
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        enabled ? "bg-blue-600" : "bg-gray-300"
      }`}
      role="switch"
      aria-checked={enabled}
      aria-label={label}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
          enabled ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
    <span className={`text-xs font-medium ${enabled ? "text-blue-600" : "text-gray-400"}`}>
      {rightLabel}
    </span>
  </div>
));

ToggleSwitch.displayName = 'ToggleSwitch';

const InfoCard = memo(({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-gray-500 text-xs mb-1">{label}</p>
    <p className="text-gray-900 font-medium text-xs truncate" title={value}>
      {value}
    </p>
  </div>
));

InfoCard.displayName = 'InfoCard';

const JobCard = memo(({ job }: { job: Job }) => {
  const fullDescription = `${job.description} | ${job.type === 'locum' ? 'Locum' : 'Permanent'} | ${job.rate} | ${job.location}`;
  
  return (
    <div className="border-b pb-4 last:border-b-0 last:pb-0">
      <p className="font-semibold text-gray-900 text-sm">{job.id}</p>
      <p className="text-gray-500 text-xs mt-1 leading-relaxed" title={fullDescription}>
        {fullDescription}
      </p>
    </div>
  );
});

JobCard.displayName = 'JobCard';

const Calendar = memo(() => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();
  const today = currentDate.getDate();

  // Generate calendar days
  const firstDay = new Date(currentYear, currentDate.getMonth(), 1).getDay();
  const daysInMonth = new Date(currentYear, currentDate.getMonth() + 1, 0).getDate();
  
  // Adjust for Monday as first day
  const startOffset = firstDay === 0 ? 6 : firstDay - 1;
  
  const prevMonthDays = Array.from({ length: startOffset }, (_, i) => 
    new Date(currentYear, currentDate.getMonth(), 0).getDate() - startOffset + i + 1
  );
  
  const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  
  const totalCells = Math.ceil((startOffset + daysInMonth) / 7) * 7;
  const nextMonthDays = Array.from(
    { length: totalCells - (startOffset + daysInMonth) },
    (_, i) => i + 1
  );

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-semibold text-gray-900 text-sm">
          {currentMonth} {currentYear}
        </h4>
        <div className="flex gap-2">
          <button 
            type="button" 
            className="text-gray-600 hover:text-gray-900 px-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Previous month"
          >
            ❮
          </button>
          <button 
            type="button" 
            className="text-gray-600 hover:text-gray-900 px-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Next month"
          >
            ❯
          </button>
        </div>
      </div>
      
      <div className="text-center text-xs">
        <div className="grid grid-cols-7 gap-0.5 mb-1">
          {days.map((d) => (
            <div key={d} className="font-semibold text-gray-500 py-1">{d}</div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-0.5">
          {prevMonthDays.map((d) => (
            <div key={`prev-${d}`} className="text-gray-300 py-1">{d}</div>
          ))}
          
          {currentMonthDays.map((d) => (
            <div
              key={d}
              className={`py-1 rounded cursor-pointer transition-colors ${
                d === today
                  ? "bg-orange-500 text-white font-semibold hover:bg-orange-600"
                  : "text-gray-900 hover:bg-gray-100"
              }`}
              role="gridcell"
              aria-current={d === today ? 'date' : undefined}
            >
              {d}
            </div>
          ))}
          
          {nextMonthDays.map((d) => (
            <div key={`next-${d}`} className="text-gray-300 py-1">{d}</div>
          ))}
        </div>
      </div>
    </div>
  );
});

Calendar.displayName = 'Calendar';

const ProgressCard = memo(({ 
  title, 
  description, 
  percentage, 
  color = "blue",
  buttonText,
  onButtonClick 
}: { 
  title: string;
  description: string;
  percentage: number;
  color?: 'blue' | 'orange';
  buttonText: string;
  onButtonClick: () => void;
}) => {
  const colorClasses = {
    blue: 'bg-blue-500',
    orange: 'bg-orange-500'
  };

  return (
    <div className="bg-white rounded-lg p-6">
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-xs mb-3">{description}</p>
      <div className="w-full bg-gray-100 rounded-full h-2 mb-3">
        <div 
          className={`${colorClasses[color]} h-2 rounded-full transition-all duration-500`} 
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      <div className="flex justify-between items-center">
        <span className="text-3xl font-bold text-gray-900">{percentage}%</span>
        <button 
          type="button" 
          onClick={onButtonClick}
          className="text-blue-600 text-xs font-medium underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
});

ProgressCard.displayName = 'ProgressCard';

// Main Component
export default function DashboardPage() {
  const [doNotContact, setDoNotContact] = useState(false);
  const [offeredJobsLocum, setOfferedJobsLocum] = useState(false);

  // Memoize handlers
  const toggleDoNotContact = useCallback(() => {
    setDoNotContact(prev => !prev);
  }, []);

  const toggleOfferedJobs = useCallback(() => {
    setOfferedJobsLocum(prev => !prev);
  }, []);

  const handleCompleteProfile = useCallback(() => {
    console.log('Navigate to profile completion');
    // Add navigation logic here
  }, []);

  const handleUploadDocs = useCallback(() => {
    console.log('Navigate to compliance upload');
    // Add navigation logic here
  }, []);

  const handleReferNow = useCallback(() => {
    console.log('Navigate to refer & earn');
    // Add navigation logic here
  }, []);

  // Memoize filtered jobs
  const filteredJobs = useMemo(() => {
    return MOCK_JOBS.filter(job => 
      offeredJobsLocum ? job.type === 'locum' : job.type === 'permanent'
    );
  }, [offeredJobsLocum]);

  // Memoize user info fields
  const userInfoFields = useMemo(() => [
    { label: "Registered Date", value: MOCK_USER.registeredDate },
    { label: "Email", value: MOCK_USER.email },
    { label: "Mobile Number", value: MOCK_USER.mobileNumber },
    { label: "Work Number", value: MOCK_USER.workNumber },
    { label: "Address", value: MOCK_USER.address },
    { label: "Specialty", value: MOCK_USER.specialty },
    { label: "Seniority", value: MOCK_USER.seniority },
    { label: "Employment Status", value: MOCK_USER.employmentStatus },
  ], []);

  return (
    <MainLayout>
      <div className="space-y-6 px-2 sm:px-0">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <h1 className="text-xl sm:text-3xl font-bold text-blue-900">Dashboard</h1>
          <ToggleSwitch
            label="Toggle Do Not Contact"
            enabled={doNotContact}
            onChange={toggleDoNotContact}
            leftLabel="Do Not Contact"
            rightLabel=""
          />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Profile Card */}
          <div className="md:col-span-1 lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full flex items-center justify-center">
                  <span className="text-5xl sm:text-6xl" role="img" aria-label="Doctor avatar">
                    👨‍⚕️
                  </span>
                </div>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-center text-gray-900">Dr. Peter Andrew</h2>
              <p className="text-center text-gray-500 text-sm mb-4">General Practitioner</p>
              <button
                type="button"
                className="w-full bg-green-500 text-white py-2 rounded font-medium mb-6 hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                aria-label="Set status to Active"
              >
                Active
              </button>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="lg:text-2xl text-xs font-bold text-gray-900">01</p>
                  <p className="text-gray-600 text-xs mt-1">Offered Jobs</p>
                </div>
                <div>
                  <p className="lg:text-2xl text-xs font-bold text-gray-900">12</p>
                  <p className="text-gray-600 text-xs mt-1">Applied Jobs</p>
                </div>
              </div>
            </div>
          </div>

          {/* User Info */}
          <div className="md:col-span-1 lg:col-span-2">
            <div className="bg-white rounded-lg p-6 h-full shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {userInfoFields.map(({ label, value }) => (
                  <InfoCard key={label} label={label} value={value} />
                ))}
              </div>
            </div>
          </div>

          {/* Interviews & Calendar */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-900">Interviews</h3>
                <button 
                  type="button" 
                  className="text-blue-600 text-sm font-medium underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                  History
                </button>
              </div>

              <Calendar />

              {/* Meeting */}
              <div className="border-t pt-4 flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex flex-col items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-gray-900 leading-none">08</span>
                  <span className="text-xs text-gray-500 leading-none">JUL</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 text-sm truncate">Meeting With Jakei</p>
                  <p className="text-xs text-gray-500">08:00 AM – 09:00 AM</p>
                </div>
                <button 
                  type="button" 
                  className="text-gray-400 hover:text-gray-600 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded"
                  aria-label="More options"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Applied Jobs Chart */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4">Applied Jobs</h3>
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#bfdbfe" strokeWidth="20" />
                  <circle
                    cx="50" cy="50" r="40" fill="none"
                    stroke="#2563eb" strokeWidth="20"
                    strokeDasharray="188 251"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-lg font-bold text-gray-900">75 Jobs</p>
                </div>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-blue-300 flex-shrink-0" />
                <span className="text-gray-700">Permanent · 50 Jobs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-blue-600 flex-shrink-0" />
                <span className="text-gray-700">Locum · 25 Jobs</span>
              </div>
            </div>
          </div>

          {/* Profile Completed + Compliance */}
          <div className="space-y-4">
            <ProgressCard
              title="Profile Completed"
              description="A complete profile increases your chances of getting hired."
              percentage={68}
              color="blue"
              buttonText="Complete Profile"
              onButtonClick={handleCompleteProfile}
            />
            <ProgressCard
              title="Compliance"
              description="Ensure all compliance documents are submitted."
              percentage={52}
              color="orange"
              buttonText="Upload Docs"
              onButtonClick={handleUploadDocs}
            />
          </div>

          {/* Refer & Earn */}
          <div className="bg-white rounded-lg p-6 flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Refer &amp; Earn</h3>
              <p className="text-gray-500 text-xs mb-4">
                Refer a colleague and earn a bonus when they get placed.
              </p>
              <p className="text-4xl sm:text-5xl font-bold text-gray-900">$500</p>
            </div>
            <button
              type="button"
              onClick={handleReferNow}
              className="mt-4 w-full border-2 border-blue-500 text-blue-500 py-2 rounded font-medium hover:bg-blue-50 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Refer Now
            </button>
          </div>

          {/* Offered Jobs */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
              <h3 className="font-bold text-gray-900">Offered Jobs</h3>
              <ToggleSwitch
                label="Toggle job type"
                enabled={offeredJobsLocum}
                onChange={toggleOfferedJobs}
                leftLabel="Permanent"
                rightLabel="Locum"
              />
            </div>

            <div className="space-y-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))
              ) : (
                <p className="text-gray-500 text-sm text-center py-4">
                  No {offeredJobsLocum ? 'locum' : 'permanent'} jobs available
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}