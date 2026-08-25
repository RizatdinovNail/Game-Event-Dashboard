import { games } from "../data/games";

export function getAllGames() {
  return games;
}

export function getGameById(id: string) {
  return games.find((game) => game.id === id);
}
