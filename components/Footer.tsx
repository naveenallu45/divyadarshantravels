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
            <Link href="/" className="flex items-center gap-4">
              <div className="relative w-20 h-20 md:w-16 md:h-16 rounded-full overflow-hidden shadow-lg border-2 border-neutral-800 bg-white p-1 flex-shrink-0">
                <Image
                  src="/images/divya-darshan-logo.png"
                  alt="Divya Darshan Travels Logo"
                  fill
                  sizes="(min-width: 768px) 64px, 80px"
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-white mb-1">
                  Divya Darshan <span className="text-teal-400">Travels</span>
                </h3>
                <p className="text-sm font-medium text-neutral-500 uppercase tracking-widest">Premium Rides</p>
              </div>
            </Link>
            <p className="text-neutral-400 leading-relaxed max-w-sm">
              At Divya Darshan Travels, we do not just move people; we move hearts. We aim to be Vijayawada&apos;s most trusted travel partner, known for punctuality, transparent pricing, and a divine travel experience.
            </p>
            <p className="text-neutral-500 italic text-sm max-w-sm">
              Let&apos;s explore the beauty of India together. Your seat is waiting!
            </p>
            
            <div className="flex items-center space-x-5 pt-2">
              <a href="https://www.facebook.com/share/1Dnyu2MDvW/" target="_blank" rel="noopener noreferrer" className="p-3 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400 hover:text-white hover:bg-teal-500 hover:border-teal-500 transition-all">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=h6lu30u" target="_blank" rel="noopener noreferrer" className="p-3 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400 hover:text-white hover:bg-pink-600 hover:border-pink-600 transition-all">
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
                { name: "Home", link: "/" },
                { name: "Services", link: "/services" },
                { name: "Packages", link: "/packages" },
                { name: "Available Vehicles", link: "/vehicles" },
                { name: "Testimonials", link: "/testimonials" },
                { name: "Contact", link: "/contact" },
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
                    Ballem Vaari Street<br />
                    Vijayawada - 521108<br />
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
                    <span className="text-neutral-300 font-medium text-xs sm:text-sm">9581882895</span>
                  </a>
                </div>
                <div className="flex gap-2 sm:gap-4">
                  <a href={createWhatsAppLink("Hello Divya Darshan Travels! I want to book a trip. Please share cab options, driver availability, and fare details.")} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 sm:gap-3 bg-green-900/20 border border-green-800/30 px-3 py-2 sm:px-4 sm:py-3 rounded-xl hover:bg-green-900/40 transition-colors w-full group">
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
                <a href="mailto:divyadarshantravels0199@gmail.com" className="text-neutral-300 hover:text-white transition-colors text-xs sm:text-sm font-medium break-all">
                  divyadarshantravels0199@gmail.com
                </a>
              </li>
            </ul>
          </div>
          </div>
        </div>

        <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="text-xl font-bold text-white mb-6 border-b border-neutral-800 pb-4 inline-block">Business Hours</h4>
            <div className="w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3 text-sm sm:text-base">
                <span className="text-neutral-300">Monday - Sunday</span>
                <span className="text-teal-400 font-semibold">Open 24/7</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-6 border-b border-neutral-800 pb-4 inline-block">Google Map Location</h4>
            <div className="w-full overflow-hidden rounded-2xl border border-neutral-800">
              <iframe
                src="https://maps.google.com/maps?q=Ballem%20Vaari%20Street%20Vijayawada%20521108&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="600"
                height="270"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-900 text-center flex flex-col items-center gap-2">
          <p className="text-neutral-500 font-medium tracking-wide">
            © {new Date().getFullYear()} Divya Darshan Travels. All rights reserved.
          </p>
          <p className="text-neutral-600 text-sm">
            Travel Agency, Mini Bus Taxi Services, Car Rentals, Taxi Services, and On-Demand Drivers in Vijayawada
          </p>
          <p className="text-neutral-500 text-sm flex items-center gap-2">
            <span>Made with ❤️ by</span>
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
            >
              <span className="font-semibold">StaffArc</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
