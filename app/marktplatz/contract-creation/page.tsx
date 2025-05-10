// app/loesungen/contract-creation/page.tsx
import SolutionsLayout from "../layout";
import { FileSignature } from "lucide-react";

export default function ContractCreationPage() {
  return (
    <SolutionsLayout>
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 rounded-2xl border-t-4 border-indigo-500 bg-white p-8 shadow-xl">
        <FileSignature className="h-16 w-16 text-indigo-500" />
        <h2 className="text-3xl font-bold">ContractCreation</h2>
        <p className="text-center text-gray-700">
          Erstellen Sie in wenigen Klicks rechts­sichere Verträge aus
          dynamischen Vorlagen. Flexible Bausteine, individuelle
          Anwalts-Kommentare und automatische Versionskontrolle.
        </p>
        <button className="mt-4 rounded-full bg-indigo-500 px-6 py-3 font-medium text-white transition hover:bg-indigo-600">
          ContractCreation starten
        </button>
      </div>
    </SolutionsLayout>
  );
}
