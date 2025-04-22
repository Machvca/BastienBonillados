"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Insta from "../../components/Insta";
import logoBastien from "../../../public/assets/images/logoBastien.png";
import Image from "next/image";
import { Spotlight } from "../../components/ui/spotlight-new";
import { Link } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";

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
        <div className="text-white">{t("ABOUT")}</div>

        {/* Botón de menú hamburguesa */}
        <button
          className="md:hidden z-50 fixed top-4 right-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={30} className="text-[#bebcc0]" />
          ) : (
            <Menu size={30} className="text-[#bebcc0]" />
          )}
        </button>

        {/* Menú de navegación (escritorio) */}
        <div className="hidden md:flex space-x-6 text-xl ">
          <Link
            href="/about"
            className="bg-gradient-to-b from-[#432259] to-neutral-100 bg-clip-text hover:text-stone-900-300 text-transparent"
          >
            About Me
          </Link>
          <button className="relative -mt-2 inline-flex h-10  overflow-hidden rounded-full items-center focus:outline-none focus:ring-2 focus:ring-stone-900-300 focus:ring-offset-2 focus:ring-offset-stone-900-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#432259_0%,#f4f4ff_40%,#fbf7ff_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-transparent px-3 py-1 text-lg font-medium text-[#432259] backdrop-blur-3xl">
              Contact
            </span>
          </button>

          <a
            href="https://www.instagram.com/thetintinmickey/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-900-700 cursor-pointer"
          >
            <Insta stroke="none" fill="#bebcc0" />
          </a>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full text-stone-900-400 bg-gradient-to-br from-[#0d0d0d] via-[#1a1a2e] to-[#3a0ca3] md:pb-28 flex flex-col items-center justify-center gap-6 text-8xl transition-transform duration-700 ${
          isOpen ? "transtone-900-x-0" : "-transtone-900-x-full"
        }`}
      >
        <Spotlight />

        <div className="flex flex-col items-center justify-center gap-6 text-8xl sm:px-24">
          <a
            href="#"
            className="hover:text-indigo-900"
            onClick={() => setIsOpen(false)}
          >
            About Me
          </a>
          <a
            href="#"
            className="hover:text-indigo-900"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <a
            href="https://www.instagram.com/thetintinmickey/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-900"
            onClick={() => setIsOpen(false)}
          >
            Instagram
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
