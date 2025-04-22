"use client";
import Image from "next/image";
import { Spotlight } from "../../components/ui/spotlight-new";
import hero1 from "../../../public/assets/images/hero1.jpg";
import { Spoiler } from "spoiled";
import { cn } from "@/src/lib/utils";

function Hero() {
  return (
    // <div className="relative w-full overflow-hidden md:pb-28">
    //   <div className="grid grid-cols-1 md:grid-cols-2  w-full min-h-screen items-center px-4 sm:px-8 md:px-20 py-24">
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen min-h-screen items-center px-4 sm:px-8 md:px-20 py-24  justify-center bg-white relative w-full overflow-hidden md:pb-28">
      <div
        className={cn(
          "absolute  inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#1c1917_1px,transparent_1px),linear-gradient(to_bottom,#1c1917_1px,transparent_1px)]"
        )}
      />
      {/* Texto */}
      <div className="text-center md:text-center  ">
        <Spotlight />
        <h1 className="bg-gradient-to-b from-[#432259] to-stone-900 bg-clip-text z-50 py-6 md:pb-10  text-6xl md:text-9xl  font-bold text-transparent md:leading-26">
          Tintin the Magician
        </h1>
        <p className="text-sm md:text-xl text-stone-900-200 font-rubik text-center">
          A magnetic performer with a unique style, Tintin captivates audiences
          with his blend of magic and humor. His shows are a delightful mix of
          illusion and entertainment.
        </p>
        <Spoiler>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-stone-900-300 focus:ring-offset-2 focus:ring-offset-stone-900-50 my-4 ">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#432259_0%,#f4f4ff_40%,#fbf7ff_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer font-rubik items-center justify-center rounded-full bg-transparent px-4 py-1 text-base md:text-lg font-medium text-[#432259] backdrop-blur-3xl">
              BOOK NOW
            </span>
          </button>
        </Spoiler>
      </div>

      {/* Imagen */}
      <div
        className="flex justify-center md:justify-center mt-8 md:mt-0 "
        style={{
          WebkitMaskImage:
            "linear-gradient(to left, transparent 50%, black 100%)",
          maskImage: "linear-gradient(to left, transparent 1%, black 40%)",
        }}
      >
        <Image
          src={hero1}
          alt="Tintin the Magician"
          className="rounded-2xl object-cover max-w-full h-auto "
          width={500}
          height={400}
          priority
        />
      </div>
    </div>
  );
}

export default Hero;
