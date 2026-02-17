"use client";

import { Event } from "@/types/event";
import { useThemeStore } from "@/store/themeStore";
import Link from "next/link";

interface Props {
  events: Event[];
}

export default function EventsView({ events }: Props) {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 p-8">
      <h1 className="text-3xl font-bold mb-8">
        Events Page — Current Theme:{" "}
        <span className="font-mono">{theme}</span>
      </h1>

      <div className="grid gap-4">
        {events.map((event) => (
          <Link
            key={event.id}
            href={`/events/${event.id}`}
            className="border p-4 rounded bg-card text-card-foreground hover:scale-[1.02] transition"
          >
            <h2 className="font-bold">{event.name}</h2>
            <p className="text-sm">{event.location}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
