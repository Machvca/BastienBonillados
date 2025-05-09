"use client";
import Image from "next/image";
import hero3 from "../../../public/assets/images/hero3.jpg";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Spotlight } from "../ui/spotlight-new";
import { Spoiler } from "spoiled";

function Hero() {
  const t = useTranslations();

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2  min-h-screen items-center px-4 sm:px-8 md:px-20 py-20 md:py-34 justify-center  relative w-full overflow-hidden">
      {/* Fondo con líneas */}
      {/* Texto */}
      <div className="relative z-10 text-center px-4">
        <Spotlight />
        <h1 className="bg-linear-to-br animate-blurred-fade-in  md:leading-26 animate-delay-500 from-magic-dark/40 to-magic-lavender bg-clip-text text-transparent font-bold text-4xl sm:text-6xl md:text-8xl xl:text-9xl leading-tight break-words">
          {t("NAME")}
        </h1>
        <p className="text-sm mt-6 md:text-xl text-magic-lavender animate-blurred-fade-in animate-delay-100 font-rubik text-center mx-auto max-w-xl">
          {t("HERO_DESCRIPTION")}
        </p>

        <Spoiler>
          <Link
            href={`/contact`}
            role="button"
            className="relative animate-delay-600 animate-jiggle hover:animate-scale ease-in-out inline-flex h-10 font-rubik mb-6 items-center justify-center px-4 shadow-2xl border border-magic-night bg-magic-dark text-magic-lavender  overflow-hidden rounded-md focus:outline-none focus:ring-2 focus:ring-stone-200 focus:ring-offset-2 focus:ring-offset-stone-900 mt-8"
          >
            {t("BOOK_NOW")}
          </Link>
        </Spoiler>
      </div>

      {/* Imagen */}
      <div className="flex justify-center items-center md:mt-0 relative z-10 w-full px-4">
        <div className="relative w-full hover:scale-110 max-w-xs sm:max-w-md h-[350px] sm:h-[400px] md:h-[600px] xl:h-[700px] overflow-hidden rounded-xl">
          <Image
            src={hero3}
            alt={t("NAME")}
            fill
            className="rounded-xl mask-r-from-80% mask-b-from-80% mask-from-90% mask-to-95%  object-cover transition-all duration-1000 ease-in-out hover:scale-125 "
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
