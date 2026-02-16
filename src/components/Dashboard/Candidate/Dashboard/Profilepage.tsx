import MainLayout from '@/components/Dashboard/Candidate/Mainlayout';

export default function ProfilePage() {
    return (
        <MainLayout>
            {/* Header with notification and profile */}
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-blue-600">My Profile</h1>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Left Sidebar - Profile Card */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-lg p-6">
                        {/* Profile Image */}
                        <div className="flex justify-center mb-6">
                            <div className="w-32 h-32 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full flex items-center justify-center">
                                <div className="text-6xl">👨‍⚕️s</div>
                            </div>
                        </div>

                        {/* Profile Name */}
                        <h2 className="text-xl font-bold text-center text-gray-900">Dr. Peter Andrew</h2>
                        <p className="text-center text-gray-600 text-sm mb-4">General Practitioner</p>

                        {/* Edit Button */}
                        <button className="w-full border-2 border-blue-500 text-blue-500 py-2 rounded hover:bg-blue-50 font-medium mb-8">
                            Edit ✏️
                        </button>

                        {/* Login Credentials */}
                        <div className="border-t pt-6">
                            <h3 className="font-bold text-gray-900 mb-4">Login Credentials</h3>

                            <div className="space-y-4 text-sm">
                                <div>
                                    <p className="text-gray-600 mb-1">Profession</p>
                                    <p className="text-gray-900">Medical Practitioner</p>
                                </div>

                                <div>
                                    <p className="text-gray-600 mb-1">User Name / Email</p>
                                    <p className="text-gray-900">peter.andrew345@gmail.com</p>
                                </div>

                                <div>
                                    <p className="text-gray-600 mb-1">Password</p>
                                    <p className="text-gray-900">••••••••</p>
                                </div>
                            </div>

                            <button className="w-full border-2 border-blue-500 text-blue-500 py-2 rounded hover:bg-blue-50 font-medium mt-6">
                                Edit ✏️
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Content - Profile Information */}
                <div className="lg:col-span-3 space-y-6">
                    {/* Personal Information */}
                    <div className="bg-white rounded-lg p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-lg text-gray-900">Personal Information</h3>
                            <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-50 font-medium">
                                Edit ✏️
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div>
                                <p className="text-gray-600 text-sm mb-1">First Name</p>
                                <p className="text-gray-900 font-medium">Dr Peter</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm mb-1">Last Name</p>
                                <p className="text-gray-900 font-medium">Andrew</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm mb-1">Email</p>
                                <p className="text-gray-900 font-medium">peter.andrew345@gmail.com</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm mb-1">Mobile Number</p>
                                <p className="text-gray-900 font-medium">+61 5238 5632 456</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm mb-1">Work Number</p>
                                <p className="text-gray-900 font-medium">+61 5555 5632 456</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm mb-1">Date of Birth</p>
                                <p className="text-gray-900 font-medium">02/10/2024</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm mb-1">Gender</p>
                                <p className="text-gray-900 font-medium">Male</p>
                            </div>
                        </div>
                    </div>

                    {/* Professional Information */}
                    <div className="bg-white rounded-lg p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-lg text-gray-900">Professional Information</h3>
                            <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-50 font-medium">
                                Edit ✏️
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div>
                                <p className="text-gray-600 text-sm mb-1">Profession</p>
                                <p className="text-gray-900 font-medium">Medical Practitioner</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm mb-1">Specialty</p>
                                <p className="text-gray-900 font-medium">General Practitioner</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm mb-1">Seniority</p>
                                <p className="text-gray-900 font-medium">GP Register</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm mb-1">Sub-Skills</p>
                                <p className="text-gray-900 font-medium">-</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm mb-1">Industry</p>
                                <p className="text-gray-900 font-medium">Private Clinic</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm mb-1">Division</p>
                                <p className="text-gray-900 font-medium">Medical</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm mb-1">Professional Qualification</p>
                                <p className="text-gray-900 font-medium">FRACGP</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm mb-1">Country of Primary Degree</p>
                                <p className="text-gray-900 font-medium">Egypt</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm mb-1">Diploma/Degree</p>
                                <p className="text-gray-900 font-medium">Bachelor of Medicine</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm mb-1">University/College</p>
                                <p className="text-gray-900 font-medium">University of Cairo</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm mb-1">Medical & Healthcare Board</p>
                                <p className="text-gray-900 font-medium">-</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm mb-1">Local Experience</p>
                                <p className="text-gray-900 font-medium">1-3</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm mb-1">Overseas Experience</p>
                                <p className="text-gray-900 font-medium">1-3</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm mb-1">Comparable Experience</p>
                                <p className="text-gray-900 font-medium">3-5</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm mb-1">Employment Status</p>
                                <p className="text-gray-900 font-medium">Employed</p>
                            </div>
                        </div>
                    </div>

                    {/* Geography Information */}
                    <div className="bg-white rounded-lg p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-lg text-gray-900">Geography Information</h3>
                            <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-50 font-medium">
                                Edit ✏️
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div>
                                <p className="text-gray-600 text-sm mb-1">Address Line 1</p>
                                <p className="text-gray-900 font-medium">12 Shelley Street</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm mb-1">Address Line 2</p>
                                <p className="text-gray-900 font-medium">Sydney</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm mb-1">Country</p>
                                <p className="text-gray-900 font-medium">Australia</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm mb-1">State</p>
                                <p className="text-gray-900 font-medium">WA</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm mb-1">Suburb</p>
                                <p className="text-gray-900 font-medium">Rockingham</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm mb-1">Post Code</p>
                                <p className="text-gray-900 font-medium">6168</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm mb-1">Region</p>
                                <p className="text-gray-900 font-medium">North Perth</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm mb-1">Main City</p>
                                <p className="text-gray-900 font-medium">-</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm mb-1">Distance</p>
                                <p className="text-gray-900 font-medium">10 - 20 Km</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}