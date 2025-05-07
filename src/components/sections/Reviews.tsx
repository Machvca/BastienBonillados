"use client";

import Image from "next/image";
import hpLogo from "../../../public/assets/images/hpLogo.png";
import revolutlogo from "../../../public/assets/images/revolutlogo.png";
import yamahalogo from "../../../public/assets/images/yamahalogo.png";
import tgvlogo from "../../../public/assets/images/tgvlogo.png";
import straumannlogo from "../../../public/assets/images/straumannlogo.png";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

  const logoData = [
    { src: hpLogo, alt: "HP", className: "h-6 md:h-10" },
    { src: revolutlogo, alt: "Revolut", className: "h-4 md:h-6" },
    { src: yamahalogo, alt: "Yamaha", className: "h-4 md:h-6" },
    { src: tgvlogo, alt: "TGV", className: "h-6 md:h-10" },
    { src: straumannlogo, alt: "Straumann", className: "h-6 md:h-10" },
  ];

  // Declaramos refs e inViews individualmente
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  const inView1 = useInView(ref1, { once: true });
  const inView2 = useInView(ref2, { once: true });
  const inView3 = useInView(ref3, { once: true });
  const inView4 = useInView(ref4, { once: true });
  const inView5 = useInView(ref5, { once: true });

  const logoRefs = [ref1, ref2, ref3, ref4, ref5];
  const logoInViews = [inView1, inView2, inView3, inView4, inView5];

  return (
    <section className="w-full flex flex-col items-center justify-center py-24 px-4 sm:px-8 relative overflow-hidden bg-stone-100">
      <h1 className="text-center text-lg sm:text-2xl md:text-5xl font-rubik font-bold text-[#621316]/90 mb-12 md:py-12">
        {t("REVIEWS_TITLE")}
      </h1>

      <div className="w-full grid grid-cols-3 md:grid-cols-5 px-12 lg:px-48 justify-center md:justify-evenly items-center gap-6 md:gap-10 mb-24">
        {logoData.map((logo, index) => (
          <motion.div
            key={index}
            ref={logoRefs[index]}
            initial={{ opacity: 0, y: 10 }}
            animate={logoInViews[index] ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.2, delay: index * 0.0 }}
            whileHover={{ scale: 1.3 }}
            className="transition-transform"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={100}
              className={`object-contain w-auto ${logo.className}`}
              priority
            />
          </motion.div>
        ))}
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
