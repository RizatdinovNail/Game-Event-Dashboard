import { events } from "../data/events";

export function getEvents() {
  return events;
}

export function getEventById(id: string) {
  return events.find((event) => event.id === id);
}

export function getUpcomingEvents() {
  return events.filter((event) => event.status === "upcoming");
}

export function getLiveEvents() {
  return events.filter((event) => event.status === "live");
}

export function getCompletedEvents() {
  return events.filter((event) => event.status === "completed");
}

export function getEventByGame(gameId: string) {
  return events.filter((event) => event.gameId === gameId);
}
