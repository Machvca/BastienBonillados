"use client";
// import Image from "next/image";
import { cn } from "@/lib/utils";
// import hero1 from "../../assets/images/hero1.jpg";

function Hero() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-white">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        Backgrounds
      </p>
    </div>

    
      // <Image
      //   src={hero1}
      //   width={1080}
      //   height={720}
      //   alt={"Bastien Bonilla"}
      //   objectFit="cover"
      //   objectPosition="center"
      //   priority
      //   className="md:-mt-20"
      // /> 
    
  );
}

export default Hero;
