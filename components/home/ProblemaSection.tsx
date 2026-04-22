"use client";

import { FadeIn } from "@/components/ui/FadeIn";

const problemas = [
  "Respondés las mismas preguntas de stock y talles todos los días",
  "Perdés ventas fuera de horario sin nadie que atienda",
  "Las consultas por WhatsApp se pierden sin seguimiento",
  "Reservas sin confirmar que terminan en ventas perdidas",
  "No sabés qué productos generan más consultas ni cuándo",
];

const soluciones = [
  "Bot que responde stock, talles y precios 24/7 en WhatsApp",
  "Reservas automáticas con nombre, talle y forma de pago",
  "Derivación a humano cuando la venta está caliente",
  "Catálogo actualizable sin tocar código",
  "Estadísticas reales: consultas, horarios pico, talles más pedidos",
];

export function ProblemaSection() {
  return (
    <section className="relative bg-[#0A0908] overflow-hidden py-32 px-8 md:px-16 lg:px-24 xl:px-32">
      {/* Subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, #1a1614 1px, transparent 1px), linear-gradient(to bottom, #1a1614 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          opacity: 0.8,
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Section label */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-16">
            <div className="w-8 h-px bg-[#C84B31]" />
            <span
              className="text-[#C84B31]"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "11px",
                letterSpacing: "0.2em",
              }}
            >
              02 / DIAGNÓSTICO
            </span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Problema */}
          <div>
            <FadeIn delay={0.1}>
              <h2
                className="mb-10"
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  fontSize: "clamp(32px, 4vw, 52px)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.05,
                  color: "#A89C8C",
                }}
              >
                Lo que vemos
                <br />
                <span style={{ color: "#F5F2ED" }}>todos los días.</span>
              </h2>
            </FadeIn>

            <div className="space-y-4">
              {problemas.map((p, i) => (
                <FadeIn key={i} delay={0.15 + i * 0.08}>
                  <div className="flex items-start gap-4 group">
                    <span
                      className="mt-0.5 shrink-0 text-[#C84B31] opacity-60"
                      style={{
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                        fontSize: "11px",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p
                      className="text-[#A89C8C] leading-relaxed"
                      style={{
                        fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                        fontSize: "15px",
                      }}
                    >
                      {p}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Solución */}
          <div>
            <FadeIn delay={0.2}>
              <h2
                className="mb-10"
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  fontSize: "clamp(32px, 4vw, 52px)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.05,
                  color: "#A89C8C",
                }}
              >
                Lo que
                <br />
                <span style={{ color: "#C84B31", fontStyle: "italic" }}>construimos.</span>
              </h2>
            </FadeIn>

            <div className="space-y-4">
              {soluciones.map((s, i) => (
                <FadeIn key={i} delay={0.25 + i * 0.08}>
                  <div className="flex items-start gap-4">
                    <span
                      className="mt-0.5 shrink-0 text-[#FFD60A]"
                      style={{ fontSize: "14px" }}
                    >
                      ✦
                    </span>
                    <p
                      className="text-[#F5F2ED] leading-relaxed"
                      style={{
                        fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                        fontSize: "15px",
                      }}
                    >
                      {s}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Signal bar */}
            <FadeIn delay={0.7}>
              <div className="mt-12 pt-10 border-t border-[#1a1614]">
                <p
                  className="text-[#A89C8C]"
                  style={{
                    fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                    fontSize: "14px",
                    lineHeight: 1.6,
                  }}
                >
                  Cada bot parte de entender tu tienda: catálogo real, horarios
                  reales, preguntas reales. Sin templates genéricos.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
