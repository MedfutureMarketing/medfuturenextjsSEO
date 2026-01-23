import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/getPageMetadata";
import PermanentClient from "./PermanentClient";
import { schemaList } from "@/Data/schemaList";

// Helper to get JSON-LD schema
export function getSchema(page: string) {
  return schemaList[page]?.jsonLd || null;
}

// Dynamic metadata generation
export async function generateMetadata(props: { params?: { slug?: string[] } }): Promise<Metadata> {
  const params = props.params ?? {};
  const slugArray = params.slug ?? [];

  // Construct full path for dynamicOverrides
  const path = `/permanent/${slugArray.join("/")}`;

  // Parameters for the dynamic template
  const templateParams = {
    id: slugArray.length ? slugArray.join("-") : "permanent",
    title: slugArray.length ? slugArray.join(" ") : "Permanent Roles",
  };

  // Returns full metadata including title, description, canonical, OG, Twitter
  return getPageMetadata("permanent", templateParams, path);
}

export default function PermanentPage() {
  const schema = getSchema("permanent");

  return (
    <main className="bg-white">
      {schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )}
      <PermanentClient />
    </main>
  );
}

