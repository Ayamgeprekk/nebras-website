"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Shield, Headphones, Zap } from "lucide-react";

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

const plans = [
  {
    name: "Starter",
    tagline: "Untuk UMKM & Personal Brand",
    price: "3.500.000",
    delivery: "5-7 hari kerja",
    popular: false,
    color: "rgba(11,25,44,0.03)",
    border: "rgba(11,25,44,0.08)",
    features: [
      "5 halaman website",
      "Desain responsive mobile",
      "SEO basic on-page",
      "Form kontak & WhatsApp",
      "Google Maps integration",
      "3x revisi desain",
      "Hosting 1 tahun gratis",
      "Domain .com 1 tahun",
    ],
    notIncluded: ["Blog sistem", "Dashboard admin", "Payment gateway"],
  },
  {
    name: "Growth",
    tagline: "Untuk Travel, UMKM Berkembang",
    price: "7.500.000",
    delivery: "10-14 hari kerja",
    popular: true,
    color: "rgba(255,196,54,0.06)",
    border: "rgba(255,196,54,0.25)",
    features: [
      "Hingga 15 halaman",
      "Desain premium custom",
      "SEO advanced + sitemap",
      "Blog & artikel sistem",
      "Galeri & testimoni",
      "Form pendaftaran custom",
      "Dashboard admin sederhana",
      "5x revisi desain",
      "Support 3 bulan",
      "Speed optimization",
      "Hosting 1 tahun gratis",
    ],
    notIncluded: ["Payment gateway", "Sistem booking real-time"],
  },
  {
    name: "Premium Pro",
    tagline: "Untuk Korporasi & Bisnis Serius",
    price: "15.000.000+",
    delivery: "21-30 hari kerja",
    popular: false,
    color: "rgba(11,25,44,0.03)",
    border: "rgba(11,25,44,0.08)",
    features: [
      "Unlimited halaman",
      "Desain eksklusif full custom",
      "SEO enterprise + analytics",
      "Payment gateway integration",
      "Sistem booking real-time",
      "Dashboard admin lengkap",
      "CRM basic integration",
      "Unlimited revisi",
      "Support 12 bulan",
      "Training penggunaan",
      "Server premium dedicated",
    ],
    notIncluded: [],
  },
];

const badges = [
  { icon: <CheckCircle size={20} className="text-green-500" />, label: "Garansi Revisi" },
  { icon: <Zap size={20} className="text-gold" />, label: "Fast Delivery" },
  { icon: <Headphones size={20} className="text-blue-glow" />, label: "Support After Launch" },
  { icon: <Shield size={20} className="text-purple-500" />, label: "Garansi Uang Kembali" },
];

const faq = [
  {
    q: "Apakah harga sudah termasuk hosting dan domain?",
    a: "Ya! Semua paket sudah termasuk hosting cPanel premium dan domain .com selama 1 tahun pertama.",
  },
  {
    q: "Berapa lama proses pengerjaan website?",
    a: "Tergantung paket: Starter 5-7 hari, Growth 10-14 hari, Premium Pro 21-30 hari. Kami komitmen pada deadline.",
  },
  {
    q: "Apakah saya bisa request fitur tambahan?",
    a: "Tentu! Kami melayani customisasi penuh. Konsultasikan kebutuhan Anda dan kami buatkan penawaran khusus.",
  },
  {
    q: "Bagaimana proses pembayaran?",
    a: "50% di awal sebagai tanda jadi, 50% setelah website selesai dan Anda approve sebelum live.",
  },
];

export default function HargaPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{ background: "rgba(255,196,54,0.12)", color: "#FFC436" }}>
              Harga & Paket
            </span>
            <h1 className="text-white mb-4" style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)" }}>
              Investasi Kecil.{" "}
              <span className="text-gradient-gold">Tampilan Besar.</span>
            </h1>
            <p className="text-white/50 text-xl max-w-2xl mx-auto">
              Transparan. Tanpa biaya tersembunyi. Nilai lebih dari harganya.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-light py-section">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {plans.map((plan, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="rounded-card p-8 relative overflow-hidden"
                  style={{
                    background: plan.color,
                    border: `1.5px solid ${plan.border}`,
                    boxShadow: plan.popular ? "0 20px 80px rgba(255,196,54,0.15)" : "0 4px 24px rgba(0,0,0,0.05)",
                  }}>
                  {plan.popular && (
                    <div className="absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-bold text-navy"
                      style={{ background: "#FFC436" }}>
                      Terpopuler
                    </div>
                  )}

                  <div className="mb-7">
                    <p className="text-navy/40 text-xs font-bold uppercase tracking-widest mb-2">{plan.tagline}</p>
                    <h3 className="text-navy text-2xl font-black mb-3">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-navy/40 text-sm">Rp</span>
                      <span className="text-navy font-black text-4xl" style={{ letterSpacing: "-0.04em" }}>
                        {plan.price}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-3 text-navy/50 text-sm">
                      <Clock size={13} />
                      {plan.delivery}
                    </div>
                  </div>

                  <div className="h-px bg-navy/8 mb-7" />

                  <ul className="space-y-3 mb-7">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-navy/80">
                        <CheckCircle size={15} className="text-green-500 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                    {plan.notIncluded.map((f, j) => (
                      <li key={`no-${j}`} className="flex items-start gap-2.5 text-sm text-navy/30 line-through">
                        <span className="w-[15px] h-[15px] shrink-0 mt-0.5 flex items-center justify-center rounded-full bg-navy/10 text-navy/30 text-[10px]">✕</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link href="/konsultasi"
                    className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold w-full transition-all ${
                      plan.popular ? "btn-gold" : "btn-outline-dark"
                    }`}>
                    Pilih {plan.name} <ArrowRight size={16} />
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Trust Badges */}
          <FadeUp className="mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {badges.map((b, i) => (
                <div key={i} className="flex items-center gap-3 p-5 rounded-premium"
                  style={{ background: "#FFFFFF", border: "1px solid rgba(11,25,44,0.06)" }}>
                  {b.icon}
                  <span className="text-navy font-semibold text-sm">{b.label}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-dark py-section">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <FadeUp className="text-center mb-12">
            <h2 className="text-white" style={{ fontSize: "clamp(1.8rem,4vw,3rem)" }}>
              Pertanyaan yang Sering Ditanyakan
            </h2>
          </FadeUp>

          <div className="space-y-4">
            {faq.map((item, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <div className="p-6 rounded-premium" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <h3 className="text-white font-bold mb-2">{item.q}</h3>
                  <p className="text-white/50 leading-relaxed">{item.a}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="text-center mt-12">
            <p className="text-white/50 mb-5">Masih ada pertanyaan?</p>
            <Link href="/konsultasi" className="btn-gold inline-flex items-center gap-2 px-8 py-4">
              Tanya Langsung via WhatsApp <ArrowRight size={18} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
