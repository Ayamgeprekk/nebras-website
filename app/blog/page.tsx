"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Clock, ChevronRight } from "lucide-react";

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

const featured = {
  title: "Kenapa Bisnis Anda Harus Punya Website di 2025?",
  excerpt: "Di era digital ini, pelanggan menilai bisnis Anda dari website sebelum menghubungi. Tanpa website yang profesional, Anda kehilangan ribuan pelanggan potensial setiap harinya.",
  category: "Bisnis Digital",
  readTime: "8 menit",
  date: "20 Apr 2025",
  color: "from-navy to-navy-light",
};

const articles = [
  {
    title: "5 Cara Meningkatkan Trust Pelanggan dengan Website",
    excerpt: "Trust adalah fondasi penjualan. Pelajari elemen desain yang membuat pelanggan langsung mempercayai bisnis Anda.",
    category: "Desain & Trust",
    readTime: "6 menit",
    date: "18 Apr 2025",
    color: "from-amber-900 to-amber-800",
  },
  {
    title: "Anatomi Landing Page yang Mengkonversi 30%+",
    excerpt: "Formula halaman landing yang mengubah pengunjung menjadi pelanggan, didukung data dari 100+ project kami.",
    category: "Konversi",
    readTime: "10 menit",
    date: "15 Apr 2025",
    color: "from-sky-900 to-sky-800",
  },
  {
    title: "Branding Digital Modern untuk UMKM Indonesia",
    excerpt: "Panduan lengkap membangun identitas digital yang kuat dan konsisten untuk bisnis lokal yang ingin go-online.",
    category: "Branding",
    readTime: "7 menit",
    date: "12 Apr 2025",
    color: "from-emerald-900 to-emerald-800",
  },
  {
    title: "Website Umrah: Fitur Wajib yang Harus Ada",
    excerpt: "Dari galeri paket hingga sistem pendaftaran — inilah fitur yang membuat jamaah percaya dan langsung daftar.",
    category: "Travel Umrah",
    readTime: "5 menit",
    date: "8 Apr 2025",
    color: "from-purple-900 to-purple-800",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{ background: "rgba(145,200,228,0.12)", color: "#91C8E4" }}>
              Blog & Insight
            </span>
            <h1 className="text-white mb-6" style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)" }}>
              Insight Digital untuk{" "}
              <span className="text-gradient-gold">Pertumbuhan Bisnis</span>
            </h1>
            <p className="text-white/50 text-xl max-w-2xl mx-auto">
              Strategi, panduan, dan insight terbaru untuk mengoptimalkan kehadiran digital bisnis Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-white py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <FadeUp>
            <div className="rounded-card overflow-hidden grid grid-cols-1 md:grid-cols-2 card-hover cursor-pointer"
              style={{ border: "1px solid rgba(11,25,44,0.06)", boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}>
              {/* Visual */}
              <div className={`relative h-64 md:h-auto bg-gradient-to-br ${featured.color} flex items-center justify-center p-12`}>
                <div className="text-center">
                  <div className="text-6xl mb-4">💡</div>
                  <div className="w-24 h-1 bg-gold rounded-full mx-auto" />
                </div>
                <span className="absolute top-5 left-5 px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: "rgba(255,196,54,0.3)", border: "1px solid rgba(255,196,54,0.3)" }}>
                  Artikel Pilihan
                </span>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "rgba(255,196,54,0.1)", color: "#0B192C" }}>
                    {featured.category}
                  </span>
                  <span className="text-navy/40 text-xs flex items-center gap-1">
                    <Clock size={12} /> {featured.readTime}
                  </span>
                </div>
                <h2 className="text-navy text-2xl font-black mb-4 leading-snug">{featured.title}</h2>
                <p className="text-navy/60 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-navy/40 text-sm">{featured.date}</span>
                  <button className="flex items-center gap-2 text-sm font-bold text-navy hover:text-gold transition-colors">
                    Baca Artikel <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-light py-section">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <FadeUp className="flex items-center justify-between mb-10">
            <h2 className="text-navy text-2xl font-black">Artikel Terbaru</h2>
            <button className="text-sm font-semibold text-navy/50 hover:text-navy flex items-center gap-1 transition-colors">
              Semua Artikel <ChevronRight size={16} />
            </button>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="rounded-card overflow-hidden card-hover cursor-pointer h-full flex flex-col"
                  style={{ background: "#FFFFFF", border: "1px solid rgba(11,25,44,0.06)", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
                  <div className={`h-36 bg-gradient-to-br ${article.color} flex items-center justify-center`}>
                    <div className="text-4xl">📖</div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-navy/40">{article.category}</span>
                      <span className="text-[10px] text-navy/30 flex items-center gap-0.5">
                        <Clock size={10} /> {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-navy font-black text-base leading-snug mb-3 flex-1">{article.title}</h3>
                    <p className="text-navy/50 text-sm leading-relaxed mb-5 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-navy/30 text-xs">{article.date}</span>
                      <button className="text-xs font-bold text-gold hover:underline">Baca →</button>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-dark py-20">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <FadeUp>
            <h2 className="text-white text-2xl font-black mb-4">Dapatkan Insight Gratis ke Email Anda</h2>
            <p className="text-white/50 mb-8">Tips dan strategi digital marketing mingguan, langsung dari tim NEBRAS.</p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input type="email" placeholder="Email Anda"
                className="flex-1 px-5 py-3.5 rounded-full bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm outline-none focus:border-gold transition-colors" />
              <button className="btn-gold px-6 py-3.5 text-sm shrink-0">Subscribe</button>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
