"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Gem, Layers, Target } from "lucide-react";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="wrapper">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="eyebrow">Filosofi Kami</span>
            <h1 className="text-[42px] md:text-[64px] font-bold mb-8 tracking-tight leading-[1.05]">
              Didesain untuk{" "}
              <span className="text-[#6E6E73]">Kepercayaan</span>,{" "}
              <br className="hidden md:block" />
              Dibangun untuk{" "}
              <span className="text-gold-gradient">Pertumbuhan.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story + Image */}
      <section className="pb-20 md:pb-32">
        <div className="wrapper">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-[28px] overflow-hidden border border-white/[0.05] bg-[#08080A]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent" />
              <div className="w-full h-full flex items-center justify-center text-[#6E6E73] text-lg font-medium">
                Crafted in Jakarta
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[28px] md:text-[36px] font-bold mb-8 tracking-tight">
                Mengapa Nebras?
              </h2>
              <div className="space-y-6 text-[16px] text-[#A1A1A6] leading-relaxed">
                <p>
                  Nebras bukan sekadar agensi digital. Kami adalah mitra strategis
                  yang memahami bahwa di balik setiap baris kode dan setiap piksel
                  desain, terdapat tujuan bisnis yang nyata.
                </p>
                <p>
                  Terinspirasi oleh filosofi Apple dalam kesederhanaan dan
                  fungsionalitas, kami percaya bahwa desain terbaik adalah desain
                  yang tidak terasa — ia bekerja dengan mulus untuk memandu
                  pengguna menuju apa yang mereka butuhkan.
                </p>
                <p>
                  Misi kami adalah memberikan kejelasan (clarity) di tengah
                  kebisingan digital, membangun kepercayaan instan antara brand
                  Anda dan audiens Anda.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="pb-20 md:pb-32">
        <div className="wrapper">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Gem,
                title: "Minimalist",
                desc: "Hapus gangguan, fokus pada pesan utama. Setiap elemen memiliki alasan keberadaannya.",
              },
              {
                icon: Layers,
                title: "Elegant",
                desc: "Estetika yang melampaui tren sesaat. Desain yang tetap relevan bertahun-tahun ke depan.",
              },
              {
                icon: Target,
                title: "High Intentional",
                desc: "Setiap elemen memiliki tujuan yang jelas. Tidak ada yang sekadar hiasan.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="signature-card group"
              >
                <div className="w-12 h-12 bg-white/[0.03] rounded-2xl flex items-center justify-center border border-white/[0.06] mb-6 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/20 transition-all duration-500">
                  <item.icon className="w-5 h-5 text-white/60 group-hover:text-[#D4AF37] transition-colors duration-500" />
                </div>
                <h3 className="text-[22px] font-bold text-white mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[15px] text-[#A1A1A6] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;

