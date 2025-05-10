// app/loesungen/documentation-automation/page.tsx
import SolutionsLayout from "../layout";
import { BookOpen } from "lucide-react";

export default function DocumentationAutomationPage() {
  return (
    <SolutionsLayout>
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 rounded-2xl border-t-4 border-blue-500 bg-white p-8 shadow-xl">
        <BookOpen className="h-16 w-16 text-blue-500" />
        <h2 className="text-3xl font-bold">Dokumentation Automation</h2>
        <p className="text-center text-gray-700">
          Automatisieren Sie die Erstellung, Organisation und Pflege all Ihrer
          juristischen Dokumente. Von Vorlagen-Management bis Versionierung –
          alles nahtlos aus einer Hand.
        </p>
        <button className="mt-4 rounded-full bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-600">
          Jetzt starten
        </button>
      </div>
    </SolutionsLayout>
  );
}
