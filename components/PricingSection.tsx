"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "9.9M",
    desc: "For brands establishing an elite digital footprint.",
    features: [
      "Bespoke Visual System",
      "Fluid Mobile Experience",
      "Core SEO Architecture",
      "WhatsApp Ecosystem",
    ],
    highlight: false,
  },
  {
    name: "Professional",
    price: "24.9M",
    desc: "The gold standard for high-growth digital dominance.",
    features: [
      "Signature Motion Design",
      "High-Yield Funnel Strategy",
      "Velocity Optimization",
      "CMS Authority",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Bespoke architectures for corporate-scale dominance.",
    features: [
      "Scale-First Architecture",
      "Multi-System Integration",
      "Security Hardening",
      "Priority Support",
    ],
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <section className="section-v bg-black relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[#D4AF37] opacity-[0.02] blur-[200px] rounded-full pointer-events-none" />

      <div className="wrapper">
        {/* Header */}
        <div className="text-center mb-20 md:mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="eyebrow"
          >
            Investment
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[36px] md:text-[52px] font-bold tracking-tight leading-[1.1]"
          >
            Transparent Value.{" "}
            <span className="text-[#6E6E73]">Elite Craftsmanship.</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: idx * 0.12,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative flex flex-col rounded-[28px] p-8 md:p-10 transition-all duration-500 ${
                plan.highlight
                  ? "bg-[#0A0A0C] border border-[#D4AF37]/20 shadow-[0_0_80px_-30px_rgba(212,175,55,0.15)]"
                  : "bg-[#08080A] border border-white/[0.04] hover:border-white/[0.08] hover:bg-[#0A0A0C]"
              }`}
            >
              {/* Most Popular Badge */}
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 bg-[#D4AF37] text-black text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                    <Sparkles size={12} />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-[13px] font-bold text-[#A1A1A6] uppercase tracking-[0.2em] mb-8">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-[44px] md:text-[48px] font-bold text-white tracking-tighter">
                  {plan.price}
                </span>
                {plan.price !== "Custom" && (
                  <span className="text-[13px] font-semibold text-[#6E6E73]">
                    IDR
                  </span>
                )}
              </div>

              {/* Desc */}
              <p className="text-[14px] text-[#A1A1A6] mb-10 leading-relaxed min-h-[44px]">
                {plan.desc}
              </p>

              {/* Features */}
              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <motion.div
                    key={fIdx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + fIdx * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                        plan.highlight
                          ? "bg-[#D4AF37]/10 border-[#D4AF37]/30"
                          : "bg-white/5 border-white/10"
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${
                          plan.highlight ? "text-[#D4AF37]" : "text-white/60"
                        }`}
                      />
                    </div>
                    <span className="text-[14px] text-white/80 font-medium">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`cta-btn w-full !rounded-2xl !text-[14px] ${
                  plan.highlight
                    ? "cta-btn-gold"
                    : "cta-btn-secondary"
                }`}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Select Plan"}
              </motion.button>

              {/* Highlight glow */}
              {plan.highlight && (
                <div className="absolute -inset-px rounded-[28px] bg-gradient-to-b from-[#D4AF37]/5 via-transparent to-[#D4AF37]/5 pointer-events-none" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

