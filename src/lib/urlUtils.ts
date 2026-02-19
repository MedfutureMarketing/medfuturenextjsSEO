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
  jobId?: string | number;
}

/**
 * Generate metadata for job page
 * Used in: generateMetadata() function in page.tsx
 */
export function generateJobMetadata(params: MetadataParams) {
  const { jobTitle, location, jobBrief, jobId } = params;
  
  // Extract just the main job title if it contains separators
  const mainTitle = extractJobTitleOnly(jobTitle);
  const formattedTitle = formatTitleCase(mainTitle);
  const formattedLocation = formatTitleCase(location);

  // Log to verify jobId is received
  console.log('generateJobMetadata received jobId:', jobId);

  // Include job ID in the title if provided
  const title = jobId 
    ? `${formattedTitle} Job in ${formattedLocation} - ${jobId} | Medfuture Australia`
    : `${formattedTitle} Job in ${formattedLocation} | Medfuture Australia`;

  return {
    title: title,
    description: jobBrief 
      ? jobBrief.substring(0, 160) 
      : `${formattedTitle} position available in ${formattedLocation}. Apply now for this opportunity.`,
    openGraph: {
      title: title,
      description: jobBrief 
        ? jobBrief.substring(0, 160) 
        : `${formattedTitle} position available in ${formattedLocation}.`,
      type: 'website' as const,
    },
  };
}