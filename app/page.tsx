import Link from "next/link";

export default function Home() {
  return (
    <section className="container mx-auto flex flex-col items-center gap-8 px-5 py-24 text-center">
      <h1 className="bg-gradient-to-br from-black to-stone-600 bg-clip-text font-display text-5xl font-extrabold leading-snug tracking-tight text-transparent md:text-7xl md:leading-snug">
        LegalAI GPT <br /> für den Mittelstand
      </h1>
      <p className="text-muted-foreground max-w-2xl text-2xl">
        Sofortige Antworten per Chatbot – 
        bei Spezialfragen unkompliziert mit Top-Fachanwälten vernetzt.
      </p>
      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center sm:gap-4">
        <Link
          href="/chat"
          className="inline-flex w-full items-center justify-center rounded-md
               bg-indigo-500 px-6 py-3 text-2xl font-medium text-white
               shadow transition hover:bg-indigo-600 focus:outline-none focus-visible:ring
               focus-visible:ring-indigo-300 sm:w-auto"
        >
          💬 Chat
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/catalog"
          className="bg-primary hover:bg-primary/90 rounded-md px-6 py-3 text-xl font-medium text-black shadow"
        >
          Andere Apps entdecken
        </Link>
      </div>
    </section>
  );
}