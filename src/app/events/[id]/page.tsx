import { getEvents } from "@/services/events";
import EventsView from "@/components/events/EventsView";

export default async function EventsPage() {
  const data = await getEvents();
  const events = data.result;

  return <EventsView events={events} />;
}
