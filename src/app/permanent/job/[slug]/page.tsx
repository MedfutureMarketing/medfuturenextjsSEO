import type { Metadata } from "next";
import { Suspense } from "react";
import JobDescription from "@/components/JobBoard/SingleJobPage/PermenantDes";
import { 
  extractJobIdFromSlug, 
  parseJobSlug, 
  generateJobMetadata,
  type Job,
} from "@/lib/urlUtils";
import { apiGet } from "@/lib/api";

type Params = Promise<{ slug: string | string[] }>;

// Extend the Job type if it doesn't include salary fields
// Option 1: If you need to extend the imported Job type
interface JobWithSalary extends Job {
  salary_min?: number;
  salary_max?: number;
  // Add any other fields that might be missing
}

/**
 * Parse slug once and reuse the data
 */
function parseSlug(slugString: string) {
  const { title, location, id } = parseJobSlug(slugString);
  
  // Format once
  const formattedTitle = title
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
    
  const formattedLocation = location
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return {
    jobId: id,
    jobTitle: title,
    location: location,
    formattedTitle,
    formattedLocation,
    slugString,
  };
}

/**
 * Generate dynamic metadata from slug with JobPosting schema
 */
export async function generateMetadata(props: { 
  params: Params 
}): Promise<Metadata> {
  const params = await props.params;
  const slugString = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  
  // Parse slug once
  const { formattedTitle, formattedLocation, jobId } = parseSlug(slugString);

  // Generate metadata using ONLY slug data (no API call)
  const metadata = generateJobMetadata({
    jobTitle: formattedTitle,
    location: formattedLocation,
    jobId: jobId,
  });

  return {
    title: metadata.title,
    description: `View details and apply for ${formattedTitle} position in ${formattedLocation}. Job ID: ${jobId}`,
    openGraph: metadata.openGraph,
    alternates: {
      canonical: `/permanent/job/${slugString}`,
    },
  };
}

/**
 * Main Job Page Component - Only makes ONE API call
 * This is where we add the JSON-LD script
 */
export default async function JobPage(props: { params: Params }) {
  const params = await props.params;
  const slugString = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  
  // Parse slug once
  const { jobId, formattedTitle, formattedLocation } = parseSlug(slugString);
  
  // Fetch job data
  const jobData = await fetchJobData(jobId);

  // Create JobPosting structured data with actual job data if available
  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": jobData?.job_title || formattedTitle ||formattedLocation ,
    "description": jobData?.job_brief || `View details for ${formattedTitle} position in ${formattedLocation}`,
    "identifier": {
      "@type": "PropertyValue",
      "name": "Job ID",
      "value": jobId
    },
    "datePosted": new Date().toISOString().split('T')[0],
    "validThrough": new Date(Date.now() + 30*24*60*60*1000).toISOString().split('T')[0],
    "employmentType": "FULL_TIME", // You might want to map this from jobData
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Medfuture", // Update with your actual company name
      "sameAs": "https://www.medfuture.com.au"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": formattedLocation.split(',')[0]?.trim() || formattedLocation,
        "addressRegion": formattedLocation.split(',')[1]?.trim() || '',
        "addressCountry": "AU"
      }
    },
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "AU"
    },
    // Check if salary fields exist on the jobData object
    ...(jobData && 'salary_min' in jobData && jobData.salary_min && 
       'salary_max' in jobData && jobData.salary_max ? {
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "AUD",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": jobData.salary_min,
          "maxValue": jobData.salary_max,
          "unitText": "YEAR"
        }
      }
    } : {})
  };

  return (
    <div>
      {/* Add JSON-LD script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
      
      <section className="min-h-screen flex flex-col">
        <Suspense fallback={<div className="p-6 text-center text-gray-500">Loading job details...</div>}>
          <JobDescription jobId={jobId} />
        </Suspense>
      </section>
    </div>
  );
}

// Update fetchJobData to use the extended type
async function fetchJobData(jobId: string): Promise<JobWithSalary | null> {
  try {
    const res = await apiGet<{ data: JobWithSalary }>(`web/jobdetails/${jobId}`);
    return res?.data || null;
  } catch (error) {
    console.error("Error fetching job data:", error);
    return null;
  }
}