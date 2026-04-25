"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Compass, Plane, Briefcase, Building, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Haji & Umrah",
    desc: "Digital platforms designed for the highest level of trust and seamless journey management.",
    icon: Compass,
  },
  {
    title: "Hospitality",
    desc: "Immersive visual storytelling that captures the essence of luxury destinations.",
    icon: Plane,
  },
  {
    title: "Boutique UMKM",
    desc: "Scaling local heritage into global digital authority with refined positioning.",
    icon: Briefcase,
  },
  {
    title: "Corporate",
    desc: "Robust, secure, and professional architectures for established industry leaders.",
    icon: Building,
  },
];

const ServicesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="section-v bg-black relative overflow-hidden">
      {/* Background Ambient */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D4AF37] opacity-[0.015] blur-[200px] rounded-full pointer-events-none" />

      <div className="wrapper">
        <div className="mb-20 md:mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="eyebrow"
          >
            Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[36px] md:text-[52px] font-bold tracking-tight leading-[1.1]"
          >
            Expertise Tailored{" "}
            <span className="text-[#6E6E73]">for High-Stake Growth.</span>
          </motion.h2>
        </div>

        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="relative sig-grid md:grid-cols-2"
        >
          {/* Cursor Spotlight */}
          <div
            className="pointer-events-none absolute -inset-px z-0 opacity-0 md:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(212,175,55,0.04), transparent 40%)`,
            }}
          />

          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: idx * 0.1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative signature-card"
            >
              <div className="flex-between mb-10">
                <div className="w-12 h-12 bg-white/[0.03] rounded-2xl flex items-center justify-center border border-white/[0.06] group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/20 transition-all duration-500">
                  <service.icon
                    className="w-5 h-5 text-white/60 group-hover:text-[#D4AF37] transition-colors duration-500"
                  />
                </div>
                <div className="w-9 h-9 rounded-full border border-white/[0.06] flex items-center justify-center group-hover:rotate-45 group-hover:border-white/20 transition-all duration-500">
                  <ArrowUpRight className="w-4 h-4 text-[#6E6E73] group-hover:text-white transition-colors duration-500" />
                </div>
              </div>

              <h3 className="text-[24px] font-bold text-white mb-4 tracking-tight">
                {service.title}
              </h3>
              <p className="text-[15px] text-[#A1A1A6] leading-relaxed max-w-sm group-hover:text-white/80 transition-colors duration-500">
                {service.desc}
              </p>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-[#D4AF37]/[0.03] via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

