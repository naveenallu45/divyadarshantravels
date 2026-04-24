/** Canonical production URL — used for metadata, sitemap, and structured data. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://www.divyadarshantravels.com";

export const SITE_NAME = "Divya Darshan Travels";

export const BUSINESS = {
  name: SITE_NAME,
  description:
    "Trusted travel agency in Vijayawada offering taxi, car rental, mini bus, tempo traveller, and tour packages across Andhra Pradesh and India.",
  phoneDisplay: "9581882895",
  phoneE164: "+919581882895",
  email: "divyadarshantravels0199@gmail.com",
  address: {
    streetAddress: "Ballem Vaari Street",
    addressLocality: "Vijayawada",
    postalCode: "521108",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  geo: {
    latitude: 16.5062,
    longitude: 80.648,
  },
} as const;

export const defaultOpenGraphImage = {
  url: `${SITE_URL}/images/divya-darshan-logo.png`,
  width: 512,
  height: 512,
  alt: `${SITE_NAME} logo`,
} as const;
