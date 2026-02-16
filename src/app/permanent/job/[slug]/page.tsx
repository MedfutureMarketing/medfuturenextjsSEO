import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/getPageMetadata";
import JobDescription from "@/components/JobBoard/SingleJobPage/PermenantDes";
import { extractJobIdFromSlug } from "@/lib/urlUtils";
import { apiGet } from "@/lib/api";

type JobHighlight = {
  jobhighlights_id: number;
  name: string;
};

type Job = {
  job_id: number;
  job_title: string;
  profession?: { name: string };
  engagement_type?: { name: string };
  country?: { name: string };
  state?: { name: string };
  job_brief?: string;
  medical_practise_details?: string;
  required_qualification_exp?: string;
  highlights?: JobHighlight[];
  first_contact_person_name?: string;
  first_contact_number?: string;
  email?: string;
};

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("job");
}

type Params = Promise<{ slug: string | string[] }>;

export default async function JobPage(props: { params: Params }) {
  const params = await props.params;
  
  // Extract the job ID from the slug
  const slugString = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const jobId = extractJobIdFromSlug(slugString);

  let job: Job | null = null;
  let error: string | null = null;

  // Fetch job data on the server
  try {
    const res = await apiGet<{ data: Job }>(`web/jobdetails/${jobId}`);
    job = res.data;
  } catch (err) {
    console.error("Error fetching job:", err);
    error = "Failed to load job details";
  }

  if (error || !job) {
    return (
      <div>
        <section className="min-h-screen flex flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">Job Not Found</h1>
            <p className="text-gray-500 mt-2">
              The job you're looking for doesn't exist or has been removed.
            </p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section className="min-h-screen flex flex-col">
        <JobDescription job={job} />
      </section>
    </div>
  );
}