"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Insta from "../../components/Insta";
import logoBastien from "../../../public/assets/images/logoBastien.png";
import Image from "next/image";
import { Link } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../LanguageSelector";
import { BackgroundLines } from "../../components/ui/background-lines";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR DESKTOP */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 font-rubik transition-colors duration-600 ${
          isScrolled
            ? "bg-magic-dark/10  mx-24 rounded-4xl shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="hidden md:flex container mx-auto px-4 py-4 justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <Image
              src={logoBastien}
              alt="Logo"
              className="w-10 h-12 cursor-pointer"
            />
          </Link>

          {/* Links */}
          <div className="flex space-x-5 text-2xl text-magic-lavender">
            <Link
              href="/about"
              className="text-magic-lavender hover:text-magic-lavender/80 "
            >
              {t("ABOUT")}
            </Link>
            <Link
              href="/contact"
              className="text-magic-lavender hover:text-magic-lavender/80   "
            >
              {t("CONTACT")}
            </Link>
            <a
              href="https://www.instagram.com/thetintinmickey/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900-700 cursor-pointer"
            >
              <Insta stroke="none" fill="#E6E6FA" />
            </a>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* BOTÓN HAMBURGUESA - MÓVIL */}
      <button
        className="md:hidden z-50 fixed top-4 right-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X size={40} className="text-stone-400" />
        ) : (
          <Menu size={40} className="text-magic-lavender" />
        )}
      </button>

      {/* MENÚ MÓVIL */}
      <div
        className={`md:hidden fixed inset-0 z-40 text-stone-300 bg-gradient-to-br from-magic-lavender via-magic-lavender to-magic-lavender flex flex-col items-center justify-center gap-10 text-2xl transition-all duration-700 ease-in-out ${
          isOpen
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "-translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <BackgroundLines>
          <div className="flex flex-col items-center justify-center gap-8 text-4xl pt-72 font-rubik">
            <Link
              href="/about"
              className="hover:text-stone-200"
              onClick={() => setIsOpen(false)}
            >
              {t("ABOUT")}
            </Link>
            <Link
              href="/contact"
              className="hover:text-stone-200"
              onClick={() => setIsOpen(false)}
            >
              {t("CONTACT")}
            </Link>
            <a
              href="https://www.instagram.com/thetintinmickey/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-200"
              onClick={() => setIsOpen(false)}
            >
              Instagram
            </a>
            <LanguageSwitcher />
          </div>
        </BackgroundLines>
      </div>
    </>
  );
}

export default Navbar;
