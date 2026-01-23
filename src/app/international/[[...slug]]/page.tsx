// app/about/page.tsx
import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/getPageMetadata";
import SearchHeader from "@/components/JobBoard/Searchbar";
import JobBoardLayout from "@/components/JobBoard/IntJobBoardLayout";



export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("international");
}

export default function AboutPage() {
  return (
    <main className="bg-white">
   
      <SearchHeader />
      <JobBoardLayout />
    </main>
  );
}
