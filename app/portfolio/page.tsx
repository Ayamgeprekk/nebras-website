"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Al-Barakah",
    category: "Travel Umrah",
    image: "/portfolio-1.png",
    result: "+340% Leads",
  },
  {
    title: "Safwah",
    category: "Luxury Resort",
    image: "/portfolio-1.png",
    result: "2.4s Load",
  },
  {
    title: "Hidayah",
    category: "Educational SaaS",
    image: "/portfolio-1.png",
    result: "98% Retention",
  },
  {
    title: "Zenith",
    category: "Corporate",
    image: "/portfolio-1.png",
    result: "50+ Pages",
  },
];

const PortfolioPage = () => {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <header className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="wrapper">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="eyebrow"
          >
            Selected Works
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[42px] md:text-[64px] font-bold tracking-tight mb-6"
          >
            Karya Kami.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[17px] text-[#A1A1A6] max-w-2xl leading-relaxed"
          >
            Eksplorasi proyek-proyek yang mendefinisikan standar baru dalam
            desain dan fungsionalitas.
          </motion.p>
        </div>
      </header>

      <section className="pb-20 md:pb-32">
        <div className="wrapper">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group relative aspect-[4/3] rounded-[28px] overflow-hidden cursor-pointer border border-white/[0.04]"
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-700" />

                {/* Top Tag */}
                <div className="absolute top-6 left-6">
                  <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.3em] bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-[#D4AF37]/20">
                    {p.result}
                  </span>
                </div>

                {/* Arrow */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>

                <div className="absolute bottom-8 left-8">
                  <p className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-[0.2em] mb-2">
                    {p.category}
                  </p>
                  <h3 className="text-[24px] md:text-[30px] font-bold text-white tracking-tight">
                    {p.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PortfolioPage;

