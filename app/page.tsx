import Link from "next/link";

export default function Home() {
  return (
    <section className="container mx-auto flex flex-col items-center gap-8 px-5 py-24 text-center">
      <h1 className="bg-gradient-to-br from-black to-stone-600 bg-clip-text font-display text-5xl leading-snug font-extrabold tracking-tight text-transparent md:text-7xl md:leading-snug">
        KI-gestützte Rechts-Apps<br />für den Mittelstand
      </h1>
      <p className="max-w-2xl text-2xl text-muted-foreground">
        Automatisieren Sie jegliche aufwendigen Rechtsaufgaben mit von Fach­anwälten mitentwickelten Apps
        – die sofort in Ihrer bestehenden IT-Landschaft einsatzbereit sind.
      </p>
      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center sm:gap-4">
        <Link
          href="/catalog"
          className="inline-flex w-full sm:w-auto items-center justify-center
               rounded-md bg-indigo-500 px-6 py-3 text-lg font-medium
               text-white shadow transition hover:bg-indigo-600 focus:outline-none
               focus-visible:ring focus-visible:ring-indigo-300"
        >
          🚀 Verträge automatisieren
        </Link>

        <Link
          href="/catalog"
          className="inline-flex w-full sm:w-auto items-center justify-center
               rounded-md bg-indigo-500 px-6 py-3 text-lg font-medium
               text-white shadow transition hover:bg-indigo-600 focus:outline-none
               focus-visible:ring focus-visible:ring-indigo-300"
        >
          🔒 Compliance & DSGVO meistern
        </Link>

        <Link
          href="/catalog"
          className="inline-flex w-full sm:w-auto items-center justify-center
               rounded-md bg-indigo-500 px-6 py-3 text-lg font-medium
               text-white shadow transition hover:bg-indigo-600 focus:outline-none
               focus-visible:ring focus-visible:ring-indigo-300"
        >
          💬 HR rechtssicher gestalten
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/catalog"
          className="rounded-md bg-primary px-6 py-3 text-xl font-medium text-black shadow hover:bg-primary/90"
        >
          Apps entdecken
        </Link>
        <Link
          href="/pricing"
          className="rounded-md border border-input px-6 py-3 text-xl font-medium transition-colors hover:bg-accent"
        >
          Preise & Pakete
        </Link>
      </div>
    </section>
  );
}