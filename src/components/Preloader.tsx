// components/Preloader.tsx
"use client"
import { useEffect, useState, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Inner component that uses useSearchParams
function PreloaderContent() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Show loader when route changes
    setIsLoading(true);
    
    // Hide loader after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-white/95 backdrop-blur-sm">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600 font-medium">Loading page...</p>
        <div className="mt-2 text-gray-400 hidden text-sm">
          {pathname?.split('/').pop() || 'Loading...'}
        </div>
      </div>
    </div>
  );
}

// Main component with Suspense boundary
export default function Preloader() {
  return (
    <Suspense fallback={null}>
      <PreloaderContent />
    </Suspense>
  );
}