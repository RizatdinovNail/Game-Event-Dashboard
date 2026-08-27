import { getRankings } from "@/app/lib/rankings";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import ButtonLink from "../ui/ButtonLink";

export default function RankingPreview() {
  const rankings = getRankings();
  const tableHeadings = ["Pos", "Driver", "Nat", "Points", "Wins"];

  return (
    <section
      className="bg-(--secondary-bg) min-h-[62vh] flex flex-col gap-8 px-4 py-10 border-t border-(--primary-text) justify-center "
      aria-labelledby="rankings-heading"
    >
      <div className="mx-auto flex max-w-400 w-full justify-between max-lg:flex-col max-lg:gap-12 ">
        <article className="flex flex-col gap-4 max-w-110">
          <h2 className="uppercase text-(--primary-text) font-bold text-5xl">
            Global leaderboard
          </h2>
          <p className="text-(--third-text)">
            The current standings for the Apex Pro Championship. Points are
            updated immediately following official event verification.
          </p>

          <ButtonLink variant="primary" href="/rankings">
            View Full Rankings
            <ChevronRightIcon aria-hidden="true"></ChevronRightIcon>
          </ButtonLink>
        </article>

        <table className="w-full text-left text-sm table-fixed max-w-250">
          <thead className="border-b text-sm uppercase text-(--third-text) bg-(--third-bg) text-center ">
            <tr>
              {tableHeadings.map((heading) => (
                <th key={heading} className="px-6 py-4 font-semibold">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="text-(--primary-text) text-center">
            {rankings.slice(0, 5).map((ranking) => (
              <tr
                key={ranking.playerId}
                className="bg-(--primary-bg) border-b border-(--third-text)"
              >
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center justify-center w-6 h-6 rounded-sm text-xs font-bold ${
                      ranking.position === 1
                        ? "bg-amber-500 text-amber-950"
                        : ranking.position === 2
                          ? "bg-slate-300 text-slate-900"
                          : ranking.position === 3
                            ? "bg-amber-700 text-white"
                            : "text-muted-foreground"
                    }`}
                  >
                    {ranking.position}
                  </span>
                </td>
                <td className="px-6 py-4">{ranking.playerName}</td>
                <td className="text-(--secondary-text) px-6 py-4">
                  {ranking.country}
                </td>
                <td className="font-bold px-6 py-4 ">{ranking.points}</td>
                <td className="text-(--secondary-text) px-6 py-4">
                  {ranking.wins}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
