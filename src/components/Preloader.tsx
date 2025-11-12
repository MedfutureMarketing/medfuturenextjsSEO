// components/Preloader.tsx
"use client"
import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Show loader when route changes
    setIsLoading(true);
    
    // Hide loader after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]); // Trigger on route and query parameter changes

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-sm">
      <div className="text-center">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        
        {/* Loading Text */}
        <p className="text-gray-600 font-medium">Loading page...</p>
        
        {/* Optional: Current Page Info */}
        <div className="mt-2 text-gray-400 text-sm">
          {pathname?.split('/').pop() || 'Loading...'}
        </div>
      </div>
    </div>
  );
}