"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Compass, Plane, Briefcase, Building, ArrowRight, Check } from "lucide-react";

const services = [
  {
    title: "Haji & Umrah",
    icon: Compass,
    desc: "Transformasi digital untuk biro perjalanan religi. Kami membangun sistem yang memudahkan jamaah dan meningkatkan kredibilitas agen.",
    features: [
      "Sistem Booking Real-time",
      "Manajemen Paket Dinamis",
      "Integrasi Pembayaran",
      "Testimonial Video Experience",
    ],
  },
  {
    title: "Pariwisata & Resort",
    icon: Plane,
    desc: "Menghadirkan keindahan destinasi Anda melalui layar. Visual imersif yang memicu keinginan pelanggan untuk segera memesan.",
    features: [
      "High-end Visual Gallery",
      "Interactive Maps",
      "Social Media Sync",
      "Performance SEO",
    ],
  },
  {
    title: "Boutique UMKM",
    icon: Briefcase,
    desc: "Scaling local heritage into global digital authority dengan positioning yang tajam dan visual yang memukau.",
    features: [
      "Brand Storytelling",
      "E-commerce Integration",
      "Social Proof System",
      "Conversion Funnel",
    ],
  },
  {
    title: "Corporate Identity",
    icon: Building,
    desc: "Membangun otoritas brand di dunia digital. Kami menciptakan website korporat yang mencerminkan profesionalisme dan visi masa depan.",
    features: [
      "Stakeholder Relations Support",
      "Secure Architecture",
      "Multilingual Support",
      "Brand Style Guide",
    ],
  },
];

const LayananPage = () => {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Header */}
      <header className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="wrapper text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="eyebrow"
          >
            What We Do
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[42px] md:text-[64px] font-bold tracking-tight mb-6"
          >
            Layanan Ahli.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[17px] text-[#A1A1A6] max-w-2xl mx-auto leading-relaxed"
          >
            Kami menggabungkan seni dan teknologi untuk menciptakan pengalaman
            digital yang tak terlupakan.
          </motion.p>
        </div>
      </header>

      {/* Services Detail */}
      <section className="pb-20 md:pb-32">
        <div className="wrapper space-y-16 md:space-y-24">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
            >
              <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                <div className="w-14 h-14 bg-white/[0.03] rounded-2xl flex items-center justify-center border border-white/[0.06] mb-8">
                  <service.icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight mb-6">
                  {service.title}
                </h2>
                <p className="text-[16px] text-[#A1A1A6] leading-relaxed mb-8">
                  {service.desc}
                </p>
                <motion.a
                  href="/konsultasi"
                  whileHover={{ scale: 1.02 }}
                  className="cta-btn cta-btn-secondary !py-3 !px-6 !text-[13px] inline-flex items-center gap-2 group"
                >
                  Konsultasi Gratis
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                </motion.a>
              </div>

              <div
                className={`bg-[#08080A] p-8 md:p-10 rounded-[28px] border border-white/[0.04] ${
                  idx % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <h4 className="text-white font-bold mb-6 uppercase tracking-[0.15em] text-[11px]">
                  Features Included
                </h4>
                <ul className="space-y-4">
                  {service.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-[15px] text-[#A1A1A6]"
                    >
                      <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center border border-white/10 flex-shrink-0">
                        <Check className="w-3 h-3 text-[#D4AF37]" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 md:pb-32">
        <div className="wrapper">
          <div className="bg-[#08080A] rounded-[28px] p-10 md:p-16 border border-white/[0.04] text-center">
            <h3 className="text-[24px] md:text-[32px] font-bold mb-8 tracking-tight">
              Siap Untuk Langkah Berikutnya?
            </h3>
            <motion.a
              href="/konsultasi"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="cta-btn cta-btn-primary inline-flex items-center gap-2"
            >
              Konsultasi Gratis <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default LayananPage;

