"use client";

import { useState } from "react";
import {
  getCompletedEvents,
  getEvents,
  getLiveEvents,
  getUpcomingEvents,
} from "../lib/events";
import EventCard from "../components/events/EventCard";
import ButtonLink from "../components/ui/ButtonLink";
import { formatDate } from "../hooks/formatDate";

export default function EventsPage() {
  const [events, setEvents] = useState(getEvents());
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = [
    {
      name: "All",
      getEvents: getEvents,
    },
    {
      name: "Live",
      getEvents: getLiveEvents,
    },
    {
      name: "Upcoming",
      getEvents: getUpcomingEvents,
    },
    {
      name: "Completed",
      getEvents: getCompletedEvents,
    },
  ];

  return (
    <section>
      <section
        className="bg-(--secondary-bg) min-h-[20vh] flex justify-center flex-col gap-8 px-4 py-10"
        aria-labelledby="events-page-heading"
      >
        <div className="mx-auto flex max-w-400 w-full justify-between flex-col gap-4 p-8">
          <h1
            className="text-(--primary-text) text-6xl uppercase font-bold"
            id="events-page-heading"
          >
            Events
          </h1>
          <p className="text-(--third-text) max-w-190 text-xl">
            Explore current and upcoming competitive events across all supported
            racing platforms.
          </p>
        </div>
      </section>
      <section>
        <div className="mx-auto flex max-w-400 w-full justify-between flex-col gap-8 p-6">
          <div className="flex justify-between">
            <ul className="gap-4 bg-(--secondary-bg) p-2 rounded-md text-[1.1rem] grid grid-cols-4 max-sm:grid-cols-2 text-center">
              {filters.map((filter) => (
                <li
                  key={filter.name}
                  className={`${activeFilter === filter.name ? "text-(--primary-text) bg-(--primary-bg)" : "text-(--third-text)"}  py-2 px-4 rounded-md`}
                >
                  <button
                    className="uppercase cursor-pointer"
                    type="button"
                    aria-pressed={activeFilter === filter.name}
                    onClick={() => {
                      setActiveFilter(filter.name);
                      setEvents(filter.getEvents());
                    }}
                  >
                    {filter.name}
                  </button>
                </li>
              ))}
            </ul>
            <div></div>
          </div>

          <p className="text-(--third-text) uppercase">
            Showing {events.length} {events.length > 1 ? "events" : "event"}
          </p>
          <ul className="grid grid-cols-4 mx-auto max-w-400 w-full gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1 items-stretch">
            {events.map((event) => (
              <li key={event.id}>
                <EventCard variant="live" event={event}>
                  <div className="bg-(--primary-bg) min-h-[20vh] relative">
                    <div className="mx-auto max-w-120 w-full py-4 px-4">
                      <p
                        className={`w-fit px-6 py-0.5 text-(--primary-text) rounded-sm border border-(--primary-bg) ${event.status === "live" ? "bg-(--secondAccentColor)" : "bg-(--secondary-text) "}`}
                      >
                        {event.status}
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
                    <ButtonLink
                      href={`/events/${event.id}`}
                      variant="cardButton"
                    >
                      {event.status === "live"
                        ? "Watch Live"
                        : event.status === "upcoming"
                          ? "view details"
                          : "view results"}
                    </ButtonLink>
                  </div>
                </EventCard>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
}
