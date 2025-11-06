import type { Metadata } from "next";
import "./globals.css";

import { getPageMetadata } from "@/lib/getPageMetadata";
import Menu from "@/components/Navbar/MainMenu";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("home"); // Fetch metadata by key
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900 antialiased font-sans">
        <Menu/>
        {/* Header */}
        <header className="bg-white shadow">
          <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 flex justify-between items-center">
            <h1 className="text-xl font-bold">My App</h1>
            <nav className="space-x-4">
              <a href="#" className="hover:text-blue-600">Home</a>
              <a href="#" className="hover:text-blue-600">About</a>
              <a href="#" className="hover:text-blue-600">Contact</a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-200">
          <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-center text-sm">
            © {new Date().getFullYear()} My App. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
