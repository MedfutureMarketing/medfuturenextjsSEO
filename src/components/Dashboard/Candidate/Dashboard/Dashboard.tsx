import MainLayout from '@/components/Dashboard/Candidate/Mainlayout';

export default function DashboardPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header with Do Not Contact toggle */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">Dashboard</h1>
          <div className="flex items-center gap-3">
            <button className="relative inline-flex h-8 w-14 items-center rounded-full bg-red-500">
              <span className="inline-block h-6 w-6 transform rounded-full bg-white transition ml-1"></span>
            </button>
            <span className="text-gray-700 font-medium">Do Not Contact</span>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6">
              {/* Profile Image */}
              <div className="flex justify-center mb-4">
                <div className="w-32 h-32 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full flex items-center justify-center">
                  <div className="text-6xl">👨‍⚕️</div>
                </div>
              </div>

              {/* Profile Info */}
              <h2 className="text-xl font-bold text-center text-gray-900">Dr. Peter Andrew</h2>
              <p className="text-center text-gray-500 text-sm mb-4">General Practitioner</p>

              {/* Active Status */}
              <button className="w-full bg-green-500 text-white py-2 rounded font-medium mb-6 hover:bg-green-600">
                Active
              </button>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-gray-900">01</p>
                  <p className="text-gray-600 text-xs mt-1">Offered Jobs</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                  <p className="text-gray-600 text-xs mt-1">Applied Jobs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle - User Info and Calendar */}
          <div className="lg:col-span-2 space-y-6">
            {/* User Information */}
            <div className="bg-white rounded-lg p-6">
              <div className="grid grid-cols-2 md:gird-cols-4 gap-6">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Registered Date</p>
                  <p className="text-gray-900 font-medium">peter.andrew345@gmail.com</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Email</p>
                  <p className="text-gray-900 font-medium">peter.andrew345@gmail.com</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Mobile Number</p>
                  <p className="text-gray-900 font-medium">+61 565 558 962</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Work Number</p>
                  <p className="text-gray-900 font-medium">+61 565 558 962</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Address</p>
                  <p className="text-gray-900 font-medium">peter.andrew345@gmail.com</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Specialty</p>
                  <p className="text-gray-900 font-medium">+61 565 558 962</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Seniority</p>
                  <p className="text-gray-900 font-medium">+61 565 558 962</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Seniority</p>
                  <p className="text-gray-900 font-medium">+61 565 558 962</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Interviews and Calendar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-900">Interviews</h3>
                <button className="text-blue-600 text-sm font-medium underline">History</button>
              </div>

              {/* Calendar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-semibold text-gray-900">Month 2024</h4>
                  <div className="flex gap-2">
                    <button className="text-gray-600 hover:text-gray-900">❮</button>
                    <button className="text-gray-600 hover:text-gray-900">❯</button>
                  </div>
                </div>

                {/* Calendar Grid */}
                <div className="text-center text-sm">
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    <div className="font-semibold text-gray-600">Mon</div>
                    <div className="font-semibold text-gray-600">Tue</div>
                    <div className="font-semibold text-gray-600">Wed</div>
                    <div className="font-semibold text-gray-600">Thu</div>
                    <div className="font-semibold text-gray-600">Fri</div>
                    <div className="font-semibold text-gray-600">Sat</div>
                    <div className="font-semibold text-gray-600">Sun</div>
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    <div className="text-gray-400 py-1">28</div>
                    <div className="text-gray-400 py-1">29</div>
                    <div className="text-gray-400 py-1">30</div>
                    <div className="text-gray-400 py-1">31</div>
                    <div className="text-gray-900 py-1">1</div>
                    <div className="text-gray-900 py-1">2</div>
                    <div className="text-gray-900 py-1">3</div>
                    <div className="text-gray-900 py-1">4</div>
                    <div className="text-gray-900 py-1">5</div>
                    <div className="text-gray-900 py-1">6</div>
                    <div className="text-gray-900 py-1">7</div>
                    <div className="text-gray-900 py-1">8</div>
                    <div className="text-gray-900 py-1">9</div>
                    <div className="text-gray-900 py-1">10</div>
                    <div className="text-gray-900 py-1">11</div>
                    <div className="text-gray-900 py-1">12</div>
                    <div className="text-gray-900 py-1">13</div>
                    <div className="bg-orange-500 text-white rounded py-1 font-semibold">14</div>
                    <div className="text-gray-900 py-1">15</div>
                    <div className="text-gray-900 py-1">16</div>
                    <div className="text-gray-900 py-1">17</div>
                    <div className="text-gray-900 py-1">18</div>
                    <div className="text-gray-900 py-1">19</div>
                    <div className="text-gray-900 py-1">20</div>
                    <div className="text-gray-900 py-1">21</div>
                    <div className="text-gray-900 py-1">22</div>
                    <div className="text-gray-900 py-1">23</div>
                    <div className="text-gray-900 py-1">24</div>
                    <div className="text-gray-900 py-1">25</div>
                    <div className="text-gray-900 py-1">26</div>
                    <div className="text-gray-900 py-1">27</div>
                    <div className="text-gray-900 py-1">28</div>
                    <div className="text-gray-900 py-1">29</div>
                    <div className="text-gray-900 py-1">30</div>
                    <div className="text-gray-900 py-1">31</div>
                  </div>
                </div>
              </div>

              {/* Meeting */}
              <div className="border-t pt-4 flex items-start gap-3">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-center flex-shrink-0">
                  <div className="text-sm">
                    <div className="font-semibold text-gray-900">08</div>
                    <div className="text-xs text-gray-600">JULY</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Meeting With Jakei</h4>
                  <p className="text-xs text-gray-600">08:00 AM - 09:00 AM</p>
                </div>
                <button className="ml-auto text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid - Charts and Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Applied Jobs Chart */}
          <div className="lg:col-span-1 bg-white rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-6">Applied Jobs</h3>
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-48 h-48">
                {/* Pie Chart - Simple SVG */}
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="40" fill="#60a5fa" />
                  <path
                    d="M 50 50 L 50 10 A 40 40 0 0 1 80 70 Z"
                    fill="#2563eb"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">75 Jobs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded"></div>
                <span className="text-gray-700">Permanent</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-600 rounded"></div>
                <span className="text-gray-700">25 Jobs</span>
              </div>
            </div>
          </div>

          {/* Profile Completed and Compliance */}
          <div className="lg:col-span-1 space-y-4">
            {/* Profile Completed */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Profile Completed</h3>
              <p className="text-gray-600 text-sm mb-4">A complete profile increases your chances of getting hired. Fill in missing details now!</p>
              <div className="text-5xl font-bold text-gray-900 mb-4">68%</div>
              <button className="text-blue-600 text-sm font-medium underline">Complete Your Profile</button>
            </div>

            {/* Compliance */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Compliance</h3>
              <p className="text-gray-600 text-sm mb-4">Ensure all compliance documents are submitted to stay eligible for job offers.</p>
              <div className="text-5xl font-bold text-gray-900 mb-4">52%</div>
              <button className="text-blue-600 text-sm font-medium underline">Upload Documents</button>
            </div>
          </div>

          {/* Refer & Earns */}
          <div className="lg:col-span-1 bg-white rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-4">Refer & Earns</h3>
            <p className="text-5xl font-bold text-gray-900">$500</p>
          </div>

          {/* Offered Jobs */}
          <div className="lg:col-span-1 bg-white rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-900">Offered Jobs</h3>
              <div className="flex items-center gap-2">
                <span className="text-gray-700 text-sm">Permanent</span>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition ml-1"></span>
                </button>
                <span className="text-gray-700 text-sm">Locum</span>
              </div>
            </div>

            <div className="space-y-4">
              {[1, 2, 3].map((job) => (
                <div key={job} className="border-b pb-4 last:border-b-0">
                  <p className="font-semibold text-gray-900 text-sm">NU25129</p>
                  <p className="text-gray-600 text-xs mt-1">Registered Nurse (DIV 1) | Locum | AUD 70 per hour | Raminging</p>
                </div>
              ))}
            </div>

            <div className="w-1 h-32 bg-blue-600 absolute right-6 bottom-6 rounded"></div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}