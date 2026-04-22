export interface Product {
  id: string;
  name: string;
  description: string;
  category: "remeras" | "pantalones" | "vestidos" | "abrigos" | "accesorios";
  price: number;
  sizes: Record<string, number>;
  colors: string[];
  tags: string[];
}

export const STORE_INFO = {
  name: "Tienda Laguna",
  instagram: "@tiendalaguna.ok",
  location: "Villa Mercedes, San Luis",
  shipping: {
    provider: "Andreani",
    freeFrom: 80000,
    description:
      "Enviamos por Andreani a todo el país. Envío gratis en compras mayores a $80.000.",
  },
  payment: {
    methods: ["MercadoPago", "Transferencia bancaria", "Modo", "Efectivo"],
    installments: "6 cuotas sin interés con MercadoPago",
    transferDiscount: "10% de descuento pagando por transferencia bancaria",
  },
  hours: "Lunes a sábados de 10 a 20hs",
  returns:
    "Cambios dentro de los 15 días presentando ticket. No se realizan devoluciones en efectivo.",
} as const;

export const CATALOG: Product[] = [
  // REMERAS
  {
    id: "rem-001",
    name: "Remera oversize algodón",
    description: "Remera oversize 100% algodón, corte amplio y hombros caídos.",
    category: "remeras",
    price: 12500,
    sizes: { XS: 5, S: 3, M: 0, L: 2, XL: 4 },
    colors: ["blanco", "negro", "beige"],
    tags: ["oversize", "algodón", "básica"],
  },
  {
    id: "rem-002",
    name: "Remera básica modal",
    description: "Remera semientallada en tela modal, suave y fresca para el día a día.",
    category: "remeras",
    price: 9500,
    sizes: { XS: 8, S: 5, M: 6, L: 0 },
    colors: ["blanco", "negro", "nude"],
    tags: ["básica", "modal", "ajustada"],
  },
  {
    id: "rem-003",
    name: 'Remera estampada "Sol de Tarde"',
    description: "Remera con estampado exclusivo Sol de Tarde, edición limitada.",
    category: "remeras",
    price: 15000,
    sizes: { S: 0, M: 2, L: 0 },
    colors: ["terracota", "azul marino"],
    tags: ["estampada", "edición limitada"],
  },
  {
    id: "rem-004",
    name: "Remera cropped lino",
    description: "Remera cropped en tela de lino natural, largo debajo del busto.",
    category: "remeras",
    price: 13800,
    sizes: { XS: 3, S: 0, M: 4, L: 1, XL: 0 },
    colors: ["blanco roto", "verde salvia", "negro"],
    tags: ["cropped", "lino", "verano"],
  },
  // PANTALONES
  {
    id: "pan-001",
    name: "Jean wide leg",
    description: "Jean de corte ancho con pierna recta desde la cadera, tiro alto.",
    category: "pantalones",
    price: 48500,
    sizes: { "36": 4, "38": 2, "40": 0, "42": 3, "44": 1 },
    colors: ["azul medio", "negro"],
    tags: ["wide leg", "jean", "tiro alto"],
  },
  {
    id: "pan-002",
    name: "Pantalón de vestir negro",
    description: "Pantalón recto de vestir en gabardina, corte clásico y versátil.",
    category: "pantalones",
    price: 38000,
    sizes: { "36": 3, "38": 0, "40": 2, "42": 4 },
    colors: ["negro"],
    tags: ["vestir", "clásico", "gabardina"],
  },
  {
    id: "pan-003",
    name: "Jean mom fit",
    description: "Jean mom fit con tiro alto y pierna recta, levemente entallado en la rodilla.",
    category: "pantalones",
    price: 42000,
    sizes: { "36": 2, "38": 5, "40": 3, "42": 0, "44": 2 },
    colors: ["azul oscuro", "gris"],
    tags: ["mom fit", "jean", "tiro alto"],
  },
  {
    id: "pan-004",
    name: "Pantalón cargo jogger",
    description: "Pantalón cargo con bolsillos laterales y puño en tobillo, tela french terry.",
    category: "pantalones",
    price: 34500,
    sizes: { XS: 3, S: 4, M: 2, L: 0 },
    colors: ["kaki", "negro", "beige"],
    tags: ["cargo", "jogger", "cómodo"],
  },
  // VESTIDOS
  {
    id: "ves-001",
    name: "Vestido midi satén",
    description: "Vestido midi en satén con escote corazón y breteles finos. Largo rodilla +20cm.",
    category: "vestidos",
    price: 68000,
    sizes: { XS: 1, S: 3, M: 2, L: 0 },
    colors: ["negro", "bordo", "champagne"],
    tags: ["midi", "satén", "fiesta", "elegante"],
  },
  {
    id: "ves-002",
    name: "Vestido lino verano",
    description: "Vestido suelto en lino natural, largo hasta la rodilla, manga corta.",
    category: "vestidos",
    price: 54000,
    sizes: { XS: 2, S: 4, M: 3, L: 2 },
    colors: ["crudo", "verde agua"],
    tags: ["lino", "verano", "casual"],
  },
  {
    id: "ves-003",
    name: "Vestido mini floreado",
    description: "Vestido mini con estampado floral y tirantes cruzados en la espalda.",
    category: "vestidos",
    price: 47500,
    sizes: { XS: 0, S: 1, M: 0, L: 0 },
    colors: ["fondo blanco con flores"],
    tags: ["mini", "floral", "verano"],
  },
  // ABRIGOS
  {
    id: "abr-001",
    name: "Campera cuero sintético",
    description: "Campera moto en cuero sintético, cierre metálico y bolsillos con solapa.",
    category: "abrigos",
    price: 125000,
    sizes: { S: 2, M: 3, L: 1, XL: 0 },
    colors: ["negro", "marrón"],
    tags: ["cuero", "moto", "invierno"],
  },
  {
    id: "abr-002",
    name: "Blazer oversize",
    description: "Blazer oversize en tela tramada, hombros marcados y botones dorados.",
    category: "abrigos",
    price: 89000,
    sizes: { XS: 1, S: 4, M: 2, L: 3 },
    colors: ["negro", "camel", "gris perla"],
    tags: ["blazer", "oversize", "elegante"],
  },
  {
    id: "abr-003",
    name: "Trench camel",
    description: "Trench clásico con cinturón en el mismo tono, largo hasta la rodilla.",
    category: "abrigos",
    price: 115000,
    sizes: { S: 0, M: 2, L: 1 },
    colors: ["camel"],
    tags: ["trench", "clásico", "lluvia"],
  },
  {
    id: "abr-004",
    name: "Buzo canguro",
    description: "Buzo con capucha y bolsillo canguro en algodón frisado, unisex.",
    category: "abrigos",
    price: 28500,
    sizes: { XS: 5, S: 4, M: 6, L: 3, XL: 2 },
    colors: ["negro", "gris", "mostaza"],
    tags: ["buzo", "cómodo", "casual"],
  },
  // ACCESORIOS
  {
    id: "acc-001",
    name: "Cinturón cuero trenzado",
    description: "Cinturón trenzado en cuero genuino con hebilla metálica dorada.",
    category: "accesorios",
    price: 18500,
    sizes: { única: 8 },
    colors: ["negro", "marrón", "blanco"],
    tags: ["cinturón", "cuero", "accesorio"],
  },
  {
    id: "acc-002",
    name: "Bolso tote canvas",
    description: "Bolso tote en tela canvas resistente, asa larga y bolsillo interior.",
    category: "accesorios",
    price: 24000,
    sizes: { única: 6 },
    colors: ["negro", "crudo", "verde"],
    tags: ["bolso", "tote", "canvas"],
  },
  {
    id: "acc-003",
    name: "Pañuelo seda estampado",
    description: "Pañuelo en seda con estampado geométrico, múltiples usos.",
    category: "accesorios",
    price: 12000,
    sizes: { única: 12 },
    colors: ["multicolor", "azul", "rosa viejo"],
    tags: ["pañuelo", "seda", "accesorio"],
  },
  {
    id: "acc-004",
    name: "Gorro lana",
    description: "Gorro de lana tejido a mano con ribete en el borde.",
    category: "accesorios",
    price: 8500,
    sizes: { única: 0 },
    colors: ["gris", "negro", "bordo"],
    tags: ["gorro", "lana", "invierno"],
  },
  {
    id: "acc-005",
    name: "Aros largos dorados",
    description: "Aros colgantes en baño de oro 18k, diseño geométrico moderno.",
    category: "accesorios",
    price: 9800,
    sizes: { única: 15 },
    colors: ["dorado"],
    tags: ["aros", "dorado", "accesorio"],
  },
];

