'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

type Ripple = { id: number; x: number; y: number };

const NAV_ITEMS = [
  {
    href: '/',
    label: 'Home',
    gradient: 'from-blue-500 to-blue-600',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V9.5z" />
      </svg>
    ),
  },
  {
    href: '/permanent',
    label: 'Search Jobs',
    gradient: 'from-cyan-500 to-blue-600',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    href: '/sign-up',
    label: 'Profile',
    gradient: 'from-blue-500 to-blue-600',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  const [ripples, setRipples] = useState<Ripple[]>([]);
  const rippleId = useRef(0);

  // 👇 NEW: visibility state
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  // 👇 NEW: scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // ignore tiny scrolls (prevents flicker)
      if (Math.abs(currentScrollY - lastScrollY.current) < 5) return;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        // scrolling DOWN → hide
        setVisible(false);
      } else {
        // scrolling UP → show
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const createRipple = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = rippleId.current++;

    setRipples((prev) => [
      ...prev,
      {
        id,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      },
    ]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 500);
  };

  return (
    <nav
      className={`fixed bottom-0 inset-x-0 z-50 lg:hidden transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="backdrop-blur-xl bg-white/90 border-t border-white/60 shadow-[0_-8px_32px_rgba(0,0,0,0.08)]">
        <div className="flex justify-between items-center px-2 sm:px-6 md:px-10 py-2">
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={createRipple}
                className="relative flex flex-col items-center justify-center flex-1"
              >
                {/* Ripple */}
                <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                  {ripples.map((r) => (
                    <span
                      key={r.id}
                      className="absolute h-2 w-2 rounded-full bg-black/10 animate-[ripple_0.5s_ease-out]"
                      style={{ left: r.x, top: r.y }}
                    />
                  ))}
                </div>

                {/* Icon */}
                <div
                  className={`flex items-center justify-center rounded-xl transition-all duration-300
                  ${
                    isActive
                      ? `bg-gradient-to-br ${item.gradient} text-white shadow-lg scale-100`
                      : 'bg-white text-gray-500 shadow-sm scale-95'
                  }
                  `}
                >
                  <span className="w-5 h-5 sm:w-6 sm:h-6">{item.icon}</span>
                </div>

                {/* Label */}
                <span
                  className={`mt-1 font-medium transition-colors text-[10px] sm:text-xs md:text-sm ${
                    isActive ? 'text-black' : 'text-gray-500'
                  }`}
                >
                  {item.label}
                </span>

                {/* Active indicator */}
                {isActive && (
                  <span className="absolute -bottom-1 h-1 w-6 rounded-full bg-black/20" />
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Safe area */}
      <div
        className="bg-white"
        style={{ height: 'env(safe-area-inset-bottom)' }}
      />

      {/* Ripple animation */}
      <style jsx global>{`
        @keyframes ripple {
          from {
            transform: scale(0);
            opacity: 0.4;
          }
          to {
            transform: scale(5);
            opacity: 0;
          }
        }
      `}</style>
    </nav>
  );
}