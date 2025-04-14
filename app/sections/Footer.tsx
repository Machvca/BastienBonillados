import logoBastien from "../../assets/images/logoBastien.png";
import Insta from "../../app/components/Insta";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" bottom-0 w-ful p-4 text-slate-900 text-center bg-transparent mt-auto backdrop-blur-md text-sm  ">
      <div className="grid grid-cols-3 items-center justify-items-center mx-144">
        <a
          href="https://www.instagram.com/thetintinmickey/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-slate-700 cursor-pointer"
        >
          <Insta stroke="none" fill="#432259" />
        </a>
        <h1>
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
