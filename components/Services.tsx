import { FaCarSide, FaMapMarkedAlt, FaCity, FaPlane, FaRoute, FaStar } from "react-icons/fa";

const leftServices = [
  {
    title: "Travel Agency",
    desc: "Complete trip planning support with transparent pricing and timely service.",
    icon: <FaCarSide size={24} className="text-teal-400" />,
  },
  {
    title: "Mini Bus Taxi Services",
    desc: "Comfortable mini bus options for families, groups, and pilgrim tours.",
    icon: <FaRoute size={24} className="text-blue-400" />,
  },
  {
    title: "Car Rentals",
    desc: "Well-maintained cars with professional drivers for local and outstation trips.",
    icon: <FaCity size={24} className="text-purple-400" />,
  },
];

const rightServices = [
  {
    title: "Taxi Services",
    desc: "Door-to-door taxi rides with reliable pickups and safe travel experience.",
    icon: <FaPlane size={24} className="text-amber-400" />,
  },
  {
    title: "On-Demand Drivers",
    desc: "Temporary halting drivers available on demand for flexible travel needs.",
    icon: <FaMapMarkedAlt size={24} className="text-rose-400" />,
  },
  {
    title: "24/7 Support",
    desc: "Any day, any time booking assistance for urgent and planned travel.",
    icon: <FaStar size={24} className="text-emerald-400" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-32 bg-neutral-950 relative border-t border-neutral-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.05)_0%,transparent_60%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            <span className="text-teal-400">Services</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            We deliver a divine travel experience with punctuality, transparent pricing, and professional drivers for every ride.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mx-auto max-w-5xl">
          
          {/* Left Services */}
          {leftServices.map((service) => (
            <div
              key={service.title}
              className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-teal-500/30 transition-colors shadow-lg"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-neutral-950 flex items-center justify-center flex-shrink-0 shadow-inner group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}

          {/* Right Services */}
          {rightServices.map((service) => (
            <div
              key={service.title}
              className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-teal-500/30 transition-colors shadow-lg"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-neutral-950 flex items-center justify-center flex-shrink-0 shadow-inner group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
