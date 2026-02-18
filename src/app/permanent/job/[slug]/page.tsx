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
 * Parse slug once and reuse the data
 */
function parseSlug(slugString: string) {
  const { title, location, id } = parseJobSlug(slugString);
  
  // Format once
  const formattedTitle = title
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
    
  const formattedLocation = location
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return {
    jobId: id,
    jobTitle: title,
    location: location,
    formattedTitle,
    formattedLocation,
    slugString,
  };
}

/**
 * Generate dynamic metadata from slug 
 * NO API CALL HERE - uses only slug data
 */
export async function generateMetadata(props: { 
  params: Params 
}): Promise<Metadata> {
  const params = await props.params;
  const slugString = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  
  // Parse slug once
  const { formattedTitle, formattedLocation, jobId } = parseSlug(slugString);

  // Generate metadata using ONLY slug data (no API call)
  const metadata = generateJobMetadata({
    jobTitle: formattedTitle,
    location: formattedLocation,
    jobId: jobId, // This gives you what you wanted!
    // No jobBrief here - avoids API call
  });

  return {
    title: metadata.title,
    description: `View details and apply for ${formattedTitle} position in ${formattedLocation}. Job ID: ${jobId}`,
    openGraph: metadata.openGraph,
    alternates: {
      canonical: `/permanent/job/${slugString}`,
    },
  };
}

/**
 * Main Job Page Component - Only makes ONE API call
 */
export default async function JobPage(props: { params: Params }) {
  const params = await props.params;
  const slugString = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  
  // Parse slug once
  const { jobId, formattedTitle, formattedLocation } = parseSlug(slugString);
  
  // ONLY fetch job data once here
  const jobData = await fetchJobData(jobId);

  let schemaJson = "";

  // Generate schema if we have job data
  if (jobData && jobData.job_title) {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      
      const schemaMarkup = generateJobSchema({
        job: jobData,
        baseUrl: baseUrl || "https://medfuturenextjs-seo.vercel.app/",
        slug: slugString,
      });

      schemaJson = JSON.stringify(schemaMarkup);
      
      console.log("✅ Schema generated for:", jobData.job_title);
    } catch (error) {
      console.error("❌ Error generating schema:", error);
    }
  } else {
    console.log("ℹ️ Using slug data for fallback:", formattedTitle);
  }

  return (
    <>
      {schemaJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaJson }}
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

// Keep your fetchJobData function as is
async function fetchJobData(jobId: string): Promise<Job | null> {
  try {
    const res = await apiGet<{ data: Job }>(`web/jobdetails/${jobId}`);
    return res?.data || null;
  } catch (error) {
    console.error("Error fetching job data:", error);
    return null;
  }
}