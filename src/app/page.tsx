import { getEvents } from "@/services/events";
import HomeView from "@/components/Home/HomeView"

export default async function HomePage() {
  const data = await getEvents();
  const events = data.result;

  return <HomeView events={events} />;
}
