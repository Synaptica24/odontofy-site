import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { site } from "@/config/site";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.nome} · gestão para consultórios odontológicos`, template: `%s · ${site.nome}` },
  description: site.descricao,
  openGraph: { type: "website", locale: "pt_BR", url: "/", siteName: site.nome, title: `${site.nome} · ${site.assinatura}`, description: site.descricao },
  twitter: { card: "summary_large_image", title: `${site.nome} · ${site.assinatura}`, description: site.descricao },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f6f4ef" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
