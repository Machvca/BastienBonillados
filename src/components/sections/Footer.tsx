"use client";

import logoBastien from "../../../public/assets/images/logoBastien.png";
import Insta from "../../components/Insta";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bottom-0 w-full p-4 text-stone-900-900 text-center bg-transparent mt-auto backdrop-blur-md">
      <div className="grid grid-cols-3 items-center justify-items-center max-w-7xl mx-auto px-4">
        <a
          href="https://www.instagram.com/thetintinmickey/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-stone-900-700 cursor-pointer"
        >
          <Insta
            stroke="none"
            fill="#E6E6FA"
            className="drop-shadow-lg drop-shadow-white/50"
          />
        </a>
        <h1 className="text-sm text-magic-lavender">
          © {new Date().getFullYear()} {t("FOOTER_COPYRIGHT")}
        </h1>
        <Link href="/">
          <Image
            src={logoBastien}
            alt="Logo"
            className="w-12 h-14 cursor-pointer"
          />
        </Link>
      </div>
    </footer>
  );
}
