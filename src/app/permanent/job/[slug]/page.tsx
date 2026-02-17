import type { Metadata } from "next";
// import { getPageMetadata } from "@/lib/getPageMetadata";
import JobDescription from "@/components/JobBoard/SingleJobPage/PermenantDes";
import { extractJobIdFromSlug } from "@/lib/urlUtils";

type Params = Promise<{ slug: string | string[] }>;

export async function generateMetadata(props: { 
  params: Params 
}): Promise<Metadata> {
  const params = await props.params;
  const slugString = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  
  // Extract job ID from slug
  const jobId = extractJobIdFromSlug(slugString);
  
  // Parse slug format: "general-practitioner-job-sydney-MP32751"
  const slugParts = slugString.split('-job-');
  const jobTitle = slugParts[0]?.replace(/-/g, ' ') || 'Job';
  const locationAndId = slugParts[1] || '';
  const locationParts = locationAndId.split('-');
  const location = locationParts.slice(0, -1).join(' ') || 'Location';
  
  // Format to title case
  const formatTitleCase = (str: string) =>
    str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  
  const formattedTitle = formatTitleCase(jobTitle);
  const formattedLocation = formatTitleCase(location);

  const metaTitle = `${formattedTitle} Jobs in ${formattedLocation}`;
  const metaDescription = `${formattedTitle} position available in ${formattedLocation}. Apply now for this opportunity.`;

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: 'website',
    },
  };
}

export default async function JobPage(props: { params: Params }) {
  const params = await props.params;
  const slugString = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const jobId = extractJobIdFromSlug(slugString);

  return (
    <div>
      <section className="min-h-screen flex flex-col">
        <JobDescription jobId={jobId} />
      </section>
    </div>
  );
}