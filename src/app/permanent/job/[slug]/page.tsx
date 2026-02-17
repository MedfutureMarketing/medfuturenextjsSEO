import type { Metadata } from "next";
import { Suspense } from "react";
import JobDescription from "@/components/JobBoard/SingleJobPage/PermenantDes";
import { 
  getCompleteJobData,  // 👈 NEW function that fetches ALL data
  extractJobIdFromSlug,
  createSchemaScript 
} from "@/lib/urlUtils";

type Params = Promise<{ slug: string | string[] }>;

/**
 * Generate dynamic metadata using API data
 */
export async function generateMetadata(props: { 
  params: Params 
}): Promise<Metadata> {
  const params = await props.params;
  const slugString = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  
  // This NOW fetches from API!
  const result = await getCompleteJobData(slugString);
  
  if (!result.success || !result.metadata) {
    return {
      title: 'Medical Job Not Found',
      description: 'The requested medical position could not be found.'
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
 * Uses REAL API data for schema markup!
 */
export default async function JobPage(props: { params: Params }) {
  const params = await props.params;
  const slugString = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  
  // This NOW fetches from API and includes ALL job data!
  const result = await getCompleteJobData(slugString);
  
  let schemaJson = "";

  // Generate schema script using REAL API data
  if (result.success && result.schema) {
    schemaJson = createSchemaScript(result.schema);
    console.log("✅ Schema generated with REAL data for:", result.job?.job_title);
  } else {
    console.warn("⚠️ Cannot generate schema -", result.error);
  }

  const jobId = extractJobIdFromSlug(slugString);

  return (
    <>
      {/* JSON-LD Schema Markup - Now with REAL job data! */}
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
          <Suspense fallback={<div className="p-6 text-center text-gray-500">Loading medical job details...</div>}>
            <JobDescription jobId={jobId} />
          </Suspense>
        </section>
      </div>
    </>
  );
}