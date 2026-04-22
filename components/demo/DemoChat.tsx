"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

const SUGGESTED = [
  "¿Tenés jean wide leg talle 40?",
  "Qué vestidos tenés para una fiesta",
  "Mostrame lo más nuevo",
  "Cuánto sale el envío a Mendoza",
];

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function DemoChat({ onClose }: { onClose?: () => void }) {
  const [messages, setMessages] = useState<Message[]>(() => [
    {
      role: "assistant",
      content: "Hola, soy Lagu 👋 Asistente de Tienda Laguna. ¿En qué te puedo ayudar?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  async function sendMessage(text: string) {
    if (!text.trim() || loading) return;
    setError(null);

    const userMsg: Message = { role: "user", content: text.trim(), timestamp: new Date() };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const payload = updatedMessages.map(({ role, content }) => ({ role, content }));
      const res = await fetch("/api/demo-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: payload }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Error al enviar el mensaje.");
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.reply, timestamp: new Date() },
        ]);
      }
    } catch {
      setError("Sin conexión. Revisá tu red.");
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }

  const showSuggestions = messages.length <= 1 && !loading;

  return (
    <div
      className="flex flex-col bg-white"
      style={{
        borderRadius: "2px",
        height: "100%",
        overflow: "hidden",
        fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
      }}
    >
      {/* Header WhatsApp */}
      <div
        className="flex items-center gap-3 px-4 py-3"
        style={{ background: "#075E54", flexShrink: 0 }}
      >
        {onClose && (
          <button
            onClick={onClose}
            aria-label="Cerrar chat"
            className="text-white hover:text-white/70 transition-colors"
            style={{ fontSize: "18px", lineHeight: 1, background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            ←
          </button>
        )}
        <div
          className="flex items-center justify-center text-white font-bold flex-shrink-0"
          style={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            background: "#C84B31",
            fontSize: "16px",
          }}
        >
          L
        </div>
        <div>
          <div style={{ color: "white", fontSize: "15px", fontWeight: 600, lineHeight: 1.2 }}>
            Tienda Laguna
          </div>
          <div style={{ color: "#ACE6D4", fontSize: "12px" }}>en línea</div>
        </div>
      </div>

      {/* Banner demo */}
      <div
        className="px-4 py-2 text-center"
        style={{ background: "#FFF3CD", fontSize: "11px", color: "#856404", flexShrink: 0 }}
      >
        💬 Esto es una demo. Tienda Laguna es ficticia.
      </div>

      {/* Chat area */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-2"
        style={{
          background: "#ECE5DD",
          backgroundImage: "radial-gradient(circle, #d4cfc8 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.2 }}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                style={{
                  maxWidth: "80%",
                  padding: "8px 12px",
                  borderRadius:
                    msg.role === "user"
                      ? "12px 12px 2px 12px"
                      : "12px 12px 12px 2px",
                  background: msg.role === "user" ? "#DCF8C6" : "#FFFFFF",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.5,
                    color: "#111",
                    margin: 0,
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                  }}
                >
                  {msg.content}
                </p>
                <span
                  suppressHydrationWarning
                  style={{
                    display: "block",
                    textAlign: "right",
                    fontSize: "10px",
                    color: "#667781",
                    marginTop: "4px",
                  }}
                >
                  {formatTime(msg.timestamp)}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing indicator */}
        {loading && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start"
          >
            <div
              className="flex items-center gap-1"
              style={{
                background: "white",
                padding: "10px 14px",
                borderRadius: "12px 12px 12px 2px",
                boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
              }}
            >
              {[0, 150, 300].map((delay) => (
                <span
                  key={delay}
                  className="animate-bounce"
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "#A0AEC0",
                    display: "inline-block",
                    animationDelay: `${delay}ms`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Suggested questions */}
        {showSuggestions && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-2 mt-2"
          >
            {SUGGESTED.map((q) => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                style={{
                  background: "white",
                  border: "1px solid #E8E2D8",
                  borderRadius: "16px",
                  padding: "6px 12px",
                  fontSize: "12px",
                  color: "#075E54",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  textAlign: "left",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#f0f0f0")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
              >
                {q}
              </button>
            ))}
          </motion.div>
        )}
      </div>

      {/* Error toast */}
      {error && (
        <div
          className="px-4 py-2 text-center"
          style={{ background: "#FEE2E2", fontSize: "12px", color: "#991B1B", flexShrink: 0 }}
        >
          {error}
        </div>
      )}

      {/* Input area */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(input);
        }}
        className="flex items-center gap-2 px-3 py-3"
        style={{ background: "#F0F0F0", flexShrink: 0, borderTop: "1px solid #E8E2D8" }}
      >
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength={500}
          placeholder="Escribí un mensaje..."
          disabled={loading}
          style={{
            flex: 1,
            background: "white",
            border: "none",
            borderRadius: "20px",
            padding: "10px 16px",
            fontSize: "14px",
            outline: "none",
            color: "#111",
            fontFamily: "inherit",
          }}
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          aria-label="Enviar mensaje"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: loading || !input.trim() ? "#A0AEC0" : "#25D366",
            border: "none",
            cursor: loading || !input.trim() ? "not-allowed" : "pointer",
            color: "white",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.15s",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </button>
      </form>
    </div>
  );
}

export function DemoChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!open && (
          <motion.button
            key="bubble"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-40 flex items-center gap-3 px-5 py-4 text-white shadow-xl hover:shadow-2xl"
            style={{
              background: "#C84B31",
              borderRadius: "2px",
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
              transition: "box-shadow 0.2s",
            }}
          >
            <WhatsAppIcon size={22} />
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: "10px", opacity: 0.8, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Demo en vivo
              </div>
              <div style={{ fontSize: "13px", fontWeight: 600 }}>Chateá con el bot</div>
            </div>
            <span
              className="animate-pulse"
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#25D366",
                display: "inline-block",
                marginLeft: 2,
                flexShrink: 0,
              }}
            />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40"
              style={{ background: "rgba(0,0,0,0.5)" }}
            />

            {/* Modal */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed z-50 bottom-0 left-0 right-0 md:bottom-6 md:right-6 md:left-auto"
              style={{ height: "85vh" }}
            >
              <div
                className="w-full h-full md:w-[420px]"
                style={{
                  height: "100%",
                  maxHeight: "min(700px, 85vh)",
                  borderRadius: "2px",
                  overflow: "hidden",
                  boxShadow: "0 25px 50px rgba(0,0,0,0.35)",
                }}
              >
                <DemoChat onClose={() => setOpen(false)} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
