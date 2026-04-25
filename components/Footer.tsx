"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-white/[0.04]">
      <div className="wrapper pt-20 md:pt-28 pb-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center transition-transform group-hover:rotate-12 duration-300">
                <div className="w-4 h-4 bg-black rounded-sm" />
              </div>
              <span className="text-[18px] font-bold tracking-tight text-white">
                NEBRAS
              </span>
            </Link>
            <p className="text-[15px] text-[#A1A1A6] max-w-sm leading-relaxed mb-8">
              The signature digital agency for brands that refuse to settle for
              the ordinary. Lighting the path to exceptional growth.
            </p>
            <div className="flex gap-6">
              {["Instagram", "LinkedIn", "Twitter"].map((s) => (
                <Link
                  key={s}
                  href="#"
                  className="text-[12px] font-semibold text-white/30 hover:text-[#D4AF37] transition-colors duration-300 uppercase tracking-[0.15em]"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-bold text-white uppercase tracking-[0.2em] mb-6">
              Archive
            </h4>
            <ul className="space-y-4">
              {["Work", "Pricing", "About"].map((i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="text-[14px] text-[#6E6E73] hover:text-white transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    {i}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-bold text-white uppercase tracking-[0.2em] mb-6">
              Expertise
            </h4>
            <ul className="space-y-4">
              {["Umrah", "Hospitality", "Corporate"].map((i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="text-[14px] text-[#6E6E73] hover:text-white transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    {i}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-bold text-white uppercase tracking-[0.2em] mb-6">
              Reach Out
            </h4>
            <div className="flex items-center gap-2 mb-2">
              <Mail className="w-4 h-4 text-[#6E6E73]" />
              <p className="text-[16px] text-white font-semibold">
                hello@nebras.id
              </p>
            </div>
            <div className="flex items-center gap-2 mb-8">
              <MapPin className="w-4 h-4 text-[#6E6E73]" />
              <p className="text-[16px] text-[#6E6E73] font-medium">
                Jakarta, ID
              </p>
            </div>
            <Link
              href="/konsultasi"
              className="cta-btn cta-btn-secondary !w-full !py-3 !text-[13px] !rounded-xl"
            >
              Book Strategy Call
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/[0.04] gap-6">
          <p className="text-[12px] text-[#2C2C2E] order-2 md:order-1">
            © 2026 NEBRAS. Handcrafted with sub-pixel precision.
          </p>

          <div className="flex items-center gap-8 order-1 md:order-2">
            <Link
              href="#"
              className="text-[12px] text-[#2C2C2E] hover:text-white transition-colors duration-300"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-[12px] text-[#2C2C2E] hover:text-white transition-colors duration-300"
            >
              Terms
            </Link>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full border border-white/[0.06] flex items-center justify-center text-[#2C2C2E] hover:text-white hover:border-white/20 transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUpRight className="w-4 h-4 -rotate-45" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

