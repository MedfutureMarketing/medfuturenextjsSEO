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

export type SlugSchemaData = {
  profession?: string;
  engagement_type?: string;
  state?: string;
  country?: string;
  medical_practise_details?: string;
  required_qualification_exp?: string;
  highlights?: string[];
  contact_name?: string;
  contact_number?: string;
  email?: string;
};

/* ================= URL & SLUG UTILITIES ================= */

function extractJobTitleOnly(fullTitle: string): string {
  let titlePart = fullTitle
    .split(/\s*[-–—|]\s*/)[0]
    .trim();
  titlePart = titlePart.replace(/\s*[-–—|]\s*$/, '').trim();
  return titlePart;
}

function cleanForSlug(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Create a URL-friendly slug with embedded schema data
 *
 * Format: {title}-job-{location}--{brief-snippet}--{jobId}--{base64SchemaData}
 * Example: general-practitioner-job-queensland--experienced-gp-needed--MP32882--eyJwIjoiR1AifQ
 *
 * Usage:
 *   createJobSlug(
 *     job.job_title,
 *     job.state?.name || '',
 *     job.job_id,
 *     job.job_brief,
 *     {
 *       profession: job.profession?.name,
 *       engagement_type: job.engagement_type?.name,
 *       state: job.state?.name,
 *       country: job.country?.name,
 *       medical_practise_details: job.medical_practise_details?.substring(0, 200),
 *       required_qualification_exp: job.required_qualification_exp?.substring(0, 200),
 *       highlights: job.highlights?.map(h => h.name),
 *       contact_name: job.first_contact_person_name,
 *       contact_number: job.first_contact_number,
 *       email: job.email,
 *     }
 *   )
 */
export function createJobSlug(
  jobTitle: string,
  location: string,
  jobId: string | number,
  jobBrief?: string,
  schemaData?: SlugSchemaData
): string {
  const cleanTitle = cleanForSlug(extractJobTitleOnly(jobTitle));
  const cleanLocation = cleanForSlug(location);
  const cleanBrief = jobBrief ? cleanForSlug(jobBrief.substring(0, 80)) : '';

  const encodedSchema = schemaData
    ? Buffer.from(JSON.stringify(schemaData)).toString('base64url')
    : '';

  const base = cleanBrief
    ? `${cleanTitle}-job-${cleanLocation}--${cleanBrief}--${jobId}`
    : `${cleanTitle}-job-${cleanLocation}--${jobId}`;

  return encodedSchema ? `${base}--${encodedSchema}` : base;
}

/**
 * Parse slug to extract all embedded data
 *
 * Handles two formats:
 *   New: {title}-job-{location}--{brief}--{id}--{base64schema}
 *   Old: {title}-job-{location}-{id}  (backwards compatible)
 */
export function parseJobSlug(slug: string): {
  title: string;
  location: string;
  brief: string;
  id: string;
  schemaData: SlugSchemaData;
} {
  const [titlePart, rest] = slug.split('-job-');
  const title = titlePart?.replace(/-/g, ' ') || 'Job';

  if (rest?.includes('--')) {
    const segments = rest.split('--');
    const location = segments[0]?.replace(/-/g, ' ') || 'Location';

    let id = '';
    let brief = '';
    let schemaData: SlugSchemaData = {};

    segments.slice(1).forEach((seg) => {
      // Job ID pattern: uppercase letters + numbers e.g. MP32882
      if (/^[A-Z]{1,4}\d+$/.test(seg)) {
        id = seg;
      }
      // Base64url: long string with uppercase or special chars
      else if (seg.length > 20 && /[A-Z_-]/.test(seg)) {
        try {
          schemaData = JSON.parse(Buffer.from(seg, 'base64url').toString());
        } catch {
          if (!brief) brief = seg.replace(/-/g, ' ');
        }
      }
      // Otherwise it's the brief snippet
      else {
        brief = seg.replace(/-/g, ' ');
      }
    });

    return { title, location, brief, id, schemaData };
  }

  // Fallback: old slug format {title}-job-{location}-{id}
  const locationParts = rest?.split('-') || [];
  const id = locationParts[locationParts.length - 1];
  const location = locationParts.slice(0, -1).join(' ') || 'Location';

  return { title, location, brief: '', id, schemaData: {} };
}

/**
 * Extract the job ID from a slug
 * Works for both old and new slug formats
 */
export function extractJobIdFromSlug(slug: string): string {
  const { id } = parseJobSlug(slug);
  return id;
}

/* ================= TEXT FORMATTING ================= */

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

export function generateJobMetadata(params: MetadataParams) {
  const { jobTitle, location, jobBrief, jobId } = params;

  const mainTitle = extractJobTitleOnly(jobTitle);
  const formattedTitle = formatTitleCase(mainTitle);
  const formattedLocation = formatTitleCase(location);

  const title = jobId
    ? `${formattedTitle} Job in ${formattedLocation} - ${jobId} | Medfuture Australia`
    : `${formattedTitle} Job in ${formattedLocation} | Medfuture Australia`;

  const description = jobBrief
    ? jobBrief.substring(0, 160)
    : `${formattedTitle} position available in ${formattedLocation}. Apply now for this opportunity.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description: jobBrief
        ? jobBrief.substring(0, 160)
        : `${formattedTitle} position available in ${formattedLocation}.`,
      type: 'website' as const,
    },
  };
}