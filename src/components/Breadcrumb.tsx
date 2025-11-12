// components/Breadcrumb.tsx
"use client"
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Breadcrumb() {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<Array<{ href: string; label: string; isCurrent: boolean }>>([]);

  useEffect(() => {
    if (!pathname) return;

    console.log('🔄 Breadcrumb pathname:', pathname); // Debug log

    const pathSegments = pathname.split('/').filter(segment => segment !== '');
    
    const newBreadcrumbs = [];
    
    // Always add Home as the first item
    newBreadcrumbs.push({
      href: '/',
      label: 'Home',
      isCurrent: pathSegments.length === 0
    });

    // Build the rest of the breadcrumbs
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isCurrent = index === pathSegments.length - 1;
      
      // Format the label (convert "my-page" to "My Page")
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      newBreadcrumbs.push({
        href: currentPath,
        label: label,
        isCurrent: isCurrent
      });
    });

    setBreadcrumbs(newBreadcrumbs);
  }, [pathname]);

  // Don't show breadcrumb if we're only on home page
  if (breadcrumbs.length <= 1) {
    console.log('🚫 Not showing breadcrumb - on home page or only one segment');
    return null;
  }

  console.log('✅ Showing breadcrumbs:', breadcrumbs); // Debug log

  return (
    <nav className="flex py-5 px-1  border-gray-200">
      <ol className="flex items-center space-x-2 text-sm">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-gray-400">/</span>
            )}
            
            {breadcrumb.isCurrent ? (
              <span className="text-gray-600 font-medium">
                {breadcrumb.label}
              </span>
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