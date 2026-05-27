import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Memories Restaurant — Northam, Bideford",
  description:
    "Twelve seats. One sitting. Twenty-five years. Brett and Naomi's restaurant in North Devon — Thursday to Saturday, by reservation.",
  metadataBase: new URL("https://memoriesrestaurant.co.uk"),
  openGraph: {
    title: "Memories Restaurant",
    description:
      "Twelve seats. One sitting. Twenty-five years. Brett and Naomi's restaurant in North Devon.",
    type: "website",
    locale: "en_GB",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
