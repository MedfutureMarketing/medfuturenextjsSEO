'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/logo/medfuture-white.webp'

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const menuItems = [
    { label: 'Dashboard', href: '/my-account/candidate/', icon: '' },
    { label: 'My Profile', href: '/my-account/candidate/profile', icon: '' },
    { label: 'Applied Jobs', href: '/my-account/candidate/appliedjobs', icon: '' },
    { label: 'Compliance', href: '/compliance', icon: '' },
    { label: 'Timesheets', href: '/timesheets', icon: '' },
  ];

  return (
    <aside
      className={`${
        isOpen ? 'w-64' : 'w-0'
      } bg-blue-950 text-white transition-all duration-300 ease-in-out overflow-hidden`}
    >
      <div className="h-full flex flex-col">
        {/* Logo/Brand */}
        <div className="p-6">
   <Image src={Logo} alt=''></Image>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 py-4 space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-2 rounded hover:bg-blue-900 transition-colors text-gray-300 hover:text-white"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="whitespace-nowrap text-sm">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Sign Out */}
        <div className="px-4 pb-6">
          <button className="flex items-center gap-3 px-4 py-2 rounded hover:bg-blue-900 transition-colors text-gray-300 hover:text-white w-full">
            <span className="text-lg">🚪</span>
            <span className="whitespace-nowrap text-sm">Sign Out</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;