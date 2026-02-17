import type { Metadata } from "next";
import { Suspense } from "react";
import JobDescription from "@/components/JobBoard/SingleJobPage/PermenantDes";
import { 
  extractJobIdFromSlug, 
  parseJobSlug, 
  generateJobMetadata,
  generateJobSchema,
  type Job,
} from "@/lib/urlUtils";
import { apiGet } from "@/lib/api";

type Params = Promise<{ slug: string | string[] }>;

/**
 * Shared function to fetch job data
 * Used by both generateMetadata and JobPage
 */
async function fetchJobData(jobId: string): Promise<Job | null> {
  try {
    const res = await apiGet<{ data: Job }>(`web/jobdetails/${jobId}`);
    return res?.data || null;
  } catch (error) {
    console.error("Error fetching job data:", error);
    return null;
  }
}

/**
 * Generate dynamic metadata from slug and job data
 */
export async function generateMetadata(props: { 
  params: Params 
}): Promise<Metadata> {
  const params = await props.params;
  const slugString = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  
  const jobId = extractJobIdFromSlug(slugString);
  const { title, location } = parseJobSlug(slugString);
  
  // Fetch job data for metadata
  const jobData = await fetchJobData(jobId);
  const jobBrief = jobData?.job_brief;

  const metadata = generateJobMetadata({
    jobTitle: title,
    location: location,
    jobBrief: jobBrief,
  });

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: metadata.openGraph,
    alternates: {
      canonical: `/permanent/job/${slugString}`,
    },
  };
}

/**
 * Main Job Page Component
 * Generates and injects JSON-LD schema markup
 */
export default async function JobPage(props: { params: Params }) {
  const params = await props.params;
  const slugString = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const jobId = extractJobIdFromSlug(slugString);

  // Fetch job data (same way as metadata)
  const jobData = await fetchJobData(jobId);

  let schemaJson = "";

  // Generate schema if we have job data
  if (jobData && jobData.job_title) {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      
      const schemaMarkup = generateJobSchema({
        job: jobData,
        baseUrl: baseUrl || "https://yourdomain.com",
        slug: slugString,
      });

      // Serialize to JSON
      schemaJson = JSON.stringify(schemaMarkup);
      
      console.log("✅ Schema generated successfully for:", jobData.job_title);
    } catch (error) {
      console.error("❌ Error generating schema:", error);
    }
  } else {
    console.warn("⚠️ Cannot generate schema - jobData missing or no job_title");
  }

  return (
    <>
      {/* JSON-LD Schema Markup */}
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