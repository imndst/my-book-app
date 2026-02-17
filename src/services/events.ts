import { fetcher } from "./api";
import { EventsResponse } from "@/types/event";

export async function getEvents(): Promise<EventsResponse> {
  return fetcher<EventsResponse>("/events/Events");
}
