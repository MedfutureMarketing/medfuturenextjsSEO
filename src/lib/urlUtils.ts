/**
 * URL, Metadata, and Schema Utilities
 * All job data processing in one place.
 * Supports both URL-only (fast) and full API-enriched data generation.
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

function extractJobTitleOnly(fullTitle: string): string {
  let titlePart = fullTitle.split(/\s*[-–—|]\s*/)[0].trim();
  titlePart = titlePart.replace(/\s*[-–—|]\s*$/, '').trim();
  return titlePart;
}

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

export function extractJobIdFromSlug(slug: string): string {
  const parts = slug.split('-');
  return parts[parts.length - 1];
}

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

export function formatTitleCase(str: string): string {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

/* ================= API FETCHING ================= */

// Exact same base URL used in lib/api.ts
const API_BASE_URL = "https://stage.medfuture.com.au/medadminapi/public/api";

/**
 * Fetches real job data from the backend — identical to:
 *   apiGet<{ data: Job }>(`web/jobdetails/${jobId}`)
 *
 * This runs SERVER-SIDE only (inside generateMetadata / page.tsx),
 * so CORS restrictions do not apply here.
 *
 * Returns null on any failure so callers fall back to URL-only data gracefully.
 */
export async function fetchJobById(jobId: string): Promise<Job | null> {
  try {
    const url = `${API_BASE_URL}/web/jobdetails/${jobId}`;
    console.log('🌐 Fetching job from backend:', url);

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      // Cache 1 hour server-side — revalidates automatically with ISR
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.warn(`⚠️ Backend returned ${response.status} for job ${jobId}`);
      return null;
    }

    const contentType = response.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      console.warn('⚠️ Backend did not return JSON for job', jobId);
      return null;
    }

    // Same shape as apiGet<{ data: Job }> — unwrap .data
    const json: { data: Job } = await response.json();
    console.log('✅ Job fetched from backend:', json.data?.job_title);
    return json.data ?? null;

  } catch (err) {
    console.error('❌ fetchJobById failed:', err);
    return null;
  }
}

/* ================= METADATA GENERATION ================= */

export interface MetadataParams {
  jobTitle: string;
  location: string;
  jobBrief?: string;
}

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
  jobTitle: string;
  location: string;
  jobId: string;
  baseUrl: string;
  slug: string;
  job?: Job | null;
}

export function generateJobSchema(params: JobSchemaParams) {
  const { jobTitle, location, jobId, baseUrl, slug, job } = params;

  const formattedTitle = formatTitleCase(jobTitle);
  const formattedLocation = formatTitleCase(location);

  // Use real job_brief when available, otherwise generate generic copy
  const description =
    job?.job_brief ||
    `${formattedTitle} position available in ${formattedLocation}. ` +
    `Join MedFuture and advance your medical career in a supportive healthcare environment.`;

  // Split multiline qualifications string into an array, same as the component does
  const qualifications =
    job?.required_qualification_exp
      ? job.required_qualification_exp.split(/\r?\n/).filter(Boolean)
      : generateGenericQualifications(jobTitle);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',

    title: job?.job_title
      ? formatTitleCase(extractJobTitleOnly(job.job_title))
      : formattedTitle,

    url: `${baseUrl}/permanent/job/${slug}`,

    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job?.state?.name
          ? formatTitleCase(job.state.name)
          : formattedLocation,
        addressCountry: job?.country?.name || 'Australia',
      },
    },

    employmentType: mapEngagementType(job?.engagement_type?.name),

    occupationalCategory:
      job?.profession?.name || getOccupationalCategoryFromTitle(jobTitle),

    hiringOrganization: {
      '@type': 'Organization',
      name: 'MedFuture Medical Recruitment',
      sameAs: baseUrl,
    },

    description,

    datePosted: new Date().toISOString().split('T')[0],
    validThrough: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split('T')[0],

    identifier: {
      '@type': 'PropertyValue',
      name: 'Job ID',
      value: jobId,
    },

    responsibilities: generateGenericResponsibilities(jobTitle),
    qualifications,

    // Real highlights from the API (e.g. salary, benefits)
    ...(job?.highlights?.length
      ? { jobBenefits: job.highlights.map(h => h.name).join(', ') }
      : {}),

    applicationContact: {
      '@type': 'ContactPoint',
      contactType: 'Recruitment',
      ...(job?.email ? { email: job.email } : {}),
      ...(job?.first_contact_number ? { telephone: job.first_contact_number } : {}),
      url: `${baseUrl}/permanent/job/${slug}/apply`,
    },
  };

  // Strip any undefined/null values before returning
  return JSON.parse(JSON.stringify(schema));
}

/** Legacy alias kept for backwards compatibility */
export const generateJobSchemaFromUrl = generateJobSchema;

/* ================= HELPERS ================= */

function mapEngagementType(engagementType?: string): string {
  if (!engagementType) return 'FULL_TIME';
  const t = engagementType.toLowerCase();
  if (t.includes('part')) return 'PART_TIME';
  if (t.includes('contract') || t.includes('temp')) return 'CONTRACTOR';
  if (t.includes('casual')) return 'TEMPORARY';
  return 'FULL_TIME';
}

