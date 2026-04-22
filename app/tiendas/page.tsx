import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { Logo } from "@/components/ui/Logo";

export const metadata: Metadata = {
  title: "Bots de WhatsApp para tiendas — BlacklineIA",
  description:
    "Automatizá las consultas de stock, talles y precios de tu tienda de indumentaria. Bot de WhatsApp instalado en 7 días, desde USD 120 por mes.",
};

const DEMO_WA = "https://wa.me/5492657562123?text=Hola!%20Quiero%20probar%20el%20demo%20del%20bot%20para%20tiendas.";
const CONTACT_WA = "https://wa.me/5492657562123?text=Hola!%20Quiero%20ser%20uno%20de%20los%20primeros%203%20clientes%20de%20BlacklineIA.";

const problems = [
  {
    number: "01",
    title: "Perdés ventas fuera de horario",
    body: "El 40% de las consultas llegan entre las 20hs y las 10am. Si no hay nadie respondiendo, la venta se va a otra tienda.",
  },
  {
    number: "02",
    title: 'Respondés "¿tenés talle M?" 40 veces al día',
    body: "Las mismas preguntas, todo el día, todos los días. Tiempo que podrías usar en comprar, fotografiar o vender.",
  },
  {
    number: "03",
    title: "Sin seguimiento, sin reserva, sin venta",
    body: "La clienta pregunta, no respondés a tiempo, y cierra el chat. No hay forma de recuperar ese contacto.",
  },
];

const features = [
  { text: "Responde consultas de stock, talles y precios 24/7" },
  { text: "Reserva productos por 24hs con datos del cliente" },
  { text: "Informa precios y métodos de pago (MercadoPago, Modo, transferencia)" },
  { text: "Catálogo actualizable sin tocar código" },
  { text: "Deriva a humano cuando la venta está caliente" },
  { text: "Estadísticas simples: consultas, talles más pedidos, horarios pico" },
];

