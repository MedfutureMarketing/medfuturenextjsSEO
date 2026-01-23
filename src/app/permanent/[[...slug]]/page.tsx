import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/getPageMetadata";
import PermanentClient from "./PermanentClient";
import { schemaList } from "@/Data/schemaList";

interface PermanentPageProps {
  params?: { slug?: string[] };
}

// Helper to get JSON-LD schema
function getSchema(page: string) {
  return schemaList[page]?.jsonLd || null;
}

// ✅ Correct dynamic metadata generator for App Router
export async function generateMetadata(props: PermanentPageProps): Promise<Metadata> {
  // Wait for params safely
  const slugArray = props.params?.slug ?? [];

  // Construct the full path for dynamicOverrides
  const path = `/permanent/${slugArray.join("/")}`;

  // Template parameters for dynamic metadata
  const templateParams = {
    id: slugArray.join("-") || "permanent",
    title: slugArray.join(" ") || "Permanent Jobs",
  };

  // Get metadata (dynamic template or override)
  const metadata = await getPageMetadata("permanent", templateParams, path);

  // ✅ Server-side logging (will appear in terminal, not browser)
  console.log("Generated Metadata for path:", path, metadata);

  return metadata;
}

// Page component
export default function PermanentPage() {
  const schema = getSchema("permanent");

  return (
    <main className="bg-white">
      {/* Structured data JSON-LD */}
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
