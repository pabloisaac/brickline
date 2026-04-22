"use client";

import { FadeIn } from "@/components/ui/FadeIn";

const services = [
  {
    number: "01",
    title: "Bots & Asistentes IA",
    description:
      "Bots para WhatsApp que atienden stock, talles, precios y reservas las 24hs. Instalado en tu número real, con tu catálogo, en 7 días.",
    tags: ["WhatsApp", "ChatBot", "24/7"],
    highlight: true,
  },
  {
    number: "02",
    title: "Automatizaciones IA",
    description:
      "Eliminamos el trabajo manual con flujos inteligentes: procesamiento de pedidos, notificaciones automáticas, reportes y mucho más.",
    tags: ["n8n", "Zapier", "APIs"],
  },
  {
    number: "03",
    title: "Integración AFIP + IA",
    description:
      "Facturación electrónica automática con inteligencia aplicada. El sistema reconoce, clasifica y emite comprobantes sin que toques nada.",
    tags: ["AFIP", "CAE", "Fiscal"],
  },
  {
    number: "04",
    title: "Sistemas de gestión",
    description:
      "CRM, ERP e inventario potenciados con IA. Tu operación centralizada con predicciones, alertas y dashboards en tiempo real.",
    tags: ["CRM", "ERP", "IA"],
  },
  {
    number: "05",
    title: "Desarrollo a medida",
    description:
      "Aplicaciones web con IA integrada desde el día uno. Soluciones que se adaptan a tu negocio, no al revés.",
    tags: ["Web", "A medida", "IA"],
  },
  {
    number: "06",
    title: "Consultoría IA",
    description:
      "Te guiamos en la adopción de IA: diagnóstico, roadmap y ejecución. Sin tecnicismos, con resultados medibles desde el primer mes.",
    tags: ["Estrategia", "Roadmap", "ROI"],
  },
];

export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="relative bg-[#F5F2ED] overflow-hidden py-32 px-8 md:px-16 lg:px-24 xl:px-32"
    >
      {/* Grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, #E8E2D8 1px, transparent 1px), linear-gradient(to bottom, #E8E2D8 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          opacity: 0.5,
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
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
                  03 / SERVICIOS
                </span>
              </div>
            </FadeIn>
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
                Lo que
                <br />
                <span style={{ color: "#C84B31", fontStyle: "italic" }}>construimos.</span>
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} direction="none">
            <p
              className="text-[#A89C8C] max-w-sm lg:text-right"
              style={{
                fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                fontSize: "15px",
                lineHeight: 1.7,
              }}
            >
              Empezamos por WhatsApp. Después escalamos al resto
              de la operación si tiene sentido para tu negocio.
            </p>
          </FadeIn>
        </div>

        {/* Divider */}
        <FadeIn>
          <div className="w-full h-px bg-[#E8E2D8] mb-0" />
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <FadeIn key={s.number} delay={i * 0.07} direction="up">
              <div
                className={`group p-8 border-b border-r border-[#E8E2D8] cursor-pointer transition-colors duration-300 ${
                  s.highlight
                    ? "bg-[#C84B31] border-[#C84B31]"
                    : "hover:bg-[#0A0908]"
                }`}
                style={{ minHeight: "260px" }}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <span
                      className={`block mb-6 transition-colors duration-300 ${
                        s.highlight
                          ? "text-[#F5F2ED] opacity-60"
                          : "text-[#A89C8C] group-hover:text-[#C84B31]"
                      }`}
                      style={{
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                        fontSize: "11px",
                        letterSpacing: "0.2em",
                      }}
                    >
                      {s.number}
                    </span>
                    <h3
                      className={`mb-4 transition-colors duration-300 ${
                        s.highlight
                          ? "text-[#F5F2ED]"
                          : "text-[#0A0908] group-hover:text-[#F5F2ED]"
                      }`}
                      style={{
                        fontFamily: "var(--font-fraunces), Georgia, serif",
                        fontSize: "22px",
                        fontWeight: 600,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.15,
                      }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className={`leading-relaxed transition-colors duration-300 ${
                        s.highlight
                          ? "text-[#F5F2ED] opacity-80"
                          : "text-[#3D3631] group-hover:text-[#A89C8C]"
                      }`}
                      style={{
                        fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                        fontSize: "14px",
                      }}
                    >
                      {s.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: "var(--font-jetbrains-mono), monospace",
                          fontSize: "10px",
                          letterSpacing: "0.1em",
                          borderRadius: "2px",
                          padding: "4px 8px",
                          backgroundColor: s.highlight ? "rgba(245,242,237,0.25)" : "#E8E2D8",
                          color: s.highlight ? "#F5F2ED" : "#A89C8C",
                          border: s.highlight ? "1px solid rgba(245,242,237,0.4)" : "none",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
