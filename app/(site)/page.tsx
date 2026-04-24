import Cars from "@/components/Cars";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { pageMetadata } from "@/lib/seo-metadata";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "Vijayawada Travel Agency | Taxi, Mini Bus & Tour Packages",
  description:
    "Divya Darshan Travels — 24/7 taxi, car rental, mini bus, tempo traveller, and spiritual & adventure tour packages from Vijayawada. Book on WhatsApp or call 9581882895.",
  path: "/",
  keywords: [
    "Divya Darshan Travels",
    "Vijayawada taxi",
    "Vijayawada travel agency",
    "mini bus Vijayawada",
    "tempo traveller Vijayawada",
    "car rental Vijayawada",
    "pilgrimage tour packages Andhra Pradesh",
    "outstation cab Vijayawada",
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Packages />
      <Cars />
      <Testimonials />
    </>
  );
}
