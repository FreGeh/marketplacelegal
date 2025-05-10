// app/page.tsx
"use client";

import { FormEvent, useState, ReactNode } from "react";
import { Mic2 } from "lucide-react";
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
    <p>Mock-Antwort #1</p>,
    <p>Mock-Antwort #2</p>,
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
          LegalAI GPT <br /> für den Mittelstand
        </h1>
        <p className="text-muted-foreground max-w-2xl text-2xl">
          Sofortige Antworten per Chatbot – bei Spezialfragen unkompliziert mit
          Top-Fachanwälten vernetzt.
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
