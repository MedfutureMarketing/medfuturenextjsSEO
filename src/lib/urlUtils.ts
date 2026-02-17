/**
 * URL, Metadata, and Schema Utilities
 * NOW WITH FULL API DATA FETCHING!
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
  hourly_fee?: string;
  commencement_date?: string | null;
  status?: number;
  offer_details?: string | null;
};

// API fetching function
async function fetchJobFromBackend(jobId: string): Promise<Job | null> {
  try {
    // Using the same apiGet function from your components
    const { apiGet } = await import('@/lib/api');
    console.log("🔍 Fetching job from backend for ID:", jobId);
    
    const res = await apiGet<{ data: Job }>(`web/jobdetails/${jobId}`);
    console.log("✅ Backend response received:", res ? "Yes" : "No");
    
    return res?.data || null;
  } catch (error) {
    console.error("❌ Error fetching job data:", error);
    return null;
  }
}

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
      : `${formattedTitle} position available in ${formattedLocation}. Apply now for this medical opportunity.`,
    openGraph: {
      title: `${formattedTitle} Jobs in ${formattedLocation}`,
      description: jobBrief 
        ? jobBrief.substring(0, 160) 
        : `${formattedTitle} position available in ${formattedLocation}. Join our healthcare team.`,
      type: 'website' as const,
    },
  };
}

/* ================= JSON-LD SCHEMA GENERATION ================= */

interface JobSchemaParams {
  job: Job;              // Full job data from API
  baseUrl: string;
  slug: string;
}

/**
 * Generate JSON-LD schema for job posting USING FULL JOB DATA
 * Now uses actual API data instead of generic content!
 */
export function generateJobSchemaFromData(params: JobSchemaParams) {
  const { job, baseUrl, slug } = params;

  const formattedTitle = formatTitleCase(job.job_title);
  const location = job.state?.name || job.country?.name || 'Australia';
  const formattedLocation = formatTitleCase(location);

  // Use REAL job data from API
  const schema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    
    // Basic Information from API
    title: job.job_title,
    url: `${baseUrl}/permanent/job/${slug}`,
    description: job.job_brief || `${job.job_title} position available`,
    
    // Job Location from API
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.state?.name || '',
        addressCountry: job.country?.name || 'Australia',
      },
    },
    
    // Position Details from API
    employmentType: job.engagement_type?.name || 'FULL_TIME',
    occupationalCategory: job.profession?.name || 'Healthcare',
    
    // Organization
    hiringOrganization: {
      "@type": "Organization",
      name: "MedFuture Medical Recruitment",
      sameAs: baseUrl,
    },
    
    // Posting Details
    datePosted: job.commencement_date || new Date().toISOString().split('T')[0],
    validThrough: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    
    // Job ID
    identifier: {
      "@type": "PropertyValue",
      name: "Job ID",
      value: job.job_id.toString(),
    },
    
    // Responsibilities from API highlights
    responsibilities: job.highlights?.map(h => h.name) || [],
    
    // Qualifications from API
    qualifications: (job.required_qualification_exp ?? "")
      .split(/\r?\n/)
      .filter(q => q.trim().length > 0),
    
    // Contact Information from API
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Recruitment",
      name: job.first_contact_person_name || "Recruitment Team",
      telephone: job.first_contact_number || undefined,
      email: job.email || undefined,
    },
    
    // Salary if available
    ...(job.hourly_fee && {
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "AUD",
        value: {
          "@type": "QuantitativeValue",
          value: job.hourly_fee,
          unitText: "HOUR"
        }
      }
    }),
  };

  // Clean up undefined values
  return JSON.parse(JSON.stringify(schema));
}

/**
 * MAIN FUNCTION: Get ALL job data including API fetch
 * This is what you should use in your page.tsx
 */
export async function getCompleteJobData(slug: string) {
  try {
    // Parse slug to get ID
    const { title, location, id } = parseJobSlug(slug);
    console.log("📌 Parsed from URL:", { title, location, id });

    // 1. FETCH FULL JOB DATA FROM API
    console.log("📡 Fetching job data for ID:", id);
    const jobData = await fetchJobFromBackend(id);
    
    if (!jobData) {
      console.warn("⚠️ No job data found for ID:", id);
      return {
        success: false,
        error: 'Job not found',
        job: null,
        schema: null,
        metadata: null
      };
    }

    console.log("✅ Job data fetched:", jobData.job_title);

    // Get base URL
    const finalBaseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
                        'https://medfuturenextjs-seo.vercel.app';

    // 2. Generate metadata (can use API data or URL data)
    const metadata = generateJobMetadata({
      jobTitle: jobData.job_title,
      location: jobData.state?.name || location,
      jobBrief: jobData.job_brief || undefined,
    });

    // 3. Generate schema using FULL JOB DATA
    const schemaMarkup = generateJobSchemaFromData({
      job: jobData,
      baseUrl: finalBaseUrl,
      slug: slug,
    });

    // Return EVERYTHING - both URL data and API data
    return {
      success: true,
      job: jobData,           // Full job data from API
      schema: schemaMarkup,    // Schema generated from API data
      metadata: metadata,      // Metadata from API data
      slug: {
        full: slug,
        id: id,
        title: title,
        location: location
      }
    };

  } catch (error) {
    console.error('Error in getCompleteJobData:', error);
    return {
      success: false,
      error: 'Failed to fetch job data',
      job: null,
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