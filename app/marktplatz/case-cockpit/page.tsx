// app/loesungen/case-cockpit/page.tsx
import SolutionsLayout from "../layout";
import { Briefcase } from "lucide-react";

export default function CaseCockpitPage() {
  return (
    <SolutionsLayout>
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 rounded-2xl border-t-4 border-yellow-500 bg-white p-8 shadow-xl">
        <Briefcase className="h-16 w-16 text-yellow-500" />
        <h2 className="text-3xl font-bold">Case Cockpit</h2>
        <p className="text-center text-gray-700">
          Ihr zentrales Dashboard für alle Mandate und Fälle: Status-Tracking,
          Fristen-Management und Team-Kollaboration in einer übersichtlichen
          Oberfläche.
        </p>
        <button className="mt-4 rounded-full bg-yellow-500 px-6 py-3 font-medium text-white transition hover:bg-yellow-600">
          Case Cockpit öffnen
        </button>
      </div>
    </SolutionsLayout>
  );
}
  