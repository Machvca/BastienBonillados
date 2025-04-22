'use client";';
import Footer from "@/src/components/sections/Footer";
import Navbar from "@/src/components/sections/Navbar";
import { useLocale, useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();
  console.log(locale, "locale");
  return (
    <main className="flex justify-center items-center flex-col ">
      <Navbar />
      <div className="w-full h-full bg-gradient-to-br from-[#0d0d0d] via-[#1a1a2e] to-[#3a0ca3]/80 text-9xl">
        {t("ABOUT")}
      </div>
      <Footer />
    </main>
  );
}
