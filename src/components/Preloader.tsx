"use client";

import { useEffect, useState, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";

// 🔁 Add your loader image here
import LoaderImage from "@/assets/logo/medfuture-logo.webp";

// Pages where preloader is allowed with custom messages
const routeMessages: Record<string, string> = {
  "/": "Loading...",
  
  
  // "/": "Welcome to Medfuture... ",
};

function PreloaderContent() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Find matching route and get message
  const matchedRoute = Object.keys(routeMessages).find((route) =>
    pathname?.startsWith(route)
  );

  const loadingMessage = matchedRoute ? routeMessages[matchedRoute] : "Please wait...";
  const isAllowed = !!matchedRoute;

  useEffect(() => {
    if (!isAllowed) return;

    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [pathname, searchParams, isAllowed]);

  if (!isAllowed || !isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="flex flex-col items-center gap-8">

        {/* Logo */}
        <div className="relative">
          <div className="w-56 h-10">
            <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center">
              <Image
                src={LoaderImage}
                alt="Loading"
                width={200}
                height={100}
                priority
              />
            </div>
          </div>
        </div>

        {/* Loading dots */}
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>

        {/* Dynamic loading message based on route */}
        <p className="text-gray-600 font-medium text-lg">{loadingMessage}</p>

      </div>
    </div>
  );
}

export default function Preloader() {
  return (
    <Suspense fallback={null}>
      <PreloaderContent />
    </Suspense>
  );
}