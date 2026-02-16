'use client';

import { JSX, useState } from 'react';
import Link from 'next/link';
import Logo from '@/assets/logo/medfuture-white.webp'
import Image from 'next/image';

interface MenuItem {
  label: string;
  href: string;
  icon: JSX.Element;
}

interface UserProfile {
  name: string;
  title: string;
  avatar: string;
  email: string;
}

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const [userProfile] = useState<UserProfile>({
    name: 'Dr. Peter Andrew',
    title: 'General Practitioner',
    avatar: 'https://via.placeholder.com/120',
    email: 'peter.andrew345@gmail.com',
  });

  const menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      href: '/dashboard',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 11l4-4m0 0l4 4m-4-4v4" />
        </svg>
      ),
    },
    {
      label: 'My Profile',
      href: '/my-account/candidate/profile',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      label: 'Applied Jobs',
      href: '/my-account/candidate/appliedjobs',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4m0 0H8m8 0v2m0-2a2 2 0 00-2-2H8a2 2 0 00-2 2m0 0V4m0 0a2 2 0 012-2h8a2 2 0 012 2m0 0v2m0-2H6" />
        </svg>
      ),
    },
    {
      label: 'Compliance',
      href: '/dashboard/compliance',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      label: 'Timesheets',
      href: '/dashboard/timesheets',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Sidebar Overlay for Mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 h-screen w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-white transition-transform duration-300 z-40 lg:z-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } flex flex-col`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-slate-700">
          {/* <h1 className="text-2xl font-bold text-blue-400">medfuture</h1> */}
          <Image alt='' src={Logo} />
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-white transition-colors duration-200"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* User Profile Section */}
        <div className="p-4 border-t border-slate-700 space-y-4">
          <div className="flex flex-col items-center text-center">
            <img
              src={userProfile.avatar}
              alt={userProfile.name}
              className="w-20 h-20 rounded-full mb-3 border-4 border-blue-400 object-cover"
            />
            <h3 className="font-semibold text-white">{userProfile.name}</h3>
            <p className="text-sm text-slate-400">{userProfile.title}</p>
          </div>

          {/* Login Credentials Section */}
          <div className="bg-slate-700 rounded-lg p-3 space-y-3 text-sm">
            <h4 className="font-semibold text-slate-300">Login Credentials</h4>

            <div>
              <p className="text-slate-400 text-xs uppercase">Profession</p>
              <p className="text-white">{userProfile.title}</p>
            </div>

            <div>
              <p className="text-slate-400 text-xs uppercase">User Name / Email</p>
              <p className="text-white truncate">{userProfile.email}</p>
            </div>

            <div>
              <p className="text-slate-400 text-xs uppercase">Password</p>
              <p className="text-white">••••••••</p>
            </div>

            <Link
              href="/dashboard/settings"
              className="block text-center mt-3 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors duration-200 text-sm font-medium"
            >
              Edit
            </Link>
          </div>

          {/* Sign Out Button */}
          <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-slate-700 hover:bg-red-600 text-white rounded-lg transition-colors duration-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;