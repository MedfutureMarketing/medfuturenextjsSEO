'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';

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
    gradient: 'from-pink-500 to-rose-600',
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

  const createRipple = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
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
    <nav className="fixed bottom-0 inset-x-0 z-50 lg:hidden">
      <div className="relative backdrop-blur-xl bg-white/90 border-t border-white/60 shadow-[0_-8px_32px_rgba(0,0,0,0.08)]">
        <div className="flex h-20 items-center justify-around px-2 sm:px-4">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={createRipple}
                className="relative flex flex-1 flex-col items-center justify-center group touch-manipulation"
              >
                {/* Ripple */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
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
                  className={`flex items-center justify-center h-12 w-12 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? `bg-gradient-to-br ${item.gradient} text-white shadow-lg scale-100`
                      : 'bg-white text-gray-500 shadow-sm scale-90 group-hover:scale-95'
                  }`}
                >
                  <span className="h-6 w-6">{item.icon}</span>
                </div>

                {/* Label */}
                <span
                  className={`mt-1 text-[0.625rem] sm:text-xs font-medium transition-colors ${
                    isActive ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-700'
                  }`}
                >
                  {item.label}
                </span>

                {/* Active indicator */}
                {isActive && (
                  <span className="absolute -bottom-1 h-1 w-6 rounded-full bg-gradient-to-r from-black/20 to-black/5" />
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* iOS safe-area */}
      <div className="bg-white" style={{ height: 'env(safe-area-inset-bottom)' }} />

      {/* Ripple animation */}
      <style jsx global>{`
        @keyframes ripple {
          from {
            transform: scale(0);
            opacity: 0.4;
          }
          to {
            transform: scale(6);
            opacity: 0;
          }
        }
      `}</style>
    </nav>
  );
}
