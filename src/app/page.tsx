// app/layout.tsx (or app/home/page.tsx)
import type { Metadata } from "next";
import "./globals.css";

import { getPageMetadata } from "@/lib/getPageMetadata";
import { schemaList } from "@/Data/schemaList";

// Dynamic metadata
export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("home"); // Fetch metadata by key
}

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  const schema = schemaList.permanent?.jsonLd; // Fetch schema for this page

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900 antialiased font-sans">
        
        {/* Header */}
        {/* Add your header component here */}

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-200">
          <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-center text-sm">
            © {new Date().getFullYear()} My App. All rights reserved.
          </div>
        </footer>

        {/* Inject Schema Markup */}
        {schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        )}
      </body>
    </html>
  );
}
