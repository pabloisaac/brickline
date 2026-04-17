"use client";

import { FadeIn } from "@/components/ui/FadeIn";

const stats = [
  { value: "+50", label: "Soluciones IA entregadas", sub: "Desde 2019" },
  { value: "+35", label: "PyMEs automatizadas", sub: "Todo el país" },
  { value: "24/7", label: "Bots en producción", sub: "Sin intervención humana" },
  { value: "AFIP", label: "Integración certificada", sub: "Factura electrónica IA" },
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
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#1a1614]">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1} direction="up">
              <div className="px-8 py-10 first:pl-0 last:pr-0">
                <div
                  style={{
                    fontFamily: "var(--font-fraunces), Georgia, serif",
                    fontSize: "clamp(40px, 5vw, 64px)",
                    fontWeight: 600,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.0,
                    color: i === 1 ? "#C84B31" : "#F5F2ED",
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
