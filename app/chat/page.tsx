"use client";

import { FormEvent, useState } from "react";

type Message = {
  id: number;
  role: "user" | "bot";
  content: string;
};

const PRESET_ANSWER = `Hier ein einfaches Praktikumsvertrags-Muster:

1. Vertragsparteien …  
2. Beginn & Dauer …  
3. Vergütung …  
4. Vertraulichkeit …  
5. Kündigung …  
(⚠️ Platzhalter – kein Rechtsrat)
`;

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Create user message
    const userMsg: Message = {
      id: Date.now(),
      role: "user",
      content: input.trim(),
    };

    // Create a “thinking” placeholder
    const thinkingMsg: Message = {
      id: Date.now() + 1,
      role: "bot",
      content: "Denke nach…",
    };

    // Append both to the chat
    setMessages((prev) => [...prev, userMsg, thinkingMsg]);
    setInput("");

    // After a delay, replace the thinking placeholder
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === thinkingMsg.id ? { ...msg, content: PRESET_ANSWER } : msg,
        ),
      );
    }, 2000);
  };

  return (
    <section className="container mx-auto flex h-[calc(100vh-120px)] max-w-3xl flex-col gap-4 p-4">
      <h2 className="text-3xl font-semibold">Chat</h2>

      {/* Message list */}
      <div className="flex-1 overflow-y-auto rounded-md border p-4">
        {messages.length === 0 && (
          <p className="text-sm text-gray-500">
            Stelle deine Frage – die Antwort ist bereits vorbereitet.
          </p>
        )}

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`mb-3 whitespace-pre-line rounded-md p-3 text-sm ${
              msg.role === "user"
                ? "ml-auto bg-indigo-500 text-white"
                : "mr-auto bg-gray-200 text-gray-800"
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>

      {/* Input */}
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
