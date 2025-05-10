// app/page.tsx
"use client";

import Link from "next/link";
import ChatPage from "./chat/page";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* ── Hauptinhalt ───────────────────────────────────────── */}
      <section className="container mx-auto flex flex-col items-center gap-8 px-5 py-24 text-center">
        {/* … dein bestehender Hero … */}
      </section>

      {/* ── Fixiertes, kompaktes Chat-Widget unten rechts ───────── */}
      <div className="fixed bottom-4 right-4 z-50 h-96 w-80 overflow-hidden rounded-2xl border bg-white shadow-lg">
        {/* Optional: eigener Kopf */}
        <div className="bg-indigo-500 px-4 py-2 text-sm font-semibold text-white">
          LegalLexi Chat
        </div>
        {/* Die komprimierte ChatPage */}
        <div className="h-[calc(100%-2.5rem)]">
          <ChatPage compact />
        </div>
      </div>
    </div>
  );
}
