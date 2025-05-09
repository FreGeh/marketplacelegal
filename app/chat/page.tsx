"use client";

import { useRef, useState } from "react";

export default function ChatPage() {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [messages, setMessages] = useState<
    { role: "user" | "model"; text: string }[]
  >([]);
  const [pending, setPending] = useState(false);

  async function send() {
    const prompt = inputRef.current?.value.trim();
    if (!prompt) return;
    setMessages((m) => [...m, { role: "user", text: prompt }]);
    inputRef.current!.value = "";
    setPending(true);

    const res = await fetch("/api/gemini", {
      method: "POST",
      body: JSON.stringify({ prompt }),
    });

    // stream the bytes back into the UI
    const reader = res.body!.getReader();
    const decoder = new TextDecoder();
    let buf = "";
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      buf += decoder.decode(value);
      setMessages((m) => {
        const base = m.slice();
        if (base[base.length - 1]?.role === "model") {
          base[base.length - 1].text = buf;
        } else {
          base.push({ role: "model", text: buf });
        }
        return base;
      });
    }
    setPending(false);
  }

  function handleKey(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void send();
    }
  }

  return (
    <main className="mx-auto flex max-w-2xl flex-col items-center gap-4 p-6">
      <h1 className="text-3xl font-bold">Gemini Chat</h1>

      <section className="flex h-[60vh] w-full flex-col gap-2 overflow-y-auto rounded-xl border bg-gray-50 p-4 shadow-inner">
        {messages.map((m, i) => (
          <p
            key={i}
            className={
              m.role === "user" ? "text-right text-blue-600" : "text-gray-800"
            }
          >
            {m.text}
          </p>
        ))}
        {pending && <p className="italic text-gray-400">…thinking</p>}
      </section>

      <textarea
        ref={inputRef}
        onKeyDown={handleKey}
        rows={3}
        placeholder="Ask anything…"
        className="w-full rounded-xl border p-3 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={send}
        disabled={pending}
        className="rounded-xl bg-blue-600 px-6 py-2 text-white transition disabled:bg-blue-300"
      >
        Send
      </button>
    </main>
  );
}
