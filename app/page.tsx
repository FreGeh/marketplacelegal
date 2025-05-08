import Link from "next/link";

export default function Home() {
  return (
    <section className="container mx-auto flex flex-col items-center gap-8 px-5 py-24 text-center">
      <h1 className="bg-gradient-to-br from-black to-stone-600 bg-clip-text font-display text-5xl leading-snug font-extrabold tracking-tight text-transparent md:text-7xl md:leading-snug">
        KI-gestützte Rechts-Apps<br />für den Mittelstand
      </h1>
      <p className="max-w-2xl text-lg text-muted-foreground">
        Automatisieren Sie jegliche aufwendige Rechtsaufgaben mit von Fach­anwälten mitentwickelten Apps
        – die sofort in Ihrer bestehenden IT-Landschaft einsatzbereit sind.
      </p>
      <div className="flex justify-center gap-4">
        <Link href="/catalog">
          <a className="px-6 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition">
            🚀 Verträge automatisieren
          </a>
        </Link>

        <Link href="/catalog">
          <a className="px-6 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition">
            🔒 Compliance & DSGVO meistern
          </a>
        </Link>

        <Link href="/catalog">
          <a className="px-6 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition">
            👥 HR rechtssicher gestalten
          </a>
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/catalog"
          className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-black shadow hover:bg-primary/90"
        >
          Apps entdecken
        </Link>
        <Link
          href="/pricing"
          className="rounded-md border border-input px-6 py-3 text-sm font-medium transition-colors hover:bg-accent"
        >
          Preise & Pakete
        </Link>
      </div>
    </section>
  );
}