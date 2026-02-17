/**
 * URL, Metadata, and Schema Utilities
 * All job data processing in one place - NO API FETCHING NEEDED!
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
 */
function extractJobTitleOnly(fullTitle: string): string {
  let titlePart = fullTitle
    .split(/\s*[-–—|]\s*/)[0]
    .trim();
  titlePart = titlePart.replace(/\s*[-–—|]\s*$/, '').trim();
  return titlePart;
}

/**
 * Create a URL-friendly slug from job details
 */
export function createJobSlug(
  jobTitle: string,
  location: string,
  jobId: string | number
): string {
  const mainTitle = extractJobTitleOnly(jobTitle);
  
  const cleanTitle = mainTitle
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  const cleanLocation = location
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  return `${cleanTitle}-job-${cleanLocation}-${jobId}`;
}

/**
 * Extract the job ID from a slug
 */
export function extractJobIdFromSlug(slug: string): string {
  const parts = slug.split('-');
  return parts[parts.length - 1];
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
  jobTitle: string;      // From URL
  location: string;      // From URL
  jobId: string;         // From URL
  baseUrl: string;
  slug: string;
}

/**
 * Generate JSON-LD schema for job posting DIRECTLY FROM URL PARAMETERS
 * No API call needed - uses only what's in the URL!
 */
export function generateJobSchemaFromUrl(params: JobSchemaParams) {
  const { jobTitle, location, jobId, baseUrl, slug } = params;

  const formattedTitle = formatTitleCase(jobTitle);
  const formattedLocation = formatTitleCase(location);

  // Create a comprehensive schema using ONLY URL data
  const schema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    
    // Basic Information from URL
    title: formattedTitle,
    url: `${baseUrl}/permanent/job/${slug}`,
    
    // Job Location from URL
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: formattedLocation,
        addressCountry: "Australia", // Default or could be extracted if format is "city-state-country"
      },
    },
    
    // Position Details (reasonable defaults based on job title)
    employmentType: "FULL_TIME", // Default, or could be extracted if included in URL
    occupationalCategory: getOccupationalCategoryFromTitle(jobTitle), // Derived from job title
    
    // Organization (hiring company) - Static/default
    hiringOrganization: {
      "@type": "Organization",
      name: "Medical Healthcare Organization",
      sameAs: baseUrl,
    },
    
    // Description (generated from title and location)
    description: `${formattedTitle} position available in ${formattedLocation}. ` +
                 `Join our team and advance your career in a supportive healthcare environment.`,
    
    // Posting Details
    datePosted: new Date().toISOString().split('T')[0],
    validThrough: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    
    // Job ID from URL
    identifier: {
      "@type": "PropertyValue",
      name: "Job ID",
      value: jobId,
    },
    
    // Generic responsibilities based on job title
    responsibilities: generateGenericResponsibilities(jobTitle),
    
    // Generic qualifications based on job title
    qualifications: generateGenericQualifications(jobTitle),
  };

  // Clean up undefined values
  return JSON.parse(JSON.stringify(schema));
}

/**
 * Helper function to determine occupational category from job title
 */
function getOccupationalCategoryFromTitle(title: string): string {
  const titleLower = title.toLowerCase();
  
  if (titleLower.includes('nurse') || titleLower.includes('nursing')) {
    return 'Nursing';
  } else if (titleLower.includes('doctor') || titleLower.includes('physician')) {
    return 'Medical Practice';
  } else if (titleLower.includes('specialist')) {
    return 'Medical Specialist';
  } else if (titleLower.includes('therapist')) {
    return 'Therapy';
  } else {
    return 'Healthcare';
  }
}

/**
 * Generate generic responsibilities based on job title
 */
function generateGenericResponsibilities(title: string): string[] {
  const titleLower = title.toLowerCase();
  
  if (titleLower.includes('general practitioner')) {
    return [
      'Provide comprehensive primary care to patients',
      'Diagnose and treat various medical conditions',
      'Maintain accurate patient records',
      'Collaborate with healthcare team members',
      'Participate in continuous medical education'
    ];
  } else if (titleLower.includes('nurse')) {
    return [
      'Provide direct patient care',
      'Administer medications as prescribed',
      'Monitor patient vital signs',
      'Coordinate with healthcare team',
      'Educate patients and families'
    ];
  } else {
    return [
      'Provide quality healthcare services',
      'Maintain professional standards',
      'Collaborate with medical team',
      'Ensure patient satisfaction',
      'Follow healthcare protocols'
    ];
  }
}

/**
 * Generate generic qualifications based on job title
 */
function generateGenericQualifications(title: string): string[] {
  const titleLower = title.toLowerCase();
  
  if (titleLower.includes('general practitioner')) {
    return [
      'Medical degree (MBBS or equivalent)',
      'Valid medical license',
      'Minimum 2 years clinical experience',
      'Strong communication skills',
      'Commitment to patient care'
    ];
  } else if (titleLower.includes('nurse')) {
    return [
      'Nursing degree or diploma',
      'Valid nursing license',
      'Clinical experience preferred',
      'Compassionate and patient-focused',
      'Good communication skills'
    ];
  } else {
    return [
      'Relevant healthcare qualification',
      'Valid professional registration',
      'Experience in healthcare setting',
      'Strong interpersonal skills',
      'Commitment to quality care'
    ];
  }
}

/**
 * Main function to get ALL data from URL only
 * This is your "API-less" solution - everything from the URL!
 */
export function getJobDataFromSlugOnly(slug: string, baseUrl?: string) {
  try {
    // Parse everything from the URL
    const { title, location, id } = parseJobSlug(slug);
    
    console.log("📌 Parsed from URL:", { title, location, id });

    // Get base URL
    const finalBaseUrl = baseUrl || 
                        process.env.NEXT_PUBLIC_BASE_URL || 
                        'https://medfuturenextjs-seo.vercel.app/';

    // Generate metadata from URL
    const metadata = generateJobMetadata({
      jobTitle: title,
      location: location,
      // No jobBrief available from URL
    });

    // Generate schema from URL ONLY
    const schemaMarkup = generateJobSchemaFromUrl({
      jobTitle: title,
      location: location,
      jobId: id,
      baseUrl: finalBaseUrl,
      slug: slug,
    });

    // Return everything generated from the URL
    return {
      success: true,
      schema: schemaMarkup,
      metadata: metadata,
      slug: {
        full: slug,
        id: id,
        title: title,
        location: location
      }
    };

  } catch (error) {
    console.error('Error in getJobDataFromSlugOnly:', error);
    return {
      success: false,
      error: 'Failed to generate data from URL',
      schema: null,
      metadata: null
    };
  }
}

/**
 * Create structured data script tag content
 */
export function createSchemaScript(schema: Record<string, unknown>): string {
  return JSON.stringify(schema);
}