"use client";

import MainLayout from '@/components/Dashboard/Candidate/Mainlayout';
import { useState } from 'react';

export default function AppliedJobsPage() {
  const [showPermanent, setShowPermanent] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  
  const jobs = [
    {
      id: 1,
      jobId: 'GP2536',
      position: 'Medical Officer – NON-VR – Locum – Weekend – Salaried – Prison Health – West Melbourne',
      profession: 'Medical Practitioner',
      period: 'To be discussed',
      rate: 'AUD 180 per hour',
      location: 'West Melbourne, Victoria',
      appliedDate: '24 Jan 2025',
      status: 'Applied',
      statusColor: 'text-blue-600',
    },
    {
      id: 2,
      jobId: 'GP2536',
      position: 'Medical Officer-NON-VR – Locum – Salaried Position – Prison Health – West Melbourne',
      profession: 'Medical Practitioner',
      period: 'To be discussed',
      rate: 'AUD 180 per hour',
      location: 'West Melbourne, Victoria',
      appliedDate: '24 Jan 2025',
      status: 'Contacted',
      statusColor: 'text-blue-600',
    },
    {
      id: 3,
      jobId: 'GP2536',
      position: 'Medical Officer-VR – Locum – Salaried Position – Prison Health – West Melbourne',
      profession: 'Medical Practitioner',
      period: 'To be discussed',
      rate: 'AUD 200 per hour',
      location: 'West Melbourne, Victoria',
      appliedDate: '24 Jan 2025',
      status: 'Applied',
      statusColor: 'text-blue-600',
    },
    {
      id: 4,
      jobId: 'GP2536',
      position: 'Medical Officer – VR – Locum – Salaried Position – Prison Health – Castlemaine',
      profession: 'Medical Practitioner',
      period: 'Any',
      rate: 'AUD 200 per hour',
      location: 'Castlemaine, Victoria',
      appliedDate: '24 Jan 2025',
      status: 'Contacted',
      statusColor: 'text-blue-600',
    },
    {
      id: 5,
      jobId: 'GP2536',
      position: 'Medical Officer – VR – Locum – Salaried Position – Prison Health Services – Lara',
      profession: 'Medical Practitioner',
      period: 'Any',
      rate: 'AUD 200 per hour',
      location: 'Lara, Victoria',
      appliedDate: '24 Jan 2025',
      status: 'Applied',
      statusColor: 'text-blue-600',
    },
  ];

  const filteredJobs = jobs.filter(job => 
    job.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.profession.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="space-y-4 md:space-y-6 px-3 sm:px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-600">Applied Jobs</h1>
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <span className={`text-sm sm:text-base ${!showPermanent ? 'text-gray-400' : 'text-gray-700'}`}>Permanent</span>
            <button 
              onClick={() => setShowPermanent(!showPermanent)}
              className="relative inline-flex h-6 sm:h-8 w-12 sm:w-14 items-center rounded-full bg-blue-600"
            >
              <span className={`inline-block h-4 sm:h-6 w-4 sm:w-6 transform rounded-full bg-white transition-all duration-200 ${showPermanent ? 'translate-x-1' : 'translate-x-7 sm:translate-x-8'}`}></span>
            </button>
            <span className={`text-sm sm:text-base ${showPermanent ? 'text-gray-400' : 'text-gray-700'}`}>Locum</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-lg p-3 sm:p-4">
          <div className="flex items-center gap-2 sm:gap-3 bg-gray-100 px-3 sm:px-4 py-2 rounded w-full sm:w-80">
            <svg className="w-4 sm:w-5 h-4 sm:h-5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search jobs, location, or profession"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-100 outline-none flex-1 text-gray-700 placeholder-gray-500 text-sm sm:text-base min-w-0"
            />
          </div>
        </div>

        {/* Mobile View - Cards */}
        <div className="block lg:hidden space-y-3">
          {filteredJobs.map((job, index) => (
            <div key={job.id} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs text-gray-500">#{index + 1}</span>
                <span className={`${job.statusColor} text-xs sm:text-sm font-medium px-2 py-1 bg-blue-50 rounded-full`}>
                  {job.status}
                </span>
              </div>
              
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 line-clamp-2">
                {job.position}
              </h3>
              <p className="text-xs text-gray-600 mb-3">{job.profession}</p>
              
              <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
                <div>
                  <p className="text-gray-500">Period</p>
                  <p className="text-gray-900 font-medium">{job.period}</p>
                </div>
                <div>
                  <p className="text-gray-500">Rate</p>
                  <p className="text-gray-900 font-medium">{job.rate}</p>
                </div>
                <div>
                  <p className="text-gray-500">Location</p>
                  <p className="text-gray-900 font-medium truncate">{job.location}</p>
                </div>
                <div>
                  <p className="text-gray-500">Applied</p>
                  <p className="text-gray-900 font-medium">{job.appliedDate}</p>
                </div>
              </div>
            </div>
          ))}
          
          {filteredJobs.length === 0 && (
            <div className="bg-white rounded-lg p-8 text-center">
              <p className="text-gray-500">No jobs found matching your search.</p>
            </div>
          )}
        </div>

        {/* Desktop View - Table */}
        <div className="hidden lg:block bg-white rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-4 xl:px-6 py-4 text-left text-xs xl:text-sm font-semibold text-gray-900 w-12">ID</th>
                  <th className="px-4 xl:px-6 py-4 text-left text-xs xl:text-sm font-semibold text-gray-900 min-w-[400px] xl:min-w-[500px]">Position</th>
                  <th className="px-4 xl:px-6 py-4 text-left text-xs xl:text-sm font-semibold text-gray-900">Period</th>
                  <th className="px-4 xl:px-6 py-4 text-left text-xs xl:text-sm font-semibold text-gray-900">Rate</th>
                  <th className="px-4 xl:px-6 py-4 text-left text-xs xl:text-sm font-semibold text-gray-900">Location</th>
                  <th className="px-4 xl:px-6 py-4 text-left text-xs xl:text-sm font-semibold text-gray-900">Applied Date</th>
                  <th className="px-4 xl:px-6 py-4 text-left text-xs xl:text-sm font-semibold text-gray-900">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredJobs.map((job, index) => (
                  <tr key={job.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-4 xl:px-6 py-4 xl:py-6 text-xs xl:text-sm text-gray-900 font-medium">{index + 1}.</td>
                    <td className="px-4 xl:px-6 py-4 xl:py-6 text-xs xl:text-sm">
                      <p className="text-gray-900 font-semibold line-clamp-2">{job.position}</p>
                      <p className="text-gray-600 text-xs mt-1">{job.profession}</p>
                    </td>
                    <td className="px-4 xl:px-6 py-4 xl:py-6 text-xs xl:text-sm text-gray-700">{job.period}</td>
                    <td className="px-4 xl:px-6 py-4 xl:py-6 text-xs xl:text-sm text-gray-700 whitespace-nowrap">{job.rate}</td>
                    <td className="px-4 xl:px-6 py-4 xl:py-6 text-xs xl:text-sm text-gray-700">{job.location}</td>
                    <td className="px-4 xl:px-6 py-4 xl:py-6 text-xs xl:text-sm text-gray-700 whitespace-nowrap">{job.appliedDate}</td>
                    <td className="px-4 xl:px-6 py-4 xl:py-6 text-xs xl:text-sm">
                      <span className={`${job.statusColor} font-medium`}>{job.status}</span>
                    </td>
                  </tr>
                ))}
                
                {filteredJobs.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                      No jobs found matching your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Results count */}
        <div className="text-xs sm:text-sm text-gray-500 text-center lg:text-left">
          Showing {filteredJobs.length} of {jobs.length} jobs
        </div>
      </div>
    </MainLayout>
  );
}