"use client";

import Link from "next/link";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

const links = [
  { href: "/catalog", label: "Catalog" },
  { href: "/solutions", label: "Solutions" },
  { href: "/resources", label: "Resources" },
  { href: "/pricing", label: "Pricing" },
  { href: "/docs", label: "Documentation" },
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
      <Link href="/" className="font-display text-lg font-bold">
        Legal<span className="text-primary">AI</span>
      </Link>

      {/* ── Centered Tabs ────────────────────────────── */}
      <ul className="hidden md:flex items-center gap-6">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
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
            <button className="rounded-md bg-primary px-4 py-2 text-sm text-black shadow hover:bg-primary/90">
              Sign in
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
}