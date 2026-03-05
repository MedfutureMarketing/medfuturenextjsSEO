'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Dashboard/Candidate/Dashboard/Sidebar';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const router = useRouter();
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(false);

    // 🔹 Auth guard — redirect to sign-in if no token
    useEffect(() => {
        const token = localStorage.getItem('TOKEN');
        if (!token) {
            router.replace('/sign-in');
        } else {
            setIsAuthorized(true);
        }
    }, [router]);

    // Optimize resize handler with debounce
    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const checkScreenSize = () => {
            const mobile = window.innerWidth < 1024;
            setIsMobile(mobile);
            setSidebarOpen(!mobile);
        };

        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(checkScreenSize, 150);
        };

        checkScreenSize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeoutId);
        };
    }, []);

    const toggleSidebar = useCallback(() => {
        setSidebarOpen(prev => !prev);
    }, []);

    const handleSidebarClose = useCallback(() => {
        if (isMobile) setSidebarOpen(false);
    }, [isMobile]);

    const header = useMemo(() => (
        <header className="bg-white border-b border-gray-200">
            <div className="flex items-center px-6 py-4">
                {/* Sidebar toggle */}
                <button
                    onClick={toggleSidebar}
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Right section */}
                <div className="ml-auto flex items-center gap-4">
                    <div className="relative">
                        <button
                            className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                            aria-label="Notifications"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className="absolute top-2 right-2 w-2 h-2 bg-blue-600 rounded-full"></span>
                        </button>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                        JD
                    </div>
                </div>
            </div>
        </header>
    ), [sidebarOpen, toggleSidebar]);

    // 🔹 Render nothing while checking auth (avoids flash of protected content)
    if (!isAuthorized) return null;

    return (
        <div className="full-width-section">
            <div className="flex h-screen bg-gray-50">
                <Sidebar
                    isOpen={sidebarOpen}
                    onClose={handleSidebarClose}
                />

                <div className="flex flex-col flex-1 min-w-0">
                    {header}
                    <main className="flex-1 overflow-auto p-6">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;