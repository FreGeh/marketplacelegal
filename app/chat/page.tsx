// app/chat/page.tsx
"use client";

import { FormEvent, useState, ReactNode } from "react";
import { Mic2, FileText } from "lucide-react";

type Message = {
  id: number;
  role: "user" | "bot";
  content: ReactNode;
};

export default function ChatPage({ compact = false }: { compact?: boolean }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [responseIndex, setResponseIndex] = useState(0);

  const mockResponses: ReactNode[] = [
    /* … Deine bisherigen mockResponses … */
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now(), role: "user", content: input };
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

  // switch wrapper classes & header based on `compact`
  const wrapperClasses = compact
    ? "flex flex-col h-full"
    : "container mx-auto flex h-[calc(100vh-120px)] max-w-3xl flex-col gap-4 p-4";
  const header = compact ? null : (
    <h2 className="text-3xl font-semibold">Chat</h2>
  );

  return (
    <div className={wrapperClasses}>
      {header}
      <div
        className={`flex-1 overflow-y-auto rounded-md border p-2 ${
          compact ? "text-sm" : "text-base"
        }`}
      >
        {messages.length === 0 && (
          <p className="italic text-gray-500">Stelle LegalLexi deine Frage…</p>
        )}
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`mb-2 rounded-md p-2 ${
              msg.role === "user"
                ? "ml-auto bg-indigo-500 text-white"
                : "mr-auto bg-gray-100 text-gray-800"
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-2 flex items-center gap-2">
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
  );
}
