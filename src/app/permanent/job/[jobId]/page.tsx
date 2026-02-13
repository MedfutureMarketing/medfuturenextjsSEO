// app/permanent/[jobId]/page.tsx
import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/getPageMetadata";
import JobDescription from "@/components/JobBoard/SingleJobPage/PermenantDes";
import { apiGet } from "@/lib/api";

/* ================= TYPES ================= */

type Job = {
  job_id: number;
  job_title: string;
  profession?: { name: string };
  state?: { name: string };
  country?: { name: string };
  job_brief?: string;
};

/* ================= METADATA GENERATION ================= */

export async function generateMetadata({
  params,
}: {
  params: { jobId: string };
}): Promise<Metadata> {
  try {
    console.log("🔍 Fetching job data for:", params.jobId);
    
    // Fetch job data from API
    const res = await apiGet<{ data: Job }>(`web/jobdetails/${params.jobId}`);
    const job = res.data;

    if (!job?.job_title) {
      console.warn("❌ No job title found");
      throw new Error("Invalid job data");
    }

    console.log("✅ Job data received:", {
      title: job.job_title,
      profession: job.profession?.name,
      state: job.state?.name,
      country: job.country?.name,
    });

    // Get metadata with ALL job-specific params
    return await getPageMetadata(
      "permanent",
      {
        id: params.jobId,
        title: job.job_title,
        profession: job.profession?.name,     // ← ADD THIS
        state: job.state?.name,               // ← ADD THIS
        country: job.country?.name,           // ← ADD THIS
      },
      `/permanent/${params.jobId}`,
      `https://medfuturenextjs-seo.vercel.app/permanent/${params.jobId}`
    );
  } catch (error) {
    console.error("❌ Error fetching job metadata:", error);
    
    // Fallback to generic metadata
    return await getPageMetadata(
      "permanent",
      {
        id: params.jobId,
        title: "Job Opportunity",
      },
      `/permanent/${params.jobId}`,
      `https://medfuturenextjs-seo.vercel.app/permanent/${params.jobId}`
    );
  }
}

/* ================= PAGE COMPONENT ================= */

export default function PermanentSingleJob() {
  return (
    <div>
      <section className="min-h-screen flex flex-col">
        <JobDescription />
      </section>
    </div>
  );
}