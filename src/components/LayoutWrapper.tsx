// components/LayoutWrapper.tsx
import { ReactNode } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
// or import BreadcrumbWithIcons from './BreadcrumbWithIcons';

interface LayoutWrapperProps {
  children: ReactNode;
  showBreadcrumb?: boolean;
}

export default function LayoutWrapper({ 
  children, 
  showBreadcrumb = true 
}: LayoutWrapperProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {showBreadcrumb && <Breadcrumb />}
      <main className="container mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  );
}