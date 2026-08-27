import { getLiveEvents, getUpcomingEvents } from "@/app/lib/events";
import { ChevronRight, Circle, MapPin, Users } from "lucide-react";
import Link from "next/link";
import EventCard from "../events/EventCard";
import { formatDate } from "@/app/hooks/formatDate";
import ButtonLink from "../ui/ButtonLink";

export default function UpcomingEvents() {
  const upcomingEvents = getUpcomingEvents();
  return (
    <section
      className="bg-(--primary-bg) min-h-[62vh] flex justify-center flex-col gap-8 px-4 py-10 border-t border-(--primary-text)"
      aria-labelledby="live-events-heading"
    >
      <div className="mx-auto flex max-w-400 w-full items-center justify-between">
        <h2 className="flex items-center gap-2 uppercase text-(--primary-text) text-4xl font-bold">
          Upcoming Events
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
          View All
          <span>
            <ChevronRight aria-hidden="true"></ChevronRight>
          </span>
        </Link>
      </div>
      <ul className="grid grid-cols-4 mx-auto max-w-400 w-full gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1 items-stretch">
        {upcomingEvents.slice(0, 4).map((event) => (
          <li key={event.id}>
            <EventCard variant="live" event={event}>
              <div className="bg-(--primary-bg) min-h-[20vh] relative">
                <div className="mx-auto max-w-120 w-full py-4 px-4">
                  <p className="bg-(--secondary-text) w-fit px-6 py-0.5 text-(--primary-text) rounded-sm border border-(--primary-bg)">
                    Upcoming
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-8">
                <p className="text-(--secondary-text) uppercase">
                  {formatDate(event.startDate)}
                </p>
                <h3 className="text-(--primary-text) text-2xl uppercase font-bold">
                  {event.name}
                </h3>
                <ButtonLink href={`/events/${event.id}`} variant="cardButton">
                  Details
                </ButtonLink>
              </div>
            </EventCard>
          </li>
        ))}
      </ul>
    </section>
  );
}
