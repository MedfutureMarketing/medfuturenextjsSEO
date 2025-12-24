// export const API_BASE_URL = "http://127.0.0.1:8000/api";
export const API_BASE_URL = "https://stage.medfuture.com.au/medadminapi/public/api";

export async function apiGet<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${API_BASE_URL}/${endpoint}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`GET ${endpoint} failed`);
  }

  return res.json() as Promise<T>;
}

export async function apiPost<T, B = unknown>(endpoint: string, body: B): Promise<T> {
  const res = await fetch(`${API_BASE_URL}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`POST ${endpoint} failed`);
  }

  return res.json() as Promise<T>;
}
