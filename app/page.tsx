// app/page.tsx
"use client";

import { FormEvent, useState, ReactNode } from "react";
import { Mic2, FileText } from "lucide-react";
import Link from "next/link";

type Message = {
  id: number;
  role: "user" | "bot";
  content: ReactNode;
};

export default function Home() {
  // ── Chat state ───────────────────────
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [responseIndex, setResponseIndex] = useState(0);

  const mockResponses: ReactNode[] = [
    // 1. Frage: Worauf genau muss ich bei einer NDA achten?
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

    // 2. Frage: Umsetzung bei Autozulieferer + Empfehlung NDACheck
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
    setMessages((m) => [...m, userMsg, thinkingMsg]);
    setInput("");

    setTimeout(() => {
      setMessages((m) =>
        m.map((msg) =>
          msg.id === thinkingMsg.id
            ? { ...msg, content: mockResponses[responseIndex] }
            : msg,
        ),
      );
      setResponseIndex((i) => (i + 1) % mockResponses.length);
    }, 1200);
  };

  // ── Render ──────────────────────────
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Hero */}
      <section className="container mx-auto flex flex-1 flex-col items-center justify-center gap-8 px-5 py-24 text-center">
        <h1 className="bg-gradient-to-br from-black to-stone-600 bg-clip-text text-5xl font-extrabold text-transparent md:text-7xl">
          Rechts AI <br /> für den Mittelstand
        </h1>
        <p className="text-muted-foreground max-w-2xl text-2xl">
          Sofortige Problemlösungen per KI-Apps – bei Spezialfragen
          unkompliziert mit Top-Fachanwälten vernetzt.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/chat"
            className="rounded-md bg-indigo-500 px-6 py-3 text-2xl font-medium text-white shadow hover:bg-indigo-600"
          >
            💬 Chat
          </Link>
          <Link
            href="/catalog"
            className="bg-primary hover:bg-primary/90 rounded-md px-6 py-3 text-xl font-medium text-black shadow"
          >
            Andere Apps entdecken
          </Link>
        </div>
      </section>

      {/* Chat als untere Hälfte */}
      <section className="h-1/2 w-full overflow-hidden rounded-t-3xl bg-white shadow-inner">
        <div className="mx-auto flex h-full max-w-3xl flex-col">
          {/* Header */}
          <header className="bg-indigo-500 px-6 py-4 text-lg font-semibold text-white">
            LegalLexi Chat
          </header>

          {/* Message-Bereich */}
          <div className="flex-1 space-y-3 overflow-y-auto bg-gray-50 p-4">
            {messages.length === 0 && (
              <p className="italic text-gray-400">
                Stelle LegalLexi deine Frage…
              </p>
            )}
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  msg.role === "user"
                    ? "self-end bg-indigo-500 text-white"
                    : "self-start bg-gray-200 text-gray-800"
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>

          {/* Eingabe */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-3 border-t bg-white px-6 py-4"
          >
            <input
              type="text"
              className="flex-1 rounded-full border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
              placeholder="Deine Frage…"
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
              className="rounded-full bg-indigo-500 px-5 py-2 text-sm font-medium text-white shadow hover:bg-indigo-600"
            >
              Senden
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
