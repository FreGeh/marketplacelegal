"use client";

import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  Lock,
  BookOpen,
  Briefcase,
} from "lucide-react";

const links = [
  { href: "/chat", label: "Chat" },
  { href: "/marktplatz", label: "Marktplatz" },
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
      {/* Logo / Brand */}
      <Link href="/" className="font-display text-xl font-bold">
        <span className="text-primary">LegaLista</span>
      </Link>

      {/* Centered Tabs */}
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
      </ul>

      {/* Auth buttons */}
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
