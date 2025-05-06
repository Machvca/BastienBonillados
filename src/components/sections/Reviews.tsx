"use client";

import Image from "next/image";
import hpLogo from "../../../public/assets/images/hpLogo.png";
import revolutlogo from "../../../public/assets/images/revolutlogo.png";
import yamahalogo from "../../../public/assets/images/yamahalogo.png";
import tgvlogo from "../../../public/assets/images/tgvlogo.png";
import straumannlogo from "../../../public/assets/images/straumannlogo.png";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { useTranslations } from "next-intl";

export function Reviews() {
  const t = useTranslations();

  const testimonials = [
    {
      quote: t("REVIEW_1_QUOTE"),
      name: t("REVIEW_1_NAME"),
      title: t("REVIEW_1_TITLE"),
    },
    {
      quote: t("REVIEW_2_QUOTE"),
      name: t("REVIEW_2_NAME"),
      title: t("REVIEW_2_TITLE"),
    },
    {
      quote: t("REVIEW_3_QUOTE"),
      name: t("REVIEW_3_NAME"),
      title: t("REVIEW_3_TITLE"),
    },
    {
      quote: t("REVIEW_4_QUOTE"),
      name: t("REVIEW_4_NAME"),
      title: t("REVIEW_4_TITLE"),
    },
    {
      quote: t("REVIEW_5_QUOTE"),
      name: t("REVIEW_5_NAME"),
      title: t("REVIEW_5_TITLE"),
    },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center py-24 px-4 sm:px-8 relative overflow-hidden bg-stone-100">
      <h1 className="text-center text-lg sm:text-2xl md:text-5xl font-rubik font-bold text-[#621316]/90 mb-12 md:py-12">
        {t("REVIEWS_TITLE")}
      </h1>

      <div className="w-full grid grid-cols-3 md:grid-cols-5 px-12 lg:px-48 justify-center md:justify-evenly items-center gap-6 md:gap-10 mb-24">
        <Image
          src={hpLogo}
          alt="HP"
          width={80}
          height={80}
          className="object-contain h-6 md:h-10 w-auto"
          priority
        />
        <Image
          src={revolutlogo}
          alt="Revolut"
          width={100}
          height={100}
          className="object-contain h-4 md:h-6 w-auto"
          priority
        />
        <Image
          src={yamahalogo}
          alt="Yamaha"
          width={100}
          height={100}
          className="object-contain h-4 md:h-6 w-auto"
          priority
        />
        <Image
          src={tgvlogo}
          alt="TGV"
          width={100}
          height={100}
          className="object-contain h-6 md:h-10 w-auto"
          priority
        />
        <Image
          src={straumannlogo}
          alt="Straumann"
          width={150}
          height={100}
          className="object-contain h-6 md:h-10 w-auto"
          priority
        />
      </div>

      <div className="w-full max-w-6xl">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          className="bg-transparent"
        />
      </div>
    </section>
  );
}
