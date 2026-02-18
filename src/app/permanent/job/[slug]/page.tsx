import type { Metadata } from "next";
import { Suspense } from "react";
import JobDescription from "@/components/JobBoard/SingleJobPage/PermenantDes";
import { 
  parseJobSlug, 
  generateJobMetadata,
  generateJobSchema,
  type Job,
} from "@/lib/urlUtils";

type Params = Promise<{ slug: string | string[] }>;

// Generate metadata using ONLY URL data - ALL FORMATTED
export async function generateMetadata(props: { 
  params: Params 
}): Promise<Metadata> {
  const params = await props.params;
  const slugString = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  
  // Parse ALL data from URL slug - gets all formatted variants
  const { 
    title, 
    profession, 
    engagementType, 
    location, 
    id,
    formattedTitle,
    formattedProfession,
    formattedEngagement,
    formattedLocation,
    metaDescription
  } = parseJobSlug(slugString);
  
  // Generate metadata using URL data only
  const metadata = generateJobMetadata({
    jobTitle: title,
    profession: profession,
    engagementType: engagementType,
    location: location,
    jobId: id,
  });

  return {
    title: metadata.title,
    description: metaDescription, // Use the pre-formatted description from URL
    openGraph: {
      title: metadata.title,
      description: metaDescription,
      type: 'website',
    },
    alternates: {
      canonical: `/permanent/job/${slugString}`,
    },
  };
}

// Main component - ALL SCHEMA DATA FROM URL ONLY
export default async function JobPage(props: { params: Params }) {
  const params = await props.params;
  const slugString = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  
  // Parse ALL job data from URL slug - gets all formatted variants
  const { 
    title, 
    profession, 
    engagementType, 
    location, 
    id,
    fullJobTitle,
    fullLocation,
    metaDescription,
    schemaEmploymentType,
    workHours,
    country,
    organization,
    organizationUrl,
    datePosted,
    validThrough
  } = parseJobSlug(slugString);

  // Create schema object using ALL formatted data from URL
  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": fullJobTitle,
    "description": metaDescription,
    "identifier": {
      "@type": "PropertyValue",
      "name": id,
      "value": id
    },
    "datePosted": datePosted,
    "validThrough": validThrough,
    "employmentType": schemaEmploymentType,
    "hiringOrganization": {
      "@type": "Organization",
      "name": organization,
      "sameAs": organizationUrl
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": location,
        "addressRegion": location,
        "addressCountry": {
          "@type": "Country",
          "name": country
        }
      }
    },
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": country
    },
    "occupationalCategory": profession,
    "skills": profession,
    "qualifications": `${profession} qualification required`,
    "responsibilities": `Work as ${fullJobTitle} in ${location}`,
    "jobBenefits": `Competitive salary package for ${title} position`,
    "industry": "Healthcare",
    "workHours": workHours,
    "experienceRequirements": {
      "@type": "OccupationalExperienceRequirements",
      "monthsOfExperience": 24
    },
    "educationRequirements": `${profession} degree or equivalent`,
    "employmentUnit": {
      "@type": "Organization",
      "name": organization
    },
    "jobLocationType": "TELECOMMUTE_OR_ONSITE"
  };

  return (
    <div>
      {/* Add JSON-LD script with complete schema from URL data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
      
      <section className="min-h-screen flex flex-col">
        <Suspense fallback={<div className="p-6 text-center text-gray-500">Loading job details...</div>}>
          {/* Pass only the jobId to client component - it will fetch detailed data for display */}
          <JobDescription jobId={id} />
        </Suspense>
      </section>
    </div>
  );
}