export default function TiendasPage() {
  return (
    <main style={{ background: "#F5F2ED", color: "#0A0908" }}>
      {/* Nav */}
      <nav
        className="relative z-20 flex items-center justify-between px-8 md:px-16 lg:px-24 xl:px-32 pt-8 max-w-[1400px] mx-auto w-full"
      >
        <Logo size="md" />
        <Link
          href="/"
          className="text-[#3D3631] hover:text-[#C84B31] transition-colors duration-200"
          style={{
            fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
            fontSize: "14px",
            letterSpacing: "0.02em",
          }}
        >
          ← Inicio
        </Link>
      </nav>

      {/* Hero */}
      <section
        className="grain relative overflow-hidden pt-16 pb-24 px-8 md:px-16 lg:px-24 xl:px-32"
        style={{ isolation: "isolate" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(to right, #E8E2D8 1px, transparent 1px), linear-gradient(to bottom, #E8E2D8 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
            opacity: 0.6,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full z-0"
          style={{
            background: "radial-gradient(circle at center, #C84B31 0%, transparent 70%)",
            opacity: 0.07,
            filter: "blur(80px)",
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto">
          <FadeIn direction="up" delay={0}>
            <span
              className="font-mono text-xs tracking-[0.25em] text-[#C84B31] uppercase"
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
            >
              Bots para tiendas de indumentaria
            </span>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h1
              className="mt-6"
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontSize: "clamp(44px, 8vw, 120px)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                lineHeight: 0.97,
                color: "#0A0908",
                maxWidth: "900px",
              }}
            >
              Tu tienda responde
              <br />
              talles y stock
              <br />
              <span style={{ color: "#C84B31", fontStyle: "italic" }}>hasta cuando dormís.</span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p
              className="mt-8 text-[#3D3631] leading-relaxed max-w-lg"
              style={{
                fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                fontSize: "clamp(17px, 1.6vw, 20px)",
              }}
            >
              Instalamos un bot en el WhatsApp de tu tienda que atiende consultas, verifica
              stock real y toma reservas. Sin intervención tuya.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={DEMO_WA}
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
                <WhatsAppIconSvg />
                Probá el demo ahora
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#precio"
                className="inline-flex items-center gap-3 border border-[#0A0908] text-[#0A0908] px-8 py-4 hover:bg-[#0A0908] hover:text-[#F5F2ED] transition-all duration-200"
                style={{
                  fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  borderRadius: "2px",
                }}
              >
                Ver precio
              </a>
            </div>
            <p
              className="mt-4 text-[#A89C8C]"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "12px",
                letterSpacing: "0.05em",
              }}
            >
              💬 El demo es un bot funcionando. Escribile como si fueras una clienta.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Problems */}
      <section className="py-24 px-8 md:px-16 lg:px-24 xl:px-32 border-t border-[#E8E2D8]">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn direction="up">
            <span
              className="font-mono text-xs tracking-[0.25em] text-[#A89C8C] uppercase"
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
            >
              Lo que te pasa hoy
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h2
              className="mt-4 mb-16"
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                color: "#0A0908",
                maxWidth: "700px",
              }}
            >
              3 cosas que te roban ventas{" "}
              <span style={{ color: "#C84B31", fontStyle: "italic" }}>todos los días.</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((p, i) => (
              <FadeIn key={p.number} direction="up" delay={i * 0.1}>
                <div
                  className="border border-[#E8E2D8] p-8"
                  style={{ borderRadius: "2px" }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontSize: "11px",
                      letterSpacing: "0.2em",
                      color: "#C84B31",
                      marginBottom: "16px",
                    }}
                  >
                    {p.number}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-fraunces), Georgia, serif",
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "#0A0908",
                      marginBottom: "12px",
                      lineHeight: 1.2,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                      fontSize: "15px",
                      color: "#3D3631",
                      lineHeight: 1.6,
                    }}
                  >
                    {p.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Features — dark */}
      <section
        className="py-24 px-8 md:px-16 lg:px-24 xl:px-32 relative overflow-hidden"
        style={{ background: "#0A0908" }}
      >
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
          <FadeIn direction="up">
            <span
              className="font-mono text-xs tracking-[0.25em] uppercase"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                color: "#FFD60A",
              }}
            >
              Lo que hace el bot
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h2
              className="mt-4 mb-16"
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                color: "#F5F2ED",
                maxWidth: "700px",
              }}
            >
              Seis cosas que deja de hacer{" "}
              <span style={{ color: "#C84B31", fontStyle: "italic" }}>tu persona humana.</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.08}>
                <div className="flex items-start gap-4">
                  <span
                    style={{
                      color: "#FFD60A",
                      fontSize: "16px",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    ✦
                  </span>
                  <p
                    style={{
                      fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                      fontSize: "16px",
                      color: "#F5F2ED",
                      lineHeight: 1.5,
                    }}
                  >
                    {f.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="precio"
        className="py-24 px-8 md:px-16 lg:px-24 xl:px-32 border-t border-[#E8E2D8]"
      >
        <div className="max-w-[1400px] mx-auto">
          <FadeIn direction="up">
            <span
              className="font-mono text-xs tracking-[0.25em] text-[#A89C8C] uppercase"
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
            >
              Precio transparente
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h2
              className="mt-4 mb-16"
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                color: "#0A0908",
              }}
            >
              Sin letra chica.{" "}
              <span style={{ color: "#C84B31", fontStyle: "italic" }}>Sin sorpresas.</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {/* Plan mensual */}
            <FadeIn direction="up" delay={0.1}>
              <div
                className="border border-[#E8E2D8] p-8 flex flex-col"
                style={{ borderRadius: "2px" }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    color: "#A89C8C",
                    textTransform: "uppercase",
                    marginBottom: "16px",
                  }}
                >
                  Plan mensual
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-fraunces), Georgia, serif",
                    fontSize: "clamp(40px, 5vw, 56px)",
                    fontWeight: 600,
                    letterSpacing: "-0.03em",
                    color: "#0A0908",
                    lineHeight: 1,
                  }}
                >
                  USD 120
                  <span
                    style={{
                      fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                      fontSize: "16px",
                      color: "#A89C8C",
                      fontWeight: 400,
                      letterSpacing: "0",
                    }}
                  >
                    {" "}
                    /mes
                  </span>
                </div>
                <p
                  className="mt-4 flex-1"
                  style={{
                    fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                    fontSize: "15px",
                    color: "#3D3631",
                    lineHeight: 1.6,
                  }}
                >
                  Incluye hosting, mantenimiento, ajustes mensuales y soporte directo por
                  WhatsApp.
                </p>
                <a
                  href={CONTACT_WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 border border-[#0A0908] text-[#0A0908] px-6 py-3 hover:bg-[#0A0908] hover:text-[#F5F2ED] transition-all duration-200 group"
                  style={{
                    fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                    fontSize: "13px",
                    fontWeight: 500,
                    letterSpacing: "0.04em",
                    borderRadius: "2px",
                  }}
                >
                  Lo quiero
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </FadeIn>

            {/* Pago único */}
            <FadeIn direction="up" delay={0.2}>
              <div
                className="p-8 flex flex-col relative"
                style={{ background: "#0A0908", borderRadius: "2px" }}
              >
                {/* Badge */}
                <div
                  className="absolute top-0 right-6 -translate-y-1/2 px-3 py-1"
                  style={{
                    background: "#FFD60A",
                    borderRadius: "2px",
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "#0A0908",
                    textTransform: "uppercase",
                  }}
                >
                  40% OFF · Primeros 3
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    color: "#A89C8C",
                    textTransform: "uppercase",
                    marginBottom: "16px",
                  }}
                >
                  Pago único
                </div>
                <div style={{ lineHeight: 1 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                      fontSize: "18px",
                      color: "#A89C8C",
                      textDecoration: "line-through",
                    }}
                  >
                    USD 600
                  </span>
                  <div
                    style={{
                      fontFamily: "var(--font-fraunces), Georgia, serif",
                      fontSize: "clamp(40px, 5vw, 56px)",
                      fontWeight: 600,
                      letterSpacing: "-0.03em",
                      color: "#F5F2ED",
                    }}
                  >
                    USD 360
                  </div>
                </div>
                <p
                  className="mt-4 flex-1"
                  style={{
                    fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                    fontSize: "15px",
                    color: "#A89C8C",
                    lineHeight: 1.6,
                  }}
                >
                  Incluye código fuente y capacitación. A cambio pedimos un testimonio en
                  video.
                </p>
                <a
                  href={CONTACT_WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 bg-[#C84B31] text-[#F5F2ED] px-6 py-3 hover:bg-[#A33A23] transition-colors duration-200 group"
                  style={{
                    fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                    fontSize: "13px",
                    fontWeight: 500,
                    letterSpacing: "0.04em",
                    borderRadius: "2px",
                  }}
                >
                  Quiero ser el primero
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.3}>
            <p
              className="mt-8 text-[#A89C8C]"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "12px",
                letterSpacing: "0.05em",
              }}
            >
              Prueba gratis de 30 días en ambos planes. Si no te sirve, lo apagamos y no
              pagás nada.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA — dark */}
      <section
        className="py-24 px-8 md:px-16 lg:px-24 xl:px-32 text-center relative overflow-hidden"
        style={{ background: "#0A0908" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(to right, #1a1614 1px, transparent 1px), linear-gradient(to bottom, #1a1614 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
            opacity: 0.8,
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <FadeIn direction="up">
            <h2
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontSize: "clamp(36px, 5vw, 72px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                lineHeight: 1.0,
                color: "#F5F2ED",
              }}
            >
              Hablá con el bot
              <br />
              <span style={{ color: "#C84B31", fontStyle: "italic" }}>
                antes de contratarlo.
              </span>
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <p
              className="mt-6 text-[#A89C8C]"
              style={{
                fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                fontSize: "17px",
                lineHeight: 1.6,
              }}
            >
              Es el mismo bot que ponemos en tu tienda. Probalo primero, decidís después.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <a
              href={DEMO_WA}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 bg-[#C84B31] text-[#F5F2ED] px-10 py-5 hover:bg-[#A33A23] transition-colors duration-200 group"
              style={{
                fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                fontSize: "15px",
                fontWeight: 500,
                letterSpacing: "0.04em",
                borderRadius: "2px",
              }}
            >
              <WhatsAppIconSvg />
              Abrir la demo en WhatsApp
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

function WhatsAppIconSvg() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
