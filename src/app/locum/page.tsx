// app/about/page.tsx
import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/getPageMetadata";
import SearchHeader from "@/components/JobBoard/Searchbar";
import LocumJobBoardLayout from "@/components/JobBoard/LocumJobBoardLayout";



export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("permanent");
}

export default function AboutPage() {
  return (
    <main className="bg-white">
   
      <SearchHeader />
      <LocumJobBoardLayout />
    </main>
  );
}
