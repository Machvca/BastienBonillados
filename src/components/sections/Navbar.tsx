"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Insta from "../../components/Insta";
import logoBastien from "../../../public/assets/images/logoBastien.png";
import Image from "next/image";
import { Spotlight } from "../../components/ui/spotlight-new";
import { Link } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../LanguageSelector";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations();
  // Detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30); // Cambia cuando baja más de 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed  font-rubik top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#432259] to-neutral-100 bg-clip-text transition-colors duration-600 ${
        isScrolled ? "bg-stone-900-900/20 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#">
          <Image
            src={logoBastien}
            alt="Logo"
            className=" w-10 h-12 cursor-pointer"
          />
        </a>
        <div className="text-black">{t("ABOUT")}</div>

        {/* Botón de menú hamburguesa */}
        <button
          className="md:hidden z-50 fixed top-4 right-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={40} className="text-stone-400" />
          ) : (
            <Menu size={40} className="text-[#621316]" />
          )}
        </button>

        {/* Menú de navegación (escritorio) */}
        <div className="hidden md:flex space-x-6 text-xl ">
          <Link
            href="/about"
            className="text-[#621316] hover:text-[#621316]/20"
          >
            About Me
          </Link>
          <Link
            href="/contact"
            className="text-[#621316] hover:text-[#621316]/20"
          >
            Contact
          </Link>

          <a
            href="https://www.instagram.com/thetintinmickey/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-900-700 cursor-pointer"
          >
            <Insta stroke="none" fill="#621316" />
          </a>
          <LanguageSwitcher />
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full text-stone-400 bg-gradient-to-br from-[#621316] via-[#621316] to-[#621316] pb-28 flex flex-col items-center justify-center gap-6 text-4xl transition-all duration-700 ease-in-out ${
          isOpen
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "-translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <Spotlight />

        <div className="flex flex-col items-center justify-center gap-6 text-8xl">
          <a
            href="#"
            className="hover:text-stone-200"
            onClick={() => setIsOpen(false)}
          >
            About Me
          </a>
          <a
            href="#"
            className="hover:text-stone-200"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
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
      </div>
    </nav>
  );
}

export default Navbar;
