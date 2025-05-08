import Link from "next/link";

export default function Home() {
  return (
    <section className="container mx-auto flex flex-col items-center gap-8 px-5 py-24 text-center">
      <h1 className="bg-gradient-to-br from-black to-stone-600 bg-clip-text font-display text-5xl font-extrabold tracking-tight text-transparent md:text-7xl">
        AI-powered legal tools, one click away
      </h1>
      <p className="max-w-2xl text-lg text-muted-foreground">
        Browse vetted AI assistants for contract analysis, compliance checks and
        more — all GDPR-ready and deployable to your stack in minutes.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/catalog"
          className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-white shadow hover:bg-primary/90"
        >
          Explore Catalog
        </Link>
        <Link
          href="/pricing"
          className="rounded-md border border-input px-6 py-3 text-sm font-medium transition-colors hover:bg-accent"
        >
          View Pricing
        </Link>
      </div>
    </section>
  );
}