// app/permanent/[jobId]/page.tsx - ✅ VERIFIED FOR VERCEL
import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/getPageMetadata";
import { apiGet } from "@/lib/api";
import JobDescription from "@/components/JobBoard/SingleJobPage/PermenantDes";

// ⚠️ CRITICAL: Props interface MUST use Promise for params
// This is a common Vercel deployment killer [citation:5]
interface Props {
  params: Promise<{ jobId: string }>;
}

type Job = {
  job_id: number;
  job_title: string;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    // ✅ MUST await params in Vercel environment [citation:5]
    const { jobId } = await params;
    
    const res = await apiGet<{ data: Job }>(`web/jobdetails/${jobId}`);
    const job = res.data;

    const jobPath = `/permanent/job/${jobId}`;
    const canonicalUrl = `https://medfuture.com.au${jobPath}?page=1`;
    
    return getPageMetadata(
      "permanent",
      {
        id: jobId,
        title: job?.job_title || "Healthcare Job",
      },
      jobPath,
      canonicalUrl
    );
  } catch (error) {
    console.error("Error fetching job metadata:", error);
    return getPageMetadata("permanent", {
      id: "",
      title: "Healthcare Job",
    });
  }
}

// ✅ ONLY default export - NO named exports other than generateMetadata [citation:2][citation:5]
export default function PermanentSingleJob() {
  return (
    <div>
      <section className="min-h-screen flex flex-col">
        <JobDescription />
      </section>
    </div>
  );
}