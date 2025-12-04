import { getPageMetadata } from "@/lib/getPageMetadata";
import { schemaList } from "@/Data/schemaList";
import { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import JobSeekerHubSearch from "@/components/Home/JobSeekerHub";
import FlexibleHiringSolution from "@/components/Home/HiringSolution";
import JobsbyProfession from "@/components/Home/JobsByProfession";
import BrowseJobs from "@/components/Home/BrowseJobNav";
import RecruitementServicebox from "@/components/Home/RecruitementServicebox";
import HomeAboutus from "@/components/Home/HomeAboutus";
import Testimonials from "@/components/Home/Testimonials";

export function getSchema(page: string) {
  return schemaList[page]?.jsonLd || null;
}

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("home");
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = getSchema("home");

  return (
    <html lang="en">
      <head>
        {schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        )}
      </head>
      <body className="">
        {children}
<Hero />
<JobSeekerHubSearch/>
<JobsbyProfession />
<BrowseJobs/>
<FlexibleHiringSolution />
<RecruitementServicebox />
<HomeAboutus />
<Testimonials/>
        {/* <footer className="bg-gray-200">
          <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-center text-sm">
            © {new Date().getFullYear()} My App. All rights reserved.
          </div>
        </footer> */}
      </body>
    </html>
  );
}
