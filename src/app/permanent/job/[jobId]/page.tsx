// app/job/[jobId]/page.tsx (SSR)
import JobDescriptionContent from '@/components/JobBoard/SingleJobPage/PermenantDes';
// app/job/[jobId]/page.tsx (SSR)

import { apiGet } from "@/lib/api";
import { Job } from './types'; 

export default async function JobDescriptionPage({ 
  params 
}: { 
  params: Promise<{ jobId: string }>
}) {
  const { jobId } = await params;
  
  try {
    const response = await apiGet<{ data: Job }>(`web/jobdetails/${jobId}`);
   return <JobDescriptionContent params={Promise.resolve({ jobId })} />;
  } catch {
    return (
      <div className="border-2 rounded-8px p-8 text-center">
        <h1 className="text-2xl font-bold text-[#0E2851]">Job Not Found</h1>
        <p className="text-[#666666] mt-4">The job you are looking for does not exist or has been removed.</p>
      </div>
    );
  }
}



    // 
// 