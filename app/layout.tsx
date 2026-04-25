import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NoiseOverlay from "@/components/NoiseOverlay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEBRAS — Premium Digital Agency",
  description: "Digital agency premium untuk brand yang menolak standar biasa. Kami membangun sistem kepercayaan yang menskalakan pertumbuhan bisnis Anda.",
  keywords: ["digital agency", "web design", "branding", "Jakarta", "premium"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-black text-white antialiased">
        {children}
        <NoiseOverlay />
      </body>
    </html>
  );
}
