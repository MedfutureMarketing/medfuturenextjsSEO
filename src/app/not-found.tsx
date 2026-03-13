"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen  flex items-center justify-center p-6">
      
      {/* Floating medical crosses - subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.02]">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `scale(${Math.random() * 0.5 + 0.5})`,
            }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40">
              <path
                d="M20 8 L20 32 M8 20 L32 20"
                stroke="currentColor"
                strokeWidth="3"
                className="text-blue-700"
              />
            </svg>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl w-full">
        <div className="bg-white rounded-2xl  overflow-hidden ">
          <div className="p-8 md:p-12">
            {/* Main Message */}
            <div className="text-center mb-10">
              <div
                className={`text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-blue-900 mb-6 transition-opacity duration-1000 ${
                  mounted ? "opacity-100" : "opacity-0"
                }`}
              >
                404
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                We Can't Find This Page
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The page you're looking for may have been moved, deleted, or never existed. Let's
                help you find what you need.
              </p>
            </div>

            {/* Quick Links Grid */}
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              <Link href="/">
                <div className="group p-6 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl border border-teal-200 hover:border-teal-400 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Homepage</h3>
                  <p className="text-sm text-gray-600">Return to our main page</p>
                </div>
              </Link>

              <Link href="/jobs">
                <div className="group p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Browse Jobs</h3>
                  <p className="text-sm text-gray-600">Explore available positions</p>
                </div>
              </Link>

              <Link href="/contact-us">
                <div className="group p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-200 hover:border-indigo-400 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Contact Us</h3>
                  <p className="text-sm text-gray-600">Get in touch with our team</p>
                </div>
              </Link>
            </div>

            {/* Search Section */}
          

            {/* CTA Button */}
            <div className="mt-10 text-center">
              <Link href="/">
                <button className="group relative px-8 py-4 bg-blue-900 text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                    Return to Homepage
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </Link>
            </div>

            {/* Footer Help Text */}
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600">
                Need assistance?{" "}
                <Link href="/contact" className="text-blue-700 hover:text-teal-700 font-medium">
                  Contact our support team
                </Link>{" "}
                or call us at{" "}
                <a href="tel:+1234567890" className="text-blue-700 hover:text-teal-700 font-medium">
                  1300 633 388
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm">
            Connecting healthcare professionals with their ideal opportunities
          </p>
        </div>
      </div>
    </div>
  );
}