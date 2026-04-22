import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Divya Darshan Travels | Vijayawada",
    template: "%s | Divya Darshan Travels",
  },
  description:
    "Divya Darshan Travels offers trusted 24/7 travel agency services in Vijayawada including mini bus taxi services, car rentals, taxi services, and on-demand drivers.",
  keywords: [
    "Divya Darshan Travels",
    "Vijayawada travel agency",
    "Mini bus taxi services",
    "Car rentals Vijayawada",
    "Taxi services Vijayawada",
    "On-demand drivers",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-neutral-950 text-neutral-50 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
