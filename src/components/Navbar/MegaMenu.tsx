"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface MegaMenuProps {
  title: string;
  columns: Array<{
    heading: string;
    links: Array<{ href: string; label: string }>;
  }>;
}

export default function MegaMenu({ title, columns }: MegaMenuProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [coords, setCoords] = useState({ left: 0, top: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleHover(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      left: 0, // start at 0 for full width
      top: rect.bottom + 8,
    });
    setOpen(true);
  }

  return (
    <>
      {/* Trigger */}
      <button
        className="font-medium hover:text-blue-600"
        onMouseEnter={handleHover}
        onMouseLeave={() => setOpen(false)}
      >
        {title}
      </button>

     
      {mounted &&
        createPortal(
          <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className={`fixed  inner-width-section transition-all z-100 bg-opacity-90 duration-150 ${
              open ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            style={{
              top: coords.top,
            }}
          >
            <div className="w-full max-w-full mx-auto bg-white shadow-xl border-t border-gray-200 p-6 grid grid-cols-3 gap-6">
              {columns.map((col, i) => (
                <div key={i}>
                  <h4 className="font-semibold text-gray-800 mb-3">
                    {col.heading}
                  </h4>
                  <ul className="space-y-2">
                    {col.links.map((link, j) => (
                      <li key={j}>
                        <Link
                          href={link.href}
                          className="text-gray-600 hover:text-blue-600"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