function getOccupationalCategoryFromTitle(title: string): string {
  const t = title.toLowerCase();
  if (t.includes('nurse') || t.includes('nursing')) return 'Nursing';
  if (t.includes('doctor') || t.includes('physician')) return 'Medical Practice';
  if (t.includes('specialist')) return 'Medical Specialist';
  if (t.includes('therapist')) return 'Therapy';
  if (t.includes('gp') || t.includes('general practitioner')) return 'General Practice';
  return 'Healthcare';
}

function generateGenericResponsibilities(title: string): string[] {
  const t = title.toLowerCase();
  if (t.includes('general practitioner') || t.includes('gp')) {
    return [
      'Provide comprehensive primary care to patients of all ages',
      'Diagnose and treat acute and chronic medical conditions',
      'Maintain accurate and detailed patient records',
      'Collaborate with specialists and healthcare team members',
      'Participate in continuous medical education and professional development',
      'Conduct routine check-ups and health screenings',
    ];
  } else if (t.includes('nurse')) {
    return [
      'Provide direct patient care and support',
      'Administer medications and treatments as prescribed',
      'Monitor patient vital signs and report changes',
      'Coordinate with healthcare team for patient care plans',
      'Educate patients and families on health management',
      'Maintain accurate nursing documentation',
    ];
  }
  return [
    'Provide quality healthcare services to patients',
    'Maintain professional medical standards and protocols',
    'Collaborate with multidisciplinary medical team',
    'Ensure patient satisfaction and safety',
    'Participate in team meetings and case discussions',
    'Stay updated with latest medical practices',
  ];
}

function generateGenericQualifications(title: string): string[] {
  const t = title.toLowerCase();
  if (t.includes('general practitioner') || t.includes('gp')) {
    return [
      'Medical degree (MBBS or equivalent)',
      'Valid AHPRA registration without restrictions',
      'Minimum 2 years clinical experience in general practice',
      'Strong communication and interpersonal skills',
      'Commitment to evidence-based patient care',
      'FRACGP or equivalent qualification (preferred)',
    ];
  } else if (t.includes('nurse')) {
    return [
      'Bachelor of Nursing or equivalent qualification',
      'Current AHPRA registration as a Registered Nurse',
      'Clinical experience in relevant healthcare setting',
      'Strong patient care and communication skills',
      'Ability to work in a team environment',
      'Commitment to ongoing professional development',
    ];
  }
  return [
    'Relevant healthcare qualification and registration',
    'Valid professional registration with AHPRA',
    'Experience in healthcare or medical setting',
    'Strong interpersonal and communication skills',
    'Commitment to quality patient care',
    'Ability to work collaboratively in a team',
  ];
}

/* ================= MAIN ENTRY POINTS ================= */

/**
 * URL-only (no API). Fast with no network call.
 * Use as a fallback or when speed matters more than data richness.
 */
export function getJobDataFromSlugOnly(slug: string) {
  try {
    const { title, location, id } = parseJobSlug(slug);
    console.log('📌 Parsed from URL:', { title, location, id });

    const finalBaseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || 'https://medfuturenextjs-seo.vercel.app';

    const metadata = generateJobMetadata({ jobTitle: title, location });
    const schema = generateJobSchema({
      jobTitle: title,
      location,
      jobId: id,
      baseUrl: finalBaseUrl,
      slug,
      job: null,
    });

    return {
      success: true,
      schema,
      metadata,
      slug: { full: slug, id, title, location },
    };
  } catch (error) {
    console.error('Error in getJobDataFromSlugOnly:', error);
    return { success: false, error: 'Failed to generate data from URL', schema: null, metadata: null };
  }
}

/**
 * Full enrichment: parses slug → fetches real job from backend → builds rich schema/metadata.
 * Falls back to URL-only data automatically if the API fetch fails.
 *
 * Mirrors exactly what JobDescription (PermenantDes.tsx) does:
 *   apiGet<{ data: Job }>(`web/jobdetails/${jobId}`)
 *
 * But runs server-side, so CORS is not a concern.
 */
export async function getJobDataWithApiEnrichment(slug: string) {
  const { title, location, id } = parseJobSlug(slug);
  console.log('📌 Parsed from URL:', { title, location, id });

  const finalBaseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || 'https://medfuturenextjs-seo.vercel.app';

  const job = await fetchJobById(id);

  // Use real title/state from API if available
  const resolvedTitle = job?.job_title ? extractJobTitleOnly(job.job_title) : title;
  const resolvedLocation = job?.state?.name || location;

  const metadata = generateJobMetadata({
    jobTitle: resolvedTitle,
    location: resolvedLocation,
    jobBrief: job?.job_brief,
  });

  const schema = generateJobSchema({
    jobTitle: resolvedTitle,
    location: resolvedLocation,
    jobId: id,
    baseUrl: finalBaseUrl,
    slug,
    job, // passes all real fields into the schema
  });

  console.log(
    job
      ? `✅ Schema enriched with real API data for: ${resolvedTitle}`
      : `⚠️  API unavailable – schema generated from URL for: ${resolvedTitle}`
  );

  return {
    success: true,
    schema,
    metadata,
    job,   // raw Job object exposed to page if needed
    slug: { full: slug, id, title: resolvedTitle, location: resolvedLocation },
  };
}

/** Stringify schema for <script type="application/ld+json"> injection */
export function createSchemaScript(schema: Record<string, unknown>): string {
  return JSON.stringify(schema);
}