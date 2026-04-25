"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const InstagramSVG = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const WhatsAppSVG = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.123 1.531 5.856L0 24l6.332-1.508A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.011-1.373l-.36-.214-3.728.888.923-3.618-.236-.375A9.79 9.79 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
  </svg>
);

const MailSVG = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const navLinks = [
  { href: "/layanan", label: "Layanan" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/harga", label: "Harga" },
  { href: "/blog", label: "Blog" },
  { href: "/konsultasi", label: "Konsultasi" },
];

export default function Footer() {
  return (
    <footer className="section-dark pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-5 space-y-5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-navy font-black text-xl" style={{ background: "#FFC436" }}>
                N
              </div>
              <span className="text-2xl font-black text-white tracking-tight">NEBRAS</span>
            </Link>
            <p className="text-white/50 leading-relaxed max-w-sm text-[0.95rem]">
              Membantu bisnis Indonesia tampil premium, dipercaya, dan menghasilkan lebih banyak pelanggan.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/5 hover:bg-[#FFC436] hover:text-navy text-white/60 flex items-center justify-center transition-all duration-300"
              >
                <WhatsAppSVG />
              </a>
              <a
                href="https://instagram.com/nebras.id"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/5 hover:bg-[#FFC436] hover:text-navy text-white/60 flex items-center justify-center transition-all duration-300"
              >
                <InstagramSVG />
              </a>
              <a
                href="mailto:hello@nebras.id"
                className="w-11 h-11 rounded-full bg-white/5 hover:bg-[#FFC436] hover:text-navy text-white/60 flex items-center justify-center transition-all duration-300"
              >
                <MailSVG />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Halaman</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 hover:text-white text-sm transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Block */}
          <div className="md:col-span-4">
            <div
              className="rounded-card p-7"
              style={{ background: "rgba(255,196,54,0.06)", border: "1px solid rgba(255,196,54,0.15)" }}
            >
              <p className="text-white font-bold text-lg leading-snug mb-2">
                Siap upgrade website Anda?
              </p>
              <p className="text-white/50 text-sm mb-5 leading-relaxed">
                Dapatkan konsultasi gratis dan proposal harga dalam 24 jam.
              </p>
              <Link
                href="/konsultasi"
                className="btn-gold inline-flex items-center gap-2 px-5 py-3 text-sm"
              >
                Mulai Sekarang <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} NEBRAS. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/30 text-sm">Tersedia untuk proyek baru</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
