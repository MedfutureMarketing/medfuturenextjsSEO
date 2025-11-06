"use client";

import Link from "next/link";

export default function Header() {


  return (
    <header className="bg-white shadow">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <svg
              className="w-8 text-purple-600"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Company
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
            <li>
              <Link
                href="/product"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-600"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                href="/features"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-600"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-600"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-600"
              >
                About Us
              </Link>
            </li>
          </ul>

          {/* Desktop CTA */}
          <ul className="hidden lg:flex items-center space-x-8">
            <li>
              <Link
                href="/signup"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
              >
                Sign Up
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-purple-50"
            
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>

            {/* Mobile Menu */}
            
          </div>
        </div>
      </div>
    </header>
  );
}
