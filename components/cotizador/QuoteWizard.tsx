"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ProjectType,
  Scope,
  Urgency,
  QuoteData,
  QuoteResult,
  PROJECT_TYPES,
  EXTRAS_BY_TYPE,
  calculateQuote,
  buildWhatsAppMessage,
} from "@/lib/quote-calculator";

const TOTAL_STEPS = 5;

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
};

const SCOPES: { value: Scope; label: string; description: string }[] = [
  { value: "basico", label: "Básico", description: "Funcionalidades esenciales, rápido de implementar" },
  { value: "estandar", label: "Estándar", description: "Con integraciones, personalización y soporte" },
  { value: "avanzado", label: "Avanzado", description: "Solución completa a medida, máxima funcionalidad" },
];

const URGENCIES: { value: Urgency; label: string; description: string; note: string }[] = [
  { value: "urgente", label: "Urgente", description: "Necesito arrancar ya", note: "+35% sobre base" },
  { value: "normal", label: "Normal", description: "En las próximas semanas", note: "Precio estándar" },
  { value: "flexible", label: "Flexible", description: "Sin apuro, podemos planificar", note: "–8% sobre base" },
];

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="text-[#C84B31]"
      style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "11px", letterSpacing: "0.2em" }}
    >
      {children}
    </span>
  );
}

