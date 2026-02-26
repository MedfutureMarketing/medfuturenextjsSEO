'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const NAV_ITEMS = [
  {
    href: '/',
    label: 'Home',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V9.5z" />
      </svg>
    ),
    activeIcon: (
      <svg viewBox="0 0 24 24" fill="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V9.5z" />
      </svg>
    ),
  },
  {
    href: '/permanent',
    label: 'Search Jobs',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    activeIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    href: '/sign-up',
    label: 'Profile',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
      </svg>
    ),
    activeIcon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 4-7 8-7s8 3 8 7" fill="currentColor" />
      </svg>
    ),
  },
];

export default function BottomNav() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY.current) < 5) return;
      setVisible(currentScrollY <= lastScrollY.current || currentScrollY <= 50);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed bottom-0 inset-x-0 z-50 lg:hidden transition-transform duration-500 ease-in-out ${
          visible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {/* Top glow line */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#074CA4]/25 to-transparent" />

        <div className="bg-white/95 backdrop-blur-2xl shadow-[0_-4px_20px_rgba(7,76,164,0.07)]">
          <div className="flex items-center justify-around px-1 pt-1.5 pb-1">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative flex flex-col items-center justify-center flex-1 py-1 gap-0.5 group"
                >
                  {/* Active pill */}
                  <div
                    className={`absolute inset-x-4 top-0.5 h-8 transition-all duration-300 ${
                      isActive ? ' opacity-100' : 'opacity-0'
                    }`}
                  />

                  {/* Icon */}
                  <div className="relative flex items-center justify-center">
                    {/* Active dot */}
                    {isActive && (
                      <span className="absolute -top-1 left-1/2 hidden -translate-x-1/2 w-1 h-1 rounded-full bg-[#074CA4]" />
                    )}
                    <span
                      className={`w-5 h-5 transition-all duration-300 ${
                        isActive
                          ? 'text-[#074CA4] scale-110'
                          : 'text-[#94A3B8] scale-100 group-hover:text-[#074CA4]/60 group-hover:scale-105'
                      }`}
                    >
                      {isActive ? item.activeIcon : item.icon}
                    </span>
                  </div>

                  {/* Label */}
                  <span
                    className={`text-[9px] font-semibold tracking-wide transition-colors duration-300 ${
                      isActive ? 'text-[#074CA4]' : 'text-[#94A3B8] group-hover:text-[#074CA4]/60'
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Safe area */}
          <div style={{ height: 'env(safe-area-inset-bottom)' }} />
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-14 lg:hidden" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }} />
    </>
  );
}