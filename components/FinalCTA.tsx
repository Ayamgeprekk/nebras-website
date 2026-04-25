"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden bg-black py-[160px] md:py-[200px]">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-[#D4AF37] opacity-[0.04] blur-[200px] rounded-full" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-white opacity-[0.015] blur-[180px] rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#D4AF37] opacity-[0.02] blur-[150px] rounded-full" />
      </div>

      {/* Top Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="wrapper relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="eyebrow">The Next Step</span>
          <h2 className="text-[42px] sm:text-[56px] md:text-[72px] font-bold tracking-tight mb-8 leading-[1.05] text-white">
            Ready to Light{" "}
            <span className="text-[#6E6E73]">Your Digital</span>{" "}
            <span className="text-gold-gradient">Future?</span>
          </h2>

          <p className="text-[17px] md:text-[19px] text-[#A1A1A6] mb-12 max-w-xl mx-auto leading-relaxed font-medium">
            Join the ranks of elite businesses that choose clarity, trust, and
            growth above all else.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="cta-btn cta-btn-primary !px-10 !py-5 !text-[16px] !font-bold shadow-[0_20px_50px_-15px_rgba(255,255,255,0.15)] inline-flex items-center gap-2 group"
            >
              Start Project Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
            <a
              href="https://wa.me/6281234567890"
              className="inline-flex items-center gap-2 text-[15px] font-bold text-white hover:text-[#D4AF37] transition-all duration-300 tracking-wide group"
            >
              <MessageCircle className="w-4 h-4" />
              Direct WhatsApp
              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-20 pt-10 border-t border-white/[0.04]"
          >
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              <div className="text-center">
                <div className="text-[28px] md:text-[36px] font-bold text-white tracking-tight">
                  98%
                </div>
                <div className="text-[11px] font-semibold text-[#6E6E73] uppercase tracking-[0.15em] mt-1">
                  Client Trust
                </div>
              </div>
              <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              <div className="text-center">
                <div className="text-[28px] md:text-[36px] font-bold text-white tracking-tight">
                  {'< 24h'}
                </div>
                <div className="text-[11px] font-semibold text-[#6E6E73] uppercase tracking-[0.15em] mt-1">
                  Response Time
                </div>
              </div>
              <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              <div className="text-center">
                <div className="text-[28px] md:text-[36px] font-bold text-white tracking-tight">
                  50+
                </div>
                <div className="text-[11px] font-semibold text-[#6E6E73] uppercase tracking-[0.15em] mt-1">
                  Projects Delivered
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;

