// "use client"
// import { useState } from "react";

// export default function EmployerRegistrationForm() {
//   const [formData, setFormData] = useState({
//     companyName: "",
//     companySize: "",
//     industry: "",
//     companyEmail: "",
//     companyPhone: "",
//     officeLocation: "",
//     employerPassword: "",
//     employerConfirmPassword: "",
//     agreeToTermsEmployer: false,
//     newsAndUpdates: false,
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const handleInputChange = (e: { target: { checked?: any; name?: any; value?: any; type?: any; }; }) => {
//     const { name, value, type } = e.target;
    
//     if (type === "checkbox") {
//       const checked = e.target.checked;
//       setFormData((prev) => ({ ...prev, [name]: checked }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     console.log("Employer Form submitted:", formData);
//   };

//   const handleSocialLogin = (provider: string) => {
//     console.log(`Login with ${provider}`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4">
//       <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
//         {/* Header */}
//         <div className="bg-[#0A2E5C] px-8 py-6">
//           <h1 className="text-2xl font-bold text-white">Employer Registration</h1>
//           <p className="text-blue-100 mt-2">Find and hire the best talent for your organization</p>
//         </div>

//         {/* Form Content */}
//         <div className="p-8">
//           {/* Social Login Buttons */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
//             <button
//               onClick={() => handleSocialLogin("Google")}
//               className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition bg-red-500 text-white hover:bg-red-600"
//             >
//               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
//                 <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
//                 <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
//                 <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
//                 <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
//               </svg>
//               <span className="text-sm font-medium">Google</span>
//             </button>

//             <button
//               onClick={() => handleSocialLogin("LinkedIn")}
//               className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition bg-blue-700 text-white hover:bg-blue-800"
//             >
//               <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
//                 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//               </svg>
//               <span className="text-sm font-medium">LinkedIn</span>
//             </button>

//             <button
//               onClick={() => handleSocialLogin("Facebook")}
//               className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition bg-blue-600 text-white hover:bg-blue-700"
//             >
//               <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
//                 <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//               </svg>
//               <span className="text-sm font-medium">Facebook</span>
//             </button>
//           </div>

//           {/* Divider */}
//           <div className="relative my-6">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-[#E2E8F0]"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-4 bg-white text-gray-500">OR</span>
//             </div>
//           </div>

//           {/* Employer Email Registration Form */}
//           <div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Company Name<span className="text-red-500">*</span></label>
//                 <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} placeholder="Enter company name" className="w-full px-4 py-3 text-gray-900 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Company Size<span className="text-red-500">*</span></label>
//                 <select name="companySize" value={formData.companySize} onChange={handleInputChange} className="w-full px-4 py-3 border text-gray-900 border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white" required>
//                   <option value="">Select company size</option>
//                   <option value="1-50">1-50 employees</option>
//                   <option value="51-200">51-200 employees</option>
//                   <option value="201-500">201-500 employees</option>
//                   <option value="500+">500+ employees</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Industry<span className="text-red-500">*</span></label>
//                 <select name="industry" value={formData.industry} onChange={handleInputChange} className="w-full px-4 py-3 border text-gray-900 border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white" required>
//                   <option value="">Select industry</option>
//                   <option value="healthcare">Healthcare</option>
//                   <option value="tech">Technology</option>
//                   <option value="retail">Retail</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Office Location<span className="text-red-500">*</span></label>
//                 <input type="text" name="officeLocation" value={formData.officeLocation} onChange={handleInputChange} placeholder="Enter office location" className="w-full px-4 py-3 text-gray-900 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Company Email<span className="text-red-500">*</span></label>
//                 <input type="email" name="companyEmail" value={formData.companyEmail} onChange={handleInputChange} placeholder="Enter company email" className="w-full px-4 py-3 text-gray-900 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Company Phone<span className="text-red-500">*</span></label>
//                 <input type="tel" name="companyPhone" value={formData.companyPhone} onChange={handleInputChange} placeholder="+61" className="w-full px-4 py-3 text-gray-900 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Password<span className="text-red-500">*</span></label>
//                 <div className="relative">
//                   <input type={showPassword ? "text" : "password"} name="employerPassword" value={formData.employerPassword} onChange={handleInputChange} placeholder="Min. 8 Characters" className="w-full px-4 py-3 text-gray-900 pr-10 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required minLength={8} />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                   >
//                     {showPassword ? (
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
//                       </svg>
//                     ) : (
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                       </svg>
//                     )}
//                   </button>
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password<span className="text-red-500">*</span></label>
//                 <div className="relative">
//                   <input type={showConfirmPassword ? "text" : "password"} name="employerConfirmPassword" value={formData.employerConfirmPassword} onChange={handleInputChange} placeholder="Min. 8 Characters" className="w-full px-4 py-3 text-gray-900 pr-10 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required minLength={8} />
//                   <button
//                     type="button"
//                     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                   >
//                     {showConfirmPassword ? (
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
//                       </svg>
//                     ) : (
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                       </svg>
//                     )}
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Checkboxes */}
//             <div className="mt-6 space-y-3">
//               <label className="flex items-start gap-3 cursor-pointer">
//                 <input type="checkbox" name="agreeToTermsEmployer" checked={formData.agreeToTermsEmployer} onChange={handleInputChange} className="mt-1 w-4 h-4 text-blue-600 border-[#E2E8F0] rounded focus:ring-2 focus:ring-blue-500" required />
//                 <span className="text-sm text-gray-600">I Agree to the <button className="text-blue-600 hover:underline">Terms and Conditions</button> and <button className="text-blue-600 hover:underline">Privacy Policy</button></span>
//               </label>
//               <label className="flex items-start gap-3 cursor-pointer">
//                 <input type="checkbox" name="newsAndUpdates" checked={formData.newsAndUpdates} onChange={handleInputChange} className="mt-1 w-4 h-4 text-blue-600 border-[#E2E8F0] rounded focus:ring-2 focus:ring-blue-500" />
//                 <span className="text-sm text-gray-600">Send me news and updates about candidates and job openings</span>
//               </label>
//             </div>

//             {/* Register Button */}
//             <button onClick={handleSubmit} className="w-full mt-6 py-4 bg-[#0A2E5C] text-white font-semibold rounded-lg hover:bg-[#083256] transition">Register</button>

//             {/* Login Link */}
//             <p className="text-center mt-4 text-sm text-gray-600">If you have an account, Please <button className="text-blue-600 hover:underline font-medium">Login</button></p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }