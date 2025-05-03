'use client";';
import Footer from "@/src/components/sections/Footer";
import Image from "next/image";

import hero1 from "../../../../public/assets/images/hero1.jpg";
import Navbar from "@/src/components/sections/Navbar";
// import { useLocale, useTranslations } from "next-intl";

export default function Home() {
  // const t = useTranslations();
  // const locale = useLocale();
  // console.log(locale, "locale");
  return (
    <main className=" ">
      <Navbar />
      <div className="w-full h-full bg-transparent text-9xl my-40 grid grid-cols-2 items-center justify-center text-left px-20">
        {/* {t("ABOUT")} */}
        <p className="text-sm md:text-2xl font-rubik">
          Bastien is a French-born magician and stand-up comedian based in
          Barcelona, Spain. With over 10+ years of experience in the magic
          industry and having lived internationally all his life (France,
          Netherlands, Morocco, Canada, and Spain), he successfully connects and
          adapts to every audience from any cultural background. He has
          performed shows in French, English, Spanish - and sometimes even all
          three at once! Bastien mixes his love of magic and stand-up to create
          a fun and unforgettable experience - relating to the audience while
          performing feats only feasibly possible in their wildest dreams.
        </p>

        <Image
          src={hero1}
          alt="Tintin the Magician"
          className="rounded-2xl object-cover max-w-full h-auto "
          width={500}
          height={400}
          priority
        />
      </div>

      <Footer />
    </main>
  );
}
