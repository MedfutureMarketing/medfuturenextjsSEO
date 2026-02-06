import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/getPageMetadata";
import PermanentClient from "./PermanentClient";
// import { schemaList } from "@/Data/schemaList";

interface PermanentPageProps {
  params?: Promise<{ slug?: string[] }>;
}

// Helper to get JSON-LD schema
// function getSchema(page: string) {
//   return schemaList[page]?.jsonLd || null;
// }

// ✅ Helper function to format slug into readable title
function formatTitle(slugArray: string[]): string {
  if (!slugArray || slugArray.length === 0) {
    return "Permanent Jobs";
  }

  // Remove "in-" prefix and format properly
  const words = slugArray
    .map((slug) => {
      // Remove "in-" from location names like "in-australia"
      if (slug.startsWith("in-")) {
        return slug.replace("/in-", "").replace(/-/g, " ");
      }
      return slug.replace(/-/g, " ");
    })
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1));

  return words.join(" in ");
}

// ✅ Correct dynamic metadata generator for App Router
export async function generateMetadata(
  props: PermanentPageProps
): Promise<Metadata> {
  // ✅ Await params first
  const params = await props.params;
  const slugArray = params?.slug ?? [];

  // Construct the full path for dynamicOverrides
  const path = `/permanent/${slugArray.join("/")}`;

  // Template parameters for dynamic metadata
  const formattedTitle = formatTitle(slugArray);

  const templateParams = {
    id: slugArray.join("/") || "permanent",
    title: formattedTitle,
  };

  // Get metadata (dynamic template or override)
  const metadata = await getPageMetadata("permanent", templateParams, path);

  // ✅ Server-side logging (will appear in terminal, not browser)
  // console.log("Generated Metadata for path:", path, metadata);

  return metadata;
}

// Page component
export default function PermanentPage() {
  // const schema = getSchema("permanent");

  return (
    <main className="bg-white">
      {/* Structured data JSON-LD */}
      {/* {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )} */}
      <PermanentClient />
    </main>
  );
}