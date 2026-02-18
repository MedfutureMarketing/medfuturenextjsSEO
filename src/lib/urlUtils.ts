/**
 * URL, Metadata, and Schema Utilities
 * All job data processing in one place - ALL DATA FROM URL ONLY
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
  salary_min?: number;
  salary_max?: number;
  salary_text?: string;
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
 * ENHANCED FORMAT: job-title-profession-employment-type-location-id
 * Example: "General Practitioner" + "GP" + "Full Time" + "Sydney" + "MP32751" 
 * -> "general-practitioner-gp-full-time-sydney-MP32751"
 */
export function createJobSlug(
  jobTitle: string,
  profession: string,
  engagementType: string,
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

  // Clean profession
  const cleanProfession = profession
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  // Clean engagement type
  const cleanEngagement = engagementType
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  // Clean location
  const cleanLocation = location
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  // Build the enhanced slug: title-profession-engagement-location-id
  return `${cleanTitle}-${cleanProfession}-${cleanEngagement}-${cleanLocation}-${jobId}`;
}

/**
 * Extract the job ID from a slug
 * Example: "general-practitioner-gp-full-time-sydney-MP32751" -> "MP32751"
 */
export function extractJobIdFromSlug(slug: string): string {
  const parts = slug.split('-');
  return parts[parts.length - 1]; // ID is always the last part
}

/**
 * ENHANCED: Parse slug to extract ALL job data from URL
 * Now extracts: title, profession, engagementType, location, id
 * ALL data is formatted and returned from URL only
 * 
 * Example: "general-practitioner-gp-full-time-sydney-MP32751" -> {
 *   title: "General Practitioner",
 *   profession: "GP",
 *   engagementType: "Full Time",
 *   location: "Sydney",
 *   id: "MP32751",
 *   formattedTitle: "General Practitioner",
 *   formattedProfession: "GP",
 *   formattedEngagement: "Full Time",
 *   formattedLocation: "Sydney",
 *   fullJobTitle: "General Practitioner GP",
 *   fullLocation: "Sydney, Australia",
 *   metaDescription: "General Practitioner GP Full Time position in Sydney. Apply now.",
 *   schemaEmploymentType: "FULL_TIME",
 *   workHours: "40 hours per week",
 *   country: "AU",
 *   organization: "Medfuture"
 * }
 */
export function parseJobSlug(slug: string): { 
  // Core parsed data
  title: string; 
  profession: string;
  engagementType: string;
  location: string; 
  id: string;
  
  // Formatted variants for different uses
  formattedTitle: string;
  formattedProfession: string;
  formattedEngagement: string;
  formattedLocation: string;
  fullJobTitle: string;
  fullLocation: string;
  metaDescription: string;
  
  // Schema-specific formatted data
  schemaEmploymentType: string;
  workHours: string;
  country: string;
  organization: string;
  organizationUrl: string;
  
  // Date fields (computed from URL data)
  datePosted: string;
  validThrough: string;
} {
  // Split by all hyphens
  const parts = slug.split('-');
  
  // Last part is always the ID
  const id = parts[parts.length - 1];
  
  // Second last is location
  const locationRaw = parts[parts.length - 2]?.replace(/-/g, ' ') || 'Location';
  
  // Third last is engagement type
  const engagementRaw = parts[parts.length - 3]?.replace(/-/g, ' ') || 'Full Time';
  
  // Fourth last is profession
  const professionRaw = parts[parts.length - 4]?.replace(/-/g, ' ') || 'Medical Professional';
  
  // Everything before the last 4 parts is the job title
  const titleRaw = parts.slice(0, parts.length - 4).join(' ').replace(/-/g, ' ') || 'Job';
  
  // Apply title case to all core fields
  const title = formatTitleCase(titleRaw);
  const profession = formatTitleCase(professionRaw);
  const engagementType = formatTitleCase(engagementRaw);
  const location = formatTitleCase(locationRaw);
  
  // Create formatted variants
  const formattedTitle = title;
  const formattedProfession = profession;
  const formattedEngagement = engagementType;
  const formattedLocation = location;
  const fullJobTitle = `${title} ${profession}`;
  const fullLocation = `${location}, Australia`;
  
  // Create meta description
  const metaDescription = `${fullJobTitle} ${engagementType} position available in ${location}. Apply now through Medfuture.`;
  
  // Map engagement type to schema.org employment type
  let schemaEmploymentType = "FULL_TIME";
  const typeLower = engagementType.toLowerCase();
  if (typeLower.includes('part')) {
    schemaEmploymentType = "PART_TIME";
  } else if (typeLower.includes('contract')) {
    schemaEmploymentType = "CONTRACTOR";
  } else if (typeLower.includes('temporary') || typeLower.includes('locum')) {
    schemaEmploymentType = "TEMPORARY";
  }
  
  // Set work hours based on engagement type
  const workHours = engagementType.toLowerCase().includes('full') ? '40 hours per week' : 'As per agreement';
  
  // Static fields (still based on URL context)
  const country = "AU";
  const organization = "Medfuture";
  const organizationUrl = "https://www.medfuture.com.au/";
  
  // Date fields (computed at request time but based on URL context)
  const datePosted = new Date().toISOString().split('T')[0];
  const validThrough = new Date(Date.now() + 30*24*60*60*1000).toISOString().split('T')[0];
  
  return { 
    // Core parsed data
    title, 
    profession,
    engagementType,
    location, 
    id,
    
    // Formatted variants
    formattedTitle,
    formattedProfession,
    formattedEngagement,
    formattedLocation,
    fullJobTitle,
    fullLocation,
    metaDescription,
    
    // Schema-specific formatted data
    schemaEmploymentType,
    workHours,
    country,
    organization,
    organizationUrl,
    
    // Date fields
    datePosted,
    validThrough
  };
}

