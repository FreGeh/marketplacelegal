"use client";

import { FormEvent, useState, ReactNode } from "react";

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
                    <p>Verträge bergen oft versteckte Fallstricke:</p>
                    <ul className="ml-4 list-inside list-disc">
                      <li>unklare Leistungsbeschreibungen</li>
                      <li>widersprüchliche Laufzeiten</li>
                      <li>
                        automatische Verlängerungen ohne klare Kündigungsrechte
                      </li>
                      <li>intransparente Preis- und Zahlungsmodalitäten</li>
                      <li>
                        übermäßige Haftungs- und Gewährleistungsausschlüsse
                        sowie unzulässige AGB-Klauseln
                      </li>
                    </ul>
                    <p className="mt-2">
                      Fehlende Formvorschriften – etwa Unterschrift, Datum oder
                      notarielle Beurkundung – können die Wirksamkeit gefährden.
                    </p>
                    <p>
                      Achten Sie darauf, dass alle Parteien korrekt benannt und
                      vertretungsberechtigt sind und keine Klauseln gegen
                      zwingendes Recht oder gute Sitten verstoßen.
                    </p>
                    <p className="mt-2">
                      Eine klare, verständliche Sprache und eine konsistente
                      Gesamtauslegung minimieren späteren Streit. So gewinnen
                      Sie bereits vor Unterschrift die nötige Klarheit und
                      Rechtssicherheit.
                    </p>
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
          <p className="text-sm text-gray-500">Stelle LegalLexi deine Frage:</p>
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

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          className="flex-1 rounded-md border px-4 py-2"
          placeholder="Schreibe deine Frage..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
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
