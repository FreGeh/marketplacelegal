  // app/api/gemini/route.ts
  import { NextResponse } from "next/server";
  import { ai } from "@/lib/genai";

  export const runtime = "edge";

  export async function POST(req: Request) {
    const { prompt } = await req.json();
    const gen = await ai.models.generateContentStream({
      model: "gemini-2.0-flash-001",
      contents: prompt,
    });

    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        for await (const chunk of gen) {
          controller.enqueue(encoder.encode(chunk.text));
        }
        controller.close();
      },
    });

    return new NextResponse(stream, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
