"use client";

import { FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { createWhatsAppLink, createCallLink } from "../lib/utils";

export default function Footer() {
  return (
    <footer id="contact" className="bg-neutral-950 pt-16 pb-8 md:pt-24 md:pb-12 border-t border-neutral-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <Link href="#home" className="flex items-center gap-4">
              <div className="relative w-20 h-20 md:w-16 md:h-16 rounded-full overflow-hidden shadow-lg border-2 border-neutral-800 flex-shrink-0">
                <Image
                  src="https://res.cloudinary.com/dpepzphqf/image/upload/v1774249988/WhatsApp_Image_2026-03-23_at_11.05.32_AM_wtucc5.jpg"
                  alt="Shareef Travels Logo"
                  fill
                  sizes="(min-width: 768px) 64px, 80px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-white mb-1">
                  Shareef <span className="text-teal-400">Travels</span>
                </h3>
                <p className="text-sm font-medium text-neutral-500 uppercase tracking-widest">Premium Rides</p>
              </div>
            </Link>
            <p className="text-neutral-400 leading-relaxed max-w-sm">
              Offering top-tier cab booking services in Kakinada and Rajahmundry. Your reliable partner for safe, comfortable, and affordable rides. All cars provided with professional drivers.
            </p>
            
            <div className="flex items-center space-x-5 pt-2">
              <a href="https://www.facebook.com/share/1BED612BVm/" target="_blank" rel="noopener noreferrer" className="p-3 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400 hover:text-white hover:bg-teal-500 hover:border-teal-500 transition-all">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.instagram.com/helloshareef?igsh=aGx3b3o4aTc2b2Ni" target="_blank" rel="noopener noreferrer" className="p-3 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400 hover:text-white hover:bg-pink-600 hover:border-pink-600 transition-all">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Wrapper for side-by-side on mobile */}
          <div className="grid grid-cols-2 gap-6 lg:gap-16 lg:col-span-2">
            {/* Quick Links */}
            <div className="lg:pl-8">
            <h4 className="text-xl font-bold text-white mb-8 border-b border-neutral-800 pb-4 inline-block">Quick Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', link: '#home' },
                { name: 'Services', link: '#services' },
                { name: 'Packages', link: '#packages' },
                { name: 'Available Cars', link: '#fleet' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.link} className="text-neutral-400 hover:text-teal-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-teal-400 transition-colors"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8 border-b border-neutral-800 pb-4 inline-block">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-neutral-900 p-2 sm:p-3 rounded-xl border border-neutral-800 text-teal-400">
                  <FaMapMarkerAlt size={16} className="sm:text-[20px]" />
                </div>
                <div>
                  <strong className="block text-white mb-1 text-sm sm:text-base">Office Location</strong>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                    3-3-11 Vinayaka temple street<br />
                    Recharlapeta<br />
                    Kakinada, Sambhamurthy Nagar<br />
                    Andhra Pradesh
                  </p>
                </div>
              </li>
              
              <li className="flex flex-col gap-3">
                <div className="flex gap-2 sm:gap-4">
                  <a href={createCallLink()} className="flex items-center gap-2 sm:gap-3 bg-neutral-900 border border-neutral-800 px-3 py-2 sm:px-4 sm:py-3 rounded-xl hover:bg-neutral-800 transition-colors w-full group">
                    <div className="text-blue-400 group-hover:scale-110 transition-transform">
                      <FaPhoneAlt size={14} className="sm:text-[18px]" />
                    </div>
                    <span className="text-neutral-300 font-medium text-xs sm:text-sm">9849576914</span>
                  </a>
                </div>
                <div className="flex gap-2 sm:gap-4">
                  <a href={createWhatsAppLink("Hello! I want to book a trip.")} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 sm:gap-3 bg-green-900/20 border border-green-800/30 px-3 py-2 sm:px-4 sm:py-3 rounded-xl hover:bg-green-900/40 transition-colors w-full group">
                    <div className="text-green-500 group-hover:scale-110 transition-transform">
                      <FaWhatsapp size={16} className="sm:text-[20px]" />
                    </div>
                    <span className="text-green-400 font-semibold select-none text-[11px] sm:text-sm">WhatsApp</span>
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2 sm:items-center sm:gap-4 overflow-hidden">
                <div className="bg-neutral-900 p-2 sm:p-3 rounded-xl border border-neutral-800 text-rose-400 flex-shrink-0">
                  <FaEnvelope size={14} className="sm:text-[20px]" />
                </div>
                <a href="mailto:khashimshareef56786@gmail.com" className="text-neutral-300 hover:text-white transition-colors text-xs sm:text-sm font-medium break-all">
                  khashimshareef56786@gmail.com
                </a>
              </li>
            </ul>
          </div>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-900 text-center flex flex-col items-center gap-2">
          <p className="text-neutral-500 font-medium tracking-wide">
            © {new Date().getFullYear()} Shareef Travels. All rights reserved.
          </p>
          <p className="text-neutral-600 text-sm">
            Cab Services in Kakinada & Rajahmundry
          </p>
          <p className="text-neutral-500 text-sm flex items-center gap-2">
            <span>Made with ❤️ by</span>
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
            >
              <span className="relative h-5 w-5 overflow-hidden ">
                <Image
                  src="/images/Staffarc-logo.png"
                  alt="StaffArc"
                  fill
                  className="object-cover"
                  sizes="20px"
                />
              </span>
              <span className="font-semibold">StaffArc</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
