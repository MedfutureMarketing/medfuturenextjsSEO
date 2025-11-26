// app/about/page.tsx
import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/getPageMetadata";
import SearchHeader from "@/components/JobBoard/Searchbar";
import JobBoardLayout from "@/components/JobBoard/JobBoardLayout";
import { schemaList } from "@/Data/schemaList";

export function getSchema(page: string) {
  return schemaList[page]?.jsonLd || null;
}


export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("permanent");
}

export default function AboutPage() {
    const schema = getSchema("permanent"); // <-- FIX: define schema here!
  
  return (
    <main className="bg-white">
    {/* JSON-LD Structured Data */}
        {schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        )}

      <SearchHeader />
      <JobBoardLayout />
    </main>
  );
}
