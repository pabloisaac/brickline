"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";

const DEMO_WA_URL =
  "https://wa.me/5492657562123?text=Hola!%20Quiero%20probar%20el%20demo%20del%20bot%20para%20tiendas.";

function BrickWall() {
  const brickW = 80, brickH = 28, gap = 4, rows = 6, cols = 32;
  return (
    <svg
      width="100%"
      height={(brickH + gap) * rows + gap}
      preserveAspectRatio="xMinYMax slice"
      style={{ display: "block" }}
    >
      <defs>
        <linearGradient id="heroWallFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5F2ED" stopOpacity="1" />
          <stop offset="55%" stopColor="#F5F2ED" stopOpacity="0" />
        </linearGradient>
        <mask id="heroFadeMask">
          <rect width="100%" height="100%" fill="url(#heroWallFade)" />
        </mask>
      </defs>
      <g mask="url(#heroFadeMask)">
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
              opacity="0.13"
              rx="1"
            />
          ));
        })}
      </g>
    </svg>
  );
}

export function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const show = (delay: string) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(32px)",
    transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}`,
  });

  return (
    <section
      className="grain relative min-h-screen bg-[#F5F2ED] overflow-hidden flex flex-col"
      style={{ isolation: "isolate" }}
    >
      {/* Grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, #E8E2D8 1px, transparent 1px), linear-gradient(to bottom, #E8E2D8 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          opacity: 0.6,
        }}
      />

      {/* Blob terracota */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full z-0"
        style={{
          background: "radial-gradient(circle at center, #C84B31 0%, transparent 70%)",
          opacity: 0.07,
          filter: "blur(80px)",
        }}
      />

      {/* Nav */}
      <nav className="relative z-20 flex items-center justify-between px-8 md:px-16 lg:px-24 xl:px-32 pt-8 max-w-[1400px] mx-auto w-full">
        <div style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.1s" }}>
          <Logo size="md" />
        </div>
        <div
          className="hidden md:flex items-center gap-8"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.2s" }}
        >
          {["Servicios", "Proceso", "Nosotros"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#3D3631] hover:text-[#C84B31] transition-colors duration-200"
              style={{
                fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                fontSize: "14px",
                letterSpacing: "0.02em",
              }}
            >
              {item}
            </a>
          ))}
          <a
            href={DEMO_WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C84B31] text-[#F5F2ED] px-5 py-2.5 hover:bg-[#A33A23] transition-colors duration-200"
            style={{
              fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.04em",
              borderRadius: "2px",
            }}
          >
            Probá la demo
          </a>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 items-start justify-center px-8 md:px-16 lg:px-24 xl:px-32 max-w-[1400px] mx-auto w-full pb-32">

        {/* Divider top */}
        <div
          className="w-full h-px bg-[#E8E2D8] mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left",
            transition: "opacity 1s ease 0.3s, transform 1s cubic-bezier(0.22,1,0.36,1) 0.3s",
          }}
        />

        {/* Eyebrow */}
        <div style={show("0.4s")}>
          <span
            className="font-mono text-xs tracking-[0.25em] text-[#C84B31] uppercase"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          >
            IA para comercios · Argentina
          </span>
        </div>

        {/* Headline */}
        <h1
          className="mt-6"
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontSize: "clamp(54px, 9.5vw, 148px)",
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 0.97,
            color: "#0A0908",
            maxWidth: "1000px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(48px)",
            transition: "opacity 1s cubic-bezier(0.22,1,0.36,1) 0.5s, transform 1s cubic-bezier(0.22,1,0.36,1) 0.5s",
          }}
        >
          Tu tienda,
          <br />
          atendiendo sola
          <br />
          <span style={{ color: "#C84B31", fontStyle: "italic" }}>las 24hs.</span>
        </h1>

        {/* Subheadline */}
        <div className="mt-10" style={show("0.75s")}>
          <p
            className="text-[#3D3631] leading-relaxed max-w-xl"
            style={{
              fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
              fontSize: "clamp(17px, 1.6vw, 21px)",
            }}
          >
            Bots de WhatsApp que responden talles, stock, precios y reservas sin que toques
            el celular. Instalado en 7 días, desde USD 120 por mes.
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4" style={show("0.9s")}>
          <a
            href={DEMO_WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#C84B31] text-[#F5F2ED] px-8 py-4 hover:bg-[#A33A23] transition-colors duration-200 group"
            style={{
              fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "0.04em",
              borderRadius: "2px",
            }}
          >
            <WhatsAppIcon />
            Probá la demo en vivo
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="/cotizador"
            className="inline-flex items-center gap-3 border border-[#0A0908] text-[#0A0908] px-8 py-4 hover:bg-[#0A0908] hover:text-[#F5F2ED] transition-all duration-200 group"
            style={{
              fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "0.04em",
              borderRadius: "2px",
            }}
          >
            Cotizar mi proyecto
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Trust indicator */}
        <div className="mt-6 flex items-center gap-2" style={show("1.0s")}>
          <span
            className="animate-pulse"
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#2F5D4E",
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "11px",
              letterSpacing: "0.1em",
              color: "#A89C8C",
            }}
          >
            Demo funcionando ahora mismo · Hablá con el bot y probalo
          </span>
        </div>

        {/* Index label */}
        <div className="mt-12" style={show("1.05s")}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-[#A89C8C]" />
            <span
              className="text-[#A89C8C]"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "11px",
                letterSpacing: "0.2em",
              }}
            >
              01 / BOTS · WHATSAPP · COMERCIOS
            </span>
          </div>
        </div>
      </div>

      {/* BrickWall bottom */}
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 overflow-hidden">
        <BrickWall />
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
