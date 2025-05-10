// app/page.tsx
"use client";

import { FormEvent, useState, ReactNode, useRef, useEffect } from "react";
import { Mic2, FileText, Lock, BookOpen, Briefcase } from "lucide-react";
import Link from "next/link";

type Message = { id: number; role: "user" | "bot"; content: ReactNode };

export default function Home() {
  /* ─────────── Chat‑State ─────────── */
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [responseIndex, setResponseIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const mockResponses: ReactNode[] = [
    /* …hier deine NDA‑Mock‑Antwort 1 & 2 … */
  ];

  /* Auto‑Scroll bei neuer Nachricht */
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

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

  /* ─────────── KI‑App‑Katalog ─────────── */
  const solutions = [
    {
      href: "/loesungen/contractcheck",
      label: "ContractCheck",
      icon: <FileText className="h-8 w-8" />,
      color: "bg-indigo-100",
      description: "Verträge automatisch prüfen & optimieren.",
    },
    {
      href: "/loesungen/nda-check",
      label: "NDACheck",
      icon: <Lock className="h-8 w-8" />,
      color: "bg-green-100",
      description: "Geheimhaltungs­vereinbarungen schnell absichern.",
    },
    {
      href: "/loesungen/dokumentation-automation",
      label: "Dokumentation Automation",
      icon: <BookOpen className="h-8 w-8" />,
      color: "bg-blue-100",
      description: "Dokumente automatisch erstellen & pflegen.",
    },
    {
      href: "/loesungen/case-cockpit",
      label: "Case Cockpit",
      icon: <Briefcase className="h-8 w-8" />,
      color: "bg-yellow-100",
      description: "Fälle & Projekte zentral managen.",
    },
  ];

  /* ─────────── Render ─────────── */
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Hero */}
      <section className="container mx-auto flex flex-col items-center justify-center gap-8 px-5 py-24 text-center">
        <h1 className="bg-gradient-to-br from-black to-stone-600 bg-clip-text text-5xl font-extrabold text-transparent md:text-7xl">
          Rechts&nbsp;AI <br /> für den Mittelstand
        </h1>
        <p className="text-muted-foreground max-w-2xl text-2xl">
          Sofortige Problemlösungen per KI‑Apps – bei Spezialfragen
          unkompliziert mit Top‑Fachanwälten vernetzt.
        </p>
      </section>

      {/* KI‑App‑Katalog */}
      <section className="container mx-auto mb-40 px-6">
        {" "}
        {/*  mb‑40 lässt Platz für Chat‑Fenster */}
        <h2 className="mb-8 text-center text-3xl font-bold">Unsere KI‑Apps</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map(({ href, label, icon, color, description }) => (
            <Link
              key={href}
              href={href}
              className={`${color} flex flex-col rounded-2xl p-6 shadow transition hover:shadow-xl`}
            >
              <div className="mb-4">{icon}</div>
              <h3 className="mb-2 text-2xl font-semibold">{label}</h3>
              <p className="text-sm text-gray-700">{description}</p>
            </Link>
          ))}
          {/* Platzhalter für kommende Lösungen */}
          {Array(2)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-100 p-6"
              >
                <div className="mb-4 h-8 w-8 rounded bg-gray-300" />
                <h3 className="text-xl font-medium text-gray-500">
                  Bald verfügbar
                </h3>
              </div>
            ))}
        </div>
      </section>

      {/* Fixiertes Chat‑Fenster (immer sichtbar) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 h-96 border-t bg-white shadow-lg">
        <div className="mx-auto flex h-full max-w-3xl flex-col">
          {/* Header */}
          <div className="bg-indigo-500 px-6 py-3 text-lg font-semibold text-white">
            LegalLexi Chat
          </div>
          {/* Nachrichten */}
          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto bg-gray-50 p-4"
          >
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
                    ? "ml-auto bg-indigo-500 text-white"
                    : "mr-auto bg-gray-200 text-gray-800"
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
      </div>
    </div>
  );
}
