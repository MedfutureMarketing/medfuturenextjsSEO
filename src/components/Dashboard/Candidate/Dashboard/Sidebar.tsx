'use client';

import React, { memo, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import Logo from '@/assets/logo/medfuture-white.webp';

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

const MenuItem = memo(({
  item,
  isActive,
  onClick
}: {
  item: { label: string; href: string; icon: string; comingSoon?: boolean };
  isActive: boolean;
  onClick?: () => void;
}) => {
  if (item.comingSoon) {
    return (
      <div
        className="flex items-center gap-3 px-4 py-2 rounded cursor-not-allowed opacity-50"
        aria-disabled="true"
      >
        <span className="text-lg" aria-hidden="true">{item.icon}</span>
        <span className="whitespace-nowrap text-sm font-medium text-gray-300">{item.label}</span>
        <span className="ml-auto text-[10px] font-semibold bg-blue-800 text-blue-200 px-2 py-0.5 rounded-full whitespace-nowrap">
          Coming Soon
        </span>
      </div>
    );
  }

  return (
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
  );
});

MenuItem.displayName = 'MenuItem';

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { label: 'Dashboard',    href: '/my-account/candidate/',           icon: '', comingSoon: true },
    { label: 'My Profile',   href: '/my-account/candidate/profile',    icon: '' },
    { label: 'Browse Jobs',  href: '/permanent/jobs',                   icon: '' },
    { label: 'Applied Jobs', href: '/my-account/candidate/appliedjobs', icon: '', comingSoon: true },
    { label: 'Compliance',   href: '/compliance',                       icon: '', comingSoon: true },
    { label: 'Timesheets',   href: '/timesheets',                       icon: '', comingSoon: true },
  ];

  // 🔹 Clear all stored user data and redirect to sign-in
  const handleSignOut = useCallback(() => {
    localStorage.removeItem('TOKEN');
    localStorage.removeItem('USER_ID');
    localStorage.removeItem('FIRST_NAME');
    localStorage.removeItem('LAST_NAME');
    localStorage.removeItem('NICK_NAME');
    localStorage.removeItem('PROFILE_IMAGE');
    localStorage.removeItem('EMAIL');
    localStorage.removeItem('ROLE_NAME');
    localStorage.removeItem('ROLE_ID');
    localStorage.removeItem('CONTACT_NUMBER');
    router.replace('/sign-in');
  }, [router]);

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/10 z-20 lg:hidden"
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
              onClick={handleSignOut}
              className="
                flex items-center gap-3 px-4 py-2 cursor-pointer rounded 
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