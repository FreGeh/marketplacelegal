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
        Rechts<span className="text-primary">KI Marktplatz</span>
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

        {/* Lösungen mit Hover-Dropdown */}
        <li className="relative">
          <button className="text-muted-foreground hover:text-foreground flex items-center text-lg font-medium transition-colors focus:outline-none">
            Lösungen
          </button>

          <ul className="group invisible absolute left-0 top-full z-10 mt-2 w-56 rounded-lg bg-white py-1 opacity-0 shadow-lg transition-all duration-200 ease-in-out focus-within:visible focus-within:opacity-100 hover:visible hover:opacity-100">
            <li>
              <Link
                href="/loesungen/contractcheck"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
              >
                <FileText className="h-5 w-5 text-indigo-500" />
                ContractCheck
              </Link>
            </li>
            <li>
              <Link
                href="/loesungen/nda-check"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
              >
                <Lock className="h-5 w-5 text-green-500" />
                NDACheck
              </Link>
            </li>
            <li>
              <Link
                href="/loesungen/dokumentation-automation"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
              >
                <BookOpen className="h-5 w-5 text-blue-500" />
                Dokumentation Automation
              </Link>
            </li>
            <li>
              <Link
                href="/loesungen/case-cockpit"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
              >
                <Briefcase className="h-5 w-5 text-yellow-500" />
                Case Cockpit
              </Link>
            </li>
          </ul>
        </li>
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
