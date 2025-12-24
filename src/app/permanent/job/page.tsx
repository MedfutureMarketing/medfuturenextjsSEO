import type { Metadata } from "next";
// import "./globals.css";

import { getPageMetadata } from "@/lib/getPageMetadata";
import JobDescription from "@/components/JobBoard/SingleJobPage/PermenantDes";


export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("permanent"); // Fetch metadata by key
}


export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ jobId: string }>;
}) {
  const resolvedParams = await params;
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900 antialiased font-sans">
           
        
        {/* Header */}
      <JobDescription params={Promise.resolve(resolvedParams)}/>

        {/* Main Content */}
       

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
