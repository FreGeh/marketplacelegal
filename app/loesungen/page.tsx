// app/loesungen/page.tsx
import Link from "next/link";
export default function SolutionsPage() {
  const sols = [
    { href: "contractcheck", label: "ContractCheck" },
    { href: "nda-check", label: "NDACheck" },
    { href: "dokumentation-automation", label: "Dokumentation Automation" },
    { href: "case-cockpit", label: "Case Cockpit" },
  ];
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {sols.map(({ href, label }) => (
        <Link
          key={href}
          href={`/loesungen/${href}`}
          className="flex items-center rounded-xl bg-white p-5 shadow transition hover:shadow-lg"
        >
          <span className="ml-3 text-xl font-medium">{label}</span>
        </Link>
      ))}
    </div>
  );
}
