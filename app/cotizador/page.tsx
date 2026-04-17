import { Logo } from "@/components/ui/Logo";
import { QuoteWizard } from "@/components/cotizador/QuoteWizard";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cotizador — BlacklineIA",
  description: "Obtené una estimación para tu proyecto de IA en minutos.",
};

export default function CotizadorPage() {
  return (
    <main
      className="grain relative min-h-screen bg-[#F5F2ED] overflow-hidden"
      style={{ isolation: "isolate" }}
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

      {/* Blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full z-0"
        style={{
          background: "radial-gradient(circle at center, #C84B31 0%, transparent 70%)",
          opacity: 0.06,
          filter: "blur(80px)",
          transform: "translate(30%, -30%)",
        }}
      />

      {/* Nav */}
      <nav className="relative z-20 flex items-center justify-between px-8 md:px-16 lg:px-24 py-7 max-w-[1400px] mx-auto">
        <Link href="/">
          <Logo size="md" />
        </Link>
        <Link
          href="/"
          className="text-[#A89C8C] hover:text-[#0A0908] transition-colors duration-200 flex items-center gap-2"
          style={{ fontFamily: "var(--font-geist-sans)", fontSize: "14px" }}
        >
          ← Volver al inicio
        </Link>
      </nav>

      {/* Header */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto pt-12 pb-16">
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
            COTIZADOR · BLACKLINEIA
          </span>
        </div>
        <h1
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1.0,
            color: "#0A0908",
            maxWidth: "700px",
          }}
        >
          Cotizá tu proyecto
          <br />
          <span style={{ color: "#C84B31", fontStyle: "italic" }}>en minutos.</span>
        </h1>
        <p
          className="mt-5 text-[#A89C8C] max-w-lg"
          style={{
            fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
            fontSize: "16px",
            lineHeight: 1.6,
          }}
        >
          Respondé 4 preguntas y obtené una estimación de precio y plazo para tu solución IA.
          Sin compromiso, sin formularios largos.
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-[#E8E2D8] mt-12" />
      </div>

      {/* Wizard */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto pb-32">
        <QuoteWizard />
      </div>
    </main>
  );
}
