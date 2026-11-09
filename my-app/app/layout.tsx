import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"], display: "swap" });
export const metadata: Metadata = {
  title: "Joshua Cirilo · Clases de Inglés",
  description: "Aprende a conversar en inglés a tu nivel. Clases personalizadas con Joshua Cirilo, desde básico hasta intermedio.",
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={jakarta.variable}>
      <head><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@400&display=block" /></head>
      <body>{children}</body>
    </html>
  );
}
