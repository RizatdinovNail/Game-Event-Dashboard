import { players } from "../data/players";

export function getPlayers() {
  return players;
}

export function getPlayerById(id: string) {
  return players.find((player) => player.id === id);
}
