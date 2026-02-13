// // app/permanent/[jobId]/page.tsx
// import type { Metadata } from "next";
// import { getPageMetadata } from "@/lib/getPageMetadata";
// import JobDescription from "@/components/JobBoard/SingleJobPage/PermenantDes";

// export async function generateMetadata(): Promise<Metadata> {
//   return getPageMetadata("permanent");
// }

// export default function PermanentSingleJob() {
//   return (
//     <div>
//       <section className="min-h-screen flex flex-col">
//         <JobDescription />
//       </section>
//     </div>
//   );
// }


// app/permanent/[jobId]/page.tsx
import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/getPageMetadata";
import JobDescription from "@/components/JobBoard/SingleJobPage/PermenantDes";
import { apiGet } from "@/lib/api";

// Define Job type
type Job = {
  job_id: number;
  job_title: string;
  profession?: { name: string };
  state?: { name: string };
  country?: { name: string };
  job_brief?: string;
};

// Generate metadata for the specific job
export async function generateMetadata({
  params,
}: {
  params: { jobId: string };
}): Promise<Metadata> {
  try {
    // Fetch job data
    const res = await apiGet<{ data: Job }>(`web/jobdetails/${params.jobId}`);
    const job = res.data;

    // Get metadata with job-specific params
    return await getPageMetadata(
      "permanent",
      {
        id: params.jobId,
        title: job.job_title,
      },
      `/permanent/${params.jobId}`, // Optional: for dynamic overrides
      `https://medfuturenextjs-seo.vercel.app/permanent/${params.jobId}`
    );
  } catch (error) {
    // Fallback to generic metadata if fetch fails
    return await getPageMetadata("permanent", {
      id: params.jobId,
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