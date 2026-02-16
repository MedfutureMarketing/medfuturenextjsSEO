// lib/api.ts

/**
 * API Base URL - exported for components that need it
 * Use the public API for production
 */
export const API_BASE_URL = "https://stage.medfuture.com.au/medadminapi/public/api";

/**
 * Get the API base URL
 * - Uses environment variables if available
 * - Falls back to hardcoded production URL
 * - Works for both SSR (server) and CSR (client)
 */
const getBaseUrl = (): string => {
  // Check if we're on server or client
  const isServer = typeof window === 'undefined';

  if (isServer) {
    // Server-side (SSR): Use environment variable or hardcoded URL
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 
                   process.env.NEXT_PRIVATE_API_URL ||
                   API_BASE_URL;
    
    console.log('API Base URL (Server):', apiUrl);
    return apiUrl;
  }

  // Client-side (CSR): Use environment variable or hardcoded URL
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || API_BASE_URL;
  
  console.log('API Base URL (Client):', apiUrl);
  return apiUrl;
};

export async function apiGet<T>(endpoint: string): Promise<T> {
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}/${endpoint}`;
  
  console.log('🔵 API GET:', url);

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    });

    if (!response.ok) {
      let errorMessage = 'API request failed';
      try {
        const errorResponse = await response.json();
        errorMessage = errorResponse.message || errorMessage;
      } catch (e) {
        const textError = await response.text();
        errorMessage = textError || `HTTP error! status: ${response.status}`;
      }
      console.error('❌ API Error:', errorMessage);
      throw new Error(errorMessage);
    }

    // Check if response is JSON
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      console.log('✅ API Success:', url);
      return data;
    } else {
      const text = await response.text();
      console.error('❌ Expected JSON but received:', text.substring(0, 100));
      throw new Error(`Expected JSON but received: ${text.substring(0, 100)}`);
    }
  } catch (error) {
    console.error('❌ API Call Failed:', {
      url,
      error: error instanceof Error ? error.message : String(error),
    });
    throw error;
  }
}

export async function apiPost<
  TResponse,
  TInput extends Record<string, unknown>
>(
  endpoint: string,
  data: TInput
): Promise<TResponse> {
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}/${endpoint}`;

  console.log('🔵 API POST:', url);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      let errorMessage = "API request failed";

      try {
        const errorResponse: { message?: string } = await response.json();
        errorMessage = errorResponse.message ?? errorMessage;
      } catch {
        const text = await response.text();
        errorMessage = text || errorMessage;
      }

      console.error('❌ API Error:', errorMessage);
      throw new Error(errorMessage);
    }

    const contentType = response.headers.get("content-type");
    if (contentType?.includes("application/json")) {
      const data = await response.json();
      console.log('✅ API Success:', url);
      return data as Promise<TResponse>;
    }

    console.log('✅ API Success (no JSON response):', url);
    return {} as TResponse;
  } catch (error) {
    console.error('❌ API Call Failed:', {
      url,
      error: error instanceof Error ? error.message : String(error),
    });
    throw error;
  }
}

// Specific function for quick apply
export async function applyQuickApi(
  first_name: string,
  last_name: string,
  mobile: string,
  email: string,
  profession: string | number,
  cv: string,
  job_id: string | number,
  state: string,
  seniority: string,
  speciality: string | number,
  hear_about_us: string,
  message: string,
  subscribe_to_alerts?: boolean
) {
  try {
    const requestBody = {
      first_name,
      last_name,
      mobile,
      email,
      profession,
      cv,
      job_id,
      state,
      seniority,
      speciality,
      hear_about_us,
      message,
      subscribe_to_alerts,
    };

    console.log('Applying for job:', { job_id, email });
    return await apiPost('web/quick_apply/save', requestBody);
  } catch (error) {
    console.error('Error creating candidate profile:', error);
    throw error;
  }
}

// Check if candidate already applied
export async function checkAlreadyApplied(
  email: string,
  jobId: string | number
) {
  try {
    await apiPost<{ success: boolean }, { email: string; job_id: string | number }>(
      "web/quick_apply/check_already_applied",
      { email, job_id: jobId }
    );

    return { status: true };
  } catch (error: unknown) {
    return {
      status: false,
      message: error instanceof Error ? error.message : "Already applied",
    };
  }
}

// Check if candidate is registered
export async function checkCandidateRegistered(email: string) {
  try {
    await apiPost('web/quick_apply/check_candidate_registered', {
      email,
    });
    return {
      status: true,
    };
  } catch (e) {
    return {
      status: false,
    };
  }
}