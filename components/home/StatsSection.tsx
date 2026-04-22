"use client";

import { FadeIn } from "@/components/ui/FadeIn";

const stats = [
  { value: "24/7", label: "Atención automatizada", sub: "Sin intervención humana", accent: false },
  { value: "<2min", label: "Tiempo de respuesta", sub: "En cualquier horario", accent: true },
  { value: "7 días", label: "Tiempo de instalación", sub: "Desde el OK hasta producción", accent: false },
  { value: "USD 120", label: "Desde por mes", sub: "Transparencia total", accent: false },
];

export function StatsSection() {
  return (
    <section className="relative bg-[#0A0908] overflow-hidden py-24 px-8 md:px-16 lg:px-24 xl:px-32">
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
        {/* Pitch honesto de estudio nuevo */}
        <FadeIn direction="up">
          <div className="mb-20 max-w-2xl">
            <span
              className="font-mono text-xs tracking-[0.25em] uppercase"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                color: "#FFD60A",
              }}
            >
              Estudio nuevo · 2026
            </span>
            <h2
              className="mt-4"
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontSize: "clamp(28px, 3.5vw, 48px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                color: "#F5F2ED",
              }}
            >
              Buscamos los primeros 3 comercios
              <br />
              <span style={{ color: "#C84B31", fontStyle: "italic" }}>
                para casos de estudio.
              </span>
            </h2>
            <p
              className="mt-5"
              style={{
                fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                fontSize: "16px",
                color: "#A89C8C",
                lineHeight: 1.7,
                maxWidth: "480px",
              }}
            >
              40% de descuento a cambio de testimonio en video. Sin letra chica, sin
              permanencia. Si en 30 días no te sirve, lo apagamos.
            </p>
          </div>
        </FadeIn>

        {/* Stats honestas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#1a1614]">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1} direction="up">
              <div className="px-8 py-10 first:pl-0 last:pr-0">
                <div
                  style={{
                    fontFamily: "var(--font-fraunces), Georgia, serif",
                    fontSize: "clamp(36px, 4.5vw, 60px)",
                    fontWeight: 600,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.0,
                    color: stat.accent ? "#C84B31" : "#F5F2ED",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="mt-3 text-[#F5F2ED]"
                  style={{
                    fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                    fontSize: "15px",
                    lineHeight: 1.4,
                  }}
                >
                  {stat.label}
                </div>
                <div
                  className="mt-1 text-[#A89C8C]"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                  }}
                >
                  {stat.sub}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
