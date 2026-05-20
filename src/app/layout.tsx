import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Laborativo",
  description: "Consultoría creativa basada en la emoción — cultura, liderazgo y comportamiento organizacional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
