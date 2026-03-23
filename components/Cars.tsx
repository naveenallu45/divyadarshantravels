"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaUserFriends, FaSuitcase, FaSnowflake, FaCarSide, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { createWhatsAppLink, createCallLink } from "../lib/utils";

const cars = [
  { name: "Toyota Innova Crysta", type: "SUV / MUV", seats: "6-7 Seats", luggage: "3 Bags", image: "/images/innova_crysta_1774251695398.png" },
  { name: "Maruti Suzuki Ertiga", type: "MUV", seats: "6 Seats", luggage: "2 Bags", image: "/images/ertiga_car_1774251824081.png" },
  { name: "Swift Dzire", type: "Sedan", seats: "4 Seats", luggage: "2 Bags", image: "/images/swift_dzire_1774251923889.png" },
  { name: "Honda Amaze", type: "Sedan", seats: "4 Seats", luggage: "2 Bags", image: "/images/honda_amaze_1774252003856.png" },
  { name: "Toyota Etios", type: "Sedan", seats: "4 Seats", luggage: "2 Bags", image: "/images/toyota_etios.jpg" }
];

export default function Cars() {
  return (
    <section id="fleet" className="py-16 md:py-24 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-neutral-900 shadow-xl border border-neutral-800"
          >
            <FaCarSide size={24} className="text-teal-400" />
            <span className="ml-3 font-semibold text-neutral-300 pr-2">Available cars</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Drive In <span className="text-teal-400">Comfort</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 text-lg max-w-2xl mx-auto"
          >
            Well-maintained and sanitized vehicles for every type of journey. Always operated by professional drivers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:shadow-[0_0_30px_rgba(20,184,166,0.1)] transition-all hover:bg-neutral-800/80 group"
            >
              <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden shadow-inner bg-neutral-950">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex justify-between items-start mb-6 border-b border-neutral-800 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">{car.name}</h3>
                  <p className="text-neutral-500 font-medium">{car.type}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-2 mb-2">
                <div className="flex flex-col items-center p-3 bg-neutral-950/50 rounded-lg">
                  <FaUserFriends className="text-neutral-400 mb-1" />
                  <span className="text-xs font-semibold text-neutral-300">{car.seats}</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-neutral-950/50 rounded-lg">
                  <FaSuitcase className="text-neutral-400 mb-1" />
                  <span className="text-xs font-semibold text-neutral-300">{car.luggage}</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-neutral-950/50 rounded-lg">
                  <FaSnowflake className="text-neutral-400 mb-1" />
                  <span className="text-xs font-semibold text-neutral-300">AC</span>
                </div>
              </div>

              <div className="flex gap-2 mt-4 pt-4 border-t border-neutral-800">
                <a
                  href={createWhatsAppLink(`Hello! I would like to book the ${car.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 transition-colors text-[13px]"
                >
                  <FaWhatsapp size={16} /> WhatsApp
                </a>
                <a
                  href={createCallLink()}
                  className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 transition-colors border border-neutral-700 text-[13px]"
                >
                  <FaPhoneAlt size={14} /> Call Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
