import { results } from "../data/results";

export function getResults() {
  return results;
}

export function getResultById(id: string) {
  return results.find((result) => result.id === id);
}

export function getResultsByEvent(id: string) {
  return results.find((result) => result.eventId === id);
}

export function getResultsByPlayer(id: string) {
  return results.find((result) => result.playerId === id);
}
