import PageIntro from "@/components/PageIntro";
import Services from "@/components/Services";
import { pageMetadata } from "@/lib/seo-metadata";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "Travel Services — Taxi, Mini Bus, Car Rental & Drivers",
  description:
    "Travel agency services in Vijayawada: mini bus taxi, car rentals with driver, door-to-door taxi, on-demand drivers, and 24/7 support. Transparent pricing and professional drivers.",
  path: "/services",
  keywords: [
    "travel agency Vijayawada",
    "mini bus taxi Vijayawada",
    "car rental with driver Vijayawada",
    "taxi service Vijayawada",
    "on demand driver Vijayawada",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        title="Travel Services in Vijayawada"
        description="Complete trip support with mini bus, taxi, car rentals, and on-demand drivers — punctual, transparent, and available around the clock."
      />
      <Services omitPageHeading />
    </>
  );
}
