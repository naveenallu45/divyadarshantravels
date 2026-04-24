import PageIntro from "@/components/PageIntro";
import Cars from "@/components/Cars";
import { pageMetadata } from "@/lib/seo-metadata";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "Available Vehicles — Sedans, Innova, Tempo Traveller & Buses",
  description:
    "Fleet includes Dzire, Ertiga, Innova Crysta, tempo travellers 12–17 seater, Urbania, and buses up to 40+ seats. Hire from Vijayawada for local and outstation trips.",
  path: "/vehicles",
  keywords: [
    "Innova hire Vijayawada",
    "tempo traveller Vijayawada",
    "12 seater tempo traveller",
    "mini bus hire Vijayawada",
    "cab booking Vijayawada",
  ],
});

export default function VehiclesPage() {
  return (
    <>
      <PageIntro
        title="Available Vehicles"
        description="Choose the right seating capacity for family trips, group tours, or corporate travel — all with professional drivers."
      />
      <Cars omitPageHeading />
    </>
  );
}
