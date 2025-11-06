"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Medfuturelogo from "@/assets/logo/medfuture-logo.png";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* 🔝 Top Menu Bar (hidden on mobile) */}
      <div className="hidden lg:block bg-white border-b-2 border-gray-200 py-2   text-sm text-gray-700">
        <div className="px-4 py-2 mx-auto max-w-screen-2xl  flex justify-center">
          <div className="flex space-x-4 divide-x divide-gray-300">
            <Link href="/support" className="hover:underline pr-4">
              Medical
            </Link>
            <Link href="/contact" className="hover:underline px-4">
              GP
            </Link>
            <Link href="/faq" className="hover:underline px-4">
              AHP
            </Link>
            <Link href="/faq" className="hover:underline px-4">
              Dental & Oral
            </Link>
            <Link href="/faq" className="hover:underline px-4">
              Mental Health
            </Link>
            <Link href="/faq" className="hover:underline px-4">
              Nursing & Care Workers
            </Link>
            <Link href="/faq" className="hover:underline pl-4">
              Healthcare Executive
            </Link>
          </div>
        </div>
      </div>


      <header className="bg-white shadow sticky top-0 z-50">
        <div className="px-4 py-3 mx-auto max-w-screen-2xl md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Medfuture" className="inline-flex items-center">
            <Image src={Medfuturelogo} alt="Medfuture logo" width={180} height={40} priority />
          </Link>

       
          <ul className="hidden lg:flex items-center space-x-8">
            <li>
              <Link href="/permanent-jobs" className="font-medium text-gray-700 hover:text-blue-600">
                Permanent Jobs
              </Link>
            </li>
            <li>
              <Link href="/locum-jobs" className="font-medium text-gray-700 hover:text-blue-600">
                Locum Jobs
              </Link>
            </li>
            <li>
              <Link href="/international" className="font-medium text-gray-700 hover:text-blue-600">
                International
              </Link>
            </li>
            <li>
              <Link href="/candidates" className="font-medium text-gray-700 hover:text-blue-600">
                For Candidates
              </Link>
            </li>
            <li>
              <Link href="/employers" className="font-medium text-gray-700 hover:text-blue-600">
                For Employers
              </Link>
            </li>
            <li>
              <Link href="/explore" className="font-medium text-gray-700 hover:text-blue-600">
                Explore
              </Link>
            </li>
          </ul>

        
          <div className="hidden lg:block">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </div>


          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
            className="p-2 text-gray-700 rounded-md hover:bg-gray-100 lg:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

 
      {isMenuOpen && (
        <>
        
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
      
          <div
            className={`fixed top-0 left-0 z-50 w-72 h-full bg-white shadow-lg transform transition-transform duration-300 ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <Image src={Medfuturelogo} alt="Medfuture logo" width={140} height={32} />
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close Menu"
                className="text-gray-600 hover:text-blue-600"
              >
                ✕
              </button>
            </div>

          
            <nav className="flex flex-col p-4 space-y-4 overflow-y-auto h-full">
              <div className="border-b pb-3">
                <p className="text-sm text-gray-500 mb-2 font-semibold">Categories</p>
                <div className="flex flex-col space-y-2 text-gray-700">
                  <Link href="/support" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">Medical</Link>
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">GP</Link>
                  <Link href="/faq" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">AHP</Link>
                  <Link href="/faq" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">Dental & Oral</Link>
                  <Link href="/faq" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">Mental Health</Link>
                  <Link href="/faq" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">Nursing & Care Workers</Link>
                  <Link href="/faq" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">Healthcare Executive</Link>
                </div>
              </div>

              <div className="pt-3">
                <p className="text-sm text-gray-500 mb-2 font-semibold">Navigation</p>
                <div className="flex flex-col space-y-2 text-gray-700">
                  <Link href="/permanent-jobs" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">Permanent Jobs</Link>
                  <Link href="/locum-jobs" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">Locum Jobs</Link>
                  <Link href="/international" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">International</Link>
                  <Link href="/candidates" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">For Candidates</Link>
                  <Link href="/employers" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">For Employers</Link>
                  <Link href="/explore" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">Explore</Link>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href="/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex items-center justify-center px-4 py-2 font-medium text-white bg-blue-600 rounded hover:bg-blue-700 w-full text-center"
                >
                  Sign Up
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
