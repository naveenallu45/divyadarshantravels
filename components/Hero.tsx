"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { createWhatsAppLink, createCallLink } from "../lib/utils";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image Area */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/luxury_car_araku_1774250758447.png" // The dark luxury SUV driving scene
          alt="Luxury Car Travels in Kakinada"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/60 to-neutral-950/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-800/80 border border-neutral-700 backdrop-blur-sm text-teal-400 font-medium text-sm mb-6 shadow-xl"
          >
            <FaMapMarkerAlt /> Kakinada & Rajahmundry
          </motion.div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-4 sm:mb-6">
            Shareef Car <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Travels</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 mb-6 sm:mb-8 max-w-2xl font-light">
            Experiencing luxurious and reliable rides for your local, outstation, and pilgrimage trips. Available 24/7 with professional drivers.
          </p>

          <div className="flex flex-row items-center gap-2 sm:gap-4 justify-center md:justify-start w-full">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={createWhatsAppLink("Hello! I want to book a cab right now.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 sm:px-8 sm:py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl sm:rounded-full flex justify-center items-center gap-2 sm:gap-3 font-semibold text-sm sm:text-lg transition-colors flex-1 sm:flex-none shadow-[0_0_20px_rgba(34,197,94,0.3)] shadow-green-500/20"
            >
              <FaWhatsapp className="text-lg sm:text-2xl" /> <span className="hidden sm:inline">Book via</span> WhatsApp
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={createCallLink()}
              className="px-4 py-3 sm:px-8 sm:py-4 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white rounded-xl sm:rounded-full flex justify-center items-center gap-2 sm:gap-3 font-semibold text-sm sm:text-lg transition-all flex-1 sm:flex-none"
            >
              <FaPhoneAlt className="text-base sm:text-xl" /> Call <span className="hidden sm:inline">9849576914</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Floating Quick Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
        >
          {quickStats.map((stat, i) => (
            <div key={i} className="bg-neutral-900/50 backdrop-blur-md border border-neutral-800 p-4 sm:p-6 rounded-2xl flex flex-col items-center justify-center text-center group hover:bg-neutral-800/80 transition-colors">
              <div className="text-teal-400 mb-2 sm:mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <h3 className="text-white font-bold text-base sm:text-lg">{stat.title}</h3>
              <p className="text-neutral-400 text-sm mt-1">{stat.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const quickStats = [
  {
    icon: <FaMapMarkerAlt size={28} />,
    title: "Wide Coverage",
    desc: "Kakinada & Surroundings"
  },
  {
    icon: <FaPhoneAlt size={28} />,
    title: "24/7 Available",
    desc: "No holidays, always ready"
  },
  {
    icon: <FaWhatsapp size={28} />,
    title: "Instant Booking",
    desc: "Quick WhatsApp response"
  },
  {
    icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.98 70.4L71.88 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 271.62c0 28.3 19.56 52.62 46.65 59.9.52 1.48 1.14 2.91 1.77 4.33 2.15 4.8 6.8 7.8 11.97 7.8A12.72 12.72 0 0 0 88 331.43V416c0 17.67 14.33 32 32 32h24c17.67 0 32-14.33 32-32v-51.15zM224 416v-80h64v80zM358.34 329.13z"></path></svg>,
    title: "Premium Fleet",
    desc: "Innova, Ertiga, Swift"
  }
];
