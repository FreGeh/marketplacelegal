// app/loesungen/page.tsx
"use client";

import Link from "next/link";
import { FileText, Lock, BookOpen, Briefcase } from "lucide-react";

const solutions = [
  {
    href: "contractcheck",
    label: "ContractCheck",
    icon: <FileText className="h-8 w-8" />,
    color: "bg-indigo-100",
    description: "Verträge automatisch prüfen & optimieren.",
  },
  {
    href: "nda-check",
    label: "NDACheck",
    icon: <Lock className="h-8 w-8" />,
    color: "bg-green-100",
    description: "Geheimhaltungs­vereinbarungen schnell absichern.",
  },
  {
    href: "dokumentation-automation",
    label: "Dokumentation Automation",
    icon: <BookOpen className="h-8 w-8" />,
    color: "bg-blue-100",
    description: "Dokumente automatisch erstellen & pflegen.",
  },
  {
    href: "case-cockpit",
    label: "Case Cockpit",
    icon: <Briefcase className="h-8 w-8" />,
    color: "bg-yellow-100",
    description: "Fälle & Projekte zentral managen.",
  },
];

export default function SolutionsPage() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {solutions.map(({ href, label, icon, color, description }) => (
        <Link
          key={href}
          href={`/loesungen/${href}`}
          className={`flex flex-col items-start rounded-2xl p-6 shadow transition hover:shadow-xl ${color}`}
        >
          <div className="mb-4">{icon}</div>
          <h2 className="mb-2 text-2xl font-semibold">{label}</h2>
          <p className="text-sm text-gray-700">{description}</p>
        </Link>
      ))}

      {/* Platzhalter für kommende Lösungen */}
      {Array(2)
        .fill(null)
        .map((_, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-100 p-6"
          >
            <div className="mb-4 h-8 w-8 rounded bg-gray-300" />
            <h2 className="text-xl font-medium text-gray-500">
              Bald verfügbar
            </h2>
          </div>
        ))}
    </div>
  );
}
