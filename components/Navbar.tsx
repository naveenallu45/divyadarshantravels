"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { createWhatsAppLink, createCallLink } from "../lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Packages", href: "/packages" },
  { name: "Available Vehicles", href: "/vehicles" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={false}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-neutral-950/30 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-16 h-16 md:w-12 md:h-12 rounded-full overflow-hidden border border-neutral-700 bg-white p-1">
              <Image
                src="/images/divya-darshan-logo.png"
                alt="Divya Darshan Travels Logo"
                fill
                priority
                sizes="(min-width: 768px) 48px, 64px"
                className="object-contain"
              />
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">
              Divya Darshan <span className="text-teal-400">Travels</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-neutral-300 hover:text-white transition-colors text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={createWhatsAppLink("Hello Divya Darshan Travels! I would like to enquire about your travel services. Please share details and pricing.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center gap-2 font-medium transition-colors"
            >
              <FaWhatsapp size={18} />
              Enquire Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-neutral-300 hover:text-white"
            >
              {mobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-neutral-950/70 backdrop-blur-md"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-neutral-300 hover:text-white hover:bg-neutral-800"
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-3 px-3">
                <a
                  href={createCallLink()}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-md font-medium"
                >
                  <FaPhoneAlt /> Call Us
                </a>
                <a
                  href={createWhatsAppLink("Hello Divya Darshan Travels! I would like to enquire about your travel services. Please share details and pricing.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-green-600 hover:bg-green-500 text-white rounded-md font-medium"
                >
                  <FaWhatsapp size={18} /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
