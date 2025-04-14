"use client";
import Image from "next/image";
import { Spotlight } from "../components/ui/spotlight-new";
// import { cn } from "@/lib/utils";
import hero1 from "../../assets/images/hero1.jpg";
import { Spoiler } from "spoiled"

function Hero() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#0d0d0d] via-[#1a1a2e] to-[#3a0ca3]/20 ">
      {/* Fondo de cuadrícula */}
      {/* <div
        className={cn(
          "absolute inset-0 -z-10 h-screen bg-[#471510]",
          "[background-size:150px_150px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]"
        )}
      /> */}

      {/* Contenido principal en dos columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-screen h-screen items-center justify-bet md:px-44 py-24 ">
        {/* Texto */}
        <div className="text-center md:text-left ">
        <Spotlight />
          <h1 className="bg-gradient-to-b from-[#432259] to-stone-300 bg-clip-text pb-10 text-4xl md:text-9xl leading-24 font-bold text-transparent sm:text-7xl">
            Tintin the Magician
          </h1>
          <p className="text-sm md:text-xl font- text-stone-200">
            A magnetic performer with a unique style, Tintin captivates
            audiences with his blend of magic and humor. His shows are a
            delightful mix of illusion and entertainment.
          </p>
          <Spoiler>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 focus:ring-offset-slate-50 mt-4">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#432259_0%,#f4f4ff_40%,#fbf7ff_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-transparent px-3 py-1 text-lg font-medium text-[#432259] backdrop-blur-3xl">
                BOOK NOW
              </span>
            </button>
          </Spoiler>
        </div>

        {/* Imagen */}
        <div className="flex justify-center md:justify-end  p-1.5">
          <Image
            src={hero1}
            width={500}
            height={100}
            alt={"Tintin the Magician"}
            className="rounded-2xl object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

