import PageIntro from "@/components/PageIntro";
import Testimonials from "@/components/Testimonials";
import { pageMetadata } from "@/lib/seo-metadata";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "Customer Reviews & Testimonials",
  description:
    "Read what travellers say about Divya Darshan Travels — booking, drivers, vehicle comfort, and fair pricing for trips from Vijayawada.",
  path: "/testimonials",
  keywords: ["Divya Darshan Travels reviews", "Vijayawada cab reviews", "travel agency testimonials"],
});

export default function TestimonialsPage() {
  return (
    <>
      <PageIntro
        title="What Our Clients Say"
        description="Real feedback from families and groups who booked taxis, tour packages, and outstation trips with us."
      />
      <Testimonials omitPageHeading />
    </>
  );
}
