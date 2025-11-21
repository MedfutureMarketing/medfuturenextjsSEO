// components/Breadcrumb.tsx
"use client"

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface BreadcrumbItem {
  href: string;
  label: string;
  isCurrent: boolean;
}

export default function Breadcrumb() {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);

  useEffect(() => {
    if (!pathname) return;

    const pathSegments = pathname.split('/').filter(Boolean);
    const newBreadcrumbs: BreadcrumbItem[] = [];

    // Always start with Home
    newBreadcrumbs.push({
      href: '/',
      label: 'Home',
      isCurrent: pathSegments.length === 0
    });

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isCurrent = index === pathSegments.length - 1;

      // Format segment: "my-page" -> "My Page"
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      newBreadcrumbs.push({
        href: currentPath,
        label,
        isCurrent
      });
    });

    setBreadcrumbs(newBreadcrumbs);
  }, [pathname]);

  if (breadcrumbs.length === 0) return null; // fallback, should rarely happen

  return (
    <nav className="flex py-5 lg:px-1 px-4 border-gray-200">
      <ol className="flex items-center space-x-2 text-sm">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2 text-gray-400">/</span>}

            {breadcrumb.isCurrent ? (
              <span className="text-gray-600 font-medium">{breadcrumb.label}</span>
            ) : (
              <Link
                href={breadcrumb.href}
                className="text-gray-500 hover:text-blue-800 transition-colors"
              >
                {breadcrumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
