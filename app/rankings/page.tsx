export default function Rankings() {
  return (
    <section>
      <section
        className="bg-(--secondary-bg) min-h-[20vh] flex justify-center flex-col gap-8 px-4 py-10"
        aria-labelledby="rankings-page-heading"
      >
        <div className="mx-auto flex max-w-400 w-full justify-between flex-col gap-4 p-8">
          <h1
            className="text-(--primary-text) text-6xl uppercase font-bold"
            id="rankings-page-heading"
          >
            DRIVER RANKINGS
          </h1>
          <p className="text-(--third-text) max-w-190 text-xl">
            Track the leading competitors throughout the season. Rankings are
            updated globally after every official event.
          </p>
        </div>
      </section>
      <section></section>
    </section>
  );
}
