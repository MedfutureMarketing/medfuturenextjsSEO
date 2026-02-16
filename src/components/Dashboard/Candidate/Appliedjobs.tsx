'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/Dashboard/Candidate/Dashboardlayout';

interface JobApplication {
  id: number;
  jobId: string;
  position: string;
  profession: string;
  period: string;
  rate: string;
  location: string;
  appliedDate: string;
  status: 'Applied' | 'Contacted' | 'Rejected' | 'Accepted';
}

const AppliedJobs: React.FC = () => {
  const [applications] = useState<JobApplication[]>([
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
    },
    {
      id: 2,
      jobId: 'GP2536',
      position: 'Medical Officer-NON-VR - Locum – Salaried Position – Prison Health – West Melbourne',
      profession: 'Medical Practitioner',
      period: 'To be discussed',
      rate: 'AUD 180 per hour',
      location: 'West Melbourne, Victoria',
      appliedDate: '24 Jan 2025',
      status: 'Contacted',
    },
    {
      id: 3,
      jobId: 'GP2536',
      position: 'Medical Officer-VR - Locum – Salaried Position – Prison Health – West Melbourne',
      profession: 'Medical Practitioner',
      period: 'To be discussed',
      rate: 'AUD 200 per hour',
      location: 'West Melbourne, Victoria',
      appliedDate: '24 Jan 2025',
      status: 'Applied',
    },
    {
      id: 4,
      jobId: 'GP2536',
      position: 'Medical Officer - VR - Locum – Salaried Position – Prison Health – Castlemaine',
      profession: 'Medical Practitioner',
      period: 'Any',
      rate: 'AUD 200 per hour',
      location: 'Castlemaine, Victoria',
      appliedDate: '24 Jan 2025',
      status: 'Contacted',
    },
    {
      id: 5,
      jobId: 'GP2536',
      position: 'Medical Officer - VR - Locum - Salaried Position – Prison Health Services – Lara',
      profession: 'Medical Practitioner',
      period: 'Any',
      rate: 'AUD 200 per hour',
      location: 'Lara, Victoria',
      appliedDate: '24 Jan 2025',
      status: 'Applied',
    },
    {
      id: 6,
      jobId: 'GP2536',
      position: 'Medical Officer - VR - Locum – Salaried Position – Prison Health Services – Lara',
      profession: 'Medical Practitioner',
      period: 'Any',
      rate: 'AUD 200 per hour',
      location: 'Lara, Victoria',
      appliedDate: '24 Jan 2025',
      status: 'Contacted',
    },
  ]);

  const getStatusColor = (status: JobApplication['status']): string => {
    switch (status) {
      case 'Applied':
        return 'text-blue-600';
      case 'Contacted':
        return 'text-blue-600';
      case 'Accepted':
        return 'text-green-600';
      case 'Rejected':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <DashboardLayout title="Applied Jobs">
      <div className="bg-white rounded border border-gray-200 overflow-hidden">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            {/* Table Header */}
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-12">ID</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Position</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-40">Period</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-40">Rate</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-40">Location</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-32">Applied Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-20">Status</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-200">
              {applications.map((app, index) => (
                <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                  {/* ID Column */}
                  <td className="px-6 py-4 text-sm text-gray-600 align-top">
                    {index + 1}.
                  </td>

                  {/* Position Column */}
                  <td className="px-6 py-4 text-sm align-top">
                    <div className="mb-1">
                      <p className="font-semibold text-gray-900">{app.position}</p>
                    </div>
                    <p className="text-gray-600 text-xs">{app.profession}</p>
                  </td>

                  {/* Period Column */}
                  <td className="px-6 py-4 text-sm text-gray-600 align-top">
                    {app.period}
                  </td>

                  {/* Rate Column */}
                  <td className="px-6 py-4 text-sm text-gray-600 align-top">
                    {app.rate}
                  </td>

                  {/* Location Column */}
                  <td className="px-6 py-4 text-sm text-gray-600 align-top">
                    {app.location}
                  </td>

                  {/* Applied Date Column */}
                  <td className="px-6 py-4 text-sm text-gray-600 align-top">
                    {app.appliedDate}
                  </td>

                  {/* Status Column */}
                  <td className="px-6 py-4 text-sm align-top">
                    <span className={`font-medium ${getStatusColor(app.status)}`}>
                      {app.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 text-sm text-gray-600">
          Showing {applications.length} applications
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AppliedJobs;