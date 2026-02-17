import type { Metadata } from "next";
import { Suspense } from "react";
import JobDescription from "@/components/JobBoard/SingleJobPage/PermenantDes";
import {
  getJobDataWithApiEnrichment,
  extractJobIdFromSlug,
  createSchemaScript,
} from "@/lib/urlUtils";

type Params = Promise<{ slug: string | string[] }>;

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
  const params = await props.params;
  const slugString = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const result = await getJobDataWithApiEnrichment(slugString);

  if (!result.success || !result.metadata) {
    return {
      title: "Job Not Found",
      description: "The requested job could not be found.",
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

  const result = await getJobDataWithApiEnrichment(slugString);

  let schemaJson = "";
  if (result.success && result.schema) {
    schemaJson = createSchemaScript(result.schema);
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
          <Suspense
            fallback={
              <div className="p-6 text-center text-gray-500">
                Loading job details...
              </div>
            }
          >
            <JobDescription jobId={jobId} />
          </Suspense>
        </section>
      </div>
    </>
  );
}