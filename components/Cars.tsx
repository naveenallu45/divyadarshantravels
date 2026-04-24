"use client";

import Image from "next/image";
import { createElement, useMemo, useState } from "react";
import { FaCarSide, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { createWhatsAppLink, createCallLink } from "../lib/utils";

const vehicleSections = [
  {
    title: "5 Seaters",
    vehicles: [
      { name: "Desire", image: "/cars/dzire.webp" },
      { name: "Amaze", image: "/cars/amaze.webp" },
      { name: "Sonet", image: "/cars/sonet.webp" },
      { name: "Brezza", image: "/cars/brezza.webp" },
      { name: "Ciaz", image: "/cars/ciaz.webp" },
      { name: "Etios", image: "/cars/etios.webp" },
      { name: "Xcent", image: "/cars/xcent.webp" },
      { name: "Zest", image: "/cars/zest.webp" },
      { name: "Wagonr", image: "/cars/wagonr.webp" },
    ],
  },
  {
    title: "7 Seaters",
    vehicles: [
      { name: "Innova", image: "/cars/innova.webp" },
      { name: "Innova Crysta", image: "/cars/innova_crysta.webp" },
      { name: "Innova Hycross", image: "/cars/innova_hycross.webp" },
      { name: "Ertiga", image: "/cars/ertiga.webp" },
      { name: "XL6", image: "/cars/xl6.webp" },
      { name: "Carens", image: "/cars/carens.webp" },
    ],
  },
  {
    title: "12 Seaters",
    vehicles: [
      { name: "Tempo Traveller 2+1", image: "/cars/tempo_traveller_2_1.webp" },
      { name: "Tempo Traveller 1+1", image: "/cars/tempo_traveller_1_1.webp" },
      { name: "Urbania", image: "/cars/urbania.webp" },
      { name: "SML 12 Seater", image: "/cars/sml_12_seater.webp" },
    ],
  },
  {
    title: "16 To 40 Seaters",
    vehicles: [
      { name: "Tempo Traveller 17 Seater", image: "/cars/tempo_traveller_17_seater.webp" },
      { name: "Urbania 16 Seater", image: "/cars/urbania_16_seater.webp" },
      { name: "Mono Bus 22 Seater", image: "/cars/mono_bus_22_seater.webp" },
      { name: "SML 24 To 27 Seater", image: "/cars/sml_24_to_27_seater.webp" },
      { name: "Bharat Benz 24 To 27 Seater", image: "/cars/bharat_benz_24_to_27_seater.webp" },
      { name: "Eicher 30 To 32 Seater", image: "/cars/eicher_30_to_32_seater.webp" },
      { name: "40 To 50 Seater Buses", image: "/cars/40_to_50_seater_buses.webp" },
    ],
  },
];

type CarsProps = { omitPageHeading?: boolean };

export default function Cars({ omitPageHeading = false }: CarsProps = {}) {
  const [selectedCategory, setSelectedCategory] = useState(vehicleSections[0].title);
  const selectedSection = useMemo(
    () => vehicleSections.find((section) => section.title === selectedCategory) ?? vehicleSections[0],
    [selectedCategory]
  );

  const renderSection = (section: (typeof vehicleSections)[number]) => (
    <div
      key={section.title}
      className="bg-gradient-to-br from-neutral-900 to-neutral-900/70 border border-neutral-800 rounded-2xl p-6 hover:shadow-[0_0_30px_rgba(20,184,166,0.14)] transition-all hover:border-teal-500/30"
    >
      <div className="mb-4 flex items-center justify-between border-b border-neutral-800 pb-3">
        {createElement(
          omitPageHeading ? "h2" : "h3",
          { className: "text-2xl font-bold text-white" },
          section.title
        )}
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-neutral-800 text-teal-300 border border-neutral-700">
          {section.vehicles.length} Vehicles
        </span>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {section.vehicles.map((vehicle) => (
          <li key={vehicle.name} className="text-neutral-300 bg-neutral-950/60 border border-neutral-800 rounded-xl p-3 hover:border-teal-500/30 transition-colors">
            <div className="mb-3 h-56 md:h-48 rounded-lg overflow-hidden border border-neutral-700 bg-neutral-900/70">
              <Image
                src={vehicle.image}
                alt={vehicle.name}
                width={800}
                height={500}
                unoptimized
                className="h-full w-full object-cover"
              />
            </div>
            {createElement(
              omitPageHeading ? "h3" : "h4",
              { className: "text-white font-semibold mb-3" },
              vehicle.name
            )}
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
  );

  return (
    <section id="fleet" className="py-16 md:py-24 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!omitPageHeading && (
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
        )}

        <div className="mb-5 md:hidden">
          <p className="mb-2 text-center text-sm font-semibold text-neutral-200">Select Category</p>
          <div className="flex flex-wrap justify-center gap-2">
            {vehicleSections.map((section) => {
              const isActive = selectedCategory === section.title;
              return (
                <button
                  key={section.title}
                  type="button"
                  onClick={() => setSelectedCategory(section.title)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                    isActive
                      ? "border-teal-500 bg-teal-500/20 text-teal-200"
                      : "border-neutral-700 bg-neutral-900 text-neutral-300"
                  }`}
                >
                  {section.title}
                </button>
              );
            })}
          </div>
        </div>

        <div className="md:hidden">
          {renderSection(selectedSection)}
        </div>

        <div className="hidden grid-cols-1 gap-6 md:grid md:grid-cols-2 lg:gap-8">
          {vehicleSections.map((section) => renderSection(section))}
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
