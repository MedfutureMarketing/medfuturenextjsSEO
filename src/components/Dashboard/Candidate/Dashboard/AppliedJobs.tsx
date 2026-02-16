import MainLayout from '@/components/Dashboard/Candidate/Mainlayout';

export default function AppliedJobsPage() {
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

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">Applied Jobs</h1>
          <div className="flex items-center gap-3">
            <span className="text-gray-700">Permanent</span>
            <button className="relative inline-flex h-8 w-14 items-center rounded-full bg-blue-600">
              <span className="inline-block h-6 w-6 transform rounded-full bg-white transition ml-1"></span>
            </button>
            <span className="text-gray-700">Locum</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-lg p-4">
          <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded w-80">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 outline-none flex-1 text-gray-700 placeholder-gray-500"
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-12">ID</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 min-w-96">Position</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Period</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Rate</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Location</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Applied Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr key={job.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-6 text-sm text-gray-900 font-medium">{index + 1}.</td>
                  <td className="px-6 py-6 text-sm">
                    <p className="text-gray-900 font-semibold">{job.position}</p>
                    <p className="text-gray-600 text-xs mt-1">{job.profession}</p>
                  </td>
                  <td className="px-6 py-6 text-sm text-gray-700">{job.period}</td>
                  <td className="px-6 py-6 text-sm text-gray-700">{job.rate}</td>
                  <td className="px-6 py-6 text-sm text-gray-700">{job.location}</td>
                  <td className="px-6 py-6 text-sm text-gray-700">{job.appliedDate}</td>
                  <td className="px-6 py-6 text-sm">
                    <span className={`${job.statusColor} font-medium`}>{job.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
}