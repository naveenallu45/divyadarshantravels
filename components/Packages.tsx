"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { createWhatsAppLink, createCallLink } from "../lib/utils";
import Image from "next/image";

const packages = [
  {
    title: "Mothugudem",
    category: "Tourist Destination",
    image: "/images/mothugudem_nature_1774262760155.png",
    route: "Kakinada to Mothugudem"
  },
  {
    title: "Lambasingi / Vanajangi",
    category: "Tourist Destination",
    image: "/images/lambasingi_hills_1774262772881.png",
    route: "Kakinada to Lambasingi / Vanajangi"
  },
  {
    title: "Araku / Vizag",
    category: "Tourist Destination",
    image: "/images/araku_valley_1774262790908.png",
    route: "Kakinada to Araku / Vizag"
  },
  {
    title: "Maredumilli",
    category: "Tourist Destination",
    image: "/images/maredumilli_forest_1774262808573.png",
    route: "Kakinada to Maredumilli"
  },
  {
    title: "Thirupathi",
    category: "Temple Destination",
    image: "/images/thirupathi_temple_1774262821887.png",
    route: "Kakinada to Thirupathi"
  },
  {
    title: "Srisailam",
    category: "Temple Destination",
    image: "/images/srisailam_temple_1774262839969.png",
    route: "Kakinada to Srisailam"
  },
  {
    title: "Vijayawada",
    category: "Temple Destination",
    image: "/images/vijayawada_temple_1774262858127.png",
    route: "Kakinada to Vijayawada"
  },
  {
    title: "Annavaram",
    category: "Temple Destination",
    image: "/images/annavaram_temple_1774262874261.png",
    route: "Kakinada to Annavaram"
  },
  {
    title: "Pancharamalu",
    category: "Temple Destination",
    image: "/images/pancharamalu_temple_1774262890629.png",
    route: "Kakinada to Pancharamalu (5 Temples)"
  },
  {
    title: "Antarvedi",
    category: "Temple Destination",
    image: "/images/antarvedi_temple_1774262907119.png",
    route: "Kakinada to Antarvedi"
  },
  {
    title: "Badrachalam",
    category: "Temple Destination",
    image: "/images/badrachalam_temple_1774262924189.png",
    route: "Kakinada to Badrachalam"
  },
  {
    title: "Muramalla",
    category: "Temple Destination",
    image: "/images/muramalla_temple_1774262943413.png",
    route: "Kakinada to Muramalla"
  },
  {
    title: "Vizag",
    category: "Temple Destination",
    image: "/images/vizag_temple_1774262958167.png",
    route: "Kakinada to Vizag"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className="bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl group flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-teal-500/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-xs font-semibold uppercase tracking-wider">{pkg.category}</span>
                </div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white drop-shadow-md pr-4">
                  {pkg.title}
                </h3>
              </div>

              <div className="p-5 md:p-6 flex flex-col flex-grow">
                <div className="flex items-start text-neutral-300 gap-3 mb-6 flex-grow pt-2">
                  <FaMapMarkerAlt className="text-teal-400 mt-1 flex-shrink-0" />
                  <span className="font-medium text-[15px]">{pkg.route}</span>
                </div>

                <div className="flex gap-2 sm:gap-3 mt-auto pt-5 border-t border-neutral-800">
                  <a
                    href={createWhatsAppLink(`Hello! I am interested in the ${pkg.title} package.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm"
                  >
                    <FaWhatsapp size={16} /> Booking
                  </a>
                  <a
                    href={createCallLink()}
                    className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 transition-colors border border-neutral-700 text-sm text-center"
                  >
                    <FaPhoneAlt size={12} /> Call Now
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
