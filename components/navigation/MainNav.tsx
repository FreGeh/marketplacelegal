"use client";

import Link from "next/link";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

const links = [
  { href: "/catalog", label: "Katalog" },
  { href: "/solutions", label: "Lösungen" },
  { href: "/resources", label: "Ressourcen" },
  { href: "/pricing", label: "Preise & Pakete" },
  { href: "/docs", label: "Dokumentation" },
];

/* optional: pass `className`, `orientation` props to reuse in footer */
export default function MainNav({
  className,
}: {
  className?: string;
}) {
  return (
    <nav
      className={cn(
        "flex w-full items-center justify-between gap-4 py-4",
        className,
      )}
    >
      {/* ── Logo / Brand ─────────────────────────────── */}
      <Link href="/" className="font-display text-xl font-bold">
        Rechts<span className="text-primary">KI Marktplatz</span>
      </Link>

      {/* ── Centered Tabs ────────────────────────────── */}
      <ul className="hidden md:flex items-center gap-6">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* ── Auth buttons ─────────────────────────────── */}
      <div className="flex items-center gap-3">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="rounded-md bg-primary px-4 py-2 text-lg text-black shadow hover:bg-primary/90">
              Sign in
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
}