import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NEBRAS — Website Premium untuk Bisnis Indonesia",
    template: "%s | NEBRAS",
  },
  description:
    "NEBRAS membantu bisnis tampil lebih dipercaya dan menghasilkan pelanggan melalui website modern premium. Khusus untuk travel umrah, korporat, UMKM, dan personal brand.",
  keywords: ["website premium", "jasa pembuatan website", "web design indonesia", "nebras", "travel umrah website"],
  authors: [{ name: "NEBRAS" }],
  openGraph: {
    title: "NEBRAS — Website Premium untuk Bisnis Indonesia",
    description: "Tampil lebih dipercaya. Hasilkan lebih banyak pelanggan.",
    type: "website",
    url: "https://nebras.id",
    siteName: "NEBRAS",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEBRAS — Website Premium untuk Bisnis Indonesia",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={inter.variable}>
      <body>
        <Navbar />
        <main className="pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
