import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BookingProvider } from "@/context/BookingContext";
import GlobalBookingModal from "@/components/booking/GlobalBookingModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Buddha Hospital & Research Institute | BHRI Gaya",
  description:
    "Buddha Hospital & Research Institute (BHRI) Gaya — Leading healthcare and medical education in Bihar. सेवा परमो धर्म:",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-[#14532d]`}
    >
      <body className="min-h-[100dvh] flex flex-col bg-white">
        <BookingProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          {/* Single global modal — controlled from anywhere via useBooking() */}
          <GlobalBookingModal />
        </BookingProvider>
      </body>
    </html>
  );
}
