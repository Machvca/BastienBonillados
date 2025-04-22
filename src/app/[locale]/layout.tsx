import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { Syne } from "next/font/google";
import { Rubik } from "next/font/google";
import "../../app/globals.css";
import { Locale, routing } from "@/src/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const archivo = Archivo({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-archivo",
});

const syne = Syne({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-syne",
});

const rubik = Rubik({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "Bastien Bonilla",
  description: "My personal website",
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={`${syne.variable} ${archivo.variable} ${rubik.variable} font-syne antialiased flex flex-col min-h-screen overflow-x-hidden`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

{
}
