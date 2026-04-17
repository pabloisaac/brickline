export type ProjectType =
  | "bot"
  | "automatizacion"
  | "gestion"
  | "ecommerce"
  | "app"
  | "afip"
  | "consultoria";

export type Scope = "basico" | "estandar" | "avanzado";
export type Urgency = "urgente" | "normal" | "flexible";

export interface QuoteData {
  type: ProjectType;
  scope: Scope;
  extras: string[];
  urgency: Urgency;
  contact: {
    name: string;
    whatsapp: string;
    email: string;
    description: string;
  };
}

export const PROJECT_TYPES: Record<
  ProjectType,
  { label: string; description: string; icon: string }
> = {
  bot: {
    label: "Bot & Asistente IA",
    description: "Chatbot para WhatsApp, web o redes que atiende y vende 24/7",
    icon: "🤖",
  },
  automatizacion: {
    label: "Automatizaciones",
    description: "Flujos automáticos que eliminan el trabajo manual repetitivo",
    icon: "⚡",
  },
  gestion: {
    label: "Sistema de gestión",
    description: "CRM, ERP o inventario a medida para tu operación",
    icon: "📊",
  },
  ecommerce: {
    label: "E-commerce",
    description: "Tienda online integrada con stock, pagos y AFIP",
    icon: "🛒",
  },
  app: {
    label: "App web / móvil",
    description: "Aplicación a medida para tu equipo o tus clientes",
    icon: "📱",
  },
  afip: {
    label: "Integración AFIP",
    description: "Facturación electrónica automática con IA",
    icon: "🔗",
  },
  consultoria: {
    label: "Consultoría IA",
    description: "Diagnóstico, roadmap y acompañamiento en adopción de IA",
    icon: "💡",
  },
};

export const EXTRAS_BY_TYPE: Record<ProjectType, string[]> = {
  bot: [
    "Panel de administración",
    "Integración con CRM",
    "Analytics y reportes",
    "WhatsApp Business API",
    "Reconocimiento de voz",
    "Soporte multiidioma",
  ],
  automatizacion: [
    "Dashboard de monitoreo",
    "Notificaciones en tiempo real",
    "Múltiples plataformas",
    "IA avanzada (GPT/Claude)",
    "Logs y auditoría",
    "Alertas por WhatsApp",
  ],
  gestion: [
    "App móvil complementaria",
    "Reportes en PDF",
    "Integración AFIP",
    "Multi-sucursal",
    "API pública",
    "Portal de clientes",
  ],
  ecommerce: [
    "MercadoPago / Modo",
    "Integración AFIP",
    "App móvil",
    "Stock automático IA",
    "Email marketing",
    "Analytics con IA",
  ],
  app: [
    "iOS + Android",
    "Modo offline",
    "Notificaciones push",
    "IA integrada",
    "Sincronización tiempo real",
    "Panel de administración",
  ],
  afip: [
    "Múltiples puntos de venta",
    "Retenciones y percepciones",
    "Libro IVA digital",
    "Reportes para contador",
    "Panel de contador",
    "Alertas de vencimientos",
  ],
  consultoria: [
    "Roadmap 6 meses",
    "POC / Prototipo incluido",
    "Capacitación al equipo",
    "Seguimiento mensual",
    "Documentación técnica",
  ],
};

// Base prices in USD
const BASE_PRICES: Record<ProjectType, Record<Scope, number>> = {
  bot:          { basico: 600,   estandar: 1800,  avanzado: 4500 },
  automatizacion:{ basico: 400,   estandar: 1000,  avanzado: 2800 },
  gestion:      { basico: 2500,  estandar: 6000,  avanzado: 14000 },
  ecommerce:    { basico: 1800,  estandar: 4000,  avanzado: 9000 },
  app:          { basico: 3500,  estandar: 8000,  avanzado: 18000 },
  afip:         { basico: 900,   estandar: 2200,  avanzado: 5000 },
  consultoria:  { basico: 250,   estandar: 600,   avanzado: 1400 },
};

const SCOPE_LABELS: Record<Scope, string> = {
  basico: "Básico",
  estandar: "Estándar",
  avanzado: "Avanzado",
};

const URGENCY_MULTIPLIERS: Record<Urgency, number> = {
  urgente: 1.35,
  normal: 1.0,
  flexible: 0.92,
};

const ESTIMATED_WEEKS: Record<ProjectType, Record<Scope, string>> = {
  bot:          { basico: "2–3 semanas", estandar: "4–6 semanas", avanzado: "8–12 semanas" },
  automatizacion:{ basico: "1–2 semanas", estandar: "3–5 semanas", avanzado: "6–10 semanas" },
  gestion:      { basico: "6–8 semanas", estandar: "10–16 semanas", avanzado: "20–30 semanas" },
  ecommerce:    { basico: "3–5 semanas", estandar: "6–10 semanas", avanzado: "12–20 semanas" },
  app:          { basico: "8–10 semanas", estandar: "14–20 semanas", avanzado: "24–36 semanas" },
  afip:         { basico: "2–3 semanas", estandar: "4–6 semanas", avanzado: "8–12 semanas" },
  consultoria:  { basico: "1 semana", estandar: "2–3 semanas", avanzado: "4–6 semanas" },
};

export interface QuoteResult {
  minUSD: number;
  maxUSD: number;
  weeks: string;
  scopeLabel: string;
  typeLabel: string;
}

export function calculateQuote(data: Pick<QuoteData, "type" | "scope" | "extras" | "urgency">): QuoteResult {
  const base = BASE_PRICES[data.type][data.scope];
  const urgencyMultiplier = URGENCY_MULTIPLIERS[data.urgency];
  const extrasMultiplier = 1 + data.extras.length * 0.18;

  const adjusted = base * urgencyMultiplier * extrasMultiplier;
  const min = Math.round(adjusted * 0.85 / 50) * 50;
  const max = Math.round(adjusted * 1.2 / 50) * 50;

  return {
    minUSD: min,
    maxUSD: max,
    weeks: ESTIMATED_WEEKS[data.type][data.scope],
    scopeLabel: SCOPE_LABELS[data.scope],
    typeLabel: PROJECT_TYPES[data.type].label,
  };
}

export function buildWhatsAppMessage(data: QuoteData, result: QuoteResult): string {
  const lines = [
    `Hola! Hice la cotización en BlacklineIA y me interesa avanzar.`,
    ``,
    `*Tipo de proyecto:* ${result.typeLabel}`,
    `*Alcance:* ${result.scopeLabel}`,
    data.extras.length > 0 ? `*Extras:* ${data.extras.join(", ")}` : null,
    `*Estimación:* USD ${result.minUSD.toLocaleString()} – ${result.maxUSD.toLocaleString()}`,
    `*Plazo:* ${result.weeks}`,
    data.contact.description ? `\n*Detalle:* ${data.contact.description}` : null,
    `\nMi nombre es ${data.contact.name}. ¿Podemos hablar?`,
  ]
    .filter(Boolean)
    .join("\n");

  return encodeURIComponent(lines);
}
