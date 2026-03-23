"use client";

import { motion, Variants } from "framer-motion";
import { FaCarSide, FaMapMarkedAlt, FaCity, FaPlane, FaRoute, FaStar } from "react-icons/fa";

const leftServices = [
  {
    title: "Car Rentals",
    desc: "Hire premium cars for standard daily rental.",
    icon: <FaCarSide size={24} className="text-teal-400" />,
  },
  {
    title: "Round Trips",
    desc: "Best quotes for round trips from any point.",
    icon: <FaRoute size={24} className="text-blue-400" />,
  },
  {
    title: "Local Trips",
    desc: "Explore the city, run errands with ease.",
    icon: <FaCity size={24} className="text-purple-400" />,
  },
];

const rightServices = [
  {
    title: "Airport Drops",
    desc: "Punctual transfers to ensure you never miss flights.",
    icon: <FaPlane size={24} className="text-amber-400" />,
  },
  {
    title: "Outstation",
    desc: "Long-distance journeys made comfortable.",
    icon: <FaMapMarkedAlt size={24} className="text-rose-400" />,
  },
  {
    title: "Event Transport",
    desc: "Reliable transport for weddings & functions.",
    icon: <FaStar size={24} className="text-emerald-400" />,
  },
];

const cardVariantsLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" }
  })
};

const cardVariantsRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" }
  })
};

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-32 bg-neutral-950 relative border-t border-neutral-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.05)_0%,transparent_60%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Our <span className="text-teal-400">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 text-lg max-w-2xl mx-auto"
          >
            A fleet tailored to your needs. Note: All our cars are provided <strong className="text-white">with professional drivers only</strong>.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mx-auto max-w-5xl">
          
          {/* Left Services */}
          {leftServices.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariantsLeft}
              className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-teal-500/30 transition-colors shadow-lg"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-neutral-950 flex items-center justify-center flex-shrink-0 shadow-inner group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}

          {/* Right Services */}
          {rightServices.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariantsRight}
              className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-teal-500/30 transition-colors shadow-lg"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-neutral-950 flex items-center justify-center flex-shrink-0 shadow-inner group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
