import logoBastien from "../../assets/images/logoBastien.png";
import Insta from "../../app/components/Insta";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bottom-0 w-full p-4 text-slate-900 text-center bg-[#1a1a2e] mt-auto backdrop-blur-md">
      <div className="grid grid-cols-3 items-center justify-items-center max-w-7xl mx-auto px-4">
        <a
          href="https://www.instagram.com/thetintinmickey/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-slate-700 cursor-pointer"
        >
          <Insta stroke="none" fill="#e7e5e4" />
        </a>
        <h1 className="text-sm text-[#e7e5e4]">
          © {new Date().getFullYear()} Bastien Bonilla All rights reserved.
        </h1>
        <a href="#">
          <Image
            src={logoBastien}
            alt="Logo"
            className="w-14 h-16 cursor-pointer"
          />
        </a>
      </div>
    </footer>
  );
}
