import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr.WebAgency",
  description: "Your Digital Prescription for Growth",
  keywords: ["web development", "web development agency", "web design"],
  category: "Web Development",
  applicationName: "Dr.WebAgency",
  openGraph: {
    title: "Dr.WebAgency",
    description: "Your Digital Prescription for Growth",
    url: "https://www.drweb.agency/",
    type: "website",
    siteName: "Dr.WebAgency",
    images: [
      {
        url: "https://i.imgur.com/khl5k65.png",
        width: 1200,
        height: 630,
        alt: "Dr.WebAgency",
      },
    ],
  },
  alternates: {
    canonical: "https://www.drweb.agency/",
    languages: {
      "en-US": "https://www.drweb.agency/",
    },
    types: {
      "application/rss+xml": "https://www.drweb.agency/rss",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth w-full h-full overflow-x-hidden">
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <CustomCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}
