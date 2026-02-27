'use client';

import React, { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Logo from '@/assets/logo/medfuture-white.webp';

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

// Memoize individual menu item to prevent unnecessary re-renders
const MenuItem = memo(({ 
  item, 
  isActive, 
  onClick 
}: { 
  item: { label: string; href: string; icon: string }; 
  isActive: boolean; 
  onClick?: () => void;
}) => (
  <Link
    href={item.href}
    onClick={onClick}
    className={`
      flex items-center gap-3 px-4 py-2 rounded 
      transition-colors duration-200
      ${isActive 
        ? 'bg-blue-800 text-white' 
        : 'text-gray-300 hover:bg-blue-900 hover:text-white'
      }
    `}
    aria-current={isActive ? 'page' : undefined}
  >
    <span className="text-lg" aria-hidden="true">{item.icon}</span>
    <span className="whitespace-nowrap text-sm font-medium">{item.label}</span>
  </Link>
));

MenuItem.displayName = 'MenuItem';

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  const menuItems = [
    { label: 'Dashboard', href: '/my-account/candidate/', icon: '🏠' },
    { label: 'My Profile', href: '/my-account/candidate/profile', icon: '👤' },
    { label: 'Applied Jobs', href: '/my-account/candidate/appliedjobs', icon: '💼' },
    { label: 'Compliance', href: '/compliance', icon: '📋' },
    { label: 'Timesheets', href: '/timesheets', icon: '🕒' },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/10  z-20 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`
          fixed lg:static top-0 left-0 h-full
          ${isOpen ? 'lg:w-64 w-64 translate-x-0' : 'w-0 -translate-x-full lg:translate-x-0 lg:w-64'}
          bg-blue-950 text-white
          transition-all duration-300 ease-in-out
          overflow-hidden z-99
          flex-shrink-0
        `}
        aria-label="Sidebar navigation"
      >
        <div className="h-full flex flex-col w-64">
          {/* Logo */}
          <div className="p-6 flex-shrink-0">
            <Image 
              src={Logo} 
              alt="Medfuture Logo" 
              width={160} 
              height={40}
              priority
              className="h-auto w-auto"
            />
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 px-4 py-4 space-y-4 z-100 w-full overflow-y-auto">
            {menuItems.map((item) => (
              <MenuItem
                key={item.href}
                item={item}
                isActive={pathname === item.href}
                onClick={onClose}
              />
            ))}
          </nav>

          {/* Sign Out */}
          <div className="px-4 pb-6 flex-shrink-0">
            <button
              type="button"
              onClick={() => {
                // Add sign out logic here
                console.log('Sign out clicked');
              }}
              className="
                flex items-center gap-3 px-4 py-2 rounded 
                transition-colors duration-200
                text-gray-300 hover:bg-blue-900 hover:text-white 
                w-full
              "
            >
              <span className="text-lg" aria-hidden="true">🚪</span>
              <span className="whitespace-nowrap text-sm font-medium">Sign Out</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default memo(Sidebar);