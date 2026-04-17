"use client";

import { FadeIn } from "@/components/ui/FadeIn";

const steps = [
  {
    number: "01",
    title: "Consulta inicial",
    description:
      "Nos contás el problema. Sin tecnicismos, sin formularios eternos — una charla real por WhatsApp o videollamada.",
    duration: "Día 1",
  },
  {
    number: "02",
    title: "Diagnóstico",
    description:
      "Analizamos tu operación, los puntos de dolor y lo que necesitás para crecer. Mapeamos la solución antes de escribir una línea de código.",
    duration: "Días 2–5",
  },
  {
    number: "03",
    title: "Propuesta",
    description:
      "Presupuesto claro, alcance definido y cronograma realista. Sin sorpresas ni costos ocultos a mitad de camino.",
    duration: "Semana 1",
  },
  {
    number: "04",
    title: "Desarrollo",
    description:
      "Construimos en sprints cortos con entregas parciales. Ves el avance desde el primer día y podés opinar en cada etapa.",
    duration: "Semanas 2–N",
  },
  {
    number: "05",
    title: "Entrega y soporte",
    description:
      "Deploy, capacitación de tu equipo y soporte post-lanzamiento incluido. No desaparecemos cuando terminamos.",
    duration: "Semana final",
  },
];

export function ProcessSection() {
  return (
    <section
      id="proceso"
      className="relative bg-[#F5F2ED] overflow-hidden py-32 px-8 md:px-16 lg:px-24 xl:px-32"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#C84B31]" />
            <span
              className="text-[#C84B31]"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "11px",
                letterSpacing: "0.2em",
              }}
            >
              04 / PROCESO
            </span>
          </div>
        </FadeIn>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <FadeIn delay={0.1}>
            <h2
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontSize: "clamp(36px, 5vw, 72px)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                lineHeight: 1.0,
                color: "#0A0908",
              }}
            >
              Cómo
              <br />
              <span style={{ color: "#C84B31", fontStyle: "italic" }}>trabajamos.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2} direction="none">
            <p
              className="text-[#A89C8C] max-w-sm"
              style={{
                fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                fontSize: "15px",
                lineHeight: 1.7,
              }}
            >
              Un proceso transparente de principio a fin.
              Sin sorpresas, sin demoras inexplicables.
            </p>
          </FadeIn>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-[calc(3rem+1px)] top-0 bottom-0 w-px bg-[#E8E2D8]" />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.1}>
                <div className="grid grid-cols-1 lg:grid-cols-[6rem_1fr_10rem] gap-6 lg:gap-12 py-10 border-b border-[#E8E2D8] group">
                  {/* Number */}
                  <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-0">
                    <div
                      className="w-12 h-12 flex items-center justify-center bg-[#F5F2ED] border border-[#E8E2D8] group-hover:border-[#C84B31] group-hover:bg-[#C84B31] transition-all duration-300 shrink-0 relative z-10"
                      style={{ borderRadius: "2px" }}
                    >
                      <span
                        className="text-[#A89C8C] group-hover:text-[#F5F2ED] transition-colors duration-300"
                        style={{
                          fontFamily: "var(--font-jetbrains-mono), monospace",
                          fontSize: "12px",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {step.number}
                      </span>
                    </div>
                    {/* Mobile duration */}
                    <span
                      className="lg:hidden text-[#A89C8C]"
                      style={{
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                        fontSize: "10px",
                        letterSpacing: "0.15em",
                      }}
                    >
                      {step.duration}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center">
                    <h3
                      className="mb-3 text-[#0A0908]"
                      style={{
                        fontFamily: "var(--font-fraunces), Georgia, serif",
                        fontSize: "24px",
                        fontWeight: 600,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.2,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-[#3D3631] leading-relaxed max-w-lg"
                      style={{
                        fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                        fontSize: "15px",
                      }}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Duration */}
                  <div className="hidden lg:flex items-center justify-end">
                    <span
                      className="text-[#A89C8C]"
                      style={{
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                        fontSize: "11px",
                        letterSpacing: "0.15em",
                      }}
                    >
                      {step.duration}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
