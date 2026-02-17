import type { Metadata } from "next";
import { Suspense } from "react";
import JobDescription from "@/components/JobBoard/SingleJobPage/PermenantDes";
import { 
  getCompleteJobData,  // 👈 Using the rich data version
  extractJobIdFromSlug,
  createSchemaScript 
} from "@/lib/urlUtils";

type Params = Promise<{ slug: string | string[] }>;

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
  const params = await props.params;
  const slugString = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  
  // This NOW fetches rich data from API
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

export default async function JobPage(props: { params: Params }) {
  const params = await props.params;
  const slugString = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  
  // This fetches rich data AND generates rich schema
  const result = await getCompleteJobData(slugString);
  
  let schemaJson = "";

  if (result.success && result.schema) {
    schemaJson = createSchemaScript(result.schema);
    console.log("✅ Rich schema generated for:", result.job?.job_title);
    console.log("✅ Includes:", {
      highlights: result.job?.highlights?.length || 0,
      contactPerson: result.job?.first_contact_person_name,
      salary: result.job?.hourly_fee
    });
  }

  const jobId = extractJobIdFromSlug(slugString);

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
          <Suspense fallback={<div>Loading medical job details...</div>}>
            <JobDescription jobId={jobId} />
          </Suspense>
        </section>
      </div>
    </>
  );
}