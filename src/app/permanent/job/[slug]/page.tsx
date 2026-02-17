import type { Metadata } from "next";
import { Suspense } from "react";
import JobDescription from "@/components/JobBoard/SingleJobPage/PermenantDes";
import { 
  getJobDataFromSlugOnly,  // New function - NO API CALLS!
  extractJobIdFromSlug,
  createSchemaScript 
} from "@/lib/urlUtils";

type Params = Promise<{ slug: string | string[] }>;

/**
 * Generate dynamic metadata from slug only
 */
export async function generateMetadata(props: { 
  params: Params 
}): Promise<Metadata> {
  const params = await props.params;
  const slugString = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  
  // NO API CALL - just from URL!
  const result = getJobDataFromSlugOnly(slugString);
  
  if (!result.success || !result.metadata) {
    return {
      title: 'Job Not Found',
      description: 'The requested job could not be found.'
    };
  }

  return {
    title: result.metadata.title,
    description: result.metadata.description,
    openGraph: result.metadata.openGraph,
    alternates: {
      canonical: `/permanent/job/${slugString}`,
    },
  };
}

/**
 * Main Job Page Component
 * Generates and injects JSON-LD schema markup FROM URL ONLY!
 */
export default async function JobPage(props: { params: Params }) {
  const params = await props.params;
  const slugString = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  
  // NO API CALL - everything from URL!
  const result = getJobDataFromSlugOnly(slugString);
  
  let schemaJson = "";

  // Generate schema script if we have data
  if (result.success && result.schema) {
    schemaJson = createSchemaScript(result.schema);
    console.log("✅ Schema generated from URL for:", result.slug?.title);
  } else {
    console.warn("⚠️ Cannot generate schema -", result.error);
  }

  const jobId = extractJobIdFromSlug(slugString);

  return (
    <>
      {/* JSON-LD Schema Markup - Generated from URL ONLY! */}
      {schemaJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: schemaJson,
          }}
        />
      )}

      <div>
        <section className="min-h-screen flex flex-col">
          <Suspense fallback={<div className="p-6 text-center text-gray-500">Loading job details...</div>}>
            <JobDescription jobId={jobId} />
          </Suspense>
        </section>
      </div>
    </>
  );
}