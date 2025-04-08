"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import hero1 from "../../assets/images/hero1.jpg";

function Hero() {
  return (
    <div className="relative h-[55rem] w-full overflow-hidden ">
      {/* Fondo de cuadrícula */}
      <div
        className={cn(
          "absolute inset-0 -z-10 h-full w-full",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]"
        )}
      />

      {/* Contenido principal en dos columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center px-6 md:px-44   py-24 ">
        {/* Texto */}
        <div className="text-center md:text-left">
          <h1 className="bg-gradient-to-b from-[#5d0f0f] to-neutral-100 bg-clip-text py-8 text-4xl md:text-9xl leading-24 font-bold text-transparent sm:text-7xl">
            Tintin the Magician
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            autem corrupti dicta modi expedita praesentium tempore animi veniam
            blanditiis reprehenderit, itaque cupiditate, quae ab quod ea ut
            exercitationem ducimus ipsa? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Deleniti magni dignissimos architecto velit
            repellat reiciendis soluta iure tempora sed fugiat impedit
            doloremque, quibusdam modi earum nemo dolorum minus, debitis
            voluptates.
          </p>
        </div>

        {/* Imagen */}
        <div
          className="flex justify-center md:justify-end  p-1.5 "
        >
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
