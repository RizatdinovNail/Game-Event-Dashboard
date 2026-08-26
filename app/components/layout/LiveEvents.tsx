import { getLiveEvents } from "@/app/lib/events";
import { ChevronRight, Circle, MapPin, Users } from "lucide-react";
import Link from "next/link";
import EventCard from "../events/EventCard";

export default function LiveEvents() {
  const liveEvents = getLiveEvents();
  return (
    <section
      className="bg-(--secondary-bg) min-h-[62vh] flex justify-center flex-col gap-8 px-4 py-10"
      aria-labelledby="live-events-heading"
    >
      <div className="mx-auto flex max-w-400 w-full items-center justify-between">
        <h2 className="flex items-center gap-2 uppercase text-(--primary-text) text-4xl font-bold">
          <span>
            <Circle
              aria-hidden="true"
              className="fill-(--accentColor) text-(--accentColor)"
              size={20}
            ></Circle>
          </span>
          Live now
        </h2>
        <Link
          href="/events"
          className="
          flex 
          gap-2 
          text-(--secondary-text) 
          uppercase 
          hover:text-(--primary-text) 
          transition-colors 
          duration-200 
          focus-visible:outline-none 
          focus-visible:ring-2 
          focus-visible:ring-(--accentColor)"
        >
          All live
          <span>
            <ChevronRight aria-hidden="true"></ChevronRight>
          </span>
        </Link>
      </div>
      <ul className="grid grid-cols-3 mx-auto max-w-400 w-full gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {liveEvents.map((event) => (
          <li key={event.id}>
            <EventCard variant="live" event={event}>
              <div className="bg-(--primary-bg) min-h-[20vh] relative">
                <div className="mx-auto max-w-120 w-full py-4 px-4">
                  <p className="bg-(--secondAccentColor) w-fit px-6 py-0.5 text-(--primary-text) rounded-sm">
                    Live
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6 p-8">
                <h3 className="text-(--primary-text) text-2xl uppercase font-bold">
                  {event.name}
                </h3>
                <div className="flex justify-between items-center">
                  <p className="flex items-center gap-2 text-(--third-text)">
                    <MapPin aria-hidden="true"></MapPin>
                    {event.location}
                  </p>
                  <p className="flex items-center gap-2 text-(--third-text)">
                    <Users aria-hidden="true"></Users>
                    {event.participants}{" "}
                    {event.participants === 1 ? "Driver" : "Drivers"}
                  </p>
                </div>
                <Link
                  href={`/events/${event.id}`}
                  className="
                uppercase 
                text-(--primary-text) 
                w-full 
                bg-(--secondary-bg) 
                py-2 
                text-center 
                font-bold 
                rounded-sm
                focus-visible:outline-none 
                focus-visible:ring-2 
                focus-visible:ring-(--accentColor)
                hover:bg-(--primary-bg)/10
                border
                border-(--secondary-bg)
                transition-colors
                duration-200"
                >
                  Watch Live
                </Link>
              </div>
            </EventCard>
          </li>
        ))}
      </ul>
    </section>
  );
}
