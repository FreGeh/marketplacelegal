"use client";

import { FormEvent, useState, ReactNode } from "react";
import { Mic2, FileText } from "lucide-react";

type Message = {
  id: number;
  role: "user" | "bot";
  content: ReactNode;
};

interface ChatWidgetProps {
  compact?: boolean;
}

export default function ChatWidget({ compact = false }: ChatWidgetProps) {
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

    setMessages((prev) => [...prev, userMsg, thinkingMsg]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === thinkingMsg.id
            ? { ...msg, content: mockResponses[responseIndex] }
            : msg,
        ),
      );
      setResponseIndex((idx) => (idx + 1) % mockResponses.length);
    }, 1200);
  };

  const containerClasses = compact
    ? "flex flex-col h-full"
    : "container mx-auto flex h-[calc(100vh-120px)] max-w-3xl flex-col gap-4 p-4";

  return (
    <div className={containerClasses}>
      {!compact && <h2 className="text-3xl font-semibold">Chat</h2>}
      <div
        className={`p-$ {compact ? "2" :
          "4"} flex-1 overflow-y-auto rounded-md border
        `}
      >
        {messages.length === 0 && (
          <p className="italic text-gray-500">Stelle LegalLexi deine Frage…</p>
        )}
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`$ {msg.role === "user"
              ? "ml-auto text-white"
                : "mr-auto text-gray-800"} mb-2
                rounded-md bg-gray-100 bg-indigo-500 p-2
            `}
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
