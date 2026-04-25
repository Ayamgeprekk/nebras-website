"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/layanan", label: "Layanan" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/harga", label: "Harga" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  const isDark = pathname === "/" && !scrolled;

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "glass-nav shadow-nav py-3"
            : isDark
            ? "py-5 bg-transparent"
            : "glass-nav shadow-nav py-3"
        )}
      >
        <nav className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-navy font-black text-lg"
              style={{ background: "#FFC436" }}
            >
              N
            </div>
            <span
              className={cn(
                "text-xl font-black tracking-tight transition-colors",
                isDark ? "text-white" : "text-navy"
              )}
            >
              NEBRAS
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200",
                  pathname === link.href
                    ? "bg-gold/10 text-navy"
                    : isDark
                    ? "text-white/80 hover:text-white hover:bg-white/10"
                    : "text-navy/70 hover:text-navy hover:bg-navy/5"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/konsultasi"
              className="btn-gold px-5 py-2.5 text-sm animate-pulse-gold"
            >
              Konsultasi Gratis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={cn(
              "md:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
              isDark ? "text-white hover:bg-white/10" : "text-navy hover:bg-navy/5"
            )}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-[72px] z-40 glass-nav border-t border-navy/5 px-5 py-6 md:hidden"
          >
            <div className="flex flex-col gap-1 mb-6">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="block px-4 py-3.5 rounded-xl text-navy font-semibold hover:bg-navy/5 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <Link
              href="/konsultasi"
              className="btn-gold block text-center px-6 py-4 text-base"
            >
              Konsultasi Gratis
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Mobile Bottom CTA */}
      <div className="fixed bottom-5 left-5 right-5 z-40 md:hidden">
        <Link
          href="/konsultasi"
          className="btn-gold flex items-center justify-center gap-2 py-4 text-base w-full shadow-gold"
        >
          💬 Konsultasi Gratis Sekarang
        </Link>
      </div>
    </>
  );
}
