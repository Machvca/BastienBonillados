"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Insta from "../../app/components/Insta";
import logoBastien from "../../assets/images/logoBastien.png";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`fixed font-syne top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#432259] to-neutral-100 bg-clip-text transition-colors duration-600 ${
        isScrolled ? "bg-slate-900/20 shadow-md" : "bg-transparent"
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

        {/* Botón de menú hamburguesa */}
        <button
          className="md:hidden z-50 fixed top-4 right-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={30} className="text-[#432259]" />
          ) : (
            <Menu size={30} className="text-[#432259]" />
          )}
        </button>

        {/* Menú de navegación (escritorio) */}
        <div className="hidden md:flex space-x-6 text-xl ">
          <a
            href="#"
            className="bg-gradient-to-b from-[#432259] to-neutral-100 bg-clip-text hover:text-slate-300 text-transparent"
          >
            About Me
          </a>
          <button className="relative -mt-2 inline-flex h-10  overflow-hidden rounded-full items-center focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#432259_0%,#f4f4ff_40%,#fbf7ff_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-transparent px-3 py-1 text-lg font-medium text-[#432259] backdrop-blur-3xl">
              Contact
            </span>
          </button>

          <a
            href="https://www.instagram.com/thetintinmickey/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-700 cursor-pointer"
          >
            <Insta stroke="none" fill="#bebcc0" />
          </a>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-slate-100 flex flex-col items-center justify-center gap-6 text-8xl transition-transform duration-700 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
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
