"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Shield, Sparkles } from "lucide-react";

const painPoints = [
  {
    icon: TrendingUp,
    title: "Your current website is your biggest weakness.",
    desc: "Poor design erodes trust before you even speak to a prospect. Every pixel sends a message about your standards.",
  },
  {
    icon: Shield,
    title: "Elite businesses cannot settle for amateur presence.",
    desc: "In competitive markets, mediocre digital identity costs you deals you never knew you lost.",
  },
  {
    icon: Sparkles,
    title: "Nebras turns your digital identity into your greatest asset.",
    desc: "We engineer trust systems that attract premium clients and scale your growth with intention.",
    highlight: true,
  },
];

const StorySection = () => {
  return (
    <section className="bg-black relative overflow-hidden">
      {/* Section Divider */}
      <div className="wrapper">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="wrapper section-v">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column — Sticky Headline */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="eyebrow"
            >
              The Problem
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[36px] md:text-[48px] font-bold tracking-tight leading-[1.1] text-white"
            >
              Why Most Brands{" "}
              <span className="text-[#6E6E73]">Fail to Convert.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-6 text-[#A1A1A6] text-[16px] leading-relaxed max-w-md"
            >
              We have analyzed hundreds of websites. The pattern is clear: trust
              is built in milliseconds, and most brands waste that window.
            </motion.p>

            {/* Decorative element */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              className="hidden lg:block mt-12 h-[1px] w-32 bg-gradient-to-r from-[#D4AF37] to-transparent origin-left"
            />
          </div>

          {/* Right Column — Pain Points */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {painPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  delay: idx * 0.15,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group relative p-8 md:p-10 rounded-3xl border transition-all duration-500 ${
                  point.highlight
                    ? "bg-[#0A0A0C] border-[#D4AF37]/20 shadow-[0_0_60px_-20px_rgba(212,175,55,0.1)]"
                    : "bg-transparent border-white/[0.04] hover:border-white/[0.08] hover:bg-white/[0.01]"
                }`}
              >
                {/* Number Badge */}
                <div
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-6 ${
                    point.highlight
                      ? "bg-[#D4AF37]/10 border border-[#D4AF37]/20"
                      : "bg-white/[0.03] border border-white/[0.06]"
                  }`}
                >
                  <point.icon
                    size={18}
                    className={
                      point.highlight ? "text-[#D4AF37]" : "text-white/40"
                    }
                  />
                </div>

                <h3
                  className={`text-[22px] md:text-[26px] font-bold tracking-tight mb-3 leading-[1.2] ${
                    point.highlight ? "text-white" : "text-[#86868B] group-hover:text-white transition-colors duration-500"
                  }`}
                >
                  {point.title}
                </h3>
                <p
                  className={`text-[15px] leading-relaxed ${
                    point.highlight
                      ? "text-[#A1A1A6]"
                      : "text-[#6E6E73] group-hover:text-[#A1A1A6] transition-colors duration-500"
                  }`}
                >
                  {point.desc}
                </p>

                {/* Highlight Glow */}
                {point.highlight && (
                  <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-[#D4AF37]/5 via-transparent to-[#D4AF37]/5 pointer-events-none" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;