/* ================= TEXT FORMATTING ================= */

/**
 * Format text to title case
 */
export function formatTitleCase(str: string): string {
  if (!str) return '';
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

/* ================= METADATA GENERATION ================= */

export interface MetadataParams {
  jobTitle: string;
  profession: string;
  engagementType: string;
  location: string;
  jobBrief?: string;
  jobId?: string | number;
}

/**
 * Generate metadata for job page
 * Used in: generateMetadata() function in page.tsx
 * NOW USES FORMATTED DATA FROM URL ONLY
 */
export function generateJobMetadata(params: MetadataParams) {
  const { jobTitle, profession, engagementType, location, jobBrief, jobId } = params;
  
  // Extract just the main job title if it contains separators
  const mainTitle = extractJobTitleOnly(jobTitle);
  const formattedTitle = formatTitleCase(mainTitle);
  const formattedLocation = formatTitleCase(location);
  const formattedProfession = formatTitleCase(profession);
  const formattedEngagement = formatTitleCase(engagementType);

  // Include job ID in the title if provided
  const title = jobId 
    ? `${formattedTitle} ${formattedProfession} ${formattedEngagement} Job in ${formattedLocation} - ${jobId} | Medfuture Australia`
    : `${formattedTitle} ${formattedProfession} Job in ${formattedLocation} | Medfuture Australia`;

  return {
    title: title,
    description: jobBrief 
      ? jobBrief.substring(0, 160) 
      : `${formattedTitle} ${formattedProfession} position available in ${formattedLocation}. ${formattedEngagement} role. Apply now.`,
    openGraph: {
      title: title,
      description: jobBrief 
        ? jobBrief.substring(0, 160) 
        : `${formattedTitle} ${formattedProfession} position available in ${formattedLocation}.`,
      type: 'website' as const,
    },
  };
}

/* ================= SCHEMA GENERATION ================= */

export interface SchemaParams {
  title: string;
  profession: string;
  engagementType: string;
  location: string;
  id: string;
  description?: string;
}

/**
 * Generate JobPosting schema from URL data only
 * NOW USES THE FORMATTED DATA FROM parseJobSlug
 */
export function generateJobSchema(params: SchemaParams): object {
  const { title, profession, engagementType, location, id, description } = params;
  
  // Map engagement type to schema.org employment type
  let employmentType = "FULL_TIME";
  const typeLower = engagementType.toLowerCase();
  if (typeLower.includes('part')) {
    employmentType = "PART_TIME";
  } else if (typeLower.includes('contract')) {
    employmentType = "CONTRACTOR";
  } else if (typeLower.includes('temporary') || typeLower.includes('locum')) {
    employmentType = "TEMPORARY";
  }

  // Set work hours based on engagement type
  const workHours = engagementType.toLowerCase().includes('full') ? '40 hours per week' : 'As per agreement';

  // Create description if not provided
  const schemaDescription = description || 
    `${title} ${profession} position. ${engagementType} role available in ${location}. Apply now through Medfuture.`;

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": `${title} ${profession}`,
    "description": schemaDescription,
    "identifier": {
      "@type": "PropertyValue",
      "name": `${id}`,
      "value": id
    },
    "datePosted": new Date().toISOString().split('T')[0],
    "validThrough": new Date(Date.now() + 30*24*60*60*1000).toISOString().split('T')[0],
    "employmentType": employmentType,
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Medfuture",
      "sameAs": "https://www.medfuture.com.au/"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": location,
        "addressRegion": location,
        "addressCountry": {
          "@type": "Country",
          "name": "AU"
        }
      }
    },
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "AU"
    },
    "occupationalCategory": profession,
    "skills": profession,
    "qualifications": `${profession} qualification required`,
    "responsibilities": `Work as ${title} ${profession} in ${location}`,
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
      "name": "Medfuture"
    },
    "jobLocationType": "TELECOMMUTE_OR_ONSITE"
  };
}