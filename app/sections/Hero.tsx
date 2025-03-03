"use client"
import Image from "next/image";
import hero1 from "../../assets/images/hero1.jpg"

function Hero() {
  return (
    <div>
      <Image
        src={hero1}
        width={1920}
        height={1080}
        alt={"Bastien Bonilla"}
         // Hace que la imagen cubra el contenedor
        objectFit="cover" // Ajusta la imagen sin deformarla
        objectPosition="center" // Centra la imagen
        priority //
      />
    </div>
  );
}

export default Hero
