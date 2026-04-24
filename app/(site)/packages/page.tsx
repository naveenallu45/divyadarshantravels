import PageIntro from "@/components/PageIntro";
import Packages from "@/components/Packages";
import { pageMetadata } from "@/lib/seo-metadata";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "Tour Packages — Spiritual, Adventure & Coastal Trips",
  description:
    "Book spiritual pilgrimage tours, Andhra & South India packages, Araku and coastal trips, and custom itineraries from Vijayawada. WhatsApp for fares and availability.",
  path: "/packages",
  keywords: [
    "tour packages Vijayawada",
    "pilgrimage tour Andhra Pradesh",
    "Tirupati package from Vijayawada",
    "Araku tour package",
    "spiritual tours South India",
  ],
});

export default function PackagesPage() {
  return (
    <>
      <PageIntro
        title="Travel Packages"
        description="Spiritual tours, adventure and coastal getaways, and curated itineraries — comfortable vehicles and experienced drivers for every journey."
      />
      <Packages omitPageHeading />
    </>
  );
}
