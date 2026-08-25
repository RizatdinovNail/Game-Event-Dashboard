import { Ranking } from "../types/ranking";
import { getPlayers } from "../lib/players";
import { getResults } from "../lib/results";

const players = getPlayers();
const results = getResults();

export function getRankings(): Ranking[] {
  const rankings = players.map((player) => {
    const playerResults = results.filter(
      (result) => result.playerId === player.id,
    );

    const points = playerResults.reduce(
      (total, result) => total + result.points,
      0,
    );

    const wins = playerResults.filter((result) => result.position === 1).length;

    const podiums = playerResults.filter(
      (result) => result.position <= 3,
    ).length;

    const events = playerResults.length;

    return {
      playerId: player.id,
      playerName: player.displayName,
      country: player.country,
      avatar: player.avatar,
      points,
      wins,
      podiums,
      events,
      position: 0,
    };
  });

  rankings.sort((a, b) => b.points - a.points);

  return rankings.map((ranking, index) => ({
    ...ranking,
    position: index + 1,
  }));
}

export function getPlayerRanking(id: string): Ranking | undefined {
  const rankings = getRankings();

  return rankings.find((ranking) => ranking.playerId === id);
}
