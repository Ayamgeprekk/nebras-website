"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Clock, CheckCircle, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

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

const websiteTypes = [
  "Travel Umrah / Haji",
  "Travel & Pariwisata",
  "Company Profile",
  "Toko Online / UMKM",
  "Personal Brand / Portofolio",
  "Landing Page Iklan",
  "Lainnya",
];

const budgets = [
  "< Rp 3 juta",
  "Rp 3-5 juta (Starter)",
  "Rp 5-10 juta (Growth)",
  "Rp 10-20 juta (Premium)",
  "> Rp 20 juta (Enterprise)",
];

const faq = [
  {
    q: "Berapa lama waktu konsultasi?",
    a: "Konsultasi pertama sekitar 30-60 menit via WhatsApp atau video call. Kami akan memahami kebutuhan bisnis Anda secara mendalam.",
  },
  {
    q: "Apakah konsultasi benar-benar gratis?",
    a: "100% gratis tanpa obligation. Kami tidak memaksa Anda untuk langsung memutuskan.",
  },
  {
    q: "Berapa cepat tim NEBRAS merespons?",
    a: "Kami merespons dalam 2 jam di hari kerja (Senin-Jumat, 09:00-18:00 WIB). Rata-rata respons kami di bawah 30 menit.",
  },
  {
    q: "Apakah bisa request desain spesifik?",
    a: "Tentu! Kami menyesuaikan desain dengan brand Anda. Semakin detail referensi yang Anda berikan, semakin tepat hasilnya.",
  },
];

