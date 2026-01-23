'use client';

import { useEffect, useState } from 'react';

const COOKIE_CONSENT_KEY = 'cookie_consent';

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-gray-600">
          We use cookies to enhance your browsing experience, analyze site
          traffic, and personalize content. By clicking <strong>Accept</strong>,
          you consent to our use of cookies.
        </p>

        <div className="flex gap-3">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-sm rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            Decline
          </button>

          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm rounded-md bg-[#64CAF3] text-white hover:bg-[#4fbbe6] transition"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
