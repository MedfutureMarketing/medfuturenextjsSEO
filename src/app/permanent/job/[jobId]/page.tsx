// app/permanent/job/[jobId]/page.tsx
import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/getPageMetadata";
import JobDescription from "@/components/JobBoard/SingleJobPage/PermenantDes";
import { apiGet } from "@/lib/api";

type Job = {
  job_id: number;
  job_title: string;
  profession?: { name: string };
  state?: { name: string };
  country?: { name: string };
  job_brief?: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ jobId: string }>;
}): Promise<Metadata> {
  try {
    const { jobId } = await params;
    console.log("🔍 Fetching job:", jobId); // ✅ ADD HERE

    const res = await apiGet<{ data: Job }>(`web/jobdetails/${jobId}`);
    console.log("✅ Job data:", res.data); // ✅ ADD HERE
    
    const job = res.data;

    return await getPageMetadata(
      "permanent",
      {
        id: jobId,
        title: job.job_title,
        profession: job.profession?.name,
        state: job.state?.name,
        country: job.country?.name,
      },
      `/permanent/job/${jobId}`,
      `https://medfuturenextjs-seo.vercel.app/permanent/job/${jobId}`
    );
  } catch (error) {
    console.error("❌ Metadata error:", error); // ✅ ADD HERE
    const { jobId } = await params;
    return await getPageMetadata("permanent", {
      id: jobId,
      title: "Job Opportunity",
    });
  }
}

export default function PermanentSingleJob() {
  return (
    <div>
      <section className="min-h-screen flex flex-col">
        <JobDescription />
      </section>
    </div>
  );
}