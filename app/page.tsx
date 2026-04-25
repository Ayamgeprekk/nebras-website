"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Zap,
  TrendingUp,
  Star,
  ChevronRight,
  CheckCircle,
  Globe,
  Smartphone,
  BarChart3,
  Shield,
} from "lucide-react";

/* ─── Fade-up Animation Wrapper ─── */
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Counter ─── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView || !ref.current) return;
    let start = 0;
    const duration = 2000;
    const step = (to / duration) * 16;
    const timer = setInterval(() => {
      start = Math.min(start + step, to);
      if (ref.current) ref.current.textContent = Math.floor(start) + suffix;
      if (start >= to) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, to, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

/* ─── Trusted By Logos (Marquee) ─── */
const clients = [
  "Al-Barakah Travel", "Safwah Tours", "PT. Nusantara", "Hidayah Umrah",
  "Studio Kreatif", "Toko Berkah", "Dr. Ahmad", "CV. Maju Bersama",
];

function TrustedBy() {
  return (
    <section className="section-white py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <FadeUp className="text-center mb-10">
          <p className="text-navy/40 text-sm font-semibold uppercase tracking-widest">
            Dipercaya oleh bisnis-bisnis terbaik
          </p>
        </FadeUp>
        <div className="marquee-wrapper">
          <div className="flex gap-12 animate-scroll-left w-max">
            {[...clients, ...clients].map((c, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 shrink-0 px-6 py-3 rounded-full bg-navy/4 border border-navy/8"
              >
                <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center">
                  <Star size={12} className="text-gold fill-gold" />
                </div>
                <span className="text-navy/60 font-semibold text-sm whitespace-nowrap">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Why Choose Cards ─── */
const whyCards = [
  {
    icon: <Sparkles size={28} className="text-gold" />,
    title: "Design Mahal",
    desc: "Setiap piksel dirancang untuk menciptakan kesan premium yang membangun kepercayaan pelanggan secara instan.",
    accent: "rgba(255,196,54,0.1)",
  },
  {
    icon: <Zap size={28} className="text-blue-glow" />,
    title: "Cepat & Responsif",
    desc: "Performa 95+ Lighthouse, loading <2 detik, sempurna di semua perangkat dari HP hingga desktop.",
    accent: "rgba(145,200,228,0.1)",
  },
  {
    icon: <TrendingUp size={28} className="text-green-500" />,
    title: "Fokus Hasil Bisnis",
    desc: "Bukan sekadar cantik. Setiap elemen dirancang untuk mendorong konversi, lead, dan pertumbuhan nyata.",
    accent: "rgba(34,197,94,0.1)",
  },
];

/* ─── Industries ─── */
const industries = [
  {
    title: "Travel Umrah",
    tag: "Trust & Booking",
    desc: "Website yang membangun kepercayaan jamaah dan mendorong pendaftaran.",
    color: "#0B192C",
    bg: "from-navy via-navy-light to-navy-light",
    metric: "+280% leads",
  },
  {
    title: "Corporate",
    tag: "Prestige & Authority",
    desc: "Profil perusahaan berkesan premium yang memenangkan tender dan klien.",
    color: "#1A2B3C",
    bg: "from-slate-800 to-slate-700",
    metric: "+5x credibility",
  },
  {
    title: "UMKM",
    tag: "Growth & Sales",
    desc: "Toko online dan company profile yang mengubah pengunjung jadi pembeli.",
    color: "#0f2d1a",
    bg: "from-green-900 to-green-800",
    metric: "+190% penjualan",
  },
  {
    title: "Personal Brand",
    tag: "Identity & Authority",
    desc: "Portfolio dan personal site yang memenangkan klien impian Anda.",
    color: "#2d0f1a",
    bg: "from-purple-900 to-purple-800",
    metric: "+3x inquiry",
  },
];

/* ─── Testimonials ─── */
const testimonials = [
  {
    name: "Ustadz Ahmad Fauzi",
    role: "CEO Al-Barakah Travel Umrah",
    quote: "Website baru kami langsung bikin jamaah lebih percaya. Pendaftaran Umrah naik 280% dalam 3 bulan pertama. NEBRAS benar-benar paham bisnis kami.",
    rating: 5,
    avatar: "AF",
    metric: "↑ 280% leads",
  },
  {
    name: "Sarah Wijaya",
    role: "Owner Boutique Jakarta",
    quote: "Sebelumnya website kami kelihatan murahan. Setelah re-design oleh NEBRAS, pelanggan bilang 'wah keren banget!' dan order online meningkat drastis.",
    rating: 5,
    avatar: "SW",
    metric: "↑ 190% sales",
  },
  {
    name: "Rizky Hamdani",
    role: "Dokter & Konsultan",
    quote: "Personal website saya sekarang terlihat sangat profesional. Klien konsultasi dari LinkedIn langsung terkesan saat melihat website saya.",
    rating: 5,
    avatar: "RH",
    metric: "↑ 3x inquiry",
  },
];

/* ─── HOMEPAGE ─── */
export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "#0B192C", paddingTop: "0" }}
      >
        {/* Glow Background */}
        <div className="absolute inset-0 hero-glow pointer-events-none" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(145,200,228,0.08) 0%, transparent 70%)",
          }}
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-24 pb-20 w-full"
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/70 text-sm font-medium mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Tersedia untuk proyek baru — Slot terbatas bulan ini
            </motion.div>

            {/* Lantern Icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-navy text-4xl font-black animate-float"
                  style={{
                    background: "#FFC436",
                    boxShadow: "0 0 60px rgba(255,196,54,0.5), 0 0 120px rgba(255,196,54,0.2)",
                  }}
                >
                  🏮
                </div>
                <div
                  className="absolute inset-0 rounded-2xl animate-glow"
                  style={{ background: "rgba(255,196,54,0.2)", filter: "blur(20px)" }}
                />
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-white mb-6"
              style={{ fontSize: "clamp(3rem,7vw,6.5rem)", lineHeight: "0.95", letterSpacing: "-0.04em", fontWeight: 900 }}
            >
              Website Premium.{" "}
              <span className="text-gradient-gold">Pertumbuhan Nyata.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="text-white/55 text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl mx-auto"
              style={{ letterSpacing: "-0.02em" }}
            >
              Nebras membantu bisnis tampil lebih dipercaya dan menghasilkan
              pelanggan melalui website modern premium.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Link
                href="/konsultasi"
                className="btn-gold flex items-center gap-2 px-8 py-4 text-base"
              >
                Konsultasi Gratis <ArrowRight size={18} />
              </Link>
              <Link
                href="/portfolio"
                className="btn-outline-light flex items-center gap-2 px-8 py-4 text-base"
              >
                Lihat Portfolio <ChevronRight size={18} />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex items-center justify-center gap-8 md:gap-16 pt-8 border-t border-white/10"
            >
              {[
                { val: 120, suffix: "+", label: "Proyek selesai" },
                { val: 98, suffix: "%", label: "Kepuasan klien" },
                { val: 3, suffix: " hari", label: "Rata-rata revisi" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-white font-black text-3xl md:text-4xl mb-1" style={{ letterSpacing: "-0.04em" }}>
                    <Counter to={s.val} suffix={s.suffix} />
                  </div>
                  <div className="text-white/40 text-sm">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #F5F5F7)" }}
        />
      </section>

      {/* ═══ TRUSTED BY ═══ */}
      <TrustedBy />

      {/* ═══ WHY NEBRAS ═══ */}
      <section className="section-light py-section">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <FadeUp className="text-center mb-16">
            <span className="text-gold font-bold text-sm uppercase tracking-widest">Kenapa NEBRAS?</span>
            <h2 className="text-navy mt-3" style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}>
              Bukan sekadar website. <br />
              <span className="opacity-40">Mesin pertumbuhan bisnis Anda.</span>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyCards.map((card, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div
                  className="p-8 rounded-card card-hover glow-border h-full"
                  style={{
                    background: card.accent,
                    border: "1px solid rgba(11,25,44,0.06)",
                  }}
                >
                  <div className="mb-6">{card.icon}</div>
                  <h3 className="text-navy text-xl font-bold mb-3">{card.title}</h3>
                  <p className="text-navy/60 leading-relaxed">{card.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIES ═══ */}
      <section className="section-dark py-section">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <FadeUp className="mb-16">
            <span className="text-gold font-bold text-sm uppercase tracking-widest">Industri yang Kami Layani</span>
            <h2 className="text-white mt-3" style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}>
              Dibuat khusus <br />
              <span className="text-white/40">untuk bisnis Anda.</span>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {industries.map((ind, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div
                  className="relative overflow-hidden rounded-card p-8 card-hover group cursor-pointer h-64"
                  style={{
                    background: `linear-gradient(135deg, ${ind.color} 0%, #1A2B3C 100%)`,
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10"
                    style={{ background: "radial-gradient(circle, #91C8E4, transparent)", transform: "translate(30%,-30%)" }}
                  />
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                    style={{ background: "rgba(255,196,54,0.15)", color: "#FFC436" }}>
                    {ind.tag}
                  </span>
                  <h3 className="text-white text-2xl font-black mb-2">{ind.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-5">{ind.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-green-400 font-bold text-sm">{ind.metric}</span>
                    <Link
                      href="/portfolio"
                      className="text-white/40 hover:text-gold text-sm font-medium flex items-center gap-1 transition-colors group-hover:gap-2"
                    >
                      Lihat Contoh <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section-white py-section">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <FadeUp className="text-center mb-16">
            <span className="text-gold font-bold text-sm uppercase tracking-widest">Klien Berbicara</span>
            <h2 className="text-navy mt-3" style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}>
              Hasil nyata,
              <br />
              <span className="opacity-40">bukan janji kosong.</span>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div
                  className="p-8 rounded-card h-full flex flex-col card-hover"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(11,25,44,0.06)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
                  }}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={16} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-navy/80 leading-relaxed flex-1 mb-6 text-[0.95rem]">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-sm shrink-0"
                      style={{ background: "#0B192C" }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-navy font-bold text-sm">{t.name}</p>
                      <p className="text-navy/50 text-xs">{t.role}</p>
                    </div>
                    <div
                      className="ml-auto px-3 py-1 rounded-full text-xs font-bold"
                      style={{ background: "rgba(34,197,94,0.1)", color: "#16a34a" }}
                    >
                      {t.metric}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES STRIP ═══ */}
      <section className="section-light py-12">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Globe size={22} />, label: "SEO-Optimized" },
              { icon: <Smartphone size={22} />, label: "Mobile-First" },
              { icon: <Zap size={22} />, label: "Speed 95+" },
              { icon: <Shield size={22} />, label: "Aman & Terpercaya" },
            ].map((f, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div
                  className="flex items-center gap-3 px-5 py-4 rounded-premium"
                  style={{ background: "#FFFFFF", border: "1px solid rgba(11,25,44,0.06)" }}
                >
                  <span className="text-blue-glow">{f.icon}</span>
                  <span className="text-navy font-semibold text-sm">{f.label}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="section-dark py-section">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <FadeUp>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium text-white/70 mb-8"
              style={{ borderColor: "rgba(255,196,54,0.3)", background: "rgba(255,196,54,0.06)" }}
            >
              ⚠️ Hanya tersisa <span className="text-gold font-bold mx-1">3 slot</span> proyek bulan ini
            </div>

            <h2
              className="text-white mb-6"
              style={{ fontSize: "clamp(2rem,5vw,4rem)", letterSpacing: "-0.04em" }}
            >
              Website lama Anda{" "}
              <span className="text-white/30">sedang kehilangan pelanggan</span>
              {" "}setiap hari.
            </h2>

            <p className="text-white/50 text-xl mb-10 leading-relaxed">
              Setiap hari tanpa website premium adalah hari di mana pelanggan memilih kompetitor Anda.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/konsultasi"
                className="btn-gold flex items-center gap-2 px-10 py-5 text-base"
              >
                Konsultasi Gratis Sekarang <ArrowRight size={18} />
              </Link>
              <Link href="/harga" className="btn-outline-light flex items-center gap-2 px-10 py-5 text-base">
                Lihat Harga <ChevronRight size={18} />
              </Link>
            </div>

            <div className="mt-10 flex items-center justify-center gap-6 text-white/30 text-sm">
              {["✓ Konsultasi 100% gratis", "✓ Proposal dalam 24 jam", "✓ Tanpa commitment"].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
  