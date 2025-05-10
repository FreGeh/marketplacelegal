// app/loesungen/nda-check/page.tsx
import SolutionsLayout from "../layout";
import {
  Lock,
  UploadCloud,
  Clock,
  FileText,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

export default function NDACheckPage() {
  return (
    <SolutionsLayout>
      {/* Hero Card */}
      <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center gap-6 rounded-2xl border-t-4 border-green-500 bg-white p-8 shadow-xl transition hover:shadow-2xl">
        <Lock className="h-16 w-16 text-green-500" />
        <h2 className="text-3xl font-bold text-gray-800">NDACheck</h2>
        <p className="text-center text-gray-700">
          Schützen Sie Ihre vertraulichen Informationen mit unserer
          automatisierten NDA-Prüfung. Klare Farbcodierung, sofortige
          Anpassungsvorschläge und rechtssichere Ergebnisse, geprüft von
          Top-Rechtsanwälten.
        </p>
        <button className="mt-4 rounded-full bg-green-500 px-6 py-3 font-medium text-white transition hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300">
          NDACheck jetzt in der Cloud starten
        </button>
      </div>

      {/* Features & Stats Grid */}
      <div className="mx-auto mb-12 grid max-w-3xl grid-cols-1 gap-8 md:grid-cols-2">
        {/* Document Upload */}
        <div className="rounded-2xl border border-dashed border-green-200 bg-green-50 p-6 text-center transition hover:bg-green-100">
          <UploadCloud className="mx-auto mb-4 h-12 w-12 text-green-500" />
          <h3 className="mb-2 text-xl font-semibold text-gray-800">
            Dokument hochladen
          </h3>
          <p className="mb-4 text-gray-600">
            Ziehen Sie Ihre NDA-Datei hierher oder wählen Sie sie manuell aus.
          </p>
          <label className="inline-flex cursor-pointer items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-green-600 shadow transition hover:bg-white/90">
            Datei auswählen
            <input type="file" accept=".pdf,.docx" className="sr-only" />
          </label>
        </div>

        {/* Usage & Permissions */}
        <div className="space-y-6">
          {/* Last Usage */}
          <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow transition hover:shadow-lg">
            <Clock className="h-8 w-8 text-gray-500" />
            <div>
              <p className="text-sm text-gray-600">Letzte Nutzung</p>
              <p className="text-lg font-semibold text-gray-800">
                02. Mai 2025, 14:32
              </p>
            </div>
          </div>

          {/* Documents Processed */}
          <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow transition hover:shadow-lg">
            <FileText className="h-8 w-8 text-gray-500" />
            <div>
              <p className="text-sm text-gray-600">Verarbeitete NDAs</p>
              <p className="text-lg font-semibold text-gray-800">128</p>
            </div>
          </div>

          {/* Permission Status */}
          <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow transition hover:shadow-lg">
            <ShieldCheck className="h-8 w-8 text-gray-500" />
            <div>
              <p className="text-sm text-gray-600">Zugriffsrechte</p>
              <p className="text-lg font-semibold text-gray-800">
                Vollständig erteilt
              </p>
            </div>
          </div>

          {/* Request Access */}
          <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow transition hover:shadow-lg">
            <UserCheck className="h-8 w-8 text-gray-500" />
            <div className="flex-1">
              <p className="text-sm text-gray-600">Fehlende Berechtigungen</p>
              <p className="text-lg font-semibold text-gray-800">—</p>
            </div>
            <button className="rounded-full bg-green-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-600">
              Berechtigung anfragen
            </button>
          </div>
        </div>
      </div>

      {/* FAQ / Help Section */}
      <div className="mx-auto max-w-3xl space-y-6 rounded-2xl bg-white p-8 shadow-xl">
        <h3 className="text-2xl font-semibold text-gray-800">Häufige Fragen</h3>
        <ul className="space-y-4 text-gray-700">
          <li>
            <strong>Welche Dateiformate werden unterstützt?</strong>
            PDF, DOCX und TXT.
          </li>
          <li>
            <strong>Wie schnell erhalte ich Ergebnisse?</strong>
            Meist in unter 30 Sekunden.
          </li>
          <li>
            <strong>Ist meine Datei sicher?</strong>
            Ja – alle Daten werden verschlüsselt und DSGVO-konform verarbeitet.
          </li>
        </ul>
      </div>
    </SolutionsLayout>
  );
}
