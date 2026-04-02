'use client';

import React from 'react';
import Link from 'next/link';




export default function HealthcarePathways() {
    return (
        <div className="bg-[#040D48] flex items-center justify-center lg:p-6">
            {/* Main Container */}
            <div className="w-full inner-width-section py-[60px]">
                {/* Header Section */}
                <div className="mb-12 text-white lg:px-8">
                    <p className="text-[14px] font-medium text-[#FFFFFF] mb-[5px] tracking-wide">
                        Choose your pathway
                    </p>
                    <h2 className="text-2xl md:text-[30px] font-bold mb-4 leading-tight">
                        Clear pathways for healthcare professionals and employers
                    </h2>
                    <p className="text-xs lg:text-[16px] text-slate-300 max-w-2xl leading-relaxed">
                        Whether you are planning your next career move or strengthening your workforce, Medfuture provides tailored support aligned with your goals.
                    </p>
                </div>

                {/* Cards Section */}
                <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-6 lg:px-8">
                    {/* For Job Seekers Card */}
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 px-8">
                        <div className="lg:p-8 p-4">
                            {/* Icon */}
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6">

                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1.5" y="1.5" width="47" height="47" rx="23.5" fill="#074CA4" />
                                    <rect x="1.5" y="1.5" width="47" height="47" rx="23.5" stroke="white" stroke-width="3" />
                                    <path d="M35.0006 37.5013V33.7512C35.0006 30.2161 35.0006 28.4473 33.9018 27.3498C32.8043 26.251 31.0355 26.251 27.5004 26.251L25.0003 28.7511L22.5002 26.251C18.9651 26.251 17.1963 26.251 16.0988 27.3498C15 28.4473 15 30.2161 15 33.7512V37.5013M30.0004 26.251V33.1262" stroke="white" stroke-width="1.37199" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M20.6212 26.2494V31.2496M20.6212 31.2496C21.2842 31.2496 21.9201 31.513 22.389 31.9818C22.8578 32.4507 23.1212 33.0866 23.1212 33.7497V34.9997M20.6212 31.2496C19.9581 31.2496 19.3222 31.513 18.8533 31.9818C18.3845 32.4507 18.1211 33.0866 18.1211 33.7497V34.9997M29.3714 18.1242V16.8742C29.3714 16.2996 29.2583 15.7307 29.0384 15.1999C28.8185 14.669 28.4963 14.1867 28.09 13.7805C27.6837 13.3742 27.2014 13.0519 26.6706 12.8321C26.1398 12.6122 25.5708 12.499 24.9963 12.499C24.4217 12.499 23.8528 12.6122 23.322 12.8321C22.7912 13.0519 22.3089 13.3742 21.9026 13.7805C21.4963 14.1867 21.1741 14.669 20.9542 15.1999C20.7343 15.7307 20.6212 16.2996 20.6212 16.8742V18.1242C20.6212 18.6987 20.7343 19.2677 20.9542 19.7985C21.1741 20.3293 21.4963 20.8116 21.9026 21.2179C22.3089 21.6241 22.7912 21.9464 23.322 22.1663C23.8528 22.3862 24.4217 22.4993 24.9963 22.4993C25.5708 22.4993 26.1398 22.3862 26.6706 22.1663C27.2014 21.9464 27.6837 21.6241 28.09 21.2179C28.4963 20.8116 28.8185 20.3293 29.0384 19.7985C29.2583 19.2677 29.3714 18.6987 29.3714 18.1242Z" stroke="white" stroke-width="1.37199" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M30.9395 34.0625C30.9395 34.3112 30.8407 34.5496 30.6649 34.7255C30.4891 34.9013 30.2506 35.0001 30.002 35.0001C29.7533 35.0001 29.5149 34.9013 29.339 34.7255C29.1632 34.5496 29.0645 34.3112 29.0645 34.0625C29.0645 33.8139 29.1632 33.5754 29.339 33.3996C29.5149 33.2238 29.7533 33.125 30.002 33.125C30.2506 33.125 30.4891 33.2238 30.6649 33.3996C30.8407 33.5754 30.9395 33.8139 30.9395 34.0625Z" stroke="white" stroke-width="1.37199" />
                                </svg>

                            </div>

                            {/* Heading */}
                            <h2 className="text-xl lg:text-[20px] font-bold text-slate-900 mb-4">
                                For Job Seekers
                            </h2>

                            {/* Description */}
                            <p className="text-slate-700 text-xs mb-6 lg:text leading-relaxed text-sm lg:text-[16px]">
                                Search and apply for permanent, locum, and international healthcare roles across Australia with guidance from a recruitment team that understands your profession.
                            </p>

                            {/* Feature Tags */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                <span className="px-4 py-2 bg-[#E9F2FF] text-[#4A5565] text-xs font-medium rounded-full ">
                                    Permanent roles
                                </span>
                                <span className="px-4 py-2 bg-[#E9F2FF] text-[#4A5565] text-xs font-medium rounded-full ">
                                    Locum flexibility
                                </span>
                                <span className="px-4 py-2 bg-[#E9F2FF] text-[#4A5565] text-xs font-medium rounded-full ">
                                    International pathways
                                </span>
                            </div>

                            {/* Button */}
                            <Link href="permanent?page=1">
                                <button className="w-full cursor-pointer bg-[#074CA4] lg:text-[16px] text-lg hover:bg-blue-700 text-white  py-3 px-4 rounded-md transition-colors duration-200 flex items-center justify-center gap-2 group">
                                    Search Jobs
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* For Employers Card */}
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                        <div className="p-8">
                            {/* Icon */}
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6">

                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1.5" y="1.5" width="47" height="47" rx="23.5" fill="#074CA4" />
                                    <rect x="1.5" y="1.5" width="47" height="47" rx="23.5" stroke="white" stroke-width="3" />
                                    <path d="M22.2007 22.5997H19.8008V24.3997H22.2007V22.5997ZM19.8008 25.5997H22.2007V27.3996H19.8008V25.5997ZM22.2007 28.5996H19.8008V30.3996H22.2007V28.5996ZM23.4007 22.5997H25.8007V24.3997H23.4007V22.5997ZM25.8007 25.5997H23.4007V27.3996H25.8007V25.5997ZM23.4007 28.5996H25.8007V30.3996H23.4007V28.5996ZM29.4007 22.5997H27.0007V24.3997H29.4007V22.5997ZM27.0007 25.5997H29.4007V27.3996H27.0007V25.5997ZM29.4007 28.5996H27.0007V30.3996H29.4007V28.5996ZM25.2007 19.5997V17.7998H27.0007V16.5998H25.2007V14.7998H24.0007V16.5998H22.2007V17.7998H24.0007V19.5997H25.2007Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3999 14.2C20.3999 13.8817 20.5264 13.5765 20.7514 13.3515C20.9764 13.1264 21.2817 13 21.5999 13H27.5998C27.9181 13 28.2233 13.1264 28.4483 13.3515C28.6734 13.5765 28.7998 13.8817 28.7998 14.2H33.5997V15.4H32.3998V35.7997H33.5997C33.7589 35.7997 33.9115 35.8629 34.024 35.9754C34.1365 36.0879 34.1997 36.2406 34.1997 36.3997C34.1997 36.5588 34.1365 36.7114 34.024 36.8239C33.9115 36.9365 33.7589 36.9997 33.5997 36.9997H15.6C15.4409 36.9997 15.2883 36.9365 15.1757 36.8239C15.0632 36.7114 15 36.5588 15 36.3997C15 36.2406 15.0632 36.0879 15.1757 35.9754C15.2883 35.8629 15.4409 35.7997 15.6 35.7997H16.8V15.4H16.2V14.2H20.3999ZM20.3999 17.1999H18V35.7997H20.3999V33.3997H19.7999V32.1997H29.3998V33.3997H28.7998V35.7997H31.1998V17.1999H28.7998V20.1999C28.7998 20.5182 28.6734 20.8234 28.4483 21.0484C28.2233 21.2735 27.9181 21.3999 27.5998 21.3999H21.5999C21.2817 21.3999 20.9764 21.2735 20.7514 21.0484C20.5264 20.8234 20.3999 20.5182 20.3999 20.1999V17.1999ZM20.3999 16H18V15.4H20.3999V16ZM21.5999 14.2H27.5998V20.1999H21.5999V14.2ZM23.9999 35.7997H21.5999V33.3997H23.9999V35.7997ZM27.5998 35.7997V33.3997H25.1999V35.7997H27.5998ZM31.1998 16V15.4H28.7998V16H31.1998Z" fill="white" />
                                </svg>

                            </div>

                            {/* Heading */}
                            <h2 className="text-2xl cursor-pointer font-bold text-slate-900 mb-4">
                                For Employers
                            </h2>

                            {/* Description */}
                            <p className="text-slate-700 mb-6 leading-relaxed text-sm">
                                Access recruitment solutions designed for medical centres, hospitals, and healthcare providers seeking qualified professionals across multiple disciplines.
                            </p>

                            {/* Feature Tags */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                <span className="px-4 py-2 bg-blue-50 text-[#4A5565] text-xs font-medium rounded-full ">
                                    Permanent hiring
                                </span>
                                <span className="px-4 py-2 bg-blue-50 text-[#4A5565] text-xs font-medium rounded-full ">
                                    Locum coverage
                                </span>
                                <span className="px-4 py-2 bg-blue-50 text-[#4A5565] text-xs font-medium rounded-full ">
                                    Hard-to-fill roles
                                </span>
                            </div>

                            {/* Button */}
                            <Link href="/employer-hub">
                                <button className="w-full cursor-pointer bg-[#074CA4] lg:text-[16px] text-lg hover:bg-blue-700 text-white  py-3 px-4 rounded-md transition-colors duration-200 flex items-center justify-center gap-2 group">
                                    Explore Employer Services
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}