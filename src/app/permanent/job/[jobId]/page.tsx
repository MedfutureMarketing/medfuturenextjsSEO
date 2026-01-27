// src/app/permanent/job/[jobId]/page.tsx
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

/* ================= METADATA ================= */
export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("permanent");
}

/* ================= PAGE ================= */
export default async function PermanentSingleJob({
  params,
}: {
  params: { jobId: string };
}) {
  let job: Job | null = null;

  try {
    // Use absolute URL for SSR on Vercel
    const res = await apiGet<{ data: Job }>(
      `${process.env.NEXT_PUBLIC_API_URL}/web/jobdetails/${params.jobId}`
    );

    if (!res?.data) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <p>Job not found.</p>
        </div>
      );
    }

    job = res.data;
  } catch (error) {
    console.error("SSR fetch failed:", error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Failed to fetch job details.</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen flex flex-col">
      <JobDescription job={job} />
    </section>
  );
}
