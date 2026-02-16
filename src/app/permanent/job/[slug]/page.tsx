import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/getPageMetadata";
import JobDescription from "@/components/JobBoard/SingleJobPage/PermenantDes";
import { extractJobIdFromSlug } from "@/lib/urlUtils";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("job");
}

type Params = Promise<{ slug: string | string[] }>;

export default async function JobPage(props: { params: Params }) {
  const params = await props.params;
  
  // Extract the job ID from the slug
  // From: "general-practitioner-job-sydney-MP32751"
  // To: "MP32751"
  const slugString = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const jobId = extractJobIdFromSlug(slugString);

  return (
    <div>
      <section className="min-h-screen flex flex-col">
        <JobDescription jobId={jobId} />
      </section>
    </div>
  );
}