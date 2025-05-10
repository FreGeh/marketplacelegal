// app/loesungen/nda-check/page.tsx
import SolutionsLayout from "../layout";
import { Lock } from "lucide-react";

export default function NDACheckPage() {
  return (
    <SolutionsLayout>
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 rounded-2xl border-t-4 border-green-500 bg-white p-8 shadow-xl">
        <Lock className="h-16 w-16 text-green-500" />
        <h2 className="text-3xl font-bold">NDACheck</h2>
        <p className="text-center text-gray-700">
          Schützen Sie Ihre vertraulichen Informationen mit unserer
          automatisierten NDA-Prüfung – klare Farbcodierung, sofortige
          Anpassungsvorschläge, rechtssicher dank Top-Rechts­anwälten.
        </p>
        <button className="mt-4 rounded-full bg-green-500 px-6 py-3 font-medium text-white transition hover:bg-green-600">
          NDACheck öffnen
        </button>
      </div>
    </SolutionsLayout>
  );
}