function StepHeading({ step, title, subtitle }: { step: number; title: string; subtitle?: string }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-6 h-px bg-[#C84B31]" />
        <Label>
          {String(step).padStart(2, "0")} / {String(TOTAL_STEPS).padStart(2, "0")}
        </Label>
      </div>
      <h2
        style={{
          fontFamily: "var(--font-fraunces), Georgia, serif",
          fontSize: "clamp(28px, 4vw, 48px)",
          fontWeight: 600,
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          color: "#0A0908",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-[#A89C8C]" style={{ fontFamily: "var(--font-geist-sans)", fontSize: "15px" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── Step 1: Project type ───────────────────────────────────────────────────

function StepType({ value, onChange }: { value: ProjectType | null; onChange: (v: ProjectType) => void }) {
  return (
    <div>
      <StepHeading step={1} title="¿Qué tipo de solución necesitás?" subtitle="Elegí la opción que mejor describe tu proyecto." />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {(Object.entries(PROJECT_TYPES) as [ProjectType, (typeof PROJECT_TYPES)[ProjectType]][]).map(
          ([key, info]) => (
            <button
              key={key}
              onClick={() => onChange(key)}
              className={`group text-left p-5 border transition-all duration-200 ${
                value === key
                  ? "bg-[#0A0908] border-[#0A0908]"
                  : "border-[#E8E2D8] hover:border-[#0A0908] hover:bg-[#0A0908]"
              }`}
              style={{ borderRadius: "2px" }}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl leading-none mt-0.5">{info.icon}</span>
                <div>
                  <div
                    className={`font-medium transition-colors ${
                      value === key ? "text-[#F5F2ED]" : "text-[#0A0908] group-hover:text-[#F5F2ED]"
                    }`}
                    style={{ fontFamily: "var(--font-fraunces)", fontSize: "16px", letterSpacing: "-0.01em" }}
                  >
                    {info.label}
                  </div>
                  <div
                    className={`mt-1 transition-colors ${
                      value === key ? "text-[#A89C8C]" : "text-[#A89C8C] group-hover:text-[#A89C8C]"
                    }`}
                    style={{ fontFamily: "var(--font-geist-sans)", fontSize: "13px", lineHeight: 1.5 }}
                  >
                    {info.description}
                  </div>
                </div>
              </div>
            </button>
          )
        )}
      </div>
    </div>
  );
}

// ─── Step 2: Scope ──────────────────────────────────────────────────────────

function StepScope({ value, onChange }: { value: Scope | null; onChange: (v: Scope) => void }) {
  return (
    <div>
      <StepHeading step={2} title="¿Qué alcance tiene el proyecto?" subtitle="Esto define la complejidad y el tiempo. Los precios se cotizán en USD." />
      <div className="flex flex-col gap-3">
        {SCOPES.map((s) => (
          <button
            key={s.value}
            onClick={() => onChange(s.value)}
            className={`group text-left p-6 border transition-all duration-200 flex items-center justify-between ${
              value === s.value
                ? "bg-[#C84B31] border-[#C84B31]"
                : "border-[#E8E2D8] hover:border-[#C84B31]"
            }`}
            style={{ borderRadius: "2px" }}
          >
            <div>
              <div
                className={`font-semibold transition-colors ${
                  value === s.value ? "text-[#F5F2ED]" : "text-[#0A0908]"
                }`}
                style={{ fontFamily: "var(--font-fraunces)", fontSize: "20px", letterSpacing: "-0.02em" }}
              >
                {s.label}
              </div>
              <div
                className={`mt-1 transition-colors ${
                  value === s.value ? "text-[#F5F2ED] opacity-80" : "text-[#A89C8C]"
                }`}
                style={{ fontFamily: "var(--font-geist-sans)", fontSize: "14px" }}
              >
                {s.description}
              </div>
            </div>
            <div
              className={`w-5 h-5 border-2 rounded-full shrink-0 ml-6 transition-all ${
                value === s.value ? "border-[#F5F2ED] bg-[#F5F2ED]" : "border-[#E8E2D8]"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Step 3: Extras ─────────────────────────────────────────────────────────

function StepExtras({
  projectType,
  value,
  onChange,
}: {
  projectType: ProjectType;
  value: string[];
  onChange: (v: string[]) => void;
}) {
  const options = EXTRAS_BY_TYPE[projectType];
  const toggle = (opt: string) =>
    onChange(value.includes(opt) ? value.filter((x) => x !== opt) : [...value, opt]);

  return (
    <div>
      <StepHeading
        step={3}
        title="¿Qué funcionalidades extra necesitás?"
        subtitle="Opcionales. Podés seleccionar varias o ninguna."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((opt) => {
          const selected = value.includes(opt);
          return (
            <button
              key={opt}
              onClick={() => toggle(opt)}
              className={`group text-left p-4 border transition-all duration-200 flex items-center gap-3 ${
                selected ? "bg-[#0A0908] border-[#0A0908]" : "border-[#E8E2D8] hover:border-[#0A0908]"
              }`}
              style={{ borderRadius: "2px" }}
            >
              <div
                className={`w-4 h-4 border shrink-0 flex items-center justify-center transition-all ${
                  selected ? "bg-[#C84B31] border-[#C84B31]" : "border-[#E8E2D8] group-hover:border-[#A89C8C]"
                }`}
                style={{ borderRadius: "2px" }}
              >
                {selected && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="#F5F2ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span
                className={`transition-colors ${selected ? "text-[#F5F2ED]" : "text-[#3D3631] group-hover:text-[#F5F2ED]"}`}
                style={{ fontFamily: "var(--font-geist-sans)", fontSize: "14px" }}
              >
                {opt}
              </span>
            </button>
          );
        })}
      </div>
      {value.length > 0 && (
        <p className="mt-5 text-[#A89C8C]" style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "11px", letterSpacing: "0.1em" }}>
          {value.length} extra{value.length > 1 ? "s" : ""} seleccionado{value.length > 1 ? "s" : ""} · +{value.length * 18}% sobre el precio base
        </p>
      )}
    </div>
  );
}

// ─── Step 4: Urgency + Contact ───────────────────────────────────────────────

function StepContact({
  urgency,
  contact,
  onUrgency,
  onContact,
}: {
  urgency: Urgency | null;
  contact: QuoteData["contact"];
  onUrgency: (v: Urgency) => void;
  onContact: (v: Partial<QuoteData["contact"]>) => void;
}) {
  return (
    <div>
      <StepHeading step={4} title="¿Cuándo necesitás arrancar?" subtitle="Completá tus datos para recibir la cotización." />

      {/* Urgency */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        {URGENCIES.map((u) => (
          <button
            key={u.value}
            onClick={() => onUrgency(u.value)}
            className={`flex-1 text-left p-4 border transition-all duration-200 ${
              urgency === u.value ? "bg-[#0A0908] border-[#0A0908]" : "border-[#E8E2D8] hover:border-[#0A0908]"
            }`}
            style={{ borderRadius: "2px" }}
          >
            <div
              className={`font-medium ${urgency === u.value ? "text-[#F5F2ED]" : "text-[#0A0908]"}`}
              style={{ fontFamily: "var(--font-fraunces)", fontSize: "16px" }}
            >
              {u.label}
            </div>
            <div
              className={`mt-0.5 ${urgency === u.value ? "text-[#A89C8C]" : "text-[#A89C8C]"}`}
              style={{ fontFamily: "var(--font-geist-sans)", fontSize: "12px" }}
            >
              {u.description}
            </div>
            <div
              className={`mt-2 ${urgency === u.value ? "text-[#C84B31]" : "text-[#A89C8C]"}`}
              style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "10px", letterSpacing: "0.1em" }}
            >
              {u.note}
            </div>
          </button>
        ))}
      </div>

      {/* Contact form */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {(
          [
            { key: "name", label: "Nombre *", placeholder: "Tu nombre", type: "text" },
            { key: "whatsapp", label: "WhatsApp *", placeholder: "+54 9 ...", type: "tel" },
            { key: "email", label: "Email", placeholder: "tu@email.com", type: "email" },
          ] as const
        ).map((field) => (
          <div key={field.key}>
            <label
              className="block mb-2 text-[#A89C8C]"
              style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "10px", letterSpacing: "0.15em" }}
            >
              {field.label}
            </label>
            <input
              type={field.type}
              placeholder={field.placeholder}
              value={contact[field.key]}
              onChange={(e) => onContact({ [field.key]: e.target.value })}
              className="w-full bg-transparent border border-[#E8E2D8] px-4 py-3 text-[#0A0908] placeholder-[#A89C8C] focus:outline-none focus:border-[#C84B31] transition-colors"
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontSize: "14px",
                borderRadius: "2px",
              }}
            />
          </div>
        ))}
        <div className="sm:col-span-2">
          <label
            className="block mb-2 text-[#A89C8C]"
            style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "10px", letterSpacing: "0.15em" }}
          >
            CONTANOS MÁS (OPCIONAL)
          </label>
          <textarea
            placeholder="Describí brevemente tu proyecto o lo que necesitás..."
            value={contact.description}
            onChange={(e) => onContact({ description: e.target.value })}
            rows={3}
            className="w-full bg-transparent border border-[#E8E2D8] px-4 py-3 text-[#0A0908] placeholder-[#A89C8C] focus:outline-none focus:border-[#C84B31] transition-colors resize-none"
            style={{ fontFamily: "var(--font-geist-sans)", fontSize: "14px", borderRadius: "2px" }}
          />
        </div>
      </div>
    </div>
  );
}

// ─── Step 5: Result ─────────────────────────────────────────────────────────

function StepResult({ data, result }: { data: QuoteData; result: QuoteResult }) {
  const waMsg = buildWhatsAppMessage(data, result);

  return (
    <div>
      <div className="flex items-center gap-3 mb-5">
        <div className="w-6 h-px bg-[#C84B31]" />
        <Label>05 / 05 · ESTIMACIÓN</Label>
      </div>

      <h2
        className="mb-8"
        style={{
          fontFamily: "var(--font-fraunces), Georgia, serif",
          fontSize: "clamp(28px, 4vw, 48px)",
          fontWeight: 600,
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          color: "#0A0908",
        }}
      >
        Acá está tu
        <br />
        <span style={{ color: "#C84B31", fontStyle: "italic" }}>cotización.</span>
      </h2>

      {/* Price card */}
      <div className="bg-[#0A0908] p-8 mb-6" style={{ borderRadius: "2px" }}>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div
              className="text-[#A89C8C] mb-2"
              style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "10px", letterSpacing: "0.2em" }}
            >
              ESTIMACIÓN EN USD
            </div>
            <div
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontSize: "clamp(36px, 6vw, 64px)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                lineHeight: 1.0,
                color: "#F5F2ED",
              }}
            >
              USD {result.minUSD.toLocaleString()}
              <span className="text-[#A89C8C]" style={{ fontSize: "0.5em" }}> – </span>
              {result.maxUSD.toLocaleString()}
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:items-end">
            <div>
              <div className="text-[#A89C8C] mb-1" style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "9px", letterSpacing: "0.15em" }}>PLAZO ESTIMADO</div>
              <div className="text-[#F5F2ED]" style={{ fontFamily: "var(--font-geist-sans)", fontSize: "15px" }}>{result.weeks}</div>
            </div>
            <div>
              <div className="text-[#A89C8C] mb-1" style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "9px", letterSpacing: "0.15em" }}>ALCANCE</div>
              <div className="text-[#F5F2ED]" style={{ fontFamily: "var(--font-geist-sans)", fontSize: "15px" }}>{result.scopeLabel}</div>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-6 pt-6 border-t border-[#1a1614] flex flex-wrap gap-2">
          <span style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "10px", letterSpacing: "0.1em", padding: "4px 8px", borderRadius: "2px", backgroundColor: "rgba(200,75,49,0.3)", color: "#C84B31" }}>
            {result.typeLabel}
          </span>
          {data.extras.map((e) => (
            <span key={e} style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "10px", letterSpacing: "0.1em", padding: "4px 8px", borderRadius: "2px", backgroundColor: "rgba(245,242,237,0.08)", color: "#A89C8C" }}>
              {e}
            </span>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-[#A89C8C] mb-8" style={{ fontFamily: "var(--font-geist-sans)", fontSize: "13px", lineHeight: 1.6 }}>
        * Esta es una estimación orientativa. El presupuesto final depende de los requerimientos específicos.
        Envianos el detalle por WhatsApp y te respondemos en menos de 24hs.
      </p>

      {/* CTA */}
      <a
        href={`https://wa.me/5492657562123?text=${waMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-3 bg-[#C84B31] text-[#F5F2ED] px-8 py-4 hover:bg-[#A33A23] active:scale-95 transition-all duration-200"
        style={{ fontFamily: "var(--font-geist-sans)", fontSize: "14px", fontWeight: 500, letterSpacing: "0.04em", borderRadius: "2px" }}
      >
        <WhatsAppIcon />
        Enviar cotización por WhatsApp
        <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
      </a>
    </div>
  );
}

// ─── Main wizard ─────────────────────────────────────────────────────────────

export function QuoteWizard() {
  const [step, setStep] = useState(1);
  const [dir, setDir] = useState(1);
  const [type, setType] = useState<ProjectType | null>(null);
  const [scope, setScope] = useState<Scope | null>(null);
  const [extras, setExtras] = useState<string[]>([]);
  const [urgency, setUrgency] = useState<Urgency | null>(null);
  const [contact, setContact] = useState({ name: "", whatsapp: "", email: "", description: "" });

  const go = (next: number) => {
    setDir(next > step ? 1 : -1);
    setStep(next);
  };

  const canNext = () => {
    if (step === 1) return type !== null;
    if (step === 2) return scope !== null;
    if (step === 3) return true;
    if (step === 4) return urgency !== null && contact.name.trim() !== "" && contact.whatsapp.trim() !== "";
    return false;
  };

  const result =
    step === 5 && type && scope && urgency
      ? calculateQuote({ type, scope, extras, urgency })
      : null;

  const quoteData: QuoteData | null =
    type && scope && urgency
      ? { type, scope, extras, urgency, contact }
      : null;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="mb-10">
        <div className="flex justify-between mb-3">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <button
              key={i}
              onClick={() => i + 1 < step && go(i + 1)}
              className={`transition-all duration-300 ${
                i + 1 < step ? "cursor-pointer" : "cursor-default"
              }`}
            >
              <div
                className={`h-0.5 transition-all duration-500 ${
                  i + 1 <= step ? "bg-[#C84B31]" : "bg-[#E8E2D8]"
                }`}
                style={{ width: `calc((100vw - 4rem) / ${TOTAL_STEPS} - 8px)`, maxWidth: "120px" }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Step content */}
      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={step}
          custom={dir}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {step === 1 && <StepType value={type} onChange={(v) => { setType(v); }} />}
          {step === 2 && <StepScope value={scope} onChange={(v) => { setScope(v); }} />}
          {step === 3 && type && <StepExtras projectType={type} value={extras} onChange={setExtras} />}
          {step === 4 && (
            <StepContact
              urgency={urgency}
              contact={contact}
              onUrgency={(v) => setUrgency(v)}
              onContact={(v) => setContact((prev) => ({ ...prev, ...v }))}
            />
          )}
          {step === 5 && result && quoteData && <StepResult data={quoteData} result={result} />}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      {step < 5 && (
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-[#E8E2D8]">
          <button
            onClick={() => go(step - 1)}
            className={`flex items-center gap-2 text-[#A89C8C] hover:text-[#0A0908] transition-colors duration-200 ${
              step === 1 ? "invisible" : ""
            }`}
            style={{ fontFamily: "var(--font-geist-sans)", fontSize: "14px" }}
          >
            ← Anterior
          </button>

          <button
            onClick={() => go(step + 1)}
            disabled={!canNext()}
            className={`inline-flex items-center gap-2 px-8 py-3.5 transition-all duration-200 ${
              canNext()
                ? "bg-[#0A0908] text-[#F5F2ED] hover:bg-[#3D3631]"
                : "bg-[#E8E2D8] text-[#A89C8C] cursor-not-allowed"
            }`}
            style={{ fontFamily: "var(--font-geist-sans)", fontSize: "14px", fontWeight: 500, letterSpacing: "0.04em", borderRadius: "2px" }}
          >
            {step === 4 ? "Ver cotización" : "Siguiente"} →
          </button>
        </div>
      )}
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
