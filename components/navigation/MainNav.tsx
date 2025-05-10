"use client";

import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";

const links = [
  { href: "/chat", label: "Chat" },
  { href: "/ressourcen", label: "Ressourcen" },
  { href: "/partner", label: "Partner" },
  { href: "/preise", label: "Preise" },
  { href: "/docs", label: "Dokumentation" },
];

export default function MainNav({ className }: { className?: string }) {
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
      <ul className="hidden items-center gap-6 md:flex">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-muted-foreground hover:text-foreground text-lg font-medium transition-colors"
            >
              {label}
            </Link>
          </li>
        ))}

        {/* Lösungen mit Hover-Dropdown */}
        <li className="group relative">
          <span className="text-muted-foreground hover:text-foreground cursor-pointer text-lg font-medium transition-colors">
            Lösungen
          </span>
          <ul className="invisible absolute left-0 mt-2 w-48 rounded-md bg-white opacity-0 shadow-lg transition-opacity group-hover:visible group-hover:opacity-100">
            <li>
              <Link
                href="/contract-check"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                ContractCheck
              </Link>
            </li>
            <li>
              <Link
                href="/nda-check"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                NDACheck
              </Link>
            </li>
            <li>
              <Link
                href="/dokumentation-automation"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Dokumentation Automation
              </Link>
            </li>
            <li>
              <Link
                href="/case-cockpit"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Case Cockpit
              </Link>
            </li>
          </ul>
        </li>
      </ul>

      {/* ── Auth buttons ─────────────────────────────── */}
      <div className="flex items-center gap-3">
        <SignedIn>
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Link
                label="Dashboard"
                labelIcon={<LayoutDashboard className="h-4 w-4" />}
                href="/dashboard"
              />
            </UserButton.MenuItems>
          </UserButton>
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-primary hover:bg-primary/90 rounded-md px-4 py-2 text-lg text-black shadow">
              Einloggen
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
}
