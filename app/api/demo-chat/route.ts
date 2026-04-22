import { NextRequest, NextResponse } from "next/server";
import { buildSystemPrompt } from "@/lib/demo-prompt";

// best-effort rate limit — no persiste entre instancias de Vercel
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 30;
const RATE_WINDOW_MS = 60 * 60 * 1000;

function getIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

interface AnthropicMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error("[demo-chat] ANTHROPIC_API_KEY no configurada");
    return NextResponse.json({ error: "Servidor mal configurado" }, { status: 500 });
  }

  const ip = getIp(request);
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Demasiadas solicitudes. Intentá más tarde." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Body inválido" }, { status: 400 });
  }

  if (!body || typeof body !== "object" || !("messages" in body)) {
    return NextResponse.json({ error: "Body inválido" }, { status: 400 });
  }

  const { messages } = body as { messages: unknown };

  if (!Array.isArray(messages) || messages.length === 0 || messages.length > 40) {
    return NextResponse.json(
      { error: "messages debe ser un array de 1 a 40 items" },
      { status: 400 }
    );
  }

  for (const msg of messages) {
    if (
      !msg ||
      typeof msg !== "object" ||
      !("role" in msg) ||
      !("content" in msg) ||
      (msg.role !== "user" && msg.role !== "assistant") ||
      typeof msg.content !== "string" ||
      msg.content.length > 1000
    ) {
      return NextResponse.json({ error: "Mensaje inválido en el array" }, { status: 400 });
    }
  }

  const validMessages = messages as AnthropicMessage[];

  let anthropicResponse: Response;
  try {
    anthropicResponse = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 500,
        system: buildSystemPrompt(),
        messages: validMessages,
      }),
    });
  } catch (err) {
    console.error("[demo-chat] Error de red llamando a Anthropic:", err);
    return NextResponse.json({ error: "Error de red" }, { status: 502 });
  }

  if (!anthropicResponse.ok) {
    const errText = await anthropicResponse.text().catch(() => "");
    console.error("[demo-chat] Anthropic respondió error:", anthropicResponse.status, errText);
    return NextResponse.json({ error: "Error del proveedor IA" }, { status: 502 });
  }

  const data = (await anthropicResponse.json()) as {
    content: Array<{ type: string; text: string }>;
  };

  const textBlock = data.content?.find((b) => b.type === "text");
  if (!textBlock) {
    return NextResponse.json({ error: "Respuesta inesperada del proveedor" }, { status: 502 });
  }

  return NextResponse.json({ reply: textBlock.text });
}
