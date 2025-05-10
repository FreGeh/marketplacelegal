// app/loesungen/compliance-check/page.tsx
import SolutionsLayout from "../layout";
import { FileBadge2 } from "lucide-react";

export default function ComplianceCheckPage() {
  return (
    <SolutionsLayout>
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 rounded-2xl border-t-4 border-purple-500 bg-white p-8 shadow-xl">
        <FileBadge2 className="h-16 w-16 text-purple-500" />
        <h2 className="text-3xl font-bold">ComplianceCheck</h2>
        <p className="text-center text-gray-700">
          Stellen Sie sicher, dass Ihre Verträge und Prozesse allen relevanten
          Gesetzen und Standards entsprechen – mit Echtzeit-Monitoring und
          individuellen Compliance-Reports.
        </p>
        <button className="mt-4 rounded-full bg-purple-500 px-6 py-3 font-medium text-white transition hover:bg-purple-600">
          ComplianceCheck starten
        </button>
      </div>
    </SolutionsLayout>
  );
}
