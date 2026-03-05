"use client";
import { useState } from "react";
import Link from "next/link";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setError("");
  setEmailError("");
  setLoading(true);

  if (!email || !password) {
    setError("Please fill in all fields");
    setLoading(false);
    return;
  }

  if (!email.includes("@")) {
    setEmailError("Invalid email address. Please try again!");
    setLoading(false);
    return;
  }

  try {
    const response = await fetch("https://dev.medfuture.com.au/medadminapi/public/api/login-web", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // Handle Laravel error responses
      if (data.error === "user_not_found") {
        setError("User not found");
      } else if (data.error === "invalid_credentials") {
        setError("Invalid email or password");
      } else {
        setError(data.error || "Login failed");
      }
      setLoading(false);
      return;
    }

    localStorage.setItem("TOKEN", data.token);

    localStorage.setItem("USER_ID", data.user.user_id);
    localStorage.setItem("FIRST_NAME", data.user.f_name);
    localStorage.setItem("LAST_NAME", data.user.l_name);
    localStorage.setItem("NICK_NAME", data.user.nick_name);
    localStorage.setItem("PROFILE_IMAGE", data.user.profile_image);
    localStorage.setItem("EMAIL", data.user.email);
    localStorage.setItem("ROLE_NAME", data.user.role.name);
    localStorage.setItem("ROLE_ID", data.user.role.role_id);
    localStorage.setItem("CONTACT_NUMBER", data.user.contact_number);

    console.log("Login successful");

    window.location.href = "/my-account/candidate";

  } catch (err) {
    setError("No response received from server");
    console.error(err);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="w-full max-w-md mx-auto">
      <h1 className="text-3xl lg:text-4xl font-bold text-[#0A2E5C] mb-8 text-center">
        Sign In
      </h1>

      {/* Social Login Buttons */}
      <div className="flex gap-3 mb-6">
        <button
          type="button"
          className="flex-1 flex cursor-pointer items-center justify-center gap-2 py-2.5 px-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
        >
          {/* Google Icon */}
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Google
        </button>

        <button
          type="button"
          className="flex-1 cursor-pointer flex items-center justify-center gap-2 py-2.5 px-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
        >
          {/* LinkedIn Icon */}
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#0A66C2">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </button>

        <button
          type="button"
          className="flex-1 cursor-pointer flex items-center justify-center gap-2 py-2.5 px-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
        >
          {/* Facebook Icon */}
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#1877F2">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          Facebook
        </button>
      </div>

      {/* OR Divider */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="text-sm text-gray-500">OR</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* General Error */}
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
            Email Address<span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
            placeholder="Enter your email"
            className={`w-full  px-4 text-gray-500 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-10 transition-colors ${
              emailError
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-[#575D84] focus:ring-[#575D84]"
            }`}
            required
          />
          {emailError && (
            <p className="mt-1.5 text-sm text-red-500">{emailError}</p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
            Password<span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 pr-12 text-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:border-[#575D84] focus:ring-2 focus:ring-[#575D84] focus:ring-opacity-10 transition-colors"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? (
                // Eye open
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ) : (
                // Eye slash (hidden)
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              )}
            </button>
          </div>

          {/* Forgot Password aligned right */}
          <div className="flex justify-end mt-1.5">
            <Link
              href="/forgot-password"
              className="text-sm text-[#0A2E5C] hover:underline font-medium transition-colors"
            >
              Forgot password?
            </Link>
          </div>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-[#0A2E5C] text-white font-semibold cursor-pointer rounded-lg hover:bg-[#0d3a72] transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
        >
          {loading ? "Signing in..." : "Login"}
        </button>
      </form>
    </div>
  );
}