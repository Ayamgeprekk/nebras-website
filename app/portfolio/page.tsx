"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

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

const filters = ["Semua", "Travel", "Corporate", "UMKM", "Landing Page"];

const projects = [
  {
    title: "Al-Barakah Umrah",
    category: "Travel",
    tag: "Travel Umrah",
    metric: "+280% leads",
    desc: "Website modern untuk travel umrah premium dengan sistem pendaftaran terintegrasi.",
    color: "from-amber-900 to-amber-800",
    result: "280% kenaikan pendaftaran dalam 3 bulan",
  },
  {
    title: "Safwah Tours",
    category: "Travel",
    tag: "Travel & Pariwisata",
    metric: "+190% booking",
    desc: "Platform booking wisata modern dengan galeri destinasi dan sistem reservasi.",
    color: "from-sky-900 to-sky-800",
    result: "190% peningkatan booking online",
  },
  {
    title: "PT. Nusantara Jaya",
    category: "Corporate",
    tag: "Company Profile",
    metric: "+5x credibility",
    desc: "Profil perusahaan premium yang memancarkan otoritas dan profesionalisme.",
    color: "from-slate-800 to-slate-700",
    result: "Menang 3 tender besar dalam 6 bulan",
  },
  {
    title: "Toko Berkah Online",
    category: "UMKM",
    tag: "Toko Online",
    metric: "+320% penjualan",
    desc: "Toko online elegan dengan katalog produk dan sistem pemesanan WhatsApp.",
    color: "from-emerald-900 to-emerald-800",
    result: "320% peningkatan penjualan online",
  },
  {
    title: "Dr. Ahmad Konsultan",
    category: "Landing Page",
    tag: "Personal Brand",
    metric: "+3x inquiry",
    desc: "Landing page konsultan profesional dengan booking sistem terintegrasi.",
    color: "from-purple-900 to-purple-800",
    result: "3x peningkatan inquiry konsultasi",
  },
  {
    title: "Warung Kopi Modern",
    category: "UMKM",
    tag: "F&B Bisnis",
    metric: "+240% pengunjung",
    desc: "Website kafe modern dengan menu digital, galeri, dan sistem reservasi meja.",
    color: "from-orange-900 to-orange-800",
    result: "240% peningkatan pengunjung walk-in",
  },
];

export default function PortfolioPage() {
  const [active, setActive] = useState("Semua");
  const filtered = active === "Semua" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="section-dark pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{ background: "rgba(145,200,228,0.12)", color: "#91C8E4" }}>
              Portfolio
            </span>
            <h1 className="text-white mb-6" style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)" }}>
              Hasil Kerja yang{" "}
              <span className="text-gradient-gold">Berbicara</span>
            </h1>
            <p className="text-white/50 text-xl max-w-2xl mx-auto">
              Setiap proyek adalah bukti nyata — bukan sekadar desain cantik, tapi hasil bisnis terukur.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-light py-section">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          {/* Filter Pills */}
          <FadeUp className="flex flex-wrap gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  active === f
                    ? "text-navy shadow-gold"
                    : "text-navy/50 hover:text-navy"
                }`}
                style={{
                  background: active === f ? "#FFC436" : "#FFFFFF",
                  border: `1px solid ${active === f ? "#FFC436" : "rgba(11,25,44,0.08)"}`,
                }}
              >
                {f}
              </button>
            ))}
          </FadeUp>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <FadeUp key={project.title} delay={i * 0.07}>
                <div className="rounded-card overflow-hidden card-hover group"
                  style={{ background: "#FFFFFF", border: "1px solid rgba(11,25,44,0.06)", boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}>
                  {/* Mockup Area */}
                  <div className={`relative h-52 bg-gradient-to-br ${project.color} overflow-hidden`}>
                    {/* Device Frame */}
                    <div className="absolute inset-4 rounded-xl bg-white/10 border border-white/10 flex flex-col">
                      <div className="h-6 bg-white/5 flex items-center px-3 gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-400/40" />
                        <div className="w-2 h-2 rounded-full bg-yellow-400/40" />
                        <div className="w-2 h-2 rounded-full bg-green-400/40" />
                      </div>
                      <div className="flex-1 p-3 space-y-2">
                        <div className="h-3 bg-white/20 rounded-full w-3/4" />
                        <div className="h-3 bg-white/10 rounded-full" />
                        <div className="h-3 bg-white/10 rounded-full w-2/3" />
                        <div className="mt-4 grid grid-cols-2 gap-2">
                          <div className="h-10 bg-white/10 rounded-lg" />
                          <div className="h-10 rounded-lg" style={{ background: "rgba(255,196,54,0.4)" }} />
                        </div>
                      </div>
                    </div>

                    {/* Metric Badge */}
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold"
                      style={{ background: "rgba(34,197,94,0.9)", color: "#FFFFFF" }}>
                      {project.metric}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="text-xs font-semibold uppercase tracking-widest text-navy/40">{project.tag}</span>
                    <h3 className="text-navy text-lg font-black mt-1 mb-2">{project.title}</h3>
                    <p className="text-navy/60 text-sm leading-relaxed mb-5">{project.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-green-600 text-xs font-semibold">{project.result}</span>
                      <Link href="/konsultasi"
                        className="flex items-center gap-1 text-xs font-bold text-navy/40 hover:text-gold transition-colors">
                        Case Study <ExternalLink size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* CTA */}
          <FadeUp className="text-center mt-16">
            <p className="text-navy/60 mb-5">Ingin bisnis Anda masuk ke portofolio kami?</p>
            <Link href="/konsultasi" className="btn-gold inline-flex items-center gap-2 px-8 py-4">
              Mulai Proyek Bersama <ArrowRight size={18} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
