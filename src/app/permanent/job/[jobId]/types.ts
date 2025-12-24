// app/job/[jobId]/types.ts
export type JobHighlight = {
  jobhighlights_id: number;
  name: string;
};

export type Job = {
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

export type JobApiResponse = {
  data: Job;
  message?: string;
  success?: boolean;
};