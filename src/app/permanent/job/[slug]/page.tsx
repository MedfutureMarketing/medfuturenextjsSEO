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
 * Generate dynamic metadata from slug and job data
 * Uses: Job title, location, and brief description
 */
export async function generateMetadata(props: { 
  params: Params 
}): Promise<Metadata> {
  const params = await props.params;
  const slugString = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  
  const jobId = extractJobIdFromSlug(slugString);
  const { title, location } = parseJobSlug(slugString);
  
  // Optionally fetch full job data for better description
  let jobBrief = undefined;
  try {
    const res = await apiGet<{ data: Job }>(`web/jobdetails/${jobId}`);
    jobBrief = res.data.job_brief;
  } catch (error) {
    console.error("Error fetching job for metadata:", error);
  }

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
 * Renders job details with full schema markup
 */
export default async function JobPage(props: { params: Params }) {
  const params = await props.params;
  const slugString = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const jobId = extractJobIdFromSlug(slugString);

  let jobData: Job | null = null;
  let schemaMarkup = null;

  // Fetch job data for schema generation
  try {
    const res = await apiGet<{ data: Job }>(`web/jobdetails/${jobId}`);
    jobData = res.data;

    // Generate JSON-LD schema with ALL job data
    schemaMarkup = generateJobSchema({
      job: jobData,
      baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://yourdomain.com",
      slug: slugString,
    });
  } catch (error) {
    console.error("Error fetching job data:", error);
  }

  return (
    <>
      {/* JSON-LD Schema Markup - Captures ALL Job Data */}
      {schemaMarkup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaMarkup),
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