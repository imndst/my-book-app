const BASE_URL = "https://bdcast.gishot.ir/api";

export async function fetcher<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("API Error");
  }

  return res.json();
}
