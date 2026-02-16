// app/components/JobDescriptionWrapper.tsx (SERVER COMPONENT - no "use client")
import { apiGet } from "@/lib/api";
import JobDescription from '@/components/JobBoard/SingleJobPage/PermenantDes';

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

interface JobDescriptionWrapperProps {
  jobId: string;
}

export default async function JobDescriptionWrapper({ jobId }: JobDescriptionWrapperProps) {
  let job: Job | null = null;
  let error: string | null = null;

  // Fetch data on SERVER SIDE
  try {
    const res = await apiGet<{ data: Job }>(`web/jobdetails/${jobId}`);
    job = res.data;
  } catch (err) {
    console.error("Error fetching job:", err);
    error = "Failed to load job details";
  }

  // Pass the data as props to the client component
  return <JobDescription job={job} error={error} jobId={jobId} />;
}