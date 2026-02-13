type SharePlatform = 'facebook' | 'twitter' | 'linkedin' | 'email' | 'whatsapp' | 'copy';

interface ShareConfig {
  baseUrl: string;
  jobTitle: string;
  jobId: number;
  platform: SharePlatform;
}

export function generateShareUrl(config: ShareConfig): string {
  const { baseUrl, jobTitle, jobId, platform } = config;
  
  // Add UTM parameters
  const utm_source = platform === 'copy' ? 'direct' : platform;
  const utm_medium = platform === 'email' ? 'email' : platform === 'copy' ? 'clipboard' : 'social';
  const utm_campaign = 'job_share';
  
  const jobUrl = new URL(baseUrl);
  jobUrl.searchParams.append('utm_source', utm_source);
  jobUrl.searchParams.append('utm_medium', utm_medium);
  jobUrl.searchParams.append('utm_campaign', utm_campaign);
  jobUrl.searchParams.append('utm_content', `job_${jobId}`);
  
  const encodedUrl = encodeURIComponent(jobUrl.toString());
  const encodedTitle = encodeURIComponent(jobTitle);
  
  const shareUrls: Record<SharePlatform, string> = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=Check out this job: ${encodedTitle}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    email: `mailto:?subject=Check out this job: ${encodedTitle}&body=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    copy: jobUrl.toString(),
  };
  
  return shareUrls[platform];
}