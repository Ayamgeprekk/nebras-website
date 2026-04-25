"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 120]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#000000]">
      {/* Ambient Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[#D4AF37] opacity-[0.04] blur-[180px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#D4AF37] opacity-[0.02] blur-[150px] rounded-full" />
      </div>

      {/* Floating Ambient Dots */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="wrapper relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="eyebrow">A New Standard of Excellence</span>
              <h1 className="text-[48px] sm:text-[56px] md:text-[72px] font-bold mb-8 leading-[1.05] tracking-tight text-white">
                Lighting the{" "}
                <span className="text-[#6E6E73]">Path to</span>{" "}
                <span className="text-gold-gradient">Digital Growth.</span>
              </h1>
              <p className="max-w-md mx-auto lg:mx-0 mb-10 text-[#A1A1A6] text-[17px] font-medium leading-relaxed">
                We craft ultra-premium digital assets for brands that refuse to
                be ignored. Designed for trust, engineered for conversion.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="cta-btn cta-btn-primary min-w-[200px]"
                >
                  Start Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="cta-btn cta-btn-secondary min-w-[200px]"
                >
                  Explore Work
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Right Visual */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              style={{ y: y1, opacity }}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] md:aspect-square w-full max-w-[520px] mx-auto group"
            >
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-[#D4AF37] opacity-10 blur-[80px] group-hover:opacity-18 transition-opacity duration-1000 rounded-full" />

              {/* Image Container */}
              <div className="relative h-full w-full rounded-[32px] overflow-hidden border border-white/[0.06] bg-[#08080A] shadow-[0_32px_80px_-20px_rgba(0,0,0,0.9)]">
                <Image
                  src="/nebras-signature.png"
                  alt="Nebras Signature Lantern"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-[2.5s] ease-out"
                  priority
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/8 via-transparent to-white/[0.03] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none" />
              </div>

              {/* Floating Status Card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 glass-card p-5 rounded-2xl"
              >
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#A1A1A6] mb-1.5">
                  Status
                </div>
                <div className="text-white font-bold text-[15px] tracking-tight">
                  Handcrafted Excellence
                </div>
              </motion.div>

              {/* Floating Metric Card */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-3 -left-3 md:-top-4 md:-left-4 glass-card px-4 py-3 rounded-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse-glow" />
                  <span className="text-[12px] font-semibold text-white/80">
                    Available for Q3
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#6E6E73]">
            Scroll
          </span>
          <ChevronDown size={18} className="text-[#6E6E73] animate-scroll-indicator" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

