"use client";

import { FormEvent, useState, ReactNode } from "react";
import { Mic2, FileText } from "lucide-react";

type Message = {
  id: number;
  role: "user" | "bot";
  content: ReactNode;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [responseIndex, setResponseIndex] = useState(0);

  // Definiere hier Deine Mock-Antworten in der gewünschten Reihenfolge
  const mockResponses: ReactNode[] = [
    // 1. Antwort: Was ist wichtig bei der NDA-Prüfung + gezielte Rückfragen
    <>
      <p>
        Beim Prüfen einer <strong>NDA</strong> Ihres Autoherstellers sollten Sie
        vor allem auf diese Punkte achten:
      </p>
      <ul className="ml-4 list-inside list-disc">
        <li>
          <strong>Definition vertraulicher Informationen</strong> – Ist klar,
          welche Daten oder Dokumente geschützt sind?
        </li>
        <li>
          <strong>Laufzeit und Geltungsbereich</strong> – Für welchen Zeitraum
          und in welchen Ländern gilt die Geheimhaltung?
        </li>
        <li>
          <strong>Ausnahmen</strong> – Welche Informationen (z. B. bereits
          öffentlich bekannt) sind von der Vertraulichkeit ausgenommen?
        </li>
        <li>
          <strong>Rückgabe-/Vernichtungspflichten</strong> – Wie und wann müssen
          Unterlagen nach Vertragsende vernichtet oder zurückgegeben werden?
        </li>
        <li>
          <strong>Haftung und Schadensersatz</strong> – Welche Haftungsgrenzen
          gelten, und welche Konsequenzen drohen bei Verstößen?
        </li>
      </ul>
      <p className="mt-2">
        Um Ihre Anfrage präzise zu bearbeiten, beantworten Sie mir bitte kurz:
      </p>
      <ul className="ml-4 list-inside list-disc">
        <li>
          Welche <strong>Informationen</strong> (z. B. technische Zeichnungen,
          Prozessdaten) sollen geschützt werden?
        </li>
        <li>
          An wen (<strong>Abteilung</strong>, Lieferant, externes Team) werden
          die Informationen übermittelt?
        </li>
        <li>
          Für welchen <strong>Zeitraum</strong> soll die Geheimhaltung gelten?
        </li>
      </ul>
    </>,

    // 2. Antwort: Auswertung der Nutzer-Angaben + Empfehlung NDACheck
    <>
      <p>
        Sie möchten also Ihre <strong>technischen Zeichnungen</strong> und
        <strong>Prozessdaten</strong> für <strong>3 Jahre</strong> an die
        Entwicklungsabteilung übermitteln. Wir prüfen nun:
      </p>
      <ul className="ml-4 list-inside list-disc">
        <li>
          Ist der Zeitraum „<strong>3 Jahre ab Unterzeichnung</strong>“ klar und
          unwiderruflich formuliert?
        </li>
        <li>
          Werden Ihre Zeichnungen und Daten unter „
          <strong>vertrauliche Informationen</strong>“ explizit aufgelistet?
        </li>
        <li>
          Sind Ausnahmen (z. B. bereits öffentlich bekannte Entwicklungen)
          eindeutig definiert?
        </li>
        <li>
          Sind Rückgabe- und Löschpflichten nach Ende der Zusammenarbeit
          praktikabel und rechtssicher geregelt?
        </li>
        <li>Passen die Haftungsgrenzen für Datenverlust und Fehlverwendung?</li>
      </ul>
      <p className="mt-2">
        Unser Tool <strong>NDACheck</strong> markiert diese Punkte direkt farbig
        und liefert maßgeschneiderte Formulierungsvorschläge.
      </p>
      <div className="mt-4 flex items-start gap-3 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 text-blue-700">
        <FileText className="h-6 w-6" />
        <div>
          <p className="text-lg font-semibold">Empfohlen: NDACheck</p>
          <p className="text-sm">
            Automatisierte Analyse und Anpassung Ihrer
            Geheimhaltungsvereinbarungen.
          </p>
          <a
            href="/loesungen/nda-check"
            className="mt-2 inline-flex items-center gap-1 rounded-md bg-blue-500 px-3 py-1 font-medium text-white hover:bg-blue-600"
          >
            NDACheck öffnen →
          </a>
        </div>
      </div>
    </>,
    // … weitere Antworten …
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      role: "user",
      content: input.trim(),
    };
    const thinkingMsg: Message = {
      id: Date.now() + 1,
      role: "bot",
      content: "Denkt nach…",
    };

    setMessages((prev) => [...prev, userMsg, thinkingMsg]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === thinkingMsg.id
            ? {
                ...msg,
                content: mockResponses[responseIndex],
              }
            : msg,
        ),
      );
      // Index weiterschalten (mit Wrap-Around)
      setResponseIndex((idx) => (idx + 1) % mockResponses.length);
    }, 1500);
  };

  return (
    <section className="container mx-auto flex h-[calc(100vh-120px)] max-w-3xl flex-col gap-4 p-4">
      <h2 className="text-3xl font-semibold">Chat</h2>
      <div className="flex-1 overflow-y-auto rounded-md border p-4">
        {messages.length === 0 && (
          <p className="text-sm italic text-gray-500">
            Stelle LegalLexi deine Frage:
          </p>
        )}
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`mb-3 whitespace-pre-wrap rounded-md p-3 text-sm ${
              msg.role === "user"
                ? "ml-auto bg-indigo-500 text-white"
                : "mr-auto bg-gray-100 text-gray-800"
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="text"
          className="flex-1 rounded-md border px-4 py-2"
          placeholder="Schreibe deine Frage..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="button"
          className="rounded-full bg-gray-200 p-2 hover:bg-gray-300"
        >
          <Mic2 className="h-5 w-5 text-gray-600" />
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-500 px-4 py-2 font-medium text-white hover:bg-indigo-600"
        >
          Senden
        </button>
      </form>
    </section>
  );
}