export function findProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return CATALOG.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.includes(q) ||
      p.tags.some((t) => t.includes(q)) ||
      p.colors.some((c) => c.includes(q))
  );
}

export function getProductById(id: string): Product | undefined {
  return CATALOG.find((p) => p.id === id);
}

export function formatPrice(ars: number): string {
  return `$${ars.toLocaleString("es-AR")}`;
}

export function checkStock(id: string, size: string): number {
  const product = getProductById(id);
  if (!product) return 0;
  return product.sizes[size] ?? 0;
}

export function catalogForPrompt(): string {
  const byCategory = CATALOG.reduce<Record<string, Product[]>>((acc, p) => {
    if (!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p);
    return acc;
  }, {});

  const lines: string[] = ["--- CATÁLOGO ACTUAL ---"];

  for (const [cat, products] of Object.entries(byCategory)) {
    lines.push(`\n${cat.toUpperCase()}:`);
    for (const p of products) {
      const allOut = Object.values(p.sizes).every((s) => s === 0);
      const sizesStr = Object.entries(p.sizes)
        .map(([s, stock]) => (stock === 0 ? `${s}:AGOTADO` : `${s}:${stock}`))
        .join(", ");
      const stockNote = allOut ? " ⚠️ SIN STOCK" : "";
      lines.push(
        `  • ${p.name} (${formatPrice(p.price)})${stockNote} | Colores: ${p.colors.join(", ")} | Talles: ${sizesStr}`
      );
    }
  }

  return lines.join("\n");
}
