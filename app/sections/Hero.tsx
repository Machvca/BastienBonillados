"use client";
import Image from "next/image";
import hero1 from "../../assets/images/hero1.jpg";

function Hero() {
  return (
    <div>
      <Image
        src={hero1}
        width={1920}
        height={1080}
        alt={"Bastien Bonilla"}
        objectFit="cover"
        objectPosition="center"
        priority
        className="md:-mt-20"
      />
    </div>
  );
}

export default Hero;
