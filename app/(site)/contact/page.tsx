import PageIntro from "@/components/PageIntro";
import { createCallLink, createWhatsAppLink } from "@/lib/utils";
import { pageMetadata } from "@/lib/seo-metadata";
import { BUSINESS } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us — Location, Phone & WhatsApp",
  description:
    `Visit Divya Darshan Travels at ${BUSINESS.address.streetAddress}, ${BUSINESS.address.addressLocality} ${BUSINESS.address.postalCode}. Call ${BUSINESS.phoneDisplay} or message on WhatsApp for bookings.`,
  path: "/contact",
  keywords: [
    "Divya Darshan Travels contact",
    "Vijayawada taxi contact number",
    "travel agency Ballem Vaari Street",
  ],
});

export default function ContactPage() {
  return (
    <>
      <PageIntro
        title="Contact Divya Darshan Travels"
        description="Reach us any time for quotes, vehicle availability, and tour package details. We respond quickly on WhatsApp and phone."
      />
      <section className="border-b border-neutral-900 bg-neutral-950 py-14 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-8">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
              <div className="mb-3 flex items-center gap-3 text-teal-400">
                <FaMapMarkerAlt className="text-xl" />
                <h2 className="text-lg font-bold text-white">Office</h2>
              </div>
              <p className="text-neutral-300 leading-relaxed">
                {BUSINESS.address.streetAddress}
                <br />
                {BUSINESS.address.addressLocality} - {BUSINESS.address.postalCode}
                <br />
                {BUSINESS.address.addressRegion}, {BUSINESS.address.addressCountry}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={createCallLink()}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-neutral-700 bg-neutral-800 px-4 py-3 font-semibold text-white transition-colors hover:bg-neutral-700"
              >
                <FaPhoneAlt /> {BUSINESS.phoneDisplay}
              </a>
              <a
                href={createWhatsAppLink(
                  "Hello Divya Darshan Travels! I would like to enquire about your travel services. Please share details and pricing."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-green-500"
              >
                <FaWhatsapp className="text-xl" /> WhatsApp
              </a>
            </div>
            <a
              href={`mailto:${BUSINESS.email}`}
              className="flex items-center gap-3 text-neutral-300 transition-colors hover:text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900 text-rose-400">
                <FaEnvelope />
              </span>
              <span className="break-all font-medium">{BUSINESS.email}</span>
            </a>
            <p className="text-sm text-neutral-500">
              <Link href="/" className="text-teal-400 hover:underline">
                Back to home
              </Link>
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-bold text-white">Location on map</h2>
            <div className="overflow-hidden rounded-2xl border border-neutral-800">
              <iframe
                title="Divya Darshan Travels office map"
                src="https://maps.google.com/maps?q=Ballem%20Vaari%20Street%20Vijayawada%20521108&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width={600}
                height={320}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-[4/3] w-full md:aspect-auto md:h-[320px]"
              />
            </div>
            <p className="mt-4 text-sm text-neutral-400">Open 24 hours, 7 days a week for bookings and support.</p>
          </div>
        </div>
      </section>
    </>
  );
}
