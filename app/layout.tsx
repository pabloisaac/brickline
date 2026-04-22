import type { Metadata } from "next";
import { Fraunces, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BlacklineIA — Bots de WhatsApp para comercios argentinos",
  description:
    "Instalamos bots de WhatsApp en tu tienda que responden stock, talles y precios las 24hs. Listo en 7 días, desde USD 120 por mes.",
  metadataBase: new URL("https://blacklineia.com.ar"),
  openGraph: {
    title: "BlacklineIA — Bots de WhatsApp para comercios argentinos",
    description: "Tu tienda atendiendo sola las 24hs. Bot instalado en 7 días, desde USD 120/mes.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${geistSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full" suppressHydrationWarning>{children}</body>
    </html>
  );
}
