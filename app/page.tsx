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
    // … deine bisherigen mock-Antworten …
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

  // ── Page render ─────────────────────
  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="container mx-auto flex flex-col items-center gap-8 px-5 py-24 text-center">
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

      {/* Chat widget bottom-right */}
      <div className="fixed bottom-4 right-4 z-50 flex h-96 w-80 flex-col overflow-hidden rounded-2xl border bg-white shadow-lg">
        {/* Header */}
        <div className="bg-indigo-500 px-4 py-2 text-sm font-semibold text-white">
          LegalLexi Chat
        </div>
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-2 text-sm">
          {messages.length === 0 && (
            <p className="italic text-gray-400">
              Stelle LegalLexi deine Frage…
            </p>
          )}
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`mb-2 rounded-lg p-2 ${
                msg.role === "user"
                  ? "self-end bg-indigo-500 text-white"
                  : "self-start bg-gray-100 text-gray-800"
              }`}
            >
              {msg.content}
            </div>
          ))}
        </div>
        {/* Input */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 border-t p-2"
        >
          <input
            type="text"
            className="flex-1 rounded-md border px-2 py-1 text-sm"
            placeholder="Deine Frage…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="button"
            className="rounded-full bg-gray-200 p-1 hover:bg-gray-300"
          >
            <Mic2 className="h-4 w-4 text-gray-600" />
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-500 px-3 py-1 text-sm text-white hover:bg-indigo-600"
          >
            Senden
          </button>
        </form>
      </div>
    </div>
  );
}
