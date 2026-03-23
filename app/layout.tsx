import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shareef Travels | Kakinada & Rajahmundry",
  description: "Premium car travels in Kakinada & Rajahmundry. Local trips, outstation, airport pickups, and pilgrimage packages.",
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
