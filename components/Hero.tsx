import Image from "next/image";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { createWhatsAppLink, createCallLink } from "../lib/utils";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image Area */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop"
          alt="Scenic Travel Background"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/60 to-neutral-950/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-800/80 border border-neutral-700 backdrop-blur-sm text-teal-400 font-medium text-sm mb-6 shadow-xl">
            <FaMapMarkerAlt /> Vijayawada
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-4 sm:mb-6">
            <span className="text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.75),0_1px_3px_rgba(0,0,0,0.9)]">
              Divya Darshan{" "}
            </span>
            <span className="inline-block bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-400 bg-clip-text text-transparent [filter:drop-shadow(0_2px_16px_rgba(0,0,0,0.85))]">
              Travels
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 mb-6 sm:mb-8 max-w-2xl font-light">
            We do not just move people; we move hearts. Enjoy punctual, transparent, and reliable travel with a divine experience on every trip.
          </p>

          <div className="flex flex-row items-center gap-2 sm:gap-4 justify-center md:justify-start w-full">
            <a
              href={createWhatsAppLink("Hello Divya Darshan Travels! I want to book a trip. Please share cab options, driver availability, and fare details.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 sm:px-8 sm:py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl sm:rounded-full flex justify-center items-center gap-2 sm:gap-3 font-semibold text-sm sm:text-lg transition-colors flex-1 sm:flex-none shadow-[0_0_20px_rgba(34,197,94,0.3)] shadow-green-500/20"
            >
              <FaWhatsapp className="text-lg sm:text-2xl" /> <span className="hidden sm:inline">Book via</span> WhatsApp
            </a>
            <a
              href={createCallLink()}
              className="px-4 py-3 sm:px-8 sm:py-4 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white rounded-xl sm:rounded-full flex justify-center items-center gap-2 sm:gap-3 font-semibold text-sm sm:text-lg transition-all flex-1 sm:flex-none"
            >
              <FaPhoneAlt className="text-base sm:text-xl" /> Call <span className="hidden sm:inline">9581882895</span>
            </a>
          </div>
        </div>

        {/* Floating Quick Info Cards */}
        <div className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {quickStats.map((stat, i) => (
            <div key={i} className="bg-neutral-900/50 backdrop-blur-md border border-neutral-800 p-4 sm:p-6 rounded-2xl flex flex-col items-center justify-center text-center group hover:bg-neutral-800/80 transition-colors">
              <div className="text-teal-400 mb-2 sm:mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <h3 className="text-white font-bold text-base sm:text-lg">{stat.title}</h3>
              <p className="text-neutral-400 text-sm mt-1">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const quickStats = [
  {
    icon: <FaMapMarkerAlt size={28} />,
    title: "Wide Coverage",
    desc: "Vijayawada & Nearby Areas"
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
