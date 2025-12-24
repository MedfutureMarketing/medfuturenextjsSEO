// components/Preloader.tsx
"use client";

import { useEffect, useState, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";

// 🔁 Add your loader image here
import LoaderImage from "@/assets/icons/Medfuture.webp"; // change path if needed

// Pages where preloader is allowed
const allowedRoutes = ["/permanent", "/locum"];

function PreloaderContent() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isAllowed = allowedRoutes.some((route) =>
    pathname?.startsWith(route)
  );

  useEffect(() => {
    if (!isAllowed) return;

    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [pathname, searchParams, isAllowed]);

  if (!isAllowed || !isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/5 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        
        {/* 🔄 Spinning Image */}
        <div className="animate-spin">
          <Image
            src={LoaderImage}
            alt="Loading"
            width={30}
            height={30}
            priority
          />
        </div>

        <p className="text-gray-600 font-medium"></p>
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
