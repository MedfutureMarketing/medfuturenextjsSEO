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

// Extend the Job type for fields that might exist in API but not in type definition
interface ExtendedJob extends Job {
  salary_min?: number;
  salary_max?: number;
  salary_text?: string;
}

// Keep your existing generateMetadata as is
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
async function fetchJobForSchema(jobId: string): Promise<ExtendedJob | null> {
  try {
    const res = await apiGet<{ data: ExtendedJob }>(`web/jobdetails/${jobId}`);
    return res?.data || null;
  } catch (error) {
    console.error("Error fetching job for schema:", error);
    return null;
  }
}

// Define the schema type
interface JobPostingSchema {
  "@context": string;
  "@type": string;
  title: string;
  description: string;
  identifier: {
    "@type": string;
    name: string;
    value: string;
  };
  datePosted: string;
  validThrough: string;
  employmentType: string;
  hiringOrganization: {
    "@type": string;
    name: string;
    sameAs: string;
  };
  jobLocation: {
    "@type": string;
    address: {
      "@type": string;
      addressLocality: string;
      addressCountry: {
        "@type": string;
        name: string;
      };
    };
  };
  applicantLocationRequirements: {
    "@type": string;
    name: string;
  };
  occupationalCategory?: string;
  baseSalary?: {
    "@type": string;
    currency: string;
    value: {
      "@type": string;
      minValue?: number;
      maxValue?: number;
      value?: number;
      unitText: string;
    };
  };
}

// Main component
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

  // Create base schema
  const jobPostingSchema: JobPostingSchema = {
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
    
    // Add salary if available
    if (jobData.salary_min && jobData.salary_max) {
      jobPostingSchema.baseSalary = {
        "@type": "MonetaryAmount",
        "currency": "AUD",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": jobData.salary_min,
          "maxValue": jobData.salary_max,
          "unitText": "YEAR"
        }
      };
    } else if (jobData.salary_text) {
      // Try to parse salary text
      const salaryMatch = jobData.salary_text.match(/\$?(\d+(?:,\d+)?)/);
      if (salaryMatch) {
        const amount = parseFloat(salaryMatch[1].replace(/,/g, ''));
        jobPostingSchema.baseSalary = {
          "@type": "MonetaryAmount",
          "currency": "AUD",
          "value": {
            "@type": "QuantitativeValue",
            "value": amount,
            "unitText": jobData.salary_text.toLowerCase().includes('per hour') ? 'HOUR' : 'YEAR'
          }
        };
      }
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
      } else if (type.includes('locum')) {
        jobPostingSchema.employmentType = "TEMPORARY";
      }
    }
  }

  return (
    <div>
      {/* Add JSON-LD script */}
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