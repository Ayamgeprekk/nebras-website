"use client";

import React from "react";
import { motion } from "framer-motion";

const logos = [
  "AL-BARAKAH",
  "SAFWAH",
  "HIDAYAH",
  "VISTA",
  "ZENITH",
  "NEXUS",
  "ELITE",
  "LUMEN",
  "VERVE",
  "PRISM",
];

const TrustSection = () => {
  return (
    <section className="py-20 md:py-28 bg-[#030303] border-y border-white/[0.03] relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-[13px] font-semibold text-[#6E6E73] tracking-[0.15em] uppercase">
            Trusted by ambitious brands
          </p>
        </motion.div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative flex overflow-hidden group">
        <motion.div
          className="flex gap-16 md:gap-24 items-center whitespace-nowrap px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...logos, ...logos].map((logo, idx) => (
            <span
              key={idx}
              className="text-[22px] md:text-[28px] font-bold text-white/[0.08] hover:text-white/30 transition-all duration-500 cursor-default tracking-tight select-none"
            >
              {logo}
            </span>
          ))}
        </motion.div>

        {/* Edge Fades */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-48 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-48 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none" />
      </div>

      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default TrustSection;

