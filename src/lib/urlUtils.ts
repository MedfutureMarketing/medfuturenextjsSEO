/* eslint-disable react/no-unescaped-entities */


/**
 * URL, Metadata, and Schema Utilities
 * All job data processing in one place
 */

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
  highlights?: Array<{ jobhighlights_id: number; name: string }>;
  first_contact_person_name?: string;
  first_contact_number?: string;
  email?: string;
};

/* ================= URL & SLUG UTILITIES ================= */

/**
 * Extract just the job title from a full title string
 * The job title is always the FIRST word(s) before any separator
 * Example: "General Practitioner - AUD 200 per hour - 70% mixed billing - The Junction"
 * Returns: "General Practitioner"
 */
function extractJobTitleOnly(fullTitle: string): string {
  // Split by common separators: " - ", " -- ", or pipe "|"
  let titlePart = fullTitle
    .split(/\s*[-–—|]\s*/)[0]  // Split by any dash or pipe, take first part
    .trim();

  // Remove any trailing special characters
  titlePart = titlePart.replace(/\s*[-–—|]\s*$/, '').trim();

  return titlePart;
}

/**
 * Create a URL-friendly slug from job details
 * Format: job-title-job-location-id
 * Example: "General Practitioner" + "Sydney" + "MP32751" -> "general-practitioner-job-sydney-MP32751"
 */
export function createJobSlug(
  jobTitle: string,
  location: string,
  jobId: string | number
): string {
  // Extract just the main job title
  const mainTitle = extractJobTitleOnly(jobTitle);
  
  // Convert to lowercase and replace spaces/special chars with hyphens
  const cleanTitle = mainTitle
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')           // Replace spaces with hyphens
    .replace(/[^\w-]/g, '')         // Remove special characters except hyphens
    .replace(/-+/g, '-')            // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, '');         // Remove leading/trailing hyphens

  // Clean location the same way
  const cleanLocation = location
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  // Build the slug: title-job-location-id
  return `${cleanTitle}-job-${cleanLocation}-${jobId}`;
}

/**
 * Extract the job ID from a slug
 * Example: "general-practitioner-job-sydney-MP32751" -> "MP32751"
 */
export function extractJobIdFromSlug(slug: string): string {
  const parts = slug.split('-');
  return parts[parts.length - 1]; // ID is always the last part
}

/**
 * Parse slug to extract job title and location
 */
export function parseJobSlug(slug: string): { title: string; location: string; id: string } {
  const slugParts = slug.split('-job-');
  const jobTitle = slugParts[0]?.replace(/-/g, ' ') || 'Job';
  const locationAndId = slugParts[1] || '';
  const locationParts = locationAndId.split('-');
  const id = locationParts[locationParts.length - 1];
  const location = locationParts.slice(0, -1).join(' ') || 'Location';
  
  return { title: jobTitle, location, id };
}

/* ================= TEXT FORMATTING ================= */

/**
 * Format text to title case
 */
export function formatTitleCase(str: string): string {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

/* ================= METADATA GENERATION ================= */

export interface MetadataParams {
  jobTitle: string;
  location: string;
  jobBrief?: string;
}

/**
 * Generate metadata for job page
 * Used in: generateMetadata() function in page.tsx
 */
export function generateJobMetadata(params: MetadataParams) {
  const { jobTitle, location, jobBrief } = params;
  const formattedTitle = formatTitleCase(jobTitle);
  const formattedLocation = formatTitleCase(location);

  return {
    title: `${formattedTitle} Jobs in ${formattedLocation}`,
    description: jobBrief 
      ? jobBrief.substring(0, 160) 
      : `${formattedTitle} position available in ${formattedLocation}. Apply now for this opportunity.`,
    openGraph: {
      title: `${formattedTitle} Jobs in ${formattedLocation}`,
      description: jobBrief 
        ? jobBrief.substring(0, 160) 
        : `${formattedTitle} position available in ${formattedLocation}.`,
      type: 'website' as const,
    },
  };
}

/* ================= JSON-LD SCHEMA GENERATION ================= */

interface JobSchemaParams {
  job: Job;
  baseUrl: string;
  slug: string;
}

/**
 * Generate comprehensive JSON-LD schema for job posting
 * Captures ALL available job data
 * Used in: page.tsx component (render phase)
 */
export function generateJobSchema(params: JobSchemaParams) {
  const { job, baseUrl, slug } = params;

  // Build highlights/responsibilities array
  const responsibilities = job.highlights?.map(h => h.name) || [];
  
  // Build qualifications array
  const qualifications = (job.required_qualification_exp ?? "")
    .split(/\r?\n/)
    .filter(q => q.trim().length > 0);

  // Format location
  const jobLocation = `${job.state?.name || ''}, ${job.country?.name || ''}`.trim();

  // Create the schema object
  const schema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    
    // Basic Information
    title: job.job_title,
    description: job.job_brief || "",
    url: `${baseUrl}/permanent/job/${slug}`,
    
    // Organization (hiring company)
    hiringOrganization: {
      "@type": "Organization",
      name: "Medical Healthcare Organization", // Update if you have company name in data
      sameAs: baseUrl,
    },
    
    // Job Location
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.state?.name || "",
        addressCountry: job.country?.name || "",
      },
    },
    
    // Position Details
    jobLocationType: "TELECOMMUTE", // Update based on engagement type
    employmentType: job.engagement_type?.name || "PERMANENT",
    
    // Job Category/Profession
    occupationalCategory: job.profession?.name || "",
    
    // Responsibilities
    responsibilities: responsibilities.length > 0 ? responsibilities : undefined,
    
    // Qualifications/Requirements
    qualifications: qualifications.length > 0 ? qualifications : undefined,
    
    // Additional Details
    additionalDetails: {
      medicalPractiseDetails: job.medical_practise_details || "",
      professionType: job.profession?.name,
      engagementType: job.engagement_type?.name,
    },
    
    // Contact Information
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Recruitment",
      name: job.first_contact_person_name || "Recruitment Team",
      telephone: job.first_contact_number || undefined,
      email: job.email || undefined,
    },
    
    // Posting Details
    datePosted: new Date().toISOString().split('T')[0], // Update if you have actual posting date
    validThrough: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 30 days from now
    
    // Salary (if available in data)
    baseSalary: undefined, // Add if salary data available
    
    // Job ID reference
    identifier: {
      "@type": "PropertyValue",
      name: "Job ID",
      value: job.job_id.toString(),
    },
  };

  // Clean up undefined values
  return JSON.parse(JSON.stringify(schema));
}

/**
 * Create structured data script tag content
 */
export function createSchemaScript(schema: any): string {
  return JSON.stringify(schema);
}