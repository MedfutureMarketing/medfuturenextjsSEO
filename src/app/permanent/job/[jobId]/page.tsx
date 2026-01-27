import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/getPageMetadata";
import JobDescription from "@/components/JobBoard/SingleJobPage/PermenantDes";
import { apiGet } from "@/lib/api";

/* ================= TYPES ================= */

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
};

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("permanent");
}

export default async function PermanentSingleJob({
  params,
}: {
  params: { jobId: string };
}) {
  let job: Job | null = null;

  try {
    const res = await apiGet<{ data: Job }>(
      `web/jobdetails/${params.jobId}`
    );
    job = res.data;
  } catch (error) {
    console.error("Failed to fetch job", error);
  }

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Job not found</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen flex flex-col">
      {/* ✅ PASS JOB PROP */}
      <JobDescription job={job} />
    </section>
  );
}
