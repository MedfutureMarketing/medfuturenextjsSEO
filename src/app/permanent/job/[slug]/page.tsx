import type { Metadata } from "next";
import { Suspense } from "react";
import JobDescription from "@/components/JobBoard/SingleJobPage/PermenantDes";
import {
  extractJobIdFromSlug,
  parseJobSlug,
  generateJobMetadata,
  formatTitleCase,
  type Job,
  type SlugSchemaData,
} from "@/lib/urlUtils";
import { apiGet } from "@/lib/api";

type Params = Promise<{ slug: string | string[] }>;

interface JobWithSalary extends Job {
  salary_min?: number;
  salary_max?: number;
}

/* ================= SLUG PARSER ================= */

/**
 * Parse slug once and return all data needed for both metadata and schema
 */
function parseSlug(slugString: string) {
  const { title, location, brief, id, schemaData } = parseJobSlug(slugString);

  const formattedTitle = formatTitleCase(title);
  const formattedLocation = formatTitleCase(location);
  const formattedBrief = brief
    ? brief.charAt(0).toUpperCase() + brief.slice(1)
    : '';

  return {
    jobId: id,
    jobTitle: title,
    location,
    brief: formattedBrief,
    formattedTitle,
    formattedLocation,
    schemaData,
    slugString,
  };
}

/* ================= METADATA ================= */

/**
 * Generate metadata purely from slug data — no API call needed.
 * Works on Vercel because all data is embedded in the URL.
 */
export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const params = await props.params;
  const slugString = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const { formattedTitle, formattedLocation, jobId, brief } =
    parseSlug(slugString);

  const metadata = generateJobMetadata({
    jobTitle: formattedTitle,
    location: formattedLocation,
    jobBrief: brief || undefined,
    jobId,
  });

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: metadata.openGraph,
    alternates: {
      canonical: `/permanent/job/${slugString}`,
    },
  };
}

/* ================= PAGE ================= */

/**
 * Main Job Page Component
 *
 * - Schema markup is built from slug data (schemaData) — no extra API call
 * - fetchJobData is still called once for the page content (JobDescription component)
 * - If fetchJobData succeeds, schema is enriched with live data
 * - If it fails (Vercel issue), schema still works from slug data
 */
export default async function JobPage(props: { params: Params }) {
  const params = await props.params;
  const slugString = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const { jobId, formattedTitle, formattedLocation, brief, schemaData } =
    parseSlug(slugString);

  // Optional: fetch live data to enrich schema even further
  // If this fails on Vercel, slug data is the fallback
  const jobData = await fetchJobData(jobId);

  // ── Schema Markup ──────────────────────────────────────────────────────────
  // Priority: live jobData > schemaData from slug > formatted slug fields
  const jobPostingSchema = buildJobPostingSchema({
    jobId,
    formattedTitle,
    formattedLocation,
    brief,
    schemaData,
    jobData,
  });

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />

      <section className="min-h-screen flex flex-col">
        <Suspense
          fallback={
            <div className="p-6 text-center text-gray-500">
              Loading job details...
            </div>
          }
        >
          <JobDescription jobId={jobId} />
        </Suspense>
      </section>
    </div>
  );
}

/* ================= SCHEMA BUILDER ================= */

interface SchemaBuilderParams {
  jobId: string;
  formattedTitle: string;
  formattedLocation: string;
  brief: string;
  schemaData: SlugSchemaData;
  jobData: JobWithSalary | null;
}

function buildJobPostingSchema({
  jobId,
  formattedTitle,
  formattedLocation,
  brief,
  schemaData,
  jobData,
}: SchemaBuilderParams) {
  // Use live data if available, otherwise fall back to slug schema data
  const title = jobData?.job_title || formattedTitle;
  const description =
    jobData?.job_brief ||
    brief ||
    schemaData.medical_practise_details ||
    `${formattedTitle} position available in ${formattedLocation}`;

  const profession = jobData?.profession?.name || schemaData.profession;
  const engagementType =
    jobData?.engagement_type?.name || schemaData.engagement_type;
  const state = jobData?.state?.name || schemaData.state || formattedLocation;
  const country = jobData?.country?.name || schemaData.country || "AU";

  const highlights =
    jobData?.highlights?.map((h) => h.name) || schemaData.highlights || [];

  const qualifications =
    jobData?.required_qualification_exp ||
    schemaData.required_qualification_exp ||
    "";

  const medicalDetails =
    jobData?.medical_practise_details || schemaData.medical_practise_details || "";

  const contactName =
    jobData?.first_contact_person_name || schemaData.contact_name;
  const contactNumber =
    jobData?.first_contact_number || schemaData.contact_number;
  const email = jobData?.email || schemaData.email;

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title,
    description,
    identifier: {
      "@type": "PropertyValue",
      name: "Job ID",
      value: jobId,
    },
    datePosted: new Date().toISOString().split("T")[0],
    validThrough: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0],
    employmentType: engagementType || "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: "Medfuture",
      sameAs: "https://www.medfuture.com.au",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: state,
        addressCountry: country,
      },
    },
    applicantLocationRequirements: {
      "@type": "Country",
      name: country,
    },
    ...(profession && { occupationalCategory: profession }),
    ...(highlights.length > 0 && {
      responsibilities: highlights.join(" | "),
    }),
    ...(qualifications && { qualifications }),
    ...(medicalDetails && { workHours: medicalDetails }),
    ...(contactName || contactNumber || email
      ? {
          applicationContact: {
            "@type": "ContactPoint",
            ...(contactName && { name: contactName }),
            ...(contactNumber && { telephone: contactNumber }),
            ...(email && { email }),
          },
        }
      : {}),
    // Salary if available from live data
    ...(jobData &&
    "salary_min" in jobData &&
    jobData.salary_min &&
    "salary_max" in jobData &&
    jobData.salary_max
      ? {
          baseSalary: {
            "@type": "MonetaryAmount",
            currency: "AUD",
            value: {
              "@type": "QuantitativeValue",
              minValue: jobData.salary_min,
              maxValue: jobData.salary_max,
              unitText: "YEAR",
            },
          },
        }
      : {}),
  };
}

/* ================= API ================= */

async function fetchJobData(jobId: string): Promise<JobWithSalary | null> {
  try {
    const res = await apiGet<{ data: JobWithSalary }>(`web/jobdetails/${jobId}`);
    return res?.data || null;
  } catch (error) {
    console.error("Error fetching job data:", error);
    return null;
  }
}