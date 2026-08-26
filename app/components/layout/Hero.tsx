import { Circle } from "lucide-react";
import ButtonLink from "../ui/ButtonLink";

export default function Hero() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-start overflow-hidden border-b border-border w-full"
      area-labelledby="hero-title"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-(--primary-bg)/20"
      />
      <div
        className="absolute inset-0 -z-10 opacity-40 mix-blend-luminosity bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512749355846-eb142b5cc4a5?q=80&w=2070&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-transparent via-(--primary-bg)/60 to-(--primary-bg) " />
      <div className="mx-auto flex max-w-400 w-full justify-between flex-col gap-4 max-md:max-w-xl max-xl:max-w-5xl max-lg:max-w-3xl px-4">
        <div className="uppercase flex bg-black/50 px-3 gap-4 text-[0.8rem] items-center border border-(--third-text) py-1 w-fit backdrop-blur-md">
          <Circle
            aria-hidden="true"
            className="fill-(--accentColor) text-(--accentColor)"
            size={12}
          ></Circle>
          <p className="text-(--third-text)">competitive motorsport</p>
        </div>
        <h1
          className="uppercase flex flex-col text-(--primary-text) text-8xl font-bold max-md:text-6xl"
          id="hero-title"
        >
          The next race
          <span className="text-(--accentColor)">starts here.</span>
        </h1>
        <p className="text-xl text-(--secondary-text) font-semibold max-w-xl max-md:text-lg max-sm:text-md">
          Join the elite. Compete in premier events, climb the global rankings,
          and prove your speed on the world's most demanding circuits.
        </p>
        <div className="flex gap-4 max-sm:flex-col">
          <ButtonLink variant="primary" href="/events">
            explore events
          </ButtonLink>
          <ButtonLink variant="secondary" href="/rankings">
            view rankings
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
