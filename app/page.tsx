import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import LiveEvents from "./components/layout/LiveEvents";
import RankingPreview from "./components/layout/RankingPreview";
import UpcomingEvents from "./components/layout/UpcomingEvents";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <LiveEvents></LiveEvents>
      <UpcomingEvents></UpcomingEvents>
      <RankingPreview></RankingPreview>
    </>
  );
}
