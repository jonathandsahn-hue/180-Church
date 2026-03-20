import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "180 Church NYC — You're Home.",
  description:
    "180 Church is a gospel-centered family in Union Square, NYC. Whether you're searching, skeptical, or just curious — you belong here.",
  openGraph: {
    title: "180 Church NYC — You're Home.",
    description:
      "A gospel-centered community in Union Square, NYC. Come as you are.",
    url: "https://www.180church.tv",
    siteName: "180 Church",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
