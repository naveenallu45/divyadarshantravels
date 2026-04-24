import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { defaultOpenGraphImage, SITE_NAME, SITE_URL } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Vijayawada Taxi, Mini Bus & Tour Packages`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Book taxis, Innova, tempo travellers, mini buses, and spiritual & adventure tour packages from Vijayawada. Divya Darshan Travels — 24/7 WhatsApp and phone support.",
  keywords: [
    "Divya Darshan Travels",
    "Vijayawada travel agency",
    "Vijayawada taxi booking",
    "mini bus taxi Vijayawada",
    "tempo traveller hire Vijayawada",
    "tour packages Vijayawada",
    "car rental with driver Vijayawada",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Vijayawada Travel & Cab Booking`,
    description:
      "Trusted travel agency for local rides, outstation cabs, tempo travellers, and curated tour packages across Andhra Pradesh and India.",
    images: [defaultOpenGraphImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Vijayawada`,
    description:
      "Taxi, mini bus, tempo traveller, and tour packages from Vijayawada. Book on WhatsApp or call 9581882895.",
    images: [defaultOpenGraphImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  ...(googleVerification
    ? {
        verification: {
          google: googleVerification,
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-neutral-950 text-neutral-50 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
