"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, X, Globe, Smartphone, Zap, Users, ShoppingBag, Building2, Star, Megaphone } from "lucide-react";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

const services = [
  {
    icon: <Star size={28} className="text-gold" />,
    title: "Haji & Umrah",
    desc: "Website yang membangun kepercayaan jamaah, menampilkan paket lengkap, dan mendorong pendaftaran secara online.",
    features: ["Galeri & testimonial", "Formulir pendaftaran", "Jadwal paket keberangkatan", "Integrasi WhatsApp"],
    accent: "rgba(255,196,54,0.08)",
  },
  {
    icon: <Globe size={28} className="text-blue-glow" />,
    title: "Travel & Pariwisata",
    desc: "Platform booking modern dengan tampilan destinasi yang menggugah dan sistem reservasi terintegrasi.",
    features: ["Katalog destinasi", "Sistem booking online", "Galeri foto premium", "Review & rating"],
    accent: "rgba(145,200,228,0.08)",
  },
  {
    icon: <ShoppingBag size={28} className="text-green-500" />,
    title: "UMKM & Toko Online",
    desc: "Toko digital yang menarik pelanggan, menampilkan produk secara elegan, dan meningkatkan penjualan.",
    features: ["Katalog produk", "Keranjang belanja", "Testimoni pembeli", "SEO lokal"],
    accent: "rgba(34,197,94,0.08)",
  },
  {
    icon: <Building2 size={28} className="text-purple-500" />,
    title: "Corporate Company",
    desc: "Profil perusahaan yang memancarkan profesionalisme dan memenangkan kepercayaan klien korporasi.",
    features: ["Company profile premium", "Portofolio proyek", "Tim & manajemen", "Artikel & berita"],
    accent: "rgba(168,85,247,0.08)",
  },
  {
    icon: <Users size={28} className="text-orange-500" />,
    title: "Personal Branding",
    desc: "Portofolio personal yang menonjolkan keahlian Anda dan menarik klien atau employer impian.",
    features: ["Bio & portofolio", "Layanan & tarif", "Blog & insight", "Booking konsultasi"],
    accent: "rgba(249,115,22,0.08)",
  },
  {
    icon: <Megaphone size={28} className="text-red-500" />,
    title: "Landing Page Ads",
    desc: "Halaman konversi tinggi yang mengubah traffic iklan menjadi leads dan penjualan nyata.",
    features: ["CTA optimal", "A/B test ready", "Loading <1 detik", "Form & WhatsApp CTA"],
    accent: "rgba(239,68,68,0.08)",
  },
];

const comparison = [
  { feature: "Desain custom sesuai brand", custom: true, template: false },
  { feature: "Performa loading optimal", custom: true, template: false },
  { feature: "SEO struktur terbaik", custom: true, template: false },
  { feature: "Mobile experience premium", custom: true, template: "partial" },
  { feature: "Integrasi sistem bisnis", custom: true, template: false },
  { feature: "Tidak ada batasan fitur", custom: true, template: false },
  { feature: "Dukungan teknis dedicated", custom: true, template: false },
  { feature: "Skalabel seiring bisnis", custom: true, template: false },
];

export default function LayananPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{ background: "rgba(255,196,54,0.12)", color: "#FFC436" }}>
              Solusi Premium
            </span>
            <h1 className="text-white mb-6" style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)" }}>
              Website Premium untuk <br />
              <span className="text-gradient-gold">Berbagai Industri</span>
            </h1>
            <p className="text-white/50 text-xl max-w-2xl mx-auto leading-relaxed">
              Setiap industri punya kebutuhan unik. Kami hadirkan solusi yang tepat untuk bisnis Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-light py-section">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <div className="p-8 rounded-card card-hover h-full flex flex-col"
                  style={{ background: svc.accent, border: "1px solid rgba(11,25,44,0.06)" }}>
                  <div className="mb-5">{svc.icon}</div>
                  <h3 className="text-navy text-xl font-black mb-3">{svc.title}</h3>
                  <p className="text-navy/60 leading-relaxed mb-6 flex-1">{svc.desc}</p>
                  <ul className="space-y-2 mb-7">
                    {svc.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-navy/70">
                        <CheckCircle size={14} className="text-green-500 shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/konsultasi"
                    className="btn-gold inline-flex items-center justify-center gap-2 px-5 py-3 text-sm">
                    Konsultasi Layanan Ini <ArrowRight size={15} />
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section-dark py-section">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <FadeUp className="text-center mb-14">
            <span className="text-gold font-bold text-sm uppercase tracking-widest">Perbandingan</span>
            <h2 className="text-white mt-3" style={{ fontSize: "clamp(1.8rem,4vw,3rem)" }}>
              Website Custom vs Template
            </h2>
            <p className="text-white/50 mt-4">Kenapa bisnis serius memilih custom website dari NEBRAS</p>
          </FadeUp>

          <FadeUp>
            <div className="rounded-card overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              {/* Header */}
              <div className="grid grid-cols-3 gap-0 bg-white/5 px-6 py-4">
                <div className="text-white/40 text-sm font-semibold">Fitur</div>
                <div className="text-center">
                  <span className="px-3 py-1 rounded-full text-sm font-bold" style={{ background: "rgba(255,196,54,0.15)", color: "#FFC436" }}>
                    NEBRAS Custom
                  </span>
                </div>
                <div className="text-center text-white/30 text-sm font-semibold">Template</div>
              </div>

              {comparison.map((row, i) => (
                <div key={i} className={`grid grid-cols-3 gap-0 px-6 py-4 ${i % 2 === 0 ? "bg-white/2" : ""}`}
                  style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <div className="text-white/70 text-sm flex items-center">{row.feature}</div>
                  <div className="flex justify-center items-center">
                    <CheckCircle size={20} className="text-green-400" />
                  </div>
                  <div className="flex justify-center items-center">
                    {row.template === true ? (
                      <CheckCircle size={20} className="text-white/30" />
                    ) : row.template === "partial" ? (
                      <span className="text-yellow-500 text-xs font-semibold">Terbatas</span>
                    ) : (
                      <X size={20} className="text-red-500/60" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp className="text-center mt-10">
            <Link href="/konsultasi" className="btn-gold inline-flex items-center gap-2 px-8 py-4">
              Mulai dengan NEBRAS <ArrowRight size={18} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
