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

type Params = Promise<{ slug: string | string[] }>;

/**
 * Fetch job data from internal API route
 * This avoids any external API domain issues
 */
async function fetchJobData(jobId: string): Promise<Job | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com';
    const apiUrl = `${baseUrl}/api/jobs/${jobId}`;

    console.log("📡 Fetching job data from:", apiUrl);

    const res = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      console.error(`❌ API returned status ${res.status}`);
      return null;
    }

    const data: any = await res.json();

    if (!data.success || !data.data) {
      console.warn("⚠️ API response success is false or no data");
      return null;
    }

    console.log("✅ Job data fetched successfully:", {
      title: data.data.job_title,
      id: data.data.job_id,
    });

    return data.data as Job;
  } catch (error) {
    console.error("❌ Error fetching job data:", error);
    return null;
  }
}

/**
 * Generate page metadata
 */
export async function generateMetadata(props: { 
  params: Params 
}): Promise<Metadata> {
  const params = await props.params;
  const slugString = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  
  const jobId = extractJobIdFromSlug(slugString);
  const { title, location } = parseJobSlug(slugString);
  
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
 * Main page component with schema generation
 */
export default async function JobPage(props: { params: Params }) {
  const params = await props.params;
  const slugString = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const jobId = extractJobIdFromSlug(slugString);

  let schemaJson = "";

  try {
    // Fetch job data using internal API route
    const jobData = await fetchJobData(jobId);

    if (jobData && jobData.job_title) {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

      console.log("🔨 Generating schema with job data:", jobData.job_title);

      // Generate schema with full job data
      const schemaMarkup = generateJobSchema({
        job: jobData,
        baseUrl: baseUrl || "https://yourdomain.com",
        slug: slugString,
      });

      schemaJson = JSON.stringify(schemaMarkup);
      console.log("✅ Schema generated successfully");
    } else {
      console.warn("⚠️ Cannot generate schema - jobData is null or missing job_title");
    }
  } catch (error) {
    console.error("❌ Error generating schema:", error);
  }

  return (
    <>
      {/* JSON-LD Schema Markup - Contains all job details */}
      {schemaJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: schemaJson,
          }}
        />
      )}

      {/* Debug info in console */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            console.log('%c✅ Schema Markup Page Loaded', 'color: green; font-weight: bold;');
            console.log('Schema in DOM:', !!document.querySelector('script[type="application/ld+json"]'));
            const schema = document.querySelector('script[type="application/ld+json"]');
            if (schema) {
              const data = JSON.parse(schema.textContent);
              console.log('Schema Title:', data.title);
              console.log('Schema Type:', data['@type']);
            }
          `,
        }}
      />

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