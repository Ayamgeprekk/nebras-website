"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";

const posts = [
  {
    title: "Mengapa Desain Minimalis Meningkatkan Konversi",
    category: "Design Philosophy",
    date: "Oct 12, 2026",
    excerpt:
      "Pelajari bagaimana detail kecil dalam desain dapat memberikan dampak besar pada psikologi pengunjung dan hasil akhir bisnis Anda.",
  },
  {
    title: "Strategi SEO untuk Biro Perjalanan Umrah di 2026",
    category: "Growth",
    date: "Oct 10, 2026",
    excerpt:
      "Panduan lengkap mengoptimalkan visibilitas digital untuk bisnis travel religi di era kompetisi yang semakin ketat.",
  },
  {
    title: "Pentingnya Kecepatan Website bagi Kepercayaan Pelanggan",
    category: "Technology",
    date: "Oct 05, 2026",
    excerpt:
      "Studi menunjukkan bahwa setiap detik keterlambatan dapat menghilangkan 7% konversi. Berikut solusinya.",
  },
  {
    title: "Case Study: Bagaimana Vista Resorts Meningkatkan Booking Hingga 40%",
    category: "Success Story",
    date: "Sep 28, 2026",
    excerpt:
      "Melihat lebih dekat strategi redesign yang membawa hasil nyata bagi brand hospitality premium.",
  },
];

const BlogPage = () => {
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
            Insights
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[42px] md:text-[64px] font-bold tracking-tight mb-6"
          >
            Wawasan.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[17px] text-[#A1A1A6] max-w-2xl leading-relaxed"
          >
            Berbagi pemikiran tentang desain, teknologi, dan strategi
            pertumbuhan digital.
          </motion.p>
        </div>
      </header>

      <section className="pb-20 md:pb-32">
        <div className="wrapper">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group cursor-pointer border-b border-white/[0.04] pb-10 hover:border-white/[0.08] transition-colors duration-500"
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-[0.2em]">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[#6E6E73]">
                    <Clock size={12} />
                    <span className="text-[12px]">{post.date}</span>
                  </div>
                </div>
                <h2 className="text-[22px] md:text-[26px] font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300 leading-tight mb-4">
                  {post.title}
                </h2>
                <p className="text-[15px] text-[#A1A1A6] leading-relaxed mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-white/40 group-hover:text-white transition-colors duration-300">
                  Read Article
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogPage;

