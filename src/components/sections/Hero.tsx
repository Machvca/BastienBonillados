"use client";
import Image from "next/image";
import { Spotlight } from "../../components/ui/spotlight-new";
import hero1 from "../../../public/assets/images/hero1.jpg";
import { cn } from "@/src/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";

function Hero() {
  const t = useTranslations();


  return (
    <div className="grid grid-cols-1 xl:grid-cols-2  min-h-screen items-center px-4 sm:px-8 md:px-20 py-12 md:py-34 justify-center bg-stone-100 relative w-full overflow-hidden ">
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:80px_65px]",
          "[background-image:linear-gradient(to_right,#a3a3a3_1px,transparent_1px),linear-gradient(to_bottom,#573924_1px,transparent_1px)]"
        )}
      />

      {/* Texto */}
      <div className="relative z-10 text-center md:text-center">
        <Spotlight />
        <h1 className="bg-linear-to-b from-[#621316] to-stone-600 bg-clip-text z-50 py-6 md:pb-10 text-6xl md:text-9xl font-bold  text-transparent md:leading-26">
          {t("NAME")}
        </h1>
        <p className="text-md md:text-xl text-[#621316] font-rubik text-center mx-6 md:mx-24">
          {t("HERO_DESCRIPTION")}
        </p>

        <Link
          href={`/contact`}
          role="button"
          className="relative inline-flex h-10 font-rubik mb-6  items-center justify-center px-4 shadow-2xl border border-[#621316] hover:bg-[#621316] hover:text-stone-200 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-stone-900-400 focus:ring-offset-2 focus:ring-offset-stone-900-50 mt-8"
        >
          {t("BOOK_NOW")}
        </Link>
      </div>

      {/* Imagen */}
      <div className="flex justify-center items-center  md:mt-0 relative z-10 w-full ">
        <div className="relative w-full max-w-md h-[400px]  md:h-[700px]">
          <Image
            src={hero1}
            alt={t("NAME")}
            fill
            className="rounded-xl object-contain md:object-cover mask-r-from-95% mask-b-from-95% mask-radial-from-99% mask-radial-to-85% hover:mask-none hover:scale-110 transition-all duration-1000 ease-in-out"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
