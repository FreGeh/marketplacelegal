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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
                content: (
                  <>
                    <div>
                      <p>
                        Verträge bergen oft versteckte{" "}
                        <strong>Fallstricke</strong>:
                      </p>
                      <ul className="ml-4 list-inside list-disc">
                        <li>
                          <strong>unklare Leistungsbeschreibungen</strong>
                        </li>
                        <li>
                          <strong>widersprüchliche Laufzeiten</strong>
                        </li>
                        <li>
                          automatische Verlängerungen ohne klare  
                          <strong>Kündigungsrechte</strong>
                        </li>
                        <li>
                          intransparente 
                          <strong>Preis- und Zahlungsmodalitäten</strong>
                        </li>
                        <li>
                          übermäßige 
                          <strong>
                            Haftungs- und Gewährleistungsausschlüsse 
                          </strong>
                          sowie <strong>unzulässige AGB-Klauseln</strong>
                        </li>
                      </ul>
                      <p className="mt-2">
                        Fehlende <strong>Formvorschriften</strong> – etwa
                        Unterschrift, Datum oder notarielle Beurkundung – können
                        die Wirksamkeit gefährden.
                      </p>
                      <p>
                        Achten Sie darauf, dass alle Parteien korrekt benannt
                        und <strong>vertretungsberechtigt</strong> sind und
                        keine Klauseln gegen zwingendes Recht oder gute Sitten
                        verstoßen.
                      </p>
                      <p className="mt-2">
                        Eine klare, verständliche Sprache und eine konsistente{" "}
                        <strong>Gesamtauslegung</strong> minimieren späteren
                        Streit. So gewinnen Sie bereits vor Unterschrift die
                        nötige Klarheit und Rechtssicherheit.
                      </p>
                    </div>
                    <div className="mt-4 flex items-start gap-3 rounded-lg border-l-4 border-indigo-500 bg-indigo-50 p-4 text-indigo-700">
                      <FileText className="h-6 w-6" />
                      <div>
                        <p className="text-lg font-semibold">
                          Empfohlen: ContractCheck
                        </p>
                        <p className="text-sm">
                          Unsere von Rechtsanwälten entwickelte Lösung für Ihre
                          Vertragsprüfung.
                        </p>
                        <a
                          href="/contract-check"
                          className="mt-2 inline-flex items-center gap-1 rounded-md bg-indigo-500 px-3 py-1 font-medium text-white hover:bg-indigo-600"
                        >
                          <FileText className="h-4 w-4" />
                          ContractCheck öffnen
                        </a>
                      </div>
                    </div>
                  </>
                ),
              }
            : msg,
        ),
      );
    }, 2000);
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
                : "mr-auto bg-gray-200 text-gray-800"
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
