// app/api/gemini/route.ts (Edge runtime)
import { NextResponse } from "next/server";
import { ai } from "@/lib/genai";

export const runtime = "edge";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  // --- 1. get the async iterator ---
  const gen = await ai.models.generateContentStream({
    model: "gemini-2.0-flash-001",
    contents: prompt,
  });

  // --- 2. wrap it in a ReadableStream ---
  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();
      for await (const chunk of gen) {
        controller.enqueue(encoder.encode(chunk.text)); // emit each token
      }
      controller.close();
    },
  });

  // --- 3. return the stream ---
  return new NextResponse(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8", // plain text stream
    },
  });
}
