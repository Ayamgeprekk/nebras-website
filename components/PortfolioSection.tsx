"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Eye } from "lucide-react";

const projects = [
  {
    title: "Al-Barakah Travel",
    category: "Travel & Religi",
    result: "Conversion Engine",
    image: "/portfolio-1.png",
    size: "tall",
    stats: "+340% Leads",
  },
  {
    title: "Vista Resorts",
    category: "Hospitality",
    result: "Premium Branding",
    image: "/portfolio-1.png",
    size: "wide",
    stats: "2.4s Load",
  },
  {
    title: "Safwah Boutique",
    category: "Retail UMKM",
    result: "Market Authority",
    image: "/portfolio-1.png",
    size: "wide",
    stats: "98% Retention",
  },
];

const PortfolioSection = () => {
  return (
    <section className="section-v bg-black relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#D4AF37] opacity-[0.012] blur-[200px] rounded-full pointer-events-none" />

      <div className="wrapper">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="eyebrow"
            >
              Case Studies
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[36px] md:text-[52px] font-bold tracking-tight leading-[1.1]"
            >
              Exceptional Results{" "}
              <span className="text-[#6E6E73]">by Intentional Design.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/portfolio"
              className="cta-btn cta-btn-secondary !px-8 !py-3 !text-[13px] hidden md:inline-flex items-center gap-2 group"
            >
              View Archive
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: idx * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative cursor-pointer ${
                project.size === "tall" ? "md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden rounded-[28px] border border-white/[0.05] bg-[#08080A] shadow-2xl ${
                  project.size === "tall"
                    ? "aspect-[3/4] md:aspect-auto md:h-full"
                    : "aspect-[16/10]"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-105 ease-out"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-[#D4AF37]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Content */}
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
                  {/* Top Tags */}
                  <div className="flex items-start justify-between">
                    <motion.span
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.3em] bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-[#D4AF37]/20"
                    >
                      {project.result}
                    </motion.span>
                    <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      <Eye className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Bottom Info */}
                  <div>
                    <h3 className="text-[24px] md:text-[30px] font-bold text-white tracking-tight mb-1">
                      {project.title}
                    </h3>
                    <p className="text-[13px] font-medium text-[#A1A1A6] tracking-widest uppercase mb-4">
                      {project.category}
                    </p>

                    {/* Stats bar */}
                    <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                      <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                      <span className="text-[12px] font-bold text-white/80 tracking-wide">
                        {project.stats}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-12 md:hidden">
          <Link
            href="/portfolio"
            className="cta-btn cta-btn-secondary w-full text-center"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

