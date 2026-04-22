import Image from "next/image";
import { FaCarSide, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { createWhatsAppLink, createCallLink } from "../lib/utils";

const vehicleSections = [
  {
    title: "5 Seaters",
    vehicles: [
      { name: "Desire", image: "https://source.unsplash.com/800x500/?maruti,dzire,car" },
      { name: "Amaze", image: "https://source.unsplash.com/800x500/?honda,amaze,car" },
      { name: "Sonet", image: "https://source.unsplash.com/800x500/?kia,sonet,suv" },
      { name: "Brezza", image: "https://source.unsplash.com/800x500/?brezza,suv,car" },
      { name: "Ciaz", image: "https://source.unsplash.com/800x500/?ciaz,sedan,car" },
      { name: "Etios", image: "https://source.unsplash.com/800x500/?toyota,etios,car" },
      { name: "Xcent", image: "https://source.unsplash.com/800x500/?hyundai,xcent,sedan" },
      { name: "Zest", image: "https://source.unsplash.com/800x500/?tata,zest,car" },
      { name: "Wagonr", image: "https://source.unsplash.com/800x500/?wagonr,hatchback,car" },
    ],
  },
  {
    title: "7 Seaters",
    vehicles: [
      { name: "Innova", image: "https://source.unsplash.com/800x500/?toyota,innova,muv" },
      { name: "Innova Crysta", image: "https://source.unsplash.com/800x500/?innova,crysta,car" },
      { name: "Innova Hycross", image: "https://source.unsplash.com/800x500/?toyota,hycross,suv" },
      { name: "Ertiga", image: "https://source.unsplash.com/800x500/?maruti,ertiga,muv" },
      { name: "XL6", image: "https://source.unsplash.com/800x500/?maruti,xl6,car" },
      { name: "Carens", image: "https://source.unsplash.com/800x500/?kia,carens,car" },
    ],
  },
  {
    title: "12 Seaters",
    vehicles: [
      { name: "Tempo Traveller 2+1", image: "https://source.unsplash.com/800x500/?tempo,traveller,van" },
      { name: "Tempo Traveller 1+1", image: "https://source.unsplash.com/800x500/?traveller,minibus,india" },
      { name: "Urbania", image: "https://source.unsplash.com/800x500/?force,urbania,bus" },
      { name: "SML 12 Seater", image: "https://source.unsplash.com/800x500/?minibus,transport,vehicle" },
    ],
  },
  {
    title: "16 To 40 Seaters",
    vehicles: [
      { name: "Tempo Traveller 17 Seater", image: "https://source.unsplash.com/800x500/?tempo,traveller,bus" },
      { name: "Urbania 16 Seater", image: "https://source.unsplash.com/800x500/?urbania,shuttle,bus" },
      { name: "Mono Bus 22 Seater", image: "https://source.unsplash.com/800x500/?mini,bus,coach" },
      { name: "SML 24 To 27 Seater", image: "https://source.unsplash.com/800x500/?sml,bus,transport" },
      { name: "Bharat Benz 24 To 27 Seater", image: "https://source.unsplash.com/800x500/?bharatbenz,bus,coach" },
      { name: "Eicher 30 To 32 Seater", image: "https://source.unsplash.com/800x500/?eicher,bus,india" },
      { name: "40 To 50 Seater Buses", image: "https://source.unsplash.com/800x500/?tourist,bus,highway" },
    ],
  },
];

export default function Cars() {
  return (
    <section id="fleet" className="py-16 md:py-24 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 mb-5 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border border-teal-500/30 shadow-xl">
            <FaCarSide size={18} className="text-teal-300" />
            <span className="font-semibold text-teal-100 tracking-wide">Available Vehicles</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
            Pick The Right <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-400">Vehicle Category</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Multiple seating options available for family trips, group tours, and business travel with professional drivers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {vehicleSections.map((section) => (
            <div
              key={section.title}
              className="bg-gradient-to-br from-neutral-900 to-neutral-900/70 border border-neutral-800 rounded-2xl p-6 hover:shadow-[0_0_30px_rgba(20,184,166,0.14)] transition-all hover:border-teal-500/30"
            >
              <div className="mb-4 flex items-center justify-between border-b border-neutral-800 pb-3">
                <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-neutral-800 text-teal-300 border border-neutral-700">
                  {section.vehicles.length} Vehicles
                </span>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {section.vehicles.map((vehicle) => (
                  <li key={vehicle.name} className="text-neutral-300 bg-neutral-950/60 border border-neutral-800 rounded-xl p-3 hover:border-teal-500/30 transition-colors">
                    <div className="mb-3 h-24 rounded-lg overflow-hidden border border-neutral-700 bg-neutral-900/70">
                      <Image
                        src={vehicle.image}
                        alt={vehicle.name}
                        width={800}
                        height={500}
                        unoptimized
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h4 className="text-white font-semibold mb-3">{vehicle.name}</h4>
                    <div className="flex gap-2">
                      <a
                        href={createWhatsAppLink(`Hello Divya Darshan Travels! I want to book the ${vehicle.name}. Please share price and availability.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-2 rounded-lg flex items-center justify-center gap-1.5 transition-colors text-xs"
                      >
                        <FaWhatsapp size={14} /> WhatsApp
                      </a>
                      <a
                        href={createCallLink()}
                        className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold py-2 px-2 rounded-lg flex items-center justify-center gap-1.5 transition-colors border border-neutral-700 text-xs"
                      >
                        <FaPhoneAlt size={12} /> Call Now
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-10">
          <a
            href={createWhatsAppLink("Hello Divya Darshan Travels! Please share complete vehicle list with pricing and availability.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
          >
            <FaWhatsapp size={17} /> Check All Vehicles on WhatsApp
          </a>
          <a
            href={createCallLink()}
            className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors border border-neutral-700"
          >
            <FaPhoneAlt size={15} /> Call for Vehicle Booking
          </a>
        </div>
      </div>
    </section>
  );
}
