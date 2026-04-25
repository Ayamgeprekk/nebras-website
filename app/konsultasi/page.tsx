"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MessageCircle, Send, Mail, Building2, User, FileText } from "lucide-react";

const KonsultasiPage = () => {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <section className="pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="wrapper max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="eyebrow">Get in Touch</span>
            <h1 className="text-[42px] md:text-[64px] font-bold tracking-tight mb-6">
              Mulai Percakapan.
            </h1>
            <p className="text-[17px] text-[#A1A1A6] max-w-xl mx-auto leading-relaxed">
              Beritahu kami ambisi Anda, dan kami akan bantu mewujudkannya dengan
              presisi.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#08080A] p-8 md:p-12 rounded-[28px] border border-white/[0.04]"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-[11px] font-bold text-[#6E6E73] uppercase tracking-[0.15em]">
                    <User size={12} />
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="w-full bg-black border border-white/[0.06] rounded-xl px-4 py-3.5 text-white text-[15px] placeholder:text-[#2C2C2E] focus:border-[#D4AF37]/40 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-[11px] font-bold text-[#6E6E73] uppercase tracking-[0.15em]">
                    <Mail size={12} />
                    Email Bisnis
                  </label>
                  <input
                    type="email"
                    className="w-full bg-black border border-white/[0.06] rounded-xl px-4 py-3.5 text-white text-[15px] placeholder:text-[#2C2C2E] focus:border-[#D4AF37]/40 focus:outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[11px] font-bold text-[#6E6E73] uppercase tracking-[0.15em]">
                  <Building2 size={12} />
                  Industri
                </label>
                <select className="w-full bg-black border border-white/[0.06] rounded-xl px-4 py-3.5 text-white text-[15px] focus:border-[#D4AF37]/40 focus:outline-none transition-colors appearance-none cursor-pointer">
                  <option>Haji & Umrah</option>
                  <option>Pariwisata</option>
                  <option>UMKM</option>
                  <option>Corporate</option>
                  <option>Lainnya</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[11px] font-bold text-[#6E6E73] uppercase tracking-[0.15em]">
                  <FileText size={12} />
                  Pesan Anda
                </label>
                <textarea
                  className="w-full bg-black border border-white/[0.06] rounded-xl px-4 py-3.5 text-white text-[15px] placeholder:text-[#2C2C2E] focus:border-[#D4AF37]/40 focus:outline-none transition-colors h-32 resize-none"
                  placeholder="Ceritakan sedikit tentang proyek Anda..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full cta-btn cta-btn-gold !rounded-2xl !py-4 !text-[16px] flex items-center justify-center gap-2"
              >
                Kirim Pesan <Send className="w-4 h-4" />
              </motion.button>
            </form>

            <div className="mt-10 pt-10 border-t border-white/[0.04] text-center">
              <p className="text-[13px] text-[#6E6E73] mb-4">
                Atau hubungi kami langsung via WhatsApp
              </p>
              <a
                href="https://wa.me/6281234567890"
                className="inline-flex items-center gap-2 text-[#D4AF37] font-bold hover:text-[#F5D060] transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> +62 812 3456 7890
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default KonsultasiPage;

