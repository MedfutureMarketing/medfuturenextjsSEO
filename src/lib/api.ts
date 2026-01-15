// lib/api.ts

// export const API_BASE_URL = "http://127.0.0.1:8000/api";
export const API_BASE_URL = "https://stage.medfuture.com.au/medadminapi/public/api";

const getBaseUrl = () => {
  return API_BASE_URL || '';
};

export async function apiGet<T>(endpoint: string): Promise<T> {
  const baseUrl = getBaseUrl();
  const response = await fetch(`${baseUrl}/${endpoint}`, {
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
    throw new Error(errorMessage);
  }

  // Check if response is JSON
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return response.json();
  } else {
    const text = await response.text();
    throw new Error(`Expected JSON but received: ${text.substring(0, 100)}`);
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

  const response = await fetch(`${baseUrl}/${endpoint}`, {
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

    throw new Error(errorMessage);
  }

  const contentType = response.headers.get("content-type");
  if (contentType?.includes("application/json")) {
    return response.json() as Promise<TResponse>;
  }

  return {} as TResponse;
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