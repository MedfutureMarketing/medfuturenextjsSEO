export type SeoSearchParams = {
  keyword?: string;
  country?: string;
  state?: string;
  region?: string;
  suburb?: string;
};

/* ----------------------------------
 Helpers
-----------------------------------*/
export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function unslugify(value: string) {
  return value
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/* ----------------------------------
 Build SEO URL
-----------------------------------*/
export function buildJobSearchUrl({
  keyword,
  country,
  state,
  region,
  suburb,
}: SeoSearchParams) {
  let path = "/permanent";
  const type = typeof window !== "undefined" && window?.location?.pathname?.split("/")[1];
  if (type === "locum") {
    path = "/locum";
  } else if (type === "international") {
    path = "/international";
  }

  if (keyword) {
    path += `/${slugify(keyword)}-jobs`;
  } else {
    path += `/jobs`;
  }

  // Use the most specific location available
  const location = suburb || region || state || country;

  if (location) {
    path += `/in-${slugify(location)}`;
  }

  return path;
}

/* ----------------------------------
 Parse SEO URL → Filters
-----------------------------------*/
export function parseJobSearchUrl(pathname: string): SeoSearchParams {
  const parts = pathname.split("/").filter(Boolean);

  const result: SeoSearchParams = {};

  // Extract keyword
  const jobPart = parts.find((p) => p.endsWith("-jobs"));
  if (jobPart) {
    result.keyword = unslugify(jobPart.replace("-jobs", ""));
  }

  // Extract location
  const locationPart = parts.find((p) => p.startsWith("in-"));

  if (locationPart) {
    const location = unslugify(locationPart.replace("in-", ""));
    
    // Only assign to ONE field - the most specific one that matches
    // This will be determined by the component's selected values
    // For now, we'll pass it to all and let the backend handle priority
    result.suburb = location;
    result.region = location;
    result.state = location;
    result.country = location;
  }

  return result;
}

export type LocationMap = Record<
  string,
  {
    regions: Record<string, string[]>;
  }
>;

/* ----------------------------------
 Helper: Detect Location Type
 Call this from your API to determine which field to use
-----------------------------------*/
export async function detectLocationType(
  locationName: string,
  locationData: LocationMap
): Promise<{
  country?: string;
  state?: string;
  region?: string;
  suburb?: string;
}> {
  const result: SeoSearchParams = {};

  // State match
  if (locationData[locationName]) {
    result.state = locationName;
    return result;
  }

  // Region / Suburb match
  for (const state of Object.keys(locationData)) {
    const regions = locationData[state].regions;

    if (regions[locationName]) {
      result.state = state;
      result.region = locationName;
      return result;
    }

    for (const region of Object.keys(regions)) {
      if (regions[region].includes(locationName)) {
        result.state = state;
        result.region = region;
        result.suburb = locationName;
        return result;
      }
    }
  }

  // Fallback → country
  result.country = locationName;
  return result;
}
