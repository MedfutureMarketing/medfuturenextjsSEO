'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Dashboard/Candidate/Dashboard/Sidebar';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    // Set sidebar state based on screen width on initial render
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                // Mobile: closed
                setSidebarOpen(false);
            } else {
                // Desktop: open
                setSidebarOpen(true);
            }
        };

        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="full-width-section">
            <div className="flex h-screen bg-gray-50">
                {/* Sidebar */}
                <Sidebar isOpen={sidebarOpen} />

                {/* Content Area */}
                <div className="flex flex-col flex-1">
                    {/* Header */}
                    <header className="bg-white border-b border-gray-200">
                        <div className="flex items-center px-6 py-4">
                            {/* Sidebar toggle */}
                            <button
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                                className="text-gray-500 hover:text-gray-700 cursor-pointer focus:outline-none"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>

                            {/* Right section */}
                            <div className="ml-auto flex items-center gap-4">
                                <div className="relative">
                                    <button className="text-gray-600 hover:text-gray-800">
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                            />
                                        </svg>
                                        <span className="absolute top-0 right-0 w-2 h-2 bg-blue-600 rounded-full"></span>
                                    </button>
                                </div>
                                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                            </div>
                        </div>
                    </header>

                    {/* Main Content */}
                    <main className="flex-1 overflow-auto p-6">{children}</main>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
