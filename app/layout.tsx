import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "TPQ Al-Muthmainnah",
  description: "Mewujudkan Generasi Qur'ani - TPQ Al-Muthmainnah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased text-brand-dark bg-brand-bg relative`}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
