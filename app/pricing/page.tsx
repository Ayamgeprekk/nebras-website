"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Berapa lama proses pengerjaan?",
    a: "Rata-rata pengerjaan berkisar antara 4-8 minggu tergantung pada kompleksitas paket yang dipilih.",
  },
  {
    q: "Apakah ada biaya tahunan?",
    a: "Ya, biaya hosting dan pemeliharaan dasar dibayarkan secara tahunan mulai dari tahun kedua.",
  },
  {
    q: "Apakah desain benar-benar custom?",
    a: "Tentu. Setiap piksel kami desain dari nol untuk mencerminkan identitas unik brand Anda.",
  },
  {
    q: "Bisa cicil pembayaran?",
    a: "Kami mendukung sistem pembayaran bertahap: 50% di muka dan 50% setelah website live.",
  },
];

const PricingPage = () => {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <header className="pt-32 md:pt-40 pb-10">
        <div className="wrapper text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="eyebrow"
          >
            Pricing
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[42px] md:text-[64px] font-bold tracking-tight mb-6"
          >
            Harga Jujur.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[17px] text-[#A1A1A6] max-w-2xl mx-auto leading-relaxed"
          >
            Kami percaya pada transparansi total. Pilih paket yang sesuai dengan
            ambisi bisnis Anda.
          </motion.p>
        </div>
      </header>

      <PricingSection />

      {/* FAQ */}
      <section className="pb-20 md:pb-32">
        <div className="wrapper max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="eyebrow">FAQ</span>
            <h3 className="text-[28px] md:text-[36px] font-bold tracking-tight">
              Pertanyaan yang Sering Diajukan
            </h3>
          </motion.div>

          <div className="bg-[#08080A] rounded-[28px] p-8 md:p-12 border border-white/[0.04]">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <h4 className="text-white font-bold mb-2 text-[15px]">
                    {faq.q}
                  </h4>
                  <p className="text-[#A1A1A6] text-[14px] leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PricingPage;

