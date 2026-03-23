"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { createWhatsAppLink, createCallLink } from "../lib/utils";
import Image from "next/image";

const packages = [
  {
    title: "Tourist Destinations",
    image: "/images/luxury_car_araku_1774250758447.png",
    routes: [
      "Kakinada to Mothugudem",
      "Kakinada to Lambasingi / Vanajangi",
      "Kakinada to Araku / Vizag",
      "Kakinada to Maredumilli"
    ]
  },
  {
    title: "Temple Destinations",
    image: "/images/south_indian_temple_1774250792430.png",
    routes: [
      "Kakinada to Thirupathi",
      "Kakinada to Srisailam",
      "Kakinada to Vijayawada",
      "Kakinada to Annavaram",
      "Kakinada to Pancharamalu (5 Temples)",
      "Kakinada to Antarvedi",
      "Kakinada to Badrachalam",
      "Kakinada to Muramalla",
      "Kakinada to Vizag"
    ]
  }
];

export default function Packages() {
  return (
    <section id="packages" className="py-16 md:py-24 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Special <span className="text-teal-400">Packages</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 text-lg"
          >
            Curated journeys for tourism and devotion with dedicated chauffeurs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl group flex flex-col"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
                <h3 className="absolute bottom-6 left-6 text-3xl font-bold text-white drop-shadow-md">
                  {pkg.title}
                </h3>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <ul className="space-y-4 mb-8 flex-grow">
                  {pkg.routes.map((route, i) => (
                    <li key={i} className="flex items-start text-neutral-300 gap-3 border-b border-neutral-800/50 pb-3 last:border-0 last:pb-0">
                      <FaMapMarkerAlt className="text-teal-400 mt-1 flex-shrink-0" />
                      <span className="font-medium text-[15px]">{route}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2 sm:gap-3 mt-auto pt-6 border-t border-neutral-800">
                  <a
                    href={createWhatsAppLink(`Hello! I am interested in the ${pkg.title} trips.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm sm:text-base"
                  >
                    <FaWhatsapp size={18} className="sm:text-[20px]" /> Booking Enquiry
                  </a>
                  <a
                    href={createCallLink()}
                    className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl flex items-center justify-center gap-2 transition-colors border border-neutral-700 text-sm sm:text-base text-center"
                  >
                    <FaPhoneAlt size={14} className="sm:text-[16px]" /> Call Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
