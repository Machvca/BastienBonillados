import type { Metadata } from "next";
// import { Archivo} from "next/font/google";
import {  Syne } from "next/font/google";
// import { Rubik } from "next/font/google";
import "./globals.css";

import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";

// const archivo = Archivo({
//   display: "swap",
//   weight: "variable",
//   subsets: ["latin"],
//   variable: "--font-archivo",
// });

const syne = Syne({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-syne",
});

// const rubik = Rubik({
//   display: "swap",
//   weight: "variable",
//   subsets: ["latin"],
//   variable: "--font-rubik",
// });

export const metadata: Metadata = {
  title: "Bastien Bonilla",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} font-syne antialiased flex flex-col min-h-screen overflow-x-hidden`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
