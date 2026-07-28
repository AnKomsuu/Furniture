import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Мебель на заказ в Майлуу-Суу | Кухни, Шкафы",
  description:
    "Изготовление мебели на заказ в Майлуу-Суу, Жалал-Абадская область. Кухни, шкафы, столы. Доставка и установка по всему Кыргызстану.",
  keywords: [
    "мебель на заказ",
    "кухни на заказ",
    "шкафы на заказ",
    "Майлуу-Суу",
    "Жалал-Абад",
    "Кыргызстан",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
