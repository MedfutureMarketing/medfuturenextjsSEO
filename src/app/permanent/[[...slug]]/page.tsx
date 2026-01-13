import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/getPageMetadata";
import PermanentClient from "./PermanentClient";
import { schemaList } from "@/Data/schemaList";

export function getSchema(page: string) {
  return schemaList[page]?.jsonLd || null;
}

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("permanent");
}

export default function PermanentPage() {
  const schema = getSchema("permanent");

  return (
    <main className="bg-white">
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      <PermanentClient />
    </main>
  );
}
