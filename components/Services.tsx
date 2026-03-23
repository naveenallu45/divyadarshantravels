"use client";

import { motion, Variants } from "framer-motion";
import { FaCarSide, FaMapMarkedAlt, FaCity, FaPlane, FaRoute, FaStar } from "react-icons/fa";
import Image from "next/image";

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

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
          
          {/* Left Services */}
          <div className="flex flex-col gap-6 w-full lg:w-1/3 z-10">
            {leftServices.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={cardVariantsLeft}
                className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl p-6 lg:text-right hover:border-teal-500/30 transition-colors shadow-lg"
              >
                <div className="flex items-center gap-4 lg:flex-row-reverse mb-3">
                  <div className="w-12 h-12 rounded-xl bg-neutral-950 flex items-center justify-center flex-shrink-0 shadow-inner group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white flex-grow lg:flex-grow-0">{service.title}</h3>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">{service.desc}</p>
                
                {/* Arrow Pointer to Car (hidden on mobile) */}
                <div className="hidden lg:block absolute top-1/2 -right-8 w-8 border-t-2 border-dashed border-neutral-700 pointer-events-none group-hover:border-teal-400 transition-colors">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-neutral-700 group-hover:bg-teal-400 transition-colors"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Car Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="relative w-full sm:w-[500px] h-[300px] sm:h-[400px] lg:w-1/3 z-0 my-8 lg:my-0 flex-shrink-0"
          >
            <div className="absolute inset-0 bg-teal-500/20 blur-[100px] rounded-full"></div>
            <Image
              src="/images/innova_crysta_1774251695398.png"
              alt="Center Car Display"
              fill
              className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
          </motion.div>

          {/* Right Services */}
          <div className="flex flex-col gap-6 w-full lg:w-1/3 z-10">
            {rightServices.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={cardVariantsRight}
                className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl p-6 text-left hover:border-teal-500/30 transition-colors shadow-lg"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-neutral-950 flex items-center justify-center flex-shrink-0 shadow-inner group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white flex-grow lg:flex-grow-0">{service.title}</h3>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">{service.desc}</p>
                
                {/* Arrow Pointer to Car (hidden on mobile) */}
                <div className="hidden lg:block absolute top-1/2 -left-8 w-8 border-t-2 border-dashed border-neutral-700 pointer-events-none group-hover:border-teal-400 transition-colors">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-neutral-700 group-hover:bg-teal-400 transition-colors"></div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
