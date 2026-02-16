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