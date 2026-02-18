import type { Metadata } from "next";
import { Suspense } from "react";
import JobDescription from "@/components/JobBoard/SingleJobPage/PermenantDes";
import { 
  parseJobSlug, 
  generateJobMetadata,
  type Job,
} from "@/lib/urlUtils";
import { apiGet } from "@/lib/api";

type Params = Promise<{ slug: string | string[] }>;

// Keep your existing generateMetadata as is (since it's working)
export async function generateMetadata(props: { 
  params: Params 
}): Promise<Metadata> {
  const params = await props.params;
  const slugString = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  
  const { title, location, id } = parseJobSlug(slugString);
  
  const formattedTitle = title
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
    
  const metadata = generateJobMetadata({
    jobTitle: formattedTitle,
    location: location,
    jobId: id,
  });

  return {
    title: metadata.title,
    description: `View details and apply for ${formattedTitle} position. Job ID: ${id}`,
    openGraph: metadata.openGraph,
    alternates: {
      canonical: `/permanent/job/${slugString}`,
    },
  };
}

// Fetch job data for schema only
async function fetchJobForSchema(jobId: string) {
  try {
    const res = await apiGet<{ data: Job }>(`web/jobdetails/${jobId}`);
    return res?.data || null;
  } catch (error) {
    console.error("Error fetching job for schema:", error);
    return null;
  }
}

// Main component - only fetches data for schema
export default async function JobPage(props: { params: Params }) {
  const params = await props.params;
  const slugString = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  
  const { title, location, id } = parseJobSlug(slugString);
  
  // Fetch job data ONLY for the schema
  const jobData = await fetchJobForSchema(id);

  // Format title and location
  const formattedTitle = title
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  const formattedLocation = location
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Create JobPosting schema with whatever data we have
  const jobPostingSchema: any = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": jobData?.job_title || formattedTitle,
    "description": jobData?.job_brief || `View details for ${formattedTitle} position`,
    "identifier": {
      "@type": "PropertyValue",
      "name": "Job ID",
      "value": id
    },
    "datePosted": new Date().toISOString().split('T')[0],
    "validThrough": new Date(Date.now() + 30*24*60*60*1000).toISOString().split('T')[0],
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Medfuture",
      "sameAs": "https://www.medfuture.com.au/"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": formattedLocation,
        "addressCountry": {
          "@type": "Country",
          "name": "AU"
        }
      }
    },
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "AU"
    }
  };

  // Add optional fields if they exist in jobData
  if (jobData) {
    // Add profession if available
    if (jobData.profession?.name) {
      jobPostingSchema.occupationalCategory = jobData.profession.name;
    }
    
    // Add salary if available (you'll need to add these fields to your Job type)
    if ((jobData as any).salary_min && (jobData as any).salary_max) {
      jobPostingSchema.baseSalary = {
        "@type": "MonetaryAmount",
        "currency": "AUD",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": (jobData as any).salary_min,
          "maxValue": (jobData as any).salary_max,
          "unitText": "YEAR"
        }
      };
    }
    
    // Add employment type based on engagement_type
    if (jobData.engagement_type?.name) {
      const type = jobData.engagement_type.name.toLowerCase();
      if (type.includes('full')) {
        jobPostingSchema.employmentType = "FULL_TIME";
      } else if (type.includes('part')) {
        jobPostingSchema.employmentType = "PART_TIME";
      } else if (type.includes('contract')) {
        jobPostingSchema.employmentType = "CONTRACTOR";
      } else if (type.includes('temporary')) {
        jobPostingSchema.employmentType = "TEMPORARY";
      }
    }
  }

  return (
    <div>
      {/* Add JSON-LD script - this is the only addition */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
      
      <section className="min-h-screen flex flex-col">
        <Suspense fallback={<div className="p-6 text-center text-gray-500">Loading job details...</div>}>
          <JobDescription jobId={id} />
        </Suspense>
      </section>
    </div>
  );
}