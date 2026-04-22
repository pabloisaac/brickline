"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Logo } from "@/components/ui/Logo";

function BrickWall() {
  const brickW = 80, brickH = 28, gap = 4, rows = 4, cols = 32;
  return (
    <svg
      width="100%"
      height={(brickH + gap) * rows + gap}
      preserveAspectRatio="xMinYMax slice"
      style={{ display: "block" }}
    >
      <defs>
        <linearGradient id="ctaWallFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5F2ED" stopOpacity="1" />
          <stop offset="50%" stopColor="#F5F2ED" stopOpacity="0" />
        </linearGradient>
        <mask id="ctaFadeMask">
          <rect width="100%" height="100%" fill="url(#ctaWallFade)" />
        </mask>
      </defs>
      <g mask="url(#ctaFadeMask)">
        {Array.from({ length: rows }).map((_, row) => {
          const offset = row % 2 === 0 ? 0 : (brickW + gap) / 2;
          return Array.from({ length: cols }).map((_, col) => (
            <rect
              key={`${row}-${col}`}
              x={col * (brickW + gap) - offset}
              y={row * (brickH + gap)}
              width={brickW}
              height={brickH}
              fill="#C84B31"
              opacity="0.12"
              rx="1"
            />
          ));
        })}
      </g>
    </svg>
  );
}

export function CTASection() {
  return (
    <section className="grain relative bg-[#F5F2ED] overflow-hidden py-32 px-8 md:px-16 lg:px-24 xl:px-32" style={{ isolation: "isolate" }}>
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

      {/* Terracota blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full z-0"
        style={{
          background: "radial-gradient(circle at center, #C84B31 0%, transparent 70%)",
          opacity: 0.06,
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-px bg-[#C84B31]" />
            <span
              className="text-[#C84B31]"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "11px",
                letterSpacing: "0.2em",
              }}
            >
              05 / CONTACTO
            </span>
          </div>
        </FadeIn>

        <div className="max-w-3xl">
          <FadeIn delay={0.1}>
            <h2
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontSize: "clamp(44px, 7vw, 100px)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                lineHeight: 0.97,
                color: "#0A0908",
              }}
            >
              ¿Tu tienda sigue
              <br />
              respondiendo a mano
              <br />
              <span style={{ color: "#C84B31", fontStyle: "italic" }}>las consultas?</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p
              className="mt-8 text-[#3D3631] leading-relaxed max-w-lg"
              style={{
                fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                fontSize: "clamp(16px, 1.5vw, 19px)",
              }}
            >
              Contanos qué necesitás. La primera consulta es sin costo y sin
              compromiso — te respondemos en menos de 24hs.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a
                href="/cotizador"
                className="group inline-flex items-center gap-3 bg-[#0A0908] text-[#F5F2ED] px-10 py-5 hover:bg-[#3D3631] active:scale-95 transition-all duration-200"
                style={{
                  fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                  fontSize: "15px",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  borderRadius: "2px",
                }}
              >
                Cotizá tu proyecto
                <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="https://wa.me/5492657562123?text=Hola!%20Quiero%20arrancar%20un%20proyecto%20con%20BlacklineIA."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-[#C84B31] text-[#F5F2ED] px-10 py-5 hover:bg-[#A33A23] active:scale-95 transition-all duration-200"
                style={{
                  fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                  fontSize: "15px",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  borderRadius: "2px",
                }}
              >
                <WhatsAppIcon />
                Escribinos por WhatsApp
                <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.55}>
            <div className="mt-10 flex items-center gap-4">
              <div className="w-3 h-3 bg-[#FFD60A]" style={{ borderRadius: "1px" }} />
              <span
                className="text-[#A89C8C]"
                style={{
                  fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                  fontSize: "14px",
                }}
              >
                Respondemos en menos de 24 horas hábiles
              </span>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-32 pt-12 border-t border-[#E8E2D8] max-w-[1400px] mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Logo size="sm" />
          <div className="flex flex-col sm:items-end gap-1">
            <span
              className="text-[#A89C8C]"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "11px",
                letterSpacing: "0.15em",
              }}
            >
              © {new Date().getFullYear()} BLACKLINEIA · ARGENTINA
            </span>
            <span
              className="text-[#A89C8C]"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "10px",
                letterSpacing: "0.1em",
              }}
            >
              Bots de WhatsApp para comercios argentinos.
            </span>
          </div>
        </div>
      </footer>

      {/* BrickWall */}
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 overflow-hidden">
        <BrickWall />
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