export default function KonsultasiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="section-dark pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium text-white/70 mb-8"
              style={{ borderColor: "rgba(255,196,54,0.3)", background: "rgba(255,196,54,0.06)" }}>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Tim kami siap merespons dalam <span className="text-gold font-bold mx-1">2 jam</span>
            </div>
            <h1 className="text-white mb-6" style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)" }}>
              Mari Bahas Website{" "}
              <span className="text-gradient-gold">Bisnis Anda</span>
            </h1>
            <p className="text-white/50 text-xl max-w-2xl mx-auto">
              Konsultasi gratis. Proposal dalam 24 jam. Tanpa commitment apapun.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-light py-section">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Form */}
            <FadeUp className="lg:col-span-3">
              <div className="rounded-card p-8 md:p-10"
                style={{ background: "#FFFFFF", border: "1px solid rgba(11,25,44,0.06)", boxShadow: "0 4px 40px rgba(0,0,0,0.06)" }}>
                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10">
                    <div className="text-6xl mb-6">🎉</div>
                    <h3 className="text-navy text-2xl font-black mb-3">Formulir Terkirim!</h3>
                    <p className="text-navy/60 leading-relaxed mb-6">
                      Tim kami akan menghubungi Anda via WhatsApp dalam 2 jam kerja. <br />
                      Terima kasih telah mempercayai NEBRAS!
                    </p>
                    <a href="https://wa.me/6281234567890?text=Halo%20NEBRAS%2C%20saya%20baru%20mengisi%20form%20konsultasi%20di%20website"
                      target="_blank" rel="noopener noreferrer"
                      className="btn-gold inline-flex items-center gap-2 px-8 py-4">
                      <MessageCircle size={18} /> Lanjut via WhatsApp
                    </a>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="text-navy text-2xl font-black mb-2">Formulir Konsultasi</h2>
                    <p className="text-navy/50 mb-8 text-sm">Lengkapi form berikut dan kami hubungi segera.</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name & Business */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-navy font-semibold text-sm mb-2">Nama Lengkap *</label>
                          <input required type="text" placeholder="Ahmad Fauzi"
                            className="w-full px-4 py-3.5 rounded-xl border text-navy text-sm outline-none transition-all"
                            style={{ border: "1.5px solid rgba(11,25,44,0.12)", background: "#FAFAFA" }}
                            onFocus={(e) => (e.target.style.borderColor = "#FFC436")}
                            onBlur={(e) => (e.target.style.borderColor = "rgba(11,25,44,0.12)")} />
                        </div>
                        <div>
                          <label className="block text-navy font-semibold text-sm mb-2">Nama Bisnis *</label>
                          <input required type="text" placeholder="Al-Barakah Travel"
                            className="w-full px-4 py-3.5 rounded-xl border text-navy text-sm outline-none transition-all"
                            style={{ border: "1.5px solid rgba(11,25,44,0.12)", background: "#FAFAFA" }}
                            onFocus={(e) => (e.target.style.borderColor = "#FFC436")}
                            onBlur={(e) => (e.target.style.borderColor = "rgba(11,25,44,0.12)")} />
                        </div>
                      </div>

                      {/* WhatsApp */}
                      <div>
                        <label className="block text-navy font-semibold text-sm mb-2">Nomor WhatsApp *</label>
                        <input required type="tel" placeholder="08123456789"
                          className="w-full px-4 py-3.5 rounded-xl border text-navy text-sm outline-none transition-all"
                          style={{ border: "1.5px solid rgba(11,25,44,0.12)", background: "#FAFAFA" }}
                          onFocus={(e) => (e.target.style.borderColor = "#FFC436")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(11,25,44,0.12)")} />
                      </div>

                      {/* Type & Budget */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-navy font-semibold text-sm mb-2">Jenis Website *</label>
                          <select required
                            className="w-full px-4 py-3.5 rounded-xl border text-navy text-sm outline-none transition-all appearance-none"
                            style={{ border: "1.5px solid rgba(11,25,44,0.12)", background: "#FAFAFA" }}
                            onFocus={(e) => (e.target.style.borderColor = "#FFC436")}
                            onBlur={(e) => (e.target.style.borderColor = "rgba(11,25,44,0.12)")}>
                            <option value="">Pilih jenis</option>
                            {websiteTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="block text-navy font-semibold text-sm mb-2">Estimasi Budget</label>
                          <select
                            className="w-full px-4 py-3.5 rounded-xl border text-navy text-sm outline-none transition-all appearance-none"
                            style={{ border: "1.5px solid rgba(11,25,44,0.12)", background: "#FAFAFA" }}
                            onFocus={(e) => (e.target.style.borderColor = "#FFC436")}
                            onBlur={(e) => (e.target.style.borderColor = "rgba(11,25,44,0.12)")}>
                            <option value="">Pilih range</option>
                            {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-navy font-semibold text-sm mb-2">Ceritakan Kebutuhan Anda</label>
                        <textarea rows={4} placeholder="Ceritakan bisnis Anda, target pelanggan, dan apa yang ingin Anda capai dengan website ini..."
                          className="w-full px-4 py-3.5 rounded-xl border text-navy text-sm outline-none transition-all resize-none"
                          style={{ border: "1.5px solid rgba(11,25,44,0.12)", background: "#FAFAFA" }}
                          onFocus={(e) => (e.target.style.borderColor = "#FFC436")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(11,25,44,0.12)")} />
                      </div>

                      <button type="submit"
                        disabled={loading}
                        className="btn-gold w-full flex items-center justify-center gap-2 py-4 text-base disabled:opacity-60">
                        {loading ? (
                          <><div className="w-5 h-5 border-2 border-navy/30 border-t-navy rounded-full animate-spin" /> Mengirim...</>
                        ) : (
                          <>Jadwalkan Konsultasi Gratis <ArrowRight size={18} /></>
                        )}
                      </button>

                      <p className="text-center text-navy/40 text-xs">
                        Dengan mengirim form ini, Anda menyetujui kami menghubungi via WhatsApp.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </FadeUp>

            {/* Sidebar Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick WhatsApp */}
              <FadeUp delay={0.1}>
                <a href="https://wa.me/6281234567890?text=Halo%20NEBRAS%2C%20saya%20ingin%20konsultasi%20website"
                  target="_blank" rel="noopener noreferrer"
                  className="block rounded-card p-6 card-hover"
                  style={{ background: "rgba(37,211,102,0.06)", border: "1px solid rgba(37,211,102,0.2)" }}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: "rgba(37,211,102,0.15)" }}>
                      💬
                    </div>
                    <div>
                      <p className="font-bold text-navy text-sm">Chat WhatsApp Langsung</p>
                      <p className="text-navy/50 text-xs mt-1">Respons rata-rata &lt;30 menit</p>
                    </div>
                  </div>
                </a>
              </FadeUp>

              {/* Trust Points */}
              <FadeUp delay={0.15}>
                <div className="rounded-card p-6 space-y-4"
                  style={{ background: "#FFFFFF", border: "1px solid rgba(11,25,44,0.06)" }}>
                  <h3 className="text-navy font-black text-base">Yang Anda dapatkan:</h3>
                  {[
                    "Konsultasi 100% gratis & tanpa commitment",
                    "Proposal desain & harga dalam 24 jam",
                    "Rekomendasi fitur untuk bisnis Anda",
                    "Timeline pengerjaan yang jelas",
                    "Garansi kepuasan atau uang kembali",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                      <span className="text-navy/70 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </FadeUp>

              {/* Response Badge */}
              <FadeUp delay={0.2}>
                <div className="rounded-card p-6" style={{ background: "rgba(255,196,54,0.06)", border: "1px solid rgba(255,196,54,0.2)" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <Clock size={18} className="text-gold" />
                    <span className="text-navy font-bold text-sm">Waktu Respons</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { label: "WhatsApp", time: "< 30 menit" },
                      { label: "Email", time: "< 2 jam" },
                      { label: "Proposal", time: "< 24 jam" },
                    ].map((r) => (
                      <div key={r.label} className="flex justify-between text-sm">
                        <span className="text-navy/50">{r.label}</span>
                        <span className="text-navy font-semibold">{r.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-dark py-section">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <FadeUp className="text-center mb-12">
            <h2 className="text-white" style={{ fontSize: "clamp(1.8rem,4vw,2.5rem)" }}>
              Pertanyaan Umum
            </h2>
          </FadeUp>

          <div className="space-y-3">
            {faq.map((item, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <div className="rounded-premium overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/3 transition-colors"
                  >
                    <span className="text-white font-semibold pr-4">{item.q}</span>
                    {openFaq === i ? <ChevronUp size={18} className="text-gold shrink-0" /> : <ChevronDown size={18} className="text-white/30 shrink-0" />}
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === i ? "auto" : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-white/50 leading-relaxed">{item.a}</p>
                  </motion.div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
